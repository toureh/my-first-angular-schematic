import {
  Rule,
  SchematicContext,
  Tree,
  url,
  apply,
  template,
  mergeWith,
  SchematicsException,
  move,
} from "@angular-devkit/schematics";

import { Schema } from "./schema";

import { strings } from "@angular-devkit/core";

import { parseName } from "@schematics/angular/utility/parse-name";
import { buildDefaultPath } from "@schematics/angular/utility/project";

export function hello(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const workspaceConfigBuffer = tree.read("angular.json");

    if (!workspaceConfigBuffer) {
      throw new SchematicsException("Not an Angular CLI workspace");
    }

    const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString());
    const projectName = _options.project || workspaceConfig.defaultProject;
    const project = workspaceConfig.projects[projectName];

    const defaultProjectPath = buildDefaultPath(project);

    const parsedPath = parseName(defaultProjectPath, _options.name);

    const { name, path } = parsedPath;

    const sourceTemplates = url("./files");

    const sourceParamatrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings,
        name,
      }),
      move(path),
    ]);

    return mergeWith(sourceParamatrizedTemplates)(tree, _context);
  };
}
