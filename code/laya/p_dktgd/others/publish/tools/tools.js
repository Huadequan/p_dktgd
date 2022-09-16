
const fs = require("fs");
const process = require("process");
const path = require("path");
const shelljs = require("shelljs");
const images = require('images');
const xlsx = require('node-xlsx');

var workPath = process.cwd();
//#region 拷贝图标
function resize_img(path, outpath, size) {
    console.log(outpath);
    images(path).size(size, size).save(outpath, {
        quality: 100
    });
}
// node others/publish/tools/tools.js img
function init_icon_imgs() {
    let icon_path = path.join(workPath, `../../../art/UI/icon/512x512.png`);
    //111 let sizes = [220, 148, 124];
    let icons = ["220.jpg", "148.jpg", "124.png", "120.jpg"];
    let icon_dir = path.join(workPath, `../../../art/UI/icon/`);
    console.log(icon_path, icon_dir);
    for (let i = 0; i < icons.length; i++) {
        const sz = icons[i].split('.');
        resize_img(icon_path, icon_dir + icons[i], parseInt(sz[0]));
    }
    //拷贝 ov 初始图标
    let from_icon = path.join(workPath, `../../../art/UI/icon/256x256.png`);
    fs.copyFileSync(from_icon, path.join(workPath, 'others/publish/templates/oppo/256x256.png'));
    fs.copyFileSync(from_icon, path.join(workPath, 'others/publish/templates/vivo/src/256x256.png'));

}
//#endregion

//#region 检查文件
var tempFileNames = [];
var cnFileNames = [];
var tempDirNames = [];
var needRenameFiles = [];
var count = 0;
var warnNames = [];
function withChinese(s) {
    var patrn = /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
    if (!patrn.exec(s)) {
        return false;
    }
    else {
        return true;
    }
}
function checkFiles(currentPath) {
    let files = fs.readdirSync(currentPath);
    for (let i = 0; i < files.length; ++i) {
        let fileName = files[i];
        let filePath = path.join(currentPath, fileName);
        let fileStat = fs.statSync(filePath);
        if (fileStat.isDirectory()) {
            if (fileName.indexOf("#") >= 0 || fileName.indexOf(" ") >= 0) {
                tempDirNames.push(filePath);
            }
            checkFiles(filePath);
        } else {
            if (fileName.indexOf("#") >= 0 || fileName.indexOf(" ") >= 0) {
                tempFileNames.push(filePath);
                needRenameFiles.push(fileName);
            }
            if (withChinese(fileName)) {
                cnFileNames.push(filePath);
            }
            minifyJson(filePath);
            count++;
        }


    }
}

