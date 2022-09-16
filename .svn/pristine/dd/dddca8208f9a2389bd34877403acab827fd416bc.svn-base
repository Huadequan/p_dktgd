//process.argv[2]=平台 process.argv[3]命令 
const fs = require("fs");
const process = require("process");
const path = require("path");
const shelljs = require("shelljs");
const images = require('images');

var workPath = process.cwd();
var binPath = path.join(workPath, "/bin");
var cfgPath = path.join(workPath, `/pack_config/native.${process.argv[2]}.json`);
console.log(binPath);
var readStr = fs.readFileSync(cfgPath, {
    "encoding": "utf-8"
});
var build_cfg = JSON.parse(readStr);
console.log("原生配置信息:", build_cfg);
var outpath = path.join(workPath, `/release/${process.argv[2]}/`);
console.log("输出位置：", outpath);
function create_naive() {
    let pram = `-f ${binPath} -t ${build_cfg.type} --path ${outpath} --platform ${build_cfg.platform} -v ${build_cfg.version} -n ${build_cfg.p_name} --app_name ${build_cfg.app_name} --package_name ${build_cfg.package_name}`;
    let cmd = `layanative2 createapp ${pram}`;

    shelljs.exec(cmd);
}
function refresh_res() {
    let cmd = `layanative2 refreshres --path ${outpath}/${build_cfg.p_name} --platform ${build_cfg.platform}`;

    shelljs.exec(cmd);
}
//233
function initPackageName() {
    console.log("更新 package_name  ");
    let adm = path.join(workPath, `/release/${process.argv[2]}/${build_cfg.p_name}/android_studio/app/src/main/java/demo/SplashDialog.java`);
    let data = fs.readFileSync(adm, {
        "encoding": "utf-8"
    });
    let newStr = data.replace("com.ytlj.xxxx.meta", build_cfg.package_name);
    fs.writeFileSync(adm, newStr, {
        "encoding": "utf-8"
    });
}

function copy_sdk_files() {
    console.log(process.argv[2], "copy sdk&codes");
    switch (process.argv[2]) {
        case "233": {
            let fromPath = path.join(workPath, `/others/publish/templates/${process.argv[2]}/`);
            let toPath = path.join(workPath, `/release/${process.argv[2]}/${build_cfg.p_name}/android_studio/app/`);
            if (fs.existsSync(fromPath)) {
                copy_dir(fromPath, toPath);
            }
            initPackageName();
            console.log("更新 #appKey# ");
            let adm = path.join(workPath, `/release/${process.argv[2]}/${build_cfg.p_name}/android_studio/app/src/main/java/ltgame/ADManager.java`);
            let data = fs.readFileSync(adm, {
                "encoding": "utf-8"
            });
            let newStr = data.replace("#appKey#", build_cfg.app_key);
            fs.writeFileSync(adm, newStr, {
                "encoding": "utf-8"
            });
            let gradle_path = path.join(workPath, `/release/${process.argv[2]}/${build_cfg.p_name}/android_studio/app/build.gradle`);
            let buildgradle = fs.readFileSync(gradle_path, {
                "encoding": "utf-8"
            });
            let outgradle = buildgradle.replace(`implementation 'com.android.support:appcompat-v7:22.1.1'`,
                `implementation 'com.android.support:appcompat-v7:28.0.0'
            implementation files('libs/mpg-cm-v1.0.5.aar')`);
            fs.writeFileSync(gradle_path, outgradle, {
                "encoding": "utf-8"
            });
        }
            break;

        case "mmy": {
            let fromPath = path.join(workPath, `/others/publish/templates/${process.argv[2]}/`);
            let toPath = path.join(workPath, `/release/${process.argv[2]}/${build_cfg.p_name}/android_studio/app/`);
            if (fs.existsSync(fromPath)) {
                copy_dir(fromPath, toPath);
            } else {
                console.error('不存在的目录：', fromPath);
            }
            let manifest = path.join(workPath, `/release/${process.argv[2]}/${build_cfg.p_name}/android_studio/app/src/main/AndroidManifest.xml`);
            let data = fs.readFileSync(manifest, {
                "encoding": "utf-8"
            });
            let writeStr = data.replace("com.ytlj.xxxx.mmy", build_cfg.package_name);;
            fs.writeFileSync(manifest, writeStr, {
                "encoding": "utf-8"
            });

            let gradle_path = path.join(workPath, `/release/${process.argv[2]}/${build_cfg.p_name}/android_studio/app/build.gradle`);
            let buildgradle = fs.readFileSync(gradle_path, {
                "encoding": "utf-8"
            });
            let outgradle = buildgradle.replace("com.ytlj.xxxx.mmy", build_cfg.package_name);
            fs.writeFileSync(gradle_path, outgradle, {
                "encoding": "utf-8"
            });

        }
            break;

        default:
            console.log("未处理的平台", process.argv[2])
            break;
    }

}


