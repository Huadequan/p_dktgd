import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import { LTG_Com_StatementData } from "../Data/LTG_Com_StatementData";
import LTG_UI_Statement from "../UI/LTCom/LTG_UI_Statement";
import { GameConst } from "../../script/config/GameConst";
import CommonSaveData from "../../LTGame/Commom/CommonSaveData";
import LTUI from "../../LTGame/UIExt/LTUI";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import { EPlatformType } from "../../LTGame/Platform/EPlatformType";
import Awaiters from "../../LTGame/Async/Awaiters";



export class LTG_UI_StatementMediator {
    private static _instance: LTG_UI_StatementMediator;
    public ui: LTG_UI_Statement;

    public static get instance(): LTG_UI_StatementMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_StatementMediator();
            this._instance.ui = LTG_UI_Statement.createInstance();
            fgui.GRoot.inst.addChild(this.instance.ui);
            this.instance.ui.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
            this.instance.ui.sortingOrder = Number.MAX_SAFE_INTEGER - 10;
        }
        return this._instance;
    }
    private cacheData: LTG_Com_StatementData;
    Show(obj: any) {
        this.cacheData = obj;
        this._OnShow();
        this.ui.visible = true;
    }
    Hide() {
        this.ui.visible = false;
    }
    _OnShow() {
        this.ui.m_btn_ok.onClick(this, this._OnClickOK);
        this.ui.m_tog.onClick(this, this._OnClickToggle);
        this.ui.m_btn_confirm.onClick(this, this._OnClickConfirm);
        this.ui.m_btn_refuse.onClick(this, this._OnClickCancel);
        this.ui.m_tog.selected = CommonSaveData.instance.statementSigned;
        this.ui.m_state.selectedIndex = this.cacheData.state;
        this.ui.m_content.m_txt_state.text = `
        更新时间：2021年11月11日
        生效时间：2021年11月11日

        作为本游戏应用(以下简称：游戏)的运营者，我们尊重并保护所有使用服务用户的个人隐私权。为了给您提供更准确、更有个性化的服务，游戏会按照本隐私权政策的规定使用和披露您的个人信息。但游戏将以高度的勤勉、审慎义务对待这些信息。除本隐私权政策另有规定外，在未征得您事先许可的情况下，游戏不会将这些信息对外披露或向第三方提供。游戏会不时更新本隐私权政策。 您在同意游戏服务使用协议之时，即视为您已经同意本隐私权政策全部内容。本隐私权政策属于游戏服务使用协议不可分割的一部分。
        1. 适用范围
        a) 在您注册游戏帐号时，您根据游戏要求提供的个人注册信息；
        b) 在您使用游戏网络服务，或访问游戏平台网页时，游戏自动接收并记录的您的浏览器和计算机上的信息，包括但不限于您的IP地址、浏览器的类型、使用的语言、访问日期和时间、软硬件特征信息及您需求的网页记录等数据；
        c) 游戏通过合法途径从商业伙伴处取得的用户个人数据。
        您了解并同意，以下信息不适用本隐私权政策：
        a) 您在使用游戏平台提供的搜索服务时输入的关键字信息；
        b) 游戏收集到的您在游戏发布的有关信息数据，包括但不限于参与活动、成交信息及评价详情；
        c) 违反法律规定或违反游戏规则行为及游戏已对您采取的措施。
        2. 信息使用
        a) 游戏不会向任何无关第三方提供、出售、出租、分享或交易您的个人信息，除非事先得到您的许可，或该第三方和游戏（含游戏关联公司）单独或共同为您提供服务，且在该服务结束后，其将被禁止访问包括其以前能够访问的所有这些资料。
        b) 游戏亦不允许任何第三方以任何手段收集、编辑、出售或者无偿传播您的个人信息。任何游戏平台用户如从事上述活动，一经发现，游戏有权立即终止与该用户的服务协议。
        c) 为服务用户的目的，游戏可能通过使用您的个人信息，向您提供您感兴趣的信息，包括但不限于向您发出产品和服务信息，或者与游戏合作伙伴共享信息以便他们向您发送有关其产品和服务的信息（后者需要您的事先同意）。
        3. 信息披露
        在如下情况下，游戏将依据您的个人意愿或法律的规定全部或部分的披露您的个人信息：
        a) 经您事先同意，向第三方披露；
        b) 为提供您所要求的产品和服务，而必须和第三方分享您的个人信息；
        c) 根据法律的有关规定，或者行政或司法机构的要求，向第三方或者行政、司法机构披露；
        d) 如您出现违反中国有关法律、法规或者游戏服务协议或相关规则的情况，需要向第三方披露；
        e) 如您是适格的知识产权投诉人并已提起投诉，应被投诉人要求，向被投诉人披露，以便双方处理可能的权利纠纷；
        f) 其它游戏根据法律、法规或者网站政策认为合适的披露。
        4. 信息存储和交换
        游戏收集的有关您的信息和资料将保存在游戏及（或）其关联公司的服务器上，这些信息和资料可能传送至您所在国家、地区或游戏收集信息和资料所在地的境外并在境外被访问、存储和展示。
        5. Cookie的使用
        a) 在您未拒绝接受cookies的情况下，游戏会在您的计算机上设定或取用cookies，以便您能登录或使用依赖于cookies的游戏平台服务或功能。游戏使用cookies可为您提供更加周到的个性化服务，包括推广服务。
        b) 您有权选择接受或拒绝接受cookies。您可以通过修改浏览器设置的方式拒绝接受cookies。但如果您选择拒绝接受cookies，则您可能无法登录或使用依赖于cookies的游戏网络服务或功能。
        c) 通过游戏所设cookies所取得的有关信息，将适用本政策。
        6. 信息安全
        a) 游戏帐号均有安全保护功能，请妥善保管您的用户名及密码信息。游戏将通过对用户密码进行加密等安全措施确保您的信息不丢失，不被滥用和变造。尽管有前述安全措施，但同时也请您注意在信息网络上不存在“完善的安全措施”。
        b) 在使用游戏网络服务进行网上交易时，您不可避免的要向交易对方或潜在的交易对方披露自己的个人信息，如联络方式或者邮政地址。请您妥善保护自己的个人信息，仅在必要的情形下向他人提供。如您发现自己的个人信息泄密，尤其是游戏用户名及密码发生泄露，请您立即联络游戏客服，以便游戏采取相应措施。
        7.联系我们
        a)如果您对个人信息保护问题有投诉、建议、疑问，您可以将问题发送至联系邮箱: 1939322522@qq.com，我们核查并验证您的用户身份后会及时反馈您的投诉与举报。
    
        `
    }
    _OnClickToggle() {
        CommonSaveData.instance.statementSigned = this.ui.m_tog.selected;
        CommonSaveData.SaveToDisk();
    }
    _OnClickOK() {
        if (CommonSaveData.instance.statementSigned) {
            this.Hide();
        } else {
            LTUI.Toast('请先阅读并勾选同意隐私政策');
        }
    }
    _OnClickConfirm() {
        this.Hide();
        this.cacheData.onConfirm?.run();
    }
    async  _OnClickCancel() {
        if (LTPlatform.instance.platform == EPlatformType.Oppo || LTPlatform.instance.platform == EPlatformType.Vivo) {
            CommonSaveData.instance.statementSigned = false;
            CommonSaveData.SaveToDisk();
            await Awaiters.Frames(1);
            LTPlatform.instance.base.exitApplication({});
        } else {
            this.Hide();
        }
        this.cacheData.onClose?.run();
    }
    protected _OnHide() { }
}
