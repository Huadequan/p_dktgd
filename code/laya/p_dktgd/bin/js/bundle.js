/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/LTG_CommonUI/Data/LTG_Com_StatementData.ts":
/*!********************************************************!*\
  !*** ./src/LTG_CommonUI/Data/LTG_Com_StatementData.ts ***!
  \********************************************************/
/*! exports provided: LTG_Com_StatementData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTG_Com_StatementData", function() { return LTG_Com_StatementData; });
/* harmony import */ var _Mediator_LTG_UI_StatementMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mediator/LTG_UI_StatementMediator */ "./src/LTG_CommonUI/Mediator/LTG_UI_StatementMediator.ts");

class LTG_Com_StatementData {
    constructor() {
        /**
         * 0 ???????????? 1????????????
         */
        this.state = 0;
    }
    Send() {
        if (window["__GM"])
            return 0;
        _Mediator_LTG_UI_StatementMediator__WEBPACK_IMPORTED_MODULE_0__["LTG_UI_StatementMediator"].instance.Show(this);
        return 0;
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Data/LTG_Com_nativeData.ts":
/*!*****************************************************!*\
  !*** ./src/LTG_CommonUI/Data/LTG_Com_nativeData.ts ***!
  \*****************************************************/
/*! exports provided: LTG_Com_NativeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTG_Com_NativeData", function() { return LTG_Com_NativeData; });
/* harmony import */ var _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/LTUtils/MathEx */ "./src/LTGame/LTUtils/MathEx.ts");
/* harmony import */ var _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../LTGame/Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _LTGame_UIExt_DefaultUI_UI_NativeInterstitalMediator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/UIExt/DefaultUI/UI_NativeInterstitalMediator */ "./src/LTGame/UIExt/DefaultUI/UI_NativeInterstitalMediator.ts");



class LTG_Com_NativeData {
    Send() {
        let showNativeInterstitial = () => __awaiter(this, void 0, void 0, function* () {
            let ad = yield _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.getNativeAd(_LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_0__["default"].RandomFromArray(_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.platformData.nativeinpageIds));
            if (ad) {
                this.native = ad;
                _LTGame_UIExt_DefaultUI_UI_NativeInterstitalMediator__WEBPACK_IMPORTED_MODULE_2__["default"].instance.Show(this);
                return 0;
            }
        });
        showNativeInterstitial();
        return 0;
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Mediator/LTG_UI_StatementMediator.ts":
/*!***************************************************************!*\
  !*** ./src/LTG_CommonUI/Mediator/LTG_UI_StatementMediator.ts ***!
  \***************************************************************/
/*! exports provided: LTG_UI_StatementMediator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTG_UI_StatementMediator", function() { return LTG_UI_StatementMediator; });
/* harmony import */ var _UI_LTCom_LTG_UI_Statement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UI/LTCom/LTG_UI_Statement */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_Statement.ts");
/* harmony import */ var _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../LTGame/Commom/CommonSaveData */ "./src/LTGame/Commom/CommonSaveData.ts");
/* harmony import */ var _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTGame/Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LTGame/Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _LTGame_Async_Awaiters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../LTGame/Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");






class LTG_UI_StatementMediator {
    static get instance() {
        if (this._instance == null) {
            this._instance = new LTG_UI_StatementMediator();
            this._instance.ui = _UI_LTCom_LTG_UI_Statement__WEBPACK_IMPORTED_MODULE_0__["default"].createInstance();
            fgui.GRoot.inst.addChild(this.instance.ui);
            this.instance.ui.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
            this.instance.ui.sortingOrder = Number.MAX_SAFE_INTEGER - 10;
        }
        return this._instance;
    }
    Show(obj) {
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
        this.ui.m_tog.selected = _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.statementSigned;
        this.ui.m_state.selectedIndex = this.cacheData.state;
        this.ui.m_content.m_txt_state.text = `
        ???????????????2021???11???11???
        ???????????????2021???11???11???

        ?????????????????????(?????????????????????)???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        1. ????????????
        a) ?????????????????????????????????????????????????????????????????????????????????
        b) ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????IP????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        c) ????????????????????????????????????????????????????????????????????????
        ???????????????????????????????????????????????????????????????
        a) ???????????????????????????????????????????????????????????????????????????
        b) ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        c) ?????????????????????????????????????????????????????????????????????????????????
        2. ????????????
        a) ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        b) ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        c) ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        3. ????????????
        ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        a) ??????????????????????????????????????????
        b) ??????????????????????????????????????????????????????????????????????????????????????????
        c) ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        d) ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        e) ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        f) ???????????????????????????????????????????????????????????????????????????
        4. ?????????????????????
        ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        5. Cookie?????????
        a) ?????????????????????cookies????????????????????????????????????????????????????????????cookies???????????????????????????????????????cookies?????????????????????????????????????????????cookies?????????????????????????????????????????????????????????????????????
        b) ????????????????????????????????????cookies????????????????????????????????????????????????????????????cookies?????????????????????????????????cookies?????????????????????????????????????????????cookies?????????????????????????????????
        c) ??????????????????cookies????????????????????????????????????????????????
        6. ????????????
        a) ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        b) ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        7.????????????
        a)?????????????????????????????????????????????????????????????????????????????????????????????????????????: 1939322522@qq.com????????????????????????????????????????????????????????????????????????????????????
    
        `;
    }
    _OnClickToggle() {
        _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.statementSigned = this.ui.m_tog.selected;
        _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].SaveToDisk();
    }
    _OnClickOK() {
        if (_LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.statementSigned) {
            this.Hide();
        }
        else {
            _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_2__["default"].Toast('???????????????????????????????????????');
        }
    }
    _OnClickConfirm() {
        var _a;
        this.Hide();
        (_a = this.cacheData.onConfirm) === null || _a === void 0 ? void 0 : _a.run();
    }
    _OnClickCancel() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].Oppo || _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].Vivo) {
                _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.statementSigned = false;
                _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].SaveToDisk();
                yield _LTGame_Async_Awaiters__WEBPACK_IMPORTED_MODULE_5__["default"].Frames(1);
                _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.base.exitApplication({});
            }
            else {
                this.Hide();
            }
            (_a = this.cacheData.onClose) === null || _a === void 0 ? void 0 : _a.run();
        });
    }
    _OnHide() { }
}


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTComBinder.ts":
/*!**************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTComBinder.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTComBinder; });
/* harmony import */ var _LTG_UI_RankList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LTG_UI_RankList */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_RankList.ts");
/* harmony import */ var _LTG_UI_btn_normalg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LTG_UI_btn_normalg */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_btn_normalg.ts");
/* harmony import */ var _LTG_UI_item_rank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LTG_UI_item_rank */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_item_rank.ts");
/* harmony import */ var _LTG_UI_Roll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LTG_UI_Roll */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_Roll.ts");
/* harmony import */ var _LTG_UI_view_roll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LTG_UI_view_roll */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_roll.ts");
/* harmony import */ var _LTG_UI_view_roll_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LTG_UI_view_roll_panel */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_roll_panel.ts");
/* harmony import */ var _LTG_UI_item_view_roll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LTG_UI_item_view_roll */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_item_view_roll.ts");
/* harmony import */ var _LTG_UI_btn_refuse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LTG_UI_btn_refuse */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_btn_refuse.ts");
/* harmony import */ var _LTG_UI_ScreenShoot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LTG_UI_ScreenShoot */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_ScreenShoot.ts");
/* harmony import */ var _LTG_UI_view_screenshoot__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LTG_UI_view_screenshoot */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_screenshoot.ts");
/* harmony import */ var _LTG_UI_normal_btn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LTG_UI_normal_btn */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_normal_btn.ts");
/* harmony import */ var _LTG_UI_Set__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LTG_UI_Set */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_Set.ts");
/* harmony import */ var _LTG_UI_view_set__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LTG_UI_view_set */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_set.ts");
/* harmony import */ var _LTG_UI_view_title_set__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./LTG_UI_view_title_set */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_title_set.ts");
/* harmony import */ var _LTG_UI_toggle_01__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./LTG_UI_toggle_01 */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_toggle_01.ts");
/* harmony import */ var _LTG_UI_Sign__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./LTG_UI_Sign */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_Sign.ts");
/* harmony import */ var _LTG_UI_view_sign__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./LTG_UI_view_sign */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_sign.ts");
/* harmony import */ var _LTG_UI_view_item_sign_01__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./LTG_UI_view_item_sign_01 */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_item_sign_01.ts");
/* harmony import */ var _LTG_UI_view_item_sign_07__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./LTG_UI_view_item_sign_07 */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_item_sign_07.ts");
/* harmony import */ var _LTG_UI_normal_btn_ad__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./LTG_UI_normal_btn_ad */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_normal_btn_ad.ts");
/* harmony import */ var _LTG_UI_Statement__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./LTG_UI_Statement */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_Statement.ts");
/* harmony import */ var _LTG_UI_state_txt__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./LTG_UI_state_txt */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_state_txt.ts");
/* harmony import */ var _LTG_UI_TrySkin__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./LTG_UI_TrySkin */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_TrySkin.ts");
/* harmony import */ var _LTG_UI_try_view__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./LTG_UI_try_view */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_try_view.ts");
/* harmony import */ var _LTG_UI_btn_next_2__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./LTG_UI_btn_next_2 */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_btn_next_2.ts");
/* harmony import */ var _LTG_UI_btn_get__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./LTG_UI_btn_get */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_btn_get.ts");
/* harmony import */ var _LTG_UI_VideoList__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./LTG_UI_VideoList */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_VideoList.ts");
/* harmony import */ var _LTG_UI_top3__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./LTG_UI_top3 */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_top3.ts");
/* harmony import */ var _LTG_UI_iconVdieo__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./LTG_UI_iconVdieo */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_iconVdieo.ts");
/* harmony import */ var _LTG_UI_videoItem__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./LTG_UI_videoItem */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_videoItem.ts");
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/






























class LTComBinder {
    static bindAll() {
        fgui.UIObjectFactory.setExtension(_LTG_UI_RankList__WEBPACK_IMPORTED_MODULE_0__["default"].URL, _LTG_UI_RankList__WEBPACK_IMPORTED_MODULE_0__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_btn_normalg__WEBPACK_IMPORTED_MODULE_1__["default"].URL, _LTG_UI_btn_normalg__WEBPACK_IMPORTED_MODULE_1__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_item_rank__WEBPACK_IMPORTED_MODULE_2__["default"].URL, _LTG_UI_item_rank__WEBPACK_IMPORTED_MODULE_2__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_Roll__WEBPACK_IMPORTED_MODULE_3__["default"].URL, _LTG_UI_Roll__WEBPACK_IMPORTED_MODULE_3__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_roll__WEBPACK_IMPORTED_MODULE_4__["default"].URL, _LTG_UI_view_roll__WEBPACK_IMPORTED_MODULE_4__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_roll_panel__WEBPACK_IMPORTED_MODULE_5__["default"].URL, _LTG_UI_view_roll_panel__WEBPACK_IMPORTED_MODULE_5__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_item_view_roll__WEBPACK_IMPORTED_MODULE_6__["default"].URL, _LTG_UI_item_view_roll__WEBPACK_IMPORTED_MODULE_6__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_btn_refuse__WEBPACK_IMPORTED_MODULE_7__["default"].URL, _LTG_UI_btn_refuse__WEBPACK_IMPORTED_MODULE_7__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_ScreenShoot__WEBPACK_IMPORTED_MODULE_8__["default"].URL, _LTG_UI_ScreenShoot__WEBPACK_IMPORTED_MODULE_8__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_screenshoot__WEBPACK_IMPORTED_MODULE_9__["default"].URL, _LTG_UI_view_screenshoot__WEBPACK_IMPORTED_MODULE_9__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_normal_btn__WEBPACK_IMPORTED_MODULE_10__["default"].URL, _LTG_UI_normal_btn__WEBPACK_IMPORTED_MODULE_10__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_Set__WEBPACK_IMPORTED_MODULE_11__["default"].URL, _LTG_UI_Set__WEBPACK_IMPORTED_MODULE_11__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_set__WEBPACK_IMPORTED_MODULE_12__["default"].URL, _LTG_UI_view_set__WEBPACK_IMPORTED_MODULE_12__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_title_set__WEBPACK_IMPORTED_MODULE_13__["default"].URL, _LTG_UI_view_title_set__WEBPACK_IMPORTED_MODULE_13__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_toggle_01__WEBPACK_IMPORTED_MODULE_14__["default"].URL, _LTG_UI_toggle_01__WEBPACK_IMPORTED_MODULE_14__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_Sign__WEBPACK_IMPORTED_MODULE_15__["default"].URL, _LTG_UI_Sign__WEBPACK_IMPORTED_MODULE_15__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_sign__WEBPACK_IMPORTED_MODULE_16__["default"].URL, _LTG_UI_view_sign__WEBPACK_IMPORTED_MODULE_16__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_item_sign_01__WEBPACK_IMPORTED_MODULE_17__["default"].URL, _LTG_UI_view_item_sign_01__WEBPACK_IMPORTED_MODULE_17__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_item_sign_07__WEBPACK_IMPORTED_MODULE_18__["default"].URL, _LTG_UI_view_item_sign_07__WEBPACK_IMPORTED_MODULE_18__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_normal_btn_ad__WEBPACK_IMPORTED_MODULE_19__["default"].URL, _LTG_UI_normal_btn_ad__WEBPACK_IMPORTED_MODULE_19__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_Statement__WEBPACK_IMPORTED_MODULE_20__["default"].URL, _LTG_UI_Statement__WEBPACK_IMPORTED_MODULE_20__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_state_txt__WEBPACK_IMPORTED_MODULE_21__["default"].URL, _LTG_UI_state_txt__WEBPACK_IMPORTED_MODULE_21__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_TrySkin__WEBPACK_IMPORTED_MODULE_22__["default"].URL, _LTG_UI_TrySkin__WEBPACK_IMPORTED_MODULE_22__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_try_view__WEBPACK_IMPORTED_MODULE_23__["default"].URL, _LTG_UI_try_view__WEBPACK_IMPORTED_MODULE_23__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_btn_next_2__WEBPACK_IMPORTED_MODULE_24__["default"].URL, _LTG_UI_btn_next_2__WEBPACK_IMPORTED_MODULE_24__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_btn_get__WEBPACK_IMPORTED_MODULE_25__["default"].URL, _LTG_UI_btn_get__WEBPACK_IMPORTED_MODULE_25__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_VideoList__WEBPACK_IMPORTED_MODULE_26__["default"].URL, _LTG_UI_VideoList__WEBPACK_IMPORTED_MODULE_26__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_top3__WEBPACK_IMPORTED_MODULE_27__["default"].URL, _LTG_UI_top3__WEBPACK_IMPORTED_MODULE_27__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_iconVdieo__WEBPACK_IMPORTED_MODULE_28__["default"].URL, _LTG_UI_iconVdieo__WEBPACK_IMPORTED_MODULE_28__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_videoItem__WEBPACK_IMPORTED_MODULE_29__["default"].URL, _LTG_UI_videoItem__WEBPACK_IMPORTED_MODULE_29__["default"]);
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_RankList.ts":
/*!******************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_RankList.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_RankList; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_RankList extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "RankList"));
    }
    onConstruct() {
        this.m_opencontext = this.getControllerAt(0);
        this.m_bg = (this.getChildAt(0));
        this.m_txt_rank = (this.getChildAt(3));
        this.m_txt_nikename = (this.getChildAt(4));
        this.m_txt_count = (this.getChildAt(5));
        this.m_btn_close = (this.getChildAt(6));
        this.m_btn_pre = (this.getChildAt(7));
        this.m_btn_next = (this.getChildAt(8));
        this.m_openView = (this.getChildAt(9));
        this.m_list_rank = (this.getChildAt(10));
        this.m_item_self = (this.getChildAt(11));
    }
}
LTG_UI_RankList.URL = "ui://6ctaayzkoegw4r";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_Roll.ts":
/*!**************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_Roll.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_Roll; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_Roll extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "Roll"));
    }
    onConstruct() {
        this.m_plat = this.getControllerAt(0);
        this.m_img_bg = (this.getChildAt(0));
        this.m_view = (this.getChildAt(1));
        this.m_btn_no = (this.getChildAt(2));
        this.m_btn_close = (this.getChildAt(3));
        this.m_btn_roll = (this.getChildAt(4));
    }
}
LTG_UI_Roll.URL = "ui://6ctaayzkoegw50";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_ScreenShoot.ts":
/*!*********************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_ScreenShoot.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_ScreenShoot; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_ScreenShoot extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "ScreenShoot"));
    }
    onConstruct() {
        this.m_img_bg = (this.getChildAt(0));
        this.m_view = (this.getChildAt(1));
        this.m_img_cover = (this.getChildAt(2));
        this.m_anim_cover = this.getTransitionAt(0);
    }
}
LTG_UI_ScreenShoot.URL = "ui://6ctaayzkoegw5k";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_Set.ts":
/*!*************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_Set.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_Set; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_Set extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "Set"));
    }
    onConstruct() {
        this.m_img_bg = (this.getChildAt(0));
        this.m_view = (this.getChildAt(1));
    }
}
LTG_UI_Set.URL = "ui://6ctaayzkoegw61";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_Sign.ts":
/*!**************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_Sign.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_Sign; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_Sign extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "Sign"));
    }
    onConstruct() {
        this.m_view = (this.getChildAt(1));
        this.m_btn_close = (this.getChildAt(2));
        this.m_anim_enter = this.getTransitionAt(0);
        this.m_anim_exit = this.getTransitionAt(1);
    }
}
LTG_UI_Sign.URL = "ui://6ctaayzkoegw6q";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_Statement.ts":
/*!*******************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_Statement.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_Statement; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_Statement extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "Statement"));
    }
    onConstruct() {
        this.m_state = this.getControllerAt(0);
        this.m_content = (this.getChildAt(2));
        this.m_btn_ok = (this.getChildAt(4));
        this.m_tog = (this.getChildAt(5));
        this.m_btn_confirm = (this.getChildAt(6));
        this.m_btn_refuse = (this.getChildAt(7));
    }
}
LTG_UI_Statement.URL = "ui://6ctaayzkoegw7v";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_TrySkin.ts":
/*!*****************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_TrySkin.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_TrySkin; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_TrySkin extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "TrySkin"));
    }
    onConstruct() {
        this.m_state = this.getControllerAt(0);
        this.m_img_bg = (this.getChildAt(0));
        this.m_img_display = (this.getChildAt(2));
        this.m_view = (this.getChildAt(3));
        this.m_btn_no = (this.getChildAt(4));
        this.m_btn_try = (this.getChildAt(5));
        this.m___nativeinpage = (this.getChildAt(6));
        this.m_btn_close = (this.getChildAt(8));
    }
}
LTG_UI_TrySkin.URL = "ui://6ctaayzkoegw86";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_VideoList.ts":
/*!*******************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_VideoList.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_VideoList; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_VideoList extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "VideoList"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
        this.m_item1 = (this.getChildAt(5));
        this.m_item2 = (this.getChildAt(6));
        this.m_item3 = (this.getChildAt(7));
        this.m_list = (this.getChildAt(8));
        this.m_btn_back = (this.getChildAt(9));
        this.m_btn_like = (this.getChildAt(10));
        this.m_btn_new = (this.getChildAt(11));
        this.m_btn_create = (this.getChildAt(12));
    }
}
LTG_UI_VideoList.URL = "ui://6ctaayzkoegw8s";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_btn_get.ts":
/*!*****************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_btn_get.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_btn_get; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_btn_get extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "btn_get"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
        this.m_ad = (this.getChildAt(1));
        this.m_t4 = this.getTransitionAt(0);
    }
}
LTG_UI_btn_get.URL = "ui://6ctaayzkoegw8j";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_btn_next_2.ts":
/*!********************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_btn_next_2.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_btn_next_2; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_btn_next_2 extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "btn_next_2"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
        this.m_t4 = this.getTransitionAt(0);
    }
}
LTG_UI_btn_next_2.URL = "ui://6ctaayzkoegw8g";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_btn_normalg.ts":
/*!*********************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_btn_normalg.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_btn_normalg; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_btn_normalg extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "btn_normalg"));
    }
    onConstruct() {
        this.m_red = this.getControllerAt(0);
        this.m_bg = (this.getChildAt(0));
    }
}
LTG_UI_btn_normalg.URL = "ui://6ctaayzkoegw4u";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_btn_refuse.ts":
/*!********************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_btn_refuse.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_btn_refuse; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_btn_refuse extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "btn_refuse"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
    }
}
LTG_UI_btn_refuse.URL = "ui://6ctaayzkoegw5f";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_iconVdieo.ts":
/*!*******************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_iconVdieo.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_iconVdieo; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_iconVdieo extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "iconVdieo"));
    }
    onConstruct() {
        this.m_icon = (this.getChildAt(1));
    }
}
LTG_UI_iconVdieo.URL = "ui://6ctaayzkoegw90";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_item_rank.ts":
/*!*******************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_item_rank.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_item_rank; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_item_rank extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "item_rank"));
    }
    onConstruct() {
        this.m_txt_nickname = (this.getChildAt(1));
        this.m_txt_rank = (this.getChildAt(2));
        this.m_txt_score = (this.getChildAt(3));
    }
}
LTG_UI_item_rank.URL = "ui://6ctaayzkoegw4z";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_item_view_roll.ts":
/*!************************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_item_view_roll.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_item_view_roll; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_item_view_roll extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "item_view_roll"));
    }
    onConstruct() {
        this.m_selected = this.getControllerAt(0);
        this.m_reward = (this.getChildAt(0));
        this.m_text_name = (this.getChildAt(1));
        this.m_loader_icon = (this.getChildAt(2));
        this.m_loader_title = (this.getChildAt(3));
        this.m_t0 = this.getTransitionAt(0);
    }
}
LTG_UI_item_view_roll.URL = "ui://6ctaayzkoegw54";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_normal_btn.ts":
/*!********************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_normal_btn.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_normal_btn; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_normal_btn extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "normal_btn"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
    }
}
LTG_UI_normal_btn.URL = "ui://6ctaayzkoegw5u";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_normal_btn_ad.ts":
/*!***********************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_normal_btn_ad.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_normal_btn_ad; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_normal_btn_ad extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "normal_btn_ad"));
    }
    onConstruct() {
        this.m_ctrl = this.getControllerAt(1);
        this.m_bg = (this.getChildAt(0));
        this.m_t0 = this.getTransitionAt(0);
    }
}
LTG_UI_normal_btn_ad.URL = "ui://6ctaayzkoegw7q";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_state_txt.ts":
/*!*******************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_state_txt.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_state_txt; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_state_txt extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "state_txt"));
    }
    onConstruct() {
        this.m_txt_state = (this.getChildAt(0));
    }
}
LTG_UI_state_txt.URL = "ui://6ctaayzkoegw7w";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_toggle_01.ts":
/*!*******************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_toggle_01.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_toggle_01; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_toggle_01 extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "toggle_01"));
    }
    onConstruct() {
        this.m_toggle_state = this.getControllerAt(0);
    }
}
LTG_UI_toggle_01.URL = "ui://6ctaayzkoegw69";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_top3.ts":
/*!**************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_top3.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_top3; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_top3 extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "top3"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
        this.m_icon = (this.getChildAt(2));
        this.m_rank = (this.getChildAt(4));
        this.m_digs = (this.getChildAt(5));
        this.m_nickname = (this.getChildAt(7));
    }
}
LTG_UI_top3.URL = "ui://6ctaayzkoegw8x";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_try_view.ts":
/*!******************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_try_view.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_try_view; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_try_view extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "try_view"));
    }
    onConstruct() {
        this.m_progress = (this.getChildAt(1));
    }
}
LTG_UI_try_view.URL = "ui://6ctaayzkoegw88";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_videoItem.ts":
/*!*******************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_videoItem.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_videoItem; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_videoItem extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "videoItem"));
    }
    onConstruct() {
        this.m_icon = (this.getChildAt(2));
        this.m_nickname = (this.getChildAt(5));
        this.m_digs = (this.getChildAt(6));
    }
}
LTG_UI_videoItem.URL = "ui://6ctaayzkoegw98";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_item_sign_01.ts":
/*!***************************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_item_sign_01.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_item_sign_01; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_item_sign_01 extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_item_sign_01"));
    }
    onConstruct() {
        this.m_state_get = this.getControllerAt(0);
        this.m_mode = this.getControllerAt(1);
        this.m_img_bg = (this.getChildAt(0));
        this.m_img_can_get = (this.getChildAt(1));
        this.m_img_got = (this.getChildAt(2));
        this.m_loader_icon = (this.getChildAt(3));
        this.m_text_day = (this.getChildAt(4));
        this.m_text_name = (this.getChildAt(5));
    }
}
LTG_UI_view_item_sign_01.URL = "ui://6ctaayzkoegw6v";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_item_sign_07.ts":
/*!***************************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_item_sign_07.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_item_sign_07; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_item_sign_07 extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_item_sign_07"));
    }
    onConstruct() {
        this.m_state_get = this.getControllerAt(0);
        this.m_img_can_get = (this.getChildAt(0));
        this.m_loader_icon = (this.getChildAt(1));
        this.m_loader_title = (this.getChildAt(2));
        this.m_img_got = (this.getChildAt(3));
    }
}
LTG_UI_view_item_sign_07.URL = "ui://6ctaayzkoegw7n";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_roll.ts":
/*!*******************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_roll.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_roll; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_roll extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_roll"));
    }
    onConstruct() {
        this.m_view_roll = (this.getChildAt(0));
        this.m_progress_supper = (this.getChildAt(1));
        this.m_text_notice = (this.getChildAt(3));
        this.m_anim_special = this.getTransitionAt(0);
    }
}
LTG_UI_view_roll.URL = "ui://6ctaayzkoegw51";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_roll_panel.ts":
/*!*************************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_roll_panel.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_roll_panel; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_roll_panel extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_roll_panel"));
    }
    onConstruct() {
        this.m_item_01 = (this.getChildAt(1));
        this.m_item_02 = (this.getChildAt(2));
        this.m_item_03 = (this.getChildAt(3));
        this.m_item_04 = (this.getChildAt(4));
        this.m_item_05 = (this.getChildAt(5));
        this.m_item_06 = (this.getChildAt(6));
    }
}
LTG_UI_view_roll_panel.URL = "ui://6ctaayzkoegw52";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_screenshoot.ts":
/*!**************************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_screenshoot.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_screenshoot; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_screenshoot extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_screenshoot"));
    }
    onConstruct() {
        this.m_img_display = (this.getChildAt(0));
        this.m_view_play = (this.getChildAt(2));
        this.m_reward_icon = (this.getChildAt(3));
        this.m_btn_share = (this.getChildAt(4));
        this.m_btn_close = (this.getChildAt(5));
        this.m_t0 = this.getTransitionAt(0);
    }
}
LTG_UI_view_screenshoot.URL = "ui://6ctaayzkoegw5l";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_set.ts":
/*!******************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_set.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_set; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_set extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_set"));
    }
    onConstruct() {
        this.m_toggle_music = (this.getChildAt(4));
        this.m_toggle_shake = (this.getChildAt(5));
        this.m_btn_code = (this.getChildAt(10));
        this.m_btn_close = (this.getChildAt(11));
        this.m_btn_statement = (this.getChildAt(12));
    }
}
LTG_UI_view_set.URL = "ui://6ctaayzkoegw62";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_sign.ts":
/*!*******************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_sign.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_sign; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_sign extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_sign"));
    }
    onConstruct() {
        this.m_state = this.getControllerAt(0);
        this.m_day_1 = (this.getChildAt(2));
        this.m_day_2 = (this.getChildAt(3));
        this.m_day_3 = (this.getChildAt(4));
        this.m_day_4 = (this.getChildAt(5));
        this.m_day_5 = (this.getChildAt(6));
        this.m_day_6 = (this.getChildAt(7));
        this.m_day_7 = (this.getChildAt(8));
        this.m_text_signed = (this.getChildAt(9));
        this.m_btn_normal = (this.getChildAt(10));
        this.m_btn_watchad = (this.getChildAt(11));
    }
}
LTG_UI_view_sign.URL = "ui://6ctaayzkoegw6s";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_title_set.ts":
/*!************************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_title_set.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_title_set; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_title_set extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_title_set"));
    }
    onConstruct() {
        this.m_title_icon = (this.getChildAt(1));
    }
}
LTG_UI_view_title_set.URL = "ui://6ctaayzkoegw64";


/***/ }),

/***/ "./src/LTGame/Async/Awaiters.ts":
/*!**************************************!*\
  !*** ./src/LTGame/Async/Awaiters.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Awaiters; });
class Awaiters {
    static NextFrame() {
        // ?????????????????????????????????,???????????????
        return this.Frames(2);
    }
    static Frames(num) {
        return new Promise(function (resolve) {
            Laya.timer.frameOnce(num, null, () => {
                resolve();
            });
        });
    }
    static Seconds(num) {
        return new Promise(function (resolve) {
            Laya.timer.once(num * 1000, null, () => {
                resolve();
            });
        });
    }
}


/***/ }),

/***/ "./src/LTGame/Commom/CommonEventId.ts":
/*!********************************************!*\
  !*** ./src/LTGame/Commom/CommonEventId.ts ***!
  \********************************************/
/*! exports provided: CommonEventId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonEventId", function() { return CommonEventId; });
class CommonEventId {
}
CommonEventId.PAUSE_AUDIO = "PAUSE_AUDIO";
CommonEventId.RESUM_AUDIO = "RESUM_AUDIO";
CommonEventId.AD_CONFIG_GETTED = "AD_CONFIG_GETTED";
CommonEventId.SELF_AD_INITED = "SELF_AD_INITED";


/***/ }),

/***/ "./src/LTGame/Commom/CommonProgressData.ts":
/*!*************************************************!*\
  !*** ./src/LTGame/Commom/CommonProgressData.ts ***!
  \*************************************************/
/*! exports provided: CommonProgressData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonProgressData", function() { return CommonProgressData; });
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _LTUtils_ArrayEx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LTUtils/ArrayEx */ "./src/LTGame/LTUtils/ArrayEx.ts");


class SaveData {
    constructor() {
        this.saveTags = [];
        this.saveIdArray = [];
        this.saveProgressArray = [];
    }
}
class CommonProgressData {
    constructor(savePath) {
        this._savePath = savePath;
    }
    static get instance() {
        if (this._instance == null) {
            console.error("CommonProgressData???????????????,????????????Init???????????????");
        }
        return this._instance;
    }
    static Init(saveName) {
        if (this._instance != null) {
            console.error("CommonProgressData???????????????????????????");
            return;
        }
        this._instance = new CommonProgressData(saveName);
        this._instance._ReadData();
        console.log('CommonProgressData???????????????:' + saveName);
    }
    _ReadData() {
        let readStr = Laya.LocalStorage.getJSON(this._savePath);
        this._saveData = new SaveData();
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_0__["default"].IsNullOrEmpty(readStr)) {
            this._SaveData();
        }
        else {
            let jsonData = JSON.parse(readStr);
            for (let key in jsonData) {
                this._saveData[key] = jsonData[key];
            }
        }
    }
    _SaveData() {
        let json = JSON.stringify(this._saveData);
        Laya.LocalStorage.setJSON(this._savePath, json);
    }
    _GetTagIndex(tag) {
        let saveIndex = this._saveData.saveTags.indexOf(tag);
        if (saveIndex > -1) {
            return saveIndex;
        }
        this._saveData.saveTags.push(tag);
        this._saveData.saveProgressArray.push([]);
        this._saveData.saveIdArray.push([]);
        return this._saveData.saveTags.length - 1;
    }
    _GetIds(tagIndex) {
        if (this._saveData.saveIdArray.length > tagIndex) {
            return this._saveData.saveIdArray[tagIndex];
        }
        console.error("?????????????????????");
        let newArray = [];
        this._saveData.saveIdArray[tagIndex] = newArray;
        return newArray;
    }
    _GetProgresses(tagIndex) {
        if (this._saveData.saveProgressArray.length > tagIndex) {
            return this._saveData.saveProgressArray[tagIndex];
        }
        console.error("?????????????????????");
        let newArray = [];
        this._saveData.saveProgressArray[tagIndex] = newArray;
        return newArray;
    }
    AddProgress(tag, id, addProgress = 1) {
        let tagIndex = this._GetTagIndex(tag);
        let idArray = this._GetIds(tagIndex);
        let progressArray = this._GetProgresses(tagIndex);
        let idIndex = idArray.indexOf(id);
        if (idIndex > -1) {
            progressArray[idIndex] += addProgress;
        }
        else {
            idArray.push(id);
            progressArray.push(addProgress);
            idIndex = idArray.length - 1;
        }
        this._SaveData();
        return progressArray[idIndex];
    }
    SetProgress(tag, id, setProgress) {
        let tagIndex = this._GetTagIndex(tag);
        let idArray = this._GetIds(tagIndex);
        let progressArray = this._GetProgresses(tagIndex);
        let idIndex = idArray.indexOf(id);
        if (idIndex > -1) {
            progressArray[idIndex] = setProgress;
        }
        else {
            idArray.push(id);
            progressArray.push(setProgress);
            idIndex = idArray.length - 1;
        }
        this._SaveData();
        return progressArray[idIndex];
    }
    ReadProgress(tag, id, defaultProgress = 0) {
        let tagIndex = this._GetTagIndex(tag);
        let idArray = this._GetIds(tagIndex);
        let progressArray = this._GetProgresses(tagIndex);
        let idIndex = idArray.indexOf(id);
        if (idIndex > -1) {
            return progressArray[idIndex];
        }
        else {
            return defaultProgress;
        }
    }
    ClearProgress(tag, id) {
        let tagIndex = this._GetTagIndex(tag);
        let idArray = this._GetIds(tagIndex);
        let progressArray = this._GetProgresses(tagIndex);
        let idIndex = idArray.indexOf(id);
        if (idIndex > -1) {
            _LTUtils_ArrayEx__WEBPACK_IMPORTED_MODULE_1__["default"].RemoveAt(idArray, idIndex);
            _LTUtils_ArrayEx__WEBPACK_IMPORTED_MODULE_1__["default"].RemoveAt(progressArray, idIndex);
        }
        this._SaveData();
    }
    ClearAll() {
        this._saveData = new SaveData();
        this._SaveData();
    }
}


/***/ }),

/***/ "./src/LTGame/Commom/CommonSaveData.ts":
/*!*********************************************!*\
  !*** ./src/LTGame/Commom/CommonSaveData.ts ***!
  \*********************************************/
/*! exports provided: SaveData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveData", function() { return SaveData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommonSaveData; });
/* harmony import */ var _LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LTUtils/LTUtils */ "./src/LTGame/LTUtils/LTUtils.ts");
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");


class SaveData {
    constructor() {
        /**
         * ???????????????????????????
         */
        this.lastOpenTick = 0;
        /**
         * ?????????????????????
         */
        this.isNewDay = true;
        /**
         * ???????????????
         */
        this.isSigned = false;
        /**
         * ????????????
         */
        this.signDayCount = 0;
        /**
         * ??????????????????
         */
        this.isMusicOn = true;
        /**
         * ??????????????????
         */
        this.isShakeOn = true;
        /**
         * ????????????????????????
         */
        this.interstitialCount = 0;
        /**
         * ??????????????????
         * 0 ???????????????
         * 1 ??????????????????
         */
        this.trySignMissMode = 0;
        /**
        * ???????????? ????????????
        */
        this.checkFlag = true;
        /**
         * ??????????????????
         * 0 ???????????????
         * 1 ??????????????????
         */
        this.endRewardMissMode = 0;
        /**
         * ??????????????????
         */
        this.freeRollCount = 1;
        this.totalRollCount = 0;
        /**
         * ??????????????????????????????
         */
        this.ExSkinAdCount = 0;
        /**
         * ???????????????
         */
        this.codeStrList = [];
        /**
         * ???????????????????????????(?????????)
         */
        this.codeADCounts = [];
        /**
        * ????????????????????????????????????
        */
        this.channelId = '';
        /**
         * ????????????id= openid/???????????????????????????
         */
        this.uid = '';
        /** ?????? */
        this.nickName = '';
        /** ?????? */
        this.avatarUrl = '';
        /** ???????????????????????? */
        this.needUserInfo = false;
        /**????????????????????? */
        this.hasShotcut = false;
        /**???????????????????????? */
        this.nativeClickCount = 0;
        /**???????????????????????? */
        this.statementSigned = false;
    }
}
class CommonSaveData {
    constructor() {
        this._savePath = "ltg-common-save.sav";
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new CommonSaveData();
            this._instance._ReadFromFile();
            this._instance._InitData();
        }
        return this._instance._saveData;
    }
    static SaveToDisk() {
        if (!this._instance)
            return;
        let json = JSON.stringify(this._instance._saveData);
        Laya.LocalStorage.setJSON(this._instance._savePath, json);
    }
    _InitData() {
        this._saveData.isNewDay = false;
        if (this._saveData.lastOpenTick == 0) {
            this._saveData.isNewDay = true;
        }
        else {
            let lastOpenDayCount = _LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_0__["LTUtils"].GetCurrentDayCount(this._saveData.lastOpenTick);
            let currentOpenDayCount = _LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_0__["LTUtils"].GetCurrentDayCount(Date.now());
            if (currentOpenDayCount != lastOpenDayCount) {
                this._saveData.isNewDay = true;
                this._saveData.interstitialCount = 0;
            }
        }
        this._saveData.lastOpenTick = Date.now();
        if (this._saveData.isNewDay) {
            this._saveData.isSigned = false;
            this._saveData.freeRollCount = 1;
            this._saveData.nativeClickCount = 0;
        }
        CommonSaveData.SaveToDisk();
    }
    _ReadFromFile() {
        let readStr = Laya.LocalStorage.getJSON(this._savePath);
        this._saveData = new SaveData();
        if (!_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_1__["default"].IsNullOrEmpty(readStr)) {
            let jsonData = JSON.parse(readStr);
            for (let key in jsonData) {
                this._saveData[key] = jsonData[key];
            }
        }
        console.log('common savedata:', this._saveData);
    }
}


/***/ }),

/***/ "./src/LTGame/Commom/EScreenOrientation.ts":
/*!*************************************************!*\
  !*** ./src/LTGame/Commom/EScreenOrientation.ts ***!
  \*************************************************/
/*! exports provided: EScreenOrientation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EScreenOrientation", function() { return EScreenOrientation; });
var EScreenOrientation;
(function (EScreenOrientation) {
    /**
     * ??????
     */
    EScreenOrientation[EScreenOrientation["Portrait"] = 0] = "Portrait";
    /**
     * ??????
     */
    EScreenOrientation[EScreenOrientation["Landscape"] = 1] = "Landscape";
})(EScreenOrientation || (EScreenOrientation = {}));


/***/ }),

/***/ "./src/LTGame/Config/ConfigManager.ts":
/*!********************************************!*\
  !*** ./src/LTGame/Config/ConfigManager.ts ***!
  \********************************************/
/*! exports provided: ConfigManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigManager", function() { return ConfigManager; });
class ConfigManager {
    static get needLoadCount() {
        return this._configList.length;
    }
    static AddConfig(configName) {
        if (configName.path == null) {
            console.error("?????????????????????", configName);
            return;
        }
        ConfigManager._configList.push(configName);
    }
    static StartLoad(onFinished, onProgress = null) {
        if (ConfigManager._configList.length == 0) {
            if (onFinished) {
                onFinished.run();
            }
            return;
        }
        let loadUrls = [];
        for (let configName of ConfigManager._configList) {
            loadUrls.push(configName.path);
        }
        Laya.loader.create(loadUrls, Laya.Handler.create(this, () => {
            for (let configName of ConfigManager._configList) {
                configName.data = Laya.loader.getRes(configName.path);
                configName.dataList = [];
                if (configName.isConst) {
                    Object.setPrototypeOf(configName.data, configName.config.prototype);
                }
                else {
                    for (let configKey in configName.data) {
                        let value = configName.data[configKey];
                        if (value != null) {
                            Object.setPrototypeOf(value, configName.config.prototype);
                            configName.dataList.push(value);
                        }
                    }
                    if (configName.dataList.length > 0) {
                        configName.lastData = configName.dataList[configName.dataList.length - 1];
                    }
                }
            }
            if (onFinished) {
                onFinished.run();
            }
        }), onProgress);
    }
}
ConfigManager._configList = [];


/***/ }),

/***/ "./src/LTGame/Config/LoadPackConfig.ts":
/*!*********************************************!*\
  !*** ./src/LTGame/Config/LoadPackConfig.ts ***!
  \*********************************************/
/*! exports provided: LoadPackConfig, EPackType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadPackConfig", function() { return LoadPackConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPackType", function() { return EPackType; });
class LoadPackConfig {
}
var EPackType;
(function (EPackType) {
    EPackType[EPackType["MainPack"] = 1] = "MainPack";
    EPackType[EPackType["SubPack"] = 2] = "SubPack";
    EPackType[EPackType["Remote"] = 3] = "Remote";
})(EPackType || (EPackType = {}));


/***/ }),

/***/ "./src/LTGame/Fsm/BaseState.ts":
/*!*************************************!*\
  !*** ./src/LTGame/Fsm/BaseState.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseState; });
class BaseState {
    constructor(owner, id) {
        this.owner = owner;
        this.id = id;
    }
    GetNextState() {
        if (this.isFinished) {
            return this.nextState;
        }
        return 0;
    }
    OnEnter(exitState, param) {
        this.isFinished = false;
        this.nextState = 0;
        this.passTime = 0;
        this.deltaTime = 0;
        this._DoEnter(exitState, param);
    }
    OnRunning(param, dt) {
        if (this.isFinished)
            return;
        this.deltaTime = dt;
        this.passTime += dt;
        this._DoRunning(param);
    }
    OnExit(enterState, param) {
        this._DoExit(enterState, param);
    }
    _DoEnter(exitStte, param) { }
    _DoRunning(param) { }
    _DoExit(enterState, param) { }
}


/***/ }),

/***/ "./src/LTGame/Fsm/StateMachine.ts":
/*!****************************************!*\
  !*** ./src/LTGame/Fsm/StateMachine.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StateMachine; });
class StateMachine {
    constructor() {
        this._forceChangeState = 0;
        this._states = new Map();
    }
    get count() {
        return this._states.size;
    }
    Add(addState) {
        if (this._states.has(addState.id)) {
            return false;
        }
        this._states.set(addState.id, addState);
        return true;
    }
    Remove(id) {
        return this._states.delete(id);
    }
    RemoveAll() {
        this._states.clear();
        this.currState = null;
    }
    ExitCurrState(param = null) {
        if (null != this.currState) {
            this.currState.OnExit(null, param);
            this.currState = null;
        }
    }
    ChangeState(id, param = null) {
        var state = this.Find(id);
        if (state != null) {
            if (null != this.currState) {
                this.currState.OnExit(state, param);
            }
            this.lastState = this.currState;
            this.currState = state;
            state.OnEnter(this.lastState, param);
            return true;
        }
        console.error("[?????????] ??????????????????ID:" + id);
        return false;
    }
    SetForceChangeState(id, param = null) {
        this._forceChangeState = id;
        this._forceChangeParam = param;
    }
    LogicUpdate(dt) {
        if (this.currState == null) {
            if (this._forceChangeState != 0) {
                this.ChangeState(this._forceChangeState, this._forceChangeParam);
                this._forceChangeState = 0;
                this._forceChangeParam = null;
                this.OnRunning(null, dt);
            }
            return;
        }
        if (this._forceChangeState != 0) {
            this.ChangeState(this._forceChangeState, this._forceChangeParam);
            this._forceChangeState = 0;
            this._forceChangeParam = null;
            this.OnRunning(null, dt);
            return;
        }
        let nextState = this.currState.GetNextState();
        if (nextState != 0) {
            this.ChangeState(nextState);
        }
        this.OnRunning(null, dt);
    }
    OnRunning(param, dt) {
        if (null == this.currState) {
            return;
        }
        this.currState.OnRunning(param, dt);
    }
    Find(id) {
        return this._states.get(id);
    }
}


/***/ }),

/***/ "./src/LTGame/LTUtils/ArrayEx.ts":
/*!***************************************!*\
  !*** ./src/LTGame/LTUtils/ArrayEx.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArrayEx; });
class ArrayEx {
    static Replace(arr, oldObj, newObj) {
        let index = arr.indexOf(oldObj);
        if (index < 0)
            return false;
        arr.splice(index, 1, newObj);
        return true;
    }
    static Remove(arr, obj) {
        let index = arr.indexOf(obj);
        if (index < 0)
            return false;
        arr.splice(index, 1);
        return true;
    }
    static RemoveAt(arr, index) {
        if (arr.length <= index)
            return false;
        arr.splice(index, 1);
        return true;
    }
    static Contains(arr, obj) {
        let index = arr.indexOf(obj);
        return index >= 0;
    }
    static Copy(arr) {
        let result = [];
        for (let i = 0; i < arr.length; ++i) {
            result.push(arr[i]);
        }
        return result;
    }
}


/***/ }),

/***/ "./src/LTGame/LTUtils/CameraEx.ts":
/*!****************************************!*\
  !*** ./src/LTGame/LTUtils/CameraEx.ts ***!
  \****************************************/
/*! exports provided: CameraEx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraEx", function() { return CameraEx; });
/* harmony import */ var _Vector3Ex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector3Ex */ "./src/LTGame/LTUtils/Vector3Ex.ts");

class CameraEx {
    static ScreenPosToWorldPos(camera, screenPos, fakeYPos) {
        let ray = new Laya.Ray(_Vector3Ex__WEBPACK_IMPORTED_MODULE_0__["default"].zero, _Vector3Ex__WEBPACK_IMPORTED_MODULE_0__["default"].zero);
        camera.viewportPointToRay(screenPos, ray);
        let downVec = _Vector3Ex__WEBPACK_IMPORTED_MODULE_0__["default"].s_down;
        let dotValue = _Vector3Ex__WEBPACK_IMPORTED_MODULE_0__["default"].Dot(downVec, ray.direction);
        let heightValue = ray.origin.y;
        let scaleValue = heightValue / dotValue;
        let finalDir = _Vector3Ex__WEBPACK_IMPORTED_MODULE_0__["default"].Scale(ray.direction, scaleValue);
        return _Vector3Ex__WEBPACK_IMPORTED_MODULE_0__["default"].Add(ray.origin, finalDir);
    }
    static ScreenPosToRay(camera, screenPos) {
        let ray = new Laya.Ray(_Vector3Ex__WEBPACK_IMPORTED_MODULE_0__["default"].zero, _Vector3Ex__WEBPACK_IMPORTED_MODULE_0__["default"].zero);
        let clickPoint = new Laya.Vector2(screenPos.x / Laya.stage.width, screenPos.y / Laya.stage.height);
        camera.normalizedViewportPointToRay(clickPoint, ray);
        return ray;
    }
}


/***/ }),

/***/ "./src/LTGame/LTUtils/LTUtils.ts":
/*!***************************************!*\
  !*** ./src/LTGame/LTUtils/LTUtils.ts ***!
  \***************************************/
/*! exports provided: LTUtils, randomRangeInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTUtils", function() { return LTUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomRangeInt", function() { return randomRangeInt; });
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Commom/CommonSaveData */ "./src/LTGame/Commom/CommonSaveData.ts");


class LTUtils {
    static CachFile(url) {
        if (!Laya.Browser.onWeiXin)
            return;
        var fullUrl = Laya.URL.formatURL(url);
        var fileInfo = Laya.MiniAdpter.getFileInfo(fullUrl);
        if (fileInfo == null) {
            Laya.MiniAdpter.downLoadFile(fullUrl);
        }
    }
    static DownLoadFiles(urls, complete, progress) {
        Laya.loader.create(urls, complete, progress, null, null, null, 1, true);
    }
    static SetShadow(obj, castShadow, receiveShadow) {
        // ?????????meshrender??????
        let meshRenderer = obj.meshRenderer;
        if (meshRenderer != null) {
            meshRenderer.castShadow = castShadow;
            meshRenderer.receiveShadow = receiveShadow;
        }
        let skinnedMeshRenderer = obj.skinnedMeshRenderer;
        if (skinnedMeshRenderer != null) {
            skinnedMeshRenderer.castShadow = castShadow;
            skinnedMeshRenderer.receiveShadow = receiveShadow;
        }
        let node = obj;
        for (let i = 0; i < node.numChildren; ++i) {
            let getChild = node.getChildAt(i);
            this.SetShadow(getChild, castShadow, receiveShadow);
        }
    }
    static GetComponentsInChildren(obj, cmp) {
        let result = [];
        this._GetComponentsInChildrenHelper(obj, cmp, result);
        return result;
    }
    static _GetComponentsInChildrenHelper(obj, cmp, result) {
        let cmps = obj.getComponents(cmp);
        if (cmps != null) {
            for (let i = 0; i < cmps.length; ++i) {
                result.push(cmps[i]);
            }
        }
        for (let i = 0; i < obj.numChildren; ++i) {
            let getChild = obj.getChildAt(i);
            this._GetComponentsInChildrenHelper(getChild, cmp, result);
        }
    }
    static EnableShadow(directionLight, farDistance) {
        //??????????????????
        directionLight.shadowMode = Laya.ShadowMode.Hard;
        //??????????????????
        directionLight.shadowDistance = farDistance;
        //????????????????????????
        directionLight.shadowResolution = 512;
        //????????????????????????
        directionLight.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;
    }
    static FindChild(parent, path) {
        if (path == "")
            return parent;
        var splitPath = path.split("/");
        return LTUtils._FindChild(splitPath, parent, 0);
    }
    static _FindChild(nodeName, currentNode, currentLevel) {
        var findChild = currentNode.getChildByName(nodeName[currentLevel]);
        if (findChild == null) {
            console.log(currentNode, "??????????????????:", nodeName[currentLevel]);
            return null;
        }
        if (currentLevel + 1 == nodeName.length) {
            return findChild;
        }
        else {
            return LTUtils._FindChild(nodeName, findChild, currentLevel + 1);
        }
    }
    /**
     * ???????????????????????????
     * @param num
     */
    static GetCoinStr(num) {
        if (this._strMap == null) {
            this._strMap = ["", "K", "M", "B", "T", "Q"];
            for (let i = 0; i < 500; ++i) {
                let firstC = String.fromCharCode(Math.floor(i / 24) + 97);
                let behind = String.fromCharCode(Math.floor(i % 24) + 97);
                this._strMap.push(firstC + behind);
            }
        }
        let count = 0;
        while (num > 1000) {
            num /= 1000;
            count++;
        }
        if (count >= this._strMap.length) {
            console.error("???????????????");
            return num.toFixed(1) + "aa"; //"??????";
        }
        if (count <= 0) {
            return num.toFixed(0);
        }
        return num.toFixed(1) + this._strMap[count];
    }
    /**
     * ???????????????????????????
     * @param num
     */
    static GetCoinStr1(num) {
        if (this._strMap == null) {
            this._strMap = ["", "K", "M", "B", "T", "Q"];
            for (let i = 0; i < 500; ++i) {
                let firstC = String.fromCharCode(Math.floor(i / 24) + 97);
                let behind = String.fromCharCode(Math.floor(i % 24) + 97);
                this._strMap.push(firstC + behind);
            }
        }
        let count = 0;
        while (num > 1000) {
            num /= 1000;
            count++;
        }
        if (count >= this._strMap.length) {
            console.error("???????????????");
            return num.toFixed(1) + "aa"; //"??????";
        }
        if (count <= 0) {
            return num.toFixed(0);
        }
        return num.toFixed(0) + this._strMap[count];
    }
    static makeTimeLeftString(time, separator = ":", flag = false) {
        var ret = "";
        var hour;
        if (time <= 0) {
            ret = ret + "00:00";
            return ret;
        }
        if (time > LTUtils.ONE_YEAR) {
            ret = "????????????";
            return ret;
        }
        if (flag) {
            if (time > LTUtils.ONE_DAY) {
                var day = Math.floor(time / LTUtils.ONE_DAY);
                ret = day + "???";
            }
            else if (time >= 3600) {
                hour = Math.floor(time / 3600);
                ret = hour + "???";
            }
            else {
                var minute = Math.floor(time / 60);
                if (minute < 10)
                    ret += "0";
                ret += minute.toString() + separator;
                var second = time % 60;
                if (second < 10)
                    ret += "0";
                ret += second.toString();
            }
            return ret;
        }
        if (time > LTUtils.ONE_DAY) {
            var day = Math.floor(time / LTUtils.ONE_DAY);
            ret = day + "???";
            time = time - day * LTUtils.ONE_DAY;
            if (flag) {
                hour = Math.floor(time / 3600);
                if (hour > 0) {
                    ret += hour + "???";
                }
                return ret;
            }
        }
        if (time <= 0) {
            ret = ret + "00:00";
            return ret;
        }
        ret = '';
        hour = Math.floor(time / 3600);
        if (hour > 0) {
            if (hour < 10) {
                ret += "0" + hour.toString() + separator;
            }
            else {
                ret += hour.toString() + separator;
            }
        }
        var minute = Math.floor((time - hour * 3600) / 60);
        if ((minute > 0) || (hour > 0)) {
            if (minute < 10)
                ret += "0";
            ret += minute.toString() + separator;
        }
        else {
            ret += "00" + separator;
        }
        var second = time % 60;
        if (second < 10)
            ret += "0";
        ret += second.toString();
        return ret;
    }
    /**
    * ??????????????????
    */
    static GetCurrentDayCount(tick) {
        let dayCount = Math.floor(tick / 1000 / 60 / 60 / 24);
        return dayCount;
    }
    /**
     * ????????????
     * @param obj
     * @param layerIndex
     */
    static SetLayer(obj, layerIndex) {
        obj.layer = layerIndex;
        for (let i = 0; i < obj.numChildren; ++i) {
            let getChild = obj.getChildAt(i);
            this.SetLayer(getChild, layerIndex);
        }
    }
    /**
     * ????????????
     * @param isLong ??????????????????
     */
    static Vibrate(isLong = true) {
        if (_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.isShakeOn) {
            _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].instance.device.Vibrate(isLong);
        }
    }
}
/**
* ????????????
*/
LTUtils.ONE_YEAR = 60 * 60 * 24 * 365;
LTUtils.ONE_DAY = 60 * 60 * 24;
function randomRangeInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


/***/ }),

/***/ "./src/LTGame/LTUtils/MathEx.ts":
/*!**************************************!*\
  !*** ./src/LTGame/LTUtils/MathEx.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MathEx; });
/* harmony import */ var _ArrayEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrayEx */ "./src/LTGame/LTUtils/ArrayEx.ts");

class MathEx {
    static ToHex(num) {
        return num.toString(16);
    }
    static RandomFromArrayExcept(numArr, except) {
        let fakeRandomList = [];
        for (let i = 0; i < numArr.length; ++i) {
            if (except == numArr[i])
                continue;
            fakeRandomList.push(numArr[i]);
        }
        return this.RandomFromArray(fakeRandomList);
    }
    static RandomFromArray(numArr) {
        let randomIndex = MathEx.RandomInt(0, numArr.length);
        return numArr[randomIndex];
    }
    static RandomArrayFromArray(arr, count) {
        let result = [];
        let indexList = [];
        for (let i = 0; i < arr.length; ++i) {
            indexList.push(i);
        }
        for (let i = 0; i < count; ++i) {
            let randomIndex = MathEx.RandomInt(0, indexList.length);
            let getIndex = indexList[randomIndex];
            _ArrayEx__WEBPACK_IMPORTED_MODULE_0__["default"].RemoveAt(indexList, randomIndex);
            result.push(arr[getIndex]);
        }
        return result;
    }
    static RandomFromWithWeight(numArr, weightArr) {
        if (numArr == null || numArr.length == 0) {
            return null;
        }
        var totalWeight = 0;
        for (var weight of weightArr) {
            totalWeight += weight;
        }
        var randomWeight = MathEx.Random(0, totalWeight);
        var currentWeight = 0;
        for (var i = 0; i < numArr.length; ++i) {
            currentWeight += weightArr[i];
            if (randomWeight < currentWeight) {
                return numArr[i];
            }
        }
        return numArr[numArr.length - 1];
    }
    static RandomInt(min, max) {
        return Math.floor(this.Random(min, max));
    }
    static Random(min, max) {
        return (max - min) * Math.random() + min;
    }
    /**
     * ??????????????????
     * @param ratio ??????????????????
     */
    static RandomRatio(ratio) {
        let v = MathEx.RandomInt(0, 10000) * 0.01;
        if (ratio > v) {
            return true;
        }
        return false;
    }
    static Clamp(value, min, max) {
        if (value < min)
            return min;
        if (value > max)
            return max;
        return value;
    }
    static Clamp01(value) {
        return this.Clamp(value, 0, 1);
    }
    static Clamp100Progress(value) {
        return this.Clamp(value, 0.1, 100);
    }
    static Sign(value) {
        if (value == 0)
            return 1;
        return value > 0 ? 1 : -1;
    }
    static GetNumCount(num) {
        var numberCount = 0;
        var newNumber = num;
        while (newNumber / 10 > 0) {
            newNumber = Math.floor(newNumber / 10);
            numberCount++;
        }
        return numberCount;
    }
    static Lerp(from, to, progress) {
        return from + (to - from) * MathEx.Clamp01(progress);
    }
    static MoveTowardsAngle(current, target, maxDelta) {
        var num = MathEx.DeltaAngle(current, target);
        if (0 - maxDelta < num && num < maxDelta) {
            return target;
        }
        target = current + num;
        return MathEx.MoveTowards(current, target, maxDelta);
    }
    static MoveTowards(current, target, maxDelta) {
        if (Math.abs(target - current) <= maxDelta) {
            return target;
        }
        return current + Math.sign(target - current) * maxDelta;
    }
    static SmoothDamp(current, target, speed, smoothTime, maxSpeed, deltaTime) {
        // Based on Game Programming Gems 4 Chapter 1.10
        smoothTime = Math.max(0.0001, smoothTime);
        let omega = 2 / smoothTime;
        let x = omega * deltaTime;
        let exp = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
        let change = current - target;
        let originalTo = target;
        // Clamp maximum speed
        let maxChange = maxSpeed * smoothTime;
        change = MathEx.Clamp(change, -maxChange, maxChange);
        target = current - change;
        let temp = (speed[0] + omega * change) * deltaTime;
        speed[0] = (speed[0] - omega * temp) * exp;
        let output = target + (change + temp) * exp;
        // Prevent overshooting
        if ((originalTo - current > 0.0) == (output > originalTo)) {
            output = originalTo;
            speed[0] = (output - originalTo) / deltaTime;
        }
        return output;
    }
    static DeltaAngle(current, target) {
        var num = MathEx.Repeat(target - current, 360);
        if (num > 180) {
            num -= 360;
        }
        return num;
    }
    static Repeat(t, length) {
        return MathEx.Clamp(t - Math.floor(t / length) * length, 0, length);
    }
    static IsSimilar(n1, n2) {
        return n1 == n2;
    }
}
MathEx.Deg2Rad = 0.0175;
MathEx.Rad2Deg = 57.2958;


/***/ }),

/***/ "./src/LTGame/LTUtils/MonoHelper.ts":
/*!******************************************!*\
  !*** ./src/LTGame/LTUtils/MonoHelper.ts ***!
  \******************************************/
/*! exports provided: default, EActionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MonoHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EActionType", function() { return EActionType; });
class MonoHelper extends Laya.Script {
    constructor() {
        super(...arguments);
        this._updateActions = [];
        this._lateUpdateActions = [];
        this.deltaTime = 1 / 60;
    }
    static get instance() {
        if (this._instance == null) {
            let monoHelper = new Laya.Sprite();
            monoHelper.name = "MonoHelper";
            this._instance = monoHelper.addComponent(MonoHelper);
            Laya.stage.addChild(monoHelper);
        }
        return this._instance;
    }
    _GetActionList(actionType) {
        switch (actionType) {
            case EActionType.Update:
                return this._updateActions;
            case EActionType.LateUpdate:
                return this._lateUpdateActions;
            default:
                console.error("????????????actionType??????", actionType);
                return null;
        }
    }
    AddAction(actionType, caller, func, args) {
        let list = this._GetActionList(actionType);
        if (list == null)
            return;
        for (let i = 0; i < list.length; ++i) {
            let handleInList = list[i];
            if (handleInList.caller == caller && handleInList.method == func) {
                console.warn("???????????????????????????,????????????");
                return;
            }
        }
        let handle = Laya.Handler.create(caller, func, args, false);
        list.push(handle);
    }
    RemoveAction(actionType, caller, func) {
        let list = this._GetActionList(actionType);
        if (list == null)
            return;
        for (let i = 0; i < list.length; ++i) {
            let handleInList = list[i];
            if (handleInList.caller == caller && handleInList.method == func) {
                list = list.splice(i, 1);
                return;
            }
        }
    }
    onUpdate() {
        this.deltaTime = Laya.timer.delta * 0.001;
        if (this.deltaTime > 0.05) {
            this.deltaTime = 0.05;
        }
        for (let i = 0; i < this._updateActions.length; ++i) {
            let action = this._updateActions[i];
            action.runWith(this.deltaTime);
        }
    }
    onLateUpdate() {
        for (let i = 0; i < this._lateUpdateActions.length; ++i) {
            let action = this._lateUpdateActions[i];
            action.runWith(this.deltaTime);
        }
    }
    onDestroy() {
        MonoHelper._instance = null;
    }
}
var EActionType;
(function (EActionType) {
    EActionType[EActionType["Update"] = 0] = "Update";
    EActionType[EActionType["LateUpdate"] = 1] = "LateUpdate";
})(EActionType || (EActionType = {}));


/***/ }),

/***/ "./src/LTGame/LTUtils/StringEx.ts":
/*!****************************************!*\
  !*** ./src/LTGame/LTUtils/StringEx.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StringEx; });
class StringEx {
    static SplitToIntArray(str, splitStr) {
        var splits = str.split(splitStr);
        var result = [];
        for (var i = 0; i < splits.length; ++i) {
            var parseNum = parseInt(splits[i]);
            if (isNaN(parseNum)) {
                parseNum = 0;
            }
            result.push(parseNum);
        }
        return result;
    }
    static IntArrToStr(arr) {
        var str = "";
        for (var i = 0; i < arr.length; ++i) {
            str += arr[i].toFixed(0);
            if (i < arr.length - 1) {
                str += ",";
            }
        }
        return str;
    }
    static IsNullOrEmpty(str) {
        if (str == null)
            return true;
        if (str == "")
            return true;
        return false;
    }
}


/***/ }),

/***/ "./src/LTGame/LTUtils/TransformEx.ts":
/*!*******************************************!*\
  !*** ./src/LTGame/LTUtils/TransformEx.ts ***!
  \*******************************************/
/*! exports provided: TransformEx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformEx", function() { return TransformEx; });
/* harmony import */ var _Vector3Ex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector3Ex */ "./src/LTGame/LTUtils/Vector3Ex.ts");

class TransformEx {
    static ResetLocalTrans(trans) {
        trans.localPosition = _Vector3Ex__WEBPACK_IMPORTED_MODULE_0__["default"].zero;
        trans.localRotationEuler = _Vector3Ex__WEBPACK_IMPORTED_MODULE_0__["default"].zero;
        trans.localScale = _Vector3Ex__WEBPACK_IMPORTED_MODULE_0__["default"].one;
    }
    static CopyTrans(to, from) {
        to.position = from.position;
        to.rotation = from.rotation;
        to.setWorldLossyScale(from.getWorldLossyScale());
    }
}


/***/ }),

/***/ "./src/LTGame/LTUtils/Vector2Ex.ts":
/*!*****************************************!*\
  !*** ./src/LTGame/LTUtils/Vector2Ex.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector2Ex; });
/* harmony import */ var _MathEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MathEx */ "./src/LTGame/LTUtils/MathEx.ts");

class Vector2Ex {
    static get up() { return new Laya.Vector2(0, 1); }
    static get s_up() {
        return this._up;
    }
    static Dot(left, right) {
        return left.x * right.x + left.y * right.y;
    }
    static Angle(from, to) {
        let num = Math.sqrt((this.MagnitudeSqrt(from) * this.MagnitudeSqrt(to)));
        let flag = num < 1E-15;
        if (flag) {
            return 0;
        }
        else {
            let num2 = _MathEx__WEBPACK_IMPORTED_MODULE_0__["default"].Clamp(this.Dot(from, to) / num, -1, 1);
            return Math.acos(num2) * _MathEx__WEBPACK_IMPORTED_MODULE_0__["default"].Rad2Deg;
        }
    }
    static SignedAngle(from, to) {
        let num = this.Angle(from, to);
        let num2 = _MathEx__WEBPACK_IMPORTED_MODULE_0__["default"].Sign(from.x * to.y - from.y * to.x);
        return num * num2;
    }
    static MagnitudeSqrt(vec) {
        return vec.x * vec.x + vec.y * vec.y;
    }
    static Magnitude(vec) {
        return Math.sqrt(this.MagnitudeSqrt(vec));
    }
    static Lerp(from, to, progress) {
        return new Laya.Vector2(_MathEx__WEBPACK_IMPORTED_MODULE_0__["default"].Lerp(from.x, to.x, progress), _MathEx__WEBPACK_IMPORTED_MODULE_0__["default"].Lerp(from.y, to.y, progress));
    }
    static IsSame(v1, v2) {
        return v1.x == v2.x && v1.y == v2.y;
    }
}
Vector2Ex.cacheVec = new Laya.Vector2();
Vector2Ex._up = new Laya.Vector2(0, 1);


/***/ }),

/***/ "./src/LTGame/LTUtils/Vector3Ex.ts":
/*!*****************************************!*\
  !*** ./src/LTGame/LTUtils/Vector3Ex.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector3Ex; });
/* harmony import */ var _MathEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MathEx */ "./src/LTGame/LTUtils/MathEx.ts");

class Vector3Ex {
    static get temp() {
        Vector3Ex.__temp__.setValue(0, 0, 0);
        return Vector3Ex.__temp__;
    }
    static get s_up() {
        Vector3Ex.__up__.setValue(0, 1, 0);
        return Vector3Ex.__up__;
    }
    static get s_down() {
        Vector3Ex.__down__.setValue(0, -1, 0);
        return Vector3Ex.__down__;
    }
    static get s_forward() {
        Vector3Ex.__forward__.setValue(0, 0, 1);
        return Vector3Ex.__forward__;
    }
    static get s_back() {
        Vector3Ex.__back__.setValue(0, 0, -1);
        return Vector3Ex.__back__;
    }
    static get s_zero() {
        Vector3Ex.__zero__.setValue(0, 0, 0);
        return Vector3Ex.__zero__;
    }
    static get s_one() {
        Vector3Ex.__one__.setValue(1, 1, 1);
        return Vector3Ex.__one__;
    }
    static get up() {
        return new Laya.Vector3(0, 1, 0);
    }
    static get down() {
        return new Laya.Vector3(0, -1, 0);
    }
    static get forward() {
        return new Laya.Vector3(0, 0, 1);
    }
    static get zero() {
        return new Laya.Vector3(0, 0, 0);
    }
    static get one() {
        return new Laya.Vector3(1, 1, 1);
    }
    static get back() {
        return new Laya.Vector3(0, 0, -1);
    }
    static get left() {
        return new Laya.Vector3(-1, 0, 0);
    }
    static get right() {
        return new Laya.Vector3(1, 0, 0);
    }
    static IsZero(vec) {
        return vec.x && vec.y == 0 && vec.z == 0;
    }
    static Cross(right, left) {
        var result = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.cross(right, left, result);
        return result;
    }
    static Subtract(right, left) {
        var result = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.subtract(right, left, result);
        return result;
    }
    static SubtractTo(right, left, to) {
        Laya.Vector3.subtract(right, left, to);
    }
    static ClampMagnitude(vector, maxLength) {
        var result = new Laya.Vector3(0, 0, 0);
        var sqrMagnitude = 0;
        if (Laya.Vector3.distanceSquared(vector, result) > maxLength * maxLength) {
            result = Vector3Ex.Scale(Vector3Ex.Normalize(vector), maxLength);
        }
        else {
            result = vector;
        }
        return result;
    }
    static Normalize(vec) {
        var result = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.normalize(vec, result);
        return result;
    }
    static Add(...vecs) {
        var result = new Laya.Vector3(0, 0, 0);
        for (var i = 0; i < vecs.length; ++i) {
            var vec = vecs[i];
            result.x += vec.x;
            result.y += vec.y;
            result.z += vec.z;
        }
        return result;
    }
    static Scale(vec, scale) {
        var result = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.scale(vec, scale, result);
        return result;
    }
    static ScaleV3(vec, scale) {
        var result = new Laya.Vector3(vec.x * scale.x, vec.y * scale.y, vec.z * scale.z);
        return result;
    }
    static Dot(left, right) {
        return Laya.Vector3.dot(left, right);
    }
    static Lerp(from, to, v) {
        var result = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.lerp(from, to, v, result);
        return result;
    }
    static Bessel(p0, p1, p2, progress) {
        let cache1 = Vector3Ex.Scale(p0, Math.pow(1 - progress, 2));
        let cache2 = Vector3Ex.Scale(p1, 2 * progress * (1 - progress));
        let cache3 = Vector3Ex.Scale(p2, progress * progress);
        return Vector3Ex.Add(cache1, cache2, cache3);
    }
    static MagnitudeSqrt(v3) {
        return v3.x * v3.x + v3.y * v3.y + v3.z * v3.z;
    }
    static Magnitude(v3) {
        return Math.sqrt(this.MagnitudeSqrt(v3));
    }
    static Magnitude2D(v3) {
        return Math.sqrt(v3.x * v3.x + v3.z * v3.z);
    }
    static Distance(from, to) {
        var offset = Vector3Ex.Subtract(from, to);
        return Vector3Ex.Magnitude(offset);
    }
    static Distance2D(from, to) {
        let xOffset = from.x - to.x;
        let zOffset = from.z - to.z;
        return Math.sqrt(xOffset * xOffset + zOffset * zOffset);
    }
    static DistanceSqrt(from, to) {
        let offset = Vector3Ex.Subtract(from, to);
        return offset.x * offset.x + offset.y * offset.y + offset.z * offset.z;
    }
    static DistanceSqrt2D(from, to) {
        let offset = Vector3Ex.Subtract(from, to);
        return offset.x * offset.x + offset.z * offset.z;
    }
    /**
     * ??????????????????????????????,?????????
     * @param from
     * @param to
     * @param asix
     */
    static SignAngleAsix(from, to, asix) {
        let normalAsix = Vector3Ex.Normalize(asix);
        let dotFrom = Vector3Ex.Dot(from, normalAsix);
        let wrapFrom = Vector3Ex.Subtract(from, Vector3Ex.Scale(normalAsix, dotFrom));
        let dotTo = Vector3Ex.Dot(to, normalAsix);
        let wrapTo = Vector3Ex.Subtract(to, Vector3Ex.Scale(normalAsix, dotTo));
        let normalized = Vector3Ex.Normalize(wrapFrom);
        let normalized2 = Vector3Ex.Normalize(wrapTo);
        let num = Math.acos(_MathEx__WEBPACK_IMPORTED_MODULE_0__["default"].Clamp(Laya.Vector3.dot(normalized, normalized2), -1, 1)) * 57.29578;
        let cross = Vector3Ex.Cross(normalized, normalized2);
        let num2 = _MathEx__WEBPACK_IMPORTED_MODULE_0__["default"].Sign(Laya.Vector3.dot(asix, cross));
        return num * num2;
    }
    static SignedAngle(from, to, asix) {
        var normalized = Vector3Ex.Normalize(from);
        var normalized2 = Vector3Ex.Normalize(to);
        var num = Math.acos(_MathEx__WEBPACK_IMPORTED_MODULE_0__["default"].Clamp(Laya.Vector3.dot(normalized, normalized2), -1, 1)) * 57.29578;
        var cross = Vector3Ex.Cross(normalized, normalized2);
        var num2 = _MathEx__WEBPACK_IMPORTED_MODULE_0__["default"].Sign(Laya.Vector3.dot(asix, cross));
        return num * num2;
    }
    static Angle(from, to, asix) {
        var normalized = Vector3Ex.Normalize(from);
        var normalized2 = Vector3Ex.Normalize(to);
        var num = Math.acos(_MathEx__WEBPACK_IMPORTED_MODULE_0__["default"].Clamp(Laya.Vector3.dot(normalized, normalized2), -1, 1)) * 57.29578;
        return num;
    }
    static SmoothDamp(current, target, currentVelocity, smoothTime, maxSpeed, deltaTime) {
        var num = 2 / smoothTime;
        var num2 = num * deltaTime;
        var d = 1 / (1 + num2 + 0.48 * num2 * num2 + 0.235 * num2 * num2 * num2);
        var vector = Vector3Ex.Subtract(current, target);
        var vector2 = target.clone();
        var maxLength = maxSpeed * smoothTime;
        vector = Vector3Ex.ClampMagnitude(vector, maxLength);
        var target2 = Vector3Ex.Subtract(current, vector);
        var vector3 = Vector3Ex.Scale(Vector3Ex.Add(currentVelocity, Vector3Ex.Scale(vector, num)), deltaTime);
        var cacheV = Vector3Ex.Scale(Vector3Ex.Subtract(currentVelocity, Vector3Ex.Scale(vector3, num)), d);
        currentVelocity.x = cacheV.x;
        currentVelocity.y = cacheV.y;
        currentVelocity.z = cacheV.z;
        var vector4 = Vector3Ex.Add(target2, Vector3Ex.Scale(Vector3Ex.Add(vector, vector3), d));
        if (Vector3Ex.Dot(Vector3Ex.Subtract(vector2, current), Vector3Ex.Subtract(vector4, vector2)) > 0) {
            vector4 = vector2;
            currentVelocity.x = 0;
            currentVelocity.y = 0;
            currentVelocity.z = 0;
        }
        return vector4;
    }
    static Fix(vec, limit) {
        if (Math.abs(vec.x) < limit) {
            vec.x = 0;
        }
        if (Math.abs(vec.y) < limit) {
            vec.y = 0;
        }
        if (Math.abs(vec.z) < limit) {
            vec.z = 0;
        }
    }
    static IsSame(v1, v2) {
        return v1.x == v2.x && v1.y == v2.y && v1.z == v2.z;
    }
    static WrapFromUnity(x, y, z) {
        return new Laya.Vector3(-x, y, z);
    }
    /**
     * ?????????????????????????????????
     * @param time
     * @param startVelocity
     * @param aSpeed
     * @param startPos
     */
    static CalcPosWithASpeed(time, startVelocity, aSpeed, startPos) {
        let xt = Vector3Ex.Scale(startVelocity, time);
        let at2 = Vector3Ex.Scale(aSpeed, time * time / 2);
        return Vector3Ex.Add(xt, at2, startPos);
    }
    /**
     * ??????????????????
     * @param trs
     */
    static InitialTransform(trs) {
        trs.localPosition = Vector3Ex.s_zero;
        trs.localScale = Vector3Ex.s_one;
        trs.rotationEuler = Vector3Ex.s_zero;
    }
    /**
     * ??????????????????????????????????????????????????????????????????
     * @param center ???????????????
     * @param target ?????????
     * @param range ????????????
     * @param halfAngle ????????????
     * @param forward ????????????
     * @param axis ????????????????????????
     */
    static InSector(center, target, range, halfAngle, forward, axis) {
        let dir = Vector3Ex.temp;
        dir.setValue((target.x - center.x) * (1 - axis.x), (target.y - center.y) * (1 - axis.y), (target.z - center.z) * (1 - axis.z));
        if (Vector3Ex.MagnitudeSqrt(dir) <= range * range) {
            let angle = Vector3Ex.Angle(forward, dir, axis);
            if (angle <= halfAngle) {
                return true;
            }
        }
        return false;
    }
}
Vector3Ex.__up__ = new Laya.Vector3(0, 0, 0);
Vector3Ex.__down__ = new Laya.Vector3(0, 0, 0);
Vector3Ex.__forward__ = new Laya.Vector3(0, 0, 0);
Vector3Ex.__back__ = new Laya.Vector3(0, 0, 0);
Vector3Ex.__zero__ = new Laya.Vector3(0, 0, 0);
Vector3Ex.__one__ = new Laya.Vector3(0, 0, 0);
Vector3Ex.cacheVec0 = new Laya.Vector3(0, 0, 0);


/***/ }),

/***/ "./src/LTGame/LTVersion.ts":
/*!*********************************!*\
  !*** ./src/LTGame/LTVersion.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTVersion; });
class LTVersion {
}
LTVersion.version = "0.0.1";


/***/ }),

/***/ "./src/LTGame/Material/LTShaderHelper.ts":
/*!***********************************************!*\
  !*** ./src/LTGame/Material/LTShaderHelper.ts ***!
  \***********************************************/
/*! exports provided: LTShaderHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTShaderHelper", function() { return LTShaderHelper; });
/* harmony import */ var _Res_LTRes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Res/LTRes */ "./src/LTGame/Res/LTRes.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");



const COLLECT_SHADER_INFO = false;
class LTShaderHelper {
    static InitRecorder() {
        if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.platform == _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Web && COLLECT_SHADER_INFO) {
            Laya.Shader3D.debugMode = true;
            Laya.stage.on(Laya.Event.RIGHT_MOUSE_DOWN, this, function (event) {
                let shaderObj = {};
                for (let i = 0; i < Laya.Shader3D.debugShaderVariantCollection.variantCount; i++) {
                    let shadervariant = Laya.Shader3D.debugShaderVariantCollection.getByIndex(i);
                    let shaderName = shadervariant.shader.name;
                    if (!shaderObj[shaderName])
                        shaderObj[shaderName] = [];
                    let arr = shaderObj[shaderName];
                    let obj = {};
                    obj.defineNames = shadervariant.defineNames;
                    obj.passIndex = shadervariant.passIndex;
                    obj.subShaderIndex = shadervariant.subShaderIndex;
                    arr.push(obj);
                }
                console.log(JSON.stringify(shaderObj));
                console.log("????????????res/config/shader_warm.json");
            });
            console.error("????????????shader??????,????????????????????????????????????");
        }
        else {
            Laya.Shader3D.debugMode = false;
        }
    }
    static WarmShader() {
        return __awaiter(this, void 0, void 0, function* () {
            let configJson = yield _Res_LTRes__WEBPACK_IMPORTED_MODULE_0__["default"].LoadAndGet("res/config/shader_warm.json", true);
            if (configJson == null) {
                console.log("???shader??????,????????????");
                return;
            }
            let keys = Object.getOwnPropertyNames(configJson);
            for (let key of keys) {
                let value = configJson[key];
                if (value == null)
                    continue;
                let arr = value;
                for (let index = 0; index < arr.length; index++) {
                    let obj = arr[index];
                    Laya.Shader3D.compileShaderByDefineNames(key, obj.subShaderIndex, obj.passIndex, obj.defineNames);
                }
            }
            console.log("Shader???????????????");
        });
    }
}


/***/ }),

/***/ "./src/LTGame/Net/LTHttp.ts":
/*!**********************************!*\
  !*** ./src/LTGame/Net/LTHttp.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTHttp; });
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");

class LTHttp {
    /**
     * ????????????HTTP??????,???????????????get/post,???????????????????????????
     * @param url
     * @param onSuccess
     * @param onFailed
     * @param isGet
     * @param data
     * @param responseType
     * @param headers
     */
    static SendPro(url, onSuccess = null, onFailed = null, method = "get", data = null, responseType = "json", headers = ["Content-Type", "application/json"]) {
        let xhr = new Laya.HttpRequest();
        xhr.http.timeout = 10000; //??????????????????
        if (onSuccess != null) {
            xhr.once(Laya.Event.COMPLETE, onSuccess.caller, onSuccess.method);
        }
        if (onFailed != null) {
            xhr.once(Laya.Event.ERROR, onFailed.caller, onFailed.method);
        }
        xhr.send(url, JSON.stringify(data), method, responseType, headers);
        if (this.enableDebug) {
            console.log(url, data, method, responseType, headers);
        }
    }
    /**
     * ??????HTTP??????,????????????get/post
     * @param url
     * @param onSuccess
     * @param onFailed
     * @param isGet ?????????false
     * @param data
     * @param responseType
     * @param headers
     */
    static Send(url, onSuccess = null, onFailed = null, isGet = false, data = null, responseType = "text", headers) {
        let splitUrl = url.split(this._url_split);
        let origUrl = splitUrl[0];
        let param = splitUrl[1];
        if (param == null) {
            param = "";
        }
        if (isGet) {
            if (data != null) {
                if (!_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_0__["default"].IsNullOrEmpty(param)) {
                    param += this._param_split;
                }
                for (let i in data) {
                    param += i + this._value_split + data[i] + this._param_split;
                }
                param = param.slice(0, param.length - 1);
            }
            let combieUrl = origUrl;
            if (!_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_0__["default"].IsNullOrEmpty(param)) {
                combieUrl = origUrl + this._url_split + param;
            }
            this.SendPro(combieUrl, onSuccess, onFailed, this._get_method, null, responseType, headers);
        }
        else {
            if (!_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_0__["default"].IsNullOrEmpty(param)) {
                if (data == null) {
                    data = {};
                }
                let splitParam = param.split(this._param_split);
                for (let singleParam of splitParam) {
                    let kv = singleParam.split(this._value_split);
                    data[kv[0]] = kv[1];
                }
            }
            this.SendPro(origUrl, onSuccess, onFailed, this._post_method, data, responseType, headers);
        }
    }
}
LTHttp._post_method = "post";
LTHttp._get_method = "get";
LTHttp._url_split = "?";
LTHttp._param_split = "&";
LTHttp._value_split = "=";
LTHttp.enableDebug = false;


/***/ }),

/***/ "./src/LTGame/Platform/BDPlatform.ts":
/*!*******************************************!*\
  !*** ./src/LTGame/Platform/BDPlatform.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BDPlatform; });
/* harmony import */ var _WXPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WXPlatform */ "./src/LTGame/Platform/WXPlatform.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");




class BDPlatform extends _WXPlatform__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].BD;
        this._showVideoLoad = false;
    }
    Init(platformData) {
        this.base = window["swan"];
        if (this.base == null) {
            console.error("?????????????????????");
            return;
        }
        this.platformData = platformData;
        this._InitLauchOption();
        // this._Login();
        this._InitShareInfo();
        this._InitSystemInfo();
        this._isBannerLoaded = false;
        this._isBannerShowed = false;
        // this._CreateBannerAd();
        this._CreateVideoAd();
        this._CreateInterstitalAd();
        window["iplatform"] = this;
    }
    _CreateBannerAd() {
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__["default"].IsNullOrEmpty(this.platformData.bannerId)) {
            console.log("????????????banner??????ID,????????????");
            return;
        }
        let windowWidth = this.base.getSystemInfoSync().windowWidth;
        let windowHeight = this.base.getSystemInfoSync().windowHeight;
        let bannerObj = {};
        bannerObj["adUnitId"] = this.platformData.bannerId; // "adunit-b48894d44d318e5a";
        bannerObj["appSid"] = this.sid;
        let styleObj = {};
        styleObj["left"] = 0;
        styleObj["top"] = 0;
        styleObj["width"] = windowWidth;
        bannerObj["style"] = styleObj;
        this._bannerAd = this.base.createBannerAd(bannerObj);
        this._bannerAd.onLoad(() => {
            console.log("banner????????????");
            this._isBannerLoaded = true;
            this._bannerAd.style.top = windowHeight - this._bannerAd.style.height;
            // ???????????????????????????
            this._bannerAd.show();
        });
        this._bannerAd.onError((res) => {
            console.error("banner??????????????????", res);
        });
    }
    _CreateVideoAd() {
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__["default"].IsNullOrEmpty(this.platformData.rewardVideoId)) {
            console.log("????????????????????????ID,????????????");
            return;
        }
        this._videoFailedCount = 0;
        let videoObj = {};
        videoObj["adUnitId"] = this.platformData.rewardVideoId; // "adunit-5631637236cf16b6";
        videoObj["appSid"] = this.sid;
        this._rewardVideo = this.base.createRewardedVideoAd(videoObj);
        this._rewardVideo.onLoad(() => {
            console.log("????????????????????????");
            this._isVideoLoaded = true;
        });
        this._rewardVideo.onError((res) => {
            this._videoFailedCount++;
            console.error("????????????????????????", res);
            if (this._videoFailedCount > 10) {
                console.log("???", this._videoFailedCount, "???????????????????????????");
                // ????????????????????????
                this._rewardVideo.load();
            }
        });
        this._rewardVideo.onClose((res) => {
            this.base.hideLoading();
            Laya.stage.event(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_3__["CommonEventId"].RESUM_AUDIO);
            console.log("????????????", res);
            let isEnd = res["isEnded"];
            if (isEnd) {
                if (this._rewardSuccessed)
                    this._rewardSuccessed.run();
            }
            else {
                if (this._rewardSkipped)
                    this._rewardSkipped.run();
            }
            // bd????????????????????????
            this._rewardVideo.load();
        });
    }
    _CreateInterstitalAd() {
    }
    LoadSubpackage(name, onSuccess, onFailed, onProgress) {
        let loadObj = {};
        loadObj["name"] = name;
        loadObj["success"] = () => {
            console.log("??????????????????", name);
            if (onSuccess) {
                onSuccess.run();
            }
        };
        loadObj["fail"] = () => {
            console.error("??????????????????", name);
            if (onFailed) {
                onFailed.run();
            }
        };
        let loadTask = this.base.loadSubpackage(loadObj);
        loadTask.onProgressUpdate((res) => {
            if (onProgress) {
                let value = res.progress / 100;
                if (isNaN(value)) {
                    value = res.loaded / res.total;
                }
                onProgress.runWith(value);
            }
        });
    }
    RecordEvent(eventId, param) {
        this.base.reportAnalytics(eventId, param);
    }
    ShowBannerAd() {
        if (this._isBannerLoaded) {
            return;
        }
        this._CreateBannerAd();
    }
    HideBannerAd() {
        if (!this._isBannerLoaded)
            return;
        this._isBannerLoaded = false;
        if (this._bannerAd) {
            this._bannerAd.destroy();
        }
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/Data/LTPlatformData.ts":
/*!****************************************************!*\
  !*** ./src/LTGame/Platform/Data/LTPlatformData.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTPlatformData; });
class LTPlatformData {
    constructor() {
        this.appId = "";
        this.appKey = "";
        this.bannerId = "";
        this.rewardVideoId = "";
        this.interstitialId = "";
        this.nativeId = "";
        /**qq?????????wx??????????????? */
        this.gameBoxAdId = "";
        /**?????????????????? */
        this.gameBoxBannerId = "";
        /** wx??????????????? */
        this.customBoxAdId = "";
        this.nativeBannerIds = [];
        this.nativeIconIds = [];
        this.nativeinpageIds = [];
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/DefaultDevice.ts":
/*!**********************************************!*\
  !*** ./src/LTGame/Platform/DefaultDevice.ts ***!
  \**********************************************/
/*! exports provided: default, OppoDevice, VivoDevice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OppoDevice", function() { return OppoDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VivoDevice", function() { return VivoDevice; });
class DefaultDevice {
    Vibrate(isLong) {
        console.log("????????????", isLong);
    }
}
class OppoDevice {
    constructor() {
        this.base = qg;
        console.log('QGDIVCE INIT', this.base);
    }
    Vibrate(isLong) {
        console.log('????????????', isLong);
        if (this.base) {
            if (isLong) {
                this.base.vibrateLong({
                    success: (res) => {
                        console.log('??????');
                    },
                    fail: (res) => { console.log('????????????'); },
                    complete: (res) => { }
                });
            }
            else {
                this.base.vibrateShort({
                    success: (res) => { console.log('?????????'); },
                    fail: (res) => { console.log('???????????????'); },
                    complete: (res) => { }
                });
            }
        }
    }
}
class VivoDevice {
    constructor() {
        this.base = qg;
        console.log('QGDIVCE INIT', this.base);
    }
    Vibrate(isLong) {
        console.log('????????????', isLong);
        if (this.base) {
            if (isLong) {
                this.base.vibrateLong();
            }
            else {
                this.base.vibrateShort();
            }
        }
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/DefaultPlatform.ts":
/*!************************************************!*\
  !*** ./src/LTGame/Platform/DefaultPlatform.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultPlatform; });
/* harmony import */ var _UIExt_DefaultUI_UI_FakeBannerVMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UIExt/DefaultUI/UI_FakeBannerVMediator */ "./src/LTGame/UIExt/DefaultUI/UI_FakeBannerVMediator.ts");
/* harmony import */ var _UIExt_DefaultUI_UI_FakeInterstitalMediator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UIExt/DefaultUI/UI_FakeInterstitalMediator */ "./src/LTGame/UIExt/DefaultUI/UI_FakeInterstitalMediator.ts");
/* harmony import */ var _UIExt_DefaultUI_UI_FakeRewardADMediator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UIExt/DefaultUI/UI_FakeRewardADMediator */ "./src/LTGame/UIExt/DefaultUI/UI_FakeRewardADMediator.ts");
/* harmony import */ var _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _DefaultDevice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DefaultDevice */ "./src/LTGame/Platform/DefaultDevice.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Impl_Web_WebRecordManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Impl/Web/WebRecordManager */ "./src/LTGame/Platform/Impl/Web/WebRecordManager.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Commom/CommonSaveData */ "./src/LTGame/Commom/CommonSaveData.ts");
/* harmony import */ var _Impl_OpenDataContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Impl/OpenDataContext */ "./src/LTGame/Platform/Impl/OpenDataContext.ts");











class DefaultPlatform {
    constructor() {
        this.useWAV = false;
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_5__["EPlatformType"].Web;
        this.safeArea = null;
        this.recordManager = new _Impl_Web_WebRecordManager__WEBPACK_IMPORTED_MODULE_6__["WebRecordManager"]();
        this.device = new _DefaultDevice__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.systemInfo = null;
        /**
         * ??????????????????????????????????????????
         * ????????????????????????fake true,??????????????????
         */
        this.isSupportJumpOther = true;
    }
    setUserCloudStorage(key, value) {
        console.log(`?????????????????????????????????key=${key}value=${value}`);
    }
    showFavoriteGuide() {
        console.log(`????????????????????? ????????????`);
    }
    getRankList(key) {
        console.log(`?????????????????????????????????key=${key}`);
    }
    showGameBoxBannerAd() {
    }
    hideGameBoxBannerAd() {
    }
    postMsg(msg) {
    }
    getUserInfo() {
        return new Promise((resolve, reject) => {
            if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_8__["default"].IsNullOrEmpty(_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_9__["default"].instance.nickName) && !_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_8__["default"].IsNullOrEmpty(_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_9__["default"].instance.uid)) {
                _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_9__["default"].instance.nickName = "??????" + _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_9__["default"].instance.uid.substr(2, 16);
                _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_9__["default"].instance.avatarUrl = "https://sf1-ttcdn-tos.pstatp.com/obj/developer/app/ttd60ba0b64931e10f/iconed57a79";
                _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_9__["default"].SaveToDisk();
                resolve();
            }
        });
    }
    Init(platformData) {
        this.loginState = {
            isLogin: true,
            code: "111111111111"
        };
        this.platformData = platformData;
        this.userInfo = { nickName: '???????????????666', avatarUrl: '66.png' };
        Laya.timer.once(500, this, this._FakeLoginEnd);
        this._InitSystemInfo();
        this.openDataContext = new _Impl_OpenDataContext__WEBPACK_IMPORTED_MODULE_10__["default"](this.base);
    }
    _FakeLoginEnd() {
        if (this.onLoginEnd)
            this.onLoginEnd.run();
    }
    _InitSystemInfo() {
        try {
            console.log(window.innerWidth, window.innerHeight);
            this.safeArea = {};
            this.safeArea.left = 0;
            this.safeArea.right = 0;
            this.safeArea.bottom = window.innerHeight;
            this.safeArea.top = 0;
            this.safeArea.width = window.innerWidth;
            this.safeArea.height = window.innerHeight - this.safeArea.top;
            console.log("???????????????????????????");
        }
        catch (e) {
            console.error(e);
            console.error("????????????????????????,?????????????????????");
            this.safeArea = null;
        }
    }
    IsBannerAvaliable() {
        return false;
    }
    IsVideoAvaliable() {
        return true;
    }
    IsInterstitalAvaliable() {
        return false;
    }
    ShowBannerAd() {
        console.log("??????ShowBannerAd");
        if (window["__GM"])
            return;
        _UIExt_DefaultUI_UI_FakeBannerVMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Show();
    }
    HideBannerAd() {
        console.log("??????HideBannerAd");
        _UIExt_DefaultUI_UI_FakeBannerVMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Hide();
    }
    ShowRewardVideoAd(onSuccess, onSkipped, onFailed) {
        console.log("??????ShowRewardVideoAd");
        _UIExt_DefaultUI_UI_FakeRewardADMediator__WEBPACK_IMPORTED_MODULE_2__["default"].instance.Show([onSuccess, onSkipped]);
    }
    ShowRewardVideoAdAsync() {
        return new Promise(function (resolve) {
            if (window["__GM"]) {
                console.error("?????????GM???????????????");
                return resolve(true);
            }
            _LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance.ShowRewardVideoAd(Laya.Handler.create(this, () => {
                resolve(true);
            }), Laya.Handler.create(this, () => {
                resolve(false);
                _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].Toast('????????????????????????????????????');
            }), Laya.Handler.create(this, () => {
                resolve(null);
                _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].Toast('??????????????????,???????????????');
            }));
        });
    }
    ShowInterstitalAd() {
        console.log("??????ShowInterstitalAd");
        if (window["__GM"])
            return;
        _UIExt_DefaultUI_UI_FakeInterstitalMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.Show();
    }
    GetFromAppId() {
        return null;
    }
    ShareAppMessage(obj, onSuccess = null, onFailed = null) {
        console.log("????????????", obj);
        if (onSuccess) {
            onSuccess.run();
        }
    }
    LoadSubpackage(name, onSuccess, onFailed, onProgress) {
        if (onSuccess) {
            onSuccess.run();
        }
    }
    RecordEvent(eventId, param) {
        console.log("????????????", eventId, param);
    }
    ShareVideoInfo() {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].platformStr, "????????????????????????");
    }
    _CheckUpdate() {
    }
    ShowToast(str) {
        _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].Toast(str);
    }
    OpenGameBox(ids) {
        console.error("????????????", _LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].platformStr, "??????????????????????????????");
    }
    HideGameBox() { }
    NavigateToApp(appid, path, extra) {
        return new Promise((resolve, reject) => {
            console.error("????????????", _LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].platformStr, `???????????????????????????appid:${appid}`);
            // ????????????resolve
            resolve(false);
        });
    }
    createShortcut() {
        return new Promise((resolve, reject) => {
            console.error("???????????????????????????????????????");
            resolve(true);
        });
    }
    /**??????????????????????????? */
    hasShortcutInstalled() {
        return new Promise((resolve, reject) => {
            resolve(false);
        });
    }
    GetStorage(key) {
        console.log('???????????????');
        return Laya.LocalStorage.getItem(key);
    }
    SetStorage(key, data) {
        console.log('???????????????');
        Laya.LocalStorage.setItem(key, data);
    }
    followOfficialAccount() {
        console.error("????????????", _LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].platformStr, "??????????????????");
    }
    checkFollowState() {
        console.error("????????????", _LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].platformStr, "??????????????????");
    }
    SetClipboardData(str) {
        console.log("???????????????????????????", str);
    }
    getNativeAd(adid) {
        return null;
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/DefaultRecordManager.ts":
/*!*****************************************************!*\
  !*** ./src/LTGame/Platform/DefaultRecordManager.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultRecordManager; });
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");

class DefaultRecordManager {
    constructor() {
        this.supportRecord = false;
        this.isRecording = false;
        this.isPausing = false;
        this.isRecordSuccess = false;
    }
    StartRecord(onStart, onOverTime) {
        console.log("?????????" + _LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].platformStr + "?????????????????????");
    }
    StopRecord(onStop) {
        console.log("?????????" + _LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].platformStr + "?????????????????????");
    }
    Pause(onPause) {
        console.log("?????????" + _LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].platformStr + "?????????????????????");
    }
    Resume(onReume) {
        console.log("?????????" + _LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].platformStr + "?????????????????????");
    }
    RecordClip(timeRange) {
        console.log("?????????" + _LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].platformStr + "?????????????????????");
    }
    ShareVideo(onSuccess, onCancel, onFailed) {
        if (onFailed) {
            onFailed.run();
        }
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/EPlatformType.ts":
/*!**********************************************!*\
  !*** ./src/LTGame/Platform/EPlatformType.ts ***!
  \**********************************************/
/*! exports provided: EPlatformType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPlatformType", function() { return EPlatformType; });
var EPlatformType;
(function (EPlatformType) {
    EPlatformType[EPlatformType["None"] = 0] = "None";
    EPlatformType[EPlatformType["Web"] = 1] = "Web";
    EPlatformType[EPlatformType["WX"] = 2] = "WX";
    EPlatformType[EPlatformType["QQ"] = 3] = "QQ";
    EPlatformType[EPlatformType["BD"] = 4] = "BD";
    EPlatformType[EPlatformType["Oppo"] = 5] = "Oppo";
    EPlatformType[EPlatformType["Vivo"] = 6] = "Vivo";
    EPlatformType[EPlatformType["TT"] = 7] = "TT";
    EPlatformType[EPlatformType["QTT"] = 8] = "QTT";
    EPlatformType[EPlatformType["Native_IOS"] = 9] = "Native_IOS";
    EPlatformType[EPlatformType["KS"] = 10] = "KS";
    EPlatformType[EPlatformType["HW"] = 11] = "HW";
    EPlatformType[EPlatformType["Native_Android"] = 12] = "Native_Android";
    EPlatformType[EPlatformType["Native_Android_233"] = 13] = "Native_Android_233";
    EPlatformType[EPlatformType["Native_Android_MMY"] = 14] = "Native_Android_MMY";
    EPlatformType[EPlatformType["Gamebox4399"] = 15] = "Gamebox4399";
    EPlatformType[EPlatformType["HTML4399"] = 16] = "HTML4399";
})(EPlatformType || (EPlatformType = {}));


/***/ }),

/***/ "./src/LTGame/Platform/HWPlatform.ts":
/*!*******************************************!*\
  !*** ./src/LTGame/Platform/HWPlatform.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HWPlatform; });
/* harmony import */ var _script_manager_AudioManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../script/manager/AudioManager */ "./src/script/manager/AudioManager.ts");
/* harmony import */ var _Async_Awaiters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");
/* harmony import */ var _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _DefaultDevice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultDevice */ "./src/LTGame/Platform/DefaultDevice.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Impl_Web_WebRecordManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Impl/Web/WebRecordManager */ "./src/LTGame/Platform/Impl/Web/WebRecordManager.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _DefaultPlatform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DefaultPlatform */ "./src/LTGame/Platform/DefaultPlatform.ts");
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _UIExt_DefaultUI_Cmp_View_NativeInpage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../UIExt/DefaultUI/Cmp/View_NativeInpage */ "./src/LTGame/UIExt/DefaultUI/Cmp/View_NativeInpage.ts");










class HWPlatform extends _DefaultPlatform__WEBPACK_IMPORTED_MODULE_7__["default"] {
    constructor() {
        super(...arguments);
        this.isIOS = false;
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].HW;
        this.safeArea = null;
        this.recordManager = new _Impl_Web_WebRecordManager__WEBPACK_IMPORTED_MODULE_5__["WebRecordManager"]();
        this.device = new _DefaultDevice__WEBPACK_IMPORTED_MODULE_3__["OppoDevice"]();
        this.systemInfo = null;
        /**
         * ??????????????????????????????????????????
         * ????????????????????????fake true,??????????????????
         */
        this.isSupportJumpOther = true;
        this.isBannerShow = false;
    }
    Init(platformData) {
        this.loginState = {
            isLogin: false,
            code: null
        };
        this.base = window["qg"];
        if (this.base == null) {
            console.error("?????????????????????", _LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].platformStr);
            return;
        }
        this.platformData = platformData;
        this._InitLauchOption();
        this._Login();
        this._InitAdService();
        this.getSystemInfo();
    }
    _InitLauchOption() {
        // ??????onShow??????
        this.base.onShow(this._OnShow);
        this.base.onHide(this._OnHide);
        // ??????????????????????????????
        let res = this.base.getLaunchOptionsSync();
        this._OnShow(res);
    }
    /**
     * ??????????????????????????????
     */
    _OnShow(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].platformStr, "OnShow", res);
        _LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.lauchOption = res;
        _LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance._CheckUpdate();
        _script_manager_AudioManager__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Resume();
        _Async_Awaiters__WEBPACK_IMPORTED_MODULE_1__["default"].NextFrame().then(() => {
            if (_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.onResume) {
                _LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.onResume.runWith(res);
            }
            if (_UIExt_DefaultUI_Cmp_View_NativeInpage__WEBPACK_IMPORTED_MODULE_9__["View_NativeInPage"].Inst && _UIExt_DefaultUI_Cmp_View_NativeInpage__WEBPACK_IMPORTED_MODULE_9__["View_NativeInPage"].Inst.visible) {
                _UIExt_DefaultUI_Cmp_View_NativeInpage__WEBPACK_IMPORTED_MODULE_9__["View_NativeInPage"].Inst.ReportShow();
            }
            let cacheOnShow = _LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance["_cacheOnShowHandle"];
            console.log(cacheOnShow);
            if (cacheOnShow) {
                cacheOnShow.run();
                _LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance["_cacheOnShowHandle"] = null;
            }
        });
    }
    _Login() {
        this.loginState = {
            isLogin: false,
            code: ""
        };
        this.base.gameLoginWithReal({
            forceLogin: 1,
            appid: this.platformData.appId,
            success: (data) => {
                console.log("Game login success:" + data);
                this.base.savePlayerInfoWithReal({
                    rank: "1",
                    role: "a",
                    area: "cn",
                    sociaty: "1",
                    success: (data) => { console.log("save player info with real success:" + data); },
                    fail: (data, code) => { console.log("save player info with real fail:" + data + ", code:" + code); }
                });
            },
            fail: (data, code) => {
                console.log("on gameLogin fail: " + data + "," + code);
            },
            complete: () => {
                console.log("on gameLogin: complete");
            }
        });
    }
    _InitAdService() {
        this.base.setUnderAgeOfPromise(false);
        //????????????????????????
        // this.base.requestConsentUpdate({
        //     success: (data) => {
        //         console.log('requestConsentUpdate success data ' + JSON.stringify(data));
        //         if (data.isNeedConsent && data.consentStatus == 2) {
        //             //??????????????????
        //         }
        //     },
        //     fail: (data) => {
        //         console.log('requestConsentUpdate fail data ' + JSON.stringify(data))
        //     },
        //     complete: () => {
        //         this.base.setConsentStatus(0);
        //     },
        // })
    }
    /**
    * ??????????????????????????????
    */
    _OnHide(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].platformStr, "OnHide", res);
        _script_manager_AudioManager__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Pause();
        if (_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.onPause) {
            _LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.onPause.runWith(res);
        }
    }
    getSystemInfo() {
        this.base.getSystemInfo({
            success: (res) => {
                this.systemInfo = res;
                console.log('systeminfo', JSON.stringify(this.systemInfo));
                if (!this.safeArea) {
                    this.safeArea = { top: res['statusBarHeight'], bottom: res['screenHeight'], left: 0, right: res['screenWidth'], height: res['screenHeight'], width: res['screenWidth'] };
                }
                this._cacheScreenScale = this.systemInfo.screenWidth / Laya.stage.width;
                console.log(this.safeArea);
            },
            fail: () => { },
            complete: () => { }
        });
    }
    IsBannerAvaliable() {
        return;
    }
    IsVideoAvaliable() {
        return;
    }
    IsInterstitalAvaliable() {
        return;
    }
    ShowInterstitalAd() {
        let interad = this.base.createInterstitialAd({
            adUnitId: this.platformData.interstitialId
        });
        interad.onLoad((data) => {
            interad.show();
        });
        if (interad) {
            interad.load();
        }
    }
    _CreateBannerAd() {
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_8__["default"].IsNullOrEmpty(this.platformData.bannerId)) {
            console.log("????????????banner??????ID,????????????");
            return;
        }
        let windowWidth = this.base.getSystemInfoSync().windowWidth;
        let windowHeight = this.base.getSystemInfoSync().windowHeight;
        this._banner = this.base.createBannerAd({
            adUnitId: this.platformData.bannerId,
            style: {
                top: windowHeight - 57,
                left: 0,
                height: 57,
                width: 360
            }
        });
        this._banner.onLoad(() => {
            console.log("banner????????????", JSON.stringify(this._banner.style));
            // this._banner.style.top = windowHeight;
            // this._banner.style.left = 0;
        });
        this._banner.onError((res) => {
            console.error("banner??????????????????", res);
        });
        // this._banner.onResize((size) => {
        //     console.log("banner resize", JSON.stringify(size));
        //     // this._banner.style.top = windowHeight - size.height;
        //     // this._banner.style.left = (windowWidth - size.width) / 2;
        // });
    }
    ShowBannerAd() {
        if (!this._banner) {
            this._CreateBannerAd();
        }
        if (this.isBannerShow)
            return;
        this.isBannerShow = true;
        this._banner.show();
    }
    HideBannerAd() {
        if (this._banner && this.isBannerShow) {
            this.isBannerShow = false;
            this._banner.hide();
        }
    }
    ShowRewardVideoAd(onSuccess, onSkipped) {
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            _script_manager_AudioManager__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Pause();
            if (this._rewardVideo) {
                yield this._rewardVideo.load();
            }
            else {
                this._rewardVideo = this.base.createRewardedVideoAd({
                    adUnitId: this.platformData.rewardVideoId,
                    success: (code) => {
                        console.log("ad demo : loadAndShowVideoAd createRewardedVideoAd: success");
                    },
                    fail: (data, code) => {
                        console.log("ad demo : loadAndShowVideoAd createRewardedVideoAd fail: " + data + "," + code);
                    },
                    complete: () => {
                        console.log("ad demo : loadAndShowVideoAd createRewardedVideoAd complete");
                    }
                });
                // this._rewardVideo.setTagForUnderAgeOfPromise(0);
                // this._rewardVideo.setNonPersonalizedAd(1);
                this._rewardVideo.onLoad(() => {
                    console.log("????????????????????????");
                    this._rewardVideo.show();
                });
                this._rewardVideo.onError((res) => {
                    console.error("????????????????????????", JSON.stringify(res));
                });
                this._rewardVideo.onClose((res) => {
                    console.error("??????????????????", JSON.stringify(res));
                    let isEnd = res["isEnded"];
                    _Async_Awaiters__WEBPACK_IMPORTED_MODULE_1__["default"].NextFrame().then(() => {
                        _script_manager_AudioManager__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Resume();
                        if (isEnd) {
                            if (this._rewardSuccessed)
                                this._rewardSuccessed.run();
                        }
                        else {
                            if (this._rewardSkipped)
                                this._rewardSkipped.run();
                        }
                    });
                });
                yield this._rewardVideo.load();
                // this._rewardVideo.show().then(() => {
                //     resolve();
                // }).catch(() => {
                //     reject();
                // });
            }
        }));
    }
    GetFromAppId() {
        return null;
    }
    ShareAppMessage(obj, onSuccess = null, onFailed = null) {
        console.log("????????????", obj);
        if (onSuccess) {
            onSuccess.run();
        }
    }
    LoadSubpackage(name, onSuccess, onFailed) {
        // this.base.loadSubpackage({
        //     subpackage: name,
        //     success: () => {
        //         console.log("????????????????????????", `${name}`);
        //         if (onSuccess) {
        //             onSuccess.run();
        //         }
        //     },
        //     fail: (err) => {
        //         console.error("????????????????????????", JSON.stringify(err));
        //         if (onFailed) {
        //             onFailed.run();
        //         }
        //     },
        //     complete: () => {
        //     }
        // });
        onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess.run();
    }
    RecordEvent(eventId, param) {
        console.log("????????????", eventId, param);
    }
    ShareVideoInfo() {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].platformStr, "????????????????????????");
    }
    _CheckUpdate() {
    }
    ShowToast(str) {
        _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_2__["default"].Toast(str);
    }
    OpenGameBox() {
        console.error("????????????", _LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].platformStr, "??????????????????????????????");
    }
    NavigateToApp(appid, path, extra) {
        return new Promise((resolve, reject) => {
            console.error("????????????", _LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].platformStr, `???????????????????????????appid:${appid}`);
            // ????????????resolve
            resolve(false);
        });
    }
    hasShortcutInstalled() {
        return new Promise((resolve, reject) => {
            this.base.hasShortcutInstalled({
                success: (status) => {
                    if (status) {
                        resolve(true);
                    }
                    else {
                        resolve(false);
                    }
                }
            });
        });
    }
    createShortcut() {
        console.log('??????????????????');
        return new Promise((resolve, reject) => {
            this.base.installShortcut({
                success: () => {
                    console.log('????????????????????????');
                    resolve(true);
                }
            });
        });
    }
    GetStorage(key) {
        console.log('???????????????');
        return Laya.LocalStorage.getItem(key);
    }
    SetStorage(key, data) {
        console.log('???????????????');
        Laya.LocalStorage.setItem(key, data);
    }
    followOfficialAccount() {
        console.log('????????????');
        return;
    }
    checkFollowState() {
        console.log('????????????');
        return;
    }
    SetClipboardData(str) {
        this.base.setClipboardData({ data: str });
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/Impl/4399/Gamebox4399Platform.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/Platform/Impl/4399/Gamebox4399Platform.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gamebox4399Platform; });
/* harmony import */ var _DefaultPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DefaultPlatform */ "./src/LTGame/Platform/DefaultPlatform.ts");
/* harmony import */ var _DefaultRecordManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DefaultRecordManager */ "./src/LTGame/Platform/DefaultRecordManager.ts");
/* harmony import */ var _DefaultDevice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../DefaultDevice */ "./src/LTGame/Platform/DefaultDevice.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");




var gamebox = window['gamebox'];
class Gamebox4399Platform extends _DefaultPlatform__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Gamebox4399;
    }
    Init(platformData) {
        this.base = gamebox;
        this.platformData = platformData;
        this._login();
        this._InitSystemInfo();
        this.recordManager = new _DefaultRecordManager__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.device = new _DefaultDevice__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
    _login() {
        console.log('gamebox.login');
        let loginObj = {
            success: (res) => {
                if (res.code) {
                    //??????????????????
                    gamebox.request({
                        url: 'https://test.com/onLogin',
                        data: {
                            code: res.code
                        }
                    });
                }
                else {
                    console.log('???????????????' + res.errMsg);
                }
            }
        };
        gamebox.checkSession({
            success: () => {
                //session_key ????????????????????????????????????????????????
            },
            fail: () => {
                // session_key ?????????????????????????????????????????????
                gamebox.login(loginObj); //????????????
            }
        });
    }
    _InitSystemInfo() {
        try {
            console.log(window.innerWidth, window.innerHeight);
            this.safeArea = {};
            this.safeArea.left = 0;
            this.safeArea.right = 0;
            this.safeArea.bottom = window.innerHeight;
            this.safeArea.top = 0;
            this.safeArea.width = window.innerWidth;
            this.safeArea.height = window.innerHeight - this.safeArea.top;
            console.log("???????????????????????????");
        }
        catch (e) {
            console.error(e);
            console.error("????????????????????????,?????????????????????");
            this.safeArea = null;
        }
    }
    ShowRewardVideoAd(onSuccess, onSkipped, onFailed) {
        if (!this.rewardAd) {
            this.rewardAd = gamebox.createRewardedVideoAd();
            //?????? ???????????? ??????????????????????????????
            const onLoadCb = (res) => { console.info('RewardedVideo onLoad' + res); };
            //?????? ???????????? ??????????????????????????????
            const onErrorCb = (res) => {
                console.info('RewardedVideo onError' + res);
                onFailed.run();
            };
            //?????? ???????????? ??????????????????????????????
            const onCloseCb = (res) => {
                console.info('RewardedVideo onClose' + JSON.stringify(res));
                if (res.isEnded) {
                    onSuccess.run();
                }
                else {
                    onSkipped.run();
                }
            };
            //?????? ???????????? ????????????????????????????????????
            const onCompletedCb = (res) => {
                console.info('RewardedVideo onCompleted' + JSON.stringify(res));
            };
            this.rewardAd.onError(onErrorCb);
            this.rewardAd.onLoad(onLoadCb);
            this.rewardAd.onClose(onCloseCb);
            this.rewardAd.onCompleted(onCompletedCb);
        }
        this.rewardAd.show().catch(() => {
            // ????????????
            this.rewardAd.load()
                .then(() => this.rewardAd.show())
                .catch(err => {
                console.log('???????????? ??????????????????', err);
            });
        });
    }
    ShowInterstitalAd() {
        if (!this.interstitialAd) {
            //?????? InterstitialAd ??????????????????????????????
            this.interstitialAd = gamebox.createInterstitialAd();
            const onLoadCb = (res) => { console.info('InterstitialAd onLoad' + res); };
            //?????? InterstitialAd ????????????????????????
            const onCloseCb = (res) => { console.info('InterstitialAd onClose' + res); };
            //?????? InterstitialAd ??????????????????????????????
            const onErrorCb = (res) => { console.info('InterstitialAd onError' + res); };
            //?????? InterstitialAd ??????????????????
            this.interstitialAd.onLoad(onLoadCb);
            //?????? InterstitialAd ????????????
            this.interstitialAd.onClose(onCloseCb);
            //?????? InterstitialAd ????????????
            this.interstitialAd.onError(onErrorCb);
        }
        this.interstitialAd.show().catch(() => {
            // ????????????
            this.interstitialAd.load()
                .then(() => this.interstitialAd.show())
                .catch(err => {
                console.log('InterstitialAd ??????????????????', err);
            });
        });
    }
    LoadSubpackage(name, onSuccess, onFailed, onProgress) {
        const loadTask = gamebox.loadSubpackage({
            name: name,
            success: (res) => {
                // ??????????????????????????? success ??????
                onSuccess.run();
            },
            fail: (res) => {
                // ???????????????????????? fail ??????
                onFailed.run();
            }
        });
        loadTask.onProgressUpdate(res => {
            console.log('????????????', res.progress);
            console.log('???????????????????????????', res.totalBytesWritten);
            console.log('????????????????????????????????????', res.totalBytesExpectedToWrite);
            onProgress.runWith(res);
        });
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/Impl/4399/HTML4399Platform.ts":
/*!***********************************************************!*\
  !*** ./src/LTGame/Platform/Impl/4399/HTML4399Platform.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML4399Platform; });
/* harmony import */ var _DefaultPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DefaultPlatform */ "./src/LTGame/Platform/DefaultPlatform.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Commom/CommonSaveData */ "./src/LTGame/Commom/CommonSaveData.ts");
/* harmony import */ var _script_manager_AudioManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../script/manager/AudioManager */ "./src/script/manager/AudioManager.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");





class HTML4399Platform extends _DefaultPlatform__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].HTML4399;
    }
    Init(platformData) {
        this.base = Laya.Browser.window.h5api;
        if (this.base == null) {
            console.error("?????????????????????");
            return;
        }
        this.platformData = platformData;
        this._InitSystemInfo();
        // this._login();
        window["iplatform"] = this;
    }
    _InitSystemInfo() {
        try {
            this.safeArea = {};
            this.safeArea.left = 0;
            this.safeArea.right = 0;
            this.safeArea.bottom = 0;
            this.safeArea.top = 0;
            this.safeArea.width = 750;
            this.safeArea.height = 1334;
            console.log("???????????????????????????");
        }
        catch (e) {
            console.error(e);
            console.error("????????????????????????,?????????????????????");
            this.safeArea = null;
        }
    }
    _login() {
        if (!this.base.isLogin()) {
            this.base.login((data) => {
                /* data = {
                    uId: 1234567, // ????????????
                    userName: '??????', // ????????????
                } */
                console.log("4399????????????");
                let avatar = '';
                if (data.uId) {
                    avatar = this.base.getUserSmallAvatar(data.uId);
                }
                _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__["default"].instance.nickName = data.userName;
                _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__["default"].instance.avatarUrl = avatar;
                _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__["default"].SaveToDisk();
            });
        }
    }
    ShowRewardVideoAd(onSuccess, onSkipped, onFailed) {
        this.base.canPlayAd((data) => {
            console.error(data);
            this.base.playAd((obj) => {
                console.error(obj);
                if (obj.code === 10000) {
                    console.log('????????????');
                    _script_manager_AudioManager__WEBPACK_IMPORTED_MODULE_3__["default"].instance.Pause();
                }
                else if (obj.code === 10001) {
                    onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess.run();
                    _script_manager_AudioManager__WEBPACK_IMPORTED_MODULE_3__["default"].instance.Resume();
                    console.log('????????????');
                }
                else {
                    onSkipped === null || onSkipped === void 0 ? void 0 : onSkipped.run();
                    _script_manager_AudioManager__WEBPACK_IMPORTED_MODULE_3__["default"].instance.Resume();
                    console.log('????????????');
                }
            });
        });
    }
    ShowRewardVideoAdAsync() {
        return new Promise(function (resolve) {
            _LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.ShowRewardVideoAd(Laya.Handler.create(this, () => {
                resolve(true);
            }), Laya.Handler.create(this, () => {
                resolve(false);
            }), Laya.Handler.create(this, () => {
                resolve(null);
            }));
        });
    }
    ShowToast(str) {
        this.base.showToast({
            title: str
        });
    }
    ShowBannerAd() { }
    ShowInterstitalAd() { }
    /**
     *  ???????????????
        10000 ???????????????
        10001 ????????????
        10010 ????????????(???????????????)
     * @param wordStr ?????????
     */
    checkWords(wordStr) {
        this.base.checkWord(wordStr, function (data) {
            console.log('????????????', data.code, data.words);
        });
    }
    /**
    * ?????????????????????
    */
    showRankList() {
        this.base.showRankList();
    }
    /**
         *
         * @param rankId ?????????ID
         * @param score ??????
         * @param callback ??????
         */
    submitRankScore(rankId, score, callback) {
        this.base.submitRankScore(rankId, score, callback);
    }
    /**
     * ??????
     */
    share() {
        this.base.share();
    }
    OpenGameBox() {
        this.base.showRecommend();
    }
    RecordEvent() { }
}


/***/ }),

/***/ "./src/LTGame/Platform/Impl/KS/KSRecordManager.ts":
/*!********************************************************!*\
  !*** ./src/LTGame/Platform/Impl/KS/KSRecordManager.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KSRecordManager; });
/* harmony import */ var _Async_Awaiters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");

class KSRecordManager {
    constructor(base) {
        this.supportRecord = true;
        this._base = base;
        this.isRecording = false;
        this.isRecordSuccess = false;
        this.isPausing = false;
    }
    get isSupportRecord() {
        if (this._nativeManager) {
            this.supportRecord = true;
            return true;
        }
        return false;
    }
    StartRecord(onStart, onOverTime) {
        console.log("KS??????????????????");
        this._cacheStartHandle = onStart;
        this._cacheOverTimeHandle = onOverTime;
        this._cacheStopHandle = null;
        if (!this._nativeManager) {
            try {
                console.log("??????????????????");
                this._nativeManager = this._base.createMediaRecorder();
            }
            catch (error) {
                console.error('????????????????????????', JSON.stringify(error));
            }
        }
        _Async_Awaiters__WEBPACK_IMPORTED_MODULE_0__["default"].Seconds(1).then(() => {
            if (this._nativeManager) {
                this.supportRecord = true;
                this._nativeManager.init({
                    callback: (error) => {
                        if (error != null && error != undefined) {
                            console.log("?????????????????????: " + JSON.stringify(error));
                            return;
                        }
                        console.log("?????????????????????");
                    }
                });
                this._nativeManager.onError({
                    listener: (error) => {
                        console.log("???????????? ????????????: " + error);
                        if (this._cacheStopHandle)
                            this._cacheStopHandle.run();
                    }
                });
                this._nativeManager.start({
                    callback: (error) => {
                        if (error != null && error != undefined) {
                            console.log("??????????????????: " + JSON.stringify(error));
                            return;
                        }
                        console.log("??????????????????");
                        if (this._cacheStartHandle)
                            this._cacheStartHandle.run();
                    }
                });
            }
            else {
                console.error(" ???????????????");
            }
        });
    }
    Pause(onPause) {
        if (!this.isRecording) {
            console.error("?????????????????????,??????????????????");
            return;
        }
        if (this.isPausing) {
            console.log("???????????????????????????");
            return;
        }
        console.log("??????????????????");
        this._cachePauseHandle = onPause;
        this._nativeManager.pause({
            callback: (error) => {
                if (error != null && error != undefined) {
                    console.log("??????????????????: " + JSON.stringify(error));
                    return;
                }
                console.log("??????????????????");
                if (this._cachePauseHandle)
                    this._cachePauseHandle.run();
            }
        });
    }
    Resume(onReume) {
        if (!this.isRecording) {
            console.error("?????????????????????,??????????????????");
            return;
        }
        if (!this.isPausing) {
            console.log("?????????????????????????????????");
            return;
        }
        console.log("??????????????????");
        this._cacheResumeHandle = onReume;
        this._nativeManager.resume({
            callback: (error) => {
                if (error != null && error != undefined) {
                    console.log("??????????????????: " + JSON.stringify(error));
                    return;
                }
                if (this._cacheResumeHandle)
                    this._cacheResumeHandle.run();
                console.log("??????????????????");
            }
        });
    }
    RecordClip(timeRange) {
    }
    StopRecord(onStop) {
        console.log("??????????????????");
        if (!this.supportRecord)
            return;
        if (!this._nativeManager)
            return;
        this._cacheStopHandle = onStop;
        this._nativeManager.stop({
            callback: (error) => {
                if (error != null && error != undefined) {
                    console.log("??????????????????: " + JSON.stringify(error));
                    return;
                }
                console.log("??????????????????");
                this.isRecordSuccess = true;
                if (this._cacheStopHandle)
                    this._cacheStopHandle.run();
            }
        });
    }
    ShareVideo(onSuccess, onCancel, onFailed) {
        if (this.isRecordSuccess) {
            this._nativeManager.publishVideo({
                callback: (error) => {
                    if (error != null && error != undefined) {
                        console.log("??????????????????: " + JSON.stringify(error));
                        if (onCancel)
                            onCancel.run();
                        return;
                    }
                    console.log("??????????????????");
                    if (onSuccess)
                        onSuccess.run();
                }
            });
        }
        else {
            console.log("?????????????????????");
            if (onFailed) {
                onFailed.run();
            }
        }
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/Impl/Native_Android/AndroidDevice.ts":
/*!******************************************************************!*\
  !*** ./src/LTGame/Platform/Impl/Native_Android/AndroidDevice.ts ***!
  \******************************************************************/
/*! exports provided: AndroidDevice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndroidDevice", function() { return AndroidDevice; });
class AndroidDevice {
    constructor(bridge) {
        this.surportVibrate = true;
        this.base = bridge;
        console.log('android device');
    }
    Vibrate(isLong) {
        console.log('????????????', isLong);
        if (this.base) {
            if (isLong) {
                this.base.call("vibrate", 200);
            }
            else {
                this.base.call("vibrate", 50);
            }
        }
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/Impl/Native_Android/NativeAndroid233Platform.ts":
/*!*****************************************************************************!*\
  !*** ./src/LTGame/Platform/Impl/Native_Android/NativeAndroid233Platform.ts ***!
  \*****************************************************************************/
/*! exports provided: NativeAndroid233Platform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeAndroid233Platform", function() { return NativeAndroid233Platform; });
/* harmony import */ var _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _DefaultPlatform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DefaultPlatform */ "./src/LTGame/Platform/DefaultPlatform.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");




class NativeAndroid233Platform extends _DefaultPlatform__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super(...arguments);
        this.useWAV = true;
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Native_Android_233;
        this.safeArea = null;
        /**233 180s ?????? */
        this.fullScreenAdCD = 0;
        //?????? 60s
        this.interAdCD = 0;
        this._isDebug = true;
    }
    ;
    Init(platformData) {
        this.platformData = platformData;
        let conchConfig = window['conchConfig'];
        let PlatformClass = window['PlatformClass'];
        let os = conchConfig.getOS();
        if (os == "Conch-android") {
            this.bridge = PlatformClass.createClass("demo.JSBridge"); //??????????????????
        }
        console.log("?????????????????????" + _LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].platformStr);
        this._InitSystemInfo();
        this.loginState = {
            isLogin: true,
            code: "111111111111"
        };
        this.userInfo = { nickName: '???????????????666', avatarUrl: '66.png' };
        Laya.timer.once(500, this, this.FakeLoginEnd);
        this.fullScreenAdCD = 180;
        this.interAdCD = 0;
        Laya.timer.loop(1000, this, () => {
            this.fullScreenAdCD -= 1;
            this.interAdCD -= 1;
        });
    }
    _InitSystemInfo() {
        try {
            this.safeArea = {};
            this.safeArea.left = 0;
            this.safeArea.right = 0;
            this.safeArea.bottom = 0;
            this.safeArea.top = 0;
            this.safeArea.width = 750;
            this.safeArea.height = 1334;
            this._cacheScreenScale = 750 / Laya.stage.width;
            console.log("???????????????????????????");
        }
        catch (e) {
            console.error(e);
            console.error("????????????????????????,?????????????????????");
            this.safeArea = null;
        }
    }
    FakeLoginEnd() {
        if (this.onLoginEnd)
            this.onLoginEnd.run();
    }
    ShowRewardVideoAd(onSuccess, onSkipped) {
        const obj = {};
        _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_0__["default"].ShowLoading("?????????...");
        this.bridge.callWithBack(function (json) {
            console.log("??????????????????:" + json);
            const data = JSON.parse(json);
            //  {event:"", value:""}
            switch (data.event) {
                case "onAdClose":
                    //  ????????????
                    onSkipped.run();
                    break;
                case "onAdComplete":
                    //  ??????????????????
                    onSuccess.run();
                    break;
                case "onAdError":
                    //  ????????????
                    onSkipped.run();
                    break;
                case "onAdSkipped":
                    //  ??????
                    onSkipped.run();
                    break;
            }
        }, "RewardVideoAd", JSON.stringify(obj));
        setTimeout(() => {
            _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_0__["default"].HideLoading();
        }, 5000);
        this.bridge.call("ShowRewardAd");
    }
    ShowInterstitalAd() {
        if (window["__GM"])
            return;
        if (this.fullScreenAdCD < 0) {
            this.ShowFullScreenVideo();
        }
        else if (this.interAdCD < 0) {
            this.interAdCD = 60;
            this.bridge.call("ShowInterstitialAd");
        }
    }
    ShowFullScreenVideo() {
        const obj = {};
        this.bridge.callWithBack((json) => {
            console.log("??????????????????: " + json);
            const data = JSON.parse(json);
            //  {event:"", value:""}
            switch (data.event) {
                case "onAdClose":
                    //  ????????????
                    this.fullScreenAdCD = 180;
                    break;
                case "onAdComplete":
                    //  ??????????????????
                    this.fullScreenAdCD = 180;
                    break;
                case "onAdError":
                    //  ????????????
                    break;
                case "onAdSkipped":
                    //  ?????? 
                    this.fullScreenAdCD = 180;
                    break;
            }
        }, "ShowFullScreenVideo", JSON.stringify(obj));
        this.bridge.call("ShowFullScreenVideo");
    }
    ShowBannerAd() {
        // if (LTSDK.instance.checkState != ECheckState.InCheck) {
        // }
        this.bridge.call("ShowBanner");
    }
    HideBannerAd() {
        this.bridge.call("RemoveBanner");
    }
    RecordEvent(eventId, param) {
        //??????????????????splash
        if (eventId == "???????????????????????????") {
            this.bridge.call('hideSplash');
        }
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/Impl/Native_Android/NativeAndroidMMYPlatform.ts":
/*!*****************************************************************************!*\
  !*** ./src/LTGame/Platform/Impl/Native_Android/NativeAndroidMMYPlatform.ts ***!
  \*****************************************************************************/
/*! exports provided: NativeAndroidMMYPlatform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeAndroidMMYPlatform", function() { return NativeAndroidMMYPlatform; });
/* harmony import */ var _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _DefaultPlatform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DefaultPlatform */ "./src/LTGame/Platform/DefaultPlatform.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _AndroidDevice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AndroidDevice */ "./src/LTGame/Platform/Impl/Native_Android/AndroidDevice.ts");





class NativeAndroidMMYPlatform extends _DefaultPlatform__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super(...arguments);
        this.useWAV = true;
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Native_Android_MMY;
        this.safeArea = null;
        this._isDebug = true;
    }
    ;
    Init(platformData) {
        this.platformData = platformData;
        let conchConfig = window['conchConfig'];
        let PlatformClass = window['PlatformClass'];
        let os = conchConfig.getOS();
        if (os == "Conch-android") {
            this.bridge = PlatformClass.createClass("demo.JSBridge"); //??????????????????
        }
        console.log("?????????????????????" + _LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].platformStr);
        console.log("?????????");
        this._InitSystemInfo();
        this.device = new _AndroidDevice__WEBPACK_IMPORTED_MODULE_4__["AndroidDevice"](this.bridge);
        this.loginState = {
            isLogin: true,
            code: "111111111111"
        };
        this.userInfo = { nickName: '???????????????666', avatarUrl: '66.png' };
        Laya.timer.once(500, this, this.FakeLoginEnd);
    }
    _InitSystemInfo() {
        try {
            this.safeArea = {};
            this.safeArea.left = 0;
            this.safeArea.right = 0;
            this.safeArea.bottom = 0;
            this.safeArea.top = 0;
            this.safeArea.width = 750;
            this.safeArea.height = 1334;
            this._cacheScreenScale = 750 / Laya.stage.width;
            console.log("???????????????????????????");
        }
        catch (e) {
            console.error(e);
            console.error("????????????????????????,?????????????????????");
            this.safeArea = null;
        }
    }
    FakeLoginEnd() {
        if (this.onLoginEnd)
            this.onLoginEnd.run();
    }
    ShowRewardVideoAd(onSuccess, onSkipped, onFail) {
        const obj = {};
        _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_0__["default"].ShowLoading("?????????...");
        this.bridge.callWithBack(function (json) {
            console.log("??????????????????:" + json);
            const data = JSON.parse(json);
            //  {event:"", value:""}
            switch (data.event) {
                case "onAdClose":
                    //  ????????????
                    onSkipped.run();
                    break;
                case "onAdComplete":
                    //  ??????????????????
                    onSuccess.run();
                    break;
                case "onAdError":
                    //  ????????????
                    onFail.run();
                    break;
                case "onAdSkipped":
                    //  ??????
                    onSkipped.run();
                    break;
            }
        }, "RewardVideoAd", JSON.stringify(obj));
        setTimeout(() => {
            _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_0__["default"].HideLoading();
        }, 5000);
        this.bridge.call("ShowRewardAd");
    }
    ShowInterstitalAd() {
        if (window["__GM"])
            return;
        this.bridge.call("ShowInterstitalAd");
    }
    ShowBannerAd() {
        // if (LTSDK.instance.checkState != ECheckState.InCheck) {
        // }
        this.bridge.call("ShowBanner");
    }
    HideBannerAd() {
        this.bridge.call("RemoveBanner");
    }
    RecordEvent(eventId, param) {
        //??????????????????splash
        if (eventId == "???????????????????????????") {
            this.bridge.call('hideSplash');
        }
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/Impl/Native_Android/NativeAndroidPlatform.ts":
/*!**************************************************************************!*\
  !*** ./src/LTGame/Platform/Impl/Native_Android/NativeAndroidPlatform.ts ***!
  \**************************************************************************/
/*! exports provided: NativeAndroidPlatform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeAndroidPlatform", function() { return NativeAndroidPlatform; });
/* harmony import */ var _DefaultPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DefaultPlatform */ "./src/LTGame/Platform/DefaultPlatform.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../SDK/common/ECheckState */ "./src/SDK/common/ECheckState.ts");
/* harmony import */ var _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");






class NativeAndroidPlatform extends _DefaultPlatform__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.useWAV = true;
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].Native_Android;
        this.safeArea = null;
        this._isDebug = true;
    }
    ;
    Init(platformData) {
        this.platformData = platformData;
        let conchConfig = window['conchConfig'];
        let PlatformClass = window['PlatformClass'];
        let os = conchConfig.getOS();
        if (os == "Conch-android") {
            this.bridge = PlatformClass.createClass("demo.JSBridge"); //??????????????????
        }
        console.log("?????????????????????", _LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].platformStr, this);
        this._InitSystemInfo();
        this.loginState = {
            isLogin: true,
            code: "111111111111"
        };
        this.userInfo = { nickName: '???????????????666', avatarUrl: '66.png' };
        Laya.timer.once(500, this, this.FakeLoginEnd);
    }
    _InitSystemInfo() {
        try {
            this.safeArea = {};
            this.safeArea.left = 0;
            this.safeArea.right = 0;
            this.safeArea.bottom = 0;
            this.safeArea.top = 0;
            this.safeArea.width = 750;
            this.safeArea.height = 1334;
            this._cacheScreenScale = 750 / Laya.stage.width;
            console.log("???????????????????????????");
        }
        catch (e) {
            console.error(e);
            console.error("????????????????????????,?????????????????????");
            this.safeArea = null;
        }
    }
    FakeLoginEnd() {
        if (this.onLoginEnd)
            this.onLoginEnd.run();
    }
    ShowRewardVideoAd(onSuccess, onSkipped) {
        const obj = {};
        _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_5__["default"].ShowLoading("?????????...");
        this.bridge.callWithBack(function (json) {
            console.log("??????????????????:" + json);
            const data = JSON.parse(json);
            //  {event:"", value:""}
            switch (data.event) {
                case "onAdClose":
                    //  ????????????
                    onSkipped.run();
                    break;
                case "onAdComplete":
                    //  ??????????????????
                    onSuccess.run();
                    break;
                case "onAdError":
                    //  ????????????
                    onSkipped.run();
                    break;
                case "onAdSkipped":
                    //  ??????
                    onSkipped.run();
                    break;
            }
        }, "RewardVideoAd", JSON.stringify(obj));
        setTimeout(() => {
            _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_5__["default"].HideLoading();
        }, 5000);
        this.bridge.call("ShowRewardAd");
    }
    ShowInterstitalAd() {
        const obj = {};
        this.bridge.callWithBack(function (json) {
            console.log("??????????????????: " + json);
            const data = JSON.parse(json);
            //  {event:"", value:""}
            switch (data.event) {
                case "onAdClose":
                    //  ????????????
                    break;
                case "onAdComplete":
                    //  ??????????????????
                    break;
                case "onAdError":
                    //  ????????????
                    break;
                case "onAdSkipped":
                    //  ??????
                    break;
            }
        }, "ShowFullScreenVideo", JSON.stringify(obj));
        this.bridge.call("ShowFullScreenVideo");
    }
    ShowBannerAd() {
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_3__["default"].instance.checkState != _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_4__["ECheckState"].InCheck) {
            this.bridge.call("ShowBanner");
        }
    }
    HideBannerAd() {
        this.bridge.call("RemoveBanner");
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/Impl/Native_IOS/NativeIOSPlatform.ts":
/*!******************************************************************!*\
  !*** ./src/LTGame/Platform/Impl/Native_IOS/NativeIOSPlatform.ts ***!
  \******************************************************************/
/*! exports provided: NativeIOSPlatform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeIOSPlatform", function() { return NativeIOSPlatform; });
/* harmony import */ var _DefaultPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DefaultPlatform */ "./src/LTGame/Platform/DefaultPlatform.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");




class NativeIOSPlatform extends _DefaultPlatform__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].Native_IOS;
        this.useWAV = true;
        this.isSupportJumpOther = false;
        this._isDebug = false;
    }
    Init(platformData) {
        this.platformData = platformData;
        let conchConfig = window['conchConfig'];
        let PlatformClass = window['PlatformClass'];
        let os = conchConfig.getOS();
        if (os == "Conch-ios") {
            this.base = PlatformClass.createClass("JSBridge"); //??????????????????
        }
        console.log("?????????????????????", _LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].platformStr, this);
        this._InitSystemInfo();
        if (this._isDebug) {
            console.log("js ?????? InitAppId");
        }
        // this.base.call("InitAppId", platformData.appId);
    }
    _InitSystemInfo() {
        try {
            this.safeArea = {};
            this.safeArea.left = 0;
            this.safeArea.right = 0;
            this.safeArea.bottom = 0;
            this.safeArea.top = 0;
            this.safeArea.width = 750;
            this.safeArea.height = 1334;
            console.log("???????????????????????????");
        }
        catch (e) {
            console.error(e);
            console.error("????????????????????????,?????????????????????");
            this.safeArea = null;
        }
    }
    ShowBannerAd() {
        if (this._isDebug) {
            console.log("js ?????? ShowBannerAd");
        }
        this._AsyncBack("ShowBannerAd", null);
    }
    HideBannerAd() {
        if (this._isDebug) {
            console.log("js ?????? HideBannerAd");
        }
        this._AsyncBack("HideBannerAd", null);
    }
    ShowRewardVideoAd(onSuccess, onSkipped, onFailed) {
        if (this._isDebug) {
            console.log("js ?????? ShowRewardVideoAd");
        }
        _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].ShowLoading("???????????????");
        let isSuccessed = true;
        this._AsyncBack("ShowRewardVideoAd", (value) => {
            _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].HideLoading();
            if (this._isDebug) {
                console.log("????????????" + value);
            }
            switch (value) {
                case "Failed":
                    onFailed === null || onFailed === void 0 ? void 0 : onFailed.run();
                    break;
                case "Close":
                    onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess.run();
                    break;
                case "Skip":
                    isSuccessed = true;
                    onSkipped === null || onSkipped === void 0 ? void 0 : onSkipped.run();
                    break;
                case "Success":
                    isSuccessed = true;
                    break;
            }
        });
    }
    _AsyncBack(msg, action) {
        this.base.callWithBack((value) => {
            if (this._isDebug) {
                console.log("?????????OC??????", value);
            }
            action(value);
        }, "_AsyncBack:", msg);
    }
    ShowInterstitalAd() {
        if (this._isDebug) {
            console.log("js ?????? ShowInterstitalAd");
        }
        this._AsyncBack("ShowIntersital", null);
    }
    RecordEvent(eventId, param) {
        let paramStr = "";
        if (param != null) {
            paramStr = JSON.stringify(param);
        }
        if (this._isDebug) {
            console.log("js ?????? RecordEvent");
        }
        this.base.call("RecordEvent:", eventId + "|" + paramStr);
    }
    ShowFullScreenAd() {
        if (this._isDebug) {
            console.log("js ?????? ShowFullScreen");
        }
        this._AsyncBack("ShowFullScreen", null);
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/Impl/OpenDataContext.ts":
/*!*****************************************************!*\
  !*** ./src/LTGame/Platform/Impl/OpenDataContext.ts ***!
  \*****************************************************/
/*! exports provided: default, EOpenDataMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenDataContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EOpenDataMethod", function() { return EOpenDataMethod; });
/**??????????????? */
class OpenDataContext {
    constructor(_base) {
        this.supportOpenContext = false;
        this.base = _base;
    }
    /** ???????????????????????? */
    postMsg(msg) {
    }
    /**?????????????????? */
    setUserGroup(group) {
    }
    /**??????????????????
     * {score:10}
     */
    setUserCloudStorage(obj) {
    }
    /**?????????????????? */
    getUserCloudStorage(keys) {
    }
    getCloudStorageByRelation() {
    }
    /**
     * ????????????
     * @param longTime ??????????????????
     */
    subscribeAppMsg(longTime = false) {
        return;
    }
}
var EOpenDataMethod;
(function (EOpenDataMethod) {
    EOpenDataMethod["resize"] = "resize";
    EOpenDataMethod["getFriendRankData"] = "getFriendRankData";
    EOpenDataMethod["showFriendRank"] = "showFriendRank";
    EOpenDataMethod["changePage"] = "changePage";
    EOpenDataMethod["updateMaxScore"] = "updateMaxScore";
    EOpenDataMethod["getSelfScore"] = "getSelfScore";
    EOpenDataMethod["getUserInfo"] = "getUserInfo";
})(EOpenDataMethod || (EOpenDataMethod = {}));


/***/ }),

/***/ "./src/LTGame/Platform/Impl/TT/TTDevice.ts":
/*!*************************************************!*\
  !*** ./src/LTGame/Platform/Impl/TT/TTDevice.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TTDevice; });
/* harmony import */ var _DefaultDevice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DefaultDevice */ "./src/LTGame/Platform/DefaultDevice.ts");

class TTDevice extends _DefaultDevice__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(base) {
        super();
        this._base = base;
    }
    Vibrate(isLong) {
        console.log("????????????", isLong);
        if (isLong) {
            this._base.vibrateLong({
                success(res) { },
                fail(res) {
                    console.error("??????????????????", res);
                },
                complete(res) { }
            });
        }
        else {
            this._base.vibrateShort({
                success(res) { },
                fail(res) {
                    console.error("??????????????????", res);
                },
                complete(res) { }
            });
        }
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/Impl/TT/TTRecordManager.ts":
/*!********************************************************!*\
  !*** ./src/LTGame/Platform/Impl/TT/TTRecordManager.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TTRecordManager; });
/* harmony import */ var _script_config_PackConst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../script/config/PackConst */ "./src/script/config/PackConst.ts");
/* harmony import */ var _DefaultRecordManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DefaultRecordManager */ "./src/LTGame/Platform/DefaultRecordManager.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");






class TTRecordManager extends _DefaultRecordManager__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(base) {
        super();
        this.supportRecord = true;
        this.videoID = '';
        this._base = base;
        if (_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.systemInfo['appName'] == "devtools") {
            this.supportRecord = false;
        }
        this.isRecording = false;
        this.isRecordSuccess = false;
        this.isPausing = false;
        this._nativeManager = this._base.getGameRecorderManager();
        this._nativeManager.onStart((res) => {
            console.log("??????????????????", res);
            this.isRecording = true;
            this.isRecordSuccess = false;
            this._cacheStartHandle && this._cacheStartHandle.run();
        });
        this._nativeManager.onStop((res) => {
            console.log("??????????????????", res);
            this.videoSavePath = res.videoPath;
            this.isRecording = false;
            this.isRecordSuccess = true;
            if (this._cacheStopHandle) {
                this._cacheStopHandle.run();
            }
            else if (this._cacheOverTimeHandle) {
                this._cacheOverTimeHandle.run();
            }
        });
        this._nativeManager.onError((err) => {
            console.log("??????????????????", err);
            this.isRecordSuccess = false;
            this.isRecording = false;
        });
        this._nativeManager.onPause((res) => {
            console.log("??????????????????", res);
            this.isPausing = true;
            this._cachePauseHandle && this._cachePauseHandle.run();
        });
        this._nativeManager.onResume((res) => {
            console.log("??????????????????", res);
            this.isPausing = false;
            this._cacheResumeHandle && this._cacheResumeHandle.run();
        });
    }
    get isSupportRecord() {
        return this.supportRecord;
    }
    StartRecord(onStart, onOverTime) {
        if (!this.supportRecord) {
            console.log("???????????????");
            return;
        }
        if (this.isRecording)
            return;
        console.log("??????????????????");
        this._cacheStartHandle = onStart;
        this._cacheOverTimeHandle = onOverTime;
        this._cacheStopHandle = null;
        this._nativeManager.start({ duration: 300 });
    }
    Pause(onPause) {
        if (!this.isRecording) {
            console.error("?????????????????????,??????????????????");
            return;
        }
        if (this.isPausing) {
            console.log("???????????????????????????");
            return;
        }
        console.log("??????????????????");
        this._cachePauseHandle = onPause;
        this._nativeManager.pause();
    }
    Resume(onReume) {
        if (!this.isRecording) {
            console.error("?????????????????????,??????????????????");
            return;
        }
        if (!this.isPausing) {
            console.log("?????????????????????????????????");
            return;
        }
        console.log("??????????????????");
        this._cacheResumeHandle = onReume;
        this._nativeManager.resume();
    }
    RecordClip(timeRange) {
        if (!this.isRecording) {
            console.error("?????????????????????,????????????????????????");
            return;
        }
        if (this.isPausing) {
            console.log("???????????????????????????,????????????????????????");
            return;
        }
        if (timeRange == null) {
            this._nativeManager.recordClip({});
        }
        else {
            this._nativeManager.recordClip({ timeRange: timeRange });
        }
    }
    StopRecord(onStop) {
        if (!this.isRecording)
            return;
        console.log("??????????????????");
        this._cacheStopHandle = onStop;
        this._nativeManager.stop();
    }
    ShareVideo(onSuccess, onCancel, onFailed) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(_script_config_PackConst__WEBPACK_IMPORTED_MODULE_0__["PackConst"].data);
            if (this.isRecordSuccess) {
                let shareId = `${_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_3__["default"].instance.uid}${Date.now()}`;
                let videoId = yield this.shareRecordVideo(shareId);
                this.videoID = videoId;
                if (!_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_4__["default"].IsNullOrEmpty(videoId)) {
                    _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_3__["default"].instance.reportShareInfo(videoId, shareId);
                    onSuccess.run();
                }
            }
            else {
                console.log("?????????????????????");
                if (onFailed) {
                    onFailed.run();
                }
            }
        });
    }
    shareRecordVideo(shareId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (this.isRecordSuccess) {
                    let shareData = {
                        channel: "video",
                        title: "",
                        desc: "",
                        imageUrl: "",
                        templateId: _script_config_PackConst__WEBPACK_IMPORTED_MODULE_0__["PackConst"].data.share_id,
                        query: `from=sharePage`,
                        extra: {
                            videoPath: this.videoSavePath,
                            videoTopics: _script_config_PackConst__WEBPACK_IMPORTED_MODULE_0__["PackConst"].data.topics,
                            withVideoId: true,
                            hashtag_list: _script_config_PackConst__WEBPACK_IMPORTED_MODULE_0__["PackConst"].data.topics,
                            video_title: ""
                        },
                        success: (res) => {
                            console.log("????????????", res);
                            resolve(res.videoId);
                        },
                        fail: (e) => {
                            if (e && e.errNo && e.errNo == 21105) {
                                _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_5__["default"].Toast("????????????????????????????????? 3 ???");
                            }
                            console.log("????????????", e);
                            resolve("");
                        }
                    };
                    this._base.shareAppMessage(shareData);
                }
                else {
                    console.log("?????????????????????");
                    return "";
                }
            });
        });
    }
    navigateToVideo(videoId) {
        if (!this.videoID) {
            return;
        }
        this._base.navigateToVideoView({
            videoId: this.videoID,
            success: (res) => {
                console.log("????????????", res);
            },
            fail: (err) => {
                if (err.errCode === 1006) {
                    this._base.showToast({
                        title: "something wrong with your network",
                    });
                }
            },
        });
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/Impl/WX/WXOpenDataContext.ts":
/*!**********************************************************!*\
  !*** ./src/LTGame/Platform/Impl/WX/WXOpenDataContext.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WXOpenDataContext; });
/* harmony import */ var _OpenDataContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OpenDataContext */ "./src/LTGame/Platform/Impl/OpenDataContext.ts");

class WXOpenDataContext extends _OpenDataContext__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(_base) {
        super(_base);
        this.group = "defaultUserGroup";
        this.supportOpenContext = true;
        this.openDataContext = this.base.getOpenDataContext();
    }
    /** ???????????????????????? */
    postMsg(msg) {
        if (this.supportOpenContext) {
            this.openDataContext.postMessage(msg);
        }
    }
    setUserGroup(group) {
        if (!group) {
            group = this.group;
        }
        else {
            this.group = group;
        }
        this.base.setUserGroup({
            groupId: group,
            success: (res) => { console.log("set group success", res); },
            fail: (res) => { console.error("set group fail", res); },
            complete: () => {
                console.log("set group complete");
            }
        });
        // this.postMsg({
        //     command: "setUserGroup",
        //     data: { groupId: group }
        // });
    }
    setUserCloudStorage(obj) {
        this.postMsg({
            command: "setUserCloudStorage",
            data: { key: "score", value: obj.score }
        });
    }
    getUserCloudStorage(keys) {
        this.postMsg({
            command: "getUserCloudStorage",
            data: keys
        });
    }
    getCloudStorageByRelation() {
        this.postMsg({
            command: "getCloudStorageByRelation",
            data: this.group
        });
    }
    subscribeAppMsg(longTime = true) {
        return new Promise((resolve, reject) => {
            if (longTime) {
                this.base.subscribeAppMsg({
                    subscribe: true,
                    success: (res) => {
                        console.log("----subscribeAppMsg----success", res);
                        this.base.requestSubscribeSystemMessage({
                            msgTypeList: ['SYS_MSG_TYPE_INTERACTIVE', 'SYS_MSG_TYPE_RANK'],
                            success(res) {
                                console.log("----requestSubscribeSystemMessage----success", res);
                                resolve(true);
                                // res === {
                                //   errMsg: "requestSubscribeSystemMessage:ok",
                                //   SYS_MSG_TYPE_INTERACTIVE: "accept",
                                //   SYS_MSG_TYPE_RANK: 'reject'
                                // }
                            }
                        });
                    },
                    fail: (res) => {
                        resolve(false);
                        console.log("----subscribeAppMsg----fail", res);
                    }
                });
            }
            else {
                this.base.subscribeAppMsg({
                    tmplIds: ['497925a3da1a6bca31ee9b75e06003e0'],
                    subscribe: true,
                    success: (res) => {
                        console.log("----subscribeAppMsg----success", res);
                        this.base.requestSubscribeSystemMessage({
                            msgTypeList: ['SYS_MSG_TYPE_INTERACTIVE', 'SYS_MSG_TYPE_RANK'],
                            success(res) {
                                console.log("----requestSubscribeSystemMessage----success", res);
                                // res === {
                                //   errMsg: "requestSubscribeSystemMessage:ok",
                                //   SYS_MSG_TYPE_INTERACTIVE: "accept",
                                //   SYS_MSG_TYPE_RANK: 'reject'
                                // }
                                resolve(true);
                            }
                        });
                    },
                    fail: (res) => {
                        resolve(false);
                        console.log("----subscribeAppMsg----fail", res);
                    }
                });
            }
        });
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/Impl/Web/WebRecordManager.ts":
/*!**********************************************************!*\
  !*** ./src/LTGame/Platform/Impl/Web/WebRecordManager.ts ***!
  \**********************************************************/
/*! exports provided: WebRecordManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRecordManager", function() { return WebRecordManager; });
/* harmony import */ var _DefaultRecordManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DefaultRecordManager */ "./src/LTGame/Platform/DefaultRecordManager.ts");

class WebRecordManager extends _DefaultRecordManager__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.supportRecord = true;
    }
    ShareVideo(onSuccess, onCancel, onFailed) {
        if (this.supportRecord) {
            console.log("??????????????????");
            if (onSuccess) {
                onSuccess.run();
            }
        }
        else {
            console.log("??????????????????");
            if (onFailed) {
                onFailed.run();
            }
        }
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/KSPlatform.ts":
/*!*******************************************!*\
  !*** ./src/LTGame/Platform/KSPlatform.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KSPlatform; });
/* harmony import */ var _script_manager_AudioManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../script/manager/AudioManager */ "./src/script/manager/AudioManager.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Async_Awaiters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");
/* harmony import */ var _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _DefaultDevice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DefaultDevice */ "./src/LTGame/Platform/DefaultDevice.ts");
/* harmony import */ var _DefaultPlatform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DefaultPlatform */ "./src/LTGame/Platform/DefaultPlatform.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Impl_KS_KSRecordManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Impl/KS/KSRecordManager */ "./src/LTGame/Platform/Impl/KS/KSRecordManager.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");









class KSPlatform extends _DefaultPlatform__WEBPACK_IMPORTED_MODULE_5__["default"] {
    constructor() {
        super(...arguments);
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_6__["EPlatformType"].KS;
        this.safeArea = null;
        this.device = new _DefaultDevice__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.systemInfo = null;
        /**
         * ??????????????????????????????????????????
         * ????????????????????????fake true,??????????????????
         */
        this.isSupportJumpOther = false;
    }
    Init(platformData) {
        this.loginState = {
            isLogin: false,
            code: null
        };
        this.base = window["kwaigame"];
        if (this.base == null) {
            console.error("?????????????????????", _LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].platformStr);
            return;
        }
        else {
            console.error("???????????????", _LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].platformStr);
        }
        this.platformData = platformData;
        // this._InitLauchOption(); 
        this.readyGo();
        this.base.init({ "appId": platformData.appId });
        this.recordManager = new _Impl_KS_KSRecordManager__WEBPACK_IMPORTED_MODULE_7__["default"](this.base);
        try {
            this.getSystemInfo();
        }
        catch (error) {
            console.error('????????????????????????', JSON.stringify(error));
        }
        // console.log(112);
        // console.log(113);
        // this.createVideo();
    }
    readyGo() {
        this.base.readyGo();
    }
    willClose() {
        this.base.willClose();
    }
    _InitLauchOption() {
        // ??????onShow??????
        // this.base.onShow(this._OnShow);
        // this.base.onHide(this._OnHide);
        // // ??????????????????????????????
        // let res = this.base.getLaunchOptionsSync() as LTGame.LaunchOption;
        // this._OnShow(res);
    }
    _login() {
        this.base.login({
            success: (res) => {
                console.log('?????? ????????????', res);
                if (res.gameToken) {
                    this.loginState = { code: res.gameToken, isLogin: true };
                    this.onLoginEnd.run();
                }
            },
            fail: (err) => {
                console.error('?????? ????????????', err);
                this.loginState = { code: 'null', isLogin: false };
            }
        });
    }
    authorize() {
        this.base.authorize({
            scope: "Scope.userInfo",
            success: () => {
                console.log("??????????????????????????????");
            },
            fail: (error) => {
                console.log("??????????????????????????????: " + JSON.stringify(error));
            },
            complete: () => {
                console.log("??????????????????????????????");
            }
        });
    }
    getSetting() {
        this.base.getSetting({
            success: (result) => {
                console.log("???????????????????????????" + JSON.stringify(result));
            },
            fail: (error) => {
                console.log("????????????????????????: " + JSON.stringify(error));
            },
            complete: () => {
                console.log("????????????????????????");
            }
        });
    }
    getUserInfo() {
        return new Promise((resolve, reject) => {
            this.base.getUserInfo({
                success: (result) => {
                    console.log("???????????????????????????" + JSON.stringify(result));
                    resolve();
                },
                fail: (error) => {
                    console.log("????????????????????????: " + JSON.stringify(error));
                },
                complete: () => {
                    console.log("????????????????????????");
                    resolve();
                }
            });
        });
    }
    /**
     * ??????????????????????????????
     */
    _OnShow(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].platformStr, "OnShow", res);
        _LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].instance.lauchOption = res;
        _LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].instance._CheckUpdate();
        _script_manager_AudioManager__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Resume();
        _Async_Awaiters__WEBPACK_IMPORTED_MODULE_2__["default"].NextFrame().then(() => {
            if (_LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].instance.onResume) {
                _LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].instance.onResume.runWith(res);
            }
            let cacheOnShow = _LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].instance["_cacheOnShowHandle"];
            console.log(cacheOnShow);
            if (cacheOnShow) {
                cacheOnShow.run();
                _LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].instance["_cacheOnShowHandle"] = null;
            }
        });
    }
    SetClipboardData(str) {
        console.log('KS SetClipboardData ????????????');
    }
    /**
    * ??????????????????????????????
    */
    _OnHide(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].platformStr, "OnHide", res);
        _script_manager_AudioManager__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Pause();
        if (_LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].instance.onPause) {
            _LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].instance.onPause.runWith(res);
        }
    }
    getSystemInfo() {
        if (Laya.stage.height / Laya.stage.width > 1.95) {
            this.safeArea = { top: 80, bottom: Laya.stage.height, left: 0, right: Laya.stage.width, height: Laya.stage.height - 80, width: Laya.stage.width };
        }
        else {
            this.safeArea = { top: 0, bottom: Laya.stage.height, left: 0, right: Laya.stage.width, height: Laya.stage.height, width: Laya.stage.width };
        }
        window["kwaigame"].getSystemInfo({
            response: (res) => {
                this.systemInfo = res;
                console.log('systeminfo', JSON.stringify(res));
                console.log(this.safeArea);
            }
            // ,
            // fail: (err) => {
            //     console.error('systeminfo', JSON.stringify(err));
            // }
        });
    }
    IsBannerAvaliable() {
        return;
    }
    IsVideoAvaliable() {
        return this.base.isSupport(this.base.Support.features.RewardVideo);
    }
    IsInterstitalAvaliable() {
        return;
    }
    ShowInterstitalAd() {
        if (!this.platformData.interstitialId)
            return;
        if (!_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.configs.isADEnable)
            return;
        let interad = this.base.createInterstitialAd({
            adUnitId: this.platformData.interstitialId
        });
        if (interad) {
            interad.show().catch(err => console.log(err));
        }
    }
    ShowBannerAd() {
    }
    HideBannerAd() {
    }
    ShowRewardVideoAd(onSuccess, onSkipped) {
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (this._rewardVideo) {
                this._rewardVideo.show({
                    success: () => {
                    },
                    fail: (error) => {
                    }
                });
            }
            else {
                this._rewardVideo = this.base.createRewardedVideoAd({
                    adUnitId: this.platformData.rewardVideoId
                });
                this._rewardVideo.onClose((res) => {
                    console.log("??????????????????: " + JSON.stringify(res));
                    if (this._rewardSkipped)
                        this._rewardSkipped.run();
                });
                this._rewardVideo.onReward((result) => {
                    console.log("????????????????????????: " + JSON.stringify(result));
                    if (this._rewardSuccessed)
                        this._rewardSuccessed.run();
                });
                if (this._rewardVideo) {
                    this._rewardVideo.show({
                        success: () => {
                        },
                        fail: (error) => {
                        }
                    });
                }
                else {
                    console.log("??????????????????????????????");
                }
            }
        }));
    }
    createVideo() {
        this._rewardVideo = this.base.createRewardedVideoAd({
            adUnitId: this.platformData.rewardVideoId
        });
        if (this._rewardVideo) {
            console.log("??????????????????????????????");
            this._rewardVideo.onClose((result) => {
                console.log("????????????????????????: " + JSON.stringify(result));
            });
            this._rewardVideo.onReward((result) => {
                console.log("????????????????????????: " + JSON.stringify(result));
            });
        }
        else {
            console.log("??????????????????????????????");
        }
    }
    GetFromAppId() {
        return null;
    }
    ShareAppMessage(obj, onSuccess = null, onFailed = null) {
        console.log("????????????", obj);
        let params = {
            title: "?????????",
            desc: "????????????",
            iconUrl: "??????icon",
            imageUrl: "????????????",
            extension: {
                name: "test"
            },
            response: (result) => {
                console.log("????????????: " + JSON.stringify(result));
                if (onSuccess) {
                    onSuccess.run();
                }
            }
        };
        this.base.shareToMsg(params);
    }
    LoadSubpackage(name, onSuccess, onFailed, onProgress) {
        var subpackageSupport = this.base.isSupport(this.base.Support.features.Subpackage);
        console.log(`????????????${name}`, subpackageSupport);
        if (!subpackageSupport) {
            //?????????????????????????????????APP?????????????????????????????????main.js ?????????????????????????????????????????????????????????????????????????????????sence2????????????sence2/main.js
            window.require(`${name}/main.js`);
            //??????????????????????????????????????????    
            return;
        }
        let loadTask = this.base.loadSubpackage({
            name: name, success: function (res) {
                //??????????????????????????????????????????	
                if (onSuccess) {
                    onSuccess.run();
                }
            }, fail: function (err) {
                console.log(err);
                onProgress.run();
            }
        });
        loadTask.onProgressUpdate(res => {
            console.log(res);
            if (onProgress) {
                onProgress.runWith(res.progress / 100);
            }
        });
    }
    RecordEvent(eventId, param) {
        console.log("????????????", eventId, param);
    }
    ShareVideoInfo() {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].platformStr, "????????????????????????");
    }
    _CheckUpdate() {
    }
    ShowToast(str) {
        _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].Toast(str);
    }
    OpenGameBox() {
        console.error("????????????", _LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].platformStr, "??????????????????????????????");
    }
    NavigateToApp(appid, path, extra) {
        return new Promise((resolve, reject) => {
            console.error("????????????", _LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].platformStr, `???????????????????????????appid:${appid}`);
            // ????????????resolve
            resolve(false);
        });
    }
    createShortcut() {
        console.log('??????????????????');
        return;
    }
    GetStorage(key) {
        console.log('???????????????');
        return Laya.LocalStorage.getItem(key);
    }
    SetStorage(key, data) {
        console.log('???????????????');
        Laya.LocalStorage.setItem(key, data);
    }
    /**
     * ???????????????  CPServiceAccount : CP???????????? MiniGameOfficialAccount???????????????????????????
     */
    followOfficialAccount() {
        return new Promise((resolve, reject) => {
            this.base.openUserProfile({
                accountType: "CPServiceAccount",
                callback: (res) => {
                    if (res && res.errorCode == 1) {
                        resolve(res.hasFollow);
                    }
                    else {
                        console.error(res.errorMsg);
                        reject(false);
                    }
                }
            });
        });
    }
    /**
     * ???????????????????????????  CPServiceAccount : CP???????????? MiniGameOfficialAccount???????????????????????????
     */
    checkFollowState() {
        return new Promise((resolve, reject) => {
            this.base.checkFollowState({
                accountType: "CPServiceAccount",
                callback: (res) => {
                    if (res && res.errorCode == 1) {
                        resolve(!res.hasFollow);
                    }
                    else {
                        console.error(res.errorMsg);
                        resolve(false);
                    }
                }
            });
        });
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/LTPlatform.ts":
/*!*******************************************!*\
  !*** ./src/LTGame/Platform/LTPlatform.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTPlatform; });
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _LTPlatformFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LTPlatformFactory */ "./src/LTGame/Platform/LTPlatformFactory.ts");


class LTPlatform {
    static get instance() {
        if (this._instance == null) {
            console.error("?????????????????????,????????????CreateInstance???????????????");
        }
        return this._instance;
    }
    static CreateInstance(appId = null) {
        if (this._instance != null) {
            console.error("???????????????????????????", LTPlatform.GetPlatformStr(this._instance.platform), "??????????????????");
            return this._instance;
        }
        this._instance = _LTPlatformFactory__WEBPACK_IMPORTED_MODULE_1__["default"].CreateInstance();
        this._instance.appId = appId;
        console.log("????????????????????????", LTPlatform.GetPlatformStr(this._instance.platform));
        window['LTPlatform'] = this._instance;
        return this._instance;
    }
    static get platformStr() {
        return LTPlatform.GetPlatformStr(this._instance.platform);
    }
    static GetPlatformStr(platformEnum) {
        switch (platformEnum) {
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].BD:
                return "??????";
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].None:
                return "?????????";
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].Oppo:
                return "Oppo";
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].QQ:
                return "QQ";
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].TT:
                return "??????";
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].Vivo:
                return "Vivo";
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].Web:
                return "??????";
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].WX:
                return "??????";
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].QTT:
                return "?????????";
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].KS:
                return "??????";
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].HW:
                return "??????";
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].Native_Android_233:
                return "233??????";
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].Native_Android_MMY:
                return "?????????";
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].Native_Android:
                return "????????????";
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].Native_IOS:
                return "IOS??????";
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].Gamebox4399:
                return "4399????????????";
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].HTML4399:
                return "4399_H5?????????";
            default:
                return "?????????" + platformEnum;
        }
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/LTPlatformFactory.ts":
/*!**************************************************!*\
  !*** ./src/LTGame/Platform/LTPlatformFactory.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTPlatformFactory; });
/* harmony import */ var _TTPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TTPlatform */ "./src/LTGame/Platform/TTPlatform.ts");
/* harmony import */ var _WXPlatform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WXPlatform */ "./src/LTGame/Platform/WXPlatform.ts");
/* harmony import */ var _BDPlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BDPlatform */ "./src/LTGame/Platform/BDPlatform.ts");
/* harmony import */ var _QTTPlatform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QTTPlatform */ "./src/LTGame/Platform/QTTPlatform.ts");
/* harmony import */ var _QQPlatform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QQPlatform */ "./src/LTGame/Platform/QQPlatform.ts");
/* harmony import */ var _DefaultPlatform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DefaultPlatform */ "./src/LTGame/Platform/DefaultPlatform.ts");
/* harmony import */ var _OppoPlatform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OppoPlatform */ "./src/LTGame/Platform/OppoPlatform.ts");
/* harmony import */ var _Impl_Native_IOS_NativeIOSPlatform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Impl/Native_IOS/NativeIOSPlatform */ "./src/LTGame/Platform/Impl/Native_IOS/NativeIOSPlatform.ts");
/* harmony import */ var _VivoPlatform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VivoPlatform */ "./src/LTGame/Platform/VivoPlatform.ts");
/* harmony import */ var _KSPlatform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./KSPlatform */ "./src/LTGame/Platform/KSPlatform.ts");
/* harmony import */ var _Impl_Native_Android_NativeAndroidPlatform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Impl/Native_Android/NativeAndroidPlatform */ "./src/LTGame/Platform/Impl/Native_Android/NativeAndroidPlatform.ts");
/* harmony import */ var _HWPlatform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HWPlatform */ "./src/LTGame/Platform/HWPlatform.ts");
/* harmony import */ var _Impl_Native_Android_NativeAndroid233Platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Impl/Native_Android/NativeAndroid233Platform */ "./src/LTGame/Platform/Impl/Native_Android/NativeAndroid233Platform.ts");
/* harmony import */ var _Impl_4399_Gamebox4399Platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Impl/4399/Gamebox4399Platform */ "./src/LTGame/Platform/Impl/4399/Gamebox4399Platform.ts");
/* harmony import */ var _Impl_4399_HTML4399Platform__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Impl/4399/HTML4399Platform */ "./src/LTGame/Platform/Impl/4399/HTML4399Platform.ts");
/* harmony import */ var _Impl_Native_Android_NativeAndroidMMYPlatform__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Impl/Native_Android/NativeAndroidMMYPlatform */ "./src/LTGame/Platform/Impl/Native_Android/NativeAndroidMMYPlatform.ts");
















class LTPlatformFactory {
    static CreateInstance() {
        let isQTT = window["qttGame"] != null;
        let result;
        if (Laya.Browser.onTTMiniGame) {
            result = new _TTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"]();
        }
        else if (Laya.Browser.onHWMiniGame) {
            result = new _HWPlatform__WEBPACK_IMPORTED_MODULE_11__["default"]();
        }
        else if (Laya.Browser.window.h5api) {
            result = new _Impl_4399_HTML4399Platform__WEBPACK_IMPORTED_MODULE_14__["default"]();
        }
        else if (window['gamebox']) {
            result = new _Impl_4399_Gamebox4399Platform__WEBPACK_IMPORTED_MODULE_13__["default"]();
        }
        else if (Laya.Browser.onMiniGame) {
            if (window['ks']) {
                result = new _KSPlatform__WEBPACK_IMPORTED_MODULE_9__["default"]();
            }
            else {
                result = new _WXPlatform__WEBPACK_IMPORTED_MODULE_1__["default"]();
            }
        }
        else if (Laya.Browser.onBDMiniGame) {
            result = new _BDPlatform__WEBPACK_IMPORTED_MODULE_2__["default"]();
        }
        else if (isQTT) {
            result = new _QTTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"]();
        }
        else if (Laya.Browser.onQQMiniGame) {
            result = new _QQPlatform__WEBPACK_IMPORTED_MODULE_4__["default"]();
        }
        else if (Laya.Browser.onQGMiniGame) {
            result = new _OppoPlatform__WEBPACK_IMPORTED_MODULE_6__["default"]();
        }
        else if (Laya.Browser.onVVMiniGame) {
            result = new _VivoPlatform__WEBPACK_IMPORTED_MODULE_8__["default"]();
        }
        else if (window['conch']) {
            let conchConfig = window['conchConfig'];
            let os = conchConfig.getOS();
            if (os == 'Conch-ios') {
                result = new _Impl_Native_IOS_NativeIOSPlatform__WEBPACK_IMPORTED_MODULE_7__["NativeIOSPlatform"]();
            }
            else if (os == 'Conch-android') {
                if (window["GAME233"]) {
                    result = new _Impl_Native_Android_NativeAndroid233Platform__WEBPACK_IMPORTED_MODULE_12__["NativeAndroid233Platform"]();
                }
                else if (window["momoyu"]) {
                    result = new _Impl_Native_Android_NativeAndroidMMYPlatform__WEBPACK_IMPORTED_MODULE_15__["NativeAndroidMMYPlatform"]();
                }
                else {
                    result = new _Impl_Native_Android_NativeAndroidPlatform__WEBPACK_IMPORTED_MODULE_10__["NativeAndroidPlatform"]();
                }
            }
            else {
                result = new _DefaultPlatform__WEBPACK_IMPORTED_MODULE_5__["default"]();
                console.error("???????????????app??????");
            }
        }
        else {
            console.log("???????????????,???????????????web", Laya.Browser.userAgent);
            result = new _DefaultPlatform__WEBPACK_IMPORTED_MODULE_5__["default"]();
        }
        return result;
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/OppoPlatform.ts":
/*!*********************************************!*\
  !*** ./src/LTGame/Platform/OppoPlatform.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OppoPlatform; });
/* harmony import */ var _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../SDK/common/ECheckState */ "./src/SDK/common/ECheckState.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Async_Awaiters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _UIExt_DefaultUI_UI_ImageBannerMediator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UIExt/DefaultUI/UI_ImageBannerMediator */ "./src/LTGame/UIExt/DefaultUI/UI_ImageBannerMediator.ts");
/* harmony import */ var _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _DefaultDevice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DefaultDevice */ "./src/LTGame/Platform/DefaultDevice.ts");
/* harmony import */ var _DefaultPlatform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DefaultPlatform */ "./src/LTGame/Platform/DefaultPlatform.ts");
/* harmony import */ var _DefaultRecordManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DefaultRecordManager */ "./src/LTGame/Platform/DefaultRecordManager.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");












class OppoPlatform extends _DefaultPlatform__WEBPACK_IMPORTED_MODULE_8__["default"] {
    constructor() {
        super(...arguments);
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_10__["EPlatformType"].Oppo;
        this.safeArea = null;
        this.recordManager = new _DefaultRecordManager__WEBPACK_IMPORTED_MODULE_9__["default"]();
        this.device = new _DefaultDevice__WEBPACK_IMPORTED_MODULE_7__["OppoDevice"]();
        /**
         * ??????????????????????????????????????????
         */
        this.isSupportJumpOther = true;
        this._isBannerLoaded = false;
        this._isVideoLoaded = false;
        this._isInterstitialLoaded = false;
        this._isInterstitialCanShow = true;
        this._nativeAdLoaded = false;
        this._cacheVideoAD = false;
        this.noAdTime = 0;
        this.canshowBox = false;
    }
    Init(platformData) {
        return __awaiter(this, void 0, void 0, function* () {
            this._base = window["qg"];
            if (this._base == null) {
                console.error("?????????????????????", _LTPlatform__WEBPACK_IMPORTED_MODULE_11__["default"].platformStr);
                return;
            }
            this.platformData = platformData;
            this._InitLauchOption();
            this._Login();
            // this._InitSystemInfo();
            yield this.getSystemInfo();
            if (this.systemInfo.platformVersion >= 1051) {
                // ??????????????????initAdService
            }
            else {
                this._base.initAdService({
                    appId: platformData.appId,
                    isDebug: true,
                    success: () => {
                        console.log("oppo??????", "???????????????????????????", platformData);
                        // ????????????????????????
                        // this._CreateBannerAd();
                        this._CreateVideoAd();
                        // this._CreateInterstitalAd();
                        // this.intersitialAd = new NativeADUnit(platformData.interstitialId);
                        // this.iconNative = new NativeADUnit(platformData.nativeId);
                        // this.nativeAd = new NativeADUnit(platformData.nativeId);
                    },
                    fail: () => {
                        console.error("oppo??????", "???????????????????????????");
                    }
                });
            }
            window["iplatform"] = this;
        });
    }
    _InitSystemInfo() {
        this.base = this._base;
        try {
            this.systemInfo = this._base.getSystemInfoSync();
            console.log("?????????????????????", this.systemInfo);
            this.safeArea = this.systemInfo.safeArea;
            this._cacheScreenScale = this.systemInfo.screenWidth / Laya.stage.width;
        }
        catch (e) {
            console.error(e);
            console.error("????????????????????????,?????????????????????");
            this.safeArea = null;
        }
    }
    getSystemInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            this.base = this._base;
            this._base.getSystemInfo({
                success: (res) => {
                    this.systemInfo = res;
                    console.log('systeminfo', this.systemInfo);
                    if (!this.safeArea) {
                        this.safeArea = { top: res['notchHeight'], bottom: res['screenHeight'], left: 0, right: res['screenWidth'], height: res['screenHeight'] - res['notchHeight'], width: res['screenWidth'] };
                    }
                    this._cacheScreenScale = this.systemInfo.screenWidth / Laya.stage.width;
                    console.log(this.safeArea);
                },
                fail: () => { },
                complete: () => {
                    this.createGameBox();
                }
            });
        });
    }
    /**
     * ????????????
     */
    reportMonitor() {
        console.log('oppo????????????', this.systemInfo);
        if (this.systemInfo && this.systemInfo.platformVersion >= 1060) {
            this._base.reportMonitor('game_scene', 0);
        }
        if (this.onLoginEnd != null) {
            this.onLoginEnd.run();
        }
        Laya.timer.loop(1000, this, this.bannerTimer);
    }
    _CheckUpdate() {
    }
    _Login() {
        this.loginState = {
            isLogin: false,
            code: ""
        };
        let loginData = {};
        loginData.success = (res) => {
            this._OnLoginSuccess(res);
        };
        loginData.fail = (res) => {
            console.error(_LTPlatform__WEBPACK_IMPORTED_MODULE_11__["default"].platformStr, "????????????", res);
            this.loginState.isLogin = false;
            this.loginState.code = "";
        };
        loginData.complete = (res) => {
            if (this.onLoginEnd != null) {
                this.onLoginEnd.run();
            }
        };
        // this._base.login(loginData);
    }
    _OnLoginSuccess(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_11__["default"].platformStr, "????????????", res);
        this.loginState.isLogin = true;
        this.loginState.code = res.token;
    }
    ShareAppMessage(obj, onSuccess, onFailed) {
    }
    _InitLauchOption() {
        // ??????onShow??????
        this._base.onShow(this._OnShow);
        this._base.onHide(this._OnHide);
        // ??????????????????????????????
        let res = this._base.getLaunchOptionsSync();
        this._OnShow(res);
    }
    /**
     * ??????????????????????????????
     */
    canCreateShortcut() {
        return new Promise((resolve, reject) => {
            qg['hasShortcutInstalled']({
                success: function (res) {
                    // ????????????????????????  
                    resolve(res);
                },
                fail: function (err) {
                    reject();
                },
                complete: function () {
                }
            });
        });
    }
    /** ?????????????????????????????? */
    createShortcut() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let sht = yield this.hasShortcutInstalled();
            if (sht == false) {
                let created = false;
                qg['installShortcut']({
                    success: function () {
                        created = (true);
                    },
                    fail: function (err) {
                        created = (false);
                    },
                    complete: function () {
                        resolve(created);
                    }
                });
            }
            else {
                resolve(false);
            }
        }));
    }
    hasShortcutInstalled() {
        return new Promise((resolve, reject) => {
            qg['hasShortcutInstalled']({
                success: (res) => {
                    // ???????????????????????????????????????
                    if (res == false) {
                        resolve(false);
                    }
                    else {
                        resolve(true);
                    }
                },
                fail: (err) => {
                    reject();
                },
                complete: () => { }
            });
        });
    }
    _CreateInterstitalAd() {
        // if (StringEx.IsNullOrEmpty(this._platformData.interstitialId)) {
        //     console.log("????????????????????????ID,????????????");
        //     return;
        // }
        // this._interstitalFailedCount = 0;
        // let intAdObj = {};
        // intAdObj["adUnitId"] = this._platformData.interstitialId;
        // this._intersitialAd = this._base.createInsertAd(intAdObj);
        // this._intersitialAd.onLoad(() => {
        //     console.log("????????????????????????");
        //     this._isInterstitialLoaded = true;
        // });
        // this._intersitialAd.onClose(() => {
        //     console.log("??????????????????");
        //     this._isInterstitialLoaded = false;
        //     this._intersitialAd.load();
        // });
        // this._intersitialAd.onError((err) => {
        //     this._interstitalFailedCount++;
        //     console.error("????????????????????????", err);
        //     if (this._interstitalFailedCount > 10) {
        //         console.log("???", this._interstitalFailedCount, "???????????????????????????");
        //         // ????????????????????????
        //         this._intersitialAd.load();
        //     }
        // });
    }
    _CreateVideoAd() {
        if (!this._cacheVideoAD) {
            console.log("????????????????????????????????????");
            return;
        }
        let createRewardedVideoAd = this._base["createRewardedVideoAd"];
        if (createRewardedVideoAd == null) {
            console.error("???createRewardedVideoAd??????,???????????????");
            return;
        }
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_4__["default"].IsNullOrEmpty(this.platformData.rewardVideoId)) {
            console.log("????????????????????????ID,????????????");
            return;
        }
        this._videoFailedCount = 0;
        let videoObj = {};
        videoObj["adUnitId"] = this.platformData.rewardVideoId;
        this._rewardVideo = createRewardedVideoAd(videoObj);
        this._rewardVideo.onLoad(() => {
            console.log("????????????????????????");
            this._isVideoLoaded = true;
        });
        this._rewardVideo.onError((res) => {
            this._videoFailedCount++;
            console.error("????????????????????????", res);
            if (this._videoFailedCount > 10) {
                console.log("???", this._videoFailedCount, "???????????????????????????");
                // ????????????????????????
                this._rewardVideo.load();
            }
        });
        this._rewardVideo.onClose((res) => {
            Laya.stage.event(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_3__["CommonEventId"].RESUM_AUDIO);
            console.log("????????????", res);
            let isEnd = res["isEnded"];
            // ????????????bug
            _Async_Awaiters__WEBPACK_IMPORTED_MODULE_2__["default"].NextFrame().then(() => {
                if (isEnd) {
                    if (this._rewardSuccessed)
                        this._rewardSuccessed.run();
                }
                else {
                    if (this._rewardSkipped)
                        this._rewardSkipped.run();
                }
            });
        });
    }
    IsBannerAvaliable() {
        return this.noAdTime <= 0;
    }
    IsVideoAvaliable() {
        return this._isVideoLoaded;
    }
    IsInterstitalAvaliable() {
        return false; // LTSDK.instance.isADEnable && this._isInterstitialCanShow && CommonSaveData.instance.interstitialCount < 888;
    }
    IsNativeAvaliable() {
        return this.noAdTime <= 0;
    }
    bannerTimer() {
        this.noAdTime--;
    }
    ShowBannerAd() {
        return __awaiter(this, void 0, void 0, function* () {
            // ?????????????????????banner
            if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.checkState == _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_0__["ECheckState"].InCheck) {
                console.log('banner ?????????');
                return;
            }
            if (!this.IsBannerAvaliable()) {
                console.log("banner ???????????????", this.noAdTime);
                return;
            }
            if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_4__["default"].IsNullOrEmpty(this.platformData.bannerId)) {
                console.log("????????????banner??????ID,????????????");
                return;
            }
            if (this._bannerAd) {
                this._bannerAd.show();
                this.noAdTime = 5;
                console.log('????????????banner');
                return;
            }
            this.HideBannerAd();
            this._bannerAd = this._base.createBannerAd({
                adUnitId: this.platformData.bannerId
            });
            let isBannerLoading = true;
            let loadSuccess = false;
            this._bannerAd.show().then((res) => {
                console.log("banner????????????", res);
                if (res['code'] == 0) {
                    loadSuccess = true;
                }
                isBannerLoading = false;
            }).catch((res) => {
                console.error("banner????????????", res);
                isBannerLoading = false;
            });
            while (isBannerLoading) {
                yield _Async_Awaiters__WEBPACK_IMPORTED_MODULE_2__["default"].NextFrame();
            }
            if (loadSuccess)
                return;
            console.log("banner????????????,??????native??????");
            // ????????????
            if (this._bannerAd) {
                this._bannerAd.destroy();
                this._bannerAd = null;
            }
            // ?????????????????????
            for (let i = 0; i < this.platformData.nativeIconIds.length; ++i) {
                let ret = yield this._ShowNativeBanner(i);
                if (ret) {
                    break;
                }
                this._bannerAd.destroy();
            }
        });
    }
    _ShowNativeBanner(index) {
        return __awaiter(this, void 0, void 0, function* () {
            let nativeBanner = this.base.createNativeAd({
                adUnitId: this.platformData.nativeBannerIds[index]
            });
            // ????????????
            this._bannerAd = nativeBanner;
            let loadRet = yield nativeBanner.load();
            if (loadRet["code"] == 0) {
                // ????????????
                let adList = loadRet['adList'];
                if (adList == null || adList.length == 0) {
                    console.error("native banner????????????", loadRet);
                    return false;
                }
                let adData = adList[0];
                if (adData == null) {
                    console.error("native banner????????????", loadRet);
                    return false;
                }
                let fakeData = new _UIExt_DefaultUI_UI_ImageBannerMediator__WEBPACK_IMPORTED_MODULE_5__["FakeBannerData"]();
                fakeData.imgPath = adData.imgUrlList[0];
                fakeData.noticePath = adData.logoUrl;
                fakeData.adId = adData.adId;
                fakeData.owner = this._bannerAd;
                fakeData.iconPath = adData.icon;
                _UIExt_DefaultUI_UI_ImageBannerMediator__WEBPACK_IMPORTED_MODULE_5__["default"].instance.Show(fakeData);
                return true;
            }
            else {
                console.error("native banner????????????", loadRet);
                return false;
            }
        });
    }
    HideBannerAd() {
        if (this._bannerAd) {
            this._bannerAd.destroy();
            this._bannerAd = null;
        }
        _UIExt_DefaultUI_UI_ImageBannerMediator__WEBPACK_IMPORTED_MODULE_5__["default"].instance.Hide();
    }
    ShowNativeAd() {
        return __awaiter(this, void 0, void 0, function* () {
            this.noAdTime = 5;
            // await this._ShowNative();
        });
    }
    HideNativeAd() {
        if (!this.IsNativeAvaliable()) {
            return;
        }
        // this._HideNative();
    }
    // isNativeInterstitialAvaliable(){
    //     return this.intersitialAd.canShowAD
    // }
    _DoCacheShowVideo(onSuccess, onSkipped) {
        if (!this._isVideoLoaded) {
            console.error("???????????????????????????");
            return;
        }
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        this._isVideoLoaded = false;
        Laya.stage.event(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_3__["CommonEventId"].PAUSE_AUDIO);
        this._rewardVideo.show();
    }
    _DoNoCacheShowVideo(onSuccess, onSkipped) {
        var _a, _b;
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_4__["default"].IsNullOrEmpty(this.platformData.rewardVideoId)) {
            console.log("????????????????????????ID,????????????");
            (_a = this._rewardSkipped) === null || _a === void 0 ? void 0 : _a.run();
            return;
        }
        let createRewardedVideoAd = this._base["createRewardedVideoAd"];
        if (createRewardedVideoAd == null) {
            console.error("???createRewardedVideoAd??????,???????????????");
            (_b = this._rewardSkipped) === null || _b === void 0 ? void 0 : _b.run();
            return;
        }
        if (this._rewardVideo) {
            this._rewardVideo.destroy();
        }
        _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_6__["default"].ShowLoading("???????????????...");
        let videoObj = {};
        videoObj["adUnitId"] = this.platformData.rewardVideoId; // "adunit-5631637236cf16b6";
        this._rewardVideo = createRewardedVideoAd(videoObj);
        console.log("??????????????????", videoObj);
        this._rewardVideo.onClose((res) => {
            Laya.stage.event(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_3__["CommonEventId"].RESUM_AUDIO);
            console.log("????????????", res);
            let isEnd = res["isEnded"];
            _Async_Awaiters__WEBPACK_IMPORTED_MODULE_2__["default"].NextFrame().then(() => {
                if (isEnd) {
                    if (this._rewardSuccessed)
                        this._rewardSuccessed.run();
                }
                else {
                    if (this._rewardSkipped)
                        this._rewardSkipped.run();
                }
            });
        });
        this._rewardVideo.onError((err) => {
            console.log("????????????????????????", err);
            _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_6__["default"].HideLoading();
            _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_6__["default"].Toast("????????????");
            if (this._rewardSkipped)
                this._rewardSkipped.run();
        });
        this._rewardVideo.onLoad((res) => {
            console.log("??????????????????", res);
            _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_6__["default"].HideLoading();
        });
        this._rewardVideo.load().then(() => {
            this._rewardVideo.show();
        });
    }
    ShowRewardVideoAd(onSuccess, onSkipped) {
        if (this._cacheVideoAD) {
            this._DoCacheShowVideo(onSuccess, onSkipped);
        }
        else {
            this._DoNoCacheShowVideo(onSuccess, onSkipped);
        }
    }
    _ShowNativeInterstital(index) {
        return __awaiter(this, void 0, void 0, function* () {
            return;
            // let nativeAd = this._base.createNativeAd({
            //     adUnitId: this.platformData.nativeinterstitialIds[index]
            // });
            // // ????????????
            // this._intersitialAd = nativeAd;
            // let loadRet = await nativeAd.load();
            // if (loadRet["code"] == 0) {
            //     // ????????????
            //     let adList = loadRet['adList'] as any[];
            //     if (adList == null || adList.length == 0) {
            //         console.error("native ?????? ????????????", loadRet);
            //         return false;
            //     }
            //     let adData = adList[0] as {
            //         adId: string,
            //         imgUrlList: string[],
            //         logoUrl: string,
            //         icon: string,
            //         title: string,
            //         desc: string
            //     };
            //     console.log('????????????????????????', loadRet);
            //     if (adData == null) {
            //         console.error("native ?????? ????????????", loadRet);
            //         return false;
            //     }
            //     let fakeData = new FakeInterstitalData();
            //     fakeData.imgPath = adData.imgUrlList[0];
            //     fakeData.noticePath = adData.logoUrl;
            //     fakeData.adId = adData.adId;
            //     fakeData.desc = adData.desc;
            //     fakeData.iconPath = adData.icon;
            //     fakeData.title = adData.title;
            //     fakeData.owner = nativeAd;
            //     UI_NativeInterstitialMediator.instance.Show(fakeData);
            //     return true;
            // } else {
            //     console.error("native ?????? ????????????", loadRet);
            //     return false;
            // }
        });
    }
    _ShowNormalInterstitalAd() {
        return __awaiter(this, void 0, void 0, function* () {
            return;
            // if (this._intersitialAd) {
            //     this._intersitialAd.destroy();
            // }
            // if (this.systemInfo.platformVersion < 1061) {
            //     console.log("?????????????????????1061,????????????????????????", this.systemInfo.platformVersion);
            //     return false;
            // }
            // console.log("??????????????????", this.platformData.interstitialId);
            // this._intersitialAd = this._base.createInterstitialAd(
            //     {
            //         adUnitId: this.platformData.interstitialId
            //     }
            // );
            // let isloading = true;
            // let isSuccess = false;
            // this._intersitialAd.load()
            //     .then((res) => {
            //         console.log("????????????????????????", res);
            //         isloading = false;
            //         isSuccess = res['code'] == 0;
            //     })
            //     .catch((res) => {
            //         console.error("????????????????????????", res);
            //         isloading = false;
            //         isSuccess = false;
            //     });
            // while (isloading) {
            //     await Awaiters.Frames(1);
            // }
            // if (!isSuccess) {
            //     return false;
            // }
            // isloading = true;
            // this._intersitialAd.show()
            //     .then((res) => {
            //         console.log("????????????????????????", res);
            //         isloading = false;
            //         isSuccess = res['code'] == 0;
            //     })
            //     .catch((res) => {
            //         console.error("????????????????????????", res);
            //         isloading = false;
            //         isSuccess = false;
            //     });
            // while (isloading) {
            //     await Awaiters.Frames(1);
            // }
            // return isSuccess;
        });
    }
    ShowInterstitalAd() {
        return __awaiter(this, void 0, void 0, function* () {
            return;
            // if (!this.IsInterstitalAvaliable()) {
            //     console.error(`???????????????????????? ????????????${this._isInterstitialCanShow} ????????????${CommonSaveData.instance.interstitialCount}`);
            //     return;
            // }
            // if (this._intersitialAd) {
            //     this._intersitialAd.destroy();
            //     UI_NativeInterstitialMediator.instance.Hide();
            // }
            // // ?????????????????????(??????)
            // if (this.platformData.nativeinterstitialIds.length > 0) {
            //     let ret = await this._ShowNativeInterstital(0);
            //     if (ret) {
            //         this._DisableInterstitalAd();
            //         return;
            //     }
            // }
            // // ???????????????????????????
            // let ret = await this._ShowNormalInterstitalAd();
            // if (ret) {
            //     CommonSaveData.instance.interstitialCount++;
            //     CommonSaveData.SaveToDisk();
            //     this._DisableInterstitalAd();
            //     return;
            // }
            // // ???????????????????????????????????????
            // for (let i = 1; i < this.platformData.nativeinterstitialIds.length; ++i) {
            //     let ret = await this._ShowNativeInterstital(i);
            //     if (ret) {
            //         this._DisableInterstitalAd();
            //         return;
            //     }
            // }
        });
    }
    _DisableInterstitalAd() {
        return __awaiter(this, void 0, void 0, function* () {
            this._isInterstitialCanShow = false;
            yield _Async_Awaiters__WEBPACK_IMPORTED_MODULE_2__["default"].Seconds(60);
            this._isInterstitialCanShow = true;
        });
    }
    GetFromAppId() {
        if (this.lauchOption.referrerInfo == null) {
            return null;
        }
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_4__["default"].IsNullOrEmpty(this.lauchOption.referrerInfo.appId)) {
            return null;
        }
        return this.lauchOption.referrerInfo.appId;
    }
    /** ?????????????????????????????? */
    CreatShortcut() {
        return new Promise((resolve, reject) => {
            qg['hasShortcutInstalled']({
                success: function (res) {
                    // ???????????????????????????????????????
                    if (res == false) {
                        qg['installShortcut']({
                            success: function () {
                                resolve();
                            },
                            fail: function (err) {
                                reject();
                            },
                            complete: function () { }
                        });
                    }
                    else {
                        resolve();
                    }
                },
                fail: function (err) {
                    reject();
                },
                complete: function () { }
            });
        });
    }
    /**
     * ??????????????????????????????
     */
    _OnShow(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_11__["default"].platformStr, "OnShow", res);
        _LTPlatform__WEBPACK_IMPORTED_MODULE_11__["default"].instance.lauchOption = res;
        _LTPlatform__WEBPACK_IMPORTED_MODULE_11__["default"].instance._CheckUpdate();
        _Async_Awaiters__WEBPACK_IMPORTED_MODULE_2__["default"].NextFrame().then(() => {
            if (_LTPlatform__WEBPACK_IMPORTED_MODULE_11__["default"].instance.onResume) {
                _LTPlatform__WEBPACK_IMPORTED_MODULE_11__["default"].instance.onResume.runWith(res);
            }
            let cacheOnShow = _LTPlatform__WEBPACK_IMPORTED_MODULE_11__["default"].instance["_cacheOnShowHandle"];
            if (cacheOnShow) {
                cacheOnShow.run();
                _LTPlatform__WEBPACK_IMPORTED_MODULE_11__["default"].instance["_cacheOnShowHandle"] = null;
            }
        });
    }
    /**
     * ??????????????????????????????
     */
    _OnHide(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_11__["default"].platformStr, "OnHide", res);
        if (_LTPlatform__WEBPACK_IMPORTED_MODULE_11__["default"].instance.onPause) {
            _LTPlatform__WEBPACK_IMPORTED_MODULE_11__["default"].instance.onPause.runWith(res);
        }
    }
    LoadSubpackage(name, onSuccess, onFailed, onProgress) {
        let loadObj = {};
        loadObj["name"] = name;
        loadObj["success"] = () => {
            console.log("??????????????????", name);
            if (onSuccess) {
                onSuccess.run();
            }
        };
        loadObj["fail"] = () => {
            console.error("??????????????????", name);
            if (onFailed) {
                onFailed.run();
            }
        };
        let loadTask = this._base.loadSubpackage(loadObj);
        loadTask.onProgressUpdate((res) => {
            console.log("??????????????????", res);
            if (onProgress) {
                onProgress.runWith(res.progress / 100);
            }
        });
    }
    RecordEvent(eventId, param) {
        console.log("[????????????]", eventId, param);
    }
    /**
     * ????????????????????????
     * @param x
     * @param y
     * @param width
     * @param height
     */
    CreateShareVideoBtn(x, y, width, height) {
    }
    /**
     * ????????????????????????
     */
    HideShareVideoBtn() {
        if (this._shareVideoBtn != null) {
            this._shareVideoBtn.hide();
        }
    }
    ShowToast(str) {
        this._base.showToast({
            title: str,
            duration: 2000
        });
    }
    /**
     * @param appId oppo vivo?????????
     */
    NavigateToApp(appId, path, extra) {
        return new Promise((resolve, reject) => {
            Laya.Browser.window.qg.navigateToMiniGame({
                pkgName: appId,
                path: path,
                extraData: extra,
                success: function () {
                    resolve(true);
                    console.log('oppo?????????????????????');
                },
                fail: function (res) {
                    reject(false);
                    console.log('oppo????????????????????????', JSON.stringify(res));
                }
            });
        });
    }
    createGameBox() {
        if (!this.platformData.gameBoxAdId) {
            return console.error("????????????????????????ID");
        }
        if (_LTPlatform__WEBPACK_IMPORTED_MODULE_11__["default"].instance.systemInfo.platformVersionCode >= 1076) {
            this.oppoBoxAd = _LTPlatform__WEBPACK_IMPORTED_MODULE_11__["default"].instance.base.createGamePortalAd({
                adUnitId: this.platformData.gameBoxAdId
            });
            this.oppoBoxAd.onLoad(() => {
                console.log('????????????????????????');
                this.canshowBox = true;
            });
            this.oppoBoxAd.onError((err) => {
                console.log(err);
                this.canshowBox = false;
            });
            this.oppoBoxAd.onClose(() => {
                this.canshowBox = false;
                this.oppoBoxAd.load();
                console.log('?????????????????????????????????');
            });
            this.oppoBoxAd.load();
        }
        else {
            console.log('??????????????????????????????1076????????????????????????????????? API');
        }
    }
    OpenGameBox(appIds) {
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.checkState == _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_0__["ECheckState"].InCheck) {
            return;
        }
        if (!this.oppoBoxAd) {
            this.createGameBox();
        }
        if (this.oppoBoxAd) {
            if (this.canshowBox) {
                this.oppoBoxAd.show();
            }
            else {
                this.oppoBoxAd.load().then(() => {
                    this.oppoBoxAd.show();
                }).catch(e => {
                    console.log(e);
                });
            }
        }
        // else {
        //     this.oppoBoxAd.destroy();
        //     this.createGameBox();
        // }
    }
    createGameBannerAd() {
        if (_LTPlatform__WEBPACK_IMPORTED_MODULE_11__["default"].instance.systemInfo.platformVersionCode >= 1076) {
            this.oppoBoxBannerAd = _LTPlatform__WEBPACK_IMPORTED_MODULE_11__["default"].instance.base.createGameBannerAd({
                adUnitId: this.platformData.gameBoxBannerId
            });
            this.oppoBoxBannerAd.onLoad(() => {
                console.log('????????????????????????');
            });
        }
        else {
            console.log('??????????????????????????????1076????????????????????????????????? API');
        }
    }
    showGameBoxBannerAd() {
        this.HideBannerAd();
        if (this.oppoBoxBannerAd) {
            this.oppoBoxBannerAd.show();
        }
        else {
            this.createGameBannerAd();
            this.oppoBoxBannerAd.show();
        }
    }
    hideGameBoxBannerAd() {
        if (this.oppoBoxBannerAd) {
            this.oppoBoxBannerAd.hide();
        }
    }
    getNativeAd(adid) {
        return new Promise((resolve, reject) => {
            let nativeAd = this.base.createNativeAd({
                adUnitId: adid
            });
            nativeAd.offLoad();
            nativeAd.offError();
            nativeAd.onLoad((res) => {
                console.log('???????????????????????? ??????', (res));
                if (res && res.adList) {
                    let data = res.adList[0];
                    data.show_reported = false;
                    data.click_reported = false;
                    resolve({
                        ad: nativeAd,
                        data: data
                    });
                }
            });
            nativeAd.onError((err) => {
                console.log("????????????????????????", err);
                resolve(null);
            });
            nativeAd.load();
        });
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/QQPlatform.ts":
/*!*******************************************!*\
  !*** ./src/LTGame/Platform/QQPlatform.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QQPlatform; });
/* harmony import */ var _WXPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WXPlatform */ "./src/LTGame/Platform/WXPlatform.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");
/* harmony import */ var _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Commom/CommonSaveData */ "./src/LTGame/Commom/CommonSaveData.ts");
/* harmony import */ var _Async_Awaiters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");








class QQPlatform extends _WXPlatform__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].QQ;
        this.isBannerShowing = false;
    }
    Init(platformData) {
        this.base = this.base = window["qq"];
        if (this.base == null) {
            console.error("?????????????????????", _LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].platformStr);
            return;
        }
        this.platformData = platformData;
        this._InitLauchOption();
        this._Login();
        this._InitShareInfo();
        this._InitSystemInfo();
        this._CreateBannerAd();
        this._CreateVideoAd();
        this._CreateInterstitalAd();
        window["iplatform"] = this;
        console.error("?????????????????????", _LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].platformStr);
    }
    _Login() {
        this.loginState = {
            isLogin: false,
            code: ""
        };
        let loginData = {};
        loginData.success = (res) => {
            this.loginCode = res.code;
            this._OnLoginSuccess(res);
            console.error(this.loginState);
            this.getUserInfo();
        };
        loginData.fail = (res) => {
            console.error(_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].platformStr, "????????????", res);
            this.loginState.isLogin = false;
            this.loginState.code = "";
        };
        loginData.complete = () => {
            if (this.onLoginEnd != null) {
                this.onLoginEnd.run();
            }
        };
        this.base.login(loginData);
    }
    _InitSystemInfo() {
        try {
            let systemInfo = this.base.getSystemInfoSync();
            this._cacheScreenScale = systemInfo.screenWidth / Laya.stage.width;
            this.safeArea = {};
            this.safeArea.width = systemInfo.windowWidth;
            this.safeArea.height = systemInfo.windowHeight;
            this.safeArea.top = systemInfo.statusBarHeight;
            this.safeArea.bottom = 0;
            console.log("QQ??????_InitSystemInfo", this.safeArea);
        }
        catch (e) {
            console.error(e);
            console.error("????????????????????????,?????????????????????");
            this.safeArea = null;
        }
    }
    _InitLauchOption() {
        // ??????onShow??????
        this.base.onShow(this._OnShow);
        this.base.onHide(this._OnHide);
        // ??????????????????????????????
        let res = this.base.getLaunchOptionsSync();
        this._OnShow(res);
    }
    /**
    * ??????????????????????????????
    */
    _OnShow(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].platformStr, "OnShow", res);
        _LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.lauchOption = res;
        _LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance._CheckUpdate();
        // this.NavigateToAppSuccess = null;//wx
        _Async_Awaiters__WEBPACK_IMPORTED_MODULE_7__["default"].NextFrame().then(() => {
            if (_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.onResume) {
                _LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.onResume.runWith(res);
            }
            let cacheOnShow = _LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance["_cacheOnShowHandle"];
            if (cacheOnShow) {
                cacheOnShow.run();
                _LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance["_cacheOnShowHandle"] = null;
            }
        });
    }
    /**
     * ??????????????????????????????
     */
    _OnHide(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].platformStr, "OnHide", res);
        if (_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.onPause) {
            _LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.onPause.runWith(res);
        }
        else {
            //  this.showFavoriteGuide(); 
            window["qq"].getSetting({
                success(res) {
                    if (!res.authSetting['scope.recentColorSign']) {
                        window["qq"].authorize({
                            scope: 'scope.recentColorSign',
                            success() {
                                window["qq"].addRecentColorSign({
                                    query: 'a=1&b=2',
                                    success(res) {
                                        console.log('addRecentColorSign success: ', res);
                                        // CommonSaveData.instance.RecentColorSign = true;
                                        // CommonSaveData.SaveToDisk();
                                    },
                                    fail(err) {
                                        console.log('addRecentColorSign fail: ', err);
                                    },
                                    complete(res) {
                                        console.log('addRecentColorSign complete: ', res);
                                    }
                                });
                            }
                        });
                    }
                }
            });
        }
        //wx
        // if (this.NavigateToAppSuccess) {
        //     this.NavigateToAppSuccess();
        // }
    }
    getUserInfo() {
        return new Promise(() => {
            this.base.getSetting({
                success: (sucData) => {
                    console.log("getSetting - > ?????? ", sucData);
                    if (sucData.authSetting["scope.userInfo"]) {
                        this.base.getUserInfo({
                            openIdList: ['selfOpenId'],
                            fail: (res) => {
                                console.log("getUserInfo - > ?????? ", res);
                            },
                            success: (successData) => {
                                console.log("getUserInfo - > ?????? ", successData);
                                this.openDataContext.postMsg({ type: "userInfoData", data: successData });
                            }
                        });
                    }
                }
            });
        });
    }
    _CreateBannerAd(show) {
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__["default"].IsNullOrEmpty(this.platformData.bannerId)) {
            console.log("????????????banner??????ID,????????????");
            return;
        }
        let windowWidth = this.base.getSystemInfoSync().windowWidth;
        let windowHeight = this.base.getSystemInfoSync().windowHeight;
        let bannerObj = {};
        bannerObj["adUnitId"] = this.platformData.bannerId; // "adunit-b48894d44d318e5a";
        let styleObj = {};
        styleObj["top"] = windowHeight - 96;
        styleObj["width"] = 360;
        styleObj["left"] = (windowWidth - 360) / 2;
        bannerObj["style"] = styleObj;
        this._bannerAd = this.base.createBannerAd(bannerObj);
        this._isBannerLoaded = false;
        this._bannerAd.onLoad(() => {
            console.log("qq banner????????????", this._bannerAd);
            this._isBannerLoaded = true;
            if (show) {
                this._bannerAd.show();
            }
        });
        this._bannerAd.onError((res) => {
            console.error("banner??????????????????", res);
        });
        this._bannerAd.onResize((size) => {
            console.log("onResize", size);
            this._bannerAd.style.top = windowHeight - 96;
            this._bannerAd.style.left = (windowWidth - 360) / 2;
            console.log("onResize", this._bannerAd);
        });
        // super._CreateBannerAd();
    }
    IsBannerAvaliable() {
        return this._isBannerLoaded;
    }
    IsVideoAvaliable() {
        return this._isVideoLoaded;
    }
    IsInterstitalAvaliable() {
        return this._isInterstitialLoaded;
    }
    ShowBannerAd() {
        if (!this.IsBannerAvaliable()) {
            return;
        }
        this._bannerAd.show();
        this.isBannerShowing = true;
        //Laya.timer.loop(15 * 1000, this, this.refreshBanner);
    }
    refreshBanner() {
        // if (this.isBannerShowing) {
        //     console.log('refresh banner');
        //     this._bannerAd.hide();
        //     this._CreateBannerAd(true);
        // }
    }
    HideBannerAd() {
        if (!this.IsBannerAvaliable())
            return;
        if (this._bannerAd) {
            this._bannerAd.hide();
            // Laya.timer.clear(this, this.refreshBanner);
            // this.isBannerShowing = false;
        }
        // this._CreateBannerAd();
    }
    _DoCacheShowVideo(onSuccess, onSkipped) {
        if (!this._isVideoLoaded) {
            console.error("???????????????????????????");
            return;
        }
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        this._isVideoLoaded = false;
        Laya.stage.event(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_4__["CommonEventId"].PAUSE_AUDIO);
        this._rewardVideo.show();
    }
    _DoNoCacheShowVideo(onSuccess, onSkipped) {
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        if (!this._isVideoLoaded || !this._rewardVideo) {
            if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__["default"].IsNullOrEmpty(this.platformData.rewardVideoId)) {
                console.log("????????????????????????ID,????????????");
                onSkipped.run();
                return;
            }
            let createRewardedVideoAd = this.base["createRewardedVideoAd"];
            if (createRewardedVideoAd == null) {
                console.error("???createRewardedVideoAd??????,???????????????");
                onSkipped.run();
                return;
            }
            _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_5__["default"].ShowLoading("???????????????...");
            this._videoFailedCount = 0;
            let videoObj = {};
            videoObj["adUnitId"] = this.platformData.rewardVideoId; // "adunit-5631637236cf16b6";
            this._rewardVideo = createRewardedVideoAd(videoObj);
            this._rewardVideo.onLoad(() => {
                console.log("????????????????????????");
                this._isVideoLoaded = true;
            });
            this._rewardVideo.onError((res) => {
                this._videoFailedCount++;
                console.error("????????????????????????", res, this._videoFailedCount);
            });
            this._rewardVideo.onClose((res) => {
                Laya.stage.event(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_4__["CommonEventId"].RESUM_AUDIO);
                console.log(" NoCache - ????????????", res);
                let isEnd = res["isEnded"];
                console.log("noCache---", isEnd, "----", !!this._rewardSuccessed, "-----", !!this._rewardSkipped);
                if (isEnd) {
                    if (this._rewardSuccessed)
                        this._rewardSuccessed.run();
                }
                else {
                    if (this._rewardSkipped)
                        this._rewardSkipped.run();
                }
            });
        }
        this._rewardVideo.show().then(() => {
            _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_5__["default"].HideLoading();
        }).catch(err => {
            console.log("????????????????????????", err);
            // ????????????????????????
            this._rewardVideo.load().then(() => {
                console.log("??????????????????");
                // ????????????????????????????????????
                return this._rewardVideo.show().then(() => {
                    _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_5__["default"].HideLoading();
                });
            });
        });
        ;
    }
    ShowRewardVideoAd(onSuccess, onSkipped) {
        if (this._cacheVideoAD) {
            this._DoCacheShowVideo(onSuccess, onSkipped);
        }
        else {
            this._DoNoCacheShowVideo(onSuccess, onSkipped);
        }
    }
    ShowInterstitalAd() {
        if (!this._isInterstitialLoaded) {
            console.error("???????????????????????????");
            return;
        }
        this._intersitialAd.show();
    }
    OpenGameBox(appIds = []) {
        this.showAppBox();
    }
    /**
     * ????????????
     */
    showAppBox() {
        if (this.appBox) {
            this.appBox.show();
        }
    }
    createAppBox(show) {
        if (!this.appBox) {
            this.appBox = this.base.createAppBox({
                adUnitId: '54b23210b2bf2e85c874beb4bae96003'
            });
        }
        this.appBox.load().then(() => {
            if (show) {
                this.appBox.show();
            }
        });
        this.appBox.onClose(() => {
            console.log('????????????');
        });
    }
    hideAppBox() {
        if (this.appBox) {
            this.appBox.destroy();
        }
    }
    /**
     * ???????????? 1-5
     */
    showBlockAd(count = 1) {
        let obj = {
            adUnitId: "2f0aa99d54d9aedb40bbca4c21065c03",
            style: { left: 55, top: Laya.stage.height / 2 },
            size: count,
            orientation: 'vertical' //landscape ?????? vertical?????????????????????????????????????????????
        };
        this.blockAd = this.base.createBlockAd(obj);
        this.blockAd.onLoad(() => {
            console.log('????????????????????????');
            this.blockAd.show().then(() => { console.log('??????????????????'); }).catch(e => {
                console.error('??????????????????', e);
            });
        });
        this.blockAd.onError((err) => {
            console.error('????????????????????????', err);
        });
        this.blockAd.onResize((res) => {
            console.log('??????resize', res);
        });
    }
    hideBlockAd() {
        if (this.blockAd) {
            this.blockAd.hide();
            this.blockAd.destroy();
        }
    }
    hasShortcutInstalled() {
        return new Promise((resolve, reject) => {
            resolve(_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_6__["default"].instance.hasShotcut);
        });
    }
    createShortcut() {
        return new Promise((resolve, reject) => {
            if (!_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_6__["default"].instance.hasShotcut) {
                this.base.saveAppToDesktop({
                    success: (res) => {
                        console.log("????????????????????????", res);
                        // CommonSaveData.instance.hasShotcut = true;
                        // CommonSaveData.SaveToDisk();
                    },
                    fail: (res) => {
                        console.log("????????????????????????", res);
                    },
                    complete: (res) => {
                        console.log("??????????????????complete", res);
                        if (res && res.errMsg && res.errMsg == "saveAppToDesktop:ok") {
                            _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_6__["default"].instance.hasShotcut = true;
                            _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_6__["default"].SaveToDisk();
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    },
                });
            }
            else {
                resolve(true);
            }
        });
    }
    showFavoriteGuide() {
        this.base.addRecentColorSign({
            query: 'a=1&b=2',
            success(res) {
                console.log('addRecentColorSign success: ', res);
                _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_6__["default"].SaveToDisk();
            },
            fail(err) {
                console.log('addRecentColorSign fail: ', err);
            },
            complete(res) {
                console.log('addRecentColorSign complete: ', res);
            }
        });
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/QTTPlatform.ts":
/*!********************************************!*\
  !*** ./src/LTGame/Platform/QTTPlatform.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QTTPlatform; });
/* harmony import */ var _WXPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WXPlatform */ "./src/LTGame/Platform/WXPlatform.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");



class QTTPlatform extends _WXPlatform__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].QTT;
    }
    Init(platformData) {
        this.base = window["qttGame"];
        if (this.base == null) {
            console.error("?????????????????????");
            return;
        }
        this.platformData = platformData;
        // this._InitLauchOption();
        // this._Login();
        // this._InitShareInfo();
        // this._InitSystemInfo();
        // this._CreateBannerAd();
        // this._CreateVideoAd();
        // this._CreateInterstitalAd();
        window["iplatform"] = this;
    }
    IsBannerAvaliable() {
        return true;
    }
    ShowBannerAd() {
        this.base.showBanner({ index: 1 });
    }
    HideBannerAd() {
        this.base.hideBanner();
    }
    IsVideoAvaliable() {
        return true;
    }
    ShowRewardVideoAd(onSuccess, onSkipped) {
        let options = {};
        options.index = 1; //???????????????1???2???3???4...???
        options.gametype = 1; //?????????????????????1(?????????)  2(laba)  3(?????????)
        options.rewardtype = 1; //???????????????????????? 1
        options.data = {};
        options.data.title = "????????????"; //???????????????????????????????????????
        Laya.stage.event(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__["CommonEventId"].PAUSE_AUDIO);
        this.base.showVideo((res) => {
            Laya.stage.event(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__["CommonEventId"].RESUM_AUDIO);
            if (res == 1) {
                // ???????????????????????????
                if (onSuccess) {
                    onSuccess.run();
                }
            }
            else {
                //res = 0    ????????????
                //res = 2    ????????????
                if (onSkipped) {
                    onSkipped.run();
                }
            }
        }, options);
    }
    ShowInterstitalAd() {
        // ??????????????????????????????????????????
        this.ShowHDReward();
    }
    /**
     * ??????????????????
     */
    ShowHDReward() {
        let options = {};
        options.index = 1;
        options.rewardtype = 1;
        this.base.showHDReward(options);
    }
    RecordEvent(eventId, param) {
        console.log("????????????", eventId, param);
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/ShareInfo.ts":
/*!******************************************!*\
  !*** ./src/LTGame/Platform/ShareInfo.ts ***!
  \******************************************/
/*! exports provided: ShareInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareInfo", function() { return ShareInfo; });
class ShareInfo {
}


/***/ }),

/***/ "./src/LTGame/Platform/ShareManager.ts":
/*!*********************************************!*\
  !*** ./src/LTGame/Platform/ShareManager.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShareManager; });
/* harmony import */ var _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LTUtils/MathEx */ "./src/LTGame/LTUtils/MathEx.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _ShareInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShareInfo */ "./src/LTGame/Platform/ShareInfo.ts");



class ShareManager {
    constructor() {
        this._shareInfoList = [];
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new ShareManager();
        }
        return this._instance;
    }
    AddShareInfo(shareInfo) {
        for (let getInfo of this._shareInfoList) {
            if (getInfo.shareId == shareInfo.shareId)
                return;
        }
        this._shareInfoList.push(shareInfo);
    }
    GetShareInfo(id = null) {
        if (this._shareInfoList.length == 0) {
            let fakeShareInfo = new _ShareInfo__WEBPACK_IMPORTED_MODULE_2__["ShareInfo"]();
            return fakeShareInfo;
        }
        if (id != null) {
            for (let shareInfo of this._shareInfoList) {
                if (shareInfo.shareId == id)
                    return shareInfo;
            }
        }
        let randomShare = _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_0__["default"].RandomFromArray(this._shareInfoList);
        return randomShare;
    }
    ShareAppMessage(shareInfo) {
        _LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ShareAppMessage(shareInfo, Laya.Handler.create(this, () => {
            console.log("????????????");
        }), null);
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/TTPlatform.ts":
/*!*******************************************!*\
  !*** ./src/LTGame/Platform/TTPlatform.ts ***!
  \*******************************************/
/*! exports provided: default, EHostApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TTPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EHostApp", function() { return EHostApp; });
/* harmony import */ var _script_config_PackConst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../script/config/PackConst */ "./src/script/config/PackConst.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Async_Awaiters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Impl_TT_TTDevice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Impl/TT/TTDevice */ "./src/LTGame/Platform/Impl/TT/TTDevice.ts");
/* harmony import */ var _Impl_TT_TTRecordManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Impl/TT/TTRecordManager */ "./src/LTGame/Platform/Impl/TT/TTRecordManager.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _WXPlatform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WXPlatform */ "./src/LTGame/Platform/WXPlatform.ts");
/* harmony import */ var _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Commom/CommonSaveData */ "./src/LTGame/Commom/CommonSaveData.ts");
/* harmony import */ var _script_config_GameConst__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../script/config/GameConst */ "./src/script/config/GameConst.ts");
/* harmony import */ var _Impl_WX_WXOpenDataContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Impl/WX/WXOpenDataContext */ "./src/LTGame/Platform/Impl/WX/WXOpenDataContext.ts");
/* harmony import */ var _UIExt_DefaultUI_UI_ShareResultMediator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../UIExt/DefaultUI/UI_ShareResultMediator */ "./src/LTGame/UIExt/DefaultUI/UI_ShareResultMediator.ts");













class TTPlatform extends _WXPlatform__WEBPACK_IMPORTED_MODULE_8__["default"] {
    constructor() {
        super(...arguments);
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].TT;
        this._showVideoLoad = false;
        this.loginCode = null;
    }
    get isDouyin() {
        return this.systemInfo['appName'] == 'Douyin';
    }
    Init(platformData) {
        this.base = window["tt"];
        if (this.base == null) {
            console.error("?????????????????????");
            return;
        }
        this.platformData = platformData;
        // ??????????????????????????????
        let tt = this.base;
        let systemInfo = tt.getSystemInfoSync();
        if (systemInfo.platform == "ios") {
            this.isSupportJumpOther = false;
        }
        this._InitLauchOption();
        // TT??????????????????login ?????????????????? ?????? force=false??????????????????
        this._Login();
        this._InitShareInfo();
        this._InitSystemInfo();
        // this._CreateBannerAd();
        this._CreateVideoAd();
        this._CreateInterstitalAd();
        this.recordManager = new _Impl_TT_TTRecordManager__WEBPACK_IMPORTED_MODULE_6__["default"](this.base);
        this.device = new _Impl_TT_TTDevice__WEBPACK_IMPORTED_MODULE_5__["default"](this.base);
        window["iplatform"] = this;
    }
    setUserCloudStorage(key, value) {
        if (!key) {
            key = "score";
        }
        if (isNaN(value)) {
            value = 0;
        }
        const data = {
            ttgame: {
                score: "score",
                update_time: Date.now(),
            },
            progress: 10
        };
        this.base.setUserCloudStorage({
            KVDataList: [
                // key ??????????????????????????????????????????????????????????????????data ???????????????????????????????????? set ??????
                { key: key, value: JSON.stringify(data) },
            ],
        });
    }
    getRankList(key) {
        if (!key) {
            key = "score";
        }
        this.base.getUserCloudStorage({
            keyList: ["score"],
            success: (res) => {
                console.log("??????KV ??????");
                console.log(res.KVDataList);
            },
            fail: (res) => {
                console.log("??????KV????????????");
            },
            complete: (res) => {
                console.log("??????KV????????????");
            },
        });
    }
    _Login() {
        this.loginState = {
            isLogin: false,
            code: ""
        };
        let loginData = {
            force: false,
            success: (res) => {
                console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].platformStr, "????????????", res);
                this._OnLoginSuccess(res);
                this.loginCode = res.code;
                this.loginState.isLogin = true;
                this.loginState.code = res.code;
            },
            fail: (res) => {
                console.error(_LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].platformStr, "????????????", res);
                this.loginState.isLogin = false;
                this.loginState.code = "";
            },
            complete: () => {
                if (this.onLoginEnd != null) {
                    this.onLoginEnd.run();
                }
                this.addShareListener();
            }
        };
        window["tt"].login(loginData);
    }
    getUserInfo() {
        return new Promise((resolve, reject) => {
            this.base.authorize({
                scope: "scope.userInfo",
                success: (scope) => {
                    console.log("scope.userInfo success", scope);
                    // ??????????????????????????????
                    this.base.getUserInfo({
                        fail: (res) => {
                            console.log("getUserInfo - > ?????? ", res);
                            reject();
                        },
                        success: (res) => {
                            console.log("getUserInfo - > ?????? ", res);
                            this.openDataContext.postMsg({ type: "userInfoData", data: res });
                            _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_9__["default"].instance.avatarUrl = res.userInfo.avatarUrl;
                            _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_9__["default"].instance.nickName = res.userInfo.nickName;
                            _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_9__["default"].instance.needUserInfo = false;
                            _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_9__["default"].SaveToDisk();
                            resolve();
                        }
                    });
                },
                fail: (res) => {
                    console.log("scope.userInfo fail", res);
                }
            });
        });
    }
    _OnLoginSuccess(res) {
        this.openDataContext = new _Impl_WX_WXOpenDataContext__WEBPACK_IMPORTED_MODULE_11__["default"](this.base);
        this.openDataContext.setUserGroup("default_group");
        // this.postMsg({ text: "login succeed" });
        // LTUI.Toast('????????????');
        if (_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_9__["default"].instance.needUserInfo) {
            this.getUserInfo();
        }
        // this.loginState.isLogin = true;
        // this.loginState.code = res.code;
    }
    _InitLauchOption() {
        // ??????onShow??????
        this.base.onShow(this._OnShow);
        this.base.onHide(this._OnHide);
        // ??????????????????????????????
        let res = this.base.getLaunchOptionsSync();
        this._OnShow(res);
    }
    /**
    * ??????????????????????????????
    */
    _OnShow(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].platformStr, "OnShow", res);
        _LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance.lauchOption = res;
        _LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance._CheckUpdate();
        _Async_Awaiters__WEBPACK_IMPORTED_MODULE_2__["default"].NextFrame().then(() => {
            if (_LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance.onResume) {
                _LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance.onResume.runWith(res);
            }
            let cacheOnShow = _LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance["_cacheOnShowHandle"];
            if (cacheOnShow) {
                cacheOnShow.run();
                _LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance["_cacheOnShowHandle"] = null;
            }
        });
    }
    /**
     * ??????????????????????????????
     */
    _OnHide(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].platformStr, "OnHide", res);
        if (_LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance.onPause) {
            _LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance.onPause.runWith(res);
        }
    }
    _CreateBannerAd() {
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__["default"].IsNullOrEmpty(this.platformData.bannerId)) {
            console.log("????????????banner??????ID,????????????");
            return;
        }
        let windowWidth = this.base.getSystemInfoSync().windowWidth;
        let windowHeight = this.base.getSystemInfoSync().windowHeight;
        let bannerObj = {};
        bannerObj["adUnitId"] = this.platformData.bannerId; // "adunit-b48894d44d318e5a";
        bannerObj["adIntervals"] = 30;
        let styleObj = {};
        styleObj["width"] = Math.floor(windowWidth * 0.9);
        styleObj["left"] = (windowWidth - styleObj["width"]) / 2;
        styleObj["top"] = windowHeight - Math.floor(styleObj["width"] * 0.347);
        bannerObj["style"] = styleObj;
        this._bannerAd = this.base.createBannerAd(bannerObj);
        this._isBannerLoaded = false;
        this._bannerAd.onLoad(() => {
            console.log("banner????????????", this._bannerAd);
            this._isBannerLoaded = true;
        });
        this._bannerAd.onError((res) => {
            console.error("banner??????????????????", res);
            this._bannerAd == null;
        });
        this._bannerAd.onResize((size) => {
            this._bannerAd.style.top = windowHeight - size.height;
            // this._bannerAd.style.left = (windowWidth - size.width) / 2;
        });
    }
    RecordEvent(eventId, param) {
        let reportAnalytics = this.base["reportAnalytics"];
        if (reportAnalytics) {
            if (param == null) {
                param = {};
            }
            reportAnalytics(eventId, param);
        }
        else {
            console.error("reportAnalytics ???????????????");
        }
    }
    ShowBannerAd() {
        // return;
        // if (!this.IsBannerAvaliable()) {
        //     return;
        // }
        // this._bannerAd.show();
    }
    HideBannerAd() {
    }
    ShowInterstitalAd() {
        var _a;
        if (!this._intersitialAd) {
            this._CreateInterstitalAd();
        }
        (_a = this._intersitialAd) === null || _a === void 0 ? void 0 : _a.load().then(() => {
            this._intersitialAd.show();
        });
    }
    _CreateInterstitalAd() {
        this._intersitialAd = this.base.createInterstitialAd({
            adUnitId: this.platformData.interstitialId
        });
        if (this._intersitialAd == null) {
            console.log('IDE??????????????????InterstitialAd');
            return;
        }
        this._intersitialAd.onError((e) => {
            console.error("??????????????????", e);
        });
        this._intersitialAd.onClose(() => {
            this._intersitialAd.destroy();
            this._intersitialAd = null;
        });
    }
    ShareAppMessage(shareInfo, onSuccess, onFailed) {
        console.log("????????????", shareInfo);
        let shareObj = _WXPlatform__WEBPACK_IMPORTED_MODULE_8__["default"]._WrapShareInfo(shareInfo);
        shareObj["success"] = () => {
            this._cacheOnShowHandle = Laya.Handler.create(null, () => {
                console.log("????????????");
                if (onSuccess) {
                    onSuccess.run();
                }
            });
        };
        shareObj["fail"] = () => {
            this._cacheOnShowHandle = Laya.Handler.create(null, () => {
                console.log("????????????");
                if (onFailed) {
                    onFailed.run();
                }
            });
        };
        this.base.shareAppMessage(shareObj);
    }
    OpenGameBox(appIds = []) {
        let openData = [];
        for (let i = 0; i < appIds.length; ++i) {
            openData.push({
                appId: appIds[i]
            });
        }
        this.base.showMoreGamesModal({
            appLaunchOptions: openData
        });
    }
    NavigateToApp(appid, path, extra) {
        return new Promise((resolve, reject) => {
            // if (!this.isSupportJumpOther) {
            //     reject(false);
            //     console.log("????????????????????????????????????", this);
            // } else {
            //     this._base.showMoreGamesModal({
            //         appLaunchOptions: [
            //             {
            //                 appId: this.platformData.appId,
            //                 query: "foo=bar&baz=qux",
            //                 extraData: {}
            //             }
            //         ],
            //         success(res) {
            //             resolve(true);
            //             console.log("?????????????????????", appid);
            //         },
            //         fail(err) {
            //             reject(false);
            //             console.log("?????????????????????", appid);
            //         }
            //     });
            // }
            this.navigateToVideo(path);
            resolve(true);
        });
    }
    followOfficialAccount() {
        return new Promise((resolve, reject) => {
            this.RecordEvent('follow', { id: 1 });
            if (this.isDouyin && this.loginCode && _script_config_GameConst__WEBPACK_IMPORTED_MODULE_10__["GameConst"].data.officalAccountEnable) {
                //??????????????????
                this.base.openAwemeUserProfile();
            }
            else {
                this.navigateToVideo(this.OfficalVideoId);
            }
            //??????????????? ???????????? 
            // this.base.followOfficialAccount({
            //     success(res) {
            //         if (res.errCode === 0) {
            //             resolve(true);
            //         } else {
            //             console.log(res.errMsg);
            //             resolve(false);
            //         }
            //     },
            // });
        });
    }
    get OfficalVideoId() {
        switch (this.systemInfo.appName) {
            case EHostApp.Douyin:
                return _script_config_GameConst__WEBPACK_IMPORTED_MODULE_10__["GameConst"].data.douyinVideoId;
            case EHostApp.Toutiao:
                return _script_config_GameConst__WEBPACK_IMPORTED_MODULE_10__["GameConst"].data.toutiaoVideoId;
            default:
                return "";
        }
    }
    checkFollowState() {
        return new Promise((resolve, reject) => {
            this.base.checkFollowState({
                success(res) {
                    if (res.result) {
                        resolve(true);
                    }
                    else {
                        resolve(false);
                    }
                    console.log(res.result); // true:????????? /  false:?????????
                },
            });
        });
    }
    addShareListener() {
        console.log('???????????? ');
        if (_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_9__["default"].instance.channelId == 'own') {
            console.log('?????? channel');
            return;
        }
        this.base.onShareAppMessage((res) => {
            console.log('??????', res);
            let shareId = `${_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.uid}${Date.now()}`;
            let topics = _script_config_PackConst__WEBPACK_IMPORTED_MODULE_0__["PackConst"].data.topics;
            return {
                title: "",
                imageUrl: "",
                query: `from=shareVideoBtn&openId=${_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.uid}&shareId=${shareId}&channelId=${_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_9__["default"].instance.channelId}`,
                extra: {
                    videoTopics: topics,
                    withVideoId: true,
                    videoTag: _script_config_GameConst__WEBPACK_IMPORTED_MODULE_10__["GameConst"].data.douyin_id
                },
                success: (rst) => {
                    console.log("????????????", rst, _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.uid, _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_9__["default"].instance.channelId);
                    if (rst.videoId) {
                        _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.reportShareInfo(rst.videoId, shareId);
                        if (window["__GM"]) {
                            //this.SetClipboardData(rst.videoId);
                            _UIExt_DefaultUI_UI_ShareResultMediator__WEBPACK_IMPORTED_MODULE_12__["UI_ShareResultMediator"].instance.Show(rst.videoId);
                        }
                    }
                },
                fail: (e) => {
                    console.log("????????????", e);
                },
            };
        });
    }
    navigateToVideo(videoId) {
        this.base.navigateToVideoView({
            videoId: videoId,
            success: (res) => {
                console.log("????????????", res);
            },
            fail: (err) => {
                if (err.errCode === 1006) {
                    this.base.showToast({
                        title: "something wrong with your network",
                    });
                }
            },
        });
    }
    requestVideoList(byLike = true, count = 12) {
        return new Promise((resolve, reject) => {
            let url = byLike ? "get_top_video_ids_by_like" : "get_top_video_ids_by_time";
            this.base.request({
                url: `https://gate.snssdk.com/developer/api/${url}`,
                method: "POST",
                data: {
                    app_id: this.platformData.appId,
                    number_of_top: count,
                    access_token: _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.token,
                    tag: ""
                },
                success: (res) => {
                    if (res.statusCode == 200 && res.data) {
                        return resolve(res.data);
                    }
                    else {
                        return resolve(null);
                    }
                    // ???res??????????????????????????????videoId??????????????????????????????????????????????????????
                },
            });
        });
    }
    showFavoriteGuide() {
        this.base.showFavoriteGuide({
            type: "bar",
            content: "??????????????????????????????",
            position: "bottom",
            success(res) {
                console.log("????????????????????????");
            },
            fail(res) {
                console.log("????????????????????????");
            },
        });
    }
    hasShortcutInstalled() {
        return new Promise((resolve) => {
            if (this.systemInfo.platform == "ios") {
                return resolve(true);
            }
            this.base.checkShortcut({
                success: function (res) {
                    console.log(res);
                    if (res.status && res.status.exist) {
                        resolve(true);
                    }
                    else {
                        resolve(false);
                    }
                },
                fail: function (res) {
                    console.log(res);
                    resolve(false);
                }
            });
        });
    }
    createShortcut() {
        return new Promise((resolve) => {
            this.base.showFavoriteGuide({
                type: "tip",
                content: "???????????????",
                success(res) {
                    console.log("????????????????????????");
                    resolve(true);
                },
                fail(res) {
                    console.log("????????????????????????");
                    resolve(false);
                },
            });
            // this.base.addShortcut({
            //     success: function (res) {
            //         console.log(res);
            //         resolve(true);
            //     },
            //     fail: function (res) {
            //         console.log(res);
            //         resolve(false);
            //     }
            // })
        });
    }
    showGameBoxBannerAd() {
        if (this.systemInfo.appName == EHostApp.Douyin && window["tt"].showGridGamePanel && _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.configs.isNavEnable) {
            window["tt"].showGridGamePanel({
                query: {
                    'fromgame': 'scccc'
                },
                type: 'four',
                // size: 'large',//| 'medium' | 'small'
                // position: {
                //     top: 0,
                //     left: 0,
                // },
                fail(res) {
                    console.log(res);
                }
            });
        }
    }
    hideGameBoxBannerAd() {
        if (this.systemInfo.appName == EHostApp.Douyin && window["tt"].hideGridGamePanel) {
            window["tt"].hideGridGamePanel({});
        }
    }
}
var EHostApp;
(function (EHostApp) {
    EHostApp["Douyin"] = "Douyin";
    EHostApp["XiGua"] = "XiGua";
    EHostApp["Toutiao"] = "Toutiao";
    EHostApp["live_stream"] = "live_stream";
    EHostApp["news_article_lite"] = "news_article_lite";
    EHostApp["douyin_lite"] = "douyin_lite";
})(EHostApp || (EHostApp = {}));


/***/ }),

/***/ "./src/LTGame/Platform/VivoPlatform.ts":
/*!*********************************************!*\
  !*** ./src/LTGame/Platform/VivoPlatform.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VivoPlatform; });
/* harmony import */ var _script_manager_AudioManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../script/manager/AudioManager */ "./src/script/manager/AudioManager.ts");
/* harmony import */ var _Async_Awaiters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");
/* harmony import */ var _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _DefaultDevice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultDevice */ "./src/LTGame/Platform/DefaultDevice.ts");
/* harmony import */ var _DefaultPlatform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DefaultPlatform */ "./src/LTGame/Platform/DefaultPlatform.ts");
/* harmony import */ var _DefaultRecordManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DefaultRecordManager */ "./src/LTGame/Platform/DefaultRecordManager.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");








class VivoPlatform extends _DefaultPlatform__WEBPACK_IMPORTED_MODULE_4__["default"] {
    constructor() {
        super(...arguments);
        this.isIOS = false;
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_6__["EPlatformType"].Vivo;
        this.safeArea = null;
        this.recordManager = new _DefaultRecordManager__WEBPACK_IMPORTED_MODULE_5__["default"]();
        this.device = new _DefaultDevice__WEBPACK_IMPORTED_MODULE_3__["VivoDevice"]();
        this.systemInfo = null;
        /**
         * ??????????????????????????????????????????
         * ????????????????????????fake true,??????????????????
         */
        this.isSupportJumpOther = true;
    }
    Init(platformData) {
        this.loginState = {
            isLogin: false,
            code: null
        };
        this.base = window["qg"];
        if (this.base == null) {
            console.error("?????????????????????", _LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].platformStr);
            return;
        }
        this.platformData = platformData;
        this._InitLauchOption();
        this.getSystemInfo();
        this.createVideo();
    }
    _InitLauchOption() {
        // ??????onShow??????
        this.base.onShow(this._OnShow);
        this.base.onHide(this._OnHide);
        // ??????????????????????????????
        let res = this.base.getLaunchOptionsSync();
        this._OnShow(res);
    }
    /**
     * ??????????????????????????????
     */
    _OnShow(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].platformStr, "OnShow", res);
        _LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance.lauchOption = res;
        _LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance._CheckUpdate();
        _script_manager_AudioManager__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Resume();
        _Async_Awaiters__WEBPACK_IMPORTED_MODULE_1__["default"].NextFrame().then(() => {
            if (_LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance.onResume) {
                _LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance.onResume.runWith(res);
            }
            let cacheOnShow = _LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance["_cacheOnShowHandle"];
            console.log(cacheOnShow);
            if (cacheOnShow) {
                cacheOnShow.run();
                _LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance["_cacheOnShowHandle"] = null;
            }
        });
    }
    /**
    * ??????????????????????????????
    */
    _OnHide(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].platformStr, "OnHide", res);
        _script_manager_AudioManager__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Pause();
        if (_LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance.onPause) {
            _LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance.onPause.runWith(res);
        }
    }
    getSystemInfo() {
        this.base.getSystemInfo({
            success: (res) => {
                this.systemInfo = res;
                console.log('systeminfo', this.systemInfo);
                if (!this.safeArea) {
                    this.safeArea = { top: res['statusBarHeight'], bottom: res['screenHeight'], left: 0, right: res['screenWidth'], height: res['screenHeight'], width: res['screenWidth'] };
                }
                this._cacheScreenScale = this.systemInfo.screenWidth / Laya.stage.width;
                console.log(this.safeArea);
                if (res['platformVersionCode'] >= 1053) {
                    this.base.login({
                        success: (res) => {
                            console.log('vovo????????????', res);
                            this.loginState.isLogin = true;
                            this.loginState.code = res.token;
                            this.onLoginEnd && this.onLoginEnd.run();
                        },
                        fail: () => {
                            console.log('vovo????????????');
                        }
                    });
                }
            },
            fail: () => { },
            complete: () => { }
        });
    }
    IsBannerAvaliable() {
        return;
    }
    IsVideoAvaliable() {
        return;
    }
    IsInterstitalAvaliable() {
        return;
    }
    ShowInterstitalAd() {
        console.log('todo');
        let interad = this.base.createInterstitialAd({
            posId: this.platformData.interstitialId
        });
        if (interad) {
            interad.show();
        }
    }
    ShowBannerAd() {
        if (this._banner) {
            this._banner.show();
            console.log('????????????banner');
            return;
        }
        this.HideBannerAd();
        this._banner = this.base.createBannerAd({
            posId: this.platformData.bannerId
        });
        let isBannerLoading = true;
        let loadSuccess = false;
        this._banner.show().then((res) => {
            console.log("banner????????????", res);
            if (res['code'] == 0) {
                loadSuccess = true;
            }
            isBannerLoading = false;
        }).catch((res) => {
            console.error("banner????????????", res);
            isBannerLoading = false;
        });
    }
    HideBannerAd() {
        if (this._banner) {
            this._banner.hide();
        }
    }
    ShowRewardVideoAd(onSuccess, onSkipped) {
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            _script_manager_AudioManager__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Pause();
            if (this._rewardVideo) {
                yield this._rewardVideo.load();
                this._rewardVideo.show().then(() => {
                    resolve();
                }).catch(() => {
                    reject();
                });
            }
            else {
                this._rewardVideo = window['qg'].createRewardedVideoAd({
                    posId: this.platformData.rewardVideoId
                });
                this._rewardVideo.onLoad(() => {
                    console.log("????????????????????????");
                });
                this._rewardVideo.onError((res) => {
                    console.error("????????????????????????", res);
                });
                this._rewardVideo.onClose((res) => {
                    let isEnd = res["isEnded"];
                    _Async_Awaiters__WEBPACK_IMPORTED_MODULE_1__["default"].NextFrame().then(() => {
                        _script_manager_AudioManager__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Resume();
                        if (isEnd) {
                            if (this._rewardSuccessed)
                                this._rewardSuccessed.run();
                        }
                        else {
                            if (this._rewardSkipped)
                                this._rewardSkipped.run();
                        }
                    });
                });
                yield this._rewardVideo.load();
                this._rewardVideo.show().then(() => {
                    resolve();
                }).catch(() => {
                    reject();
                });
            }
        }));
    }
    createVideo() {
        this._rewardVideo = this.base.createRewardedVideoAd({
            posId: this.platformData.rewardVideoId
        });
        this._rewardVideo.onLoad(() => {
            console.log("????????????????????????");
        });
        this._rewardVideo.onError((res) => {
            console.error("????????????????????????", res);
        });
        this._rewardVideo.onClose((res) => {
            console.log("????????????", res);
            let isEnd = res["isEnded"];
            _Async_Awaiters__WEBPACK_IMPORTED_MODULE_1__["default"].NextFrame().then(() => {
                _script_manager_AudioManager__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Resume();
                if (isEnd) {
                    if (this._rewardSuccessed)
                        this._rewardSuccessed.run();
                }
                else {
                    if (this._rewardSkipped)
                        this._rewardSkipped.run();
                }
            });
        });
    }
    GetFromAppId() {
        return null;
    }
    ShareAppMessage(obj, onSuccess = null, onFailed = null) {
        console.log("????????????", obj);
        if (onSuccess) {
            onSuccess.run();
        }
    }
    LoadSubpackage(name, onSuccess, onFailed) {
        this.base.loadSubpackage({
            name: name,
            success: () => {
                console.log("vivo??????????????????", `${name}`);
                if (onSuccess) {
                    onSuccess.run();
                }
            },
            fail: (err) => {
                console.error("vivo??????????????????", err);
                if (onFailed) {
                    onFailed.run();
                }
            },
            complete: () => {
            }
        });
    }
    RecordEvent(eventId, param) {
        console.log("????????????", eventId, param);
    }
    ShareVideoInfo() {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].platformStr, "????????????????????????");
    }
    _CheckUpdate() {
        this.base.onUpdateReady(function (res) {
            console.log(`isUpdate--- ${res}`);
            if (res == 1) {
                this.base.applyUpdate();
            }
        });
    }
    ShowToast(str) {
        _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_2__["default"].Toast(str);
    }
    OpenGameBox() {
        var _a;
        this.HideBannerAd();
        (_a = this._banner) === null || _a === void 0 ? void 0 : _a.destroy();
        if (this.base.createBoxPortalAd) {
            this.boxPortalAd = this.base.createBoxPortalAd({
                posId: this.platformData.gameBoxAdId,
                marginTop: 200
            });
            this.boxPortalAd.onError(function (err) { console.log("?????????????????????????????????", err); });
            // ?????????????????????????????????
            this.boxPortalAd.show().then(function () { console.log('show success'); });
        }
        else {
            console.log('?????????????????????????????? API');
        }
    }
    HideGameBox() {
        if (this.boxPortalAd) {
            this.boxPortalAd.destroy();
        }
    }
    NavigateToApp(appid, path, extra) {
        return new Promise((resolve, reject) => {
            console.error("????????????", _LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].platformStr, `???????????????????????????appid:${appid}`);
            // ????????????resolve
            resolve(false);
        });
    }
    hasShortcutInstalled() {
        return new Promise((resolve, reject) => {
            this.base.hasShortcutInstalled({
                success: (status) => {
                    if (status) {
                        resolve(true);
                    }
                    else {
                        resolve(false);
                    }
                }
            });
        });
    }
    createShortcut() {
        console.log('??????????????????');
        return new Promise((resolve, reject) => {
            this.base.installShortcut({
                success: () => {
                    console.log('????????????????????????');
                    resolve(true);
                }
            });
        });
    }
    GetStorage(key) {
        console.log('???????????????');
        return Laya.LocalStorage.getItem(key);
    }
    SetStorage(key, data) {
        console.log('???????????????');
        Laya.LocalStorage.setItem(key, data);
    }
    followOfficialAccount() {
        console.log('????????????');
        return;
    }
    checkFollowState() {
        console.log('????????????');
        return;
    }
    SetClipboardData(str) {
        this.base.setClipboardData({ data: str });
    }
    showGameBoxBannerAd() {
        if (!this.base.createBoxBannerAd)
            return;
        if (!this.boxBannerAd) {
            this.createBoxBannerAd();
        }
        this.boxBannerAd.show();
    }
    createBoxBannerAd() {
        if (this.base.createBoxBannerAd) {
            this.boxBannerAd = this.base.createBoxBannerAd({
                posId: this.platformData.gameBoxBannerId
            });
        }
        else {
            console.log('?????????????????????????????? API');
        }
    }
    hideGameBoxBannerAd() {
        if (!this.base.createBoxBannerAd)
            return;
        if (this.boxBannerAd) {
            this.boxBannerAd.hide();
        }
    }
    getNativeAd(adid) {
        return new Promise((resolve, reject) => {
            if (!_LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance.base.createCustomAd)
                return resolve(false);
            const customAd = _LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance.base.createCustomAd({
                posId: adid,
                style: {
                    left: 0,
                    top: (Laya.stage.height / 2)
                }
            });
            customAd.onError(err => {
                console.log("??????????????????????????????", err);
            });
            customAd.show().then(() => {
                console.log('??????????????????????????????');
                resolve({
                    ad: customAd,
                    data: null
                });
            }).catch((err) => {
                console.log('??????????????????????????????', JSON.stringify(err));
            });
        });
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/WXPlatform.ts":
/*!*******************************************!*\
  !*** ./src/LTGame/Platform/WXPlatform.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WXPlatform; });
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Async_Awaiters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _DefaultDevice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DefaultDevice */ "./src/LTGame/Platform/DefaultDevice.ts");
/* harmony import */ var _DefaultRecordManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DefaultRecordManager */ "./src/LTGame/Platform/DefaultRecordManager.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _ShareManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShareManager */ "./src/LTGame/Platform/ShareManager.ts");
/* harmony import */ var _DefaultPlatform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DefaultPlatform */ "./src/LTGame/Platform/DefaultPlatform.ts");
/* harmony import */ var _Impl_WX_WXOpenDataContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Impl/WX/WXOpenDataContext */ "./src/LTGame/Platform/Impl/WX/WXOpenDataContext.ts");
/* harmony import */ var _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Commom/CommonSaveData */ "./src/LTGame/Commom/CommonSaveData.ts");













class WXPlatform extends _DefaultPlatform__WEBPACK_IMPORTED_MODULE_10__["default"] {
    constructor() {
        super(...arguments);
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_7__["EPlatformType"].WX;
        this.safeArea = null;
        this.recordManager = new _DefaultRecordManager__WEBPACK_IMPORTED_MODULE_6__["default"]();
        this.device = new _DefaultDevice__WEBPACK_IMPORTED_MODULE_5__["default"]();
        this.loginCode = null;
        /**
         * ??????????????????????????????????????????
         */
        this.isSupportJumpOther = true;
        this._isBannerLoaded = false;
        this._isVideoLoaded = false;
        this._isInterstitialLoaded = false;
        this._cacheVideoAD = false;
        this.showAdCount = 0;
        this.NavigateToAppSuccess = null;
    }
    Init(platformData) {
        this.base = window["wx"];
        if (this.base == null) {
            console.error("?????????????????????", _LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].platformStr);
            return;
        }
        this.platformData = platformData;
        this._InitLauchOption();
        // this._Login();
        this._InitShareInfo();
        this._InitSystemInfo();
        this._CreateBannerAd();
        this._CreateVideoAd();
        this._CreateInterstitalAd();
        //  this.openDataContext = new WXOpenDataContext(this.base);
        window["iplatform"] = this;
    }
    _CheckUpdate() {
        let updateManager = this.base.getUpdateManager();
        if (updateManager == null)
            return;
        updateManager.onCheckForUpdate(function (res) {
            // ?????????????????????????????????
            console.log("onCheckForUpdate", res.hasUpdate);
            if (res.hasUpdate) {
                _LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].instance.base.showToast({
                    title: "????????????????????????"
                });
            }
        });
        updateManager.onUpdateReady(() => {
            _LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].instance.base.showModal({
                title: "????????????",
                content: "????????????????????????????????????????????????",
                success: function (res) {
                    if (res.confirm) {
                        // ?????? applyUpdate ????????????????????????
                        let updateManager = _LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].instance.base.getUpdateManager();
                        updateManager.applyUpdate();
                    }
                    else {
                        _LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].instance.base.showToast({
                            icon: "none",
                            title: "??????????????????????????????????????????????????????"
                        });
                    }
                }
            });
        });
        updateManager.onUpdateFailed(() => {
            _LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].instance.base.showToast({
                title: "?????????????????????????????????..."
            });
        });
    }
    _Login() {
        this.loginState = {
            isLogin: false,
            code: ""
        };
        let loginData = {};
        loginData.success = (res) => {
            this.loginCode = res.code;
            this._OnLoginSuccess(res);
            console.error(this.loginState);
            if (_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_12__["default"].instance.needUserInfo) {
                this.getUserInfo();
            }
        };
        loginData.fail = (res) => {
            console.error(_LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].platformStr, "????????????", res);
            this.loginState.isLogin = false;
            this.loginState.code = "";
        };
        loginData.complete = () => {
            if (this.onLoginEnd != null) {
                this.onLoginEnd.run();
            }
        };
        this.base.login(loginData);
    }
    getUserInfo() {
        return new Promise((resolve, reject) => {
            this.base.getUserInfo({
                withCredentials: true,
                lang: 'zh_CN',
                success: (result) => {
                    console.log(result);
                    _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_12__["default"].instance.avatarUrl = result.userInfo["avatarUrl"];
                    _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_12__["default"].instance.nickName = result.userInfo["nickName"];
                    _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_12__["default"].instance.needUserInfo = false;
                    _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_12__["default"].SaveToDisk();
                    resolve();
                },
                fail: () => {
                    reject();
                },
                complete: () => { }
            });
        });
    }
    _OnLoginSuccess(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].platformStr, "????????????", res);
        // LTUI.Toast('????????????');
        this.openDataContext = new _Impl_WX_WXOpenDataContext__WEBPACK_IMPORTED_MODULE_11__["default"](this.base);
        this.loginState.isLogin = true;
        this.loginState.code = res.code;
    }
    _InitLauchOption() {
        // ??????onShow??????
        this.base.onShow(this._OnShow);
        this.base.onHide(this._OnHide);
        // ??????????????????????????????
        let res = this.base.getLaunchOptionsSync();
        this._OnShow(res);
    }
    _InitShareInfo() {
        this.base.showShareMenu({
            withShareTicket: true,
            success: (res) => {
                console.log("InitShareSuccess", res);
            },
            fail: (res) => {
                console.log("InitShareFailed", res);
            },
            complete: (res) => {
                console.log("InitShareComplete", res);
            }
        });
        this.base.onShareAppMessage(() => {
            let shareInfo = _ShareManager__WEBPACK_IMPORTED_MODULE_9__["default"].instance.GetShareInfo();
            return WXPlatform._WrapShareInfo(shareInfo);
        });
    }
    static _WrapShareInfo(shareInfo) {
        let shareObj = {};
        if (shareInfo.shareTitle) {
            shareObj["title"] = shareInfo.shareTitle;
        }
        if (shareInfo.shareImg) {
            shareObj["imageUrl"] = shareInfo.shareImg;
        }
        if (shareInfo.sharePath) {
            shareObj["query"] = {};
            let pathSplit = shareInfo.sharePath.split("?");
            let params = pathSplit[1].split("&");
            for (let getParam of params) {
                let splitParam = getParam.split("=");
                shareObj["query"][splitParam[0]] = splitParam[1];
            }
        }
        return shareObj;
    }
    _InitSystemInfo() {
        this.base = this.base;
        try {
            this.systemInfo = this.base.getSystemInfoSync();
            console.log("?????????????????????", this.systemInfo);
            this.safeArea = this.systemInfo.safeArea;
            this._cacheScreenScale = this.systemInfo.screenWidth / Laya.stage.width;
        }
        catch (e) {
            console.error(e);
            console.error("????????????????????????,?????????????????????");
            this.safeArea = null;
        }
    }
    _CreateInterstitalAd() {
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__["default"].IsNullOrEmpty(this.platformData.interstitialId)) {
            console.log("????????????????????????ID,????????????");
            return;
        }
        this._interstitalFailedCount = 0;
        let intAdObj = {};
        intAdObj["adUnitId"] = this.platformData.interstitialId;
        this._intersitialAd = this.base.createInterstitialAd(intAdObj);
        if (this._intersitialAd == null) {
            console.error("createInterstitialAd????????????null,???????????????");
            return;
        }
        this._intersitialAd.onLoad(() => {
            console.log("????????????????????????");
            this._isInterstitialLoaded = true;
        });
        this._intersitialAd.onError((err) => {
            this._interstitalFailedCount++;
            console.error("????????????????????????", err);
            if (this._interstitalFailedCount > 10) {
                console.log("???", this._interstitalFailedCount, "???????????????????????????");
                // ????????????????????????
                this._intersitialAd.load();
            }
        });
    }
    _CreateVideoAd() {
        if (!this._cacheVideoAD) {
            console.log("????????????????????????????????????");
            return;
        }
        let createRewardedVideoAd = this.base["createRewardedVideoAd"];
        if (createRewardedVideoAd == null) {
            console.error("???createRewardedVideoAd??????,???????????????");
            return;
        }
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__["default"].IsNullOrEmpty(this.platformData.rewardVideoId)) {
            console.log("????????????????????????ID,????????????");
            return;
        }
        this._videoFailedCount = 0;
        let videoObj = {};
        videoObj["adUnitId"] = this.platformData.rewardVideoId; // "adunit-5631637236cf16b6";
        this._rewardVideo = createRewardedVideoAd(videoObj);
        this._rewardVideo.onLoad(() => {
            console.log("????????????????????????");
            this._isVideoLoaded = true;
        });
        this._rewardVideo.onError((res) => {
            this._videoFailedCount++;
            console.error("????????????????????????", res);
            if (this._videoFailedCount > 10) {
                console.log("???", this._videoFailedCount, "???????????????????????????");
                // ????????????????????????
                this._rewardVideo.load();
            }
        });
        this._rewardVideo.onClose((res) => {
            Laya.stage.event(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__["CommonEventId"].RESUM_AUDIO);
            console.log("????????????", res);
            let isEnd = res["isEnded"];
            // ????????????bug
            _Async_Awaiters__WEBPACK_IMPORTED_MODULE_1__["default"].NextFrame().then(() => {
                if (isEnd) {
                    if (this._rewardSuccessed)
                        this._rewardSuccessed.run();
                }
                else {
                    if (this._rewardSkipped)
                        this._rewardSkipped.run();
                }
            });
        });
    }
    _CreateBannerAd() {
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__["default"].IsNullOrEmpty(this.platformData.bannerId)) {
            console.log("????????????banner??????ID,????????????");
            return;
        }
        let windowWidth = this.base.getSystemInfoSync().windowWidth;
        let windowHeight = this.base.getSystemInfoSync().windowHeight;
        let bannerObj = {};
        bannerObj["adUnitId"] = this.platformData.bannerId; // "adunit-b48894d44d318e5a";
        bannerObj["adIntervals"] = 30;
        let styleObj = {};
        styleObj["left"] = 0;
        styleObj["top"] = 0;
        styleObj["width"] = 360;
        bannerObj["style"] = styleObj;
        this._bannerAd = this.base.createBannerAd(bannerObj);
        this._isBannerLoaded = false;
        this._bannerAd.onLoad(() => {
            console.log("banner????????????");
            this._isBannerLoaded = true;
            this._bannerAd.style.top = windowHeight - this._bannerAd.style.realHeight;
            this._bannerAd.style.left = (windowWidth - this._bannerAd.style.realWidth) / 2;
        });
        this._bannerAd.onError((res) => {
            console.error("banner??????????????????", res);
        });
    }
    IsBannerAvaliable() {
        return this._isBannerLoaded;
    }
    IsVideoAvaliable() {
        return this._isVideoLoaded;
    }
    IsInterstitalAvaliable() {
        return this._isInterstitialLoaded;
    }
    ShowBannerAd() {
        if (!_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.configs.isADEnable)
            return;
        this.showAdCount++;
        this.HideBannerAd();
        if (this.showAdCount % 3 == 0) {
            this._showGameBoxBannerAd();
        }
        else {
            this._showBanner();
        }
    }
    _showBanner() {
        var _a;
        (_a = this._bannerAd) === null || _a === void 0 ? void 0 : _a.show();
    }
    _hieBanner() {
        var _a;
        (_a = this._bannerAd) === null || _a === void 0 ? void 0 : _a.hide();
    }
    HideBannerAd() {
        // UI_SelfBannerMediator.instance.Hide();
        this._hieBanner();
        this._hideGameBoxBannerAd();
    }
    _DoCacheShowVideo(onSuccess, onSkipped) {
        if (!this._isVideoLoaded) {
            console.error("???????????????????????????");
            return;
        }
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        this._isVideoLoaded = false;
        Laya.stage.event(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__["CommonEventId"].PAUSE_AUDIO);
        this._rewardVideo.show();
    }
    _DoNoCacheShowVideo(onSuccess, onSkipped, onFailed) {
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__["default"].IsNullOrEmpty(this.platformData.rewardVideoId)) {
            console.log("????????????????????????ID,????????????");
            onFailed === null || onFailed === void 0 ? void 0 : onFailed.run();
            return;
        }
        let createRewardedVideoAd = this.base["createRewardedVideoAd"];
        if (createRewardedVideoAd == null) {
            console.error("???createRewardedVideoAd??????,???????????????");
            onFailed === null || onFailed === void 0 ? void 0 : onFailed.run();
            return;
        }
        _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_4__["default"].ShowLoading("???????????????...");
        this._videoFailedCount = 0;
        let videoObj = {};
        videoObj["adUnitId"] = this.platformData.rewardVideoId; // "adunit-5631637236cf16b6";
        this._rewardVideo = createRewardedVideoAd(videoObj);
        this._rewardVideo.onLoad(() => {
            console.log("????????????????????????");
            this._isVideoLoaded = true;
        });
        this._rewardVideo.onError((res) => {
            this._videoFailedCount++;
            console.error("????????????????????????", res, this._videoFailedCount);
            _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_4__["default"].HideLoading();
            _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_4__["default"].Toast("???????????????????????????????????????");
        });
        this._rewardVideo.onClose((res) => {
            Laya.stage.event(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__["CommonEventId"].RESUM_AUDIO);
            console.log("????????????", res);
            let isEnd = res["isEnded"];
            _Async_Awaiters__WEBPACK_IMPORTED_MODULE_1__["default"].NextFrame().then(() => {
                if (isEnd) {
                    if (this._rewardSuccessed)
                        this._rewardSuccessed.run();
                }
                else {
                    if (this._rewardSkipped)
                        this._rewardSkipped.run();
                }
            });
        });
        this._rewardVideo.show().then(() => {
            _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_4__["default"].HideLoading();
        }).catch(err => {
            console.log("????????????????????????", err);
            // ????????????????????????
            this._rewardVideo.load().then(() => {
                console.log("??????????????????");
                // ????????????????????????????????????
                return this._rewardVideo.show().then(() => {
                    _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_4__["default"].HideLoading();
                }).catch((err) => {
                    console.error(err);
                    _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_4__["default"].HideLoading();
                });
                ;
            });
        });
        ;
    }
    ShowRewardVideoAd(onSuccess, onSkipped, onFailed) {
        if (this._cacheVideoAD) {
            this._DoCacheShowVideo(onSuccess, onSkipped);
        }
        else {
            this._DoNoCacheShowVideo(onSuccess, onSkipped, onFailed);
        }
    }
    ShowInterstitalAd() {
        if (!_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.configs.isADEnable)
            return;
        if (!this._isInterstitialLoaded) {
            console.error("???????????????????????????");
            return;
        }
        this._intersitialAd.show();
    }
    GetFromAppId() {
        if (this.lauchOption.referrerInfo == null) {
            return null;
        }
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__["default"].IsNullOrEmpty(this.lauchOption.referrerInfo.appId)) {
            return null;
        }
        return this.lauchOption.referrerInfo.appId;
    }
    /**
     * ??????????????????????????????
     */
    _OnShow(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].platformStr, "OnShow", res);
        _LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].instance.lauchOption = res;
        _LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].instance._CheckUpdate();
        // this.NavigateToAppSuccess = null;//wx
        _Async_Awaiters__WEBPACK_IMPORTED_MODULE_1__["default"].NextFrame().then(() => {
            if (_LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].instance.onResume) {
                _LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].instance.onResume.runWith(res);
            }
            let cacheOnShow = _LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].instance["_cacheOnShowHandle"];
            if (cacheOnShow) {
                cacheOnShow.run();
                _LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].instance["_cacheOnShowHandle"] = null;
            }
        });
    }
    /**
     * ??????????????????????????????
     */
    _OnHide(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].platformStr, "OnHide", res);
        if (_LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].instance.onPause) {
            _LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].instance.onPause.runWith(res);
        }
        //wx
        // if (this.NavigateToAppSuccess) {
        //     this.NavigateToAppSuccess();
        // }
    }
    ShareAppMessage(shareInfo, onSuccess, onFailed) {
        console.log("????????????", shareInfo);
        let shareObj = WXPlatform._WrapShareInfo(shareInfo);
        this.base.shareAppMessage(shareObj);
        if (onSuccess) {
            onSuccess.run();
        }
    }
    LoadSubpackage(name, onSuccess, onFailed, onProgress) {
        if (this.base['loadSubpackage'] == null) {
            console.log("?????????????????????,??????????????????", name);
            if (onSuccess) {
                onSuccess.run();
            }
            return;
        }
        let loadObj = {};
        loadObj["name"] = name;
        loadObj["success"] = () => {
            console.log("??????????????????", name);
            if (onSuccess) {
                onSuccess.run();
            }
        };
        loadObj["fail"] = () => {
            console.error("??????????????????", name);
            if (onFailed) {
                onFailed.run();
            }
        };
        let loadTask = this.base.loadSubpackage(loadObj);
        loadTask.onProgressUpdate((res) => {
            if (Laya.Browser.onMobile) {
                console.log("??????????????????", res);
            }
            if (onProgress) {
                onProgress.runWith(res.progress / 100);
            }
        });
    }
    RecordEvent(eventId, param) {
        console.log("????????????", eventId, param);
        let aldSendEvent = this.base["aldSendEvent"];
        if (aldSendEvent == null) {
            console.error("?????????sdk????????????,???????????????");
            return;
        }
        if (param != null) {
            aldSendEvent(eventId, param);
        }
        else {
            aldSendEvent(eventId);
        }
    }
    /**
     * ????????????????????????
     * @param x
     * @param y
     * @param width
     * @param height
     */
    CreateShareVideoBtn(x, y, width, height) {
        let btnObj = {};
        btnObj.style = {
            left: x * this._cacheScreenScale,
            top: y * this._cacheScreenScale,
            height: height * this._cacheScreenScale,
            width: width * this._cacheScreenScale
        };
        btnObj.share = {
            query: {
                tick: 1
            },
            bgm: "",
            timeRange: [0, 60 * 1000]
        };
        if (this._shareVideoBtn == null) {
            this._shareVideoBtn = this.base.createGameRecorderShareButton(btnObj);
        }
        else {
            this._shareVideoBtn.show();
        }
    }
    /**
     * ????????????????????????
     */
    HideShareVideoBtn() {
        if (this._shareVideoBtn != null) {
            this._shareVideoBtn.hide();
        }
    }
    ShowToast(str) {
        this.base.showToast({
            title: str,
            duration: 2000
        });
    }
    OpenGameBox(appIds) {
        var _a;
        if (!_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.configs.isADEnable)
            return;
        this.HideBannerAd();
        if (!this.gamebox) {
            this.creatGamebox();
        }
        (_a = this.gamebox) === null || _a === void 0 ? void 0 : _a.show();
    }
    HideGameBox() {
        var _a;
        (_a = this.gamebox) === null || _a === void 0 ? void 0 : _a.hide();
    }
    creatGamebox() {
        if (!_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.configs.isADEnable)
            return;
        let windowWidth = this.base.getSystemInfoSync().windowWidth;
        let windowHeight = this.base.getSystemInfoSync().windowHeight;
        if (!this.gamebox) {
            this.gamebox = this.base.createCustomAd({
                adUnitId: this.platformData.gameBoxAdId,
                style: {
                    left: 0,
                    top: windowHeight - 228,
                    width: windowWidth,
                    height: 226
                }
            });
            this.gamebox.onLoad((res) => {
                console.log("gamebox onload", res);
            });
            this.gamebox.onError((res) => {
                console.log("gamebox err", res);
            });
        }
    }
    NavigateToApp(appid, path, extra, showGC, isbanner, adid) {
        return new Promise((resolve, reject) => {
            if (showGC) {
                // GlobalUnit.gameManager.GameOver();
            }
            // this.NavigateToAppSuccess = null;
            wx.navigateToMiniProgram({
                appId: appid,
                path: path,
                extraData: extra,
                envVersion: '',
                success: (res) => {
                    if (isbanner) {
                        _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ReportClickAd(adid, 19, true);
                    }
                    else {
                        _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ReportClickAd(adid, 5, true);
                    }
                    console.log('?????????????????????', res);
                    // this.NavigateToAppSuccess = () => {
                    // };
                    resolve(true);
                },
                fail: () => {
                    console.log('????????????????????????');
                    if (isbanner) {
                        _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ReportClickAd(adid, 19, false);
                    }
                    else {
                        _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ReportClickAd(adid, 5, false);
                    }
                    reject(false);
                    if (showGC) {
                        // UI_GameCenterMediator.instance.Show();
                    }
                },
                complete: () => { }
            });
        });
    }
    createShortcut() {
        console.log('????????????');
    }
    GetStorage(key) {
        if (this.base && this.base.getStorageSync && key) {
            try {
                return this.base.getStorageSync(key);
            }
            catch (error) {
                console.log('getStorageSync error: ', JSON.stringify(error));
                return null;
            }
        }
    }
    SetStorage(key, data) {
        if (this.base && this.base.getStorageSync && key) {
            try {
                return this.base.setStorageSync(key, data);
            }
            catch (error) {
                console.log('setStorageSync error: ', JSON.stringify(error));
            }
        }
    }
    followOfficialAccount() {
        console.error("????????????", _LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].platformStr, "??????????????????");
    }
    checkFollowState() {
        console.error("????????????", _LTPlatform__WEBPACK_IMPORTED_MODULE_8__["default"].platformStr, "??????????????????");
    }
    SetClipboardData(str) {
        this.base.setClipboardData({ data: str });
    }
    /** ???????????????????????? */
    postMsg(msg) {
        let context = this.base.getOpenDataContext();
        context.postMessage(msg);
    }
    /**?????????????????? ?????? */
    showGameBoxBannerAd() {
        var _a, _b;
        if (!_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.configs.isADEnable)
            return;
        let windowWidth = this.base.getSystemInfoSync().windowWidth;
        let windowHeight = this.base.getSystemInfoSync().windowHeight;
        //?????????????????? 68*106 ???????????????????????? 360*106
        if (!this.customAdLeft) {
            this.customAdLeft = this.base.createCustomAd({
                adUnitId: this.platformData.nativeinpageIds[0],
                style: {
                    left: 3,
                    top: windowHeight / 2 - 80,
                    width: 68,
                    height: 200
                }
            });
            this.customAdLeft.onLoad((res) => {
                console.log("customAdLeft onload", res);
            });
            this.customAdLeft.onError((res) => {
                console.log("customAdLeft err", res);
            });
        }
        if (!this.customAdRight) {
            this.customAdRight = this.base.createCustomAd({
                adUnitId: this.platformData.nativeinpageIds[1],
                style: {
                    left: windowWidth - 75,
                    top: windowHeight / 2 + 80,
                    width: 68,
                    height: 200
                }
            });
            this.customAdRight.onLoad((res) => {
                console.log("customAdRight onload", res);
            });
            this.customAdRight.onError((res) => {
                console.log("customAdRight err", res);
            });
        }
        (_a = this.customAdRight) === null || _a === void 0 ? void 0 : _a.show();
        (_b = this.customAdLeft) === null || _b === void 0 ? void 0 : _b.show();
    }
    _showGameBoxBannerAd() {
        if (!_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.configs.isADEnable)
            return;
        this.HideBannerAd();
        this.creatCustom();
        // if (this.customAdLeft) {
        //     this.customAdLeft.show();
        // }
        // if (this.customAdRight) {
        //     this.customAdRight.show();
        // }
        if (this.boxBanner) {
            this.boxBanner.show();
        }
    }
    creatCustom() {
        if (!_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.configs.isADEnable)
            return;
        let windowWidth = this.base.getSystemInfoSync().windowWidth;
        let windowHeight = this.base.getSystemInfoSync().windowHeight;
        //?????????????????? 68*106 ???????????????????????? 360*106
        if (!this.boxBanner) {
            this.boxBanner = this.base.createCustomAd({
                adUnitId: this.platformData.gameBoxBannerId,
                style: {
                    left: (windowWidth - 360) / 2,
                    top: windowHeight - 108,
                    width: windowWidth,
                    height: 106
                }
            });
            this.boxBanner.onLoad((res) => {
                console.log("boxBanner onload", res);
            });
            this.boxBanner.onError((res) => {
                console.log("boxBanner err", res);
            });
        }
    }
    _hideGameBoxBannerAd() {
        if (this.boxBanner) {
            this.boxBanner.destroy();
            this.boxBanner = null;
        }
    }
    hideGameBoxBannerAd() {
        var _a, _b;
        (_a = this.customAdRight) === null || _a === void 0 ? void 0 : _a.destroy();
        this.customAdRight = null;
        (_b = this.customAdLeft) === null || _b === void 0 ? void 0 : _b.destroy();
        this.customAdLeft = null;
    }
}


/***/ }),

/***/ "./src/LTGame/Res/LTRes.ts":
/*!*********************************!*\
  !*** ./src/LTGame/Res/LTRes.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTRes; });
class LTRes {
    static Load(urls, onCompleted, onProgress = null) {
        if (onProgress && onProgress.once) {
            onProgress.once = false;
        }
        Laya.loader.create(urls, onCompleted, onProgress);
    }
    static Load2d(urls, onCompleted, onProgress = null) {
        if (onProgress && onProgress.once) {
            onProgress.once = false;
        }
        Laya.loader.load(urls, onCompleted, onProgress);
    }
    static LoadAsync(urls, onProgress = null) {
        return new Promise(function (resolve) {
            LTRes.Load(urls, Laya.Handler.create(null, () => {
                resolve();
            }), onProgress);
        });
    }
    static Load2dAsync(urls, onProgress = null) {
        return new Promise(function (resolve) {
            LTRes.Load2d(urls, Laya.Handler.create(null, () => {
                resolve();
            }), onProgress);
        });
    }
    static Get(resUrl, noClone = false) {
        if (resUrl.endsWith('.ls')) {
            noClone = true;
        }
        let getRes = Laya.loader.getRes(resUrl);
        if (getRes == null) {
            console.error("??????????????????", resUrl);
            return null;
        }
        return noClone ? getRes : getRes.clone();
    }
    static LoadAndGet(resUrl, noClone = false) {
        return __awaiter(this, void 0, void 0, function* () {
            yield LTRes.LoadAsync(resUrl);
            return LTRes.Get(resUrl, noClone);
        });
    }
    static Unload(resUrl) {
        Laya.loader.clearRes(resUrl);
    }
}


/***/ }),

/***/ "./src/LTGame/Res/LTRespackManager.ts":
/*!********************************************!*\
  !*** ./src/LTGame/Res/LTRespackManager.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTRespackManager; });
/* harmony import */ var _Config_LoadPackConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config/LoadPackConfig */ "./src/LTGame/Config/LoadPackConfig.ts");
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");




class LTRespackManager {
    constructor() {
        this._packs = [];
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new LTRespackManager();
        }
        return this._instance;
    }
    get packs() {
        return this._packs;
    }
    get baseUrl() {
        return this._baseUrl;
    }
    get _totalProgress() {
        let total = this._subpackProgress.length;
        let loaded = 0;
        for (let singlProgress of this._subpackProgress) {
            loaded += singlProgress;
        }
        return loaded / total;
    }
    InitLoadSet() {
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_1__["default"].IsNullOrEmpty(this._baseUrl))
            return;
        let adapter = null;
        switch (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.platform) {
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].TT:
                adapter = Laya.TTMiniAdapter;
                break;
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].WX:
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].KS:
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Gamebox4399:
                adapter = Laya.MiniAdpter;
                break;
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].BD:
                adapter = Laya.BMiniAdapter;
                break;
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].QQ:
                adapter = Laya.QQMiniAdapter;
                break;
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Oppo:
                adapter = Laya.QGMiniAdapter;
                break;
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Vivo:
                adapter = Laya.VVMiniAdapter;
                Laya.VVMiniAdapter.AutoCacheDownFile = true;
                break;
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].HW:
                adapter = Laya.HWMiniAdapter;
                break;
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Native_Android:
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Native_Android_233:
                break;
        }
        if (adapter == null)
            return;
        Laya.URL.basePath = this._baseUrl;
        adapter.nativefiles = [];
        for (let pack of this._packs) {
            if (pack.pathType != _Config_LoadPackConfig__WEBPACK_IMPORTED_MODULE_0__["EPackType"].Remote) {
                adapter.nativefiles.push(pack.path);
            }
        }
    }
    SetRemoteUrl(baseUrl) {
        this._baseUrl = baseUrl;
    }
    AddPackData(...packDatas) {
        packDatas.forEach(packData => {
            this._packs.push(packData);
        });
    }
    LoadSubPack(onComplete, onProgress) {
        this._subpackLoaded = [];
        this._subpackProgress = [];
        for (let i = 0; i < this._packs.length; ++i) {
            let pack = this._packs[i];
            if (pack.pathType == _Config_LoadPackConfig__WEBPACK_IMPORTED_MODULE_0__["EPackType"].SubPack) {
                this._subpackLoaded.push(false);
                this._subpackProgress.push(0);
            }
        }
        let reIndex = 0;
        for (let i = 0; i < this._packs.length; ++i) {
            let pack = this._packs[i];
            if (pack.pathType == _Config_LoadPackConfig__WEBPACK_IMPORTED_MODULE_0__["EPackType"].SubPack) {
                let cacheIndex = reIndex;
                _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.LoadSubpackage(pack.name, Laya.Handler.create(this, () => {
                    this._subpackLoaded[cacheIndex] = true;
                    for (let i = 0; i < this._subpackLoaded.length; ++i) {
                        if (!this._subpackLoaded[i])
                            return;
                    }
                    if (onComplete) {
                        onComplete.run();
                    }
                }), Laya.Handler.create(this, () => {
                    console.error("??????????????????", pack);
                }), Laya.Handler.create(this, (value) => {
                    this._subpackProgress[cacheIndex] = value;
                    if (onProgress) {
                        onProgress.runWith(this._totalProgress);
                    }
                }, null, false));
                reIndex++;
            }
        }
        if (reIndex == 0) {
            onProgress.runWith(1);
            if (onComplete) {
                onComplete.run();
            }
        }
    }
}


/***/ }),

/***/ "./src/LTGame/Start/ESceneType.ts":
/*!****************************************!*\
  !*** ./src/LTGame/Start/ESceneType.ts ***!
  \****************************************/
/*! exports provided: ESceneType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESceneType", function() { return ESceneType; });
var ESceneType;
(function (ESceneType) {
    ESceneType[ESceneType["None"] = 0] = "None";
    ESceneType[ESceneType["Splash"] = 1] = "Splash";
    ESceneType[ESceneType["Main"] = 2] = "Main";
})(ESceneType || (ESceneType = {}));


/***/ }),

/***/ "./src/LTGame/Start/LTMain.ts":
/*!************************************!*\
  !*** ./src/LTGame/Start/LTMain.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTMain; });
/* harmony import */ var _Commom_EScreenOrientation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Commom/EScreenOrientation */ "./src/LTGame/Commom/EScreenOrientation.ts");

class LTMain {
    constructor(mainLogicClass) {
        this._mainLogic = new mainLogicClass();
        let config3D = new Config3D();
        config3D.octreeCulling = false;
        config3D.enableMultiLight = false;
        config3D.isAntialias = true;
        //??????IDE?????????????????????
        Laya3D.init(this._mainLogic.designWidth, this._mainLogic.designHeight, config3D, Laya.Handler.create(null, () => {
            switch (this._mainLogic.screenOrientation) {
                case _Commom_EScreenOrientation__WEBPACK_IMPORTED_MODULE_0__["EScreenOrientation"].Landscape:
                    Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
                    break;
                case _Commom_EScreenOrientation__WEBPACK_IMPORTED_MODULE_0__["EScreenOrientation"].Portrait:
                    Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
                    break;
                default:
                    console.error("?????????????????????????????????", this._mainLogic.screenOrientation);
                    break;
            }
            Laya.stage.useRetinalCanvas = true;
            Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO; //window['kwaigame'] ? Laya.Stage.SCALE_EXACTFIT :
            Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
            //???????????????????????????scene????????????
            Laya.URL.exportSceneToJson = true;
            //???????????????????????????IDE???????????????????????????url????????????debug=true????????????????????????????????????
            // if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") 
            // Laya.enableDebugPanel();
            // if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
            if (this._mainLogic.enableStat) {
                Laya.Stat.show(0, 100);
            }
            Laya.alertGlobalError(false);
            this._mainLogic.InitGame();
        }));
    }
}


/***/ }),

/***/ "./src/LTGame/Start/LTSplashScene.ts":
/*!*******************************************!*\
  !*** ./src/LTGame/Start/LTSplashScene.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTSplashScene; });
/* harmony import */ var _Fsm_BaseState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Fsm/BaseState */ "./src/LTGame/Fsm/BaseState.ts");
/* harmony import */ var _UIExt_FGui_LoadUIPack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UIExt/FGui/LoadUIPack */ "./src/LTGame/UIExt/FGui/LoadUIPack.ts");
/* harmony import */ var _ESceneType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ESceneType */ "./src/LTGame/Start/ESceneType.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Res/LTRespackManager */ "./src/LTGame/Res/LTRespackManager.ts");
/* harmony import */ var _UIExt_DefaultUI_UI_LTGame_LTGameBinder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UIExt/DefaultUI/UI/LTGame/LTGameBinder */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/LTGameBinder.ts");
/* harmony import */ var _UIExt_FGui_FGuiData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UIExt/FGui/FGuiData */ "./src/LTGame/UIExt/FGui/FGuiData.ts");
/* harmony import */ var _UIExt_FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../UIExt/FGui/FGuiEx */ "./src/LTGame/UIExt/FGui/FGuiEx.ts");
/* harmony import */ var _Config_ConfigManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Config/ConfigManager */ "./src/LTGame/Config/ConfigManager.ts");
/* harmony import */ var _UIExt_DefaultUI_UI_FlyPanelMediator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../UIExt/DefaultUI/UI_FlyPanelMediator */ "./src/LTGame/UIExt/DefaultUI/UI_FlyPanelMediator.ts");
/* harmony import */ var _LTG_CommonUI_UI_LTCom_LTComBinder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../LTG_CommonUI/UI/LTCom/LTComBinder */ "./src/LTG_CommonUI/UI/LTCom/LTComBinder.ts");
/* harmony import */ var _Material_LTShaderHelper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Material/LTShaderHelper */ "./src/LTGame/Material/LTShaderHelper.ts");
/* harmony import */ var _Async_Awaiters__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");














class LTSplashScene extends _Fsm_BaseState__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(null, _ESceneType__WEBPACK_IMPORTED_MODULE_2__["ESceneType"].Splash);
        /**
         * ??????????????????ui???
         */
        this._initUiPack = new _UIExt_FGui_LoadUIPack__WEBPACK_IMPORTED_MODULE_1__["LoadUIPack"]("res/fgui_load/Load");
        /**
         * ?????????????????????UI???
         */
        this._needLoadOtherUIPack = [
            new _UIExt_FGui_LoadUIPack__WEBPACK_IMPORTED_MODULE_1__["LoadUIPack"]("res/fgui/Main")
        ];
        /**
         * ??????????????????:
         * ??????
         * ??????
         * ??????
         * ??????ui
         */
        this._loadProgressWeight = [10, 1, 5, 2];
        this._configProgress = 0;
        this._otherUIProgress = 0;
        this._resProgress = 0;
        this._subPackProgress = 0;
        this._isUIShowed = false;
        this._jsonPath = "subpack.json";
        this._useCommonUI = false;
        switch (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platform) {
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].WX:
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].QQ:
                this._loadProgressWeight = [10, 1, 5, 2];
                break;
            default:
                this._loadProgressWeight = [1, 1, 5, 2];
                break;
        }
    }
    get _loadProgress() {
        let totalWeight = this._loadProgressWeight[0] + this._loadProgressWeight[1] + this._loadProgressWeight[2] + this._loadProgressWeight[3];
        let loadWeight = this._loadProgressWeight[0] * this._subPackProgress
            + this._loadProgressWeight[1] * this._configProgress
            + this._loadProgressWeight[2] * this._resProgress
            + this._loadProgressWeight[3] * this._otherUIProgress;
        return loadWeight / totalWeight * 95;
    }
    _DoEnter() {
        this._needLoadOtherUIPack.push(new _UIExt_FGui_LoadUIPack__WEBPACK_IMPORTED_MODULE_1__["LoadUIPack"]("res/ltgame/ui/LTGame"));
        if (this._useCommonUI) {
            this._needLoadOtherUIPack.push(new _UIExt_FGui_LoadUIPack__WEBPACK_IMPORTED_MODULE_1__["LoadUIPack"]("res/ltgame/ui/LTCom"));
        }
        switch (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platform) {
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].Web:
                this._InitUI();
                break;
            default:
                Laya.loader.load(this._jsonPath, Laya.Handler.create(this, this._OnJsonLoaded));
                break;
        }
    }
    _OnJsonLoaded() {
        let loadJson = Laya.loader.getRes(this._jsonPath);
        Laya.loader.clearRes(this._jsonPath);
        if (loadJson != null) {
            for (let i = 0; i < loadJson.length; ++i) {
                let jsonData = loadJson[i];
                console.log("??????????????????", jsonData);
                _Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_5__["default"].instance.AddPackData(jsonData);
            }
        }
        _Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_5__["default"].instance.InitLoadSet();
        this._InitUI();
    }
    _InitUI() {
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.RecordEvent("???????????????????????????", null);
        _UIExt_DefaultUI_UI_LTGame_LTGameBinder__WEBPACK_IMPORTED_MODULE_6__["default"].bindAll();
        if (this._useCommonUI) {
            _LTG_CommonUI_UI_LTCom_LTComBinder__WEBPACK_IMPORTED_MODULE_11__["default"].bindAll();
        }
        this._OnBindUI();
        let loadUrl = [];
        this._initUiPack.PushUrl(loadUrl);
        Laya.loader.load(loadUrl, Laya.Handler.create(this, this._OnUILoaded));
    }
    _OnBindUI() { }
    _OnUILoaded() {
        this._initUiPack.AddPackage();
        // ????????????
        let needFit = new _UIExt_FGui_FGuiData__WEBPACK_IMPORTED_MODULE_7__["default"]();
        needFit.needFitScreen = false;
        this._ui = _UIExt_FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_8__["default"].AddUI(this._splashUIClass, needFit);
        this._ui.sortingOrder = Number.MAX_SAFE_INTEGER;
        this._progressUI = this._ui["m_progress"];
        this._progressUI.value = 0;
        this._isUIShowed = true;
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.RecordEvent("???????????????????????????", null);
        if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platform == _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].Oppo) {
            _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.reportMonitor();
        }
        _Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_5__["default"].instance.LoadSubPack(Laya.Handler.create(this, this._OnPackLoaded), Laya.Handler.create(this, this._OnPackProgress, null, false));
    }
    _OnPackProgress(value) {
        this._subPackProgress = value;
    }
    _OnPackLoaded() {
        this._StartLoad();
    }
    _StartLoad() {
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.RecordEvent("?????????????????????", null);
        this._OnSetLoadConfig();
        if (_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_9__["ConfigManager"].needLoadCount <= 0) {
            this._configProgress = 1;
            this._OnConfigLoaded();
            return;
        }
        _Config_ConfigManager__WEBPACK_IMPORTED_MODULE_9__["ConfigManager"].StartLoad(Laya.Handler.create(this, this._OnConfigLoaded), Laya.Handler.create(this, this._OnConfigProgress, null, false));
    }
    _OnSetLoadConfig() {
    }
    _OnConfigProgress(value) {
        this._configProgress = value;
    }
    _OnConfigLoaded() {
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.RecordEvent("??????????????????UI??????", null);
        if (this._needLoadOtherUIPack.length == 0) {
            this._OnOtherUILoaded();
            return;
        }
        let uiLoadData = [];
        for (let i = 0; i < this._needLoadOtherUIPack.length; ++i) {
            let otherUIPack = this._needLoadOtherUIPack[i];
            otherUIPack.PushUrl(uiLoadData);
        }
        Laya.loader.load(uiLoadData, Laya.Handler.create(this, this._OnOtherUILoaded), Laya.Handler.create(this, this._OnOtherUIProgress, null, false));
    }
    _OnOtherUIProgress(value) {
        this._otherUIProgress = value;
    }
    _OnOtherUILoaded() {
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.RecordEvent("??????????????????????????????", null);
        for (let i = 0; i < this._needLoadOtherUIPack.length; ++i) {
            let otherUIPack = this._needLoadOtherUIPack[i];
            otherUIPack.AddPackage();
            console.log(otherUIPack, "?????????");
        }
        _UIExt_DefaultUI_UI_FlyPanelMediator__WEBPACK_IMPORTED_MODULE_10__["default"].instance.Show();
        let loadUrls = [];
        this._OnGameResPrepared(loadUrls);
        if (loadUrls.length == 0) {
            this._resProgress = 1;
            this._OnResLoaded();
            return;
        }
        Laya.loader.create(loadUrls, Laya.Handler.create(this, this._OnResLoaded), Laya.Handler.create(this, this._OnResProgress, null, false));
    }
    /**
     * ???????????????splash?????????????????????,????????????????????????
     * @param urls
     */
    _OnGameResPrepared(urls) {
    }
    _OnResProgress(value) {
        this._resProgress = value;
    }
    _OnResLoaded() {
        return __awaiter(this, void 0, void 0, function* () {
            this._isUIShowed = false;
            this._progressUI.value = 95;
            yield _Material_LTShaderHelper__WEBPACK_IMPORTED_MODULE_12__["LTShaderHelper"].WarmShader();
            this._progressUI.value = 100;
            _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.RecordEvent("????????????", null);
            this._OnGameResLoaded();
        });
    }
    _OnGameResLoaded() {
    }
    _DoRunning() {
        if (!this._isUIShowed) {
            return;
        }
        this._progressUI.value = this._loadProgress;
    }
    _DoExit() {
        this._CloseSplash();
    }
    _CloseSplash() {
        return __awaiter(this, void 0, void 0, function* () {
            this._ui.dispose();
            yield _Async_Awaiters__WEBPACK_IMPORTED_MODULE_13__["default"].NextFrame();
            this._initUiPack.RemovePackage();
        });
    }
}


/***/ }),

/***/ "./src/LTGame/Start/LTStart.ts":
/*!*************************************!*\
  !*** ./src/LTGame/Start/LTStart.ts ***!
  \*************************************/
/*! exports provided: LTStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTStart", function() { return LTStart; });
/* harmony import */ var _Fsm_StateMachine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Fsm/StateMachine */ "./src/LTGame/Fsm/StateMachine.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _Platform_Data_LTPlatformData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Platform/Data/LTPlatformData */ "./src/LTGame/Platform/Data/LTPlatformData.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _UIExt_FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UIExt/FGui/FGuiEx */ "./src/LTGame/UIExt/FGui/FGuiEx.ts");
/* harmony import */ var _LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LTUtils/MonoHelper */ "./src/LTGame/LTUtils/MonoHelper.ts");
/* harmony import */ var _LTVersion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../LTVersion */ "./src/LTGame/LTVersion.ts");
/* harmony import */ var _Commom_EScreenOrientation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Commom/EScreenOrientation */ "./src/LTGame/Commom/EScreenOrientation.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _SDK_Impl_SDK_Default__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../SDK/Impl/SDK_Default */ "./src/SDK/Impl/SDK_Default.ts");
/* harmony import */ var _Async_Awaiters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");
/* harmony import */ var _Material_LTShaderHelper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Material/LTShaderHelper */ "./src/LTGame/Material/LTShaderHelper.ts");












class LTStart {
    constructor() {
        this.enableStat = false;
        this.screenOrientation = _Commom_EScreenOrientation__WEBPACK_IMPORTED_MODULE_7__["EScreenOrientation"].Portrait;
    }
    get _currentState() {
        return this._fsm.currState;
    }
    get designWidth() {
        switch (this.screenOrientation) {
            case _Commom_EScreenOrientation__WEBPACK_IMPORTED_MODULE_7__["EScreenOrientation"].Portrait:
                return 750;
            case _Commom_EScreenOrientation__WEBPACK_IMPORTED_MODULE_7__["EScreenOrientation"].Landscape:
                return 1334;
            default:
                console.error("?????????????????????????????????", this.screenOrientation);
                return 0;
        }
    }
    get designHeight() {
        switch (this.screenOrientation) {
            case _Commom_EScreenOrientation__WEBPACK_IMPORTED_MODULE_7__["EScreenOrientation"].Portrait:
                return 1334;
            case _Commom_EScreenOrientation__WEBPACK_IMPORTED_MODULE_7__["EScreenOrientation"].Landscape:
                return 750;
            default:
                console.error("?????????????????????????????????", this.screenOrientation);
                return 0;
        }
    }
    InitGame() {
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].CreateInstance();
        console.log("?????????????????????,?????????????????????", _LTVersion__WEBPACK_IMPORTED_MODULE_6__["default"].version);
        this._Init();
    }
    _Init() {
        return __awaiter(this, void 0, void 0, function* () {
            let platformData = new _Platform_Data_LTPlatformData__WEBPACK_IMPORTED_MODULE_2__["default"]();
            this._HandleInitPlatform(_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.platform, platformData);
            _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.Init(platformData);
            this._HandleSDK();
            if (!_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_8__["default"].isInited) {
                _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_8__["default"].CreateInstace(_SDK_Impl_SDK_Default__WEBPACK_IMPORTED_MODULE_9__["default"], "default", "default", "default");
            }
            _Material_LTShaderHelper__WEBPACK_IMPORTED_MODULE_11__["LTShaderHelper"].InitRecorder();
            if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Web) {
                while (!_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.safeArea) {
                    yield _Async_Awaiters__WEBPACK_IMPORTED_MODULE_10__["default"].NextFrame();
                }
            }
            _UIExt_FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_4__["default"].Init(_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.safeArea);
            yield _Async_Awaiters__WEBPACK_IMPORTED_MODULE_10__["default"].NextFrame();
            this._NextFramUpdate();
        });
    }
    _NextFramUpdate() {
        this._fsm = new _Fsm_StateMachine__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this._InitFsm();
        if (this._fsm.count == 0) {
            console.error("??????_InitFsm????????????????????????");
            return;
        }
        this._fsm.ChangeState(1);
        this._RegistUpdate();
    }
    _RegistUpdate() {
        _LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_5__["default"].instance.AddAction(_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_5__["EActionType"].Update, this, this._LogicUpdate);
    }
    _UnRegistUpdate() {
        _LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_5__["default"].instance.RemoveAction(_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_5__["EActionType"].Update, this, this._LogicUpdate);
    }
    _HandleSDK() {
    }
    _HandleInitPlatform(ePlatform, platformData) {
    }
    _LogicUpdate(dt) {
        let nextState = this._currentState.GetNextState();
        if (nextState != 0) {
            var changeResult = this._fsm.ChangeState(nextState, null);
            if (!changeResult) {
                console.error("????????????????????????,??????????????????,??????????????????");
                this._UnRegistUpdate();
                return;
            }
        }
        this._fsm.OnRunning(null, dt);
    }
    _InitFsm() {
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/Cmp/CmpJoystick.ts":
/*!*********************************************!*\
  !*** ./src/LTGame/UIExt/Cmp/CmpJoystick.ts ***!
  \*********************************************/
/*! exports provided: CmpJoystick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmpJoystick", function() { return CmpJoystick; });
/* harmony import */ var _LTUtils_Vector2Ex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTUtils/Vector2Ex */ "./src/LTGame/LTUtils/Vector2Ex.ts");

class CmpJoystick {
    constructor(imgBg, handleBg, handleFront) {
        this._imgBg = imgBg;
        this._imgHandleBg = handleBg;
        this._imgHandleFront = handleFront;
        this.dirVec2 = new Laya.Vector2();
        this._cacheVec2 = new Laya.Vector2();
        this._isPressed = false;
        this._isDragged = false;
        this.radius = this._imgHandleBg.width / 2;
        this._imgBg.on(Laya.Event.MOUSE_DOWN, this, this._OnMouseDown);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this._OnMouseMove);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this._OnMouseUp);
        Laya.stage.on(Laya.Event.MOUSE_OUT, this, this._OnMouseUp);
        this._ResetPos();
    }
    get isPressed() {
        return this._isPressed;
    }
    get isDragged() {
        return this._isDragged;
    }
    _ResetPos() {
        let x = Laya.stage.width / 2;
        let y = Laya.stage.height / 2 + 400;
        this._imgHandleBg.setXY(x, y);
        this._SetHandlePos(0, 0);
    }
    _OnMouseDown(event) {
        if (this.isPressed)
            return;
        this._isPressed = true;
        this._cacheTouchId = event.touchId;
        this._imgHandleBg.setXY(event.stageX, event.stageY);
        this._isDragged = false;
        // this._imgHandleBg.visible = true;
        // this._imgHandleFront.visible = true;
    }
    _OnMouseMove(event) {
        if (!this.isPressed)
            return;
        if (this._cacheTouchId != event.touchId)
            return;
        this._cacheVec2.setValue(event.stageX - this._imgHandleBg.x, event.stageY - this._imgHandleBg.y);
        let distance = _LTUtils_Vector2Ex__WEBPACK_IMPORTED_MODULE_0__["default"].Magnitude(this._cacheVec2);
        Laya.Vector2.normalize(this._cacheVec2, this.dirVec2);
        if (distance > this.radius) {
            Laya.Vector2.scale(this.dirVec2, this.radius, this._cacheVec2);
        }
        this._SetHandlePos(this._cacheVec2.x, this._cacheVec2.y);
        if (distance > 0) {
            this._isDragged = true;
        }
    }
    _SetHandlePos(x, y) {
        this._imgHandleFront.setXY(x + this._imgHandleBg.width / 2, y + this._imgHandleBg.height / 2);
    }
    _OnMouseUp(event) {
        if (!this.isPressed)
            return;
        if (this._cacheTouchId != event.touchId)
            return;
        this._isPressed = false;
        this._isDragged = false;
        this._ResetPos();
    }
    Dispose() {
        this._imgBg.off(Laya.Event.MOUSE_DOWN, this, this._OnMouseDown);
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this._OnMouseMove);
        Laya.stage.off(Laya.Event.MOUSE_UP, this, this._OnMouseUp);
        Laya.stage.off(Laya.Event.MOUSE_OUT, this, this._OnMouseUp);
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/Cmp/View_BottomGames.ts":
/*!************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/Cmp/View_BottomGames.ts ***!
  \************************************************************/
/*! exports provided: ON_BANNER_SHOWN, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_BANNER_SHOWN", function() { return ON_BANNER_SHOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_BottomGames; });
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _UI_LTGame_UI_bottomGames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/LTGame/UI_bottomGames */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_bottomGames.ts");





const ON_BANNER_SHOWN = "ON_BANNER_RESIZE";
class View_BottomGames {
    constructor(ui) {
        this._posId = 0;
        this.scrollOri = 1;
        this._ui = ui;
        this._Init();
    }
    /**__gamebox 750*225  */
    static CreateView(tagUI) {
        if (tagUI == null)
            return null;
        // ??????????????????????????????????????????,???????????????,?????????????????????
        if (!_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.isSupportJumpOther) {
            tagUI.dispose();
            return null;
        }
        if (!_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.configs.isNavEnable) {
            tagUI.dispose();
            return null;
        }
        let uiInstance = null;
        uiInstance = _UI_LTGame_UI_bottomGames__WEBPACK_IMPORTED_MODULE_4__["default"].createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_BottomGames(uiInstance);
    }
    get ui() {
        return this._ui;
    }
    _Init() {
        this._posId = 6;
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.adManager.GetADListByLocationId(this._posId);
        if (this._cacheAds == null) {
            Laya.stage.on(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_1__["CommonEventId"].SELF_AD_INITED, this, this._OnAdInited);
            this.ui.visible = false;
        }
        else {
            this.ui.m_list.setVirtualAndLoop();
            this.ui.m_list.scrollPane.bouncebackEffect = true;
            this.ui.m_list.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
            this.ui.m_list.numItems = this._cacheAds.length;
            this.ui.m_list.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
            Laya.timer.loop(1, this, () => {
                if (this.ui.m_list.scrollPane.isRightMost) {
                    this.scrollOri = -1;
                }
                this.ui.m_list.scrollPane.scrollRight(0.01 * this.scrollOri, true);
            });
            let ads = [];
            for (let i = 0; i < this._cacheAds.length; i++) {
                const adData = this._cacheAds[i];
                let ad = {};
                ad.ad_id = adData.ad_id;
                ad.location_id = this._posId;
                ad.num = 1;
                ads.push(ad);
            }
            console.log('bottom', this._cacheAds, ads);
            _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ReportShowAd(ads);
        }
        // Laya.stage.on(ON_BANNER_SHOWN, this, this.resetPos);
    }
    resetPos(bannerHight) {
        this.ui.y = Laya.stage.height - bannerHight - this.ui.height;
    }
    _OnAdInited(posId) {
        if (posId != this._posId)
            return;
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.adManager.GetADListByLocationId(this._posId);
        this.ui.m_list.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
        this.ui.m_list.numItems = this._cacheAds.length;
        this.ui.m_list.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
        this.ui.visible = true;
    }
    _OnAdItemRender(index, adUI) {
        let data = this._cacheAds[index];
        adUI.data = index;
        adUI.m_icon.m_icon.url = data.ad_img;
        adUI.m_text_name.text = data.ad_name.length > 4 ? (data.ad_name).substring(0, 4) + '..' : data.ad_name;
    }
    _OnClickGameItem(item) {
        let data = this._cacheAds[item.data];
        let uid = data.ad_appid;
        switch (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platform) {
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Oppo:
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Vivo:
                uid = data.ad_package;
                break;
            default:
                break;
        }
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.NavigateToApp(uid, data.ad_path, null, true, false, data.ad_id).then(() => {
            _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ReportClickAd(data.ad_id, this._posId, true, '????????????');
        }).catch(() => {
            _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ReportClickAd(data.ad_id, this._posId, false, '????????????');
        });
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/Cmp/View_End3X3Games.ts":
/*!************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/Cmp/View_End3X3Games.ts ***!
  \************************************************************/
/*! exports provided: ON_BANNER_SHOWN, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_BANNER_SHOWN", function() { return ON_BANNER_SHOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_End3X3Games; });
/* harmony import */ var _SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../SDK/Impl/SDK_YQ */ "./src/SDK/Impl/SDK_YQ.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _UI_LTGame_UI_End3X3Ad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/LTGame/UI_End3X3Ad */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_End3X3Ad.ts");






const ON_BANNER_SHOWN = "ON_BANNER_RESIZE";
class View_End3X3Games {
    constructor(ui) {
        this._posId = 0;
        this._ui = ui;
        this._Init();
    }
    static CreateView(tagUI) {
        if (tagUI == null)
            return null;
        // ??????????????????????????????????????????,???????????????,?????????????????????
        if (!_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.isSupportJumpOther) {
            tagUI.dispose();
            return null;
        }
        if (!_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.configs.isNavEnable) {
            tagUI.dispose();
            return null;
        }
        if (tagUI instanceof _UI_LTGame_UI_End3X3Ad__WEBPACK_IMPORTED_MODULE_5__["default"]) {
            return new View_End3X3Games(tagUI);
        }
        let uiInstance = _UI_LTGame_UI_End3X3Ad__WEBPACK_IMPORTED_MODULE_5__["default"].createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_End3X3Games(uiInstance);
    }
    get ui() {
        return this._ui;
    }
    _Init() {
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance instanceof _SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            this._posId = 5;
        }
        else {
            this._posId = 5;
        }
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.adManager.GetADListByLocationId(this._posId);
        if (this._cacheAds == null) {
            Laya.stage.on(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__["CommonEventId"].SELF_AD_INITED, this, this._OnAdInited);
            this.ui.visible = false;
        }
        else {
            this.ui.m_list.setVirtual();
            this.ui.m_list.scrollPane.bouncebackEffect = false;
            this.ui.m_list.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
            this.ui.m_list.numItems = this._cacheAds.length;
            this.ui.m_list.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
            Laya.timer.loop(200, this, () => {
                this.ui.m_list.scrollPane.scrollDown(0.02, true);
            });
            let ads = [];
            for (let i = 0; i < this._cacheAds.length; i++) {
                const adData = this._cacheAds[i];
                let ad = {};
                ad.ad_id = adData.ad_id;
                ad.location_id = this._posId;
                ad.num = 1;
                ads.push(ad);
            }
            console.log('bottom', this._cacheAds, ads);
            _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ReportShowAd(ads);
        }
        // Laya.stage.on(ON_BANNER_SHOWN, this, this.resetPos);
    }
    resetPos(bannerHight) {
        this.ui.y = Laya.stage.height - bannerHight - this.ui.height;
    }
    _OnAdInited(posId) {
        if (posId != this._posId)
            return;
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.adManager.GetADListByLocationId(this._posId);
        this.ui.m_list.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
        this.ui.m_list.numItems = this._cacheAds.length;
        this.ui.m_list.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
        this.ui.visible = true;
    }
    _OnAdItemRender(index, adUI) {
        let adData = this._cacheAds[index];
        adUI.data = index;
        adUI.m_icon.m_icon.url = adData.ad_img;
        adUI.m_title.text = adData.ad_name;
    }
    _OnClickGameItem(item) {
        let data = this._cacheAds[item.data];
        let uid = data.ad_appid;
        switch (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform) {
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Oppo:
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Vivo:
                uid = data.ad_package;
                break;
            default:
                break;
        }
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.NavigateToApp(uid, data.ad_path, null, true, false, data.ad_id).then(() => {
            _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ReportClickAd(data.ad_id, this._posId, true, '????????????');
        }).catch(() => {
            _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ReportClickAd(data.ad_id, this._posId, false, '????????????');
        });
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/Cmp/View_EndSlideGames.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/Cmp/View_EndSlideGames.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_EndSlideGames; });
/* harmony import */ var _SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../SDK/Impl/SDK_YQ */ "./src/SDK/Impl/SDK_YQ.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _UI_LTGame_UI_EndSlideGames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/LTGame/UI_EndSlideGames */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_EndSlideGames.ts");
/* harmony import */ var _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../SDK/common/ECheckState */ "./src/SDK/common/ECheckState.ts");







/**
 * ???????????????????????? __endSG
 */
class View_EndSlideGames {
    // [
    //     [1, 2, 3, 9, 10, 6, 7],
    //     [4, 5, 11, 1, 2, 3, 8],
    //     [7, 12, 13, 8, 4, 5, 6]
    // ];//oppo ???????????????13???
    constructor(ui) {
        this._posId = 0;
        this.sortArrr = [
            [1, 2, 3, 4, 5, 6, 7],
            [8, 9, 10, 1, 2, 3, 4],
            [5, 6, 7, 8, 9, 10, 1]
        ];
        this._ui = ui;
        this._Init();
    }
    static CreateView(tagUI) {
        if (tagUI == null)
            return null;
        // ??????????????????????????????????????????,???????????????,?????????????????????
        if (!_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.isSupportJumpOther) {
            console.log('???????????????');
            tagUI.dispose();
            return null;
        }
        if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].WX && _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].TT && _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Web) {
            console.log('????????????????????????');
            tagUI.dispose();
            return null;
        }
        if (!_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.configs.isNavEnable) {
            console.log('??????????????????');
            tagUI.dispose();
            return null;
        }
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.checkState == _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_6__["ECheckState"].InCheck) {
            console.log("??????");
            tagUI.dispose();
            return null;
        }
        if (tagUI instanceof _UI_LTGame_UI_EndSlideGames__WEBPACK_IMPORTED_MODULE_5__["default"]) {
            return new View_EndSlideGames(tagUI);
        }
        let uiInstance = _UI_LTGame_UI_EndSlideGames__WEBPACK_IMPORTED_MODULE_5__["default"].createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_EndSlideGames(uiInstance);
    }
    get ui() {
        return this._ui;
    }
    _Init() {
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance instanceof _SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            this._posId = 5;
        }
        else {
            this._posId = 6;
        }
        if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform == _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].TT) {
            this._posId = 3;
        }
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.adManager.GetADListByLocationId(this._posId);
        if (!this._cacheAds || !this._cacheAds.length)
            return this.ui.visible = false;
        while (this._cacheAds.length < 10) {
            this._cacheAds = this._cacheAds.concat(_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.adManager.GetADListByLocationId(this._posId));
        }
        if (!this._cacheAds || !this._cacheAds.length) {
            this.ui.visible = false;
            Laya.stage.on(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__["CommonEventId"].SELF_AD_INITED, this, this._OnAdInited);
        }
        else {
            for (let i = 0; i < 3; i++) {
                this.initLists(i);
            }
            let ads = [];
            this._cacheAds.forEach(adData => {
                let ad = {};
                ad.ad_id = adData.ad_id;
                ad.location_id = this._posId;
                ad.num = 1;
                ads.push(ad);
            });
            _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ReportShowAd(ads);
        }
    }
    initLists(index) {
        this.ui.m_ad[`m_list${index}`].setVirtualAndLoop();
        this.ui.m_ad[`m_list${index}`].scrollPane.bouncebackEffect = false;
        this.ui.m_ad[`m_list${index}`].itemRenderer = Laya.Handler.create(this, (id, adUI) => this._OnAdItemRender(id, adUI, index), null, false);
        this.ui.m_ad[`m_list${index}`].numItems = (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform == _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Oppo) ? 7 : this._cacheAds.length;
        this.ui.m_ad[`m_list${index}`].on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
        Laya.timer.loop(25, this, () => {
            this.ui.m_ad[`m_list${index}`].scrollPane.scrollRight(0.01, true);
        });
    }
    _OnAdInited(posId) {
        if (posId != this._posId)
            return;
        this.ui.visible = true;
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.adManager.GetADListByLocationId(this._posId);
        for (let i = 0; i < 3; i++) {
            this.initLists(i);
        }
    }
    _OnAdItemRender(index, adUI, rowId) {
        let ind = (4 * rowId + index) % this._cacheAds.length;
        if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform == _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Oppo) {
            ind = this.sortArrr[rowId][index % 7] - 1;
        }
        let adData = this._cacheAds[ind];
        adUI.data = ind;
        adUI.m_icon.m_icon.url = adData.ad_img;
        adUI.m_text_name.text = '';
        // let ad: any = {};
        // ad.ad_id = adData.ad_id;
        // ad.location_id = 5;
        // ad.num = 1;
        // LTSDK.instance.RecordShowAd([ad]);
    }
    _OnClickGameItem(item) {
        let data = this._cacheAds[item.data];
        let uid = data.ad_appid;
        switch (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform) {
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Oppo:
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Vivo:
                uid = data.ad_package;
                break;
            default:
                break;
        }
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.NavigateToApp(uid, data.ad_path, null, true, false, data.ad_id).then(() => {
            _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ReportClickAd(data.ad_id, this._posId, true, '????????????');
        }).catch(() => {
            _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ReportClickAd(data.ad_id, this._posId, false, '????????????');
        });
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/Cmp/View_GameBox.ts":
/*!********************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/Cmp/View_GameBox.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_GameBox; });
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");
/* harmony import */ var _UI_LTGame_UI_GameBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/LTGame/UI_GameBox */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_GameBox.ts");





class View_GameBox {
    constructor(ui) {
        this.showingIndexs = [0, 1, 2, 3];
        this._posId = 0;
        this._ui = ui;
        this._Init();
    }
    /**__gamebox 750*400  */
    static CreateView(tagUI) {
        if (tagUI == null)
            return null;
        // ??????????????????????????????????????????,???????????????,?????????????????????
        if (!_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.isSupportJumpOther && _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Web) {
            console.log('???????????????');
            tagUI.dispose();
            return null;
        }
        if (!_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.configs.isNavEnable) {
            tagUI.dispose();
            return null;
        }
        let uiInstance = _UI_LTGame_UI_GameBox__WEBPACK_IMPORTED_MODULE_4__["default"].createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_GameBox(uiInstance);
    }
    get ui() {
        return this._ui;
    }
    _Init() {
        this._posId = 6;
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.adManager.GetADListByLocationId(this._posId);
        this.ui.m_btn_close.onClick(this, this.hide);
        if (this._cacheAds == null) {
            Laya.stage.on(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_3__["CommonEventId"].SELF_AD_INITED, this, this._OnAdInited);
            this.ui.visible = false;
        }
        else {
            this.ui.m_list.setVirtual();
            console.error(this._cacheAds);
            this.ui.m_list.itemRenderer = Laya.Handler.create(this, this.renderItem, null, false);
            this.ui.m_list.on(fgui.Events.CLICK_ITEM, this, this.clickItem);
            this.ui.m_list.numItems = this._cacheAds.length;
        }
    }
    hide() {
        this.ui.visible = false;
    }
    refresh() {
    }
    _OnAdInited(posId) {
        if (posId != this._posId)
            return;
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.adManager.GetADListByLocationId(this._posId);
        // this.ui.m_list.itemRenderer = Laya.Handler.create(this, this.renderItem, null, false);
        // this.ui.m_list.numItems = this._cacheAds.length;
        // this.ui.m_list.on(fairygui.Events.CLICK_ITEM, this, this.clickItem);
        this.ui.visible = true;
    }
    clickItem(item) {
        let data = this._cacheAds[item['idx']];
        ;
        console.log(data.ad_name);
        _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ReportClickAd(data.ad_id, this._posId, true);
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.NavigateToApp(data.ad_appid, data.ad_path, null, true, false, data.ad_id);
    }
    renderItem(index, item) {
        let ind = index;
        let data = this._cacheAds[ind];
        item.m_text_name.text = data.ad_name.length > 4 ? (data.ad_name).substring(0, 4) + '..' : data.ad_name;
        ;
        item.m_icon.m_icon.url = data.ad_img;
        item['idx'] = index;
        //  item.m_shake.play();
        // item.onClick(item, () => this.clickItem(index));
        // let ad: any = {};
        // ad.ad_id = data.ad_id;
        // ad.location_id = 5;
        // ad.num = 1;
        // LTSDK.instance.RecordShowAd([ad]);
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/Cmp/View_HotGame.ts":
/*!********************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/Cmp/View_HotGame.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_HotGame; });
/* harmony import */ var _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../SDK/common/ECheckState */ "./src/SDK/common/ECheckState.ts");
/* harmony import */ var _SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../SDK/Impl/SDK_YQ */ "./src/SDK/Impl/SDK_YQ.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Async_Awaiters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");
/* harmony import */ var _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../LTUtils/MathEx */ "./src/LTGame/LTUtils/MathEx.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _UI_LTGame_UI_hot_game__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../UI/LTGame/UI_hot_game */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_hot_game.ts");









//**????????????  ???????????? */
class View_HotGame {
    constructor(ui) {
        /**
         * ?????????????????????
         */
        this._updateTime = 3000;
        this._posId = 0;
        this._ui = ui;
        this._Init();
    }
    static CreateView(tagUI) {
        if (tagUI == null)
            return null;
        // ??????????????????????????????????????????,???????????????,?????????????????????
        if (!_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance.isSupportJumpOther) {
            tagUI.dispose();
            return null;
        }
        if (!_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__["default"].instance.configs.isNavEnable) {
            tagUI.dispose();
            return null;
        }
        if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance.platform == _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_6__["EPlatformType"].Oppo && _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__["default"].instance.checkState == _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_0__["ECheckState"].InCheck) {
            // ??????oppo??????
            console.log("hotgame,??????");
            tagUI.dispose();
            return null;
        }
        if (tagUI instanceof _UI_LTGame_UI_hot_game__WEBPACK_IMPORTED_MODULE_8__["default"]) {
            return new View_HotGame(tagUI);
        }
        let uiInstance = _UI_LTGame_UI_hot_game__WEBPACK_IMPORTED_MODULE_8__["default"].createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_HotGame(uiInstance);
    }
    get ui() {
        return this._ui;
    }
    _Init() {
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__["default"].instance instanceof _SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            this._posId = 5;
        }
        else {
            this._posId = 7;
        }
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__["default"].instance.adManager.GetADListByLocationId(this._posId);
        this.ui.displayObject.zOrder = Number.MAX_SAFE_INTEGER;
        if (!this._cacheAds || !this._cacheAds.length) {
            this.ui.visible = false;
            Laya.stage.on(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_4__["CommonEventId"].SELF_AD_INITED, this, this._OnAdInited);
        }
        else {
            this._cacheIndex = _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_5__["default"].RandomInt(0, this._cacheAds.length);
            this.ui.onClick(this, this._OnClickAD);
            this._UpdateUI();
            this._LoopUpdate();
        }
    }
    _OnAdInited(posId) {
        if (posId != this._posId)
            return;
        this.ui.visible = true;
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__["default"].instance.adManager.GetADListByLocationId(this._posId);
        this._cacheIndex = _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_5__["default"].RandomInt(0, this._cacheAds.length);
        this.ui.onClick(this, this._OnClickAD);
        this._UpdateUI();
        this._LoopUpdate();
    }
    _LoopUpdate() {
        return __awaiter(this, void 0, void 0, function* () {
            while (this.ui && !this.ui.isDisposed) {
                yield _Async_Awaiters__WEBPACK_IMPORTED_MODULE_3__["default"].Frames(1);
                this._remainUpdateTime -= Laya.timer.delta;
                if (this._remainUpdateTime < 0) {
                    this._UpdateUI();
                }
            }
        });
    }
    _UpdateUI() {
        this._showAd = this._cacheAds[this._cacheIndex];
        this._cacheIndex++;
        if (this._cacheIndex >= this._cacheAds.length) {
            this._cacheIndex = 0;
        }
        this.ui.m_ic.m_icon.url = this._showAd.ad_img;
        this._remainUpdateTime = this._updateTime;
        let ad = {};
        ad.ad_id = this._showAd.ad_id;
        ad.location_id = this._posId;
        ad.num = 1;
        _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__["default"].instance.ReportShowAd([ad]);
    }
    _OnClickAD() {
        let navId = this._showAd.ad_appid;
        switch (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance.platform) {
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_6__["EPlatformType"].Oppo:
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_6__["EPlatformType"].Vivo:
                navId = this._showAd.ad_package;
                break;
            default:
                break;
        }
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance.NavigateToApp(navId, this._showAd.ad_path, null, true, false, this._showAd.ad_id).then(() => {
            _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__["default"].instance.ReportClickAd(this._showAd.ad_id, this._posId, true, '????????????');
        }).catch(() => {
            _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__["default"].instance.ReportClickAd(this._showAd.ad_id, this._posId, false, '????????????');
        });
        ;
        this._UpdateUI();
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/Cmp/View_HotGames.ts":
/*!*********************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/Cmp/View_HotGames.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_HotGames; });
/* harmony import */ var _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../SDK/common/ECheckState */ "./src/SDK/common/ECheckState.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _UI_LTGame_UI_HotGames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/LTGame/UI_HotGames */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_HotGames.ts");






//**????????????  ???????????? 750 *200 */
class View_HotGames {
    constructor(ui) {
        this._posId = 0;
        this._ui = ui;
        this._Init();
    }
    static CreateView(tagUI) {
        if (tagUI == null)
            return null;
        // ??????????????????????????????????????????,???????????????,?????????????????????
        if (!_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.isSupportJumpOther) {
            tagUI.dispose();
            return null;
        }
        if (!_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.configs.isNavEnable) {
            tagUI.dispose();
            return null;
        }
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.checkState == _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_0__["ECheckState"].InCheck) {
            // ??????oppo??????
            console.log("hotgame,??????");
            tagUI.dispose();
            return null;
        }
        if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].TT && _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Web && _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].WX) {
            console.log("hotgame,?????????");
            tagUI.dispose();
            return null;
        }
        if (tagUI instanceof _UI_LTGame_UI_HotGames__WEBPACK_IMPORTED_MODULE_5__["default"]) {
            return new View_HotGames(tagUI);
        }
        let uiInstance = _UI_LTGame_UI_HotGames__WEBPACK_IMPORTED_MODULE_5__["default"].createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_HotGames(uiInstance);
    }
    get ui() {
        return this._ui;
    }
    _Init() {
        this._posId = 4;
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.adManager.GetADListByLocationId(this._posId);
        if (this._cacheAds == null) {
            Laya.stage.on(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__["CommonEventId"].SELF_AD_INITED, this, this._OnAdInited);
            this.ui.visible = false;
        }
        else {
            if (this._cacheAds.length < 5) {
                this.ui.dispose();
                return console.error("??????????????????");
            }
            // this.ui.m_list.setVirtual();
            this.ui.m_list.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
            this.ui.m_list.numItems = 5;
            this.ui.m_list.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
            let ads = [];
            for (let i = 0; i < this._cacheAds.length; i++) {
                const adData = this._cacheAds[i];
                let ad = {};
                ad.ad_id = adData.ad_id;
                ad.location_id = this._posId;
                ad.num = 1;
                ads.push(ad);
            }
            console.log('hots', this._cacheAds, ads);
            _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ReportShowAd(ads);
        }
        // Laya.stage.on(ON_BANNER_SHOWN, this, this.resetPos);
    }
    _OnAdInited(posId) {
        if (posId != this._posId)
            return;
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.adManager.GetADListByLocationId(this._posId);
        this.ui.m_list.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
        this.ui.m_list.numItems = this._cacheAds.length;
        this.ui.m_list.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
        this.ui.visible = true;
    }
    _OnAdItemRender(index, adUI) {
        let adData = this._cacheAds[index];
        adUI.data = index;
        adUI.m_icon.icon = adData.ad_img;
        adUI.m_txt_name.text = adData.ad_name;
    }
    _OnClickGameItem(item) {
        let data = this._cacheAds[item.data];
        let uid = data.ad_appid;
        switch (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform) {
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Oppo:
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Vivo:
                uid = data.ad_package;
                break;
            default:
                break;
        }
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.NavigateToApp(uid, data.ad_path, null, true, false, data.ad_id).then(() => {
            _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ReportClickAd(data.ad_id, this._posId, true, '????????????');
        }).catch(() => {
            _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ReportClickAd(data.ad_id, this._posId, false, '????????????');
        });
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/Cmp/View_NativeIcon.ts":
/*!***********************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/Cmp/View_NativeIcon.ts ***!
  \***********************************************************/
/*! exports provided: View_NativeIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NativeIcon", function() { return View_NativeIcon; });
/* harmony import */ var _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../SDK/common/ECheckState */ "./src/SDK/common/ECheckState.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _UI_LTGame_UI_NativeIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/LTGame/UI_NativeIcon */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeIcon.ts");
/* harmony import */ var _LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../LTUtils/LTUtils */ "./src/LTGame/LTUtils/LTUtils.ts");
/* harmony import */ var _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../LTUtils/MathEx */ "./src/LTGame/LTUtils/MathEx.ts");
/* harmony import */ var _LTUI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../LTUI */ "./src/LTGame/UIExt/LTUI.ts");









class View_NativeIcon {
    constructor(ui, ids) {
        this._ui = ui;
        this._cacheIds = _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platformData.nativeIconIds;
        console.log("???????????????id", this._cacheIds);
        this.ui.visible = false;
        this._Init();
        this.ui.onClick(this, this.ClickAd);
    }
    static CreateView(tagUI) {
        if (tagUI == null)
            return null;
        if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Oppo && _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Vivo) {
            console.log("native_icon ?????????,??????oppo vivo????????????");
            tagUI.dispose();
            return null;
        }
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.checkState == _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_0__["ECheckState"].InCheck) {
            // ??????oppo??????
            console.log("native_iconLong?????????,??????");
            tagUI.dispose();
            return null;
        }
        let uiInstance = _UI_LTGame_UI_NativeIcon__WEBPACK_IMPORTED_MODULE_5__["default"].createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        uiInstance.setSize(tagUI.width, tagUI.height);
        let forceAdIdsStr = tagUI.data;
        let forceAdIds = [];
        if (!_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__["default"].IsNullOrEmpty(forceAdIdsStr)) {
            let splitStrs = forceAdIdsStr.split(',');
            for (let i = 0; i < splitStrs.length; ++i) {
                forceAdIds.push(splitStrs[i]);
            }
        }
        tagUI.dispose();
        return new View_NativeIcon(uiInstance, forceAdIds);
    }
    get ui() {
        return this._ui;
    }
    get visible() {
        return this.ui.visible;
    }
    set visible(v) {
        this.ui.visible = v;
    }
    ClickAd() {
        console.log("??????Icon", this._cacheAdData);
        if (this._cacheAdData) {
            // ??????????????????
            View_NativeIcon._cacheNativeAd.reportAdClick({
                adId: this._cacheAdData.adId
            });
            // ??????
            this._Init();
        }
        else {
            this.ui.visible = false;
            _LTUI__WEBPACK_IMPORTED_MODULE_8__["default"].Toast('??????????????????');
        }
    }
    _Init() {
        return __awaiter(this, void 0, void 0, function* () {
            if (View_NativeIcon._cacheNativeAd != null) {
                View_NativeIcon._cacheNativeAd.destroy();
                View_NativeIcon._cacheNativeAd = null;
            }
            this.ui.visible = false;
            let i = _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_7__["default"].RandomInt(0, this._cacheIds.length);
            // for (let i = 0; i < this._cacheIds.length; ++i) {
            let ret = yield this._LoadIconData(i);
            if (ret && this._cacheAdData) {
                this.ui.visible = true;
                let icon = this._cacheAdData.icon;
                if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__["default"].IsNullOrEmpty(icon) && this._cacheAdData.imgUrlList.length > 0) {
                    icon = this._cacheAdData.imgUrlList[0];
                }
                this.ui.m_icon_img.url = icon;
                this.ui.m_icon_tip.url = this._cacheAdData.logoUrl;
                View_NativeIcon._cacheNativeAd.reportAdShow({
                    adId: this._cacheAdData.adId
                });
                console.log("??????icon???????????????", this._cacheAdData);
            }
            // }
        });
    }
    _OnClickAd() {
        this.ClickAd();
    }
    clickClose() {
        let rate = Object(_LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_6__["randomRangeInt"])(0, 100);
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.configs.nativePayRate > rate) {
            this._OnClickAd();
        }
        this.visible = false;
        this.ui.visible = false;
    }
    _LoadIconData(index) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let nativeAd = null;
                if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform == _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Oppo) {
                    nativeAd = _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.base.createNativeAd({
                        adUnitId: this._cacheIds[index]
                    });
                }
                else {
                    nativeAd = _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.base.createNativeAd({
                        posId: this._cacheIds[index],
                    });
                }
                View_NativeIcon._cacheNativeAd = nativeAd;
                nativeAd.onLoad((res) => {
                    console.log('????????????????????????-onload??????', JSON.stringify(res));
                    if (res && res.adList) {
                        this._cacheAdData = res.adList.pop();
                        resolve(true);
                    }
                });
                nativeAd.onError(err => {
                    console.log("????????????????????????", err);
                    resolve(false);
                });
                nativeAd.load();
            });
        });
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/Cmp/View_NativeInpage.ts":
/*!*************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/Cmp/View_NativeInpage.ts ***!
  \*************************************************************/
/*! exports provided: View_NativeInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NativeInPage", function() { return View_NativeInPage; });
/* harmony import */ var _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../SDK/common/ECheckState */ "./src/SDK/common/ECheckState.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Commom/CommonSaveData */ "./src/LTGame/Commom/CommonSaveData.ts");
/* harmony import */ var _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../LTUtils/MathEx */ "./src/LTGame/LTUtils/MathEx.ts");
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _UI_LTGame_UI_NativeInPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UI/LTGame/UI_NativeInPage */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeInPage.ts");
/* harmony import */ var _LTG_CommonUI_Data_LTG_Com_nativeData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../LTG_CommonUI/Data/LTG_Com_nativeData */ "./src/LTG_CommonUI/Data/LTG_Com_nativeData.ts");









class View_NativeInPage {
    /**
     *
     * @param ui
     * @param btnPos 0 ?????????????????? 1 ???????????? 2 ?????? 3 ??????????????? 4 ???????????????
     */
    constructor(ui, btnPos) {
        this.canshow = true;
        this._ui = ui;
        this._cacheIds = _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.platformData.nativeinpageIds;
        console.log("????????? ?????? native??????id", this._cacheIds);
        this._Init();
        this.ui.m_ad.onClick(this, this.ClickAd);
        this.ui.m_btn_clickad.onClick(this, this.ClickAd);
        this.ui.m_btn_clickadbg.onClick(this, this.ClickAd);
        this.ui.m_btn_close.onClick(this, this.clickClose);
        this.ui.m_btn_pos.selectedIndex = btnPos;
    }
    static CreateView(tagUI) {
        View_NativeInPage.Inst = null;
        if (tagUI == null)
            return null;
        if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_5__["EPlatformType"].Oppo && _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_5__["EPlatformType"].Vivo && _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_5__["EPlatformType"].HW) {
            console.log("NativeInPage?????????,??????oppo vivo????????????");
            tagUI.dispose();
            return null;
        }
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.checkState == _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_0__["ECheckState"].InCheck) {
            // ??????oppo??????
            console.log("?????? native?????????,??????");
            tagUI.dispose();
            return null;
        }
        this.showTimes++;
        if ((_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.platform == _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_5__["EPlatformType"].Oppo && this.showTimes % 2 == 0) && _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.configs.isADEnable) {
            let data = new _LTG_CommonUI_Data_LTG_Com_nativeData__WEBPACK_IMPORTED_MODULE_8__["LTG_Com_NativeData"]();
            data.Send();
            tagUI.dispose();
            return null;
        }
        else if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.platform == _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_5__["EPlatformType"].Vivo) {
            tagUI.dispose();
            _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.HideBannerAd();
            let data = new _LTG_CommonUI_Data_LTG_Com_nativeData__WEBPACK_IMPORTED_MODULE_8__["LTG_Com_NativeData"]();
            data.Send();
            return null;
        }
        let uiInstance = _UI_LTGame_UI_NativeInPage__WEBPACK_IMPORTED_MODULE_7__["default"].createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        uiInstance.setSize(tagUI.width, tagUI.height);
        let posStr = tagUI.data;
        let btnPos = 0;
        if (!_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_4__["default"].IsNullOrEmpty(posStr)) {
            btnPos = parseInt(posStr);
        }
        tagUI.dispose();
        let newUI = new View_NativeInPage(uiInstance, btnPos);
        View_NativeInPage.Inst = newUI;
        return newUI;
    }
    get ui() {
        return this._ui;
    }
    get visible() {
        return this.ui.visible;
    }
    set visible(v) {
        this.ui.visible = v;
    }
    ClickAd() {
        console.log(" ?????? ?????? native", this._cacheAdData);
        // ??????????????????
        if (this._cacheAdData && this._cacheAdData.adId && !this._cacheAdData.click_reported) {
            this._cacheAdData.click_reported = true;
            View_NativeInPage._cacheNativeAd.reportAdClick({
                adId: this._cacheAdData.adId
            });
        }
        // ??????
        if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_5__["EPlatformType"].HW) {
            this._Init();
        }
        else {
            this.ui.visible = false;
        }
    }
    _Init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.visible = true;
            this.ui.visible = true;
            // for (let i = 0; i < this._cacheIds.length; ++i) {
            let i = _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].RandomInt(0, this._cacheIds.length);
            this._cacheAdData = null;
            let ret = yield this._LoadIconData(i);
            if (ret && this._cacheAdData) {
                this.showAdInfo();
            }
            else {
                console.log("?????? native????????????", this._cacheIds[i]);
                // }  
                this.ui.visible = false;
            }
        });
    }
    showAdInfo() {
        if (!this._cacheAdData || !this.canshow) {
            console.log("??????????????????");
            return this.ui.visible = false;
        }
        this.ui.visible = true;
        this.visible = true;
        if (this._cacheAdData.imgUrlList.length) {
            let img = this._cacheAdData.imgUrlList[0];
            if (!img) {
                img = this._cacheAdData.icon;
            }
            this.ui.m_ad.m_icon.url = this._cacheAdData.icon ? this._cacheAdData.icon : this._cacheAdData.imgUrlList[0];
            this.ui.m_ad.m_img.url = img;
        }
        this.ui.m_ad.m_tag.url = this._cacheAdData.logoUrl;
        this.ui.m_ad.m_title.text = this._cacheAdData.title;
        this.ui.m_ad.m_desc.text = this._cacheAdData.desc;
        if (this._cacheAdData.source) {
            this.ui.m_ad.m_sourceTxt.text = `${this._cacheAdData.source}`;
        }
        if (this._cacheAdData && !this._cacheAdData.show_reported && this._cacheAdData.adId) {
            View_NativeInPage._cacheNativeAd.reportAdShow({
                adId: this._cacheAdData.adId
            });
            this._cacheAdData.show_reported = true;
            console.log("?????? native???????????????", this._cacheAdData.adId);
        }
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.HideBannerAd();
    }
    clickClose() {
        if (_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].RandomRatio(_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.configs.nativePayRate)
            && _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__["default"].instance.nativeClickCount < _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.configs.nativeClickCount) {
            _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__["default"].instance.nativeClickCount++;
            _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__["default"].SaveToDisk();
            this.ClickAd();
        }
        this.visible = false;
        this.ui.visible = false;
    }
    Hide() {
        this.canshow = false;
        this.ui.visible = false;
    }
    _LoadIconData(index) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let onLoad = (res) => {
                    console.log('???????????????????????? ??????', JSON.stringify(res));
                    if (res && res.adList) {
                        this._cacheAdData = res.adList[0];
                        this._cacheAdData.show_reported = false;
                        this._cacheAdData.click_reported = false;
                        resolve(true);
                    }
                };
                let onError = (err) => {
                    console.log("????????????????????????", err);
                    this.ui.visible = false;
                    resolve(false);
                };
                if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.platform == _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_5__["EPlatformType"].Oppo) {
                    if (View_NativeInPage._cacheNativeAd) {
                        View_NativeInPage._cacheNativeAd.offLoad(onLoad);
                        View_NativeInPage._cacheNativeAd.offError(onError);
                        View_NativeInPage._cacheNativeAd.destroy();
                        View_NativeInPage._cacheNativeAd = null;
                    }
                    let nativeAd = null;
                    nativeAd = _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.base.createNativeAd({
                        adUnitId: this._cacheIds[index]
                    });
                    View_NativeInPage._cacheNativeAd = nativeAd;
                    nativeAd.onLoad(onLoad);
                    nativeAd.onError(onError);
                    nativeAd.load();
                }
                else {
                    if (!View_NativeInPage._cacheNativeAd) {
                        View_NativeInPage._cacheNativeAd = _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.base.createNativeAd({
                            adUnitId: this._cacheIds[index],
                        });
                    }
                    View_NativeInPage._cacheNativeAd.offLoad();
                    View_NativeInPage._cacheNativeAd.offError();
                    View_NativeInPage._cacheNativeAd.onLoad(onLoad);
                    View_NativeInPage._cacheNativeAd.onError(onError);
                    View_NativeInPage._cacheNativeAd.load();
                }
            });
        });
    }
    ReportShow() {
        if (this._cacheAdData && this._cacheAdData.adId && this.visible) {
            this._cacheAdData.show_reported = true;
            console.log("?????? native???????????????", this._cacheAdData.adId);
            View_NativeInPage._cacheNativeAd.reportAdShow({
                adId: this._cacheAdData.adId
            });
        }
    }
    Refresh() {
        this._Init();
    }
}
View_NativeInPage.showTimes = 0;


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/Cmp/View_OtherGames.ts":
/*!***********************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/Cmp/View_OtherGames.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_OtherGames; });
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _UI_LTGame_UI_view_sharegames_big__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/LTGame/UI_view_sharegames_big */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_sharegames_big.ts");





class View_OtherGames {
    constructor(ui) {
        this._posId = 0;
        this._ui = ui;
        this._Init();
    }
    static CreateView(tagUI) {
        if (tagUI == null)
            return null;
        // ??????????????????????????????????????????,???????????????,?????????????????????
        if (!_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.isSupportJumpOther && _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Web) {
            tagUI.dispose();
            return null;
        }
        if (tagUI instanceof _UI_LTGame_UI_view_sharegames_big__WEBPACK_IMPORTED_MODULE_4__["default"]) {
            return new View_OtherGames(tagUI);
        }
        let uiInstance = _UI_LTGame_UI_view_sharegames_big__WEBPACK_IMPORTED_MODULE_4__["default"].createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_OtherGames(uiInstance);
    }
    get ui() {
        return this._ui;
    }
    _Init() {
        this._posId = 5;
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.adManager.GetADListByLocationId(this._posId);
        if (this._cacheAds == null) {
            Laya.stage.on(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_1__["CommonEventId"].SELF_AD_INITED, this, this._OnAdInited);
        }
        else {
            this.ui.m_list_games.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
            this.ui.m_list_games.numItems = this._cacheAds.length;
            this.ui.m_list_games.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
            let ads = [];
            this._cacheAds.forEach(adData => {
                let ad = {};
                ad.ad_id = adData.ad_id;
                ad.location_id = this._posId;
                ad.num = 1;
                ads.push(ad);
            });
            _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ReportShowAd(ads);
            Laya.timer.loop(100, this, () => {
                this.ui.m_list_games.scrollPane.scrollDown(0.1, true);
            });
        }
    }
    _OnAdInited(posId) {
        if (posId != this._posId)
            return;
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.adManager.GetADListByLocationId(this._posId);
        this.ui.m_list_games.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
        this.ui.m_list_games.numItems = this._cacheAds.length;
        this.ui.m_list_games.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
    }
    _OnAdItemRender(index, adUI) {
        let adData = this._cacheAds[index];
        adUI.data = index;
        adUI.m_icon.m_icon.url = adData.ad_img;
        adUI.m_text_name.text = adData.ad_name;
        // let ad: any = {};
        // ad.ad_id = adData.ad_id;
        // ad.location_id = 5;
        // ad.num = 1;
        // LTSDK.instance.RecordShowAd([ad]);
    }
    _OnClickGameItem(item) {
        let data = this._cacheAds[item.data];
        _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ReportClickAd(data.ad_id, this._posId, true, '????????????');
        let uid = data.ad_appid;
        switch (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platform) {
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Oppo:
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Vivo:
                uid = data.ad_package;
                break;
            default:
                break;
        }
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.NavigateToApp(uid, data.ad_path, null, true, false, data.ad_id);
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/Cmp/View_SideGames.ts":
/*!**********************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/Cmp/View_SideGames.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_SideGames; });
/* harmony import */ var _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../SDK/common/ECheckState */ "./src/SDK/common/ECheckState.ts");
/* harmony import */ var _SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../SDK/Impl/SDK_YQ */ "./src/SDK/Impl/SDK_YQ.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _UI_LTGame_UI_SideGames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UI/LTGame/UI_SideGames */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_SideGames.ts");







/** __sidegames 78*250 */
class View_SideGames {
    constructor(ui) {
        this._posId = 0;
        this._ui = ui;
        this._Init();
    }
    static CreateView(tagUI) {
        if (tagUI == null)
            return null;
        // ??????????????????????????????????????????,???????????????,?????????????????????
        if (!_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.isSupportJumpOther || (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].Oppo && _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].Web)) {
            tagUI.dispose();
            return null;
        }
        if (!_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__["default"].instance.configs.isADEnable) {
            tagUI.dispose();
            return null;
        }
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__["default"].instance.checkState == _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_0__["ECheckState"].InCheck) {
            // ??????oppo??????
            console.log("sidegames,??????");
            tagUI.dispose();
            return null;
        }
        if (tagUI instanceof _UI_LTGame_UI_SideGames__WEBPACK_IMPORTED_MODULE_6__["default"]) {
            return new View_SideGames(tagUI);
        }
        let uiInstance = _UI_LTGame_UI_SideGames__WEBPACK_IMPORTED_MODULE_6__["default"].createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_SideGames(uiInstance);
    }
    get ui() {
        return this._ui;
    }
    _Init() {
        if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platform == _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].TT) {
            this.ui.m_ads.m_list.dispose();
            this.ui.m_ads.onClick(this, () => {
                // this.ui.m_red.visible = false;
                _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.OpenGameBox([]);
            });
            return;
        }
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__["default"].instance instanceof _SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            this._posId = 5;
        }
        else {
            this._posId = 10;
        }
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__["default"].instance.adManager.GetADListByLocationId(this._posId);
        if (!this._cacheAds || !this._cacheAds.length) {
            Laya.stage.on(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_3__["CommonEventId"].SELF_AD_INITED, this, this._OnAdInited);
        }
        else {
            this.ui.m_ads.m_list.setVirtual();
            this.ui.m_ads.m_list.scrollPane.bouncebackEffect = false;
            this.ui.m_ads.m_list.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
            this.ui.m_ads.m_list.numItems = this._cacheAds.length * 6;
            this.ui.m_ads.m_list.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
            this.ui.displayObject.zOrder = 99999;
            this.ui.m_ads.m_btn_more.onClick(this, () => {
                this.ui.m_ads.m_btn_more.m_red.visible = false;
                if (this.ui.m_show.selectedIndex == 0) {
                    this.ui.m_show.selectedIndex = 1;
                }
                else if (this.ui.m_show.selectedIndex == 1) {
                    this.ui.m_show.selectedIndex = 0;
                }
                else if (this.ui.m_show.selectedIndex == 1) {
                    this.ui.m_show.selectedIndex = 2;
                }
                // this.ui.m_show.selectedIndex = (this.ui.m_show.selectedIndex + 1) % 2;
                if (this.ui.m_show.selectedIndex == 1) {
                    this.ui.m_ads.m_list.addSelection(0, true);
                    Laya.timer.loop(25, this, () => {
                        this.ui.m_ads.m_list.scrollPane.scrollDown(0.005, true);
                        if (this.ui.m_ads.m_list.scrollPane.isBottomMost) {
                            this.ui.m_ads.m_list.scrollPane.scrollTop(true);
                        }
                    });
                    // Laya.timer.once(500, this, () => {
                    //     this.ui.m_ads.m_btn_more.m_state.selectedIndex = 1;
                    // });
                }
                else {
                    // Laya.timer.once(500, this, () => {
                    //     this.ui.m_ads.m_btn_more.m_state.selectedIndex = 0;
                    Laya.timer.clearAll(this);
                    // });
                }
            });
            // this.ui.m_ads.m_btn_return.onClick(this, () => {
            //     this.ui.m_show.selectedIndex = 0;
            // });
            // this.ui.m_bg.onClick(this, () => {
            //     this.ui.m_show.selectedIndex = 0;
            // });
            let ads = [];
            this._cacheAds.forEach(adData => {
                let ad = {};
                ad.ad_id = adData.ad_id;
                ad.location_id = this._posId;
                ad.num = 1;
                ads.push(ad);
            });
            _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__["default"].instance.ReportShowAd(ads);
        }
    }
    _OnAdInited(posId) {
        if (posId != this._posId)
            return;
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__["default"].instance.adManager.GetADListByLocationId(this._posId);
        this.ui.m_ads.m_list.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
        this.ui.m_ads.m_list.numItems = this._cacheAds.length;
        this.ui.m_ads.m_list.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
    }
    _OnAdItemRender(index, adUI) {
        let adData = this._cacheAds[index % this._cacheAds.length];
        adUI.data = index % this._cacheAds.length;
        adUI.m_icon.m_icon.url = adData.ad_img;
        adUI.m_text_name.text = adData.ad_name;
        // adUI..text = `${adData.ad_count}?????????`;
        // adUI.m_dot_type.selectedIndex = adData.ad_dot;
    }
    showHalf() {
        // this.ui.m_show.selectedIndex = 1;
    }
    _OnClickGameItem(item) {
        let data = this._cacheAds[item.data];
        let navId = data.ad_appid;
        switch (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platform) {
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].Oppo:
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].Vivo:
                navId = data.ad_package;
                break;
            default:
                break;
        }
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.NavigateToApp(navId, data.ad_path, null, true, false, data.ad_id).then(() => {
            _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__["default"].instance.ReportClickAd(data.ad_id, this._posId, true, '????????????');
        }).catch(() => {
            _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__["default"].instance.ReportClickAd(data.ad_id, this._posId, false, '????????????');
        });
        ;
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/Cmp/View_Statement.ts":
/*!**********************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/Cmp/View_Statement.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_Statement; });
/* harmony import */ var _LTG_CommonUI_Data_LTG_Com_StatementData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../LTG_CommonUI/Data/LTG_Com_StatementData */ "./src/LTG_CommonUI/Data/LTG_Com_StatementData.ts");
/* harmony import */ var _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Commom/CommonSaveData */ "./src/LTGame/Commom/CommonSaveData.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _UI_LTGame_UI_Statement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/LTGame/UI_Statement */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_Statement.ts");





//**??????????????????  m___stm */
class View_Statement {
    constructor(ui) {
        this._ui = ui;
        this._Init();
    }
    static CreateView(tagUI) {
        if (tagUI == null)
            return null;
        if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Vivo && _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Oppo) {
            // ??????oppo??????
            console.log("Statement ???????????????");
            tagUI.dispose();
            return null;
        }
        if (tagUI instanceof _UI_LTGame_UI_Statement__WEBPACK_IMPORTED_MODULE_4__["default"]) {
            return new View_Statement(tagUI);
        }
        let uiInstance = _UI_LTGame_UI_Statement__WEBPACK_IMPORTED_MODULE_4__["default"].createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_Statement(uiInstance);
    }
    get ui() {
        return this._ui;
    }
    _Init() {
        this.ui.onClick(this, this.onShowStatement);
        if (!_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.statementSigned) {
            this.onShowStatement();
        }
    }
    onShowStatement() {
        let data = new _LTG_CommonUI_Data_LTG_Com_StatementData__WEBPACK_IMPORTED_MODULE_0__["LTG_Com_StatementData"]();
        data.onConfirm = Laya.Handler.create(this, () => {
            _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.statementSigned = true;
            _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].SaveToDisk();
        });
        data.Send();
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/Cmp/View_WxSideGames.ts":
/*!************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/Cmp/View_WxSideGames.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_WxSideGames; });
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");
/* harmony import */ var _UI_LTGame_UI_WxSideGames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/LTGame/UI_WxSideGames */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_WxSideGames.ts");
/* harmony import */ var _SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../SDK/Impl/SDK_YQ */ "./src/SDK/Impl/SDK_YQ.ts");






/**__wxSG 750*280  */
class View_WxSideGames {
    constructor(ui) {
        this.showingIndexs = [0, 1, 2, 3];
        this._posId = 0;
        this._ui = ui;
        this._Init();
    }
    static CreateView(tagUI) {
        if (tagUI == null)
            return null;
        // ??????????????????????????????????????????,???????????????,?????????????????????
        if (!_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.isSupportJumpOther && _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Web) {
            console.log('???????????????');
            tagUI.dispose();
            return null;
        }
        // if (LTPlatform.instance.platform != EPlatformType.WX && LTPlatform.instance.platform != EPlatformType.Web) {
        //     tagUI.dispose();
        //     return null;
        // }
        if (tagUI instanceof _UI_LTGame_UI_WxSideGames__WEBPACK_IMPORTED_MODULE_4__["default"]) {
            return new View_WxSideGames(tagUI);
        }
        let uiInstance = _UI_LTGame_UI_WxSideGames__WEBPACK_IMPORTED_MODULE_4__["default"].createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_WxSideGames(uiInstance);
    }
    get ui() {
        return this._ui;
    }
    _Init() {
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance instanceof _SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_5__["default"]) {
            this._posId = 5;
        }
        else {
            this._posId = 6;
        }
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.adManager.GetADListByLocationId(this._posId);
        if (this._cacheAds == null) {
            Laya.stage.on(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_3__["CommonEventId"].SELF_AD_INITED, this, this._OnAdInited);
            this.ui.visible = false;
        }
        else {
            Laya.timer.loop(5000, this, () => {
                this.refresh();
            });
            this.refresh();
            for (let i = 0; i < this.showingIndexs.length; i++) {
                this.renderItem(i, this.ui[`m_ad${i}`]);
                this.ui[`m_ad${i}`].onClick(this, () => this.clickItem(i));
            }
            let ads = [];
            this._cacheAds.forEach(adData => {
                let ad = {};
                ad.ad_id = adData.ad_id;
                ad.location_id = this._posId;
                ad.num = 1;
                ads.push(ad);
            });
            _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ReportShowAd(ads);
        }
    }
    refresh() {
        if (this.ui && !this.ui.isDisposed) {
            this.ui.visible = true;
            console.log('wxsg ??????');
            const first = this.showingIndexs[this.showingIndexs.length - 1];
            this.showingIndexs = [];
            for (let i = 0; i < 4; i++) {
                let ind = (first + i) % this._cacheAds.length;
                this.showingIndexs.push(ind);
                this.renderItem(i, this.ui[`m_ad${i}`]);
            }
        }
        else {
            Laya.timer.clearAll(this);
        }
    }
    _OnAdInited(posId) {
        if (posId != this._posId)
            return;
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.adManager.GetADListByLocationId(this._posId);
        // this.ui.m_list.itemRenderer = Laya.Handler.create(this, this.renderItem, null, false);
        // this.ui.m_list.numItems = this._cacheAds.length;
        // this.ui.m_list.on(fairygui.Events.CLICK_ITEM, this, this.clickItem);
        this.ui.visible = true;
    }
    clickItem(index) {
        let data = this._cacheAds[this.showingIndexs[index]];
        ;
        console.log(data.ad_name);
        _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ReportClickAd(data.ad_id, this._posId, true);
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.NavigateToApp(data.ad_appid, data.ad_path, null, true, false, data.ad_id);
    }
    renderItem(index, item) {
        let ind = this.showingIndexs[index];
        let data = this._cacheAds[ind];
        item.m_title.text = data.ad_name;
        item.m_icon.m_icon.url = data.ad_img;
        item.m_red.visible = data.ad_dot == 1;
        item.m_shake.play();
        // item.onClick(item, () => this.clickItem(index));
        // let ad: any = {};
        // ad.ad_id = data.ad_id;
        // ad.location_id = 5;
        // ad.num = 1;
        // LTSDK.instance.RecordShowAd([ad]);
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/LTGameBinder.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/LTGameBinder.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTGameBinder; });
/* harmony import */ var _UI_hot_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI_hot_game */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_hot_game.ts");
/* harmony import */ var _UI_NativeInPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI_NativeInPage */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeInPage.ts");
/* harmony import */ var _UI_iconLongComp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI_iconLongComp */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_iconLongComp.ts");
/* harmony import */ var _UI_OpenAds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI_OpenAds */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_OpenAds.ts");
/* harmony import */ var _UI_NativeBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI_NativeBanner */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeBanner.ts");
/* harmony import */ var _UI_NativeBannerComp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI_NativeBannerComp */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeBannerComp.ts");
/* harmony import */ var _UI_view_game_icon1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UI_view_game_icon1 */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_game_icon1.ts");
/* harmony import */ var _UI_view_end_games__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UI_view_end_games */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_end_games.ts");
/* harmony import */ var _UI_view_game_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UI_view_game_icon */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_game_icon.ts");
/* harmony import */ var _UI_NativeInterstital__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UI_NativeInterstital */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeInterstital.ts");
/* harmony import */ var _UI_native_inter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./UI_native_inter */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_native_inter.ts");
/* harmony import */ var _UI_view_item_game164__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./UI_view_item_game164 */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_item_game164.ts");
/* harmony import */ var _UI_ShareResult__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./UI_ShareResult */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_ShareResult.ts");
/* harmony import */ var _UI_FlyPanel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./UI_FlyPanel */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FlyPanel.ts");
/* harmony import */ var _UI_view_fly_coin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./UI_view_fly_coin */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_fly_coin.ts");
/* harmony import */ var _UI_NativeIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./UI_NativeIcon */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeIcon.ts");
/* harmony import */ var _UI_Statement__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./UI_Statement */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_Statement.ts");
/* harmony import */ var _UI_CommonLockScreen__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./UI_CommonLockScreen */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonLockScreen.ts");
/* harmony import */ var _UI_End3X3Ad__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./UI_End3X3Ad */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_End3X3Ad.ts");
/* harmony import */ var _UI_SideGames__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./UI_SideGames */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_SideGames.ts");
/* harmony import */ var _UI_CommonEndSliderADs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./UI_CommonEndSliderADs */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonEndSliderADs.ts");
/* harmony import */ var _UI_btn_normal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./UI_btn_normal */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_btn_normal.ts");
/* harmony import */ var _UI_Channel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./UI_Channel */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_Channel.ts");
/* harmony import */ var _UI_HotGames__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./UI_HotGames */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_HotGames.ts");
/* harmony import */ var _UI_item_hotgames__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./UI_item_hotgames */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_item_hotgames.ts");
/* harmony import */ var _UI_CommonLoad__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./UI_CommonLoad */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonLoad.ts");
/* harmony import */ var _UI_view_load__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./UI_view_load */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_load.ts");
/* harmony import */ var _UI_AdInpage__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./UI_AdInpage */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_AdInpage.ts");
/* harmony import */ var _UI_side_ads1__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./UI_side_ads1 */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_side_ads1.ts");
/* harmony import */ var _UI_MiniGames__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./UI_MiniGames */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_MiniGames.ts");
/* harmony import */ var _UI_rank_item__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./UI_rank_item */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_rank_item.ts");
/* harmony import */ var _UI_ttgame_items__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./UI_ttgame_items */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_ttgame_items.ts");
/* harmony import */ var _UI_mid_banner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./UI_mid_banner */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_mid_banner.ts");
/* harmony import */ var _UI_NativeIconLong__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./UI_NativeIconLong */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeIconLong.ts");
/* harmony import */ var _UI_FakeBanner_V__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./UI_FakeBanner_V */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FakeBanner_V.ts");
/* harmony import */ var _UI_CommonToast__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./UI_CommonToast */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonToast.ts");
/* harmony import */ var _UI_view_toast__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./UI_view_toast */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_toast.ts");
/* harmony import */ var _UI_FakeRewardVideo__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./UI_FakeRewardVideo */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FakeRewardVideo.ts");
/* harmony import */ var _UI_FakeInterstital__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./UI_FakeInterstital */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FakeInterstital.ts");
/* harmony import */ var _UI_EndSlideGames__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./UI_EndSlideGames */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_EndSlideGames.ts");
/* harmony import */ var _UI_slideAds__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./UI_slideAds */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_slideAds.ts");
/* harmony import */ var _UI_view_item_game__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./UI_view_item_game */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_item_game.ts");
/* harmony import */ var _UI_view_item_game140__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./UI_view_item_game140 */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_item_game140.ts");
/* harmony import */ var _UI_ImageBanner__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./UI_ImageBanner */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_ImageBanner.ts");
/* harmony import */ var _UI_btnGames__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./UI_btnGames */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_btnGames.ts");
/* harmony import */ var _UI_SelfBanner__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./UI_SelfBanner */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_SelfBanner.ts");
/* harmony import */ var _UI_GameCenter__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./UI_GameCenter */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_GameCenter.ts");
/* harmony import */ var _UI_item_game__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./UI_item_game */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_item_game.ts");
/* harmony import */ var _UI_item_gameBig__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./UI_item_gameBig */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_item_gameBig.ts");
/* harmony import */ var _UI_GameIconF__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./UI_GameIconF */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_GameIconF.ts");
/* harmony import */ var _UI_GameBox__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./UI_GameBox */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_GameBox.ts");
/* harmony import */ var _UI_item_gameSmall__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./UI_item_gameSmall */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_item_gameSmall.ts");
/* harmony import */ var _UI_GameCenterBig__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./UI_GameCenterBig */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_GameCenterBig.ts");
/* harmony import */ var _UI_item_gameMax__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./UI_item_gameMax */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_item_gameMax.ts");
/* harmony import */ var _UI_bottomGames__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./UI_bottomGames */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_bottomGames.ts");
/* harmony import */ var _UI_view_item_game100__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./UI_view_item_game100 */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_item_game100.ts");
/* harmony import */ var _UI_sliderADs__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./UI_sliderADs */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_sliderADs.ts");
/* harmony import */ var _UI_btn_scaler_yellow__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./UI_btn_scaler_yellow */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_btn_scaler_yellow.ts");
/* harmony import */ var _UI_btn_red_scale__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./UI_btn_red_scale */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_btn_red_scale.ts");
/* harmony import */ var _UI_WxSideGames__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./UI_WxSideGames */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_WxSideGames.ts");
/* harmony import */ var _UI_view_sharegames_big__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./UI_view_sharegames_big */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_sharegames_big.ts");
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/





























































class LTGameBinder {
    static bindAll() {
        fgui.UIObjectFactory.setExtension(_UI_hot_game__WEBPACK_IMPORTED_MODULE_0__["default"].URL, _UI_hot_game__WEBPACK_IMPORTED_MODULE_0__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_NativeInPage__WEBPACK_IMPORTED_MODULE_1__["default"].URL, _UI_NativeInPage__WEBPACK_IMPORTED_MODULE_1__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_iconLongComp__WEBPACK_IMPORTED_MODULE_2__["default"].URL, _UI_iconLongComp__WEBPACK_IMPORTED_MODULE_2__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_OpenAds__WEBPACK_IMPORTED_MODULE_3__["default"].URL, _UI_OpenAds__WEBPACK_IMPORTED_MODULE_3__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_NativeBanner__WEBPACK_IMPORTED_MODULE_4__["default"].URL, _UI_NativeBanner__WEBPACK_IMPORTED_MODULE_4__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_NativeBannerComp__WEBPACK_IMPORTED_MODULE_5__["default"].URL, _UI_NativeBannerComp__WEBPACK_IMPORTED_MODULE_5__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_view_game_icon1__WEBPACK_IMPORTED_MODULE_6__["default"].URL, _UI_view_game_icon1__WEBPACK_IMPORTED_MODULE_6__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_view_end_games__WEBPACK_IMPORTED_MODULE_7__["default"].URL, _UI_view_end_games__WEBPACK_IMPORTED_MODULE_7__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_view_game_icon__WEBPACK_IMPORTED_MODULE_8__["default"].URL, _UI_view_game_icon__WEBPACK_IMPORTED_MODULE_8__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_NativeInterstital__WEBPACK_IMPORTED_MODULE_9__["default"].URL, _UI_NativeInterstital__WEBPACK_IMPORTED_MODULE_9__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_native_inter__WEBPACK_IMPORTED_MODULE_10__["default"].URL, _UI_native_inter__WEBPACK_IMPORTED_MODULE_10__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_view_item_game164__WEBPACK_IMPORTED_MODULE_11__["default"].URL, _UI_view_item_game164__WEBPACK_IMPORTED_MODULE_11__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_ShareResult__WEBPACK_IMPORTED_MODULE_12__["default"].URL, _UI_ShareResult__WEBPACK_IMPORTED_MODULE_12__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_FlyPanel__WEBPACK_IMPORTED_MODULE_13__["default"].URL, _UI_FlyPanel__WEBPACK_IMPORTED_MODULE_13__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_view_fly_coin__WEBPACK_IMPORTED_MODULE_14__["default"].URL, _UI_view_fly_coin__WEBPACK_IMPORTED_MODULE_14__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_NativeIcon__WEBPACK_IMPORTED_MODULE_15__["default"].URL, _UI_NativeIcon__WEBPACK_IMPORTED_MODULE_15__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_Statement__WEBPACK_IMPORTED_MODULE_16__["default"].URL, _UI_Statement__WEBPACK_IMPORTED_MODULE_16__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_CommonLockScreen__WEBPACK_IMPORTED_MODULE_17__["default"].URL, _UI_CommonLockScreen__WEBPACK_IMPORTED_MODULE_17__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_End3X3Ad__WEBPACK_IMPORTED_MODULE_18__["default"].URL, _UI_End3X3Ad__WEBPACK_IMPORTED_MODULE_18__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_SideGames__WEBPACK_IMPORTED_MODULE_19__["default"].URL, _UI_SideGames__WEBPACK_IMPORTED_MODULE_19__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_CommonEndSliderADs__WEBPACK_IMPORTED_MODULE_20__["default"].URL, _UI_CommonEndSliderADs__WEBPACK_IMPORTED_MODULE_20__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_btn_normal__WEBPACK_IMPORTED_MODULE_21__["default"].URL, _UI_btn_normal__WEBPACK_IMPORTED_MODULE_21__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_Channel__WEBPACK_IMPORTED_MODULE_22__["default"].URL, _UI_Channel__WEBPACK_IMPORTED_MODULE_22__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_HotGames__WEBPACK_IMPORTED_MODULE_23__["default"].URL, _UI_HotGames__WEBPACK_IMPORTED_MODULE_23__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_item_hotgames__WEBPACK_IMPORTED_MODULE_24__["default"].URL, _UI_item_hotgames__WEBPACK_IMPORTED_MODULE_24__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_CommonLoad__WEBPACK_IMPORTED_MODULE_25__["default"].URL, _UI_CommonLoad__WEBPACK_IMPORTED_MODULE_25__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_view_load__WEBPACK_IMPORTED_MODULE_26__["default"].URL, _UI_view_load__WEBPACK_IMPORTED_MODULE_26__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_AdInpage__WEBPACK_IMPORTED_MODULE_27__["default"].URL, _UI_AdInpage__WEBPACK_IMPORTED_MODULE_27__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_side_ads1__WEBPACK_IMPORTED_MODULE_28__["default"].URL, _UI_side_ads1__WEBPACK_IMPORTED_MODULE_28__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_MiniGames__WEBPACK_IMPORTED_MODULE_29__["default"].URL, _UI_MiniGames__WEBPACK_IMPORTED_MODULE_29__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_rank_item__WEBPACK_IMPORTED_MODULE_30__["default"].URL, _UI_rank_item__WEBPACK_IMPORTED_MODULE_30__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_ttgame_items__WEBPACK_IMPORTED_MODULE_31__["default"].URL, _UI_ttgame_items__WEBPACK_IMPORTED_MODULE_31__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_mid_banner__WEBPACK_IMPORTED_MODULE_32__["default"].URL, _UI_mid_banner__WEBPACK_IMPORTED_MODULE_32__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_NativeIconLong__WEBPACK_IMPORTED_MODULE_33__["default"].URL, _UI_NativeIconLong__WEBPACK_IMPORTED_MODULE_33__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_FakeBanner_V__WEBPACK_IMPORTED_MODULE_34__["default"].URL, _UI_FakeBanner_V__WEBPACK_IMPORTED_MODULE_34__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_CommonToast__WEBPACK_IMPORTED_MODULE_35__["default"].URL, _UI_CommonToast__WEBPACK_IMPORTED_MODULE_35__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_view_toast__WEBPACK_IMPORTED_MODULE_36__["default"].URL, _UI_view_toast__WEBPACK_IMPORTED_MODULE_36__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_FakeRewardVideo__WEBPACK_IMPORTED_MODULE_37__["default"].URL, _UI_FakeRewardVideo__WEBPACK_IMPORTED_MODULE_37__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_FakeInterstital__WEBPACK_IMPORTED_MODULE_38__["default"].URL, _UI_FakeInterstital__WEBPACK_IMPORTED_MODULE_38__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_EndSlideGames__WEBPACK_IMPORTED_MODULE_39__["default"].URL, _UI_EndSlideGames__WEBPACK_IMPORTED_MODULE_39__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_slideAds__WEBPACK_IMPORTED_MODULE_40__["default"].URL, _UI_slideAds__WEBPACK_IMPORTED_MODULE_40__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_view_item_game__WEBPACK_IMPORTED_MODULE_41__["default"].URL, _UI_view_item_game__WEBPACK_IMPORTED_MODULE_41__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_view_item_game140__WEBPACK_IMPORTED_MODULE_42__["default"].URL, _UI_view_item_game140__WEBPACK_IMPORTED_MODULE_42__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_ImageBanner__WEBPACK_IMPORTED_MODULE_43__["default"].URL, _UI_ImageBanner__WEBPACK_IMPORTED_MODULE_43__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_btnGames__WEBPACK_IMPORTED_MODULE_44__["default"].URL, _UI_btnGames__WEBPACK_IMPORTED_MODULE_44__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_SelfBanner__WEBPACK_IMPORTED_MODULE_45__["default"].URL, _UI_SelfBanner__WEBPACK_IMPORTED_MODULE_45__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_GameCenter__WEBPACK_IMPORTED_MODULE_46__["default"].URL, _UI_GameCenter__WEBPACK_IMPORTED_MODULE_46__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_item_game__WEBPACK_IMPORTED_MODULE_47__["default"].URL, _UI_item_game__WEBPACK_IMPORTED_MODULE_47__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_item_gameBig__WEBPACK_IMPORTED_MODULE_48__["default"].URL, _UI_item_gameBig__WEBPACK_IMPORTED_MODULE_48__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_GameIconF__WEBPACK_IMPORTED_MODULE_49__["default"].URL, _UI_GameIconF__WEBPACK_IMPORTED_MODULE_49__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_GameBox__WEBPACK_IMPORTED_MODULE_50__["default"].URL, _UI_GameBox__WEBPACK_IMPORTED_MODULE_50__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_item_gameSmall__WEBPACK_IMPORTED_MODULE_51__["default"].URL, _UI_item_gameSmall__WEBPACK_IMPORTED_MODULE_51__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_GameCenterBig__WEBPACK_IMPORTED_MODULE_52__["default"].URL, _UI_GameCenterBig__WEBPACK_IMPORTED_MODULE_52__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_item_gameMax__WEBPACK_IMPORTED_MODULE_53__["default"].URL, _UI_item_gameMax__WEBPACK_IMPORTED_MODULE_53__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_bottomGames__WEBPACK_IMPORTED_MODULE_54__["default"].URL, _UI_bottomGames__WEBPACK_IMPORTED_MODULE_54__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_view_item_game100__WEBPACK_IMPORTED_MODULE_55__["default"].URL, _UI_view_item_game100__WEBPACK_IMPORTED_MODULE_55__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_sliderADs__WEBPACK_IMPORTED_MODULE_56__["default"].URL, _UI_sliderADs__WEBPACK_IMPORTED_MODULE_56__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_btn_scaler_yellow__WEBPACK_IMPORTED_MODULE_57__["default"].URL, _UI_btn_scaler_yellow__WEBPACK_IMPORTED_MODULE_57__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_btn_red_scale__WEBPACK_IMPORTED_MODULE_58__["default"].URL, _UI_btn_red_scale__WEBPACK_IMPORTED_MODULE_58__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_WxSideGames__WEBPACK_IMPORTED_MODULE_59__["default"].URL, _UI_WxSideGames__WEBPACK_IMPORTED_MODULE_59__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_view_sharegames_big__WEBPACK_IMPORTED_MODULE_60__["default"].URL, _UI_view_sharegames_big__WEBPACK_IMPORTED_MODULE_60__["default"]);
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_AdInpage.ts":
/*!*************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_AdInpage.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_AdInpage; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_AdInpage extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "AdInpage"));
    }
    onConstruct() {
        this.m_icon = (this.getChildAt(1));
        this.m_tag = (this.getChildAt(2));
        this.m_img = (this.getChildAt(3));
        this.m_title = (this.getChildAt(4));
        this.m_desc = (this.getChildAt(5));
        this.m_tagtxt = (this.getChildAt(6));
        this.m_sourceTxt = (this.getChildAt(7));
    }
}
UI_AdInpage.URL = "ui://75kiu87kn22eik";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_Channel.ts":
/*!************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_Channel.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_Channel; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_Channel extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "Channel"));
    }
    onConstruct() {
        this.m_state = this.getControllerAt(0);
        this.m_txt_input = (this.getChildAt(2));
        this.m_txt_show = (this.getChildAt(3));
        this.m_btn_yes = (this.getChildAt(4));
        this.m_btn_close = (this.getChildAt(5));
        this.m_btn_rebind = (this.getChildAt(6));
    }
}
UI_Channel.URL = "ui://75kiu87kmdx8ip";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonEndSliderADs.ts":
/*!***********************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonEndSliderADs.ts ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_CommonEndSliderADs; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_CommonEndSliderADs extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "CommonEndSliderADs"));
    }
    onConstruct() {
        this.m_list = (this.getChildAt(1));
    }
}
UI_CommonEndSliderADs.URL = "ui://75kiu87kj9at6j";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonLoad.ts":
/*!***************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonLoad.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_CommonLoad; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_CommonLoad extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "CommonLoad"));
    }
    onConstruct() {
        this.m_big_bg = (this.getChildAt(0));
        this.m_small_bg = (this.getChildAt(1));
        this.m_load = (this.getChildAt(2));
    }
}
UI_CommonLoad.URL = "ui://75kiu87kmhasc";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonLockScreen.ts":
/*!*********************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonLockScreen.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_CommonLockScreen; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_CommonLockScreen extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "CommonLockScreen"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
    }
}
UI_CommonLockScreen.URL = "ui://75kiu87ki2wq2s";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonToast.ts":
/*!****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonToast.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_CommonToast; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_CommonToast extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "CommonToast"));
    }
    onConstruct() {
        this.m_list_toast = (this.getChildAt(0));
    }
}
UI_CommonToast.URL = "ui://75kiu87kovsy7";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_End3X3Ad.ts":
/*!*************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_End3X3Ad.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_End3X3Ad; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_End3X3Ad extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "End3X3Ad"));
    }
    onConstruct() {
        this.m_list = (this.getChildAt(1));
    }
}
UI_End3X3Ad.URL = "ui://75kiu87ki816ae";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_EndSlideGames.ts":
/*!******************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_EndSlideGames.ts ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_EndSlideGames; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_EndSlideGames extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "EndSlideGames"));
    }
    onConstruct() {
        this.m_ad = (this.getChildAt(0));
    }
}
UI_EndSlideGames.URL = "ui://75kiu87kp2ld6k";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FakeBanner_V.ts":
/*!*****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FakeBanner_V.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_FakeBanner_V; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_FakeBanner_V extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "FakeBanner_V"));
    }
    onConstruct() {
        this.m_banner = (this.getChildAt(0));
    }
}
UI_FakeBanner_V.URL = "ui://75kiu87kovsy4";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FakeInterstital.ts":
/*!********************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FakeInterstital.ts ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_FakeInterstital; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_FakeInterstital extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "FakeInterstital"));
    }
    onConstruct() {
        this.m_btn_close = (this.getChildAt(2));
    }
}
UI_FakeInterstital.URL = "ui://75kiu87kovsyb";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FakeRewardVideo.ts":
/*!********************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FakeRewardVideo.ts ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_FakeRewardVideo; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_FakeRewardVideo extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "FakeRewardVideo"));
    }
    onConstruct() {
        this.m_btn_reward = (this.getChildAt(1));
        this.m_btn_skip = (this.getChildAt(3));
    }
}
UI_FakeRewardVideo.URL = "ui://75kiu87kovsy9";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FlyPanel.ts":
/*!*************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FlyPanel.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_FlyPanel; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_FlyPanel extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "FlyPanel"));
    }
    onConstruct() {
        this.m_test = (this.getChildAt(0));
    }
}
UI_FlyPanel.URL = "ui://75kiu87kh75rf";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_GameBox.ts":
/*!************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_GameBox.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_GameBox; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_GameBox extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "GameBox"));
    }
    onConstruct() {
        this.m_btn_close = (this.getChildAt(2));
        this.m_list = (this.getChildAt(3));
    }
}
UI_GameBox.URL = "ui://75kiu87kr3yg7h";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_GameCenter.ts":
/*!***************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_GameCenter.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_GameCenter; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_GameCenter extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "GameCenter"));
    }
    onConstruct() {
        this.m_topList = (this.getChildAt(5));
        this.m_centerList = (this.getChildAt(6));
        this.m_btn_close = (this.getChildAt(7));
        this.m_anim_enter = this.getTransitionAt(0);
    }
}
UI_GameCenter.URL = "ui://75kiu87kr3yg75";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_GameCenterBig.ts":
/*!******************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_GameCenterBig.ts ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_GameCenterBig; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_GameCenterBig extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "GameCenterBig"));
    }
    onConstruct() {
        this.m_centerList = (this.getChildAt(2));
        this.m_btn_close = (this.getChildAt(3));
        this.m_anim_enter = this.getTransitionAt(0);
    }
}
UI_GameCenterBig.URL = "ui://75kiu87krfowhj";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_GameIconF.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_GameIconF.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_GameIconF; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_GameIconF extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "GameIconF"));
    }
    onConstruct() {
        this.m_mask = (this.getChildAt(0));
        this.m_icon = (this.getChildAt(1));
        this.m_title = (this.getChildAt(2));
    }
}
UI_GameIconF.URL = "ui://75kiu87kr3yg7g";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_HotGames.ts":
/*!*************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_HotGames.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_HotGames; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_HotGames extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "HotGames"));
    }
    onConstruct() {
        this.m_list = (this.getChildAt(2));
    }
}
UI_HotGames.URL = "ui://75kiu87kmdx8iv";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_ImageBanner.ts":
/*!****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_ImageBanner.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_ImageBanner; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_ImageBanner extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "ImageBanner"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
        this.m_img_banner = (this.getChildAt(1));
        this.m_img_icon = (this.getChildAt(2));
        this.m_img_adnotice = (this.getChildAt(3));
        this.m_btn_close = (this.getChildAt(4));
    }
}
UI_ImageBanner.URL = "ui://75kiu87kqdeh5t";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_MiniGames.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_MiniGames.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_MiniGames; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_MiniGames extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "MiniGames"));
    }
    onConstruct() {
        this.m_btn_close = (this.getChildAt(1));
        this.m_game_hot = (this.getChildAt(2));
        this.m_game_new = (this.getChildAt(3));
        this.m_mid_banner = (this.getChildAt(4));
        this.m_list = (this.getChildAt(6));
    }
}
UI_MiniGames.URL = "ui://75kiu87knmlkie";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeBanner.ts":
/*!*****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeBanner.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_NativeBanner; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_NativeBanner extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "NativeBanner"));
    }
    onConstruct() {
        this.m_ad = (this.getChildAt(0));
    }
}
UI_NativeBanner.URL = "ui://75kiu87ka24yil";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeBannerComp.ts":
/*!*********************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeBannerComp.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_NativeBannerComp; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_NativeBannerComp extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "NativeBannerComp"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
        this.m_img = (this.getChildAt(1));
        this.m_icon = (this.getChildAt(2));
        this.m_title = (this.getChildAt(3));
        this.m_desc = (this.getChildAt(4));
        this.m_btn_close = (this.getChildAt(5));
    }
}
UI_NativeBannerComp.URL = "ui://75kiu87ka24yim";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeIcon.ts":
/*!***************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeIcon.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_NativeIcon; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_NativeIcon extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "NativeIcon"));
    }
    onConstruct() {
        this.m_icon_img = (this.getChildAt(0));
        this.m_icon_tip = (this.getChildAt(1));
    }
}
UI_NativeIcon.URL = "ui://75kiu87kh8ea5w";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeIconLong.ts":
/*!*******************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeIconLong.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_NativeIconLong; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_NativeIconLong extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "NativeIconLong"));
    }
    onConstruct() {
        this.m_bg1 = (this.getChildAt(0));
        this.m_ad = (this.getChildAt(1));
        this.m_btn_close = (this.getChildAt(2));
    }
}
UI_NativeIconLong.URL = "ui://75kiu87kocvx6t";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeInPage.ts":
/*!*****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeInPage.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_NativeInPage; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_NativeInPage extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "NativeInPage"));
    }
    onConstruct() {
        this.m_btn_pos = this.getControllerAt(0);
        this.m_ad = (this.getChildAt(0));
        this.m_btn_close = (this.getChildAt(1));
        this.m_btn_clickad = (this.getChildAt(2));
        this.m_btn_clickadbg = (this.getChildAt(3));
        this.m_t0 = this.getTransitionAt(0);
    }
}
UI_NativeInPage.URL = "ui://75kiu87k92486v";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeInterstital.ts":
/*!**********************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeInterstital.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_NativeInterstital; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_NativeInterstital extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "NativeInterstital"));
    }
    onConstruct() {
        this.m_ad = (this.getChildAt(1));
        this.m_btn_close = (this.getChildAt(2));
        this.m_btn_ok = (this.getChildAt(3));
        this.m_t0 = this.getTransitionAt(0);
    }
}
UI_NativeInterstital.URL = "ui://75kiu87kctnoiy";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_OpenAds.ts":
/*!************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_OpenAds.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_OpenAds; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_OpenAds extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "OpenAds"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
        this.m_centerList = (this.getChildAt(2));
        this.m_btn_close = (this.getChildAt(3));
    }
}
UI_OpenAds.URL = "ui://75kiu87k9vu5ag";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_SelfBanner.ts":
/*!***************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_SelfBanner.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_SelfBanner; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_SelfBanner extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "SelfBanner"));
    }
    onConstruct() {
        this.m_banner = (this.getChildAt(0));
    }
}
UI_SelfBanner.URL = "ui://75kiu87kr3yg74";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_ShareResult.ts":
/*!****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_ShareResult.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_ShareResult; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_ShareResult extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "ShareResult"));
    }
    onConstruct() {
        this.m_txt_show = (this.getChildAt(2));
        this.m_btn_yes = (this.getChildAt(3));
        this.m_btn_close = (this.getChildAt(4));
    }
}
UI_ShareResult.URL = "ui://75kiu87kgn6shg";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_SideGames.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_SideGames.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_SideGames; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_SideGames extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "SideGames"));
    }
    onConstruct() {
        this.m_show = this.getControllerAt(0);
        this.m_ads = (this.getChildAt(1));
        this.m_t0 = this.getTransitionAt(0);
    }
}
UI_SideGames.URL = "ui://75kiu87kii3nhl";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_Statement.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_Statement.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_Statement; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_Statement extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "Statement"));
    }
    onConstruct() {
        this.m_type = this.getControllerAt(0);
    }
}
UI_Statement.URL = "ui://75kiu87khcckj2";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_WxSideGames.ts":
/*!****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_WxSideGames.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_WxSideGames; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_WxSideGames extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "WxSideGames"));
    }
    onConstruct() {
        this.m_ad0 = (this.getChildAt(0));
        this.m_ad2 = (this.getChildAt(1));
        this.m_ad1 = (this.getChildAt(2));
        this.m_ad3 = (this.getChildAt(3));
    }
}
UI_WxSideGames.URL = "ui://75kiu87kw3j1jc";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_bottomGames.ts":
/*!****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_bottomGames.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_bottomGames; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_bottomGames extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "bottomGames"));
    }
    onConstruct() {
        this.m_list = (this.getChildAt(1));
        this.m_ad = (this.getChildAt(2));
    }
}
UI_bottomGames.URL = "ui://75kiu87kt3oybk";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_btnGames.ts":
/*!*************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_btnGames.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_btnGames; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_btnGames extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "btnGames"));
    }
    onConstruct() {
        this.m_red = (this.getChildAt(1));
        this.m_t0 = this.getTransitionAt(0);
    }
}
UI_btnGames.URL = "ui://75kiu87kr1gt70";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_btn_normal.ts":
/*!***************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_btn_normal.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_btn_normal; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_btn_normal extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "btn_normal"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
        this.m_t0 = this.getTransitionAt(0);
    }
}
UI_btn_normal.URL = "ui://75kiu87kl2ax4l";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_btn_red_scale.ts":
/*!******************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_btn_red_scale.ts ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_btn_red_scale; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_btn_red_scale extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "btn_red_scale"));
    }
    onConstruct() {
        this.m_style = this.getControllerAt(1);
        this.m_title_icon = (this.getChildAt(2));
        this.m_t0 = this.getTransitionAt(0);
    }
}
UI_btn_red_scale.URL = "ui://75kiu87kvo5ih5";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_btn_scaler_yellow.ts":
/*!**********************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_btn_scaler_yellow.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_btn_scaler_yellow; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_btn_scaler_yellow extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "btn_scaler_yellow"));
    }
    onConstruct() {
        this.m_title_icon = (this.getChildAt(2));
        this.m_t0 = this.getTransitionAt(0);
    }
}
UI_btn_scaler_yellow.URL = "ui://75kiu87kvo5igy";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_hot_game.ts":
/*!*************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_hot_game.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_hot_game; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_hot_game extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "hot_game"));
    }
    onConstruct() {
        this.m_ic = (this.getChildAt(1));
        this.m_anim_idle = this.getTransitionAt(0);
    }
}
UI_hot_game.URL = "ui://75kiu87k74v84g";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_iconLongComp.ts":
/*!*****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_iconLongComp.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_iconLongComp; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_iconLongComp extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "iconLongComp"));
    }
    onConstruct() {
        this.m_icon = (this.getChildAt(0));
        this.m_tag = (this.getChildAt(1));
        this.m_title = (this.getChildAt(2));
        this.m_desc = (this.getChildAt(3));
    }
}
UI_iconLongComp.URL = "ui://75kiu87k92486x";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_item_game.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_item_game.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_item_game; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_item_game extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "item_game"));
    }
    onConstruct() {
        this.m_icon = (this.getChildAt(1));
        this.m_title = (this.getChildAt(2));
        this.m_red = (this.getChildAt(3));
    }
}
UI_item_game.URL = "ui://75kiu87kr3yg7b";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_item_gameBig.ts":
/*!*****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_item_gameBig.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_item_gameBig; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_item_gameBig extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "item_gameBig"));
    }
    onConstruct() {
        this.m_icon = (this.getChildAt(1));
        this.m_title = (this.getChildAt(2));
        this.m_player = (this.getChildAt(3));
        this.m_red = (this.getChildAt(4));
    }
}
UI_item_gameBig.URL = "ui://75kiu87kr3yg7d";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_item_gameMax.ts":
/*!*****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_item_gameMax.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_item_gameMax; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_item_gameMax extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "item_gameMax"));
    }
    onConstruct() {
        this.m_icon = (this.getChildAt(1));
        this.m_title = (this.getChildAt(2));
        this.m_player = (this.getChildAt(3));
        this.m_red = (this.getChildAt(4));
    }
}
UI_item_gameMax.URL = "ui://75kiu87krfowhk";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_item_gameSmall.ts":
/*!*******************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_item_gameSmall.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_item_gameSmall; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_item_gameSmall extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "item_gameSmall"));
    }
    onConstruct() {
        this.m_icon = (this.getChildAt(1));
        this.m_title = (this.getChildAt(2));
        this.m_red = (this.getChildAt(3));
        this.m_shake = this.getTransitionAt(0);
    }
}
UI_item_gameSmall.URL = "ui://75kiu87kr3yg7i";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_item_hotgames.ts":
/*!******************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_item_hotgames.ts ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_item_hotgames; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_item_hotgames extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "item_hotgames"));
    }
    onConstruct() {
        this.m_icon = (this.getChildAt(0));
        this.m_txt_name = (this.getChildAt(1));
    }
}
UI_item_hotgames.URL = "ui://75kiu87kmdx8iw";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_mid_banner.ts":
/*!***************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_mid_banner.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_mid_banner; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_mid_banner extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "mid_banner"));
    }
    onConstruct() {
        this.m_icon = (this.getChildAt(0));
    }
}
UI_mid_banner.URL = "ui://75kiu87knmlkij";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_native_inter.ts":
/*!*****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_native_inter.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_native_inter; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_native_inter extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "native_inter"));
    }
    onConstruct() {
        this.m_img = (this.getChildAt(2));
        this.m_btn_ad = (this.getChildAt(3));
        this.m_txt_title = (this.getChildAt(4));
        this.m_txt_desc = (this.getChildAt(5));
        this.m_tag = (this.getChildAt(7));
    }
}
UI_native_inter.URL = "ui://75kiu87kctnoj1";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_rank_item.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_rank_item.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_rank_item; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_rank_item extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "rank_item"));
    }
    onConstruct() {
        this.m_rank_bg = (this.getChildAt(0));
        this.m_icon = (this.getChildAt(1));
        this.m_rank_title = (this.getChildAt(2));
        this.m_name = (this.getChildAt(3));
    }
}
UI_rank_item.URL = "ui://75kiu87knmlkif";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_side_ads1.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_side_ads1.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_side_ads1; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_side_ads1 extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "side_ads1"));
    }
    onConstruct() {
        this.m_list = (this.getChildAt(1));
        this.m_btn_more = (this.getChildAt(2));
    }
}
UI_side_ads1.URL = "ui://75kiu87kn6nfi1";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_slideAds.ts":
/*!*************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_slideAds.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_slideAds; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_slideAds extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "slideAds"));
    }
    onConstruct() {
        this.m_list0 = (this.getChildAt(0));
        this.m_list1 = (this.getChildAt(1));
        this.m_list2 = (this.getChildAt(2));
    }
}
UI_slideAds.URL = "ui://75kiu87kp2ld6n";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_sliderADs.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_sliderADs.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_sliderADs; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_sliderADs extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "sliderADs"));
    }
    onConstruct() {
        this.m_list = (this.getChildAt(1));
    }
}
UI_sliderADs.URL = "ui://75kiu87kulgb5x";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_ttgame_items.ts":
/*!*****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_ttgame_items.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_ttgame_items; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_ttgame_items extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "ttgame_items"));
    }
    onConstruct() {
        this.m_dot = this.getControllerAt(0);
        this.m_icon = (this.getChildAt(0));
        this.m_name = (this.getChildAt(1));
    }
}
UI_ttgame_items.URL = "ui://75kiu87knmlkii";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_end_games.ts":
/*!*******************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_end_games.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_view_end_games; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_view_end_games extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "view_end_games"));
    }
    onConstruct() {
        this.m_sharegames = (this.getChildAt(0));
    }
}
UI_view_end_games.URL = "ui://75kiu87kbg001k";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_fly_coin.ts":
/*!******************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_fly_coin.ts ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_view_fly_coin; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_view_fly_coin extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "view_fly_coin"));
    }
    onConstruct() {
        this.m_icon = (this.getChildAt(0));
    }
}
UI_view_fly_coin.URL = "ui://75kiu87kh75rh";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_game_icon.ts":
/*!*******************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_game_icon.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_view_game_icon; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_view_game_icon extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "view_game_icon"));
    }
    onConstruct() {
        this.m_mask = (this.getChildAt(1));
        this.m_icon = (this.getChildAt(2));
    }
}
UI_view_game_icon.URL = "ui://75kiu87kcqevgw";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_game_icon1.ts":
/*!********************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_game_icon1.ts ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_view_game_icon1; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_view_game_icon1 extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "view_game_icon1"));
    }
    onConstruct() {
        this.m_mask = (this.getChildAt(1));
        this.m_icon = (this.getChildAt(2));
    }
}
UI_view_game_icon1.URL = "ui://75kiu87kbg001h";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_item_game.ts":
/*!*******************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_item_game.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_view_item_game; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_view_item_game extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "view_item_game"));
    }
    onConstruct() {
        this.m_icon = (this.getChildAt(1));
        this.m_text_name = (this.getChildAt(2));
    }
}
UI_view_item_game.URL = "ui://75kiu87kp2ld6o";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_item_game100.ts":
/*!**********************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_item_game100.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_view_item_game100; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_view_item_game100 extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "view_item_game100"));
    }
    onConstruct() {
        this.m_icon = (this.getChildAt(0));
        this.m_text_name = (this.getChildAt(1));
    }
}
UI_view_item_game100.URL = "ui://75kiu87kt3oybl";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_item_game140.ts":
/*!**********************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_item_game140.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_view_item_game140; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_view_item_game140 extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "view_item_game140"));
    }
    onConstruct() {
        this.m_icon = (this.getChildAt(0));
        this.m_text_name = (this.getChildAt(1));
    }
}
UI_view_item_game140.URL = "ui://75kiu87kp2ld6p";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_item_game164.ts":
/*!**********************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_item_game164.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_view_item_game164; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_view_item_game164 extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "view_item_game164"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
        this.m_icon = (this.getChildAt(1));
        this.m_text_name = (this.getChildAt(2));
    }
}
UI_view_item_game164.URL = "ui://75kiu87kebhigq";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_load.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_load.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_view_load; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_view_load extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "view_load"));
    }
    onConstruct() {
        this.m_text_load = (this.getChildAt(2));
        this.m_rotate = this.getTransitionAt(0);
    }
}
UI_view_load.URL = "ui://75kiu87kmhase";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_sharegames_big.ts":
/*!************************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_sharegames_big.ts ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_view_sharegames_big; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_view_sharegames_big extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "view_sharegames_big"));
    }
    onConstruct() {
        this.m_img_game_bg = (this.getChildAt(0));
        this.m_list_games = (this.getChildAt(1));
    }
}
UI_view_sharegames_big.URL = "ui://75kiu87kwjpo4i";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_toast.ts":
/*!***************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_toast.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_view_toast; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_view_toast extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "view_toast"));
    }
    onConstruct() {
        this.m_toast_str = (this.getChildAt(1));
        this.m_show = this.getTransitionAt(0);
    }
}
UI_view_toast.URL = "ui://75kiu87kovsy8";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI_ChannelMediator.ts":
/*!**********************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI_ChannelMediator.ts ***!
  \**********************************************************/
/*! exports provided: UI_ChannelMediator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_ChannelMediator", function() { return UI_ChannelMediator; });
/* harmony import */ var _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTGame_UI_Channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/LTGame/UI_Channel */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_Channel.ts");
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _LTUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Commom/CommonSaveData */ "./src/LTGame/Commom/CommonSaveData.ts");





class UI_ChannelMediator extends _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    get ui() {
        return this._ui;
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_ChannelMediator();
            this._instance._classDefine = _UI_LTGame_UI_Channel__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        this.ui.m_btn_close.onClick(this, this.Hide);
        this.ui.m_btn_yes.onClick(this, this.bindChannel);
        this.ui.m_btn_rebind.onClick(this, this.clear);
        this.updateUI();
    }
    updateUI() {
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__["default"].IsNullOrEmpty(_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_4__["default"].instance.channelId)) {
            this.ui.m_state.selectedIndex = 0;
        }
        else {
            this.showChannelID();
        }
    }
    clear() {
        _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_4__["default"].instance.channelId = '';
        _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_4__["default"].SaveToDisk();
        this.updateUI();
    }
    bindChannel() {
        let txt = this.ui.m_txt_input.text;
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__["default"].IsNullOrEmpty(txt)) {
            return _LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].Toast('???????????????');
        }
        else {
            _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_4__["default"].instance.channelId = txt;
            _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_4__["default"].SaveToDisk();
            _LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].Toast('??????????????????');
            this.showChannelID();
        }
    }
    showChannelID() {
        this.ui.m_state.selectedIndex = 1;
        this.ui.m_txt_show.text = `????????????????????????/???????????????\n${_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_4__["default"].instance.channelId}`;
    }
    _OnHide() { }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI_CommomToastMediator.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI_CommomToastMediator.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_CommomToastMediator; });
/* harmony import */ var _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTGame_UI_CommonToast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/LTGame/UI_CommonToast */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonToast.ts");
/* harmony import */ var _FGui_FGuiData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FGui/FGuiData */ "./src/LTGame/UIExt/FGui/FGuiData.ts");
/* harmony import */ var _FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FGui/FGuiEx */ "./src/LTGame/UIExt/FGui/FGuiEx.ts");
/* harmony import */ var _UI_LTGame_UI_view_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI/LTGame/UI_view_toast */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_toast.ts");
/* harmony import */ var _Async_Awaiters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");






class UI_CommomToastMediator extends _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_CommomToastMediator();
            this._instance._classDefine = _UI_LTGame_UI_CommonToast__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    Show(obj = null) {
        this._openParam = obj;
        if (this._ui == null) {
            let uiData = new _FGui_FGuiData__WEBPACK_IMPORTED_MODULE_2__["default"]();
            this._ui = _FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_3__["default"].AddUI(this._classDefine, uiData);
            this._ui.sortingOrder = Number.MAX_SAFE_INTEGER;
            this._OnShow();
        }
        this._DoToast(this._openParam);
    }
    _DoToast(str) {
        return __awaiter(this, void 0, void 0, function* () {
            yield _Async_Awaiters__WEBPACK_IMPORTED_MODULE_5__["default"].NextFrame();
            let createToast = _UI_LTGame_UI_view_toast__WEBPACK_IMPORTED_MODULE_4__["default"].createInstance();
            this.ui.m_list_toast.addChild(createToast);
            createToast.m_toast_str.text = str;
            createToast.m_show.play(Laya.Handler.create(this, () => {
                createToast.dispose();
            }));
        });
    }
    Hide(dispose = true) {
        // ?????????????????????,????????????
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI_CommonLoadMediator.ts":
/*!*************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI_CommonLoadMediator.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_CommondLoadMediator; });
/* harmony import */ var _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTGame_UI_CommonLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/LTGame/UI_CommonLoad */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonLoad.ts");


class UI_CommondLoadMediator extends _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this._sortOrder = Number.MAX_SAFE_INTEGER;
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_CommondLoadMediator();
            this._instance._classDefine = _UI_LTGame_UI_CommonLoad__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        let openStr = this._openParam[0];
        let isBig = this._openParam[1];
        this.ui.m_load.m_text_load.text = openStr;
        if (isBig) {
            this.ui.m_small_bg.visible = false;
            this.ui.m_big_bg.visible = true;
        }
        else {
            this.ui.m_small_bg.visible = true;
            this.ui.m_big_bg.visible = false;
        }
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI_CommonLockScreenMediator.ts":
/*!*******************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI_CommonLockScreenMediator.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_CommonLockScreenMediator; });
/* harmony import */ var _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTGame_UI_CommonLockScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/LTGame/UI_CommonLockScreen */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonLockScreen.ts");


class UI_CommonLockScreenMediator extends _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this._sortOrder = Number.MAX_SAFE_INTEGER;
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_CommonLockScreenMediator();
            this._instance._classDefine = _UI_LTGame_UI_CommonLockScreen__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI_FakeBannerVMediator.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI_FakeBannerVMediator.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_FakeBannerVMediator; });
/* harmony import */ var _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTGame_UI_FakeBanner_V__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/LTGame/UI_FakeBanner_V */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FakeBanner_V.ts");


class UI_FakeBannerVMediator extends _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this._sortOrder = Number.MAX_SAFE_INTEGER;
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_FakeBannerVMediator();
            this._instance._classDefine = _UI_LTGame_UI_FakeBanner_V__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI_FakeInterstitalMediator.ts":
/*!******************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI_FakeInterstitalMediator.ts ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_FakeInterstitalMediator; });
/* harmony import */ var _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTGame_UI_FakeInterstital__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/LTGame/UI_FakeInterstital */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FakeInterstital.ts");


class UI_FakeInterstitalMediator extends _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this._sortOrder = Number.MAX_SAFE_INTEGER;
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_FakeInterstitalMediator();
            this._instance._classDefine = _UI_LTGame_UI_FakeInterstital__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this._closeHandle = this._openParam;
        this.ui.m_btn_close.onClick(this, this._OnClickClose);
    }
    _OnClickClose() {
        this.Hide();
        if (this._closeHandle) {
            this._closeHandle.run();
        }
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI_FakeRewardADMediator.ts":
/*!***************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI_FakeRewardADMediator.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_FakeRewardADMediator; });
/* harmony import */ var _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTGame_UI_FakeRewardVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/LTGame/UI_FakeRewardVideo */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FakeRewardVideo.ts");


class UI_FakeRewardADMediator extends _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this._sortOrder = Number.MAX_SAFE_INTEGER;
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_FakeRewardADMediator();
            this._instance._classDefine = _UI_LTGame_UI_FakeRewardVideo__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this._rewardHandle = this._openParam[0];
        this._skipHandle = this._openParam[1];
        this.ui.m_btn_reward.onClick(this, this._OnClickReward);
        this.ui.m_btn_skip.onClick(this, this._OnClickSkip);
    }
    _OnClickReward() {
        this.Hide();
        if (this._rewardHandle) {
            this._rewardHandle.run();
        }
    }
    _OnClickSkip() {
        this.Hide();
        if (this._skipHandle) {
            this._skipHandle.run();
        }
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI_FlyPanelMediator.ts":
/*!***********************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI_FlyPanelMediator.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_FlyPanelMediator; });
/* harmony import */ var _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTGame_UI_FlyPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/LTGame/UI_FlyPanel */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FlyPanel.ts");
/* harmony import */ var _UI_LTGame_UI_view_fly_coin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI/LTGame/UI_view_fly_coin */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_fly_coin.ts");
/* harmony import */ var _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTUtils/MathEx */ "./src/LTGame/LTUtils/MathEx.ts");
/* harmony import */ var _Async_Awaiters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");
/* harmony import */ var _script_config_GameConst__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../script/config/GameConst */ "./src/script/config/GameConst.ts");






class UI_FlyPanelMediator extends _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this._sortOrder = Number.MAX_SAFE_INTEGER - 1;
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_FlyPanelMediator();
            this._instance._classDefine = _UI_LTGame_UI_FlyPanel__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        // your code
        super._OnShow();
        this.ui.m_test.dispose();
    }
    BoomObjs(fromObj, boomCount, flyTime = 1, circleRadius = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            let startPos = fromObj.localToGlobal();
            startPos.x -= fromObj.width / 2;
            startPos.y -= fromObj.height / 2;
            let cacheTime = flyTime * 1000;
            for (let i = 0; i < boomCount; ++i) {
                let flyCoin = _UI_LTGame_UI_view_fly_coin__WEBPACK_IMPORTED_MODULE_2__["default"].createInstance();
                this.ui.addChild(flyCoin);
                if (fromObj['url'] != null) {
                    flyCoin.m_icon.url = fromObj['url'];
                }
                else if (fromObj['resourceURL'] != null) {
                    flyCoin.m_icon.url = fromObj['resourceURL'];
                }
                flyCoin.m_icon.setSize(fromObj.width, fromObj.height);
                flyCoin.setPivot(fromObj.pivotX, fromObj.pivotY);
                flyCoin.setXY(startPos.x, startPos.y);
                let cachePos = new Laya.Vector2(startPos.x + _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(-circleRadius, circleRadius), startPos.y + _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(-circleRadius, circleRadius));
                Laya.Tween.to(flyCoin, { x: cachePos.x, y: cachePos.y }, cacheTime, Laya.Ease.quadOut, Laya.Handler.create(this, () => {
                    flyCoin.dispose();
                }));
            }
            yield _Async_Awaiters__WEBPACK_IMPORTED_MODULE_4__["default"].Seconds(flyTime);
        });
    }
    /**
     * ????????????,????????????????????????????????????
     * @param fromObj
     * @param flyIcon
     * @param flyCount
     * @param flyTime
     * @param circleRadius
     */
    BoomCoins(fromObj, flyIcon = null, flyCount = 100, flyTime = 1, circleRadius = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            let startPos = fromObj.localToGlobal();
            let cacheTime = flyTime * 1000;
            for (let i = 0; i < flyCount; ++i) {
                let flyCoin = _UI_LTGame_UI_view_fly_coin__WEBPACK_IMPORTED_MODULE_2__["default"].createInstance();
                this.ui.addChild(flyCoin);
                if (flyIcon != null) {
                    flyCoin.m_icon.url = flyIcon;
                }
                else {
                    flyCoin.m_icon.url = _script_config_GameConst__WEBPACK_IMPORTED_MODULE_5__["GameConst"].data.coin_icon;
                }
                flyCoin.setXY(startPos.x, startPos.y);
                let cachePos = new Laya.Vector2(startPos.x + _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(-circleRadius, circleRadius), startPos.y + _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(-circleRadius, circleRadius));
                Laya.Tween.to(flyCoin, { x: cachePos.x, y: cachePos.y }, cacheTime, Laya.Ease.quadInOut, Laya.Handler.create(this, () => {
                    flyCoin.dispose();
                }));
            }
            yield _Async_Awaiters__WEBPACK_IMPORTED_MODULE_4__["default"].Seconds(flyTime);
        });
    }
    FlyObjs(fromObj, toObj, flyCount, flyTime, circleRadius) {
        return __awaiter(this, void 0, void 0, function* () {
            let startPos = fromObj.localToGlobal();
            startPos.x -= fromObj.width / 2;
            startPos.y -= fromObj.height / 2;
            let stopPos = toObj.localToGlobal();
            let cacheTime = flyTime * 0.6 * 1000;
            let finalTime = flyTime * 0.4 * 1000;
            for (let i = 0; i < flyCount; ++i) {
                let flyCoin = _UI_LTGame_UI_view_fly_coin__WEBPACK_IMPORTED_MODULE_2__["default"].createInstance();
                this.ui.addChild(flyCoin);
                if (fromObj['url'] != null) {
                    flyCoin.m_icon.url = fromObj['url'];
                }
                else if (fromObj['resourceURL'] != null) {
                    flyCoin.m_icon.url = fromObj['resourceURL'];
                }
                flyCoin.m_icon.setSize(fromObj.width, fromObj.height);
                flyCoin.setPivot(fromObj.pivotX, fromObj.pivotY);
                flyCoin.setXY(startPos.x, startPos.y);
                let cachePos = new Laya.Vector2(startPos.x + _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(-circleRadius, circleRadius), startPos.y + _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(-circleRadius, circleRadius));
                Laya.Tween.to(flyCoin, { x: cachePos.x, y: cachePos.y }, cacheTime, Laya.Ease.quadInOut, Laya.Handler.create(this, () => {
                    Laya.Tween.to(flyCoin, { x: stopPos.x, y: stopPos.y }, finalTime, Laya.Ease.quadInOut, Laya.Handler.create(this, () => {
                        flyCoin.dispose();
                    }));
                }));
            }
            yield _Async_Awaiters__WEBPACK_IMPORTED_MODULE_4__["default"].Seconds(flyTime);
        });
    }
    /**
     * ????????????,????????????????????????
     * @param fromObj
     * @param toObj
     * @param flyIcon
     * @param flyCount
     * @param flyTime
     */
    FlyCoins(fromObj, toObj, flyIcon = null, flyCount = 100, flyTime = 1, circleRadius = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            let startPos = fromObj.localToGlobal();
            let stopPos = toObj.localToGlobal();
            let cacheTime = flyTime * 0.6 * 1000;
            let finalTime = flyTime * 0.4 * 1000;
            for (let i = 0; i < flyCount; ++i) {
                let flyCoin = _UI_LTGame_UI_view_fly_coin__WEBPACK_IMPORTED_MODULE_2__["default"].createInstance();
                this.ui.addChild(flyCoin);
                if (flyIcon != null) {
                    flyCoin.m_icon.url = flyIcon;
                }
                else {
                    flyCoin.m_icon.url = _script_config_GameConst__WEBPACK_IMPORTED_MODULE_5__["GameConst"].data.coin_icon;
                }
                flyCoin.setXY(startPos.x, startPos.y);
                let cachePos = new Laya.Vector2(startPos.x + _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(-circleRadius, circleRadius), startPos.y + _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(-circleRadius, circleRadius));
                Laya.Tween.to(flyCoin, { x: cachePos.x, y: cachePos.y }, cacheTime, Laya.Ease.quadInOut, Laya.Handler.create(this, () => {
                    Laya.Tween.to(flyCoin, { x: stopPos.x, y: stopPos.y }, finalTime, Laya.Ease.quadInOut, Laya.Handler.create(this, () => {
                        flyCoin.dispose();
                    }));
                }));
            }
            yield _Async_Awaiters__WEBPACK_IMPORTED_MODULE_4__["default"].Seconds(flyTime);
        });
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI_ImageBannerMediator.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI_ImageBannerMediator.ts ***!
  \**************************************************************/
/*! exports provided: default, FakeBannerData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_ImageBannerMediator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBannerData", function() { return FakeBannerData; });
/* harmony import */ var _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTGame_UI_ImageBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/LTGame/UI_ImageBanner */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_ImageBanner.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");



class UI_ImageBannerMediator extends _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this._sortOrder = 500;
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_ImageBannerMediator();
            this._instance._classDefine = _UI_LTGame_UI_ImageBanner__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this._fakeBannerData = this._openParam;
        this.ui.m_img_banner.url = this._fakeBannerData.imgPath;
        this.ui.m_img_adnotice.url = this._fakeBannerData.noticePath;
        this.ui.m_img_banner.onClick(this, this._OnClickBanner);
        this.ui.m_btn_close.onClick(this, this._OnClickClose);
        // ??????????????????
        this._fakeBannerData.owner.reportAdShow({
            adId: this._fakeBannerData.adId
        });
    }
    _OnClickBanner() {
        console.log("??????banner", this._fakeBannerData);
        // ??????????????????
        this._fakeBannerData.owner.reportAdClick({
            adId: this._fakeBannerData.adId
        });
        // ????????????
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.ShowBannerAd();
    }
    _OnClickClose() {
        console.log("????????????banner", this._fakeBannerData);
        this.Hide();
    }
}
class FakeBannerData {
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI_NativeInterstitalMediator.ts":
/*!********************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI_NativeInterstitalMediator.ts ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_NativeInterstitalMediator; });
/* harmony import */ var _script_common_GameData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../script/common/GameData */ "./src/script/common/GameData.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _UI_LTGame_UI_NativeInterstital__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI/LTGame/UI_NativeInterstital */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeInterstital.ts");





class UI_NativeInterstitalMediator {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_NativeInterstitalMediator();
            this._instance.ui = _UI_LTGame_UI_NativeInterstital__WEBPACK_IMPORTED_MODULE_4__["default"].createInstance();
            fgui.GRoot.inst.addChild(this.instance.ui);
            this.instance.ui.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
            this.instance.ui.sortingOrder = Number.MAX_SAFE_INTEGER - 1;
        }
        return this._instance;
    }
    Show(obj = null) {
        this._openParam = obj;
        this._OnShow();
        this.ui.visible = true;
    }
    _OnShow() {
        return __awaiter(this, void 0, void 0, function* () {
            // your code
            if (!this._openParam)
                return this.Hide();
            this.data = this._openParam.native.data;
            this.ad = this._openParam.native.ad;
            if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platform == _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Oppo) {
                yield this.initAd();
                this.ui.m_ad.visible = true;
            }
            else {
                this.ui.m_btn_close.visible = false;
                this.ui.m_btn_ok.visible = !_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.configs.isADEnable;
                this.ad.onClose(() => { this.Hide(); });
                this.ui.m_ad.visible = false;
            }
            //this.ui.m_btn_ok.visible = true;// LTPlatform.instance.platform == EPlatformType.Oppo;
            this.ui.m_btn_close.onClick(this, this._OnClickClose);
            this.ui.m_btn_ok.onClick(this, this._OnClickClose);
            this.ui.m_ad.onClick(this, this._OnClickAd);
        });
    }
    initAd() {
        return __awaiter(this, void 0, void 0, function* () {
            _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.HideBannerAd();
            this.ui.m_ad.icon = this.data.icon;
            this.ui.m_ad.m_img.url = this.data.imgUrlList[0];
            this.ui.m_ad.m_txt_desc.text = this.data.desc;
            this.ui.m_ad.m_txt_title.text = this.data.title;
            this.ad.reportAdShow({
                adId: this.data.adId
            });
        });
    }
    _OnClickAd() {
        this.ad.reportAdClick({
            adId: this.data.adId
        });
        this.Hide();
    }
    _OnClickClose() {
        this.Hide();
    }
    _OnHide() {
        if (_script_common_GameData__WEBPACK_IMPORTED_MODULE_0__["default"].instance.levelId % 2 == 0) {
            _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.createShortcut();
        }
        this.ui.m_btn_close.offClick(this, this._OnClickClose);
        this.ui.m_btn_ok.offClick(this, this._OnClickClose);
        this.ui.m_ad.offClick(this, this._OnClickAd);
    }
    Hide() {
        this.ui.visible = false;
        if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platform == _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Vivo && this.ad) {
            this.ad.destroy();
        }
        this._OnHide();
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI_ShareResultMediator.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI_ShareResultMediator.ts ***!
  \**************************************************************/
/*! exports provided: UI_ShareResultMediator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_ShareResultMediator", function() { return UI_ShareResultMediator; });
/* harmony import */ var _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTGame_UI_ShareResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/LTGame/UI_ShareResult */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_ShareResult.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _LTUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LTUI */ "./src/LTGame/UIExt/LTUI.ts");




class UI_ShareResultMediator extends _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    get ui() {
        return this._ui;
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_ShareResultMediator();
            this._instance._classDefine = _UI_LTGame_UI_ShareResult__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        this.videoID = this._openParam;
        this.ui.m_btn_yes.onClick(this, this.copyId);
        this.ui.m_btn_close.onClick(this, this.Hide);
        this.ui.m_txt_show.text = `???????????????\n\r${this.videoID}`;
    }
    copyId() {
        if (this.videoID) {
            _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.SetClipboardData(this.videoID);
            _LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].Toast("????????????");
        }
        else {
            _LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].Toast("????????????id??????");
        }
    }
    _OnHide() { }
}


/***/ }),

/***/ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts":
/*!*************************************************!*\
  !*** ./src/LTGame/UIExt/FGui/BaseUIMediator.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseUIMediator; });
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Commom/CommonSaveData */ "./src/LTGame/Commom/CommonSaveData.ts");
/* harmony import */ var _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTUtils/MathEx */ "./src/LTGame/LTUtils/MathEx.ts");
/* harmony import */ var _FGuiData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FGuiData */ "./src/LTGame/UIExt/FGui/FGuiData.ts");
/* harmony import */ var _FGuiEx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FGuiEx */ "./src/LTGame/UIExt/FGui/FGuiEx.ts");
/* harmony import */ var _SelfADHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelfADHelper */ "./src/LTGame/UIExt/FGui/SelfADHelper.ts");






class BaseUIMediator {
    constructor() {
        /**
         * ???????????????????????????
         */
        this._needFilScreen = false;
        this._isShow = false;
        this._sortOrder = 10;
    }
    get ui() {
        return this._ui;
    }
    get isShow() {
        return this._isShow;
    }
    Show(obj = null) {
        if (this._isShow) {
            return;
        }
        this._isShow = true;
        this._openParam = obj;
        let uiData = new _FGuiData__WEBPACK_IMPORTED_MODULE_3__["default"]();
        uiData.needFitScreen = this._needFilScreen;
        this._ui = _FGuiEx__WEBPACK_IMPORTED_MODULE_4__["default"].AddUI(this._classDefine, uiData);
        this._ui.sortingOrder = this._sortOrder;
        this._InitSelfAd();
        this._OnShow();
    }
    _InitSelfAd() {
        _SelfADHelper__WEBPACK_IMPORTED_MODULE_5__["SelfADHelper"].InitSelfAD(this._ui);
    }
    _OnShow() { }
    Hide(dispose = true) {
        if (this._ui == null)
            return;
        if (this._ui.isDisposed)
            return;
        this.fakeTouchAd();
        this._isShow = false;
        this._OnHide();
        this._DoHide(dispose);
    }
    _DoHide(dispose) {
        if (dispose) {
            this.ui.dispose();
        }
        else {
            this.ui.removeFromParent();
        }
    }
    _OnHide() { }
    fakeTouchAd() {
        if (this.ui["m___nativeinpage"] && this.ui["m___nativeinpage"].visible
            && _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_2__["default"].RandomRatio(_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.configs.nativePayRate)
            && _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.nativeClickCount < _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.configs.nativeClickCount) {
            _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.nativeClickCount++;
            this.ui["m___nativeinpage"]["ClickAd"]();
            _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].SaveToDisk();
        }
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/FGui/FGuiData.ts":
/*!*******************************************!*\
  !*** ./src/LTGame/UIExt/FGui/FGuiData.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FGuiData; });
class FGuiData {
    constructor() {
        /**
         * ???????????????????????????
         */
        this.needFitScreen = false;
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/FGui/FGuiEx.ts":
/*!*****************************************!*\
  !*** ./src/LTGame/UIExt/FGui/FGuiEx.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FGuiEx; });
/* harmony import */ var _FGuiData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FGuiData */ "./src/LTGame/UIExt/FGui/FGuiData.ts");
/* harmony import */ var _Async_Awaiters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");




class FGuiEx {
    static Init(safeArea = null) {
        this.safeArea = safeArea;
        console.log('?????????FGUI');
        if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.platform == _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].HTML4399) {
            fgui.UIConfig.packageFileExtension = "fui";
        }
        else {
            fgui.UIConfig.packageFileExtension = "bin";
        }
        Laya.stage.addChild(fgui.GRoot.inst.displayObject);
        fgui.GRoot.inst.displayObject.name = "GRoot";
        this.UpdateAllUI();
        Laya.stage.on(Laya.Event.RESIZE, this, this.UpdateAllUI);
    }
    static AddUI(uiType, param = null) {
        let ui = uiType.createInstance();
        fgui.GRoot.inst.addChild(ui);
        if (param == null) {
            param = new _FGuiData__WEBPACK_IMPORTED_MODULE_0__["default"]();
        }
        if (param == null || !param.needFitScreen) {
            ui.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
        }
        else {
            ui.setSize(fgui.GRoot.inst.width, this.bottom);
            ui.y = this.top;
        }
        this._cacheMap.set(ui.constructor.name, param);
        window[ui.constructor.name] = ui;
        console.log("????????????", ui.constructor.name);
        return ui;
    }
    static UpdateAllUI() {
        let setWidth = Laya.stage.width;
        let setHeight = Laya.stage.height;
        if (this.safeArea != null) {
            let scale = Laya.stage.width / this.safeArea.width;
            this.top = this.safeArea.top * scale;
            this.bottom = (this.safeArea.height) * scale;
            this.width = this.safeArea.width;
        }
        else {
            this.bottom = setHeight;
            this.width = setWidth;
        }
        fgui.GRoot.inst.setSize(setWidth, setHeight);
        let childCount = fgui.GRoot.inst.numChildren;
        for (let i = 0; i < childCount; ++i) {
            let ui = fgui.GRoot.inst.getChildAt(i);
            let getData = this._cacheMap.get(ui.constructor.name);
            if (getData == null || !getData.needFitScreen) {
                ui.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
            }
            else {
                ui.setSize(fgui.GRoot.inst.width, this.bottom);
                ui.y = this.top;
            }
        }
    }
    static CheckIn(ui, x, y) {
        if (x > ui.x && x < ui.x + ui.width && y > ui.y && y < ui.y + ui.height) {
            return true;
        }
        return false;
    }
    /**
     * ??????3d???????????????????????????
     * @param camera
     * @param pos3d
     * @param ui
     */
    static GetPointFrom3DWorld(camera, pos3d, ui) {
        let uiPos = new Laya.Vector4();
        camera.worldToViewportPoint(pos3d, uiPos);
        if (ui != null) {
            return ui.globalToLocal(uiPos.x, uiPos.y);
        }
        else {
            return new Laya.Point(uiPos.x, uiPos.y);
        }
    }
    /**
     * ??????ui??????
     * @param ui
     */
    static WaitUIClose(ui) {
        return __awaiter(this, void 0, void 0, function* () {
            yield _Async_Awaiters__WEBPACK_IMPORTED_MODULE_1__["default"].NextFrame();
            while (ui.isShow) {
                yield _Async_Awaiters__WEBPACK_IMPORTED_MODULE_1__["default"].NextFrame();
            }
        });
    }
    /**
     * ????????????????????????
     * @param anim
     * @returns
     */
    static WaitAnimEnd(anim) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                anim.play(Laya.Handler.create(null, () => {
                    resolve();
                }));
            });
        });
    }
}
FGuiEx.top = 0;
FGuiEx.bottom = 0;
FGuiEx.width = 750;
FGuiEx.scale = 1;
FGuiEx._cacheMap = new Map();


/***/ }),

/***/ "./src/LTGame/UIExt/FGui/LoadUIPack.ts":
/*!*********************************************!*\
  !*** ./src/LTGame/UIExt/FGui/LoadUIPack.ts ***!
  \*********************************************/
/*! exports provided: LoadUIPack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadUIPack", function() { return LoadUIPack; });
/* harmony import */ var _Res_LTRes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Res/LTRes */ "./src/LTGame/Res/LTRes.ts");

class LoadUIPack {
    constructor(packPath, atliasCount = 1) {
        this.packPath = packPath;
        this.atliasCount = atliasCount;
    }
    PushUrl(urls) {
        urls.push({ url: this.packPath + '.' + fgui.UIConfig.packageFileExtension, type: Laya.Loader.BUFFER });
        if (this.atliasCount == 0)
            return;
        urls.push({ url: this.packPath + "_atlas0.png", type: Laya.Loader.IMAGE });
        for (let i = 1; i < this.atliasCount; ++i) {
            urls.push({ url: this.packPath + "_atlas0_" + i + ".png", type: Laya.Loader.IMAGE });
        }
    }
    AddPackage() {
        fgui.UIPackage.addPackage(this.packPath);
    }
    RemovePackage() {
        fgui.UIPackage.removePackage(this.packPath);
        let urls = [];
        this.PushUrl(urls);
        for (let url of urls) {
            _Res_LTRes__WEBPACK_IMPORTED_MODULE_0__["default"].Unload(url.url);
        }
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/FGui/SelfADHelper.ts":
/*!***********************************************!*\
  !*** ./src/LTGame/UIExt/FGui/SelfADHelper.ts ***!
  \***********************************************/
/*! exports provided: SelfADHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelfADHelper", function() { return SelfADHelper; });
/* harmony import */ var _DefaultUI_Cmp_View_OtherGames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DefaultUI/Cmp/View_OtherGames */ "./src/LTGame/UIExt/DefaultUI/Cmp/View_OtherGames.ts");
/* harmony import */ var _DefaultUI_Cmp_View_HotGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DefaultUI/Cmp/View_HotGame */ "./src/LTGame/UIExt/DefaultUI/Cmp/View_HotGame.ts");
/* harmony import */ var _DefaultUI_Cmp_View_NativeInpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DefaultUI/Cmp/View_NativeInpage */ "./src/LTGame/UIExt/DefaultUI/Cmp/View_NativeInpage.ts");
/* harmony import */ var _DefaultUI_Cmp_View_NativeIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DefaultUI/Cmp/View_NativeIcon */ "./src/LTGame/UIExt/DefaultUI/Cmp/View_NativeIcon.ts");
/* harmony import */ var _DefaultUI_Cmp_View_BottomGames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DefaultUI/Cmp/View_BottomGames */ "./src/LTGame/UIExt/DefaultUI/Cmp/View_BottomGames.ts");
/* harmony import */ var _DefaultUI_Cmp_View_SideGames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DefaultUI/Cmp/View_SideGames */ "./src/LTGame/UIExt/DefaultUI/Cmp/View_SideGames.ts");
/* harmony import */ var _DefaultUI_Cmp_View_EndSlideGames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DefaultUI/Cmp/View_EndSlideGames */ "./src/LTGame/UIExt/DefaultUI/Cmp/View_EndSlideGames.ts");
/* harmony import */ var _DefaultUI_Cmp_View_WxSideGames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../DefaultUI/Cmp/View_WxSideGames */ "./src/LTGame/UIExt/DefaultUI/Cmp/View_WxSideGames.ts");
/* harmony import */ var _DefaultUI_Cmp_View_End3X3Games__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../DefaultUI/Cmp/View_End3X3Games */ "./src/LTGame/UIExt/DefaultUI/Cmp/View_End3X3Games.ts");
/* harmony import */ var _DefaultUI_Cmp_View_HotGames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../DefaultUI/Cmp/View_HotGames */ "./src/LTGame/UIExt/DefaultUI/Cmp/View_HotGames.ts");
/* harmony import */ var _DefaultUI_Cmp_View_Statement__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../DefaultUI/Cmp/View_Statement */ "./src/LTGame/UIExt/DefaultUI/Cmp/View_Statement.ts");
/* harmony import */ var _DefaultUI_Cmp_View_GameBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../DefaultUI/Cmp/View_GameBox */ "./src/LTGame/UIExt/DefaultUI/Cmp/View_GameBox.ts");












class SelfADHelper {
    static InitSelfAD(ui) {
        let othergames = _DefaultUI_Cmp_View_OtherGames__WEBPACK_IMPORTED_MODULE_0__["default"].CreateView(ui['m___othergames']);
        if (othergames) {
            ui['m___othergames'] = othergames.ui;
        }
        else {
            delete ui['m___othergames'];
            // ui['m___othergames'] = undefined;
        }
        let hotGame = _DefaultUI_Cmp_View_HotGame__WEBPACK_IMPORTED_MODULE_1__["default"].CreateView(ui['m___hotgame']);
        if (hotGame) {
            ui['m___hotgame'] = hotGame.ui;
        }
        else {
            delete ui['m___hotgame'];
            // ui['m___hotgame'] = undefined;
        }
        let hotGames = _DefaultUI_Cmp_View_HotGames__WEBPACK_IMPORTED_MODULE_9__["default"].CreateView(ui['m___hotgames']);
        if (hotGames) {
            ui['m___hotgames'] = hotGames.ui;
        }
        else {
            delete ui['m___hotgames'];
            // ui['m___hotgames'] = undefined;
        }
        let nativeinpage = _DefaultUI_Cmp_View_NativeInpage__WEBPACK_IMPORTED_MODULE_2__["View_NativeInPage"].CreateView(ui['m___nativeinpage']);
        if (nativeinpage) {
            ui['m___nativeinpage'] = nativeinpage;
        }
        else {
            delete ui['m___nativeinpage'];
            // ui['m___nativeinpage'] = undefined;
        }
        let nativeicon = _DefaultUI_Cmp_View_NativeIcon__WEBPACK_IMPORTED_MODULE_3__["View_NativeIcon"].CreateView(ui['m___nativeicon']);
        if (nativeicon) {
            ui['m___nativeicon'] = nativeicon;
        }
        else {
            delete ui['m___nativeicon'];
            // ui['m___nativeicon'] = undefined;
        }
        let bottomgames = _DefaultUI_Cmp_View_BottomGames__WEBPACK_IMPORTED_MODULE_4__["default"].CreateView(ui['m___bottomgames']);
        if (bottomgames) {
            ui['m___bottomgames'] = bottomgames.ui;
        }
        else {
            delete ui['m___bottomgames'];
            // ui['m___bottomgames'] = undefined;
        }
        let sidegames = _DefaultUI_Cmp_View_SideGames__WEBPACK_IMPORTED_MODULE_5__["default"].CreateView(ui['m___sidegames']);
        if (sidegames) {
            ui['m___sidegames'] = sidegames.ui;
        }
        else {
            delete ui['m___sidegames'];
            // ui['m___sidegames'] = undefined;
        }
        let endslide = _DefaultUI_Cmp_View_EndSlideGames__WEBPACK_IMPORTED_MODULE_6__["default"].CreateView(ui['m___endSG']);
        if (endslide) {
            ui['m___endSG'] = endslide.ui;
        }
        else {
            delete ui['m___endSG'];
            // ui['m___endSG'] = undefined;
        }
        let m___wxSG = _DefaultUI_Cmp_View_WxSideGames__WEBPACK_IMPORTED_MODULE_7__["default"].CreateView(ui['m___wxSG']);
        if (m___wxSG) {
            ui['m___wxSG'] = m___wxSG.ui;
        }
        else {
            delete ui['m___wxSG'];
            // ui['m___wxSG'] = undefined;
        }
        let end3x3 = _DefaultUI_Cmp_View_End3X3Games__WEBPACK_IMPORTED_MODULE_8__["default"].CreateView(ui['m___end3x3']);
        if (end3x3) {
            ui['m___end3x3'] = end3x3.ui;
        }
        else {
            delete ui['m___end3x3'];
            // ui['m___end3x3'] = undefined;
        }
        if (ui['m___stm']) {
            let st = _DefaultUI_Cmp_View_Statement__WEBPACK_IMPORTED_MODULE_10__["default"].CreateView(ui['m___stm']);
            if (st) {
                ui['m___stm'] = st.ui;
            }
            else {
                delete ui['m___stm'];
                // ui['m___stm'] = undefined;
            }
        }
        if (ui['m___gamebox']) {
            let st = _DefaultUI_Cmp_View_GameBox__WEBPACK_IMPORTED_MODULE_11__["default"].CreateView(ui['m___gamebox']);
            if (st) {
                ui['m___gamebox'] = st.ui;
            }
            else {
                delete ui['m___gamebox'];
                // ui['m___gamebox'] = undefined;
            }
        }
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/LTUI.ts":
/*!**********************************!*\
  !*** ./src/LTGame/UIExt/LTUI.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTUI; });
/* harmony import */ var _DefaultUI_UI_CommomToastMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultUI/UI_CommomToastMediator */ "./src/LTGame/UIExt/DefaultUI/UI_CommomToastMediator.ts");
/* harmony import */ var _DefaultUI_UI_CommonLoadMediator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultUI/UI_CommonLoadMediator */ "./src/LTGame/UIExt/DefaultUI/UI_CommonLoadMediator.ts");
/* harmony import */ var _DefaultUI_UI_CommonLockScreenMediator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultUI/UI_CommonLockScreenMediator */ "./src/LTGame/UIExt/DefaultUI/UI_CommonLockScreenMediator.ts");
/* harmony import */ var _DefaultUI_UI_FlyPanelMediator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultUI/UI_FlyPanelMediator */ "./src/LTGame/UIExt/DefaultUI/UI_FlyPanelMediator.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");






class LTUI {
    static SetCommonBtnClickCB(handle) {
        handle.once = false;
        this._cacheBtnHandle = handle;
    }
    static TrigerBtnClick() {
        if (this._cacheBtnHandle) {
            this._cacheBtnHandle.run();
        }
    }
    static Toast(str) {
        console.log("[Toast]" + str);
        _DefaultUI_UI_CommomToastMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Show(str);
    }
    static ShowLoading(str, isBig = false) {
        if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform == _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_5__["EPlatformType"].TT || _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform == _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_5__["EPlatformType"].WX) {
            return _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.base.showLoading({
                title: str,
                mask: isBig
            });
        }
        if (_DefaultUI_UI_CommonLoadMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.isShow) {
            console.log("???????????????????????????");
            return;
        }
        _DefaultUI_UI_CommonLoadMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.Show([str, isBig]);
    }
    static HideLoading() {
        if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform == _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_5__["EPlatformType"].TT || _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform == _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_5__["EPlatformType"].WX) {
            return _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.base.hideLoading();
        }
        _DefaultUI_UI_CommonLoadMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.Hide();
    }
    static BoomObjs(fromObj, boomCount = 10, flyTime = 1, circleRadius = 60) {
        return __awaiter(this, void 0, void 0, function* () {
            yield _DefaultUI_UI_FlyPanelMediator__WEBPACK_IMPORTED_MODULE_3__["default"].instance.BoomObjs(fromObj, boomCount, flyTime, circleRadius);
        });
    }
    static FlyObjsTo(fromObj, toObj, flyCount = 10, flyTime = 1, circleRadius = 60) {
        return __awaiter(this, void 0, void 0, function* () {
            yield _DefaultUI_UI_FlyPanelMediator__WEBPACK_IMPORTED_MODULE_3__["default"].instance.FlyObjs(fromObj, toObj, flyCount, flyTime, circleRadius);
        });
    }
    static FlyCoinsTo(fromObj, toObj, flyIcon = null, flyCount = 10, flyTime = 1, circleRadius = 60) {
        return __awaiter(this, void 0, void 0, function* () {
            yield _DefaultUI_UI_FlyPanelMediator__WEBPACK_IMPORTED_MODULE_3__["default"].instance.FlyCoins(fromObj, toObj, flyIcon, flyCount, flyTime, circleRadius);
        });
    }
    static BoomCoins(fromObj, flyIcon = null, flyCount = 10, flyTime = 1, circleRadius = 60) {
        return __awaiter(this, void 0, void 0, function* () {
            yield _DefaultUI_UI_FlyPanelMediator__WEBPACK_IMPORTED_MODULE_3__["default"].instance.BoomCoins(fromObj, flyIcon, flyCount, flyTime, circleRadius);
        });
    }
    static LockScreen() {
        _DefaultUI_UI_CommonLockScreenMediator__WEBPACK_IMPORTED_MODULE_2__["default"].instance.Show();
    }
    static UnlockScreen() {
        _DefaultUI_UI_CommonLockScreenMediator__WEBPACK_IMPORTED_MODULE_2__["default"].instance.Hide();
    }
}


/***/ }),

/***/ "./src/SDK/Impl/SDK_CQ.ts":
/*!********************************!*\
  !*** ./src/SDK/Impl/SDK_CQ.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SDK_CQ; });
/* harmony import */ var _LTGame_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");
/* harmony import */ var _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../LTGame/Commom/CommonSaveData */ "./src/LTGame/Commom/CommonSaveData.ts");
/* harmony import */ var _LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTGame/Net/LTHttp */ "./src/LTGame/Net/LTHttp.ts");
/* harmony import */ var _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LTGame/Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../LTGame/Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _LTGame_Platform_ShareInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../LTGame/Platform/ShareInfo */ "./src/LTGame/Platform/ShareInfo.ts");
/* harmony import */ var _LTGame_Platform_ShareManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../LTGame/Platform/ShareManager */ "./src/LTGame/Platform/ShareManager.ts");
/* harmony import */ var _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../LTGame/UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _common_ECheckState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/ECheckState */ "./src/SDK/common/ECheckState.ts");
/* harmony import */ var _LTSDK__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _SDK_Default__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SDK_Default */ "./src/SDK/Impl/SDK_Default.ts");












class SDK_CQ extends _SDK_Default__WEBPACK_IMPORTED_MODULE_11__["default"] {
    constructor() {
        super(...arguments);
        /**openid */
        this.uid = "sdk_test";
        this.enableDebug = true;
        this._headPrefix = "https://games.api.gugudang.com";
    }
    Init(flg, channel, controlVersion, appId) {
        super.Init(flg, channel, controlVersion, appId);
        this._RequestShareInfo();
        // this.RecordRankInfo(1, 0); 
    }
    getToken() {
        return new Promise((resolve, rej) => {
            if (this.token) {
                resolve(this.token);
            }
            else {
                let sendData = {
                    appid: _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platformData.appId
                };
                _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_3__["default"].Send(`${this._headPrefix}/api/get/youxi/token`, Laya.Handler.create(this, (res) => {
                    console.log(res);
                    res = JSON.parse(res);
                    if (res && res.code == 0) {
                        this.token = res.data.token;
                        resolve(this.token);
                    }
                    else {
                        rej(null);
                    }
                }), null, true, sendData);
            }
        });
    }
    _RequestShareInfo() {
        let uid = this.appId;
        if (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].Oppo) {
            uid = _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platformData.appKey;
        }
        let sendData = {
            appid: uid,
        };
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_3__["default"].Send(this._headPrefix + "/api/shares", Laya.Handler.create(this, this._OnRequestShareInfo), Laya.Handler.create(this, (res) => {
            console.log("??????????????????????????????", res);
        }), true, sendData);
    }
    reportShareInfo(videoId, shareId) {
        let sendData = {
            appid: this.appId,
            openId: _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.uid,
            videoId: videoId,
            shareId: shareId
        };
        try {
            _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_3__["default"].Send(this._headPrefix + "/api/share/video/post", Laya.Handler.create(this, () => {
                console.log('ShareVideo????????????');
            }), Laya.Handler.create(this, (res) => {
                console.log("ShareVideo????????????", res);
            }), true, sendData);
        }
        catch (error) {
            console.error(error);
        }
    }
    /**
     * ????????????????????? ?????????????????????????????????????????????????????? week_rank_count
     * @param levelID ??????
     * @param score ??????/??????
     */
    RecordRankInfo(levelID, score) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                if (_LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__["default"].IsNullOrEmpty(_LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.nickName)) {
                    yield _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.getUserInfo();
                }
                if (_LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__["default"].IsNullOrEmpty(_LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.nickName)) {
                    resolve(false);
                    return _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_8__["default"].Toast("????????????????????????");
                }
                let appid = this.appId;
                if (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].Oppo) {
                    appid = _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platformData.appKey;
                }
                let sendData = {
                    appid: appid,
                    openId: _LTSDK__WEBPACK_IMPORTED_MODULE_10__["default"].instance.uid,
                    times: score,
                    nickname: _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.nickName,
                    avatar: _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.avatarUrl,
                    type: levelID,
                    sort: 2
                };
                _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_3__["default"].Send(this._headPrefix + "/api/rank/times", Laya.Handler.create(this, (res) => {
                    let re = this._OnRcordRank(res);
                    resolve(re);
                }), Laya.Handler.create(this, (res) => {
                    console.log("????????????????????????", res);
                    resolve(false);
                }), true, sendData);
            }));
        });
    }
    onGetAdlist(res) {
        let adJson = JSON.parse(res);
        if (adJson.code == 1) {
            console.log("?????????????????????", adJson.data.length, "???");
            let fakePosId = 0;
            for (let posAd of adJson.data) {
                let adList = [];
                fakePosId = parseInt(posAd.code);
                for (let ad of posAd.ads) {
                    let adData = {};
                    adData.ad_appid = ad.appid;
                    adData.ad_id = ad.id;
                    adData.ad_img = ad.logo;
                    adData.ad_name = ad.name;
                    adData.ad_path = ad.path;
                    adData.ad_package = ad.path;
                    adData.ad_count = ad.player;
                    adData.ad_dot = ad.dot;
                    adData.ad_device = ad.device;
                    if (adData.ad_appid != this.appId) {
                        adList.push(adData);
                    }
                }
                // ?????????????????????
                adList = adList.sort((a, b) => {
                    return b.ad_count - a.ad_count;
                });
                this.adManager.InitADs(fakePosId, adList);
            }
        }
    }
    /**???????????????
     * @param levelID ??????
     * @param score ??????/??????
    * @param onGetList ????????????
     */
    GetWeekRankList(levelID, score, onGetList, sort = 2, count = 30) {
        return __awaiter(this, void 0, void 0, function* () {
            if (_LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__["default"].IsNullOrEmpty(_LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.nickName)) {
                console.error('?????????????????????');
                yield _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.getUserInfo();
            }
            if (_LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__["default"].IsNullOrEmpty(_LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.nickName)) {
                return _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_8__["default"].Toast("????????????????????????");
            }
            let Record = yield this.RecordRankInfo(levelID, score);
            if (!Record)
                return onGetList(null);
            let appid = this.appId;
            if (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].Oppo) {
                appid = _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platformData.appKey;
            }
            let sendData = {
                appid: appid,
                openId: _LTSDK__WEBPACK_IMPORTED_MODULE_10__["default"].instance.uid,
                times: score,
                nickname: _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.nickName,
                avatar: _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.avatarUrl,
                type: levelID,
                count: count,
                sort: sort
            };
            // LTHttp.Send(this._headPrefix + "/api/rank/week/time", Laya.Handler.create(this, this._OnGetRankList), Laya.Handler.create(this, (res) => {
            //     console.log("????????????????????????????????????", res);
            // }), true, sendData);
            _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_3__["default"].Send(this._headPrefix + "/api/rank/week/time", Laya.Handler.create(this, (res) => {
                let data = JSON.parse(res);
                if (data.code == 1) {
                    onGetList(data);
                }
            }), Laya.Handler.create(this, (res) => {
                console.log("?????????????????????????????????", res);
                onGetList(null);
            }), true, sendData);
        });
    }
    /**
     * ??????????????? ?????????????????????????????????????????????????????? week_rank_count
     * @param levelID ??????
     * @param score ??????/??????
     * @param onGetList ????????????
     */
    GetDayRankList(levelID, score, onGetList, sort = 2, count = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            if (_LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__["default"].IsNullOrEmpty(_LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.nickName)) {
                console.error('?????????????????????');
                yield _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.getUserInfo();
            }
            if (_LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__["default"].IsNullOrEmpty(_LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.nickName)) {
                return _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_8__["default"].Toast("????????????????????????");
            }
            let Record = yield this.RecordRankInfo(levelID, score);
            if (!Record)
                return onGetList(null);
            let appid = this.appId;
            if (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].Oppo) {
                appid = _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platformData.appKey;
            }
            let sendData = {
                appid: appid,
                openId: _LTSDK__WEBPACK_IMPORTED_MODULE_10__["default"].instance.uid,
                times: score,
                type: levelID,
                count: count,
                nickname: _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.nickName,
                avatar: _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.avatarUrl,
                sort: sort
            };
            _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_3__["default"].Send(this._headPrefix + "/api/rank/day/time", Laya.Handler.create(this, (res) => {
                let data = JSON.parse(res);
                console.log(res);
                if (data.code == 1) {
                    onGetList(data);
                }
            }), Laya.Handler.create(this, (res) => {
                console.log("????????????????????????????????????", res);
                onGetList(null);
            }), true, sendData);
        });
    }
    _OnRcordRank(res) {
        let getObj = JSON.parse(res);
        if (this.enableDebug) {
            console.log("????????????????????????", getObj);
        }
        if (getObj.code == 1) {
            console.log('??????????????????');
            return true;
        }
        else {
            console.error("??????????????????????????????", getObj);
            return false;
        }
    }
    _OnGetRankList(res) {
        let getObj = JSON.parse(res);
        if (this.enableDebug) {
            console.log("????????????????????????", getObj);
        }
        if (getObj.code == 1) {
            console.log('??????????????????');
        }
        else {
            console.error("??????????????????????????????", getObj);
        }
    }
    _OnRequestShareInfo(res) {
        let getObj = JSON.parse(res);
        if (this.enableDebug) {
            console.log("??????????????????", getObj);
        }
        if (getObj.code == 1) {
            let shareInfo = getObj.data;
            if (shareInfo == null) {
                console.log("?????????????????????????????????");
                return;
            }
            let wrapShareInfo = new _LTGame_Platform_ShareInfo__WEBPACK_IMPORTED_MODULE_6__["ShareInfo"]();
            wrapShareInfo.shareId = shareInfo.id;
            wrapShareInfo.shareImg = shareInfo.picurl;
            wrapShareInfo.shareTitle = shareInfo.title;
            _LTGame_Platform_ShareManager__WEBPACK_IMPORTED_MODULE_7__["default"].instance.AddShareInfo(wrapShareInfo);
        }
        else {
            console.error("????????????????????????", getObj);
        }
    }
    ReportShowAd(adList) {
        console.log("??????????????????");
    }
    ReportClickAd(adid, locationId, jumpSuccess, scene = 'defalut_scene') {
        let appid = this.appId;
        if (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].Oppo) {
            appid = _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platformData.appKey;
        }
        let sendData = {
            appid: appid,
            openId: _LTSDK__WEBPACK_IMPORTED_MODULE_10__["default"].instance.uid,
            adId: adid,
            code: locationId,
            scene: scene,
            status: jumpSuccess ? 1 : 0
        };
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_3__["default"].Send(this._headPrefix + "/ads/click/post", Laya.Handler.create(this, (res) => {
            console.log("????????????????????????", res);
        }), Laya.Handler.create(this, (res) => {
            console.log("????????????????????????", res);
        }), true, sendData);
    }
    RequestADList() {
        let sendData = {
            appid: _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].Oppo ? _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platformData.appKey : this.appId,
            openId: _LTSDK__WEBPACK_IMPORTED_MODULE_10__["default"].instance.uid
        };
        if (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].TT) {
            sendData.appid = "88888888";
        }
        if (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].WX || _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].Web) {
            sendData.appid = "wx88888888";
        }
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_3__["default"].Send(this._headPrefix + "/ads/get", Laya.Handler.create(this, this.onGetAdlist), Laya.Handler.create(this, (res) => {
            console.log("????????????????????????", res);
        }), true, sendData);
    }
    RequestRemoteConfig() {
        let uid = this.appId;
        if (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].Oppo || _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].Vivo) {
            uid = _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platformData.appKey;
        }
        let sendData = {
            appid: uid,
            version: this.controlVersion
        };
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_3__["default"].Send(this._headPrefix + "/api/game/config", Laya.Handler.create(this, this._OnRemoteConfigBack), Laya.Handler.create(this, (res) => {
            console.log("??????HTTP????????????", res);
        }), true, sendData);
    }
    /**
     * ????????????????????????
     * @param res
     */
    _OnRemoteConfigBack(res) {
        // ????????????????????????
        if (res.status == null) {
            res = JSON.parse(res);
        }
        if (this.enableDebug)
            console.log("??????????????????:", res);
        this.configs.isADEnable = false;
        this.isConfigEnable = true;
        if (res.code == 1) {
            // ??????
            let result = res.data;
            if (result) {
                console.log('??????????????????????????? ???????????? ');
                if (result['payRate']) {
                    this.configs.payRate = parseInt(result['payRate']);
                }
                if (result['isDelayClose']) {
                    this.configs.isDelayClose = (result['isDelayClose']) == "1";
                }
                if (result['isShielding']) {
                    this.configs.isShielding = "1" == (result['isShielding']);
                }
                if (result["isADEnable"]) {
                    this.configs.isADEnable = "1" == (result["isADEnable"]);
                }
                if (result['isNavEnable']) {
                    this.configs.isNavEnable = result['isNavEnable'] == '1';
                }
                if (result["gamecenterLevel"]) {
                    this.configs.gamecenterLevel = parseInt(result['gamecenterLevel']);
                }
                if (result['nativePayRate']) {
                    this.configs.nativePayRate = parseInt(result['nativePayRate']);
                }
                if (result['nativeClickCount']) {
                    this.configs.nativeClickCount = parseInt(result['nativeClickCount']);
                }
                if (result['changeEnable']) {
                    this.configs.changeEnable = result['changeEnable'] == '1';
                }
                if (result["gamecenterLevel"]) {
                    this.configs.gamecenterLevel = parseInt(result['gamecenterLevel']);
                }
                if (result['navLevels']) {
                    let arr = (result['navLevels']).split(',');
                    for (let item in arr) {
                        this.navLevels.push(parseInt(arr[item]));
                    }
                }
                if (result['checkState']) {
                    this.checkState = parseInt(result['checkState']);
                }
                else {
                    this.checkState = _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].Oppo ? _common_ECheckState__WEBPACK_IMPORTED_MODULE_9__["ECheckState"].InCheck : _common_ECheckState__WEBPACK_IMPORTED_MODULE_9__["ECheckState"].Normal;
                }
                if (result['nowtime']) {
                    this.configs.severTime = result['nowtime'];
                }
                if (result['shieldHours']) {
                    this.configs.shieldHours = result['shieldHours'].split(',');
                }
            }
            else {
                console.log("????????????????????????,?????????????????????");
            }
        }
        else {
            // ??????
            console.error("????????????????????????", res);
        }
        this._UpdateCheckState();
        if (this.controlVersion) {
            this.RequestADList();
        }
        this.isADConfigInited = true;
        Laya.stage.event(_LTGame_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_0__["CommonEventId"].AD_CONFIG_GETTED);
    }
    _UpdateCheckState() {
        console.log('??????--??????????????????', `????????????:${_common_ECheckState__WEBPACK_IMPORTED_MODULE_9__["ECheckState"][this.checkState]}`);
        if (this.isShielding || this.checkState == _common_ECheckState__WEBPACK_IMPORTED_MODULE_9__["ECheckState"].InCheck) {
            //???????????? 
            this.configs.payRate = 0;
            this.configs.nativeClickCount = 0;
            this.configs.nativePayRate = 0;
            this.configs.changeEnable = false;
            this.navLevels = [];
            this.configs.gamecenterLevel = 1000;
        }
        else {
            //????????????????????? 
            let date = this.configs.severTime.substr(0, 10).replace(/\-/g, '');
            //2021-04-25 11:41:11
            let h = this.configs.severTime.substr(11, 2);
            let isHoliday = this.configs.holiday != 0;
            if (isHoliday) {
                console.log('????????????', date, h);
            }
            else {
                console.log('?????????', date, h);
                if (this.configs.shieldHours && this.configs.shieldHours.indexOf(h) >= 0) {
                    console.log('??????', this.configs.shieldHours, h);
                    // this.payRate = 0;
                    this.navLevels = [];
                }
            }
        }
        console.log(`${this.appId}---???????????????:${this.controlVersion}`, "???????????????", this.configs);
    }
    Login(code, fromAppId) {
        console.log('???????????????code:', code);
        let appid = (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].Oppo || _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].Vivo) ? _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platformData.appKey : this.appId;
        let sendData = {
            appid: appid,
            // flg: this.flg,
            code: code,
            channel: 'own',
            version: this.controlVersion
        };
        if (this.channel) {
            sendData["channel"] = this.channel;
        }
        if (fromAppId) {
            sendData["fappid"] = fromAppId;
        }
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_3__["default"].Send(this._headPrefix + "/api/login", Laya.Handler.create(this, this._OnAuthSuccess), Laya.Handler.create(this, (res) => {
            console.log("??????HTTP????????????", res);
        }), true, sendData);
    }
    _OnAuthSuccess(res) {
        if (this.enableDebug)
            console.log("SDK??????????????????", res);
        res = JSON.parse(res);
        if (res.code == 1) {
            // ??????
            this._OnLoginSuccess(res);
        }
        else {
            this._OnLoginFailed(res);
        }
    }
    _OnLoginSuccess(res) {
        console.log("SDK????????????", res);
        this.uid = res.openid;
        _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.uid = res.openid;
        _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].SaveToDisk();
        this.ReportDaily();
        this.reportFromVideo();
    }
    _OnLoginFailed(res) {
        console.error("SDK????????????", this.appId, res);
        this.ReportDaily();
        this.reportFromVideo();
    }
    /**????????????????????????*/
    reportFromVideo() {
        // if (!this.reportEnable) return;
        if (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].TT && _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.isDouyin) {
            try {
                let query = _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.lauchOption.query;
                let fromId = 'ytlj';
                let shareId = `ytlj_scene|${_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.lauchOption.scene}`;
                let fromChannel = 'own';
                if (query) {
                    if (query.openId) {
                        fromId = query.openId;
                    }
                    if (query.shareId) {
                        shareId = query.shareId;
                    }
                    if (query.channelId) {
                        fromChannel = query.channelId;
                    }
                    if (fromChannel == 'own' || fromChannel == 'undefined') {
                        return console.log('?????????????????????');
                    }
                    let sendData = {
                        appid: this.appId,
                        fromId: `${fromId}|${fromChannel}`,
                        openId: _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.uid,
                        shareId: shareId
                    };
                    console.log(sendData);
                    _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_3__["default"].Send(this._headPrefix + "/api/share/start/report", Laya.Handler.create(this, () => {
                        console.log('???????????????????????? ????????????');
                    }), Laya.Handler.create(this, (res) => {
                        console.log(" ???????????????????????? ????????????", res);
                    }), true, sendData);
                }
                else {
                    console.log('?????????????????????');
                }
            }
            catch (error) {
                console.error(error);
            }
        }
    }
    ReportStat(isShare, sid) {
        console.log("??????????????????");
    }
    ReportDaily() {
        let fappid = _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.GetFromAppId();
        let channel = fappid ? fappid : _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.channelId;
        let sendData = {
            appid: this.appId,
            channel: channel,
            timeRub: this.timeRub,
            randomNum: this.randomNum,
            fappid: fappid,
            ttId: _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.uid
        };
        console.log(sendData);
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_3__["default"].Send(this._headPrefix + "/api/vus/user/repost", Laya.Handler.create(this, () => {
            console.log('??????????????????');
        }), Laya.Handler.create(this, (res) => {
            console.log(" ??????????????????", res);
        }), true, sendData);
    }
}


/***/ }),

/***/ "./src/SDK/Impl/SDK_Default.ts":
/*!*************************************!*\
  !*** ./src/SDK/Impl/SDK_Default.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SDK_Default; });
/* harmony import */ var _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/Commom/CommonSaveData */ "./src/LTGame/Commom/CommonSaveData.ts");
/* harmony import */ var _LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../LTGame/LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/Net/LTHttp */ "./src/LTGame/Net/LTHttp.ts");
/* harmony import */ var _common_ECheckState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/ECheckState */ "./src/SDK/common/ECheckState.ts");
/* harmony import */ var _Interface_ISDK__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Interface/ISDK */ "./src/SDK/Interface/ISDK.ts");
/* harmony import */ var _SDKADManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SDKADManager */ "./src/SDK/SDKADManager.ts");
/* harmony import */ var _Libs_md5_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../Libs/md5.js */ "./src/SDK/Libs/md5.js");







class SDK_Default {
    constructor() {
        this.uid = "";
    }
    get isShielding() {
        return this.configs.isShielding;
    }
    get isDelayClose() {
        return this.configs.isDelayClose;
    }
    get isADEnable() {
        return this.configs.isADEnable;
    }
    get isNavEnable() {
        return this.configs.isNavEnable;
    }
    get isInCheck() {
        return this.checkState == _common_ECheckState__WEBPACK_IMPORTED_MODULE_3__["ECheckState"].InCheck;
    }
    Init(flg, channel, controlVersion, appid) {
        this.timeRub = Date.now();
        this.randomNum = Math.random().toString(36).substr(2, 8);
        this.configs = new _Interface_ISDK__WEBPACK_IMPORTED_MODULE_4__["RemoteConfig"]();
        this.isADConfigInited = true;
        this.navLevels = [];
        this.configs.payRate = 0;
        this.checkState = _common_ECheckState__WEBPACK_IMPORTED_MODULE_3__["ECheckState"].Normal;
        this.isConfigEnable = true;
        this.flg = flg;
        this.channel = channel;
        this.controlVersion = controlVersion;
        this.appId = appid;
        if (_LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_1__["default"].IsNullOrEmpty(_LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_0__["default"].instance.uid)) {
            let uuid = _Libs_md5_js__WEBPACK_IMPORTED_MODULE_6__["default"].hex_md5(`${this.appId}#${this.timeRub}#${this.randomNum}#43b49394197b65540979c7143da7c8a8`);
            _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_0__["default"].instance.uid = uuid;
            _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_0__["default"].SaveToDisk();
        }
        this.uid = _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_0__["default"].instance.uid;
        this.configs.severTime = "";
        this.configs.shieldHours = [];
        this.adManager = new _SDKADManager__WEBPACK_IMPORTED_MODULE_5__["default"]();
        console.log("SDK:Init", this);
    }
    getToken() {
        return new Promise((resolve, rej) => {
        });
    }
    reportShareInfo(videoId, shareId) {
    }
    _OnGetSelfAdInfosFailed(res) {
        console.error("???????????????????????????", res);
    }
    _OnGetSelfAdInfos(res) {
        let adJson = JSON.parse(res);
        console.log("?????????????????????", adJson.length, "???");
        let fakePosId = 0;
        let adList = [];
        for (let fakeAd of adJson) {
            let adData = {};
            adData.ad_appid = fakeAd.id;
            adData.ad_img = fakeAd.icon;
            adData.ad_name = fakeAd.title;
            adData.ad_package = fakeAd.package;
            if (adData.ad_appid != this.appId) {
                adList.push(adData);
            }
        }
        // ?????????????????????
        this.adManager.InitADs(fakePosId, adList);
    }
    Login(code, fromAppId) {
        console.log("SDK:Login", code, fromAppId);
    }
    RequestRemoteConfig() {
        console.log("SDK:RequestRemoteConfig");
    }
    /**?????????????????? */
    RequestADList() {
        let configFile = 'SelfAdConfig.json';
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_2__["default"].Send(`https://file.gugudang.com/res/down/public/configs/${configFile}`, Laya.Handler.create(this, this._OnGetSelfAdInfos), Laya.Handler.create(this, this._OnGetSelfAdInfosFailed), true);
    }
    ReportClickAd(ad_id, locationId, jumpSuccess) {
        console.log("SDK:ReportClickAd", ad_id);
    }
    ReportShowAd(adList) {
        console.log("SDK:ReportShowAd", adList);
    }
    ReportStat(isShare, sid) {
        console.log("SDK:ReportStat", isShare, sid);
    }
    ReportLogin() {
    }
    ReportDaily() { }
    /**???????????????
* @param levelID ??????
* @param score ??????/??????
* @param onGetList ????????????
*/
    GetWeekRankList(levelID, score, onGetList, sort, count) {
    }
    /**???????????????
   * @param levelID ??????
   * @param score ??????/??????
    *@param onGetList ????????????
   */
    GetDayRankList(levelID, score, onGetList, sort, count) {
    }
    /**
     * ?????????????????????
     * @param levelID ??????
     * @param score ??????/??????
     */
    RecordRankInfo(levelID, score) {
        return new Promise(() => { });
    }
}


/***/ }),

/***/ "./src/SDK/Impl/SDK_YQ.ts":
/*!********************************!*\
  !*** ./src/SDK/Impl/SDK_YQ.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SDK_YQ; });
/* harmony import */ var _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/Net/LTHttp */ "./src/LTGame/Net/LTHttp.ts");
/* harmony import */ var _SDKADManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SDKADManager */ "./src/SDK/SDKADManager.ts");
/* harmony import */ var _LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _Libs_hmac_sha256_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Libs/hmac-sha256.js */ "./src/SDK/Libs/hmac-sha256.js");
/* harmony import */ var _Libs_md5_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../Libs/md5.js */ "./src/SDK/Libs/md5.js");
/* harmony import */ var _LTGame_Platform_ShareManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../LTGame/Platform/ShareManager */ "./src/LTGame/Platform/ShareManager.ts");
/* harmony import */ var _LTGame_Platform_ShareInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../LTGame/Platform/ShareInfo */ "./src/LTGame/Platform/ShareInfo.ts");
/* harmony import */ var _SDK_Default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SDK_Default */ "./src/SDK/Impl/SDK_Default.ts");
/* harmony import */ var _common_ECheckState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/ECheckState */ "./src/SDK/common/ECheckState.ts");









class SDK_YQ extends _SDK_Default__WEBPACK_IMPORTED_MODULE_7__["default"] {
    constructor() {
        super(...arguments);
        this.uid = "sdk_test";
        this._headPrefix = "https://api.yz061.com";
        this.enableDebug = false;
    }
    Init(flg, channel, controlVersion, appId) {
        this.flg = flg;
        this.channel = channel;
        this.controlVersion = controlVersion;
        this.appId = appId;
        this.isADEnable = false;
        this.isConfigEnable = false;
        this.checkState = _common_ECheckState__WEBPACK_IMPORTED_MODULE_8__["ECheckState"].Normal;
        this.adManager = new _SDKADManager__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    ReportShowAd(adList) {
        let reportData = {};
        reportData["gflg"] = this.flg;
        reportData["channel"] = this.channel;
        reportData["data"] = adList;
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_0__["default"].Send(this._headPrefix + "/exposure", Laya.Handler.create(this, (res) => { console.log('ad SHow', reportData, res); }), null, false, reportData);
    }
    ReportClickAd(ad_id, locationId, jumpSuccess) {
        let reportData = {};
        reportData["gflg"] = this.flg;
        reportData["uid"] = this.uid;
        reportData["ad_id"] = ad_id;
        reportData["location_id"] = locationId;
        reportData["channel"] = this.channel;
        if (jumpSuccess) {
            reportData["status"] = "cb";
        }
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_0__["default"].Send(this._headPrefix + "/reportad", Laya.Handler.create(this, (res) => { console.log('ad click', reportData, res); }), null, false, reportData);
    }
    RequestADList() {
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_0__["default"].Send(this._headPrefix + "/game/" + this.flg, Laya.Handler.create(this, this._OnGetADList), Laya.Handler.create(this, (res) => {
            console.log("???????????????HTTP????????????", res);
        }), true);
    }
    ReportLogin() {
        let reportData = {};
        reportData["flg"] = this.flg;
        reportData["uid"] = this.uid;
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_0__["default"].Send(this._headPrefix + "/matter/report", Laya.Handler.create(this, (res) => { console.log('report login', reportData, res); }), null, false, reportData);
    }
    /**
     * ???????????????????????????
     * @param res
     */
    _OnGetADList(res) {
        if (res.status == null) {
            res = JSON.parse(res);
        }
        if (this.enableDebug)
            console.log("????????????????????????:", res);
        if (res.status == 1) {
            for (let item of res.result) {
                let adItem = item;
                this._RequestADListOnPos(adItem);
            }
        }
        else {
            console.error("???????????????????????????", res);
        }
    }
    _RequestADListOnPos(adPosData) {
        if (this.enableDebug)
            console.log("??????????????????????????????:", adPosData);
        // ??????
        if (adPosData.matter_type == 1) {
            _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_0__["default"].Send(adPosData.url, Laya.Handler.create(this, (res) => {
                if (res.status == null) {
                    res = JSON.parse(res);
                }
                if (this.enableDebug)
                    console.log("??????????????????????????????:", res);
                if (res.status == 1) {
                    let adList = [];
                    for (let item of res.result) {
                        let adInfo = item;
                        if (adInfo.ad_device == 0) {
                            // ?????????
                            adList.push(adInfo);
                        }
                        else if (adInfo.ad_device == 1 && Laya.Browser.onAndroid) {
                            // android????????????
                            adList.push(adInfo);
                        }
                        else if (adInfo.ad_device == 2 && Laya.Browser.onIOS) {
                            // ios????????????
                            adList.push(adInfo);
                        }
                    }
                    if (adList.length > 0) {
                        // ?????????????????????
                        this.adManager.InitADs(adPosData.location_id, adList);
                    }
                }
                else {
                    console.error("?????????????????????????????????", res);
                }
            }), Laya.Handler.create(this, (res) => {
                console.log("????????????????????????HTTP????????????", res);
            }), true, { uid: this.uid });
        }
        else if (adPosData.matter_type == 2) {
            // ??????
            _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_0__["default"].Send(adPosData.url, Laya.Handler.create(this, (res) => {
                if (res != null) {
                    res = JSON.parse(res);
                }
                if (this.enableDebug)
                    console.log("???????????????????????????:", res);
                if (res.status == 1) {
                    for (let item of res.result) {
                        let shareInfo = item;
                        let wrapShareInfo = new _LTGame_Platform_ShareInfo__WEBPACK_IMPORTED_MODULE_6__["ShareInfo"]();
                        wrapShareInfo.shareId = shareInfo.share_id;
                        wrapShareInfo.shareImg = shareInfo.share_img;
                        wrapShareInfo.sharePath = shareInfo.share_path;
                        wrapShareInfo.shareTitle = shareInfo.share_title;
                        _LTGame_Platform_ShareManager__WEBPACK_IMPORTED_MODULE_5__["default"].instance.AddShareInfo(wrapShareInfo);
                    }
                }
                else {
                    console.error("??????????????????????????????", res);
                }
            }), Laya.Handler.create(this, (res) => {
                console.log("??????????????????HTTP????????????", res);
            }), true, { uid: this.uid });
        }
    }
    RequestRemoteConfig() {
        let sendData = {
            flg: this.flg
        };
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_0__["default"].Send(this._headPrefix + "/additional", Laya.Handler.create(this, this._OnRemoteConfigBack), Laya.Handler.create(this, (res) => {
            console.log("??????HTTP????????????", res);
        }), true, sendData);
    }
    /**
     * ????????????????????????
     * @param res
     */
    _OnRemoteConfigBack(res) {
        // ????????????????????????
        if (res) {
            res = JSON.parse(res);
        }
        console.log("??????????????????:", res);
        if (res.status == 1) {
            // ??????
            let result = res.result;
            if (result != null) {
                let config = result["config"];
                let ad = result["ad"];
                for (let key in config) {
                    if (key == this.controlVersion) {
                        this.isConfigEnable = config[key] == "1" && this.channel != "own";
                        break;
                    }
                }
                for (let key in ad) {
                    if (key == this.controlVersion) {
                        console.log('YQ ad:', key, ad[key]);
                        this.isADEnable = (ad[key] == "1");
                        break;
                    }
                }
            }
        }
        else {
            // ??????
            console.error("????????????????????????", res);
            this.isADEnable = false;
            this.isConfigEnable = false;
        }
        if (!this.isADEnable) {
            this.checkState = _common_ECheckState__WEBPACK_IMPORTED_MODULE_8__["ECheckState"].Normal;
        }
        console.log("???????????????:", this.controlVersion, "config:", this.isConfigEnable, "ad:", this.isADEnable);
        if (this.controlVersion) {
            this.RequestADList();
        }
    }
    Login(code, fromAppId) {
        console.log('??????YQ', code, fromAppId);
        let sendData = {
            flg: this.flg,
            code: code
        };
        if (this.channel) {
            sendData["channel"] = this.channel;
        }
        if (fromAppId) {
            sendData["appid"] = fromAppId;
        }
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_0__["default"].Send(this._headPrefix + "/auth", Laya.Handler.create(this, this._OnAuthSuccess), Laya.Handler.create(this, (res) => {
            console.log("??????HTTP????????????", res);
        }), true, sendData);
    }
    _OnAuthSuccess(res) {
        res = JSON.parse(res);
        if (this.enableDebug)
            console.log("SDK??????????????????", res);
        if (res.status == 1) {
            // ??????
            this._OnLoginSuccess(res.result);
            this.ReportLogin();
        }
        else {
            this._OnLoginFailed(res);
        }
    }
    canShowAds() {
    }
    ReportDaily() {
        let recordData = {};
        recordData["flg"] = this.flg;
        recordData["uid"] = this.uid;
        recordData["channel"] = this.channel;
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_0__["default"].Send(this._headPrefix + "/daily", null, null, false, recordData);
    }
    ReportStat(isShare, sid) {
        let recordData = {};
        recordData["flg"] = this.flg;
        recordData["channel"] = this.channel;
        recordData["loc"] = isShare ? "share" : "video";
        recordData["uid"] = this.uid;
        if (!_LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__["default"].IsNullOrEmpty(sid)) {
            recordData["sid"] = sid;
        }
        let sign = this._CalcSign(recordData);
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_0__["default"].SendPro(this._headPrefix + "/stat?sign=" + sign, Laya.Handler.create(null, (res) => {
            console.log("stat", res);
        }), null, "post", recordData);
    }
    _CalcSign(obj) {
        let keyList = Object.keys(obj).sort();
        let paramList = [];
        for (let key of keyList) {
            paramList.push(key + "=" + obj[key]);
        }
        let signStr = paramList.join("&");
        return _Libs_hmac_sha256_js__WEBPACK_IMPORTED_MODULE_3__["default"].HmacSHA256(signStr, _Libs_md5_js__WEBPACK_IMPORTED_MODULE_4__["default"].hex_md5(this.uid + this.flg)).toString();
    }
    _OnLoginSuccess(res) {
        console.log("SDK????????????", res);
        this.uid = res.openid;
        this.ReportDaily();
    }
    _OnLoginFailed(res) {
        console.error("SDK????????????", res);
    }
}


/***/ }),

/***/ "./src/SDK/Interface/ISDK.ts":
/*!***********************************!*\
  !*** ./src/SDK/Interface/ISDK.ts ***!
  \***********************************/
/*! exports provided: RemoteConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteConfig", function() { return RemoteConfig; });
class RemoteConfig {
    constructor() {
        this.holiday = 0;
        this.holidayName = "";
        this.holidayWeek = "1";
        this.isADEnable = false;
        this.isDelayClose = false;
        this.isShielding = false;
        this.isNavEnable = false;
        this.gamecenterLevel = 100;
        this.nativePayRate = 0;
        this.nativeClickCount = 0;
        this.changeEnable = true;
        this.shieldHours = [];
        this.severTime = "";
        this.payRate = 0;
        /**?????????????????? */
        this.navLevels = [];
    }
}


/***/ }),

/***/ "./src/SDK/LTSDK.ts":
/*!**************************!*\
  !*** ./src/SDK/LTSDK.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTSDK; });
/* harmony import */ var _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LTGame/Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _Impl_SDK_CQ__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Impl/SDK_CQ */ "./src/SDK/Impl/SDK_CQ.ts");
/* harmony import */ var _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LTGame/Commom/CommonSaveData */ "./src/LTGame/Commom/CommonSaveData.ts");



class LTSDK {
    static get instance() {
        if (this._instance == null) {
            console.error("sdk???????????????,????????????CreateInstance???????????????");
            return null;
        }
        return this._instance;
    }
    static get isInited() {
        return this._instance != null;
    }
    /**
     *
     * @param sdkClass ???????????????
     * @param identifyId ????????????
     * @param controlVersion ????????????
     */
    static CreateInstace(sdkClass, identifyId, controlVersion, appId) {
        if (this._instance != null) {
            console.error("SDK???????????????????????????");
            return this._instance;
        }
        this._instance = new sdkClass();
        console.log('???????????????SDK');
        // ?????????sdk
        let channel = LTSDK.getChannel();
        this._instance.Init(identifyId, channel, controlVersion, appId);
        console.log(`channel=${channel}`);
        // ??????????????????
        this._instance.RequestRemoteConfig();
        // ??????sdk??????
        _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].instance.onLoginEnd = Laya.Handler.create(null, () => {
            // if (LTPlatform.instance.platform == EPlatformType.WX) {
            //     if ((LTPlatform.instance as WXPlatform).loginCode) {
            //         LTSDK.instance.Login((LTPlatform.instance as WXPlatform).loginCode, LTPlatform.instance.GetFromAppId());
            //     } else {
            //         console.log("wx???????????????,????????????sdk");
            //         LTSDK.instance.Login((LTPlatform.instance as WXPlatform).loginCode, LTPlatform.instance.GetFromAppId());
            //     }
            // } else {
            if (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].instance.loginState.isLogin) {
                LTSDK.instance.Login(_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].instance.loginState.code, _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].instance.GetFromAppId());
            }
            else {
                console.log("???????????????,????????????sdk");
                LTSDK.instance.Login(LTSDK.instance.uid, _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].instance.GetFromAppId());
            }
            // }
        });
        return this._instance;
    }
    static getChannel() {
        let channel = _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].instance.GetStorage('user_from_channel');
        let options = _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].instance.lauchOption;
        console.log('??????channel', channel);
        if (LTSDK.instance instanceof _Impl_SDK_CQ__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            if (_LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__["default"].instance.channelId != 'own' && options && options.query && options.query.channelId) {
                channel = options.query.channelId;
                if (channel) {
                    _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__["default"].instance.channelId = channel;
                    _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__["default"].SaveToDisk();
                }
            }
            return _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__["default"].instance.channelId;
        }
        if (!channel) {
            if (options && options.query) {
                channel = options.query['channel'];
                console.log('options channel', channel);
            }
            if (!channel) {
                console.log('??????????????????,channel?????? own');
                channel = 'own';
            }
        }
        _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].instance.SetStorage('user_from_channel', channel);
        return channel;
    }
}


/***/ }),

/***/ "./src/SDK/Libs/hmac-sha256.js":
/*!*************************************!*\
  !*** ./src/SDK/Libs/hmac-sha256.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS = CryptoJS || function (h, s) {
    var f = {},
        g = f.lib = {},
        q = function () {},
        m = g.Base = {
            extend: function (a) {
                q.prototype = this;
                var c = new q;
                a && c.mixIn(a);
                c.hasOwnProperty("init") || (c.init = function () {
                    c.$super.init.apply(this, arguments)
                });
                c.init.prototype = c;
                c.$super = this;
                return c
            },
            create: function () {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            },
            init: function () {},
            mixIn: function (a) {
                for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            },
            clone: function () {
                return this.init.prototype.extend(this)
            }
        },
        r = g.WordArray = m.extend({
            init: function (a, c) {
                a = this.words = a || [];
                this.sigBytes = c != s ? c : 4 * a.length
            },
            toString: function (a) {
                return (a || k).stringify(this)
            },
            concat: function (a) {
                var c = this.words,
                    d = a.words,
                    b = this.sigBytes;
                a = a.sigBytes;
                this.clamp();
                if (b % 4)
                    for (var e = 0; e < a; e++) c[b + e >>> 2] |= (d[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 24 - 8 * ((b + e) % 4);
                else if (65535 < d.length)
                    for (e = 0; e < a; e += 4) c[b + e >>> 2] = d[e >>> 2];
                else c.push.apply(c, d);
                this.sigBytes += a;
                return this
            },
            clamp: function () {
                var a = this.words,
                    c = this.sigBytes;
                a[c >>> 2] &= 4294967295 <<
                    32 - 8 * (c % 4);
                a.length = h.ceil(c / 4)
            },
            clone: function () {
                var a = m.clone.call(this);
                a.words = this.words.slice(0);
                return a
            },
            random: function (a) {
                for (var c = [], d = 0; d < a; d += 4) c.push(4294967296 * h.random() | 0);
                return new r.init(c, a)
            }
        }),
        l = f.enc = {},
        k = l.Hex = {
            stringify: function (a) {
                var c = a.words;
                a = a.sigBytes;
                for (var d = [], b = 0; b < a; b++) {
                    var e = c[b >>> 2] >>> 24 - 8 * (b % 4) & 255;
                    d.push((e >>> 4).toString(16));
                    d.push((e & 15).toString(16))
                }
                return d.join("")
            },
            parse: function (a) {
                for (var c = a.length, d = [], b = 0; b < c; b += 2) d[b >>> 3] |= parseInt(a.substr(b,
                    2), 16) << 24 - 4 * (b % 8);
                return new r.init(d, c / 2)
            }
        },
        n = l.Latin1 = {
            stringify: function (a) {
                var c = a.words;
                a = a.sigBytes;
                for (var d = [], b = 0; b < a; b++) d.push(String.fromCharCode(c[b >>> 2] >>> 24 - 8 * (b % 4) & 255));
                return d.join("")
            },
            parse: function (a) {
                for (var c = a.length, d = [], b = 0; b < c; b++) d[b >>> 2] |= (a.charCodeAt(b) & 255) << 24 - 8 * (b % 4);
                return new r.init(d, c)
            }
        },
        j = l.Utf8 = {
            stringify: function (a) {
                try {
                    return decodeURIComponent(escape(n.stringify(a)))
                } catch (c) {
                    throw Error("Malformed UTF-8 data");
                }
            },
            parse: function (a) {
                return n.parse(unescape(encodeURIComponent(a)))
            }
        },
        u = g.BufferedBlockAlgorithm = m.extend({
            reset: function () {
                this._data = new r.init;
                this._nDataBytes = 0
            },
            _append: function (a) {
                "string" == typeof a && (a = j.parse(a));
                this._data.concat(a);
                this._nDataBytes += a.sigBytes
            },
            _process: function (a) {
                var c = this._data,
                    d = c.words,
                    b = c.sigBytes,
                    e = this.blockSize,
                    f = b / (4 * e),
                    f = a ? h.ceil(f) : h.max((f | 0) - this._minBufferSize, 0);
                a = f * e;
                b = h.min(4 * a, b);
                if (a) {
                    for (var g = 0; g < a; g += e) this._doProcessBlock(d, g);
                    g = d.splice(0, a);
                    c.sigBytes -= b
                }
                return new r.init(g, b)
            },
            clone: function () {
                var a = m.clone.call(this);
                a._data = this._data.clone();
                return a
            },
            _minBufferSize: 0
        });
    g.Hasher = u.extend({
        cfg: m.extend(),
        init: function (a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function () {
            u.reset.call(this);
            this._doReset()
        },
        update: function (a) {
            this._append(a);
            this._process();
            return this
        },
        finalize: function (a) {
            a && this._append(a);
            return this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function (a) {
            return function (c, d) {
                return (new a.init(d)).finalize(c)
            }
        },
        _createHmacHelper: function (a) {
            return function (c, d) {
                return (new t.HMAC.init(a,
                    d)).finalize(c)
            }
        }
    });
    var t = f.algo = {};
    return f
}(Math);
(function (h) {
    for (var s = CryptoJS, f = s.lib, g = f.WordArray, q = f.Hasher, f = s.algo, m = [], r = [], l = function (a) {
            return 4294967296 * (a - (a | 0)) | 0
        }, k = 2, n = 0; 64 > n;) {
        var j;
        a: {
            j = k;
            for (var u = h.sqrt(j), t = 2; t <= u; t++)
                if (!(j % t)) {
                    j = !1;
                    break a
                } j = !0
        }
        j && (8 > n && (m[n] = l(h.pow(k, 0.5))), r[n] = l(h.pow(k, 1 / 3)), n++);
        k++
    }
    var a = [],
        f = f.SHA256 = q.extend({
            _doReset: function () {
                this._hash = new g.init(m.slice(0))
            },
            _doProcessBlock: function (c, d) {
                for (var b = this._hash.words, e = b[0], f = b[1], g = b[2], j = b[3], h = b[4], m = b[5], n = b[6], q = b[7], p = 0; 64 > p; p++) {
                    if (16 > p) a[p] =
                        c[d + p] | 0;
                    else {
                        var k = a[p - 15],
                            l = a[p - 2];
                        a[p] = ((k << 25 | k >>> 7) ^ (k << 14 | k >>> 18) ^ k >>> 3) + a[p - 7] + ((l << 15 | l >>> 17) ^ (l << 13 | l >>> 19) ^ l >>> 10) + a[p - 16]
                    }
                    k = q + ((h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25)) + (h & m ^ ~h & n) + r[p] + a[p];
                    l = ((e << 30 | e >>> 2) ^ (e << 19 | e >>> 13) ^ (e << 10 | e >>> 22)) + (e & f ^ e & g ^ f & g);
                    q = n;
                    n = m;
                    m = h;
                    h = j + k | 0;
                    j = g;
                    g = f;
                    f = e;
                    e = k + l | 0
                }
                b[0] = b[0] + e | 0;
                b[1] = b[1] + f | 0;
                b[2] = b[2] + g | 0;
                b[3] = b[3] + j | 0;
                b[4] = b[4] + h | 0;
                b[5] = b[5] + m | 0;
                b[6] = b[6] + n | 0;
                b[7] = b[7] + q | 0
            },
            _doFinalize: function () {
                var a = this._data,
                    d = a.words,
                    b = 8 * this._nDataBytes,
                    e = 8 * a.sigBytes;
                d[e >>> 5] |= 128 << 24 - e % 32;
                d[(e + 64 >>> 9 << 4) + 14] = h.floor(b / 4294967296);
                d[(e + 64 >>> 9 << 4) + 15] = b;
                a.sigBytes = 4 * d.length;
                this._process();
                return this._hash
            },
            clone: function () {
                var a = q.clone.call(this);
                a._hash = this._hash.clone();
                return a
            }
        });
    s.SHA256 = q._createHelper(f);
    s.HmacSHA256 = q._createHmacHelper(f)
})(Math);
(function () {
    var h = CryptoJS,
        s = h.enc.Utf8;
    h.algo.HMAC = h.lib.Base.extend({
        init: function (f, g) {
            f = this._hasher = new f.init;
            "string" == typeof g && (g = s.parse(g));
            var h = f.blockSize,
                m = 4 * h;
            g.sigBytes > m && (g = f.finalize(g));
            g.clamp();
            for (var r = this._oKey = g.clone(), l = this._iKey = g.clone(), k = r.words, n = l.words, j = 0; j < h; j++) k[j] ^= 1549556828, n[j] ^= 909522486;
            r.sigBytes = l.sigBytes = m;
            this.reset()
        },
        reset: function () {
            var f = this._hasher;
            f.reset();
            f.update(this._iKey)
        },
        update: function (f) {
            this._hasher.update(f);
            return this
        },
        finalize: function (f) {
            var g =
                this._hasher;
            f = g.finalize(f);
            g.reset();
            return g.finalize(this._oKey.clone().concat(f))
        }
    })
})();
/* harmony default export */ __webpack_exports__["default"] = (CryptoJS);


/***/ }),

/***/ "./src/SDK/Libs/md5.js":
/*!*****************************!*\
  !*** ./src/SDK/Libs/md5.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad  = ""; /* base-64 pad character. "=" for strict RFC compliance   */
var chrsz   = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_md5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}
function b64_md5(s){ return binl2b64(core_md5(str2binl(s), s.length * chrsz));}
function str_md5(s){ return binl2str(core_md5(str2binl(s), s.length * chrsz));}
function hex_hmac_md5(key, data) { return binl2hex(core_hmac_md5(key, data)); }
function b64_hmac_md5(key, data) { return binl2b64(core_hmac_md5(key, data)); }
function str_hmac_md5(key, data) { return binl2str(core_hmac_md5(key, data)); }

/*
 * Perform a simple self-test to see if the VM is working
 */
function md5_vm_test()
{
  return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
}

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length
 */
function core_md5(x, len)
{
  /* append padding */
  x[len >> 5] |= 0x80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;

  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);

}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5_cmn(q, a, b, x, s, t)
{
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function md5_ff(a, b, c, d, x, s, t)
{
  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t)
{
  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t)
{
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t)
{
  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

/*
 * Calculate the HMAC-MD5, of a key and some data
 */
function core_hmac_md5(key, data)
{
  var bkey = str2binl(key);
  if(bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);

  var ipad = Array(16), opad = Array(16);
  for(var i = 0; i < 16; i++)
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
  return core_md5(opad.concat(hash), 512 + 128);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

/*
 * Convert a string to an array of little-endian words
 * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
 */
function str2binl(str)
{
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
  return bin;
}

/*
 * Convert an array of little-endian words to a string
 */
function binl2str(bin)
{
  var str = "";
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < bin.length * 32; i += chrsz)
    str += String.fromCharCode((bin[i>>5] >>> (i % 32)) & mask);
  return str;
}

/*
 * Convert an array of little-endian words to a hex string.
 */
function binl2hex(binarray)
{
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i++)
  {
    str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
           hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
  }
  return str;
}

/*
 * Convert an array of little-endian words to a base-64 string
 */
function binl2b64(binarray)
{
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i += 3)
  {
    var triplet = (((binarray[i   >> 2] >> 8 * ( i   %4)) & 0xFF) << 16)
                | (((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 )
                |  ((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
      else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
    }
  }
  return str;
}



/* harmony default export */ __webpack_exports__["default"] = ({hex_md5});


/***/ }),

/***/ "./src/SDK/SDKADManager.ts":
/*!*********************************!*\
  !*** ./src/SDK/SDKADManager.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SDKADManager; });
/* harmony import */ var _LTGame_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LTGame/Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");

class SDKADManager {
    constructor() {
        this._adDict = new Map();
    }
    /**
     * ??????????????????????????????
     * @param locationId ??????ID
     * @param adList ????????????
     */
    InitADs(locationId, adList) {
        this._adDict[locationId] = adList;
        console.log("?????????????????????????????????,??????ID:", locationId, "????????????:", adList);
        Laya.stage.event(_LTGame_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_0__["CommonEventId"].SELF_AD_INITED, locationId);
    }
    /**
     * ??????????????????,???????????????????????????????????????
     * @param adInfo
     */
    HandleClickAd(adInfo) {
    }
    /**
     * ????????????
     */
    RecordShow(...adInfo) {
    }
    /**
     * ??????????????????id????????????
     * @param locationId
     */
    GetADListByLocationId(locationId) {
        return this._adDict[locationId];
    }
}


/***/ }),

/***/ "./src/SDK/common/ECheckState.ts":
/*!***************************************!*\
  !*** ./src/SDK/common/ECheckState.ts ***!
  \***************************************/
/*! exports provided: ECheckState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECheckState", function() { return ECheckState; });
var ECheckState;
(function (ECheckState) {
    /**
     * ????????????
     */
    ECheckState[ECheckState["Normal"] = 0] = "Normal";
    /**
     * ????????????
     */
    ECheckState[ECheckState["InCheck"] = 1] = "InCheck";
    /**
     * ?????????????????????????????????
     */
    ECheckState[ECheckState["NoGame"] = 2] = "NoGame";
})(ECheckState || (ECheckState = {}));


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LTGame_Start_LTMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LTGame/Start/LTMain */ "./src/LTGame/Start/LTMain.ts");
/* harmony import */ var _script_MainStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/MainStart */ "./src/script/MainStart.ts");


new _LTGame_Start_LTMain__WEBPACK_IMPORTED_MODULE_0__["default"](_script_MainStart__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/script/MainStart.ts":
/*!*********************************!*\
  !*** ./src/script/MainStart.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainStart; });
/* harmony import */ var _LTGame_Commom_CommonProgressData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LTGame/Commom/CommonProgressData */ "./src/LTGame/Commom/CommonProgressData.ts");
/* harmony import */ var _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LTGame/Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LTGame/Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _LTGame_Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LTGame/Res/LTRespackManager */ "./src/LTGame/Res/LTRespackManager.ts");
/* harmony import */ var _LTGame_Start_LTStart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LTGame/Start/LTStart */ "./src/LTGame/Start/LTStart.ts");
/* harmony import */ var _SDK_Impl_SDK_CQ__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SDK/Impl/SDK_CQ */ "./src/SDK/Impl/SDK_CQ.ts");
/* harmony import */ var _SDK_Impl_SDK_Default__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SDK/Impl/SDK_Default */ "./src/SDK/Impl/SDK_Default.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _common_GameData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/GameData */ "./src/script/common/GameData.ts");
/* harmony import */ var _scene_MainScene__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scene/MainScene */ "./src/script/scene/MainScene.ts");
/* harmony import */ var _scene_SplashScene__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scene/SplashScene */ "./src/script/scene/SplashScene.ts");











class MainStart extends _LTGame_Start_LTStart__WEBPACK_IMPORTED_MODULE_4__["LTStart"] {
    constructor() {
        super();
        this._appId = "";
        /**SDK??????????????? */
        this._gameVersion = "1.0.0";
        /**???????????? */
        this._resVersion = "0515";
        /**????????? */
        this._gameName = "p_ltg";
        this._remoteUrl = "https://file.gugudang.com";
        this.enableStat = true;
    }
    _HandleInitPlatform(ePlatform, platformData) {
        // window["__GM"] = true;
        _common_GameData__WEBPACK_IMPORTED_MODULE_8__["default"].SAVE_NAME = this._gameName + '.sav';
        _LTGame_Commom_CommonProgressData__WEBPACK_IMPORTED_MODULE_0__["CommonProgressData"].Init(this._gameName + '.progress');
        switch (ePlatform) {
            case _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].Web:
                console.log("web??????,????????????????????????");
                this._gameVersion = '0.0.6'; //1.0.1 ?????????????????? 
                platformData.appId = "wx5cd52a0463c90093"; //'88888888';
                platformData.appKey = '11111111111';
                break;
            case _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].TT:
                this._gameVersion = "0.0.1";
                this._resVersion = '0.0.1';
                platformData.appId = "tt937ae5c70c433f5302";
                platformData.bannerId = "1bhbt9cjpr9a35bd30";
                platformData.rewardVideoId = "6tnnb4e3em519ja6d2";
                platformData.interstitialId = "8oe7qjl1pon2g930jf";
                _LTGame_Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_3__["default"].instance.SetRemoteUrl(`${this._remoteUrl}/res/down/public/${this._gameName}/${this._resVersion}_tt/`);
                break;
            case _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].WX:
                this._gameVersion = "0.0.6";
                this._resVersion = 'v0.0.1';
                platformData.appId = "wx5cd52a0463c90093";
                platformData.bannerId = "adunit-11a2571806b5fc5c";
                platformData.rewardVideoId = "adunit-fa6dd5b431c41ceb";
                platformData.interstitialId = "adunit-abe9d252f3a3956c";
                platformData.gameBoxAdId = "adunit-0821c87792b6f7d4";
                platformData.gameBoxBannerId = "adunit-5b331ccc3d1112e6";
                // platformData.="adunit-5b331ccc3d1112e6";
                _LTGame_Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_3__["default"].instance.SetRemoteUrl(`${this._remoteUrl}/res/down/public/${this._gameName}/${this._resVersion}_wx/`);
                break;
            case _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].Oppo:
                this._gameVersion = "0.0.0";
                this._resVersion = "0710";
                platformData.appId = "30685025";
                platformData.appKey = "9jon5f9Ak3k0c8O08gSSG80C0";
                platformData.bannerId = "420707";
                platformData.rewardVideoId = "420714";
                platformData.gameBoxAdId = "420715";
                platformData.gameBoxBannerId = "420716";
                platformData.nativeinpageIds = ['420711'];
                platformData.nativeId = "420713";
                _LTGame_Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_3__["default"].instance.SetRemoteUrl(`${this._remoteUrl}/res/down/public/${this._gameName}/${this._resVersion}_oppo/`);
                break;
            case _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].Vivo:
                this._gameVersion = "0.0.0";
                this._resVersion = "211123";
                platformData.appId = "105524391";
                platformData.appKey = "105524391"; // "4593206c07a95b1edf85";
                platformData.bannerId = "8f93f85e270c4e0ba3f7fc1e8f1c062c";
                platformData.rewardVideoId = "57f8d513c4144775aa9d99839b002c5b";
                platformData.interstitialId = "bc3f2b80985447d9a75b5b39b308490c";
                platformData.nativeinpageIds = ['64f78dae69174671a73ad51f4ea1a3ce'];
                platformData.nativeId = "d245a29f9e6741b6807e1fcc71c34e53";
                platformData.gameBoxAdId = "0e9f57ddc2584bd1a36eac7136d4d3f5";
                platformData.gameBoxBannerId = "20eabb82c12b439b82d2f9274b0101d9";
                _LTGame_Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_3__["default"].instance.SetRemoteUrl(`${this._remoteUrl}/res/down/public/${this._gameName}/vivo_${this._resVersion}/`);
                break;
            case _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].KS:
                this._gameVersion = "0.0.1";
                this._resVersion = "0.0.1";
                platformData.appId = "ks667940122780561072";
                platformData.rewardVideoId = "2300000737_01";
                platformData.interstitialId = "2300000737_02";
                _LTGame_Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_3__["default"].instance.SetRemoteUrl(`${this._remoteUrl}/res/down/public/${this._gameName}/ks_${this._resVersion}/`);
                break;
            case _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].HW:
                this._gameVersion = "0.0.1";
                this._resVersion = "0723";
                platformData.appId = "104360501";
                platformData.appKey = "104360501"; // "4593206c07a95b1edf85";
                //???????????????
                platformData.bannerId = "j1pcnpx5tu";
                platformData.rewardVideoId = "e7hm5vx799";
                platformData.interstitialId = "testb4znbuh3n2";
                platformData.nativeinpageIds = ['u7m3hc4gvm'];
                _LTGame_Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_3__["default"].instance.SetRemoteUrl(`${this._remoteUrl}/res/down/public/${this._gameName}/hw_${this._resVersion}/`);
                break;
            case _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].Gamebox4399:
                this._gameVersion = "0.0.1";
                this._resVersion = "0723";
                platformData.appId = "104360501";
                _LTGame_Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_3__["default"].instance.SetRemoteUrl(`${this._remoteUrl}/res/down/public/${this._gameName}/gb_${this._resVersion}/`);
                break;
            default:
                console.error("?????????????????????", _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].platformStr, "??????MainStart???????????????");
                break;
        }
        if (platformData.appId) {
            this._appId = platformData.appId;
        }
    }
    _HandleSDK() {
        switch (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.platform) {
            case _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].Native_IOS:
            case _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].Native_Android:
            case _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].Native_Android_233:
            case _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].Native_IOS:
                _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_7__["default"].CreateInstace(_SDK_Impl_SDK_Default__WEBPACK_IMPORTED_MODULE_6__["default"], this._gameName, this._gameVersion, this._appId);
                break;
            default:
                _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_7__["default"].CreateInstace(_SDK_Impl_SDK_CQ__WEBPACK_IMPORTED_MODULE_5__["default"], this._gameName, this._gameVersion, this._appId); //
                break;
        }
    }
    _InitFsm() {
        this._fsm.Add(new _scene_SplashScene__WEBPACK_IMPORTED_MODULE_10__["default"]());
        this._fsm.Add(new _scene_MainScene__WEBPACK_IMPORTED_MODULE_9__["default"]());
    }
}


/***/ }),

/***/ "./src/script/_auto_gen_/AutoConfigSetter.ts":
/*!***************************************************!*\
  !*** ./src/script/_auto_gen_/AutoConfigSetter.ts ***!
  \***************************************************/
/*! exports provided: AutoConfigSetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoConfigSetter", function() { return AutoConfigSetter; });
/* harmony import */ var _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/Config/ConfigManager */ "./src/LTGame/Config/ConfigManager.ts");
/* harmony import */ var _config_AnimFrameConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/AnimFrameConfig */ "./src/script/config/AnimFrameConfig.ts");
/* harmony import */ var _config_AudioConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/AudioConfig */ "./src/script/config/AudioConfig.ts");
/* harmony import */ var _config_EffectConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/EffectConfig */ "./src/script/config/EffectConfig.ts");
/* harmony import */ var _config_EggConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/EggConfig */ "./src/script/config/EggConfig.ts");
/* harmony import */ var _config_EnemyConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/EnemyConfig */ "./src/script/config/EnemyConfig.ts");
/* harmony import */ var _config_GameConst__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/GameConst */ "./src/script/config/GameConst.ts");
/* harmony import */ var _config_LevelConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/LevelConfig */ "./src/script/config/LevelConfig.ts");
/* harmony import */ var _config_PackConst__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/PackConst */ "./src/script/config/PackConst.ts");
/* harmony import */ var _config_PlayerConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config/PlayerConfig */ "./src/script/config/PlayerConfig.ts");
/* harmony import */ var _config_PushConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config/PushConfig */ "./src/script/config/PushConfig.ts");
/* harmony import */ var _config_RewardCodeConfig__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config/RewardCodeConfig */ "./src/script/config/RewardCodeConfig.ts");
/* harmony import */ var _config_RollConfig__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config/RollConfig */ "./src/script/config/RollConfig.ts");
/* harmony import */ var _config_SignConfig__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config/SignConfig */ "./src/script/config/SignConfig.ts");
/* harmony import */ var _config_TryItemConfig__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../config/TryItemConfig */ "./src/script/config/TryItemConfig.ts");















// ??????????????????,????????????
class AutoConfigSetter {
    static SetConfig() {
        _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_0__["ConfigManager"].AddConfig(_config_AnimFrameConfig__WEBPACK_IMPORTED_MODULE_1__["AnimFrameConfig"]);
        _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_0__["ConfigManager"].AddConfig(_config_AudioConfig__WEBPACK_IMPORTED_MODULE_2__["AudioConfig"]);
        _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_0__["ConfigManager"].AddConfig(_config_EffectConfig__WEBPACK_IMPORTED_MODULE_3__["EffectConfig"]);
        _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_0__["ConfigManager"].AddConfig(_config_EggConfig__WEBPACK_IMPORTED_MODULE_4__["EggConfig"]);
        _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_0__["ConfigManager"].AddConfig(_config_EnemyConfig__WEBPACK_IMPORTED_MODULE_5__["EnemyConfig"]);
        _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_0__["ConfigManager"].AddConfig(_config_GameConst__WEBPACK_IMPORTED_MODULE_6__["GameConst"]);
        _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_0__["ConfigManager"].AddConfig(_config_LevelConfig__WEBPACK_IMPORTED_MODULE_7__["LevelConfig"]);
        _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_0__["ConfigManager"].AddConfig(_config_PackConst__WEBPACK_IMPORTED_MODULE_8__["PackConst"]);
        _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_0__["ConfigManager"].AddConfig(_config_PlayerConfig__WEBPACK_IMPORTED_MODULE_9__["PlayerConfig"]);
        _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_0__["ConfigManager"].AddConfig(_config_PushConfig__WEBPACK_IMPORTED_MODULE_10__["PushConfig"]);
        _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_0__["ConfigManager"].AddConfig(_config_RewardCodeConfig__WEBPACK_IMPORTED_MODULE_11__["RewardCodeConfig"]);
        _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_0__["ConfigManager"].AddConfig(_config_RollConfig__WEBPACK_IMPORTED_MODULE_12__["RollConfig"]);
        _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_0__["ConfigManager"].AddConfig(_config_SignConfig__WEBPACK_IMPORTED_MODULE_13__["SignConfig"]);
        _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_0__["ConfigManager"].AddConfig(_config_TryItemConfig__WEBPACK_IMPORTED_MODULE_14__["TryItemConfig"]);
    }
}


/***/ }),

/***/ "./src/script/common/AnimComponent.ts":
/*!********************************************!*\
  !*** ./src/script/common/AnimComponent.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnimComponent; });
/* harmony import */ var _GlobalUnit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlobalUnit */ "./src/script/common/GlobalUnit.ts");

class AnimComponent extends Laya.Script {
    constructor(skin, config) {
        super();
        this.config = config;
        this._cacheVec4 = new Laya.Vector4();
        this._cacheFrameTime = 0;
        this._frameIndex = 0;
        this._material = skin.meshRenderer.sharedMaterial;
        this.play(0);
    }
    play(index = 0, isLoop = true, complete = null) {
        this._isLoop = isLoop;
        this._played = false;
        this._completeCallBack = complete;
        if (this._playIndex == index)
            return;
        if (!this.config.act_indexes[index]) {
            console.error("*********????????????**********");
            return;
        }
        this._playIndex = index;
        this._frameIndex = 0;
        this._changeAnimFrame();
    }
    _changeAnimFrame() {
        let config = this.config;
        let indesx = config.act_indexes[this._playIndex];
        if (this._frameIndex >= indesx.length) {
            this._OnCompleteOnce();
            return;
        }
        let index = indesx[this._frameIndex];
        let X = index % config.atlas_grid[0];
        let y = Math.floor(index / config.atlas_grid[0]);
        this._cacheVec4.x = 1 / config.atlas_grid[0];
        this._cacheVec4.y = 1 / config.atlas_grid[1];
        this._cacheVec4.z = X * this._cacheVec4.x;
        this._cacheVec4.w = 1 - (1 + y) / config.atlas_grid[1];
        this._material.tilingOffset = this._cacheVec4;
        this._cacheFrameTime = 0;
        this._frameIndex++;
    }
    _OnCompleteOnce() {
        this._frameIndex = 0;
        if (this._completeCallBack) {
            this._completeCallBack.run();
        }
        if (!this._isLoop) {
            this._played = true;
            return;
        }
        this._changeAnimFrame();
    }
    onUpdate() {
        if (_GlobalUnit__WEBPACK_IMPORTED_MODULE_0__["default"].game.pause)
            return;
        if (this._played)
            return;
        let dt = Laya.timer.delta * 0.001;
        this._cacheFrameTime += dt;
        let config = this.config;
        let frameTime = 1 / config.sampling_speed[this._playIndex];
        if (this._cacheFrameTime >= frameTime) {
            this._changeAnimFrame();
        }
    }
}


/***/ }),

/***/ "./src/script/common/EGameState.ts":
/*!*****************************************!*\
  !*** ./src/script/common/EGameState.ts ***!
  \*****************************************/
/*! exports provided: EGameState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EGameState", function() { return EGameState; });
var EGameState;
(function (EGameState) {
    EGameState[EGameState["Ready"] = 0] = "Ready";
    EGameState[EGameState["Fight"] = 1] = "Fight";
    EGameState[EGameState["Fighted"] = 2] = "Fighted";
})(EGameState || (EGameState = {}));


/***/ }),

/***/ "./src/script/common/GameData.ts":
/*!***************************************!*\
  !*** ./src/script/common/GameData.ts ***!
  \***************************************/
/*! exports provided: SaveData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveData", function() { return SaveData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameData; });
/* harmony import */ var _LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../LTGame/Commom/CommonSaveData */ "./src/LTGame/Commom/CommonSaveData.ts");


class SaveData {
    constructor() {
        /**
         * ????????????
         */
        this.coinCount = 0;
        /**
         * ??????id
         */
        this.levelId = 1;
        /**
         * ???????????????
         */
        this.maxScore = 0;
        this.playerId = 1;
    }
}
class GameData {
    static get instance() {
        if (this._instance == null) {
            this._instance = new GameData();
            this._instance._ReadFromFile();
            this.SaveToDisk();
        }
        return this._instance._saveData;
    }
    static SaveToDisk() {
        if (!this._instance)
            return;
        let json = JSON.stringify(this._instance._saveData);
        Laya.LocalStorage.setJSON(GameData.SAVE_NAME, json);
        _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].SaveToDisk();
    }
    _ReadFromFile() {
        let readStr = Laya.LocalStorage.getJSON(GameData.SAVE_NAME);
        this._saveData = new SaveData();
        if (!_LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_0__["default"].IsNullOrEmpty(readStr)) {
            let jsonData = JSON.parse(readStr);
            for (let key in jsonData) {
                this._saveData[key] = jsonData[key];
            }
        }
        console.log(this._saveData);
    }
}
GameData.SAVE_NAME = 'p_game01.sav';


/***/ }),

/***/ "./src/script/common/GlobalUnit.ts":
/*!*****************************************!*\
  !*** ./src/script/common/GlobalUnit.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalUnit; });
/* harmony import */ var _manager_DataManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manager/DataManager */ "./src/script/manager/DataManager.ts");
/* harmony import */ var _manager_EffectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manager/EffectManager */ "./src/script/manager/EffectManager.ts");
/* harmony import */ var _manager_GameManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager/GameManager */ "./src/script/manager/GameManager.ts");



class GlobalUnit {
    static InitAll(urls) {
        this.s3d = Laya.stage.addChildAt(new Laya.Scene3D(), 0);
        window['s3d'] = this.s3d;
        this.dataManager = new _manager_DataManager__WEBPACK_IMPORTED_MODULE_0__["DataManager"]();
        this.dataManager.InitData();
        this.game = new _manager_GameManager__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.game.PreLoad(urls);
        window['GlobalUnit'] = this;
    }
    static ResetScene(scene) {
        if (this.s3d != null && !this.s3d.destroyed) {
            _manager_EffectManager__WEBPACK_IMPORTED_MODULE_1__["EffectManager"].instance.UnloadScene();
            this.s3d.destroy();
        }
        this.s3d = scene;
        Laya.stage.addChildAt(this.s3d, 0);
        _manager_EffectManager__WEBPACK_IMPORTED_MODULE_1__["EffectManager"].instance.ReAddScene();
        window['s3d'] = this.s3d;
    }
    static FirstCreate() {
        return __awaiter(this, void 0, void 0, function* () {
            this.game.CreateGame();
            // new RVO_test();
        });
    }
}


/***/ }),

/***/ "./src/script/common/ResDefine.ts":
/*!****************************************!*\
  !*** ./src/script/common/ResDefine.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResDefine; });
/* harmony import */ var _LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");

class ResDefine {
    static FixPath(filePath) {
        if (_LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_0__["default"].IsNullOrEmpty(filePath)) {
            console.error("??????????????????");
            return null;
        }
        return "res/export/Conventional/" + filePath + ".lh";
    }
    static FixScene(scenePath) {
        if (_LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_0__["default"].IsNullOrEmpty(scenePath)) {
            console.error("??????????????????");
            return null;
        }
        return "res/export/Conventional/" + scenePath + ".ls";
    }
    static FixRefreshJson(jsonPath) {
        if (_LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_0__["default"].IsNullOrEmpty(jsonPath)) {
            console.error("??????????????????");
            return null;
        }
        return "res/json/" + jsonPath + ".json";
    }
}


/***/ }),

/***/ "./src/script/config/AnimFrameConfig.ts":
/*!**********************************************!*\
  !*** ./src/script/config/AnimFrameConfig.ts ***!
  \**********************************************/
/*! exports provided: AnimFrameConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimFrameConfig", function() { return AnimFrameConfig; });
var AnimFrameConfig;
(function (AnimFrameConfig) {
    class config {
    }
    AnimFrameConfig.config = config;
    AnimFrameConfig.isConst = false;
    AnimFrameConfig.path = "res/config/AnimFrameConfig.json";
})(AnimFrameConfig || (AnimFrameConfig = {}));


/***/ }),

/***/ "./src/script/config/AudioConfig.ts":
/*!******************************************!*\
  !*** ./src/script/config/AudioConfig.ts ***!
  \******************************************/
/*! exports provided: AudioConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioConfig", function() { return AudioConfig; });
var AudioConfig;
(function (AudioConfig) {
    class config {
    }
    AudioConfig.config = config;
    AudioConfig.isConst = false;
    AudioConfig.path = "res/config/AudioConfig.json";
})(AudioConfig || (AudioConfig = {}));


/***/ }),

/***/ "./src/script/config/EffectConfig.ts":
/*!*******************************************!*\
  !*** ./src/script/config/EffectConfig.ts ***!
  \*******************************************/
/*! exports provided: EffectConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectConfig", function() { return EffectConfig; });
var EffectConfig;
(function (EffectConfig) {
    class config {
    }
    EffectConfig.config = config;
    EffectConfig.isConst = false;
    EffectConfig.path = "res/config/EffectConfig.json";
})(EffectConfig || (EffectConfig = {}));


/***/ }),

/***/ "./src/script/config/EggConfig.ts":
/*!****************************************!*\
  !*** ./src/script/config/EggConfig.ts ***!
  \****************************************/
/*! exports provided: EggConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EggConfig", function() { return EggConfig; });
var EggConfig;
(function (EggConfig) {
    class config {
    }
    EggConfig.config = config;
    EggConfig.isConst = false;
    EggConfig.path = "res/config/EggConfig.json";
})(EggConfig || (EggConfig = {}));


/***/ }),

/***/ "./src/script/config/EnemyConfig.ts":
/*!******************************************!*\
  !*** ./src/script/config/EnemyConfig.ts ***!
  \******************************************/
/*! exports provided: EnemyConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyConfig", function() { return EnemyConfig; });
var EnemyConfig;
(function (EnemyConfig) {
    class config {
    }
    EnemyConfig.config = config;
    EnemyConfig.isConst = false;
    EnemyConfig.path = "res/config/EnemyConfig.json";
})(EnemyConfig || (EnemyConfig = {}));


/***/ }),

/***/ "./src/script/config/GameConst.ts":
/*!****************************************!*\
  !*** ./src/script/config/GameConst.ts ***!
  \****************************************/
/*! exports provided: GameConst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameConst", function() { return GameConst; });
var GameConst;
(function (GameConst) {
    class config {
    }
    GameConst.config = config;
    GameConst.isConst = true;
    GameConst.path = "res/config/GameConst.json";
})(GameConst || (GameConst = {}));


/***/ }),

/***/ "./src/script/config/LevelConfig.ts":
/*!******************************************!*\
  !*** ./src/script/config/LevelConfig.ts ***!
  \******************************************/
/*! exports provided: LevelConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelConfig", function() { return LevelConfig; });
var LevelConfig;
(function (LevelConfig) {
    class config {
    }
    LevelConfig.config = config;
    LevelConfig.isConst = false;
    LevelConfig.path = "res/config/LevelConfig.json";
})(LevelConfig || (LevelConfig = {}));


/***/ }),

/***/ "./src/script/config/PackConst.ts":
/*!****************************************!*\
  !*** ./src/script/config/PackConst.ts ***!
  \****************************************/
/*! exports provided: PackConst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackConst", function() { return PackConst; });
var PackConst;
(function (PackConst) {
    class config {
    }
    PackConst.config = config;
    PackConst.isConst = true;
    PackConst.path = "res/config/PackConst.json";
})(PackConst || (PackConst = {}));


/***/ }),

/***/ "./src/script/config/PlayerConfig.ts":
/*!*******************************************!*\
  !*** ./src/script/config/PlayerConfig.ts ***!
  \*******************************************/
/*! exports provided: PlayerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerConfig", function() { return PlayerConfig; });
var PlayerConfig;
(function (PlayerConfig) {
    class config {
    }
    PlayerConfig.config = config;
    PlayerConfig.isConst = false;
    PlayerConfig.path = "res/config/PlayerConfig.json";
})(PlayerConfig || (PlayerConfig = {}));


/***/ }),

/***/ "./src/script/config/PushConfig.ts":
/*!*****************************************!*\
  !*** ./src/script/config/PushConfig.ts ***!
  \*****************************************/
/*! exports provided: PushConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushConfig", function() { return PushConfig; });
var PushConfig;
(function (PushConfig) {
    class config {
    }
    PushConfig.config = config;
    PushConfig.isConst = false;
    PushConfig.path = "res/config/PushConfig.json";
})(PushConfig || (PushConfig = {}));


/***/ }),

/***/ "./src/script/config/RewardCodeConfig.ts":
/*!***********************************************!*\
  !*** ./src/script/config/RewardCodeConfig.ts ***!
  \***********************************************/
/*! exports provided: RewardCodeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardCodeConfig", function() { return RewardCodeConfig; });
var RewardCodeConfig;
(function (RewardCodeConfig) {
    class config {
    }
    RewardCodeConfig.config = config;
    RewardCodeConfig.isConst = false;
    RewardCodeConfig.path = "res/config/RewardCodeConfig.json";
})(RewardCodeConfig || (RewardCodeConfig = {}));


/***/ }),

/***/ "./src/script/config/RollConfig.ts":
/*!*****************************************!*\
  !*** ./src/script/config/RollConfig.ts ***!
  \*****************************************/
/*! exports provided: RollConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollConfig", function() { return RollConfig; });
var RollConfig;
(function (RollConfig) {
    class config {
    }
    RollConfig.config = config;
    RollConfig.isConst = false;
    RollConfig.path = "res/config/RollConfig.json";
})(RollConfig || (RollConfig = {}));


/***/ }),

/***/ "./src/script/config/SignConfig.ts":
/*!*****************************************!*\
  !*** ./src/script/config/SignConfig.ts ***!
  \*****************************************/
/*! exports provided: SignConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignConfig", function() { return SignConfig; });
var SignConfig;
(function (SignConfig) {
    class config {
    }
    SignConfig.config = config;
    SignConfig.isConst = false;
    SignConfig.path = "res/config/SignConfig.json";
})(SignConfig || (SignConfig = {}));


/***/ }),

/***/ "./src/script/config/TryItemConfig.ts":
/*!********************************************!*\
  !*** ./src/script/config/TryItemConfig.ts ***!
  \********************************************/
/*! exports provided: TryItemConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryItemConfig", function() { return TryItemConfig; });
var TryItemConfig;
(function (TryItemConfig) {
    class config {
    }
    TryItemConfig.config = config;
    TryItemConfig.isConst = false;
    TryItemConfig.path = "res/config/TryItemConfig.json";
})(TryItemConfig || (TryItemConfig = {}));


/***/ }),

/***/ "./src/script/logic/CameraControl.ts":
/*!*******************************************!*\
  !*** ./src/script/logic/CameraControl.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CameraControl; });
/* harmony import */ var _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/GlobalUnit */ "./src/script/common/GlobalUnit.ts");

class CameraControl {
    InitCamera(root) {
        this._rootObj = root;
        this.camera = root.getChildAt(0);
    }
    followPlayer() {
        let old = this._rootObj.transform.position;
        let target = _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_0__["default"].game.player.originPos;
        old.x = target.x;
        old.y = target.y;
        this._rootObj.transform.position = old;
    }
    LateUpdate() {
        this.followPlayer();
    }
}


/***/ }),

/***/ "./src/script/logic/MapControl.ts":
/*!****************************************!*\
  !*** ./src/script/logic/MapControl.ts ***!
  \****************************************/
/*! exports provided: MapData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapData", function() { return MapData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapControl; });
/* harmony import */ var _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/Res/LTRes */ "./src/LTGame/Res/LTRes.ts");
/* harmony import */ var _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/GlobalUnit */ "./src/script/common/GlobalUnit.ts");


class MapData {
}
class MapControl {
    constructor() {
        this._rect = new Laya.Vector2();
        this._mapList = {};
        this._blockPool = [];
    }
    InitMapData(content, mapPath) {
        this._mapContent = content;
        this._mapPath = mapPath;
        let block = this._GetBlock();
        let rect = block.getChildByName("__rect__");
        this._rect.setValue(rect.transform.localScaleX, rect.transform.localScaleY);
        this._blockPool.push(block);
        this._RefreshMap();
    }
    _GetBlock() {
        let item = this._blockPool.pop();
        if (!item) {
            item = _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_0__["default"].Get(this._mapPath);
        }
        return item;
    }
    _RefreshMap() {
        let pos = this._GetMapPos();
        let x = pos[0];
        let y = pos[1];
        let initMap = [
            [x, y],
            [x - 1, y],
            [x + 1, y],
            [x, y + 1],
            [x - 1, y + 1],
            [x + 1, y + 1],
            [x, y - 1],
            [x - 1, y - 1],
            [x + 1, y - 1],
        ];
        for (let i = 0; i < initMap.length; i++) {
            let data = initMap[i];
            let strPos = data[0] + "_" + data[1];
            let mapData = this._mapList[strPos];
            if (!mapData || !mapData.enable) {
                this._AddMap(data[0], data[1]);
            }
        }
    }
    _GetMapPos() {
        let pos = _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_1__["default"].game.player.originPos;
        let x = Math.floor(Math.abs(pos.x) / this._rect.x) * (pos.x < 0 ? -1 : 1);
        let y = Math.floor(Math.abs(pos.y) / this._rect.y) * (pos.y < 0 ? -1 : 1);
        return [x, y];
    }
    _AddMap(x, y) {
        let strPos = x + "_" + y;
        let mapData = this._mapList[strPos];
        if (!mapData) {
            mapData = new MapData();
            this._mapList[strPos] = mapData;
            mapData.strPos = strPos;
            mapData.pos = new Laya.Vector2(x, y);
        }
        let block = this._GetBlock();
        mapData.block = block;
        mapData.enable = true;
        this._mapContent.addChild(block);
        let old = block.transform.position;
        old.z = 0;
        old.x = x * this._rect.x;
        old.y = y * this._rect.y;
        block.transform.position = old;
    }
    _RemoveMap(map) {
        let strPos = map.strPos;
        let mapData = this._mapList[strPos];
        mapData.enable = false;
        let block = mapData.block;
        mapData.block.removeSelf();
        mapData.block = null;
        this._blockPool.push(block);
    }
    UpdateMap() {
        let data = this._GetMapPos();
        for (let k in this._mapList) {
            let mapData = this._mapList[k];
            if (!this._mapList[k].enable)
                continue;
            let x = mapData.pos.x;
            let y = mapData.pos.y;
            if (x > data[0] + 1 ||
                x < data[0] - 1 ||
                y > data[1] + 1 ||
                y < data[1] - 1) {
                this._RemoveMap(mapData);
            }
        }
        this._RefreshMap();
    }
}


/***/ }),

/***/ "./src/script/logic/ModelBase.ts":
/*!***************************************!*\
  !*** ./src/script/logic/ModelBase.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModelBase; });
/* harmony import */ var _common_AnimComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/AnimComponent */ "./src/script/common/AnimComponent.ts");
/* harmony import */ var _config_AnimFrameConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/AnimFrameConfig */ "./src/script/config/AnimFrameConfig.ts");
/* harmony import */ var _manager_LayerMgr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager/LayerMgr */ "./src/script/manager/LayerMgr.ts");
/* harmony import */ var _rvo_RVOHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rvo/RVOHelper */ "./src/script/logic/rvo/RVOHelper.ts");




class ModelBase {
    constructor() {
        this.layerIndex = 0;
    }
    get depth() {
        return this.root.transform.position.y;
    }
    get originPos() {
        return this.colliderObj.transform.position;
    }
    Inited(id) {
        _manager_LayerMgr__WEBPACK_IMPORTED_MODULE_2__["default"].instance.PushModel(this);
        this.colliderOffset = new Laya.Vector2();
        let localPos = this.colliderObj.transform.localPosition;
        this.colliderOffset.setValue(localPos.x, localPos.y);
        let config = _config_AnimFrameConfig__WEBPACK_IMPORTED_MODULE_1__["AnimFrameConfig"].data[id];
        this.skin.meshRenderer.sharedMaterial = this.skin.meshRenderer.sharedMaterial.clone();
        this.animCmp = new _common_AnimComponent__WEBPACK_IMPORTED_MODULE_0__["default"](this.skin, config);
        this.skin.addComponentIntance(this.animCmp);
    }
    OnUpdate(dt) {
        if (this.root.destroyed)
            return;
        // this.UpdateDepth();
        this.DoUpdate(dt);
    }
    CreateAgent() {
        this.agent = _rvo_RVOHelper__WEBPACK_IMPORTED_MODULE_3__["default"].instance.CreateAgent(this.colliderObj);
    }
    UpdateDepth() {
        this.root.transform.localPositionZ = -0.2 * this.layerIndex;
    }
    DoUpdate(dt) {
    }
}


/***/ }),

/***/ "./src/script/logic/enemy/EnemyBase.ts":
/*!*********************************************!*\
  !*** ./src/script/logic/enemy/EnemyBase.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EnemyBase; });
/* harmony import */ var _LTGame_LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../LTGame/LTUtils/LTUtils */ "./src/LTGame/LTUtils/LTUtils.ts");
/* harmony import */ var _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../LTGame/LTUtils/MathEx */ "./src/LTGame/LTUtils/MathEx.ts");
/* harmony import */ var _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../LTGame/Res/LTRes */ "./src/LTGame/Res/LTRes.ts");
/* harmony import */ var _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/GlobalUnit */ "./src/script/common/GlobalUnit.ts");
/* harmony import */ var _common_ResDefine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/ResDefine */ "./src/script/common/ResDefine.ts");
/* harmony import */ var _level_ViewLevel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../level/ViewLevel */ "./src/script/logic/level/ViewLevel.ts");
/* harmony import */ var _ModelBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ModelBase */ "./src/script/logic/ModelBase.ts");
/* harmony import */ var _rvo_Vector2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rvo/Vector2 */ "./src/script/logic/rvo/Vector2.ts");








class EnemyBase extends _ModelBase__WEBPACK_IMPORTED_MODULE_6__["default"] {
    constructor(config, data) {
        super();
        this.config = config;
        this.refreshData = data;
        this.CreateModel();
        this.InitAgent();
    }
    InitAgent() {
        this.CreateAgent();
        this.cachePos = new _rvo_Vector2__WEBPACK_IMPORTED_MODULE_7__["Vector2"](0, 0);
    }
    CreateModel() {
        this.root = _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_2__["default"].Get(_common_ResDefine__WEBPACK_IMPORTED_MODULE_4__["default"].FixPath(this.config.model_path));
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_3__["default"].game.level.layerObj.addChild(this.root);
        this.colliderObj = this.root.getChildByName("colliders");
        this.skin = _LTGame_LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_0__["LTUtils"].FindChild(this.root, this.config.skin_path);
        this.Inited(this.config.anim_id);
    }
    SetPos(x, y) {
        this.agent.position_.setXY(x, y);
        this.SyncPos();
    }
    UpdateMoveParames(dt) {
        let sprite = new Laya.Sprite();
        sprite.customRender;
        let type = this.refreshData.moveType;
        this.agent.maxSpeed_ = this.config.move_speed * dt;
        switch (type) {
            case _level_ViewLevel__WEBPACK_IMPORTED_MODULE_5__["EMoveType"].ToPlayer:
                let pos = _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_3__["default"].game.player.originPos;
                this.cachePos.setXY(pos.x, pos.y);
                let goal = this.cachePos.moins(this.agent.position_);
                let dist = _rvo_Vector2__WEBPACK_IMPORTED_MODULE_7__["Vector2"].absSq(goal);
                this.agent.maxSpeed_ *= _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_1__["default"].Clamp01(dist);
                this.cachePos = _rvo_Vector2__WEBPACK_IMPORTED_MODULE_7__["Vector2"].normalize(goal);
                this.agent.prefVelocity_.setXY(this.cachePos.x, this.cachePos.y);
                break;
            case _level_ViewLevel__WEBPACK_IMPORTED_MODULE_5__["EMoveType"].ToVec2:
                let moveParams = this.refreshData.moveParams;
                this.cachePos.setXY(moveParams[0], moveParams[1]);
                this.cachePos = _rvo_Vector2__WEBPACK_IMPORTED_MODULE_7__["Vector2"].normalize(this.cachePos);
                this.agent.prefVelocity_.setXY(this.cachePos.x, this.cachePos.y);
                break;
        }
    }
    SyncPos() {
        let old = this.root.transform.position;
        let newPos = this.agent.position_;
        this.root.transform.localScaleX = this.cachePos.x > 0 ? -1 : 1;
        old.x = newPos.x + this.colliderOffset.x;
        old.y = newPos.y - this.colliderOffset.y;
        this.root.transform.position = old;
    }
    DoUpdate(dt) {
        this.SyncPos();
        this.UpdateMoveParames(dt);
    }
}


/***/ }),

/***/ "./src/script/logic/enemy/EnemyType.ts":
/*!*********************************************!*\
  !*** ./src/script/logic/enemy/EnemyType.ts ***!
  \*********************************************/
/*! exports provided: EnemyType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyType", function() { return EnemyType; });
var EnemyType;
(function (EnemyType) {
    EnemyType[EnemyType["Default"] = 1] = "Default";
})(EnemyType || (EnemyType = {}));


/***/ }),

/***/ "./src/script/logic/enemy/Enemy_1.ts":
/*!*******************************************!*\
  !*** ./src/script/logic/enemy/Enemy_1.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Enemy_1; });
/* harmony import */ var _EnemyBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnemyBase */ "./src/script/logic/enemy/EnemyBase.ts");

class Enemy_1 extends _EnemyBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
}


/***/ }),

/***/ "./src/script/logic/level/ViewLevel.ts":
/*!*********************************************!*\
  !*** ./src/script/logic/level/ViewLevel.ts ***!
  \*********************************************/
/*! exports provided: ERefreshType, EMoveType, RefreshData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERefreshType", function() { return ERefreshType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMoveType", function() { return EMoveType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshData", function() { return RefreshData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewLevel; });
/* harmony import */ var _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../LTGame/LTUtils/MathEx */ "./src/LTGame/LTUtils/MathEx.ts");
/* harmony import */ var _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../LTGame/Res/LTRes */ "./src/LTGame/Res/LTRes.ts");
/* harmony import */ var _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/GlobalUnit */ "./src/script/common/GlobalUnit.ts");
/* harmony import */ var _common_ResDefine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/ResDefine */ "./src/script/common/ResDefine.ts");
/* harmony import */ var _config_EnemyConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/EnemyConfig */ "./src/script/config/EnemyConfig.ts");
/* harmony import */ var _config_LevelConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/LevelConfig */ "./src/script/config/LevelConfig.ts");
/* harmony import */ var _enemy_EnemyType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enemy/EnemyType */ "./src/script/logic/enemy/EnemyType.ts");
/* harmony import */ var _enemy_Enemy_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enemy/Enemy_1 */ "./src/script/logic/enemy/Enemy_1.ts");








/** ???????????? */
var ERefreshType;
(function (ERefreshType) {
    /** ?????????????????? ?????? ????????????????????? */
    ERefreshType[ERefreshType["Player_Circle"] = 0] = "Player_Circle";
    /** ????????????  ????????????*/
    ERefreshType[ERefreshType["Point_Circle"] = 1] = "Point_Circle";
})(ERefreshType || (ERefreshType = {}));
var EMoveType;
(function (EMoveType) {
    EMoveType[EMoveType["ToPlayer"] = 0] = "ToPlayer";
    EMoveType[EMoveType["ToVec2"] = 1] = "ToVec2";
})(EMoveType || (EMoveType = {}));
class RefreshData {
}
class ViewLevel {
    SetLevelId(id) {
        this.config = _config_LevelConfig__WEBPACK_IMPORTED_MODULE_5__["LevelConfig"].data[id];
    }
    PreLoad(urls) {
        urls.push(_common_ResDefine__WEBPACK_IMPORTED_MODULE_3__["default"].FixRefreshJson(this.config.refresh_path));
        urls.push(_common_ResDefine__WEBPACK_IMPORTED_MODULE_3__["default"].FixScene(this.config.model_path));
        urls.push(_common_ResDefine__WEBPACK_IMPORTED_MODULE_3__["default"].FixPath(this.config.map_path));
        for (let i = 0; i < this.config.enemy_list.length; i++) {
            let enemyConfig = _config_EnemyConfig__WEBPACK_IMPORTED_MODULE_4__["EnemyConfig"].data[this.config.enemy_list[i]];
            urls.push(_common_ResDefine__WEBPACK_IMPORTED_MODULE_3__["default"].FixPath(enemyConfig.model_path));
        }
    }
    CreateLevel() {
        let s3d = _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_1__["default"].Get(_common_ResDefine__WEBPACK_IMPORTED_MODULE_3__["default"].FixScene(this.config.model_path));
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_2__["default"].ResetScene(s3d);
        let layer = new Laya.Sprite3D("layerContent");
        s3d.addChild(layer);
        this.layerObj = layer;
        let camera = s3d.getChildByName("camera_obj");
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_2__["default"].game.camera.InitCamera(camera);
        let start = s3d.getChildByName("__start__");
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_2__["default"].game.player.CreatePlayer(start);
        let map = s3d.getChildByName("__map__");
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_2__["default"].game.map.InitMapData(map, _common_ResDefine__WEBPACK_IMPORTED_MODULE_3__["default"].FixPath(this.config.map_path));
        this._refreshIndex = 0;
        this.refreshConfig = _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_1__["default"].Get(_common_ResDefine__WEBPACK_IMPORTED_MODULE_3__["default"].FixRefreshJson(this.config.refresh_path), true);
        this._enemyList = [];
    }
    _RefreshEnemy() {
        let config = this.refreshConfig[this._refreshIndex];
        if (!config)
            return;
        let time = config.refreshTime;
        if (_common_GlobalUnit__WEBPACK_IMPORTED_MODULE_2__["default"].game.time >= time) {
            this._AddEnemyList(config);
            this._refreshIndex++;
        }
    }
    _AddEnemyList(data) {
        console.log("????????????: ", data);
        this._AddEnemy(data, 0);
    }
    _AddEnemy(data, count) {
        let id = _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_0__["default"].RandomFromArray(data.enemyIds);
        let config = _config_EnemyConfig__WEBPACK_IMPORTED_MODULE_4__["EnemyConfig"].data[id];
        let enemy;
        switch (config.enemy_type) {
            case _enemy_EnemyType__WEBPACK_IMPORTED_MODULE_6__["EnemyType"].Default:
                enemy = new _enemy_Enemy_1__WEBPACK_IMPORTED_MODULE_7__["default"](config, data);
                break;
        }
        this._enemyList.push(enemy);
        let origin = _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_2__["default"].game.player.originPos;
        if (data.refreshType == ERefreshType.Player_Circle) {
            let angle = _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_0__["default"].Random(0, 360);
            let radius = data.refreshParams[0];
            let x = origin.x + Math.cos(angle * Math.PI / 180) * radius;
            let y = origin.y + Math.sin(angle * Math.PI / 180) * radius;
            enemy.SetPos(x, y);
        }
        else if (data.refreshType == ERefreshType.Point_Circle) {
            let x = origin.x + data.refreshParams[0];
            let y = origin.y + data.refreshParams[1];
            enemy.SetPos(x, y);
        }
        count++;
        if (count < data.enemyCount) {
            let time = data.duration / data.enemyCount;
            Laya.timer.once(time * 1000, this, this._AddEnemy, [data, count]);
        }
    }
    LogicUpdate(dt) {
        this._RefreshEnemy();
        this._UpdateEnemyLogic(dt);
    }
    _UpdateEnemyLogic(dt) {
        for (let i = 0; i < this._enemyList.length; i++) {
            this._enemyList[i].OnUpdate(dt);
        }
    }
}


/***/ }),

/***/ "./src/script/logic/player/EPlayerState.ts":
/*!*************************************************!*\
  !*** ./src/script/logic/player/EPlayerState.ts ***!
  \*************************************************/
/*! exports provided: EPlayerState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPlayerState", function() { return EPlayerState; });
var EPlayerState;
(function (EPlayerState) {
    EPlayerState[EPlayerState["Idle"] = 0] = "Idle";
    EPlayerState[EPlayerState["Move"] = 1] = "Move";
    EPlayerState[EPlayerState["Dead"] = 2] = "Dead";
})(EPlayerState || (EPlayerState = {}));


/***/ }),

/***/ "./src/script/logic/player/PlayerBaseState.ts":
/*!****************************************************!*\
  !*** ./src/script/logic/player/PlayerBaseState.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerBaseState; });
/* harmony import */ var _LTGame_Fsm_BaseState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../LTGame/Fsm/BaseState */ "./src/LTGame/Fsm/BaseState.ts");

class PlayerBaseState extends _LTGame_Fsm_BaseState__WEBPACK_IMPORTED_MODULE_0__["default"] {
}


/***/ }),

/***/ "./src/script/logic/player/PlayerStateDead.ts":
/*!****************************************************!*\
  !*** ./src/script/logic/player/PlayerStateDead.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerStateDead; });
/* harmony import */ var _EPlayerState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EPlayerState */ "./src/script/logic/player/EPlayerState.ts");
/* harmony import */ var _PlayerBaseState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerBaseState */ "./src/script/logic/player/PlayerBaseState.ts");


class PlayerStateDead extends _PlayerBaseState__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(owner) {
        super(owner, _EPlayerState__WEBPACK_IMPORTED_MODULE_0__["EPlayerState"].Dead);
    }
    _DoEnter(exitStte, param) {
        this.owner.PlayAnim(2, false, null);
    }
}


/***/ }),

/***/ "./src/script/logic/player/PlayerStateIdle.ts":
/*!****************************************************!*\
  !*** ./src/script/logic/player/PlayerStateIdle.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerStateIdle; });
/* harmony import */ var _ui_UI_FightMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/UI_FightMediator */ "./src/script/ui/UI_FightMediator.ts");
/* harmony import */ var _EPlayerState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EPlayerState */ "./src/script/logic/player/EPlayerState.ts");
/* harmony import */ var _PlayerBaseState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayerBaseState */ "./src/script/logic/player/PlayerBaseState.ts");



class PlayerStateIdle extends _PlayerBaseState__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(owner) {
        super(owner, _EPlayerState__WEBPACK_IMPORTED_MODULE_1__["EPlayerState"].Idle);
    }
    _DoEnter(exitStte, param) {
        this.owner.PlayAnim(0);
    }
    _DoRunning(param) {
        if (_ui_UI_FightMediator__WEBPACK_IMPORTED_MODULE_0__["UI_FightMediator"].instance.CmpJoy.isPressed) {
            this.owner.fsm.ChangeState(_EPlayerState__WEBPACK_IMPORTED_MODULE_1__["EPlayerState"].Move);
        }
    }
}


/***/ }),

/***/ "./src/script/logic/player/PlayerStateMove.ts":
/*!****************************************************!*\
  !*** ./src/script/logic/player/PlayerStateMove.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerStateMove; });
/* harmony import */ var _ui_UI_FightMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/UI_FightMediator */ "./src/script/ui/UI_FightMediator.ts");
/* harmony import */ var _EPlayerState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EPlayerState */ "./src/script/logic/player/EPlayerState.ts");
/* harmony import */ var _PlayerBaseState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayerBaseState */ "./src/script/logic/player/PlayerBaseState.ts");



class PlayerStateMove extends _PlayerBaseState__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(owner) {
        super(owner, _EPlayerState__WEBPACK_IMPORTED_MODULE_1__["EPlayerState"].Move);
    }
    _DoEnter(exitStte, param) {
        this.owner.PlayAnim(1);
    }
    _DoRunning(param) {
        if (!_ui_UI_FightMediator__WEBPACK_IMPORTED_MODULE_0__["UI_FightMediator"].instance.CmpJoy.isPressed) {
            this.owner.fsm.ChangeState(_EPlayerState__WEBPACK_IMPORTED_MODULE_1__["EPlayerState"].Idle);
            return;
        }
        this.owner.DoMove(this.deltaTime);
    }
}


/***/ }),

/***/ "./src/script/logic/player/ViewPlayer.ts":
/*!***********************************************!*\
  !*** ./src/script/logic/player/ViewPlayer.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewPlayer; });
/* harmony import */ var _LTGame_Fsm_StateMachine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../LTGame/Fsm/StateMachine */ "./src/LTGame/Fsm/StateMachine.ts");
/* harmony import */ var _LTGame_LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../LTGame/LTUtils/LTUtils */ "./src/LTGame/LTUtils/LTUtils.ts");
/* harmony import */ var _LTGame_LTUtils_TransformEx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../LTGame/LTUtils/TransformEx */ "./src/LTGame/LTUtils/TransformEx.ts");
/* harmony import */ var _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../LTGame/Res/LTRes */ "./src/LTGame/Res/LTRes.ts");
/* harmony import */ var _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/GlobalUnit */ "./src/script/common/GlobalUnit.ts");
/* harmony import */ var _common_ResDefine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/ResDefine */ "./src/script/common/ResDefine.ts");
/* harmony import */ var _config_PlayerConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/PlayerConfig */ "./src/script/config/PlayerConfig.ts");
/* harmony import */ var _ui_UI_FightMediator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/UI_FightMediator */ "./src/script/ui/UI_FightMediator.ts");
/* harmony import */ var _ModelBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ModelBase */ "./src/script/logic/ModelBase.ts");
/* harmony import */ var _EPlayerState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EPlayerState */ "./src/script/logic/player/EPlayerState.ts");
/* harmony import */ var _PlayerStateDead__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PlayerStateDead */ "./src/script/logic/player/PlayerStateDead.ts");
/* harmony import */ var _PlayerStateIdle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PlayerStateIdle */ "./src/script/logic/player/PlayerStateIdle.ts");
/* harmony import */ var _PlayerStateMove__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PlayerStateMove */ "./src/script/logic/player/PlayerStateMove.ts");













class ViewPlayer extends _ModelBase__WEBPACK_IMPORTED_MODULE_8__["default"] {
    get fsm() {
        return this._fsm;
    }
    SetPlayerId(id) {
        this.config = _config_PlayerConfig__WEBPACK_IMPORTED_MODULE_6__["PlayerConfig"].data[id];
    }
    PreLoad(urls) {
        urls.push(_common_ResDefine__WEBPACK_IMPORTED_MODULE_5__["default"].FixPath(this.config.model_path));
    }
    CreatePlayer(point) {
        this.root = _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_3__["default"].Get(_common_ResDefine__WEBPACK_IMPORTED_MODULE_5__["default"].FixPath(this.config.model_path));
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_4__["default"].game.level.layerObj.addChild(this.root);
        this.skin = _LTGame_LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_1__["LTUtils"].FindChild(this.root, this.config.skin_path);
        this.colliderObj = this.root.getChildByName("colliders");
        _LTGame_LTUtils_TransformEx__WEBPACK_IMPORTED_MODULE_2__["TransformEx"].CopyTrans(this.root.transform, point.transform);
        this.Inited(this.config.anim_id);
        this._InitState();
    }
    _InitState() {
        this.dirVec = new Laya.Vector2();
        this.linearVelocity = 0;
        this._fsm = new _LTGame_Fsm_StateMachine__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this._fsm.Add(new _PlayerStateIdle__WEBPACK_IMPORTED_MODULE_11__["default"](this));
        this._fsm.Add(new _PlayerStateMove__WEBPACK_IMPORTED_MODULE_12__["default"](this));
        this._fsm.Add(new _PlayerStateDead__WEBPACK_IMPORTED_MODULE_10__["default"](this));
        this._fsm.ChangeState(_EPlayerState__WEBPACK_IMPORTED_MODULE_9__["EPlayerState"].Idle);
    }
    DoMove(dt) {
        let CmpJoy = _ui_UI_FightMediator__WEBPACK_IMPORTED_MODULE_7__["UI_FightMediator"].instance.CmpJoy;
        this.dirVec = CmpJoy.dirVec2;
        this.linearVelocity = this.config.move_speed * dt;
        this.root.transform.position.x -= this.dirVec.x * this.linearVelocity;
        this.root.transform.position.y -= this.dirVec.y * this.linearVelocity;
        this.root.transform.position = this.root.transform.position;
        this.UpdateActor();
    }
    UpdateActor() {
        if (this.dirVec.x > 0) {
            this.root.transform.localScaleX = 1;
        }
        else if (this.dirVec.x < 0) {
            this.root.transform.localScaleX = -1;
        }
    }
    PlayAnim(index, isLoop = true, complete = null) {
        this.animCmp.play(index, isLoop, complete);
    }
    DoUpdate(dt) {
        this._fsm.LogicUpdate(dt);
    }
}


/***/ }),

/***/ "./src/script/logic/rvo/Agent.ts":
/*!***************************************!*\
  !*** ./src/script/logic/rvo/Agent.ts ***!
  \***************************************/
/*! exports provided: Agent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Agent", function() { return Agent; });
/* harmony import */ var _KeyValuePair__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyValuePair */ "./src/script/logic/rvo/KeyValuePair.ts");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Line */ "./src/script/logic/rvo/Line.ts");
/* harmony import */ var _RVOMath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RVOMath */ "./src/script/logic/rvo/RVOMath.ts");
/* harmony import */ var _Simulator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Simulator */ "./src/script/logic/rvo/Simulator.ts");
/* harmony import */ var _Vector2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Vector2 */ "./src/script/logic/rvo/Vector2.ts");
/// <reference path="Vector2.ts" />
/// <reference path="Line.ts" />
/// <reference path="KeyValuePair.ts" />
/// <reference path="RVOMath.ts" />
/// <reference path="Simulator.ts" />





class Agent {
    constructor() {
        this.agentNeighbors_ = [];
        this.obstacleNeighbors_ = [];
        this.orcaLines_ = [];
        this.maxNeighbors_ = 0;
        this.maxSpeed_ = 0;
        this.neighborDist_ = 0;
        this.orientation_ = 0;
        this.position_ = new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](0, 0);
        this.positionScreen_ = new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](0, 0);
        this.prefVelocity_ = new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](0, 0);
        this.velocity_ = new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](0, 0);
        this.radius_ = 0;
        this.timeHorizon_ = 0;
        this.timeHorizonObst_ = 0;
        this.id_ = 0;
        this.test = [];
        this.c = 0;
    }
    computeNeighbors() {
        this.obstacleNeighbors_ = [];
        var rangeSq = _RVOMath__WEBPACK_IMPORTED_MODULE_2__["RVOMath"].sqr(this.timeHorizonObst_ * this.maxSpeed_ + this.radius_);
        _Simulator__WEBPACK_IMPORTED_MODULE_3__["Simulator"].Instance().kdTree_.computeObstacleNeighbors(this, rangeSq);
        this.agentNeighbors_ = [];
        if (this.maxNeighbors_ > 0) {
            Agent.rangeSq = _RVOMath__WEBPACK_IMPORTED_MODULE_2__["RVOMath"].sqr(this.neighborDist_);
            _Simulator__WEBPACK_IMPORTED_MODULE_3__["Simulator"].Instance().kdTree_.computeAgentNeighbors(this, Agent.rangeSq);
        }
    }
    computeNewVelocity() {
        this.orcaLines_ = [];
        var invTimeHorizonObst = 1 / this.timeHorizonObst_;
        /* Create obstacle ORCA lines. */
        for (var i = 0; i < this.obstacleNeighbors_.length; ++i) {
            var obstacle1 = this.obstacleNeighbors_[i].Value;
            var obstacle2 = obstacle1.nextObstacle_;
            var relativePosition1 = obstacle1.point_.moins(this.position_);
            var relativePosition2 = obstacle2.point_.moins(this.position_);
            /*
              * Check if velocity obstacle of obstacle is already taken care of by
              * previously constructed obstacle ORCA lines.
              */
            var alreadyCovered = false;
            for (var j = 0; j < this.orcaLines_.length; ++j) {
                if (_Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].det(relativePosition1.mul_k(invTimeHorizonObst).moins(this.orcaLines_[j].point), this.orcaLines_[j].direction) - invTimeHorizonObst * this.radius_ >= -_RVOMath__WEBPACK_IMPORTED_MODULE_2__["RVOMath"].RVO_EPSILON && _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].det(relativePosition2.mul_k(invTimeHorizonObst).moins(this.orcaLines_[j].point), this.orcaLines_[j].direction) - invTimeHorizonObst * this.radius_ >= -_RVOMath__WEBPACK_IMPORTED_MODULE_2__["RVOMath"].RVO_EPSILON) {
                    alreadyCovered = true;
                    break;
                }
            }
            if (alreadyCovered) {
                continue;
            }
            /* Not yet covered. Check for collisions. */
            var distSq1 = _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].absSq(relativePosition1);
            var distSq2 = _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].absSq(relativePosition2);
            var radiusSq = _RVOMath__WEBPACK_IMPORTED_MODULE_2__["RVOMath"].sqr(this.radius_);
            var obstacleVector = obstacle2.point_.moins(obstacle1.point_);
            // var v1: Vector2 = relativePosition1.moinsSelf();
            var s = relativePosition1.moinsSelf().mul(obstacleVector) / _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].absSq(obstacleVector);
            //  var v2: Vector2 = obstacleVector.mul_k(-s); 
            var distSqLine = _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].absSq(relativePosition1.moinsSelf().plus(obstacleVector.mul_k(-s)));
            var line = new _Line__WEBPACK_IMPORTED_MODULE_1__["Line"]();
            if (s < 0 && distSq1 <= radiusSq) {
                /* Collision with left vertex. Ignore if non-convex. */
                if (obstacle1.isConvex_) {
                    line.point = new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](0, 0);
                    line.direction = _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].normalize(new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](-relativePosition1.y, relativePosition1.x));
                    this.orcaLines_.push(line);
                }
                continue;
            }
            else if (s > 1 && distSq2 <= radiusSq) {
                /* Collision with right vertex. Ignore if non-convex
                  * or if it will be taken care of by neighoring obstace */
                if (obstacle2.isConvex_ && _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].det(relativePosition2, obstacle2.unitDir_) >= 0) {
                    line.point = new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](0, 0);
                    line.direction = _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].normalize(new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](-relativePosition2.y, relativePosition2.x));
                    this.orcaLines_.push(line);
                }
                continue;
            }
            else if (s >= 0 && s <= 1 && distSqLine <= radiusSq) {
                /* Collision with obstacle segment. */
                line.point = new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](0, 0);
                line.direction = obstacle1.unitDir_.moinsSelf();
                this.orcaLines_.push(line);
                continue;
            }
            /*
                  * No collision.
                  * Compute legs. When obliquely viewed, both legs can come from a single
                  * vertex. Legs extend cut-off line when nonconvex vertex.
                  */
            var leftLegDirection;
            var rightLegDirection;
            if (s < 0 && distSqLine <= radiusSq) {
                /*
                  * Obstacle viewed obliquely so that left vertex
                  * defines velocity obstacle.
                  */
                if (!obstacle1.isConvex_) {
                    /* Ignore obstacle. */
                    continue;
                }
                obstacle2 = obstacle1;
                var leg1 = Math.sqrt(distSq1 - radiusSq);
                leftLegDirection = new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](relativePosition1.x * leg1 - relativePosition1.y * this.radius_, relativePosition1.x * this.radius_ + relativePosition1.y * leg1).div_k(distSq1);
                rightLegDirection = new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](relativePosition1.x * leg1 + relativePosition1.y * this.radius_, -relativePosition1.x * this.radius_ + relativePosition1.y * leg1).div_k(distSq1);
            }
            else if (s > 1 && distSqLine <= radiusSq) {
                /*
                  * Obstacle viewed obliquely so that
                  * right vertex defines velocity obstacle.
                  */
                if (!obstacle2.isConvex_) {
                    /* Ignore obstacle. */
                    continue;
                }
                obstacle1 = obstacle2;
                var leg2 = Math.sqrt(distSq2 - radiusSq);
                leftLegDirection = new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](relativePosition2.x * leg2 - relativePosition2.y * this.radius_, relativePosition2.x * this.radius_ + relativePosition2.y * leg2).div_k(distSq2);
                rightLegDirection = new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](relativePosition2.x * leg2 + relativePosition2.y * this.radius_, -relativePosition2.x * this.radius_ + relativePosition2.y * leg2).div_k(distSq2);
            }
            else {
                /* Usual situation. */
                if (obstacle1.isConvex_) {
                    var leg1 = Math.sqrt(distSq1 - radiusSq);
                    leftLegDirection = new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](relativePosition1.x * leg1 - relativePosition1.y * this.radius_, relativePosition1.x * this.radius_ + relativePosition1.y * leg1).div_k(distSq1);
                }
                else {
                    /* Left vertex non-convex; left leg extends cut-off line. */
                    leftLegDirection = obstacle1.unitDir_.moinsSelf();
                }
                if (obstacle2.isConvex_) {
                    var leg2 = Math.sqrt(distSq2 - radiusSq);
                    rightLegDirection = new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](relativePosition2.x * leg2 + relativePosition2.y * this.radius_, -relativePosition2.x * this.radius_ + relativePosition2.y * leg2).div_k(distSq2);
                }
                else {
                    /* Right vertex non-convex; right leg extends cut-off line. */
                    rightLegDirection = obstacle1.unitDir_;
                }
            }
            /*
              * Legs can never point into neighboring edge when convex vertex,
              * take cutoff-line of neighboring edge instead. If velocity projected on
              * "foreign" leg, no constraint is added.
              */
            var leftNeighbor = obstacle1.prevObstacle_;
            var isLeftLegForeign = false;
            var isRightLegForeign = false;
            if (obstacle1.isConvex_ && _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].det(leftLegDirection, leftNeighbor.unitDir_.moinsSelf()) >= 0) {
                /* Left leg points into obstacle. */
                leftLegDirection = leftNeighbor.unitDir_.moinsSelf();
                isLeftLegForeign = true;
            }
            if (obstacle2.isConvex_ && _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].det(rightLegDirection, obstacle2.unitDir_) <= 0) {
                /* Right leg points into obstacle. */
                rightLegDirection = obstacle2.unitDir_;
                isRightLegForeign = true;
            }
            /* Compute cut-off centers. */
            var leftCutoff = obstacle1.point_.moins(this.position_).mul_k(invTimeHorizonObst);
            var rightCutoff = obstacle2.point_.moins(this.position_).mul_k(invTimeHorizonObst);
            var cutoffVec = rightCutoff.moins(leftCutoff);
            //var cutoffVec = new Vector2(3, 3.3); 
            /* Project current velocity on velocity obstacle. */
            /* Check if current velocity is projected on cutoff circles. */
            var t = (obstacle1 == obstacle2 ? 0.5 : this.velocity_.moins(leftCutoff).mul(cutoffVec) / _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].absSq(cutoffVec));
            // var  tLeft : number = ((velocity_ - leftCutoff) * leftLegDirection);
            var tLeft = this.velocity_.moins(leftCutoff).mul(leftLegDirection);
            var tRight = this.velocity_.moins(rightCutoff).mul(rightLegDirection);
            if ((t < 0 && tLeft < 0) || (obstacle1 == obstacle2 && tLeft < 0 && tRight < 0)) {
                /* Project on left cut-off circle. */
                var unitW = _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].normalize(this.velocity_.moins(leftCutoff));
                line.direction = new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](unitW.y, -unitW.x);
                line.point = leftCutoff.plus(unitW.mul_k(this.radius_ * invTimeHorizonObst));
                this.orcaLines_.push(line);
                continue;
            }
            else if (t > 1 && tRight < 0) {
                /* Project on right cut-off circle. */
                var unitW = _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].normalize(this.velocity_.moins(rightCutoff));
                line.direction = new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](unitW.y, -unitW.x);
                line.point = rightCutoff.plus(unitW.mul_k(this.radius_ * invTimeHorizonObst));
                this.orcaLines_.push(line);
                continue;
            }
            /*
              * Project on left leg, right leg, or cut-off line, whichever is closest
              * to velocity.
              */
            var distSqCutoff = ((t < 0 || t > 1 || obstacle1 == obstacle2) ? Number.POSITIVE_INFINITY : _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].absSq(this.velocity_.moins(leftCutoff.plus(cutoffVec.mul_k(t)))));
            var distSqLeft = ((tLeft < 0) ? Number.POSITIVE_INFINITY : _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].absSq(this.velocity_.moins(leftCutoff.plus(leftLegDirection.mul_k(tLeft)))));
            var distSqRight = ((tRight < 0) ? Number.POSITIVE_INFINITY : _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].absSq(this.velocity_.moins(rightCutoff.plus(rightLegDirection.mul_k(tRight)))));
            if (distSqCutoff <= distSqLeft && distSqCutoff <= distSqRight) {
                /* Project on cut-off line. */
                line.direction = obstacle1.unitDir_.moinsSelf();
                line.point = leftCutoff.plus(new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](-line.direction.y, line.direction.x).mul_k(this.radius_ + invTimeHorizonObst));
                this.orcaLines_.push(line);
                continue;
            }
            else if (distSqLeft <= distSqRight) {
                /* Project on left leg. */
                if (isLeftLegForeign) {
                    continue;
                }
                line.direction = leftLegDirection;
                line.point = leftCutoff.plus(new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](-line.direction.y, line.direction.x).mul_k(this.radius_ + invTimeHorizonObst));
                this.orcaLines_.push(line);
                continue;
            }
            else {
                /* Project on right leg. */
                if (isRightLegForeign) {
                    continue;
                }
                line.direction = rightLegDirection.moinsSelf();
                line.point = rightCutoff.plus(new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](-line.direction.y, line.direction.x).mul_k(this.radius_ + invTimeHorizonObst));
                this.orcaLines_.push(line);
                continue;
            }
        }
        //if (this.id_ == 0) console.log(this.orcaLines_.length);
        var numObstLines = this.orcaLines_.length;
        var invTimeHorizon = 1.0 / this.timeHorizon_;
        /* Create agent ORCA lines. */
        for (var i = 0; i < this.agentNeighbors_.length; ++i) {
            var other = this.agentNeighbors_[i].Value;
            var relativePosition = other.position_.moins(this.position_);
            var relativeVelocity = this.velocity_.moins(other.velocity_);
            var distSq = _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].absSq(relativePosition);
            var combinedRadius = this.radius_ + other.radius_;
            var combinedRadiusSq = _RVOMath__WEBPACK_IMPORTED_MODULE_2__["RVOMath"].sqr(combinedRadius);
            var line = new _Line__WEBPACK_IMPORTED_MODULE_1__["Line"]();
            var u = new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](0, 0);
            if (distSq > combinedRadiusSq) {
                /* No collision. */
                var w = relativeVelocity.moins(relativePosition.mul_k(invTimeHorizon));
                /* Vector from cutoff center to relative velocity. */
                var wLengthSq = _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].absSq(w);
                var dotProduct1 = w.mul(relativePosition);
                if (dotProduct1 < 0 && _RVOMath__WEBPACK_IMPORTED_MODULE_2__["RVOMath"].sqr(dotProduct1) > combinedRadiusSq * wLengthSq) {
                    /* Project on cut-off circle. */
                    var wLength = Math.sqrt(wLengthSq);
                    var unitW = w.div_k(wLength);
                    line.direction = new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](unitW.y, -unitW.x);
                    u = unitW.mul_k(combinedRadius * invTimeHorizon - wLength);
                }
                else {
                    /* Project on legs. */
                    var leg = Math.sqrt(distSq - combinedRadiusSq);
                    if (_Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].det(relativePosition, w) > 0) {
                        /* Project on left leg. */
                        line.direction = new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](relativePosition.x * leg - relativePosition.y * combinedRadius, relativePosition.x * combinedRadius + relativePosition.y * leg).div_k(distSq);
                    }
                    else {
                        /* Project on right leg. */
                        line.direction = new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](relativePosition.x * leg + relativePosition.y * combinedRadius, -relativePosition.x * combinedRadius + relativePosition.y * leg).div_k(distSq).moinsSelf();
                    }
                    var dotProduct2 = relativeVelocity.mul(line.direction);
                    u = line.direction.mul_k(dotProduct2).moins(relativeVelocity);
                }
            }
            else {
                /* Collision. Project on cut-off circle of time timeStep. */
                var invTimeStep = 1 / _Simulator__WEBPACK_IMPORTED_MODULE_3__["Simulator"].Instance().timeStep_;
                /* Vector from cutoff center to relative velocity. */
                // var w: Vector2 = Vector2.v_minus(relativeVelocity, Vector2.v_mul(relativePosition, invTimeStep ));
                var w = relativeVelocity.moins(relativePosition.mul_k(invTimeStep));
                var wLength = _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].abs(w);
                var unitW = w.div_k(wLength);
                line.direction = new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](unitW.y, -unitW.x);
                // u = Vector2.v_mul(unitW, (combinedRadius * invTimeStep - wLength));
                u = unitW.mul_k(combinedRadius * invTimeStep - wLength);
            }
            // line.point = Vector2.v_add(this.velocity_, Vector2.v_mul(u, 0.5)); 
            ///  line.point = this.velocity_.plus(u.mul_k(.5));
            line.point = u.mul_k(.5).plus(this.velocity_);
            this.orcaLines_.push(line);
        }
        var lineFail = this.linearProgram2(this.orcaLines_, this.maxSpeed_, this.prefVelocity_, false, this.newVelocity_);
        if (lineFail < this.orcaLines_.length) {
            this.linearProgram3(this.orcaLines_, numObstLines, lineFail, this.maxSpeed_, this.newVelocity_);
        }
    }
    insertAgentNeighbor(agent, rangeSq) {
        if (this != agent) {
            var distSq = _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].absSq(this.position_.moins(agent.position_));
            //  console.log(distSq); 
            if (distSq < Agent.rangeSq) {
                if (this.agentNeighbors_.length < this.maxNeighbors_) {
                    this.agentNeighbors_.push(new _KeyValuePair__WEBPACK_IMPORTED_MODULE_0__["KeyValuePair"](distSq, agent));
                }
                var i = this.agentNeighbors_.length - 1;
                while (i != 0 && distSq < this.agentNeighbors_[i - 1].Key) {
                    this.agentNeighbors_[i] = this.agentNeighbors_[i - 1];
                    --i;
                }
                this.agentNeighbors_[i] = new _KeyValuePair__WEBPACK_IMPORTED_MODULE_0__["KeyValuePair"](distSq, agent);
                if (this.agentNeighbors_.length == this.maxNeighbors_) {
                    Agent.rangeSq = this.agentNeighbors_[this.agentNeighbors_.length - 1].Key;
                }
            }
        }
    }
    update() {
        this.velocity_ = this.newVelocity_;
        this.position_ = this.position_.plus(this.velocity_.mul_k(_Simulator__WEBPACK_IMPORTED_MODULE_3__["Simulator"]._instance.timeStep_));
        var v = 0;
        if (this.c <= 30) {
            this.orientation_ = Math.atan2(this.velocity_.y, this.velocity_.x) * 180 / 3.14 + 90;
            this.test[this.c] = this.orientation_;
            this.c++;
        }
        else {
            this.test.shift();
            this.test[this.c - 1] = Math.atan2(this.velocity_.y, this.velocity_.x) + Math.PI;
            for (var i = 0; i < this.test.length; ++i) {
                v += this.test[i];
            }
            v = v / this.c;
            this.orientation_ = v * 180 / 3.14 + 270;
            ;
        }
    }
    insertObstacleNeighbor(obstacle, rangeSq) {
        var nextObstacle_ = obstacle.nextObstacle_;
        var distSq = _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].distSqPointLineSegment(obstacle.point_, nextObstacle_.point_, this.position_);
        if (distSq < rangeSq) {
            this.obstacleNeighbors_.push(new _KeyValuePair__WEBPACK_IMPORTED_MODULE_0__["KeyValuePair"](distSq, obstacle));
            var i = this.obstacleNeighbors_.length - 1;
            while (i != 0 && distSq < this.obstacleNeighbors_[i - 1].Key) {
                this.obstacleNeighbors_[i] = this.obstacleNeighbors_[i - 1];
                --i;
            }
            this.obstacleNeighbors_[i] = new _KeyValuePair__WEBPACK_IMPORTED_MODULE_0__["KeyValuePair"](distSq, obstacle);
        }
    }
    linearProgram1(lines, lineNo, radius, optVelocity, directionOpt, result) {
        // var dotProduct : number = Vector2.v_mul_v(lines[lineNo].point , lines[lineNo].direction);
        var dotProduct = lines[lineNo].point.mul(lines[lineNo].direction);
        var discriminant = _RVOMath__WEBPACK_IMPORTED_MODULE_2__["RVOMath"].sqr(dotProduct) + _RVOMath__WEBPACK_IMPORTED_MODULE_2__["RVOMath"].sqr(radius) - _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].absSq(lines[lineNo].point);
        if (discriminant < 0) {
            /* Max speed circle fully invalidates line lineNo. */
            return false;
        }
        var sqrtDiscriminant = Math.sqrt(discriminant); //RVOMath.sqrt(discriminant);
        var tLeft = -dotProduct - sqrtDiscriminant;
        var tRight = -dotProduct + sqrtDiscriminant;
        for (var i = 0; i < lineNo; ++i) {
            var denominator = _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].det(lines[lineNo].direction, lines[i].direction);
            var numerator = _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].det(lines[i].direction, lines[lineNo].point.moins(lines[i].point));
            if (Math.abs(denominator) <= _RVOMath__WEBPACK_IMPORTED_MODULE_2__["RVOMath"].RVO_EPSILON) {
                /* Lines lineNo and i are (almost) parallel. */
                if (numerator < 0) {
                    return false;
                }
                else {
                    continue;
                }
            }
            var t = numerator / denominator;
            if (denominator >= 0) {
                /* Line i bounds line lineNo on the right. */
                tRight = Math.min(tRight, t);
            }
            else {
                /* Line i bounds line lineNo on the left. */
                tLeft = Math.max(tLeft, t);
            }
            if (tLeft > tRight) {
                return false;
            }
        }
        if (directionOpt) {
            /* Optimize direction. */
            if (optVelocity.mul(lines[lineNo].direction) > 0) {
                /* Take right extreme. */
                // result = Vector2.v_add(lines[lineNo].point, Vector2.v_mul(lines[lineNo].direction, tRight));
                this.newVelocity_ = lines[lineNo].point.plus(lines[lineNo].direction.mul_k(tRight));
            }
            else {
                /* Take left extreme. */
                // result = Vector2.v_add(lines[lineNo].point, Vector2.v_mul(lines[lineNo].direction, tLeft));
                this.newVelocity_ = lines[lineNo].point.plus(lines[lineNo].direction.mul_k(tLeft));
            }
        }
        else {
            /* Optimize closest point. */
            // var t1: number = Vector2.v_mul_v(lines[lineNo].direction, Vector2.v_minus(optVelocity, lines[lineNo].point));
            var t1 = lines[lineNo].direction.mul(optVelocity.moins(lines[lineNo].point));
            if (t1 < tLeft) {
                //  result = Vector2.v_add(lines[lineNo].point, Vector2.v_mul(lines[lineNo].direction, tLeft));
                this.newVelocity_ = lines[lineNo].point.plus(lines[lineNo].direction.mul_k(tLeft));
            }
            else if (t1 > tRight) {
                // result = Vector2.v_add(lines[lineNo].point, Vector2.v_mul(lines[lineNo].direction, tRight));
                this.newVelocity_ = lines[lineNo].point.plus(lines[lineNo].direction.mul_k(tRight));
            }
            else {
                //result = Vector2.v_add(lines[lineNo].point, Vector2.v_mul(lines[lineNo].direction, t));
                this.newVelocity_ = lines[lineNo].point.plus(lines[lineNo].direction.mul_k(t1));
            }
        }
        return true;
    }
    linearProgram2(lines, radius, optVelocity, directionOpt, result) {
        if (directionOpt) {
            /*
              * Optimize direction. Note that the optimization velocity is of unit
              * length in this case.
              */
            // result = optVelocity.mul_k(radius);
            this.newVelocity_ = optVelocity.mul_k(radius);
            ;
        }
        else if (_Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].absSq(optVelocity) > _RVOMath__WEBPACK_IMPORTED_MODULE_2__["RVOMath"].sqr(radius)) {
            /* Optimize closest point and outside circle. */
            // result = 
            this.newVelocity_ = _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].normalize(optVelocity).mul_k(radius);
        }
        else {
            /* Optimize closest point and inside circle. */
            // result = optVelocity;
            this.newVelocity_ = optVelocity;
        }
        for (var i = 0; i < lines.length; ++i) {
            if (_Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].det(lines[i].direction, lines[i].point.moins(this.newVelocity_)) > 0) {
                /* Result does not satisfy constraint i. Compute new optimal result. */
                var tempResult = this.newVelocity_;
                if (!this.linearProgram1(lines, i, radius, optVelocity, directionOpt, this.newVelocity_)) {
                    // tempResult;
                    this.newVelocity_ = tempResult;
                    return i;
                }
            }
        }
        //  console.log(lines.length); 
        return lines.length;
    }
    linearProgram3(lines, numObstLines, beginLine, radius, result) {
        var distance = 0;
        for (var i = beginLine; i < lines.length; ++i) {
            if (_Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].det(lines[i].direction, lines[i].point.moins(this.velocity_)) > distance) {
                /* Result does not satisfy constraint of line i. */
                //std::vector<Line> projLines(lines.begin(), lines.begin() + numObstLines);
                var projLines = [];
                for (var ii = 0; ii < numObstLines; ++ii) {
                    projLines.push(lines[ii]);
                }
                // console.log("a", projLines.length); 
                for (var j = numObstLines; j < i; ++j) {
                    var line = new _Line__WEBPACK_IMPORTED_MODULE_1__["Line"]();
                    var determinant = _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].det(lines[i].direction, lines[j].direction);
                    if (Math.abs(determinant) <= _RVOMath__WEBPACK_IMPORTED_MODULE_2__["RVOMath"].RVO_EPSILON) {
                        /* Line i and line j are parallel. */
                        if (lines[i].direction.mul(lines[j].direction) > 0) {
                            /* Line i and line j point in the same direction. */
                            continue;
                        }
                        else {
                            /* Line i and line j point in opposite direction. */
                            line.point = lines[i].point.plus(lines[j].point).mul_k(.5);
                        }
                    }
                    else {
                        // line.point = Vector2.v_add(lines[i].point , Vector2.v_mul( lines[i].direction ,  (RVOMath.det(lines[j].direction, Vector2.v_minus(lines[i].point , lines[j].point)) / determinant))) ;
                        // line.point = lines[i].point + (Vector2.det(lines[j].direction, lines[i].point.moins( lines[j].point)) / determinant) * lines[i].direction;
                        var n = _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].det(lines[j].direction, lines[i].point.moins(lines[j].point)) / determinant;
                        var v = lines[i].direction.mul_k(n);
                        line.point = lines[i].point.plus(v);
                        // console.log("this case OO"); 
                    }
                    line.direction = _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].normalize(lines[j].direction.moins(lines[i].direction));
                    projLines.push(line);
                }
                // console.log("b", projLines.length);
                var tempResult = this.newVelocity_;
                if (this.linearProgram2(projLines, radius, new _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"](-lines[i].direction.y, lines[i].direction.x), true, this.newVelocity_) < projLines.length) {
                    /* This should in principle not happen.  The result is by definition
                      * already in the feasible region of this linear program. If it fails,
                      * it is due to small floating point error, and the current result is
                      * kept.
                      */
                    //  result = tempResult;
                    // console.log("should not happen"); 
                    this.newVelocity_ = tempResult;
                }
                distance = _Vector2__WEBPACK_IMPORTED_MODULE_4__["Vector2"].det(lines[i].direction, lines[i].point.moins(this.newVelocity_));
            }
        }
    }
}


/***/ }),

/***/ "./src/script/logic/rvo/AgentTreeNode.ts":
/*!***********************************************!*\
  !*** ./src/script/logic/rvo/AgentTreeNode.ts ***!
  \***********************************************/
/*! exports provided: AgentTreeNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentTreeNode", function() { return AgentTreeNode; });
class AgentTreeNode {
}


/***/ }),

/***/ "./src/script/logic/rvo/FloatPair.ts":
/*!*******************************************!*\
  !*** ./src/script/logic/rvo/FloatPair.ts ***!
  \*******************************************/
/*! exports provided: FloatPair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatPair", function() { return FloatPair; });
class FloatPair {
    constructor(a, b) {
        this._a = a;
        this._b = b;
    }
    static inf(lhs, rhs) {
        return (lhs._a < rhs._a || !(rhs._a < lhs._a) && lhs._b < rhs._b);
    }
    static inf_equal(lhs, rhs) {
        return (lhs._a == rhs._a && lhs._b == rhs._b) || lhs < rhs;
    }
    static sup(lhs, rhs) {
        return !FloatPair.inf_equal(lhs, rhs);
        // return !inf_equal(lhs, rhs);
    }
    static sup_equal(lhs, rhs) {
        return !FloatPair.inf;
        // return !inf(lhs, rhs); 
    }
}


/***/ }),

/***/ "./src/script/logic/rvo/KdTree.ts":
/*!****************************************!*\
  !*** ./src/script/logic/rvo/KdTree.ts ***!
  \****************************************/
/*! exports provided: KdTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KdTree", function() { return KdTree; });
/* harmony import */ var _Agent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Agent */ "./src/script/logic/rvo/Agent.ts");
/* harmony import */ var _AgentTreeNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgentTreeNode */ "./src/script/logic/rvo/AgentTreeNode.ts");
/* harmony import */ var _FloatPair__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FloatPair */ "./src/script/logic/rvo/FloatPair.ts");
/* harmony import */ var _Obstacle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Obstacle */ "./src/script/logic/rvo/Obstacle.ts");
/* harmony import */ var _ObstacleTreeNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ObstacleTreeNode */ "./src/script/logic/rvo/ObstacleTreeNode.ts");
/* harmony import */ var _RVOMath__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RVOMath */ "./src/script/logic/rvo/RVOMath.ts");
/* harmony import */ var _Simulator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Simulator */ "./src/script/logic/rvo/Simulator.ts");
/* harmony import */ var _Vector2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Vector2 */ "./src/script/logic/rvo/Vector2.ts");
/// <reference path="Vector2.ts" />
/// <reference path="Line.ts" />
/// <reference path="Agent.ts" />
/// <reference path="Obstacle.ts" />
/// <reference path="AgentTreeNode.ts" />
/// <reference path="ObstacleTreeNode.ts" />
/// <reference path="FloatPair.ts" />








class KdTree {
    constructor() {
        this.MAX_LEAF_SIZE = 10;
        this.agents_ = [];
        this.agentTree_ = [];
    }
    buildAgentTree() {
        //    this.agents_ = new Agent[Simulator.Instance().agents_.length];
        for (var i = 0; i < _Simulator__WEBPACK_IMPORTED_MODULE_6__["Simulator"].Instance().agents_.length; ++i) {
            this.agents_[i] = _Simulator__WEBPACK_IMPORTED_MODULE_6__["Simulator"].Instance().agents_[i];
        }
        // this.agentTree_ = new AgentTreeNode[2 *this. agents_.length];
        for (var i = 0; i < this.agents_.length * 2; ++i) {
            this.agentTree_[i] = new _AgentTreeNode__WEBPACK_IMPORTED_MODULE_1__["AgentTreeNode"]();
        }
        if (this.agents_.length != 0) {
            this.buildAgentTreeRecursive(0, this.agents_.length, 0);
        }
    }
    buildAgentTreeRecursive(begin, end, node) {
        // console.log(node); 
        this.agentTree_[node].begin = begin;
        this.agentTree_[node].end = end;
        this.agentTree_[node].minX = this.agentTree_[node].maxX = this.agents_[begin].position_.x;
        this.agentTree_[node].minY = this.agentTree_[node].maxY = this.agents_[begin].position_.y;
        for (var i = begin + 1; i < end; ++i) {
            this.agentTree_[node].maxX = Math.max(this.agentTree_[node].maxX, this.agents_[i].position_.x);
            this.agentTree_[node].minX = Math.min(this.agentTree_[node].minX, this.agents_[i].position_.x);
            this.agentTree_[node].maxY = Math.max(this.agentTree_[node].maxY, this.agents_[i].position_.y);
            this.agentTree_[node].minY = Math.min(this.agentTree_[node].minY, this.agents_[i].position_.y);
        }
        if (end - begin > this.MAX_LEAF_SIZE) {
            var isVertical = (this.agentTree_[node].maxX - this.agentTree_[node].minX > this.agentTree_[node].maxY - this.agentTree_[node].minY);
            var splitValue = (isVertical ? 0.5 * (this.agentTree_[node].maxX + this.agentTree_[node].minX) : 0.5 * (this.agentTree_[node].maxY + this.agentTree_[node].minY));
            var left = begin;
            var right = end;
            while (left < right) {
                while (left < right && (isVertical ? this.agents_[left].position_.x : this.agents_[left].position_.y) < splitValue) {
                    ++left;
                }
                while (right > left && (isVertical ? this.agents_[right - 1].position_.x : this.agents_[right - 1].position_.y) >= splitValue) {
                    --right;
                }
                if (left < right) {
                    // std::swap in c++ to JS
                    var tmp = this.agents_[left];
                    this.agents_[left] = this.agents_[right - 1];
                    this.agents_[right - 1] = tmp;
                    ++left;
                    --right;
                }
            }
            //   var leftSize: number = left - begin;
            if (left == begin) {
                ++left;
                ++right;
            }
            this.agentTree_[node].left = node + 1;
            this.agentTree_[node].right = node + 2 * (left - begin);
            this.buildAgentTreeRecursive(begin, left, this.agentTree_[node].left);
            this.buildAgentTreeRecursive(left, end, this.agentTree_[node].right);
        }
    }
    computeAgentNeighbors(agent, rangeSq) {
        this.queryAgentTreeRecursive(agent, rangeSq, 0);
    }
    queryAgentTreeRecursive(agent, rangeSq, node) {
        if (this.agentTree_[node].end - this.agentTree_[node].begin <= this.MAX_LEAF_SIZE) {
            for (var i = this.agentTree_[node].begin; i < this.agentTree_[node].end; ++i) {
                agent.insertAgentNeighbor(this.agents_[i], _Agent__WEBPACK_IMPORTED_MODULE_0__["Agent"].rangeSq);
            }
        }
        else {
            var distSqLeft = _RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].sqr(Math.max(0, this.agentTree_[this.agentTree_[node].left].minX - agent.position_.x)) + _RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].sqr(Math.max(0, agent.position_.x - this.agentTree_[this.agentTree_[node].left].maxX)) + _RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].sqr(Math.max(0, this.agentTree_[this.agentTree_[node].left].minY - agent.position_.y)) + _RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].sqr(Math.max(0, agent.position_.y - this.agentTree_[this.agentTree_[node].left].maxY));
            var distSqRight = _RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].sqr(Math.max(0, this.agentTree_[this.agentTree_[node].right].minX - agent.position_.x)) + _RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].sqr(Math.max(0, agent.position_.x - this.agentTree_[this.agentTree_[node].right].maxX)) + _RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].sqr(Math.max(0, this.agentTree_[this.agentTree_[node].right].minY - agent.position_.y)) + _RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].sqr(Math.max(0, agent.position_.y - this.agentTree_[this.agentTree_[node].right].maxY));
            if (distSqLeft < distSqRight) {
                if (distSqLeft < _Agent__WEBPACK_IMPORTED_MODULE_0__["Agent"].rangeSq) {
                    this.queryAgentTreeRecursive(agent, _Agent__WEBPACK_IMPORTED_MODULE_0__["Agent"].rangeSq, this.agentTree_[node].left);
                    if (distSqRight < _Agent__WEBPACK_IMPORTED_MODULE_0__["Agent"].rangeSq) {
                        this.queryAgentTreeRecursive(agent, _Agent__WEBPACK_IMPORTED_MODULE_0__["Agent"].rangeSq, this.agentTree_[node].right);
                    }
                }
            }
            else {
                if (distSqRight < _Agent__WEBPACK_IMPORTED_MODULE_0__["Agent"].rangeSq) {
                    this.queryAgentTreeRecursive(agent, _Agent__WEBPACK_IMPORTED_MODULE_0__["Agent"].rangeSq, this.agentTree_[node].right);
                    if (distSqLeft < _Agent__WEBPACK_IMPORTED_MODULE_0__["Agent"].rangeSq) {
                        this.queryAgentTreeRecursive(agent, _Agent__WEBPACK_IMPORTED_MODULE_0__["Agent"].rangeSq, this.agentTree_[node].left);
                    }
                }
            }
        }
    }
    buildObstacleTree() {
        this.obstacleTree_ = new _ObstacleTreeNode__WEBPACK_IMPORTED_MODULE_4__["ObstacleTreeNode"]();
        var obstacles = [];
        for (var i = 0; i < _Simulator__WEBPACK_IMPORTED_MODULE_6__["Simulator"].Instance().obstacles_.length; ++i) {
            obstacles[i] = _Simulator__WEBPACK_IMPORTED_MODULE_6__["Simulator"].Instance().obstacles_[i];
        }
        this.obstacleTree_ = this.buildObstacleTreeRecursive(obstacles);
    }
    buildObstacleTreeRecursive(obstacles) {
        // console.log("buildObstacleTreeRecursive"); 
        if (obstacles.length == 0) {
            return null;
        }
        var node = new _ObstacleTreeNode__WEBPACK_IMPORTED_MODULE_4__["ObstacleTreeNode"]();
        var optimalSplit = 0;
        var minLeft = obstacles.length;
        var minRight = obstacles.length;
        for (var i = 0; i < obstacles.length; ++i) {
            var leftSize = 0;
            var rightSize = 0;
            var obstacleI1 = obstacles[i];
            var obstacleI2 = obstacleI1.nextObstacle_;
            /* Compute optimal split node. */
            for (var j = 0; j < obstacles.length; ++j) {
                if (i == j) {
                    continue;
                }
                var obstacleJ1 = obstacles[j];
                var obstacleJ2 = obstacleJ1.nextObstacle_;
                var j1LeftOfI = _Vector2__WEBPACK_IMPORTED_MODULE_7__["Vector2"].leftOf(obstacleI1.point_, obstacleI2.point_, obstacleJ1.point_);
                var j2LeftOfI = _Vector2__WEBPACK_IMPORTED_MODULE_7__["Vector2"].leftOf(obstacleI1.point_, obstacleI2.point_, obstacleJ2.point_);
                if (j1LeftOfI >= -_RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].RVO_EPSILON && j2LeftOfI >= -_RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].RVO_EPSILON) {
                    ++leftSize;
                }
                else if (j1LeftOfI <= _RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].RVO_EPSILON && j2LeftOfI <= _RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].RVO_EPSILON) {
                    ++rightSize;
                }
                else {
                    ++leftSize;
                    ++rightSize;
                }
                var l = new _FloatPair__WEBPACK_IMPORTED_MODULE_2__["FloatPair"](Math.max(leftSize, rightSize), Math.min(leftSize, rightSize));
                var r = new _FloatPair__WEBPACK_IMPORTED_MODULE_2__["FloatPair"](Math.max(minLeft, minRight), Math.min(minLeft, minRight));
                if (_FloatPair__WEBPACK_IMPORTED_MODULE_2__["FloatPair"].sup_equal(l, r)) {
                    break;
                }
            }
            var l = new _FloatPair__WEBPACK_IMPORTED_MODULE_2__["FloatPair"](Math.max(leftSize, rightSize), Math.min(leftSize, rightSize));
            var r = new _FloatPair__WEBPACK_IMPORTED_MODULE_2__["FloatPair"](Math.max(minLeft, minRight), Math.min(minLeft, minRight));
            if (_FloatPair__WEBPACK_IMPORTED_MODULE_2__["FloatPair"].inf(l, r)) {
                minLeft = leftSize;
                minRight = rightSize;
                optimalSplit = i;
            }
        }
        /* Build split node. */
        var leftObstacles = [];
        for (var n = 0; n < minLeft; ++n)
            leftObstacles[n] = null;
        var rightObstacles = [];
        for (var n = 0; n < minRight; ++n)
            rightObstacles[n] = null;
        var leftCounter = 0;
        var rightCounter = 0;
        var i = optimalSplit;
        var obstacleI1 = obstacles[i];
        var obstacleI2 = obstacleI1.nextObstacle_;
        for (var j = 0; j < obstacles.length; ++j) {
            if (i == j) {
                continue;
            }
            var obstacleJ1 = obstacles[j];
            var obstacleJ2 = obstacleJ1.nextObstacle_;
            var j1LeftOfI = _Vector2__WEBPACK_IMPORTED_MODULE_7__["Vector2"].leftOf(obstacleI1.point_, obstacleI2.point_, obstacleJ1.point_);
            var j2LeftOfI = _Vector2__WEBPACK_IMPORTED_MODULE_7__["Vector2"].leftOf(obstacleI1.point_, obstacleI2.point_, obstacleJ2.point_);
            if (j1LeftOfI >= -_RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].RVO_EPSILON && j2LeftOfI >= -_RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].RVO_EPSILON) {
                leftObstacles[leftCounter++] = obstacles[j];
            }
            else if (j1LeftOfI <= _RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].RVO_EPSILON && j2LeftOfI <= _RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].RVO_EPSILON) {
                rightObstacles[rightCounter++] = obstacles[j];
            }
            else {
                /* Split obstacle j. */
                //  float t = RVOMath.det(obstacleI2.point_ - obstacleI1.point_, obstacleJ1.point_ - obstacleI1.point_) / RVOMath.det(obstacleI2.point_ - obstacleI1.point_, obstacleJ1.point_ - obstacleJ2.point_);
                var t1 = _Vector2__WEBPACK_IMPORTED_MODULE_7__["Vector2"].det(obstacleI2.point_.moins(obstacleI1.point_), obstacleJ1.point_.moins(obstacleI1.point_));
                var t2 = _Vector2__WEBPACK_IMPORTED_MODULE_7__["Vector2"].det(obstacleI2.point_.moins(obstacleI1.point_), obstacleJ1.point_.moins(obstacleJ2.point_));
                var t = t1 / t2;
                //Vector2 splitpoint = obstacleJ1.point_ + t * (obstacleJ2.point_ - obstacleJ1.point_);
                var vMinus = obstacleJ2.point_.moins(obstacleJ1.point_);
                var vMul = vMinus.mul_k(t);
                var splitpoint = obstacleJ1.point_.plus(vMul);
                var newObstacle = new _Obstacle__WEBPACK_IMPORTED_MODULE_3__["Obstacle"]();
                newObstacle.point_ = splitpoint;
                newObstacle.prevObstacle_ = obstacleJ1;
                newObstacle.nextObstacle_ = obstacleJ2;
                newObstacle.isConvex_ = true;
                newObstacle.unitDir_ = obstacleJ1.unitDir_;
                newObstacle.id_ = _Simulator__WEBPACK_IMPORTED_MODULE_6__["Simulator"].Instance().obstacles_.length;
                _Simulator__WEBPACK_IMPORTED_MODULE_6__["Simulator"].Instance().obstacles_.push(newObstacle);
                obstacleJ1.nextObstacle_ = newObstacle;
                obstacleJ2.prevObstacle_ = newObstacle;
                if (j1LeftOfI > 0) {
                    leftObstacles[leftCounter++] = obstacleJ1;
                    rightObstacles[rightCounter++] = newObstacle;
                }
                else {
                    rightObstacles[rightCounter++] = obstacleJ1;
                    leftObstacles[leftCounter++] = newObstacle;
                }
            }
        }
        node.obstacle = obstacleI1;
        node.left = this.buildObstacleTreeRecursive(leftObstacles);
        node.right = this.buildObstacleTreeRecursive(rightObstacles);
        return node;
    }
    computeObstacleNeighbors(agent, rangeSq) {
        // console.log("compute"); 
        this.queryObstacleTreeRecursive(agent, rangeSq, this.obstacleTree_);
    }
    queryObstacleTreeRecursive(agent, rangeSq, node) {
        if (node == null) {
            return;
        }
        var obstacle1 = node.obstacle;
        var obstacle2 = obstacle1.nextObstacle_;
        var agentLeftOfLine = _Vector2__WEBPACK_IMPORTED_MODULE_7__["Vector2"].leftOf(obstacle1.point_, obstacle2.point_, agent.position_);
        this.queryObstacleTreeRecursive(agent, rangeSq, (agentLeftOfLine >= 0 ? node.left : node.right));
        var distSqLine = _RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].sqr(agentLeftOfLine) / _Vector2__WEBPACK_IMPORTED_MODULE_7__["Vector2"].absSq(obstacle2.point_.moins(obstacle1.point_));
        if (distSqLine < rangeSq) {
            if (agentLeftOfLine < 0) {
                /*
                 * Try obstacle at this node only if agent is on right side of
                 * obstacle (and can see obstacle).
                 */
                agent.insertObstacleNeighbor(node.obstacle, rangeSq);
            }
            /* Try other side of line. */
            this.queryObstacleTreeRecursive(agent, rangeSq, (agentLeftOfLine >= 0 ? node.right : node.left));
        }
    }
    queryVisibility(q1, q2, radius) {
        return this.queryVisibilityRecursive(q1, q2, radius, this.obstacleTree_);
    }
    queryVisibilityRecursive(q1, q2, radius, node) {
        if (node == null) {
            return true;
        }
        else {
            var obstacle1 = node.obstacle;
            var obstacle2 = obstacle1.nextObstacle_;
            var q1LeftOfI = _Vector2__WEBPACK_IMPORTED_MODULE_7__["Vector2"].leftOf(obstacle1.point_, obstacle2.point_, q1);
            var q2LeftOfI = _Vector2__WEBPACK_IMPORTED_MODULE_7__["Vector2"].leftOf(obstacle1.point_, obstacle2.point_, q2);
            var invLengthI = 1 / _Vector2__WEBPACK_IMPORTED_MODULE_7__["Vector2"].absSq(obstacle2.point_.moins(obstacle1.point_));
            if (q1LeftOfI >= 0 && q2LeftOfI >= 0) {
                return this.queryVisibilityRecursive(q1, q2, radius, node.left) && ((_RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].sqr(q1LeftOfI) * invLengthI >= _RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].sqr(radius) && _RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].sqr(q2LeftOfI) * invLengthI >= _RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].sqr(radius)) || this.queryVisibilityRecursive(q1, q2, radius, node.right));
            }
            else if (q1LeftOfI <= 0 && q2LeftOfI <= 0) {
                return this.queryVisibilityRecursive(q1, q2, radius, node.right) && ((_RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].sqr(q1LeftOfI) * invLengthI >= _RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].sqr(radius) && _RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].sqr(q2LeftOfI) * invLengthI >= _RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].sqr(radius)) || this.queryVisibilityRecursive(q1, q2, radius, node.left));
            }
            else if (q1LeftOfI >= 0 && q2LeftOfI <= 0) {
                /* One can see through obstacle from left to right. */
                return this.queryVisibilityRecursive(q1, q2, radius, node.left) && this.queryVisibilityRecursive(q1, q2, radius, node.right);
            }
            else {
                var point1LeftOfQ = _Vector2__WEBPACK_IMPORTED_MODULE_7__["Vector2"].leftOf(q1, q2, obstacle1.point_);
                var point2LeftOfQ = _Vector2__WEBPACK_IMPORTED_MODULE_7__["Vector2"].leftOf(q1, q2, obstacle2.point_);
                var invLengthQ = 1 / _Vector2__WEBPACK_IMPORTED_MODULE_7__["Vector2"].absSq(q2.moins(q1));
                return (point1LeftOfQ * point2LeftOfQ >= 0 && _RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].sqr(point1LeftOfQ) * invLengthQ > _RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].sqr(radius) && _RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].sqr(point2LeftOfQ) * invLengthQ > _RVOMath__WEBPACK_IMPORTED_MODULE_5__["RVOMath"].sqr(radius) && this.queryVisibilityRecursive(q1, q2, radius, node.left) && this.queryVisibilityRecursive(q1, q2, radius, node.right));
            }
        }
    }
}
;


/***/ }),

/***/ "./src/script/logic/rvo/KeyValuePair.ts":
/*!**********************************************!*\
  !*** ./src/script/logic/rvo/KeyValuePair.ts ***!
  \**********************************************/
/*! exports provided: KeyValuePair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyValuePair", function() { return KeyValuePair; });
/// <reference path="Vector2.ts" />
/// <reference path="Line.ts" />
/// <reference path="Agent.ts" />
/// <reference path="Obstacle.ts" />
class KeyValuePair {
    constructor(key_, value_) {
        this.Key = key_;
        this.Value = value_;
    }
}


/***/ }),

/***/ "./src/script/logic/rvo/Line.ts":
/*!**************************************!*\
  !*** ./src/script/logic/rvo/Line.ts ***!
  \**************************************/
/*! exports provided: Line */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
// / <reference path="Vector2.ts" />
class Line {
}


/***/ }),

/***/ "./src/script/logic/rvo/Obstacle.ts":
/*!******************************************!*\
  !*** ./src/script/logic/rvo/Obstacle.ts ***!
  \******************************************/
/*! exports provided: Obstacle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Obstacle", function() { return Obstacle; });
/// <reference path="Vector2.ts" />
/// <reference path="Line.ts" />
class Obstacle {
}


/***/ }),

/***/ "./src/script/logic/rvo/ObstacleTreeNode.ts":
/*!**************************************************!*\
  !*** ./src/script/logic/rvo/ObstacleTreeNode.ts ***!
  \**************************************************/
/*! exports provided: ObstacleTreeNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObstacleTreeNode", function() { return ObstacleTreeNode; });
/// <reference path="Obstacle.ts" />
class ObstacleTreeNode {
}


/***/ }),

/***/ "./src/script/logic/rvo/RVOHelper.ts":
/*!*******************************************!*\
  !*** ./src/script/logic/rvo/RVOHelper.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RVOHelper; });
/* harmony import */ var _Simulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Simulator */ "./src/script/logic/rvo/Simulator.ts");
/* harmony import */ var _Vector2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector2 */ "./src/script/logic/rvo/Vector2.ts");


class RVOHelper {
    static get instance() {
        if (!this._instance) {
            this._instance = new RVOHelper();
        }
        return this._instance;
    }
    InitRVO() {
        this._simulator = new _Simulator__WEBPACK_IMPORTED_MODULE_0__["Simulator"]();
        this._simulator.setTimeStep(1);
        this._simulator.setAgentDefaults(
        //????????????????????????????????????????????????????????????????????????????????????????????????????????????
        0.6, // neighbor distance (min = radius * radius)
        //???????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????
        5, // max neighbors
        //???????????????????????????????????????
        100, // time horizon
        //?????????????????????????????????????????????????????????RTS?????????????????? ????????????????????????????????????????????????????????????????????????
        1, // time horizon obstacles
        //??????
        0.3, 
        //????????????
        0.5);
    }
    CreateAgent(colliderObj) {
        let cmp = colliderObj.getComponent(Laya.PhysicsCollider);
        if (!cmp) {
            console.error("???????????????");
            return;
        }
        let shape = cmp.colliderShape;
        let radius = colliderObj.transform.localScale.x * shape.radius;
        let pos = colliderObj.transform.position;
        let vec2 = new _Vector2__WEBPACK_IMPORTED_MODULE_1__["Vector2"](pos.x, pos.z);
        return this._simulator.addAgent(vec2, radius);
    }
    CreateObstacle() {
    }
    Step(dt) {
        let simulator = this._simulator;
        simulator.doStep();
    }
}


/***/ }),

/***/ "./src/script/logic/rvo/RVOMath.ts":
/*!*****************************************!*\
  !*** ./src/script/logic/rvo/RVOMath.ts ***!
  \*****************************************/
/*! exports provided: RVOMath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RVOMath", function() { return RVOMath; });
/// <reference path="KdTree.ts" />
/// <reference path="Vector2.ts" />
/// <reference path="Line.ts" />
/// <reference path="Agent.ts" />
/// <reference path="Obstacle.ts" />
/// <reference path="AgentTreeNode.ts" />
/// <reference path="ObstacleTreeNode.ts" />
class RVOMath {
    static sqr(p) {
        return p * p;
        // return Math.pow(p, 2); 
    }
}
RVOMath.RVO_EPSILON = 0.0001;


/***/ }),

/***/ "./src/script/logic/rvo/Simulator.ts":
/*!*******************************************!*\
  !*** ./src/script/logic/rvo/Simulator.ts ***!
  \*******************************************/
/*! exports provided: Simulator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Simulator", function() { return Simulator; });
/* harmony import */ var _Agent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Agent */ "./src/script/logic/rvo/Agent.ts");
/* harmony import */ var _KdTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KdTree */ "./src/script/logic/rvo/KdTree.ts");
/* harmony import */ var _Obstacle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Obstacle */ "./src/script/logic/rvo/Obstacle.ts");
/* harmony import */ var _Vector2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Vector2 */ "./src/script/logic/rvo/Vector2.ts");
/// <reference path="KdTree.ts" />
/// <reference path="Vector2.ts" />
/// <reference path="Line.ts" />
/// <reference path="Agent.ts" />
/// <reference path="Obstacle.ts" />
/// <reference path="AgentTreeNode.ts" />
/// <reference path="ObstacleTreeNode.ts" />




class Simulator {
    constructor() {
        this.time_ = 0;
        this.agents_ = [];
        this.obstacles_ = [];
        this.time_ = 0;
        this.defaultAgent_ = null;
        this.kdTree_ = new _KdTree__WEBPACK_IMPORTED_MODULE_1__["KdTree"]();
        this.timeStep_ = 1;
        this.goals = [];
        Simulator._instance = this;
    }
    static Instance() {
        return Simulator._instance;
    }
    clear() {
    }
    doStep() {
        // console.log("ds la simu"); 
        this.kdTree_.buildAgentTree();
        for (var i = 0; i < this.getNumAgents(); ++i) {
            this.agents_[i].computeNeighbors();
            this.agents_[i].computeNewVelocity();
        }
        for (var i = 0; i < this.getNumAgents(); ++i) {
            this.agents_[i].update();
        }
        this.time_ += this.timeStep_;
    }
    processObstacles() {
        this.kdTree_.buildObstacleTree();
    }
    queryVisibility(point1, point2, radius) {
        return this.kdTree_.queryVisibility(point1, point2, radius);
    }
    addObstacle(vertices) {
        if (vertices.length < 2) {
            return -1;
        }
        var obstacleNo = this.obstacles_.length;
        for (var i = 0; i < vertices.length; ++i) {
            var obstacle = new _Obstacle__WEBPACK_IMPORTED_MODULE_2__["Obstacle"]();
            obstacle.point_ = vertices[i];
            if (i != 0) {
                obstacle.prevObstacle_ = this.obstacles_[this.obstacles_.length - 1];
                obstacle.prevObstacle_.nextObstacle_ = obstacle;
            }
            if (i == vertices.length - 1) {
                obstacle.nextObstacle_ = this.obstacles_[obstacleNo];
                obstacle.nextObstacle_.prevObstacle_ = obstacle;
            }
            obstacle.unitDir_ = _Vector2__WEBPACK_IMPORTED_MODULE_3__["Vector2"].normalize(vertices[(i == vertices.length - 1 ? 0 : i + 1)].moins(vertices[i]));
            if (vertices.length == 2) {
                obstacle.isConvex_ = true;
            }
            else {
                obstacle.isConvex_ = (_Vector2__WEBPACK_IMPORTED_MODULE_3__["Vector2"].leftOf(vertices[(i == 0 ? vertices.length - 1 : i - 1)], vertices[i], vertices[(i == vertices.length - 1 ? 0 : i + 1)]) >= 0);
            }
            obstacle.id_ = this.obstacles_.length;
            this.obstacles_.push(obstacle);
        }
        return obstacleNo;
    }
    addAgent(position, radius) {
        if (this.defaultAgent_ == null) {
            // return -1;
            return null;
        }
        var agent = new _Agent__WEBPACK_IMPORTED_MODULE_0__["Agent"]();
        agent.position_ = position;
        agent.maxNeighbors_ = this.defaultAgent_.maxNeighbors_;
        agent.maxSpeed_ = this.defaultAgent_.maxSpeed_;
        agent.neighborDist_ = radius * 3;
        // agent.neighborDist_ =this. defaultAgent_.neighborDist_;
        agent.radius_ = this.defaultAgent_.radius_;
        agent.radius_ = radius || this.defaultAgent_.radius_;
        agent.timeHorizon_ = this.defaultAgent_.timeHorizon_;
        agent.timeHorizonObst_ = this.defaultAgent_.timeHorizonObst_;
        agent.velocity_ = this.defaultAgent_.velocity_;
        agent.id_ = this.agents_.length;
        this.agents_.push(agent);
        this.goals.push(agent.position_.clone());
        // return this.agents_.length - 1;
        return agent;
    }
    setAgentDefaults(neighborDist, maxNeighbors, timeHorizon, timeHorizonObst, radius, maxSpeed, velocity = new _Vector2__WEBPACK_IMPORTED_MODULE_3__["Vector2"](0, 0)) {
        if (this.defaultAgent_ == null) {
            this.defaultAgent_ = new _Agent__WEBPACK_IMPORTED_MODULE_0__["Agent"]();
        }
        this.defaultAgent_.maxNeighbors_ = maxNeighbors;
        this.defaultAgent_.maxSpeed_ = maxSpeed;
        this.defaultAgent_.neighborDist_ = neighborDist;
        this.defaultAgent_.radius_ = radius;
        this.defaultAgent_.timeHorizon_ = timeHorizon;
        this.defaultAgent_.timeHorizonObst_ = timeHorizonObst;
        this.defaultAgent_.velocity_ = velocity;
    }
    setAgentPrefVelocity(agentNo, prefVelocity) {
        this.agents_[agentNo].prefVelocity_ = prefVelocity;
    }
    setTimeStep(v) {
        this.timeStep_ = v;
    }
    setAgentMaxSpeed(agentNo, maxSpeed) {
        this.agents_[agentNo].maxSpeed_ = maxSpeed;
    }
    setAgentGoal(i, x, y) {
        this.goals[i].x = x;
        this.goals[i].y = y;
    }
    getAgentGoal(i) {
        return this.goals[i];
    }
    setAgentRadius(agentNo, radius) {
        this.agents_[agentNo].radius_ = radius;
    }
    getAgentOrientation(agentNo) {
        return this.agents_[agentNo].orientation_;
    }
    getOrca(agentNo) {
        return this.agents_[agentNo].orcaLines_;
    }
    getAgentPositionScreen(agentNo) {
        return this.agents_[agentNo].positionScreen_;
    }
    getAgentPosition(agentNo) {
        return this.agents_[agentNo].position_;
    }
    getNumAgents() {
        return this.agents_.length;
    }
    getAgentRadius(agentNo) {
        return this.agents_[agentNo].radius_;
    }
}


/***/ }),

/***/ "./src/script/logic/rvo/Vector2.ts":
/*!*****************************************!*\
  !*** ./src/script/logic/rvo/Vector2.ts ***!
  \*****************************************/
/*! exports provided: Vector2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector2", function() { return Vector2; });
/// <reference path="RVOMath.ts" />
/// <reference path="KdTree.ts" />
/// <reference path="Line.ts" />
/// <reference path="Agent.ts" />
/// <reference path="Obstacle.ts" />
/// <reference path="AgentTreeNode.ts" />
/// <reference path="ObstacleTreeNode.ts" />
class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    moins(v) {
        return new Vector2(this.x - v.x, this.y - v.y);
    }
    moinsSelf() {
        return new Vector2(-this.x, -this.y);
    }
    plus(v) {
        return new Vector2(this.x + v.x, this.y + v.y);
    }
    mul(v) {
        return this.x * v.x + this.y * v.y;
    }
    mul_k(k) {
        return new Vector2(this.x * k, this.y * k);
    }
    div_k(k) {
        var s = 1 / k;
        return new Vector2(this.x * s, this.y * s);
    }
    static absSq(v) {
        return v.mul(v);
    }
    static abs(v) {
        return Math.sqrt(v.mul(v));
    }
    static det(v1, v2) {
        return v1.x * v2.y - v1.y * v2.x;
    }
    static normalize(v) {
        return v.div_k(Vector2.abs(v));
    }
    static leftOf(a, b, c) {
        return Vector2.det(a.moins(c), b.moins(a));
    }
    static distSqPointLineSegment(a, b, c) {
        var r = c.moins(a).mul(b.moins(a)) / Vector2.absSq(b.moins(a));
        if (r < 0) {
            return Vector2.absSq(c.moins(a));
        }
        else if (r > 1) {
            return Vector2.absSq(c.moins(b));
        }
        else {
            return Vector2.absSq(c.moins(a.plus(b.moins(a).mul_k(r))));
        }
    }
    setXY(x, y) {
        this.x = x;
        this.y = y;
    }
    clone() {
        return new Vector2(this.x, this.y);
    }
}


/***/ }),

/***/ "./src/script/manager/AudioManager.ts":
/*!********************************************!*\
  !*** ./src/script/manager/AudioManager.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AudioManager; });
/* harmony import */ var _LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/LTUtils/MonoHelper */ "./src/LTGame/LTUtils/MonoHelper.ts");
/* harmony import */ var _LTGame_LTUtils_ArrayEx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../LTGame/LTUtils/ArrayEx */ "./src/LTGame/LTUtils/ArrayEx.ts");
/* harmony import */ var _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/Res/LTRes */ "./src/LTGame/Res/LTRes.ts");
/* harmony import */ var _config_AudioConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/AudioConfig */ "./src/script/config/AudioConfig.ts");
/* harmony import */ var _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LTGame/Commom/CommonSaveData */ "./src/LTGame/Commom/CommonSaveData.ts");
/* harmony import */ var _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../LTGame/Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");






class AudioManager {
    constructor() {
        this._isInited = false;
        Laya.SoundManager.autoStopMusic = true;
        this.Init();
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new AudioManager();
        }
        return this._instance;
    }
    Init() {
        if (this._isInited)
            return;
        this._isInited = true;
        this._needPlayAudioIds = [];
        _LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_0__["default"].instance.AddAction(_LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_0__["EActionType"].Update, this, this._LogicUpdate);
    }
    PlayByPath(audioPath) {
        return Laya.SoundManager.playMusic(audioPath);
    }
    PlayAudioByPath(audioPath) {
        return Laya.SoundManager.playMusic(this._GetAudioPath(audioPath), 1);
    }
    _PlayBgm(bgmPath) {
        return __awaiter(this, void 0, void 0, function* () {
            let formatUrl = Laya.URL.formatURL(bgmPath);
            if (Laya.SoundManager['_musicChannel'])
                Laya.SoundManager['_musicChannel'].stop();
            Laya.SoundManager['_bgMusic'] = formatUrl;
            yield _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_2__["default"].Load2dAsync(bgmPath);
            this._bgmAudio = AudioManager.instance.PlayByPath(bgmPath);
        });
    }
    StopBgm() {
        if (this._bgmAudio != null) {
            this._bgmAudio.stop();
            this._bgmId = null;
            this._bgmAudio = null;
        }
    }
    PlayById(audioId) {
        if (!_LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_4__["default"].instance.isMusicOn)
            return;
        let audioConfig = _config_AudioConfig__WEBPACK_IMPORTED_MODULE_3__["AudioConfig"].data[audioId];
        if (audioConfig == null) {
            console.error("??????????????????id" + audioId);
            return;
        }
        if (audioConfig.audio_type == 1) {
            // ??????
            if (!_LTGame_LTUtils_ArrayEx__WEBPACK_IMPORTED_MODULE_1__["default"].Contains(this._needPlayAudioIds, audioConfig.id)) {
                this._needPlayAudioIds.push(audioConfig.id);
            }
        }
        else {
            if (this._bgmId == audioConfig.id)
                return;
            this.StopBgm();
            this._bgmId = audioConfig.id;
            this._PlayBgm(this._GetAudioPath(audioConfig.audio_path));
        }
    }
    _GetAudioPath(audioFilePath) {
        if (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.useWAV) {
            return 'res/audio_wav/' + audioFilePath.replace('.mp3', '.wav');
        }
        return "res/audio/" + audioFilePath;
    }
    _LogicUpdate() {
        if (this._needPlayAudioIds.length > 0) {
            for (let id of this._needPlayAudioIds) {
                let audioConfig = _config_AudioConfig__WEBPACK_IMPORTED_MODULE_3__["AudioConfig"].data[id];
                Laya.SoundManager.playSound(this._GetAudioPath(audioConfig.audio_path));
            }
            this._needPlayAudioIds = [];
        }
    }
    StopAll() {
        this._bgmId = null;
        Laya.SoundManager.stopAll();
    }
    Pause() {
        if (this._bgmAudio) {
            this._bgmAudio.pause();
        }
    }
    Resume() {
        if (!_LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_4__["default"].instance.isMusicOn)
            return;
        if (this._bgmAudio) {
            this._bgmAudio.resume();
        }
    }
}


/***/ }),

/***/ "./src/script/manager/DataManager.ts":
/*!*******************************************!*\
  !*** ./src/script/manager/DataManager.ts ***!
  \*******************************************/
/*! exports provided: DataManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManager", function() { return DataManager; });
class DataManager {
    InitData() {
    }
}


/***/ }),

/***/ "./src/script/manager/EffectManager.ts":
/*!*********************************************!*\
  !*** ./src/script/manager/EffectManager.ts ***!
  \*********************************************/
/*! exports provided: EffectManager, EffectShowData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectManager", function() { return EffectManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectShowData", function() { return EffectShowData; });
/* harmony import */ var _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/GlobalUnit */ "./src/script/common/GlobalUnit.ts");
/* harmony import */ var _config_EffectConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/EffectConfig */ "./src/script/config/EffectConfig.ts");
/* harmony import */ var _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/Res/LTRes */ "./src/LTGame/Res/LTRes.ts");
/* harmony import */ var _LTGame_Async_Awaiters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTGame/Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");
/* harmony import */ var _LTGame_LTUtils_ArrayEx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LTGame/LTUtils/ArrayEx */ "./src/LTGame/LTUtils/ArrayEx.ts");
/* harmony import */ var _common_ResDefine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/ResDefine */ "./src/script/common/ResDefine.ts");
/* harmony import */ var _LTGame_LTUtils_CameraEx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../LTGame/LTUtils/CameraEx */ "./src/LTGame/LTUtils/CameraEx.ts");
/* harmony import */ var _LTGame_LTUtils_Vector3Ex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../LTGame/LTUtils/Vector3Ex */ "./src/LTGame/LTUtils/Vector3Ex.ts");
/* harmony import */ var _LTGame_LTUtils_TransformEx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../LTGame/LTUtils/TransformEx */ "./src/LTGame/LTUtils/TransformEx.ts");









class EffectManager {
    constructor() {
        this._Init();
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new EffectManager();
        }
        return this._instance;
    }
    get uiEffectScene() {
        return this._uiEffectScene;
    }
    get uiEffectCamera() {
        return this._uiEffectCamera;
    }
    _Init() {
        this._effectRoot = new Laya.Sprite3D("EffectManager");
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_0__["default"].s3d.addChild(this._effectRoot);
        this._effectMap = new Map();
        this._continueEffects = [];
    }
    Preload(urls) {
        for (let i = 0; i < _config_EffectConfig__WEBPACK_IMPORTED_MODULE_1__["EffectConfig"].dataList.length; ++i) {
            let configItem = _config_EffectConfig__WEBPACK_IMPORTED_MODULE_1__["EffectConfig"].dataList[i];
            if (configItem.need_preload) {
                let effectPath = _common_ResDefine__WEBPACK_IMPORTED_MODULE_5__["default"].FixPath(configItem.model_path);
                urls.push(effectPath);
            }
        }
    }
    ReAddScene() {
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_0__["default"].s3d.addChild(this._effectRoot);
    }
    UnloadScene() {
        this._effectRoot.removeSelf();
    }
    _InitUIEffect() {
        if (this._uiEffectScene != null) {
            this._uiEffectScene.parent.setChildIndex(this._uiEffectScene, this._uiEffectScene.parent.numChildren - 1);
            return;
        }
        this._uiEffectScene = new Laya.Scene3D();
        this._uiEffectScene.name = "UIEffect";
        this._uiEffectScene.enableFog = false;
        this._uiEffectScene.mouseEnabled = false;
        this._uiEffectScene.enableLight = false;
        Laya.stage.addChildAt(this._uiEffectScene, 0);
        this._uiEffectCamera = new Laya.Camera();
        this._uiEffectCamera.clearFlag = Laya.CameraClearFlags.DepthOnly;
        this._uiEffectScene.addChild(this._uiEffectCamera);
        this._uiEffectCamera.transform.localPositionZ = 10;
    }
    WarmEffects() {
        return __awaiter(this, void 0, void 0, function* () {
            this._InitUIEffect();
            let preloadEffects = [];
            for (let i = 0; i < _config_EffectConfig__WEBPACK_IMPORTED_MODULE_1__["EffectConfig"].dataList.length; ++i) {
                let configItem = _config_EffectConfig__WEBPACK_IMPORTED_MODULE_1__["EffectConfig"].dataList[i];
                if (configItem.need_preload) {
                    let effectPath = _common_ResDefine__WEBPACK_IMPORTED_MODULE_5__["default"].FixPath(configItem.model_path);
                    let getObj = _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_2__["default"].Get(effectPath, true);
                    if (getObj == null) {
                        console.log("??????", configItem, "?????????");
                        continue;
                    }
                    let effectObj = this._uiEffectScene.addChild(getObj);
                    _LTGame_LTUtils_TransformEx__WEBPACK_IMPORTED_MODULE_8__["TransformEx"].ResetLocalTrans(effectObj.transform);
                    preloadEffects.push(effectObj);
                    this._effectMap.set(configItem.id, effectObj);
                }
            }
            yield _LTGame_Async_Awaiters__WEBPACK_IMPORTED_MODULE_3__["default"].NextFrame();
            for (let effectObj of preloadEffects) {
                effectObj.removeSelf();
            }
            this._uiEffectScene.parent.setChildIndex(this._uiEffectScene, Laya.stage.numChildren - 1);
        });
    }
    StopEffectByIndex(index) {
        if (index == null)
            return;
        if (index < 0)
            return;
        if (index >= this._continueEffects.length)
            return;
        let effectObj = this._continueEffects[index];
        effectObj.destroy();
        _LTGame_LTUtils_ArrayEx__WEBPACK_IMPORTED_MODULE_4__["default"].RemoveAt(this._continueEffects, index);
    }
    GetEffectObjById(effectId) {
        let effectConfig = _config_EffectConfig__WEBPACK_IMPORTED_MODULE_1__["EffectConfig"].data[effectId];
        if (effectConfig == null) {
            console.error("???????????????id", effectId);
            return null;
        }
        let effectObj = this._effectMap.get(effectId);
        if (effectObj == null) {
            console.error("??????", effectId, "????????????");
            return null;
        }
        let instEffect = effectObj.clone();
        return instEffect;
    }
    PlayEffectByData(showData) {
        return __awaiter(this, void 0, void 0, function* () {
            let instEffect = this.GetEffectObjById(showData.effectId);
            if (showData.parent != null) {
                showData.parent.addChild(instEffect);
            }
            else {
                let effectConfig = _config_EffectConfig__WEBPACK_IMPORTED_MODULE_1__["EffectConfig"].data[showData.effectId];
                if (effectConfig.isUIEffect) {
                    this._uiEffectScene.addChild(instEffect);
                    if (showData.setPos != null) {
                        let ray = _LTGame_LTUtils_CameraEx__WEBPACK_IMPORTED_MODULE_6__["CameraEx"].ScreenPosToRay(this.uiEffectCamera, new Laya.Vector2(showData.setPos.x, showData.setPos.y));
                        let dotVal = _LTGame_LTUtils_Vector3Ex__WEBPACK_IMPORTED_MODULE_7__["default"].Dot(ray.direction, _LTGame_LTUtils_Vector3Ex__WEBPACK_IMPORTED_MODULE_7__["default"].back);
                        let scale = ray.origin.z / dotVal;
                        showData.setPos = _LTGame_LTUtils_Vector3Ex__WEBPACK_IMPORTED_MODULE_7__["default"].Add(ray.origin, _LTGame_LTUtils_Vector3Ex__WEBPACK_IMPORTED_MODULE_7__["default"].Scale(ray.direction, scale));
                    }
                }
                else {
                    this._effectRoot.addChild(instEffect);
                }
            }
            if (showData.setPos != null) {
                instEffect.transform.position = showData.setPos.clone();
            }
            if (showData.setRot != null) {
                instEffect.transform.rotation = showData.setRot.clone();
            }
            if (showData.setScale != null) {
                instEffect.transform.setWorldLossyScale(showData.setScale);
            }
            if (showData.continueTime) {
                yield _LTGame_Async_Awaiters__WEBPACK_IMPORTED_MODULE_3__["default"].Seconds(showData.continueTime);
                instEffect.destroy();
            }
            else {
                this._continueEffects.push(instEffect);
                return this._continueEffects.length - 1;
            }
            return -1;
        });
    }
    PlayEffectById(effectId, duringTime = 2, pos = null, rot = null, parent = null) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = new EffectShowData(effectId);
            data.continueTime = duringTime;
            data.setPos = pos;
            data.setRot = rot;
            data.parent = parent;
            return this.PlayEffectByData(data);
        });
    }
}
class EffectShowData {
    constructor(effectId) {
        /**
         * ??????????????????
         */
        this.continueTime = 2;
        /**
         * ????????????,world
         */
        this.setPos = null;
        /**
         * ????????????,world
         */
        this.setRot = null;
        /**
         * ????????????,world
         */
        this.setScale = null;
        /**
         * ???????????????
         */
        this.parent = null;
        this.effectId = effectId;
    }
}


/***/ }),

/***/ "./src/script/manager/GameManager.ts":
/*!*******************************************!*\
  !*** ./src/script/manager/GameManager.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameManager; });
/* harmony import */ var _LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/LTUtils/MonoHelper */ "./src/LTGame/LTUtils/MonoHelper.ts");
/* harmony import */ var _common_EGameState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EGameState */ "./src/script/common/EGameState.ts");
/* harmony import */ var _common_GameData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/GameData */ "./src/script/common/GameData.ts");
/* harmony import */ var _logic_CameraControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logic/CameraControl */ "./src/script/logic/CameraControl.ts");
/* harmony import */ var _logic_level_ViewLevel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logic/level/ViewLevel */ "./src/script/logic/level/ViewLevel.ts");
/* harmony import */ var _logic_MapControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logic/MapControl */ "./src/script/logic/MapControl.ts");
/* harmony import */ var _logic_player_ViewPlayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../logic/player/ViewPlayer */ "./src/script/logic/player/ViewPlayer.ts");
/* harmony import */ var _logic_rvo_RVOHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../logic/rvo/RVOHelper */ "./src/script/logic/rvo/RVOHelper.ts");
/* harmony import */ var _ui_UI_FightMediator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/UI_FightMediator */ "./src/script/ui/UI_FightMediator.ts");
/* harmony import */ var _ui_UI_MainMediator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/UI_MainMediator */ "./src/script/ui/UI_MainMediator.ts");
/* harmony import */ var _LayerMgr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LayerMgr */ "./src/script/manager/LayerMgr.ts");











class GameManager {
    constructor() {
        this._pause = false;
        this.level = new _logic_level_ViewLevel__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.player = new _logic_player_ViewPlayer__WEBPACK_IMPORTED_MODULE_6__["default"]();
        this.camera = new _logic_CameraControl__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.map = new _logic_MapControl__WEBPACK_IMPORTED_MODULE_5__["default"]();
        this.level.SetLevelId(_common_GameData__WEBPACK_IMPORTED_MODULE_2__["default"].instance.levelId);
        this.player.SetPlayerId(_common_GameData__WEBPACK_IMPORTED_MODULE_2__["default"].instance.playerId);
        _LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_0__["default"].instance.AddAction(_LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_0__["EActionType"].Update, this, this._LogicUpdate);
        _LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_0__["default"].instance.AddAction(_LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_0__["EActionType"].LateUpdate, this, this._LateUpdate);
    }
    get pause() {
        return this._pause;
    }
    set pause(v) {
        this._pause = v;
    }
    PreLoad(urls) {
        this.level.PreLoad(urls);
        this.player.PreLoad(urls);
    }
    CreateGame() {
        this.state = _common_EGameState__WEBPACK_IMPORTED_MODULE_1__["EGameState"].Ready;
        _logic_rvo_RVOHelper__WEBPACK_IMPORTED_MODULE_7__["default"].instance.InitRVO();
        _LayerMgr__WEBPACK_IMPORTED_MODULE_10__["default"].instance.InitLayer();
        this.level.CreateLevel();
        this.time = 0;
    }
    StartGame() {
        _ui_UI_MainMediator__WEBPACK_IMPORTED_MODULE_9__["UI_MainMediator"].instance.Hide();
        _ui_UI_FightMediator__WEBPACK_IMPORTED_MODULE_8__["UI_FightMediator"].instance.Show();
        this.state = _common_EGameState__WEBPACK_IMPORTED_MODULE_1__["EGameState"].Fight;
    }
    _LogicUpdate(dt) {
        if (this.pause)
            return;
        this.time += dt;
        switch (this.state) {
            case _common_EGameState__WEBPACK_IMPORTED_MODULE_1__["EGameState"].Ready:
                break;
            case _common_EGameState__WEBPACK_IMPORTED_MODULE_1__["EGameState"].Fight:
                _logic_rvo_RVOHelper__WEBPACK_IMPORTED_MODULE_7__["default"].instance.Step(dt);
                this.player.OnUpdate(dt);
                this.map.UpdateMap();
                this.level.LogicUpdate(dt);
                _LayerMgr__WEBPACK_IMPORTED_MODULE_10__["default"].instance.OnUpdate(dt);
                break;
        }
    }
    _LateUpdate(dt) {
        if (this.pause)
            return;
        switch (this.state) {
            case _common_EGameState__WEBPACK_IMPORTED_MODULE_1__["EGameState"].Ready:
                break;
            case _common_EGameState__WEBPACK_IMPORTED_MODULE_1__["EGameState"].Fight:
                this.camera.LateUpdate();
                break;
        }
    }
}


/***/ }),

/***/ "./src/script/manager/LayerMgr.ts":
/*!****************************************!*\
  !*** ./src/script/manager/LayerMgr.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LayerMgr; });
class LayerMgr {
    static get instance() {
        if (!this._instance) {
            this._instance = new LayerMgr();
        }
        return this._instance;
    }
    InitLayer() {
        this.list = [];
    }
    PushModel(model) {
        this.list.push(model);
    }
    _AnalyseLayerIndex() {
        let array = this.list;
        let len = this.list.length;
        for (let i = 0; i < len - 1; ++i) {
            for (let j = 0; j < len - 1 - i; j++) {
                if (array[j].depth < array[j + 1].depth) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        for (let i = 0; i < len; ++i) {
            array[i].layerIndex = i;
            array[i].UpdateDepth();
        }
    }
    OnUpdate(dt) {
        this._AnalyseLayerIndex();
    }
}


/***/ }),

/***/ "./src/script/scene/MainScene.ts":
/*!***************************************!*\
  !*** ./src/script/scene/MainScene.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainScene; });
/* harmony import */ var _LTGame_Fsm_BaseState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/Fsm/BaseState */ "./src/LTGame/Fsm/BaseState.ts");
/* harmony import */ var _LTGame_Start_ESceneType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../LTGame/Start/ESceneType */ "./src/LTGame/Start/ESceneType.ts");
/* harmony import */ var _ui_UI_MainMediator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/UI_MainMediator */ "./src/script/ui/UI_MainMediator.ts");
/* harmony import */ var _LTGame_UIExt_DefaultUI_UI_ChannelMediator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTGame/UIExt/DefaultUI/UI_ChannelMediator */ "./src/LTGame/UIExt/DefaultUI/UI_ChannelMediator.ts");
/* harmony import */ var _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LTGame/Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../LTGame/Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");






class MainScene extends _LTGame_Fsm_BaseState__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(null, _LTGame_Start_ESceneType__WEBPACK_IMPORTED_MODULE_1__["ESceneType"].Main);
    }
    _DoEnter() {
        //     LTSDK.instance.checkState = ECheckState.NoGame;
        //     console.error("[????????????]????????????checkstate", LTSDK.instance.checkState);
        _ui_UI_MainMediator__WEBPACK_IMPORTED_MODULE_2__["UI_MainMediator"].instance.Show();
        if (window["__GM"] && _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_5__["EPlatformType"].TT) {
            _LTGame_UIExt_DefaultUI_UI_ChannelMediator__WEBPACK_IMPORTED_MODULE_3__["UI_ChannelMediator"].instance.Show();
        }
    }
}


/***/ }),

/***/ "./src/script/scene/SplashScene.ts":
/*!*****************************************!*\
  !*** ./src/script/scene/SplashScene.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SplashScene; });
/* harmony import */ var _LTGame_Start_ESceneType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/Start/ESceneType */ "./src/LTGame/Start/ESceneType.ts");
/* harmony import */ var _LTGame_Start_LTSplashScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../LTGame/Start/LTSplashScene */ "./src/LTGame/Start/LTSplashScene.ts");
/* harmony import */ var _ui_Load_LoadBinder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/Load/LoadBinder */ "./src/ui/Load/LoadBinder.ts");
/* harmony import */ var _ui_Load_UI_splash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/Load/UI_splash */ "./src/ui/Load/UI_splash.ts");
/* harmony import */ var _ui_Main_MainBinder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/Main/MainBinder */ "./src/ui/Main/MainBinder.ts");
/* harmony import */ var _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/GlobalUnit */ "./src/script/common/GlobalUnit.ts");
/* harmony import */ var _manager_EffectManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../manager/EffectManager */ "./src/script/manager/EffectManager.ts");
/* harmony import */ var _auto_gen_AutoConfigSetter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_auto_gen_/AutoConfigSetter */ "./src/script/_auto_gen_/AutoConfigSetter.ts");








class SplashScene extends _LTGame_Start_LTSplashScene__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super();
        this._splashUIClass = _ui_Load_UI_splash__WEBPACK_IMPORTED_MODULE_3__["default"];
        this._useCommonUI = true;
    }
    _OnBindUI() {
        _ui_Load_LoadBinder__WEBPACK_IMPORTED_MODULE_2__["default"].bindAll();
        _ui_Main_MainBinder__WEBPACK_IMPORTED_MODULE_4__["default"].bindAll();
    }
    _OnSetLoadConfig() {
        _auto_gen_AutoConfigSetter__WEBPACK_IMPORTED_MODULE_7__["AutoConfigSetter"].SetConfig();
    }
    _OnGameResPrepared(urls) {
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_5__["default"].InitAll(urls);
        _manager_EffectManager__WEBPACK_IMPORTED_MODULE_6__["EffectManager"].instance.Preload(urls);
    }
    _OnGameResLoaded() {
        return __awaiter(this, void 0, void 0, function* () {
            yield _manager_EffectManager__WEBPACK_IMPORTED_MODULE_6__["EffectManager"].instance.WarmEffects();
            yield _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_5__["default"].FirstCreate();
            this.isFinished = true;
            this.nextState = _LTGame_Start_ESceneType__WEBPACK_IMPORTED_MODULE_0__["ESceneType"].Main;
        });
    }
}


/***/ }),

/***/ "./src/script/ui/UI_FightMediator.ts":
/*!*******************************************!*\
  !*** ./src/script/ui/UI_FightMediator.ts ***!
  \*******************************************/
/*! exports provided: UI_FightMediator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_FightMediator", function() { return UI_FightMediator; });
/* harmony import */ var _LTGame_UIExt_Cmp_CmpJoystick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/Cmp/CmpJoystick */ "./src/LTGame/UIExt/Cmp/CmpJoystick.ts");
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _ui_Main_UI_Fight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/Main/UI_Fight */ "./src/ui/Main/UI_Fight.ts");



class UI_FightMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_FightMediator();
            this._instance._classDefine = _ui_Main_UI_Fight__WEBPACK_IMPORTED_MODULE_2__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        this.CmpJoy = new _LTGame_UIExt_Cmp_CmpJoystick__WEBPACK_IMPORTED_MODULE_0__["CmpJoystick"](this.ui.m_img_bg, this.ui.m_com_joy, this.ui.m_com_joy.m_handle);
    }
    _OnHide() {
        this.CmpJoy.Dispose();
    }
}


/***/ }),

/***/ "./src/script/ui/UI_MainMediator.ts":
/*!******************************************!*\
  !*** ./src/script/ui/UI_MainMediator.ts ***!
  \******************************************/
/*! exports provided: UI_MainMediator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_MainMediator", function() { return UI_MainMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _ui_Main_UI_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/Main/UI_Main */ "./src/ui/Main/UI_Main.ts");
/* harmony import */ var _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/GlobalUnit */ "./src/script/common/GlobalUnit.ts");



class UI_MainMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_MainMediator();
            this._instance._classDefine = _ui_Main_UI_Main__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        this.ui.m_btn_start.onClick(this, this.StartGame);
    }
    StartGame() {
        // this.Hide();
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_2__["default"].game.StartGame();
    }
}


/***/ }),

/***/ "./src/ui/Load/LoadBinder.ts":
/*!***********************************!*\
  !*** ./src/ui/Load/LoadBinder.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadBinder; });
/* harmony import */ var _UI_splash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI_splash */ "./src/ui/Load/UI_splash.ts");
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

class LoadBinder {
    static bindAll() {
        fgui.UIObjectFactory.setExtension(_UI_splash__WEBPACK_IMPORTED_MODULE_0__["default"].URL, _UI_splash__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }
}


/***/ }),

/***/ "./src/ui/Load/UI_splash.ts":
/*!**********************************!*\
  !*** ./src/ui/Load/UI_splash.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_splash; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_splash extends fgui.GComponent {
    static createInstance() {
        return (fgui.UIPackage.createObject("Load", "splash"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
        this.m_progress = (this.getChildAt(1));
        this.m_text_logo = (this.getChildAt(2));
        this.m_text_progress = (this.getChildAt(3));
        this.m_text_laya = (this.getChildAt(4));
    }
}
UI_splash.URL = "ui://n3oedpp6nihr0";


/***/ }),

/***/ "./src/ui/Main/MainBinder.ts":
/*!***********************************!*\
  !*** ./src/ui/Main/MainBinder.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainBinder; });
/* harmony import */ var _UI_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI_Main */ "./src/ui/Main/UI_Main.ts");
/* harmony import */ var _UI_btn_text_01__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI_btn_text_01 */ "./src/ui/Main/UI_btn_text_01.ts");
/* harmony import */ var _UI_Fight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI_Fight */ "./src/ui/Main/UI_Fight.ts");
/* harmony import */ var _UI_com_joystick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI_com_joystick */ "./src/ui/Main/UI_com_joystick.ts");
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/




class MainBinder {
    static bindAll() {
        fgui.UIObjectFactory.setExtension(_UI_Main__WEBPACK_IMPORTED_MODULE_0__["default"].URL, _UI_Main__WEBPACK_IMPORTED_MODULE_0__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_btn_text_01__WEBPACK_IMPORTED_MODULE_1__["default"].URL, _UI_btn_text_01__WEBPACK_IMPORTED_MODULE_1__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_Fight__WEBPACK_IMPORTED_MODULE_2__["default"].URL, _UI_Fight__WEBPACK_IMPORTED_MODULE_2__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_com_joystick__WEBPACK_IMPORTED_MODULE_3__["default"].URL, _UI_com_joystick__WEBPACK_IMPORTED_MODULE_3__["default"]);
    }
}


/***/ }),

/***/ "./src/ui/Main/UI_Fight.ts":
/*!*********************************!*\
  !*** ./src/ui/Main/UI_Fight.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_Fight; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_Fight extends fgui.GComponent {
    static createInstance() {
        return (fgui.UIPackage.createObject("Main", "Fight"));
    }
    onConstruct() {
        this.m_img_bg = (this.getChildAt(0));
        this.m_btn_start = (this.getChildAt(1));
        this.m_com_joy = (this.getChildAt(2));
    }
}
UI_Fight.URL = "ui://c6t3i6k8r0x74";


/***/ }),

/***/ "./src/ui/Main/UI_Main.ts":
/*!********************************!*\
  !*** ./src/ui/Main/UI_Main.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_Main; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_Main extends fgui.GComponent {
    static createInstance() {
        return (fgui.UIPackage.createObject("Main", "Main"));
    }
    onConstruct() {
        this.m_btn_start = (this.getChildAt(1));
    }
}
UI_Main.URL = "ui://c6t3i6k8qqmy1";


/***/ }),

/***/ "./src/ui/Main/UI_btn_text_01.ts":
/*!***************************************!*\
  !*** ./src/ui/Main/UI_btn_text_01.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_btn_text_01; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_btn_text_01 extends fgui.GButton {
    static createInstance() {
        return (fgui.UIPackage.createObject("Main", "btn_text_01"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
    }
}
UI_btn_text_01.URL = "ui://c6t3i6k8qqmy2";


/***/ }),

/***/ "./src/ui/Main/UI_com_joystick.ts":
/*!****************************************!*\
  !*** ./src/ui/Main/UI_com_joystick.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_com_joystick; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_com_joystick extends fgui.GComponent {
    static createInstance() {
        return (fgui.UIPackage.createObject("Main", "com_joystick"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
        this.m_handle = (this.getChildAt(1));
    }
}
UI_com_joystick.URL = "ui://c6t3i6k8r0x75";


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map