function minifyJson(f) {
    if (f.endsWith(".ltcb.ls")) {
        warnNames.push(f);
        return;
    }
    if (f.endsWith(".lanit.ls")) {
        return;
    }
    try {
        if (f.endsWith('.ls') || f.endsWith('.lh') || f.endsWith('.lmat') || f.endsWith('.json')) {
            console.log("minify json", f);
            let jsonStr = fs.readFileSync(f, {
                "encoding": "utf-8"
            });
            let outJson = JSON.parse(jsonStr);
            let outputjson = JSON.stringify(outJson);
            fs.writeFileSync(f, outputjson, {
                "encoding": "utf-8"
            });
        }
    } catch (error) {
        console.error(error);
    }

    if (process.argv[3] == "html4399") {
        //bin 文件修改
        if (f.endsWith('.bin')) {
            let nm = f.replace('.bin', ".fui");
            console.log(nm);
            fs.renameSync(f, nm);
        }
    }

}
function check() {
    var res_dir = path.join(process.cwd(), "bin/res/");
    if (process.argv[3] == "html4399") {
        res_dir = path.join(process.cwd(), "release/html4399/res");
    }
    checkFiles(res_dir);
    console.log(`检查完成，资源包文件总数：${count}`);
    console.log("");

    for (let i = 0; i < warnNames.length; i++) {
        console.log("\x1B[31m%s\x1B[0m", `!!查看场景导出设置是否正确：-${warnNames[i]}`);
    }
    for (let i = 0; i < cnFileNames.length; i++) {
        console.log("\x1B[31m%s\x1B[0m", `!!文件名字包含中文：-${cnFileNames[i]}`);
    }
    for (let i = 0; i < tempDirNames.length; i++) {
        console.log("不安全目录：" + tempDirNames[i]);
    }
    for (let i = 0; i < tempFileNames.length; i++) {
        console.log("不安全文件：" + tempFileNames[i]);
    }
    if (process.argv[3] == "html4399") {
        console.log("html4399");
        rename_unsafe_files();
        check_file_dependence(path.join(workPath, "release/html4399/res/export/"));
        let bundle = path.join(process.cwd(), "release/html4399/js/bundle.js");
        let bd_str = fs.readFileSync(bundle, {
            "encoding": "utf-8"
        });
        let out_str = ReplaceAll(bd_str, 'https', 'ht.t.ps');
        fs.writeFileSync(bundle, out_str, {
            "encoding": "utf-8"
        });
        check_file(bundle);
    }
}
function rename_unsafe_files() {
    // let library = path.join(workPath, "release/html4399/res/export/")
    // let files = fs.readdirSync(library);
    // files.forEach(e => {
    //     console.log("html4399 rename:" + e);
    //     let nm = ReplaceAll(e, " ", "_");
    //     console.log(e, nm);
    //     fs.renameSync(library + e, library + nm);
    // });
    // let ligthPath = path.join(workPath, "release/html4399/res/export/Conventional/Directional Light.lh");
    // console.log("html4399 rename:" + 'Directional Light.lh');
    // let newLigthPath = ReplaceAll(ligthPath, " ", "_");
    // fs.renameSync(ligthPath, newLigthPath);
    console.log("rename unsafe--");
    tempFileNames.forEach(fileName => {
        console.log("rename--" + fileName);
        let newName = ReplaceAll(fileName, ' ', '_');
        newName = ReplaceAll(newName, '#', '_');
        fs.renameSync(fileName, newName);
    });
}
function check_file(filePath) {

    let jsonStr = fs.readFileSync(filePath, {
        "encoding": "utf-8"
    });
    let outStr = jsonStr;
    needRenameFiles.forEach(fileName => {
        // console.log('check--', fileName);
        let newName = ReplaceAll(fileName, ' ', '_');
        newName = ReplaceAll(newName, '#', '_');
        outStr = ReplaceAll(outStr, fileName, newName);
    })
    if (filePath.endsWith('.ls') || filePath.endsWith('.lh') || filePath.endsWith('.lmat')) {
        let outJson = JSON.parse(outStr);
        let outputjson = JSON.stringify(outJson);
        fs.writeFileSync(filePath, outputjson, {
            "encoding": "utf-8"
        });
    } else {
        fs.writeFileSync(filePath, outStr, {
            "encoding": "utf-8"
        });
    }

}
function check_file_dependence(currentPath) {
    let files = fs.readdirSync(currentPath);
    for (let i = 0; i < files.length; ++i) {
        let fileName = files[i];
        let filePath = path.join(currentPath, fileName);
        let fileStat = fs.statSync(filePath);

        if (fileStat.isDirectory()) {
            check_file_dependence(filePath);
        } else {
            if (fileName.endsWith(".ltcb.ls") || fileName.endsWith(".lanit.ls")) {
                return;
            }
            if (fileName.endsWith('.ls') || fileName.endsWith('.lh') || fileName.endsWith('.lmat') || fileName.endsWith('.json')) {
                check_file(filePath);
            }
        }


    }
}
function ReplaceAll(str, oldStr, newStr) {
    while (str.indexOf(oldStr) >= 0) {
        str = str.replace(oldStr, newStr);
    }
    return str;
}

//#endregion

