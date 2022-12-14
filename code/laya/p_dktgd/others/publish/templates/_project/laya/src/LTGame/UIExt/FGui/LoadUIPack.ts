import LTRes from "../../Res/LTRes";

export class LoadUIPack {

    public packPath: string;
    public atliasCount: number;

    constructor(packPath: string, atliasCount: number = 1) {
        this.packPath = packPath;
        this.atliasCount = atliasCount;
    }

    public PushUrl(urls: any[]) {
        urls.push({ url: this.packPath + '.' + fgui.UIConfig.packageFileExtension, type: Laya.Loader.BUFFER });
        if (this.atliasCount == 0) return;
        urls.push({ url: this.packPath + "_atlas0.png", type: Laya.Loader.IMAGE });
        for (let i = 1; i < this.atliasCount; ++i) {
            urls.push({ url: this.packPath + "_atlas0_" + i + ".png", type: Laya.Loader.IMAGE });
        }
    }

    public AddPackage() {
        fgui.UIPackage.addPackage(this.packPath);
    }

    public RemovePackage() {
        fgui.UIPackage.removePackage(this.packPath);
        let urls: any[] = [];
        this.PushUrl(urls);
        for (let url of urls) {
            LTRes.Unload(url.url);
        }
    }

}