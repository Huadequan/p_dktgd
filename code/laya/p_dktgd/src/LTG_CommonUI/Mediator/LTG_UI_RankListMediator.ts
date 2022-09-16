import MathEx from "../../LTGame/LTUtils/MathEx";
import { EOpenDataMethod } from "../../LTGame/Platform/Impl/OpenDataContext";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTUI from "../../LTGame/UIExt/LTUI";
import GameData from "../../script/common/GameData";
import LTSDK from "../../SDK/LTSDK";
import LTG_UI_item_rank from "../UI/LTCom/LTG_UI_item_rank";
import LTG_UI_RankList from "../UI/LTCom/LTG_UI_RankList"; 
import { ILTG_Com_Data } from "../Data/ILTG_Com_Data";
import { RankData } from "../../SDK/common/RankPlayerData";


export class LTG_Com_RankListData implements ILTG_Com_Data {
    /**排行单位 */
    rankSuffix: string = "分";
    Send(): number {
        LTG_UI_RankListMediator.instance.Show(this);
        return 0;
    }

}
/**
     *  排行榜默认key：
     * maxScore 只有开放域项目使用这个界面 
     * 只能获取好友排行
     */
export class LTG_UI_RankListMediator extends BaseUIMediator<LTG_UI_RankList> {
    private static _instance: LTG_UI_RankListMediator;
    public get ui(): LTG_UI_RankList {
        return this._ui;
    }

    public static get instance(): LTG_UI_RankListMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_RankListMediator();
            this._instance._classDefine = LTG_UI_RankList;
        }
        return this._instance;
    }
    opendataView: Laya.WXOpenDataViewer;
    sharedCanvas: any;
    _cacheData: LTG_Com_RankListData;
    private maxScore: number = 0;

    async  _OnShow() {
        super._OnShow();
        this._cacheData = this._openParam;
        this.ui.m_btn_close.onClick(this, this.Hide);
        this.ui.m_btn_pre.onClick(this, this._onClickPrePage);
        this.ui.m_btn_next.onClick(this, this._onClickNextPage);
        // this.ui.m_btn_report.onClick(this, this._onClickReport);
        if (LTPlatform.instance.openDataContext.supportOpenContext) {
            this.ui.m_opencontext.selectedIndex = 0;
            this.opendataView = new Laya.WXOpenDataViewer();
            this.opendataView.width = this.ui.m_openView.width;
            this.opendataView.height = this.ui.m_openView.height;
            this.opendataView.x = this.ui.m_openView.x;
            this.opendataView.y = this.ui.m_openView.y;
            this.ui.m_openView.visible = false;
            this.ui.displayObject.addChild(this.opendataView);

            let testscore = MathEx.RandomInt(1, 100);

            console.error("测试排行榜");
            this.getSelfScore();
            this.updateMaxScore(testscore);
            this.initRankList();
        } else {
            this.ui.m_opencontext.selectedIndex = 1;
            LTSDK.instance.GetDayRankList(1, GameData.instance.maxScore, (res) => {
                let list = []
                let rank = res as RankData;
                console.log(rank);
                if (rank && rank.code == 1) {
                    list = rank.data;
                    if (list.length > 0) {
                        this.ui.m_list_rank.setVirtual();
                        this.ui.m_list_rank.itemRenderer = Laya.Handler.create(this, (index: number, item: LTG_UI_item_rank) => {
                            let rank = list[index];
                            item.m_txt_nickname.text = rank.nickName;
                            item.m_txt_score.text = parseInt(rank.val) + "";
                            item.m_txt_rank.text = rank.index;
                        }, null, false);
                        this.ui.m_list_rank.numItems = list.length;
                    }
                } else {
                    this.ui.m_list_rank.visible = false;
                }
                if (rank.self) {
                    this.ui.m_item_self.m_txt_nickname.text = "我";
                    this.ui.m_item_self.m_txt_score.text = parseInt(rank.self.val) + "";
                    this.ui.m_item_self.m_txt_rank.text = rank.self.index + "";
                } else {
                    this.ui.m_item_self.m_txt_nickname.text = "我";
                    this.ui.m_item_self.m_txt_score.text = GameData.instance.maxScore + "";
                    this.ui.m_item_self.m_txt_rank.text = ">999";
                }
            });
        }


    }

    async  initRankList() {

        LTPlatform.instance.openDataContext.postMsg({
            method: EOpenDataMethod.resize,
            width: Laya.stage.width,
            height: Laya.stage.height,
            rankSuffix: this._cacheData.rankSuffix
        });
        LTPlatform.instance.openDataContext.postMsg({
            method: EOpenDataMethod.getFriendRankData, userId: LTSDK.instance.uid, index: 1, pageNum: 7
        });
        LTUI.ShowLoading("加载中");
        Laya.timer.once(1500, this, () => {
            LTUI.HideLoading();
            LTPlatform.instance.openDataContext.postMsg({ method: EOpenDataMethod.showFriendRank, userId: LTSDK.instance.uid, index: 1, pageNum: 7 });
        });

    }
    _onClickPrePage() {
        LTUI.TrigerBtnClick();
        LTPlatform.instance.openDataContext.postMsg({ method: EOpenDataMethod.changePage, userId: LTSDK.instance.uid, page: -1, pageNum: 7 });
    }
    _onClickNextPage() {
        LTUI.TrigerBtnClick();
        LTPlatform.instance.openDataContext.postMsg({ method: EOpenDataMethod.changePage, userId: LTSDK.instance.uid, page: 1, pageNum: 7 });
    }
    getSelfScore() {
        // LTPlatform.instance.openDataContext.postMsg({
        //     method: EOpenDataMethod.getSelfScore, userId: LTSDK.instance.uid, callback: (e) => {
        //         console.log(e);
        //     }
        // });
        this.maxScore = GameData.instance.maxScore;
    }
    protected _OnHide() {
        if (this.opendataView) {
            this.opendataView.destroy();
        }
    }
    updateMaxScore(score: number) {
        if (score < this.maxScore) {
            return console.log("当前分数小于最大分数——不记录");
        } else {
            GameData.instance.maxScore = score;
            GameData.SaveToDisk();
        }
        LTPlatform.instance.openDataContext.postMsg({
            method: EOpenDataMethod.updateMaxScore,
            maxScore: score,
            maxScore2: 0,
            userId: LTSDK.instance.uid
        });

    }
}