//#region 导出配置表
var xlsx_path = path.join(process.cwd(), "../../../design/excel/");
var outjsonPath = path.join(process.cwd(), "bin/res/config/");
var tsPath = path.join(process.cwd(), "src/script/config/");
// console.log(xlsx_path);
var xlsx_files = fs.readdirSync(xlsx_path);
var currentXlsx = '';

function exportExcel(fileName) {
    if (fileName.startsWith("~$")) return;
    let fullPath = xlsx_path + fileName;
    var data = xlsx.parse(fullPath)[0];


    var isConst = fileName.endsWith("_const.xlsx");
    var fmtName = formatName(fileName.replace(".xlsx", ""));
    currentXlsx = fileName;
    console.log(`开始导出：${fileName}`);
    let outData = parseData(isConst, data.data);

    writeTs(fmtName, isConst, outData);
    writeJson(fmtName, outData);
}
function parseData(isConst, data) {
    let outJson = {};
    let outTypes = "";

    if (!isConst) {
        let notes = data[0];
        let types = data[1];
        let varNames = data[2];
        for (let i = 0; i < types.length; i++) {
            const type = types[i];
            if (type != "skip") {
                outTypes += `/**${notes[i]}*/  
        readonly ${varNames[i]}:${formatType(type)};
        `
            }
        }
        for (let i = 3; i < data.length; i++) {
            let row = data[i];
            let json = {}
            if (row && row[0]) {
                for (let j = 0; j < types.length; j++) {
                    var item = {};
                    const vname = varNames[j];
                    if (types[j] != "skip") {
                        if (!checkType(types[j], row[j])) {
                            console.log("\x1B[31m%s\x1B[0m", `!!请检查|${currentXlsx}|配表-第${i + 1}行-字段-${vname}`);
                            json[vname] = getDefalult(types[j])
                        } else {
                            json[vname] = getValue(types[j], row[j]);
                        }
                    }
                }
                outJson[row[0]] = json;
            }
        }

    } else {
        outTypes = "";
        for (let i = 1; i < data.length; i++) {
            var item = data[i];
            if (item && item[0]) {
                outTypes += `/**${item[3]}*/
        readonly ${item[0]}:${formatType(item[1])};
        `
                if (!checkType(item[1], item[2])) {
                    console.log("\x1B[31m%s\x1B[0m", `!!!请检查|${currentXlsx}|配表-第${i + 1}行-字段-${item[0]}`);
                    outJson[item[0]] = getDefalult(item[1]);
                } else {
                    outJson[item[0]] = getValue(item[1], item[2]);
                }
            }
        }
    }
    return {
        types: outTypes,
        json: outJson
    }
}
function formatType(type) {
    switch (type) {
        case "int":
        case "float":
            return "number";
        case "int[]":
        case "float[]":
            return "number[]"
        default:
            return type;
    }
}
function checkType(type, v) {
    switch (type) {
        case "int":
        case "float":
            return (typeof v == typeof (1));
        case "int[]":
        case "float[]":
        case "string[]":
            if (typeof v == 'string') {
                var str = v.replace('[', '').replace(']', '');
                var arr = str.split(',');
                return (typeof arr == typeof ([]));
            }
            return false;
        case "boolean":
            return (typeof v == typeof (false));
        case "string":
            return (typeof v == typeof ("a") || typeof v == typeof (1));
        // case "string[]":
        //     console.log(typeof v, v)
        //     return (typeof v == typeof (["ab"]));
        default:
            return false;
    }
}
function getValue(type, v) {
    switch (type) {
        case "int":
            return v;
        case "float":
            return v;
        case "int[]":
            {
                if (v == "[]" || v == '') {
                    return [];
                }
                var str = v.replace('[', '').replace(']', '');
                var arr = str.split(',');
                var intArr = [];
                for (let i = 0; i < arr.length; i++) {
                    const element = parseInt(arr[i]);
                    if (!isNaN(element)) {
                        intArr.push(element);
                    }
                }
                return intArr;
            }
        case "float[]":
            {
                if (v == "[]" || v == '') {
                    return [];
                }
                var str = v.replace('[', '').replace(']', '');
                var arr = str.split(',');
                var fltArr = [];
                for (let i = 0; i < arr.length; i++) {
                    const element = parseFloat(arr[i]);
                    if (!isNaN(element)) {
                        fltArr.push(element);
                    }
                }
                return fltArr;
            }
        case "string[]":
            {
                if (v == "[]" || v == '') {
                    return [];
                }
                var str = v.toString().replace('[', '').replace(']', '');
                var arr = str.split(',');
                var strArr = [];
                for (let i = 0; i < arr.length; i++) {
                    const element = arr[i];
                    let str = element.replace('"', '').replace('\"', '');
                    strArr.push(str);
                    // if (str != "" && str != '') {
                    // }
                }
                return strArr;
            }
        case "string":
            return v.toString();

        default:
            return v;
    }

}
function getDefalult(type) {
    switch (type) {
        case "int":
        case "float":
            return 0;
        case "int[]":
        case "float[]":
        case "string[]":
            return [];
        case "boolean":
            return false;
        case "string":
            return "";
        default:
            return null;
    }
}

