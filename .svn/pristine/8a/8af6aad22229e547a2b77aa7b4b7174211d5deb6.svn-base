package demo;

import android.app.Activity;
import android.graphics.Color;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONException;

import ltgame.ADManager;


public class JSBridge {
    public static Handler m_Handler = new Handler(Looper.getMainLooper());
    public static Activity mMainActivity = null;

    public static void hideSplash() {
        m_Handler.post(
                new Runnable() {
                    public void run() {
                        MainActivity.mSplashDialog.dismissSplash();
                    }
                });
    }

    public static void setFontColor(final String color) {
        m_Handler.post(
                new Runnable() {
                    public void run() {
                        MainActivity.mSplashDialog.setFontColor(Color.parseColor(color));
                    }
                });
    }

    public static void setTips(final JSONArray tips) {
        m_Handler.post(
                new Runnable() {
                    public void run() {
                        try {
                            String[] tipsArray = new String[tips.length()];
                            for (int i = 0; i < tips.length(); i++) {
                                tipsArray[i] = tips.getString(i);
                            }
                            MainActivity.mSplashDialog.setTips(tipsArray);
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                });
    }

    public static void bgColor(final String color) {
        m_Handler.post(
                new Runnable() {
                    public void run() {
                        MainActivity.mSplashDialog.setBackgroundColor(Color.parseColor(color));
                    }
                });
    }

    public static void loading(final double percent) {
        m_Handler.post(
                new Runnable() {
                    public void run() {
                        MainActivity.mSplashDialog.setPercent((int)percent);
                    }
                });
    }

    public static void showTextInfo(final boolean show) {
        m_Handler.post(
                new Runnable() {
                    public void run() {
                        MainActivity.mSplashDialog.showTextInfo(show);
                    }
                });
    }

    public static void _AsyncBack(final String evenStr) {
        m_Handler.post(
                new Runnable() {
                    public void run() {
                        ADManager.getInstance().HandleLayaEvent(evenStr);
                    }
                });

    }

    public static void _NoBackCall(final String eventStr) {
        m_Handler.post(
                new Runnable() {
                    public void run() {
                        ADManager.getInstance().HandleLayaEvent(eventStr);
                    }
                });
    }
    public static void ShowRewardAd(){

        Log.d("JSBridge", "java: " + "ShowRewardAd");
    }

    public static void RewardVideoAd(String json)   {
        ADManager.getInstance().showVideoAd();
    }
    public static void ShowFullScreenVideo(String json)   {
        Log.d("JSBridge", "java: " + "ShowFullScreenVideo");
        ADManager.getInstance().ShowFullScreenVideo();
    }
    public static void ShowBanner()   {
        Log.d("JSBridge", "java: " + "showbanner");
        //  ADManager.getInstance().showBanner();
    }
    public static void ShowInterstitialAd()   {
        Log.d("JSBridge", "java: " + "ShowInterstitialAd");
        ADManager.getInstance().showInterstitialAd();
    }
}
