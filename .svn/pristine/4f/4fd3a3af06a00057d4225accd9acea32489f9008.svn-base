package ltg;

import android.util.Log;

import com.ss.union.game.sdk.v.ad.VGameAd;
import com.ss.union.game.sdk.v.ad.callback.IAdListener;

import org.json.JSONException;
import org.json.JSONObject;

import demo.JSBridge;
import layaair.game.browser.ExportJavaFunction;

public class ADManager {
    private static String TAG = "ADManager";
    private static ADManager _instance;
    public static ADManager getInstance() {
        if(ADManager._instance == null) {
            ADManager._instance = new ADManager();
        }
        return ADManager._instance;
    }
    private ADManager() {

    }
    public void PreloadRewardAD(){
        VGameAd.getAdService().preLoadAd(0);
    }
    public void showVideoAd(){

        VGameAd.getAdService().showAd(0, new IAdListener() {
            @Override
            public void onError(int i, String s) {
                Log.e(TAG, "java 视频播放错误:" + s);
                JSONObject obj = new JSONObject();
                try {
                    obj.put("event", "onAdError");
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                ExportJavaFunction.CallBackToJS(JSBridge.class,"RewardVideoAd",obj.toString());
            }

            @Override
            public void onSuccess(int adStyle) {
                JSONObject obj = new JSONObject();
                try {
                    obj.put("event", "onAdComplete");
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                ExportJavaFunction.CallBackToJS(JSBridge.class,"RewardVideoAd",obj.toString());
            }
        });
    }

    public void ShowInterstitalAd(){
        // 奖励类型：道具 = 1，章节 = 2，对局 = 3，其他 = 4
        int type = 4;
        // 奖励名称
        String name = "插页广告";
        // 奖励数量：道具/其他-具体数量，章节-第几章，对局-第几局
        int amount = 1;

        /* Ad_Style，传入广告类型
         * - 0：全屏激励：fullscreen_rewarded_ad
         * - 4：小窗新插屏：popup_interstitial_ad
         */
        int adStyle = 4;

        //提示信息 默认如下, CP可填入，例如“看视频后解锁下一章”，“看视频后解锁该道具”，“看视频后解锁获得多倍奖励”等等
        String rewardTip = "插页";

        VGameAd.getAdService().showAd(adStyle,  new IAdListener() {
            @Override
            public void onError(int i, String s) {
                Log.e(TAG, "java 视频播放错误:" + s);
                JSONObject obj = new JSONObject();
                try {
                    obj.put("event", "onAdError");
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                ExportJavaFunction.CallBackToJS(JSBridge.class,"RewardVideoAd",obj.toString());
            }

            @Override
            public void onSuccess(int adStyle) {
                JSONObject obj = new JSONObject();
                try {
                    obj.put("event", "onAdComplete");
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                ExportJavaFunction.CallBackToJS(JSBridge.class,"RewardVideoAd",obj.toString());
            }
        });
    }
}
