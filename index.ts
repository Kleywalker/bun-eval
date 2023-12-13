import * as tsc from "typescript";

const content = `import { kebab } from "case"; 
const result = kebab('Test Content'); 
export default result;`;

const tscTranspiled = tsc.transpile(content, {
  module: tsc.ModuleKind.CommonJS,
  target: tsc.ScriptTarget.ES2018,
});
console.log(tscTranspiled);

const bunTranspiler = new Bun.Transpiler({
  loader: "ts",
  deadCodeElimination: false,
  minifyWhitespace: false,
  target: "node",
  allowBunRuntime: true,
});
const bunTranspiled = bunTranspiler.transformSync(content);
console.log(bunTranspiled);

try {
  const tscResult = eval(tscTranspiled);
  console.log(tscResult);
} catch (error) {
  console.log(error);
}

try {
  const bunResult = eval(bunTranspiled);
  console.log(bunResult);
} catch (error) {
  console.log(error);
}
