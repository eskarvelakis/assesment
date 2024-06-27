import {
  AstBuilder,
  GherkinClassicTokenMatcher,
  Parser,
} from "@cucumber/gherkin";
import { pretty } from "@cucumber/gherkin-utils";
import { IdGenerator, Step } from "@cucumber/messages";
import * as fs from "fs";
import * as filepath from "path";

export function mergeBackground(path: string): string {
  if (!path.endsWith(".feature")) {
    return path;
  }

  try {
    const fileContent = fs.readFileSync(path, { encoding: "utf-8" });

    // See: https://github.com/cucumber/gherkin#library
    const uuidFn = IdGenerator.uuid();
    const builder = new AstBuilder(uuidFn);
    const matcher = new GherkinClassicTokenMatcher();
    const parser = new Parser(builder, matcher);

    const gherkinDocument = parser.parse(fileContent);

    if (!gherkinDocument.feature) {
      return path;
    }

    // Children can be: background, scenarios, ...
    const children = gherkinDocument.feature.children;
    // Look for a background child first. Remember its steps, then delete it.
    // Afterwards, add its steps to each scenario.
    const backgroundSteps: Array<Step> = [];
    // Find background.

    for (const child of children) {
      if (child.background) {
        for (const step of child.background.steps) {
          backgroundSteps.push(step);
        }
        // Remove background from feature file entirely.
        gherkinDocument.feature.children = children.filter(
          (scenario) => scenario !== child,
        );
      }
      break;
    }
    // Copy background to scenarios.
    for (const child of gherkinDocument.feature.children) {
      if (child.scenario) {
        child.scenario.steps = [...backgroundSteps, ...child.scenario.steps];
      }
    }

    const generatedFeaturesDir = filepath.join(
      __dirname,
      "../e2e/features/generated_features",
    );
    // Create the generated_features folder if it doesn't exist
    if (!fs.existsSync(generatedFeaturesDir)) {
      fs.mkdirSync(generatedFeaturesDir, { recursive: true });
    }
    const fileName = filepath.basename(path);
    const filePath = filepath.join(
      generatedFeaturesDir,
      fileName.replace(".feature", ".generated.feature"),
    );
    fs.writeFileSync(filePath, pretty(gherkinDocument, "gherkin"));
    return filePath;
  } catch (error) {
    console.error(`Error reading file: ${path}`);
    console.error(error);
    return path;
  }
}
