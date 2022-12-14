import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_FlyPanel from "./UI/LTGame/UI_FlyPanel";
import UI_view_fly_coin from "./UI/LTGame/UI_view_fly_coin";
import MathEx from "../../LTUtils/MathEx";
import Awaiters from "../../Async/Awaiters";
import { GameConst } from "../../../script/config/GameConst";

export default class UI_FlyPanelMediator extends BaseUIMediator<UI_FlyPanel> {

    private static _instance: UI_FlyPanelMediator;
    public static get instance(): UI_FlyPanelMediator {
        if (this._instance == null) {
            this._instance = new UI_FlyPanelMediator();
            this._instance._classDefine = UI_FlyPanel;
        }
        return this._instance;
    }

    _sortOrder = Number.MAX_SAFE_INTEGER - 1;

    _OnShow() {
        // your code
        super._OnShow();

        this.ui.m_test.dispose();
    }

    public async BoomObjs(fromObj: fgui.GObject, boomCount: number, flyTime: number = 1, circleRadius: number = 10) {
        let startPos = fromObj.localToGlobal();
        startPos.x -= fromObj.width / 2;
        startPos.y -= fromObj.height / 2;
        let cacheTime = flyTime * 1000;
        for (let i = 0; i < boomCount; ++i) {
            let flyCoin = UI_view_fly_coin.createInstance();
            this.ui.addChild(flyCoin);
            if (fromObj['url'] != null) {
                flyCoin.m_icon.url = fromObj['url'];
            } else if (fromObj['resourceURL'] != null) {
                flyCoin.m_icon.url = fromObj['resourceURL'];
            }
            flyCoin.m_icon.setSize(fromObj.width, fromObj.height);
            flyCoin.setPivot(fromObj.pivotX, fromObj.pivotY);
            flyCoin.setXY(startPos.x, startPos.y);
            let cachePos = new Laya.Vector2(startPos.x + MathEx.Random(-circleRadius, circleRadius),
                startPos.y + MathEx.Random(-circleRadius, circleRadius));
            Laya.Tween.to(flyCoin, { x: cachePos.x, y: cachePos.y }, cacheTime, Laya.Ease.quadOut, Laya.Handler.create(this, () => {
                flyCoin.dispose();
            }));
        }

        await Awaiters.Seconds(flyTime);
    }

    /**
     * ????????????,????????????????????????????????????
     * @param fromObj 
     * @param flyIcon 
     * @param flyCount 
     * @param flyTime 
     * @param circleRadius 
     */
    public async BoomCoins(fromObj: fgui.GObject, flyIcon: string = null, flyCount: number = 100,
        flyTime: number = 1, circleRadius: number = 10) {
        let startPos = fromObj.localToGlobal();
        let cacheTime = flyTime * 1000;
        for (let i = 0; i < flyCount; ++i) {
            let flyCoin = UI_view_fly_coin.createInstance();
            this.ui.addChild(flyCoin);
            if (flyIcon != null) {
                flyCoin.m_icon.url = flyIcon;
            } else {
                flyCoin.m_icon.url = GameConst.data.coin_icon;
            }
            flyCoin.setXY(startPos.x, startPos.y);
            let cachePos = new Laya.Vector2(startPos.x + MathEx.Random(-circleRadius, circleRadius),
                startPos.y + MathEx.Random(-circleRadius, circleRadius));
            Laya.Tween.to(flyCoin, { x: cachePos.x, y: cachePos.y }, cacheTime, Laya.Ease.quadInOut, Laya.Handler.create(this, () => {
                flyCoin.dispose();
            }));
        }

        await Awaiters.Seconds(flyTime);
    }

    public async FlyObjs(fromObj: fgui.GObject, toObj: fgui.GObject, flyCount: number, flyTime: number, circleRadius: number) {
        let startPos = fromObj.localToGlobal();
        startPos.x -= fromObj.width / 2;
        startPos.y -= fromObj.height / 2;
        let stopPos = toObj.localToGlobal();
        let cacheTime = flyTime * 0.6 * 1000;
        let finalTime = flyTime * 0.4 * 1000;
        for (let i = 0; i < flyCount; ++i) {
            let flyCoin = UI_view_fly_coin.createInstance();
            this.ui.addChild(flyCoin);
            if (fromObj['url'] != null) {
                flyCoin.m_icon.url = fromObj['url'];
            } else if (fromObj['resourceURL'] != null) {
                flyCoin.m_icon.url = fromObj['resourceURL'];
            }
            flyCoin.m_icon.setSize(fromObj.width, fromObj.height);
            flyCoin.setPivot(fromObj.pivotX, fromObj.pivotY);
            flyCoin.setXY(startPos.x, startPos.y);
            let cachePos = new Laya.Vector2(startPos.x + MathEx.Random(-circleRadius, circleRadius),
                startPos.y + MathEx.Random(-circleRadius, circleRadius));
            Laya.Tween.to(flyCoin, { x: cachePos.x, y: cachePos.y }, cacheTime, Laya.Ease.quadInOut, Laya.Handler.create(this, () => {
                Laya.Tween.to(flyCoin, { x: stopPos.x, y: stopPos.y }, finalTime, Laya.Ease.quadInOut, Laya.Handler.create(this, () => {
                    flyCoin.dispose();
                }));
            }))
        }

        await Awaiters.Seconds(flyTime);
    }

    /**
     * ????????????,????????????????????????
     * @param fromObj 
     * @param toObj 
     * @param flyIcon 
     * @param flyCount 
     * @param flyTime 
     */
    public async FlyCoins(fromObj: fgui.GObject, toObj: fgui.GObject, flyIcon: string = null, flyCount: number = 100,
        flyTime: number = 1, circleRadius: number = 10) {
        let startPos = fromObj.localToGlobal();
        let stopPos = toObj.localToGlobal();
        let cacheTime = flyTime * 0.6 * 1000;
        let finalTime = flyTime * 0.4 * 1000;
        for (let i = 0; i < flyCount; ++i) {
            let flyCoin = UI_view_fly_coin.createInstance();
            this.ui.addChild(flyCoin);
            if (flyIcon != null) {
                flyCoin.m_icon.url = flyIcon;
            } else {
                flyCoin.m_icon.url = GameConst.data.coin_icon;
            }
            flyCoin.setXY(startPos.x, startPos.y);
            let cachePos = new Laya.Vector2(startPos.x + MathEx.Random(-circleRadius, circleRadius),
                startPos.y + MathEx.Random(-circleRadius, circleRadius));
            Laya.Tween.to(flyCoin, { x: cachePos.x, y: cachePos.y }, cacheTime, Laya.Ease.quadInOut, Laya.Handler.create(this, () => {
                Laya.Tween.to(flyCoin, { x: stopPos.x, y: stopPos.y }, finalTime, Laya.Ease.quadInOut, Laya.Handler.create(this, () => {
                    flyCoin.dispose();
                }));
            }))
        }

        await Awaiters.Seconds(flyTime);
    }

}