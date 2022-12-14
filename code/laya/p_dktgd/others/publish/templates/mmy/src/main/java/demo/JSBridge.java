package demo;

import android.app.Activity;
import android.app.Service;
import android.graphics.Color;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.os.Vibrator;
import android.support.annotation.RequiresApi;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONException;

import ltg.ADManager;


public class JSBridge {
    public static Handler m_Handler = new Handler(Looper.getMainLooper());
    public static Activity mMainActivity = null;
    public static Vibrator vibrator;

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
    public static void RewardVideoAd(String json)   {
        ADManager.getInstance().showVideoAd();
    }
    public static void ShowInterstitalAd()   {
        Log.d("JSBridge", "java: " + "ShowInterstitialAd");
        ADManager.getInstance().ShowInterstitalAd();
    }
    @RequiresApi(api = Build.VERSION_CODES.M)
    public static void vibrate(final double milliseconds) {
        m_Handler.post(
                new Runnable() {
                    public void run() {
                        Log.d("0", "android==============????????????");
                        if(vibrator==null){
                            vibrator=  (Vibrator) mMainActivity. getApplication().getSystemService(Service.VIBRATOR_SERVICE);
                        }
                        vibrator .vibrate((long) milliseconds);
                    }
                });

    }
}
