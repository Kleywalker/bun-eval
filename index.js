const content = `"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const case_1 = require("case");
const result = (0, case_1.kebab)('Test Content');
exports.default = result;
`;

const result = eval(content);
console.log(result);
