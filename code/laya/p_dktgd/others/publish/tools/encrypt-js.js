var JavaScriptObfuscator = require('javascript-obfuscator');
var fs = require('fs');
var path = require('path');
const child_process = require('child_process');

let bundlePath = path.join(__dirname, '/../../../bin/js/bundle.js');
let readUTF8 = fs.readFileSync(bundlePath, {
    encoding: 'utf-8'
});

// 重新编译bundle,防止防止多次加密
console.log("recombie start");
child_process.execSync("webpack --config others/webpack_config/webpack-config-for-game-once.js",
    {
        encoding: 'utf-8'
    });
console.log("recombie end");

console.log("encrypt start:", bundlePath);

let obfuscationResult = JavaScriptObfuscator.obfuscate(readUTF8,
    {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,
        simplify: true,
        stringArrayShuffle: true,
        splitStrings: true,
        stringArrayThreshold: 1,
        debugProtection: false,
        disableConsoleOutput: false,
    }
);

fs.writeFileSync(bundlePath, obfuscationResult.getObfuscatedCode());

console.log("encrypt finished", bundlePath);