function writeTs(fmtName, isConst, data) {
    var tsOut = tsPath + fmtName + ".ts";
    var dataLine = isConst ?
        `export var data:${fmtName}.config;` :
        `export var data:{[key: number]: ${fmtName}.config};
    export var dataList: ${fmtName}.config[];
    export var lastData: ${fmtName}.config;
    `
    var tsContent =
        `export namespace ${fmtName} {
    export class config {
        ${data.types}
    }
    export var isConst: boolean = ${isConst};
    export const path = "res/config/${fmtName}.json";        
    ${dataLine}
\n}`;

    if (!fs.existsSync(tsPath)) {
        fs.mkdirSync(tsPath, {
            recursive: true
        });
    }
    fs.writeFileSync(tsOut, tsContent, {
        encoding: "utf-8"
    });
}
function writeJson(fmtName, data) {
    var jsonOut = outjsonPath + fmtName + ".json";
    var jsonContent = JSON.stringify(data.json);

    if (!fs.existsSync(outjsonPath)) {
        fs.mkdirSync(outjsonPath, {
            recursive: true
        });
    }

    fs.writeFileSync(jsonOut, jsonContent, {
        encoding: "utf-8"
    });
}
function formatName(fileName) {
    var needUpper = true;
    var sb = ""
    for (let i = 0; i < fileName.length; i++) {
        var addValue = fileName[i];
        if (addValue == "_") {
            needUpper = true;
            continue;
        }
        if (needUpper) {
            needUpper = false;
            addValue = addValue.toUpperCase();
        }
        sb += addValue;
    }
    return sb;
}
function export_configs() {
    xlsx_files.forEach(e => {
        exportExcel(e)
    });
}
function resize_screenshots() {
    let width = parseInt(process.argv[3]);
    let height = parseInt(process.argv[4]);
    let dir = path.join(workPath, '../../../sc/');
    let files = fs.readdirSync(dir);
    console.log(width, height);;
    for (let i = 0; i < files.length; i++) {
        const filepath = dir + files[i];
        const outpath = dir + `s_${i}.jpg`;
        console.log(filepath, outpath);
        images(filepath).size(width, height)
            .save(outpath, {
                quality: 80
            });
    }
}
//#endregion
function run_tool() {
    switch (process.argv[2]) {
        // node others/publish/tools/tools.js img
        case "img":
            init_icon_imgs();
            break;
        // node others/publish/tools/tools.js sc 720 1280
        case "sc":
            resize_screenshots();
            break;
        // node others/publish/tools/tools.js check
        // node others/publish/tools/tools.js check html4399
        case "check":
            check();
            break;
        // node others/publish/tools/tools.js export
        case "export":
            export_configs();
            break;
    }

}
run_tool();
