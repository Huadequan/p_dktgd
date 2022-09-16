const fs = require("fs");
const path = require("path");
const process = require("process");

//#region 更新 平台文件&&代码
function copyPlatformFiles() {
    var frameProjectPath = "F:/work/gitee/ltg-laya/FakeProject/code/laya/p_yinyou/";
    var filePaths = [
        "src/LTGame/Platform/LTPlatformFactory.ts",
        "src/LTGame/Platform/EPlatformType.ts",
        "src/LTGame/Platform/LTPlatform.ts",
        "others/publish/tools/tools.js",
        "others/publish/bin/publish.js",
        "package.json"
    ];

    switch (process.argv[2]) {
        case 4399:
            filePaths = filePaths.concat([
                "others/publish/templates/gamebox4399/",
                "others/publish/templates/html4399/",
                "pack_config/publish.gamebox4399.json",
                "pack_config/publish.html4399.json",
                "src/LTGame/Platform/Impl/4399/",
                "src/LTGame/UIExt/FGui/LoadUIPack.ts",
                "src/LTGame/UIExt/FGui/FGuiEx.ts"
            ]);
            break;
        case "mmy":
            console.log("复制摸摸鱼 SDK 所需文件");
            filePaths = filePaths.concat([
                "others/publish/templates/mmy/",
                "pack_config/native.mmy.json",
                "others/publish/tools/create_native.js",
                "src/LTGame/Platform/Impl/Native_Android/NativeAndroidMMYPlatform.ts",
                "src/LTGame/Platform/Impl/Native_Android/AndroidDevice.ts"
            ]);
            break;
        default:
            break;
    }

    filePaths.forEach(file => {
        let from = frameProjectPath + file;
        let to = path.join(process.cwd(), file);
        let fileStat = fs.statSync(from);


        if (fileStat.isDirectory()) {
            copyDir(from, to);
        } else {
            console.log(from, "==>", to);
            fs.copyFileSync(from, to);
        }
    });

}
function copyDir(dir, toDir) {
    console.log(dir);
    if (!fs.existsSync(toDir)) {
        fs.mkdirSync(toDir, {
            recursive: true
        });
    }
    let files = fs.readdirSync(dir);
    files.forEach(file => {
        let from = path.join(dir, file);
        let to = path.join(toDir, file)
        let fileStat = fs.statSync(from);
        if (fileStat.isDirectory()) {
            copyDir(from, to);
        } else {
            console.log(from, "==>", to);
            fs.copyFileSync(from, to);
        }
    })

}
//node others/publish/tools/copy_platform_files.js 4399
//node others/publish/tools/copy_platform_files.js mmy
copyPlatformFiles();
//#endregion