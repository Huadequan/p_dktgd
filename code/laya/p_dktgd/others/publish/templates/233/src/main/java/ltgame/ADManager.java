package ltgame;

import android.app.Activity;
import android.util.Log;

import com.meta.android.mpg.cm.MetaAdApi;
import com.meta.android.mpg.cm.api.IAdCallback;
import com.meta.android.mpg.cm.api.InitCallback;

import org.json.JSONException;
import org.json.JSONObject;

import demo.JSBridge;
import layaair.game.browser.ExportJavaFunction;

public class ADManager {
    private static String TAG = "ADManager";
    private static String appKey="#appKey#";
    private static ADManager _instance;
    public static ADManager getInstance() {
        if(ADManager._instance == null) {
            ADManager._instance = new ADManager();
        }
        return ADManager._instance;
    }
    public Activity context;
    private ADManager() {

        initAd();
    }
    private void initAd( ){

        MetaAdApi.get().init( JSBridge.mMainActivity.getApplication(), appKey, new InitCallback() {
            @Override
            public void onInitSuccess( ) {

                // 初始化成功
                Log.e(TAG, "广告初始化成功" );

            }
            @Override
            public void onInitFailed(int errorCode, String errorMsg) {
                Log.d(TAG, String.format("onInitFailed: code: %1d,  msg: %2s", errorCode, errorMsg));
            }
        });
    }
    public void SendMsgToLaya(String type, String msg) {
        String combieStr = "{\"type\":\"" + type + "\",\"msg\":\"" + msg + "\"}";
        ExportJavaFunction.CallBackToJS(JSBridge.class,"_AsyncBack", combieStr);
    }

    public void SendJsonToLaya(String type, String json) {
        String combieStr = "{\"type\":\"" + type + "\",\"msg\":" + json + "}";
        ExportJavaFunction.CallBackToJS(JSBridge.class,"_AsyncBack", combieStr);
    }
    public void HandleLayaEvent(String eventStr) {
        Log.i(TAG, "接收到LayaEvent:" + eventStr);
        switch (eventStr) {
            case "ShowRewardAd":
                Log.e(TAG, "展示视频广告:" + eventStr);
                showVideoAd();
                break;
            case "ShowFullScreenVideo":
                // Log.e(TAG, "展示全屏视频广告:" + eventStr);
                //    ShowFullScreenVideo();
                break;
            case "RewardVideoAd":
                // showVideoAd();
                break;
            default:
                Log.e(TAG, "未处理的LayaEvent:" + eventStr);
                break;
        }
    }

    public void showVideoAd(){
        Log.e(TAG, "展示视频广告:999000000" );
        MetaAdApi.get().showVideoAd(  999000000, new IAdCallback.IVideoIAdCallback() {

            @Override
            public void onAdShow() {
                // 播放成功
            }

            @Override
            public void onAdClickSkip() {
                // 播放点击跳过
                // ADManager.getInstance().SendMsgToLaya("RewardVideo","onAdSkipped");
                JSONObject obj = new JSONObject();
                try {
                    obj.put("event", "onAdSkipped");
                } catch (JSONException e) {
                    e.printStackTrace();
                }

                ExportJavaFunction.CallBackToJS(JSBridge.class,"RewardVideoAd",obj.toString());

            }

            @Override
            public void onAdShowFailed(int errCode, String errMsg) {
                // 播放失败
                if ("uninitialized verification".equals(errMsg)) {
                    // 未初始化验证

                } else if ("version not support".equals(errMsg)) {
                    // 版本不支持联运广告

                }
                Log.e(TAG, "java 视频播放错误:" + errMsg);
                JSONObject obj = new JSONObject();
                try {
                    obj.put("event", "onAdError");
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                ExportJavaFunction.CallBackToJS(JSBridge.class,"RewardVideoAd",obj.toString());
            }

            @Override
            public void onAdClick() {

            }

            @Override
            public void onAdClose() {

            }

            @Override
            public void onAdReward() {
                // 完整播放，可给予奖励
                JSONObject obj = new JSONObject();
                try {
                    obj.put("event", "onAdComplete");
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                ExportJavaFunction.CallBackToJS(JSBridge.class,"RewardVideoAd",obj.toString());
            }

            @Override
            public void onAdClose(Boolean aBoolean) {
                // 关闭播放页面
               /* JSONObject obj = new JSONObject();
                try {
                    obj.put("event", "onAdSkipped");
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                ExportJavaFunction.CallBackToJS(JSBridge.class,"RewardVideoAd",obj.toString());*/
            }


        });
    }

    public void ShowFullScreenVideo(){
        Log.e(TAG, "展示视频广告:999000001" );
        MetaAdApi.get().showVideoAd(  999000001, new IAdCallback.IVideoIAdCallback() {

            @Override
            public void onAdShow() {
                // 播放成功
            }

            @Override
            public void onAdClickSkip() {
                // 播放点击跳过
                // ADManager.getInstance().SendMsgToLaya("RewardVideo","onAdSkipped");
                JSONObject obj = new JSONObject();
                try {
                    obj.put("event", "onAdSkipped");
                } catch (JSONException e) {
                    e.printStackTrace();
                }

                ExportJavaFunction.CallBackToJS(JSBridge.class,"ShowFullScreenVideo",obj.toString());

            }

            @Override
            public void onAdShowFailed(int errCode, String errMsg) {
                // 播放失败
                if ("uninitialized verification".equals(errMsg)) {
                    // 未初始化验证

                } else if ("version not support".equals(errMsg)) {
                    // 版本不支持联运广告

                }
                Log.e(TAG, "java 视频播放错误:" + errMsg);
                JSONObject obj = new JSONObject();
                try {
                    obj.put("event", "onAdError");
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                ExportJavaFunction.CallBackToJS(JSBridge.class,"ShowFullScreenVideo",obj.toString());
            }

            @Override
            public void onAdClick() {

            }

            @Override
            public void onAdClose() {

            }

            @Override
            public void onAdReward() {
                // 完整播放，可给予奖励
                JSONObject obj = new JSONObject();
                try {
                    obj.put("event", "onAdComplete");
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                ExportJavaFunction.CallBackToJS(JSBridge.class,"ShowFullScreenVideo",obj.toString());
            }

            @Override
            public void onAdClose(Boolean aBoolean) {
                // 关闭播放页面
                JSONObject obj = new JSONObject();
                try {
                    obj.put("event", "onAdSkipped");
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                ExportJavaFunction.CallBackToJS(JSBridge.class,"ShowFullScreenVideo",obj.toString());
            }


        });
    }
    public void showBanner(){
        MetaAdApi.get().showBannerAd(999000002, new IAdCallback() {
            @Override
            public void onAdShow() {
                //广告展示
            }

            @Override
            public void onAdShowFailed(int i, String s) {
                //展示失败
            }

            @Override
            public void onAdClick() {
                //广告被点击
            }

            @Override
            public void onAdClose() {
                //广告被关闭
            }
        });
    }
    public  void hideBanner(){
    }
    public void showInterstitialAd(){
        MetaAdApi.get().showInterstitialAd(999000003,new IAdCallback() {
            @Override
            public void onAdShow() {
                //广告展示
                Log.d("JSBridge", "java: " + "showInterstitialAd");
            }

            @Override
            public void onAdShowFailed(int errCode, String errMsg) {
                //展示失败
                Log.e("JSBridge", errMsg);
            }

            @Override
            public void onAdClick() {
                //广告被点击
            }

            @Override
            public void onAdClose() {
                //广告被关闭
            }
        });
    }
}