function init_android_files() {
    console.log("拷贝icon");
    let iconPath = path.join(workPath, `../../../art/UI/icon/512x512.png`);
    let toPath = path.join(workPath, `/release/${process.argv[2]}/${build_cfg.p_name}/android_studio/app/src/main/res/drawable/icon.png`);
    if (fs.existsSync(iconPath)) {
        fs.copyFileSync(iconPath, toPath);
    } else {
        console.log("未找到：" + iconPath);
    }
    console.log("更新AndroidManifest.xml");
    let manifest = path.join(workPath, `/release/${process.argv[2]}/${build_cfg.p_name}/android_studio/app/src/main/AndroidManifest.xml`);
    let data = fs.readFileSync(manifest, {
        "encoding": "utf-8"
    });
    let writeStr = data.replace("sensorLandscape", "portrait").replace("mipmap/ic_launcher", "drawable/icon");
    //.replace("com.ytlj.xxxx.mmy", build_cfg.package_name);;
    fs.writeFileSync(manifest, writeStr, {
        "encoding": "utf-8"
    });

    console.log("修改 build.gradle ");
    let gradle_path = path.join(workPath, `/release/${process.argv[2]}/${build_cfg.p_name}/android_studio/app/build.gradle`);
    let buildgradle = fs.readFileSync(gradle_path, {
        "encoding": "utf-8"
    });
    let outgradle = buildgradle.replace(`versionName "2.0"`, `versionName "0.0.1"
    }
    android.applicationVariants.all {
        variant ->
            variant.outputs.all {
                outputFileName = \"\${defaultConfig.applicationId}-v\${variant.versionName}.apk"
            }`);
    outgradle = outgradle.replace("minSdkVersion 14", "minSdkVersion 20");
    fs.writeFileSync(gradle_path, outgradle, {
        "encoding": "utf-8"
    });

    let gradle_proper_path = path.join(workPath, `/release/${process.argv[2]}/${build_cfg.p_name}/android_studio/gradle.properties`);
    let proper = fs.readFileSync(gradle_proper_path, {
        "encoding": "utf-8"
    });
    proper = proper.replace("# org.gradle.parallel=true", '# org.gradle.parallel=true\nandroid.injected.testOnly=false');
    fs.writeFileSync(gradle_proper_path, proper, {
        "encoding": "utf-8"
    });


    if (process.argv[2] == "233") {
        console.log('233 修改config.js')
        let cfg_js = path.join(workPath, `/release/${process.argv[2]}/${build_cfg.p_name}/android_studio/app/src/main/assets/scripts/config.js`);
        let js_str = fs.readFileSync(cfg_js, {
            "encoding": "utf-8"
        });
        let out_str = js_str.replace(`this.sOS = conchConfig.getOS();`,
            `window["GAME233"] = true;
        this.sOS =  conchConfig.getOS();`);
        fs.writeFileSync(cfg_js, out_str, {
            "encoding": "utf-8"
        });
    } else if (process.argv[2] == "mmy") {
        console.log('mmy 修改config.js')
        let cfg_js = path.join(workPath, `/release/${process.argv[2]}/${build_cfg.p_name}/android_studio/app/src/main/assets/scripts/config.js`);
        let js_str = fs.readFileSync(cfg_js, {
            "encoding": "utf-8"
        });
        let out_str = js_str.replace(`this.sOS = conchConfig.getOS();`,
            `window["momoyu"] = true;
        this.sOS =  conchConfig.getOS();`);
        fs.writeFileSync(cfg_js, out_str, {
            "encoding": "utf-8"
        });
    }
}
function init_ios_files() {
    console.log("拷贝icon");
    let icon_path = path.join(workPath, `../../../art/UI/icon/512x512.png`);
    let sizes = [20, 29, 40, 58, 60, 76, 80, 87, 120, 152, 167, 180, 1024];
    let copy_size = [58, 80, 120];
    let icon_dir = path.join(workPath, `/release/${process.argv[2]}/${build_cfg.p_name}/ios/${build_cfg.p_name}/${build_cfg.p_name}/Assets.xcassets/AppIcon.appiconset/`);
    sizes.forEach(sz => {
        resize_img(icon_path, icon_dir + sz + ".png", sz);
        if (copy_size.indexOf(sz) > -1) {
            resize_img(icon_path, icon_dir + sz + "-1.png", sz);
        }
    });
    console.log("修改：" + icon_dir + "Contents.json")
    let contents_path = path.join(workPath, "/others/publish/templates/ios/Contents.json");
    fs.copyFileSync(contents_path, icon_dir + "Contents.json");
    let cfgini = path.join(workPath, `/release/${process.argv[2]}/${build_cfg.p_name}/ios/${build_cfg.p_name}/resource/config.ini`);
    console.log("修改：" + cfgini);
    let data = fs.readFileSync(cfgini, {
        "encoding": "utf-8"
    });
    let writeStr = data.replace("orientation=24", "orientation=2");
    fs.writeFileSync(cfgini, writeStr, {
        "encoding": "utf-8"
    });
}
function resize_img(path, outpath, size) {
    console.log(outpath);
    images(path).size(size, size).save(outpath, {
        quality: 100
    });
}
function copy_dir(srcDir, targetDir) {
    let files = fs.readdirSync(srcDir);
    for (let i = 0; i < files.length; ++i) {
        let fileName = files[i];
        let targetPath = path.join(targetDir, fileName);
        let filePath = path.join(srcDir, fileName);
        let fileStat = fs.statSync(filePath);
        if (fileStat.isDirectory()) {
            if (!fs.existsSync(targetPath)) {
                fs.mkdirSync(targetPath, {
                    recursive: true
                });
            }
            copy_dir(filePath, targetPath);
        } else {
            console.log(filePath + ">>>" + targetPath);
            fs.copyFileSync(filePath, targetPath);
        }
    }
}
/**方便更新时查找 */
function copy_ios_res() {
    let res_dir = path.join(workPath, `/release/${process.argv[2]}/${build_cfg.p_name}/ios/${build_cfg.p_name}/resource/cache/stand.alone.version/`);
    let to_dir = path.join(workPath, `../../../stand.alone.version/`);
    if (fs.existsSync(to_dir)) {
        clean_dir(to_dir);
    } else {
        fs.mkdirSync(to_dir, {
            recursive: true
        });
    }
    copy_dir(res_dir, to_dir);
    console.log("已移动到：", to_dir);
}
function clean_dir(dir_path) {
    console.log("清理：", dir_path);
    let files = fs.readdirSync(dir_path);
    for (let i = 0; i < files.length; ++i) {
        let file_name = files[i];
        let file_path = path.join(dir_path, file_name);
        shelljs.rm("-f", file_path);
    }
}

function run() {
    switch (process.argv[3]) {
        case "create":
            create_naive();
            if (build_cfg.platform == "android_studio") {
                init_android_files();
            } else if (build_cfg.platform == "ios") {
                init_ios_files();
            }
            console.log("创建完成");
            break;
        case "refreshres":
            refresh_res();
            if (build_cfg.platform == "ios") {
                copy_ios_res();
            }
            console.log("原生资源更新完成");
            break;
        case "copy":
            console.log("拷贝资源库");
            copy_sdk_files();
            break;
        default:
            break;
    }
}
run();
