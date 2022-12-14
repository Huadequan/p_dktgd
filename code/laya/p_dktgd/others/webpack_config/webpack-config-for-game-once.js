const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const workSpaceDir = path.resolve(__dirname);

// 往上弹两级
const workSpaceDir2 = workSpaceDir + "\\..\\..";
console.log("当前工作路径", workSpaceDir2);
module.exports = (env) => {
    if (!env) {
        env = { production: false };
    }
    console.log("当前编译配置:", env);
    let result = ({
        entry: path.join(workSpaceDir2, 'src/main.ts'),
        output: {
            path: path.join(workSpaceDir2, 'bin/js'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(md|txt|glsl|vs|fs)$/,
                    use: "raw-loader",
                    exclude: /node_modules/
                },
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', 'glsl', 'md', 'txt'],
            plugins: [
                new TsconfigPathsPlugin({ 
                    configFile: path.join(workSpaceDir, 'tsconfig_for_game.json'),
                 })
            ]
        },
        devtool: env.production ? "" : "source-map",
        mode: env.production ? "production" : "development",
    });
    return result;
};
