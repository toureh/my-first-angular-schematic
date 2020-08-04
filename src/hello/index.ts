import {
  Rule,
  SchematicContext,
  Tree,
  url,
  apply,
  template,
  mergeWith,
} from "@angular-devkit/schematics";
import { Schema } from "./schema";
import { strings } from "@angular-devkit/core";

export function hello(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplates = url("./files");

    const sourceParamatrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings,
      }),
    ]);

    return mergeWith(sourceParamatrizedTemplates)(tree, _context);
  };
}
