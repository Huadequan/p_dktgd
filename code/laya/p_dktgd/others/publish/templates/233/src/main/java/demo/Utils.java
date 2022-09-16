package demo;

import android.app.Activity;
import android.content.Context;
import android.os.Build;
import android.view.DisplayCutout;
import android.view.View;
import android.view.WindowInsets;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class Utils {

    public static boolean hasNotchScreen(Activity activity) {
        if (getInt("ro.miui.notch", activity) == 1 || hasNotchAtHuawei(activity) || hasNotchAtOPPO(activity)
                || hasNotchAtVivo(activity) || isAndroidP(activity) != null) { //TODO 各种品牌
            return true;
        }

        return false;
    }
    /**
     * Android P 刘海屏判断
     * @param activity
     * @return
     */
    public static DisplayCutout isAndroidP(Activity activity){
        View decorView = activity.getWindow().getDecorView();
        if (decorView != null && Build.VERSION.SDK_INT >= 28){
            WindowInsets windowInsets = decorView.getRootWindowInsets();
            if (windowInsets != null)
                return windowInsets.getDisplayCutout();
        }
        return null;
    }
    // 是否是小米手机
    public static boolean isXiaomi() {
        return "Xiaomi".equals(Build.MANUFACTURER);
    }
    /**
     * 小米刘海屏判断.
     * @return 0 if it is not notch ; return 1 means notch
     * @throws IllegalArgumentException if the key exceeds 32 characters
     */
    public static int getInt(String key, Activity activity) {
        int result = 0;
        if (isXiaomi()){
            try {
                ClassLoader classLoader = activity.getClassLoader();
                @SuppressWarnings("rawtypes")
                Class SystemProperties = classLoader.loadClass("android.os.SystemProperties");
                //参数类型
                @SuppressWarnings("rawtypes")
                Class[] paramTypes = new Class[2];
                paramTypes[0] = String.class;
                paramTypes[1] = int.class;
                Method getInt = SystemProperties.getMethod("getInt", paramTypes);
                //参数
                Object[] params = new Object[2];
                params[0] = new String(key);
                params[1] = new Integer(0);
                result = (Integer) getInt.invoke(SystemProperties, params);

            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            } catch (NoSuchMethodException e) {
                e.printStackTrace();
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            } catch (IllegalArgumentException e) {
                e.printStackTrace();
            } catch (InvocationTargetException e) {
                e.printStackTrace();
            }
        }
        return result;
    }

    /**
     * 华为刘海屏判断
     * @return
     */
    public static boolean hasNotchAtHuawei(Context context) {
        boolean ret = false;
        try {
            ClassLoader classLoader = context.getClassLoader();
            Class HwNotchSizeUtil = classLoader.loadClass("com.huawei.android.util.HwNotchSizeUtil");
            Method get = HwNotchSizeUtil.getMethod("hasNotchInScreen");
            ret = (boolean) get.invoke(HwNotchSizeUtil);
        } catch (ClassNotFoundException e) {

        } catch (NoSuchMethodException e) {

        } catch (Exception e) {

        } finally {
            return ret;
        }
    }

    public static final int VIVO_NOTCH = 0x00000020;//是否有刘海
    public static final int VIVO_FILLET = 0x00000008;//是否有圆角

    /**
     * VIVO刘海屏判断
     * @return
     */
    public static boolean hasNotchAtVivo(Context context) {
        boolean ret = false;
        try {
            ClassLoader classLoader = context.getClassLoader();
            Class FtFeature = classLoader.loadClass("android.util.FtFeature");
            Method method = FtFeature.getMethod("isFeatureSupport", int.class);
            ret = (boolean) method.invoke(FtFeature, VIVO_NOTCH);
        } catch (ClassNotFoundException e) {

        } catch (NoSuchMethodException e) {

        } catch (Exception e) {

        } finally {
            return ret;
        }
    }
    /**
     * OPPO刘海屏判断
     * @return
     */
    public static boolean hasNotchAtOPPO(Context context) {
        return  context.getPackageManager().hasSystemFeature("com.oppo.feature.screen.heteromorphism");
    }

//        /**
//         * 是否有刘海屏
//         *
//         * @return
//         */
//    public static boolean hasNotchInScreen(Activity activity) {
//
//        // android  P 以上有标准 API 来判断是否有刘海屏
//        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
//            DisplayCutout displayCutout = activity.getWindow().getDecorView().getRootWindowInsets().getDisplayCutout();
//            if (displayCutout != null) {
//                // 说明有刘海屏
//                return true;
//            }
//        } else {
//            // 通过其他方式判断是否有刘海屏  目前官方提供有开发文档的就 小米，vivo，华为（荣耀），oppo
//            String manufacturer = Build.MANUFACTURER;
//
//            if (manufacturer==null) {
//                return false;
//            } else if (manufacturer.equalsIgnoreCase("HUAWEI")) {
//                return hasNotchHw(activity);
//            } else if (manufacturer.equalsIgnoreCase("xiaomi")) {
//                return hasNotchXiaoMi(activity);
//            } else if (manufacturer.equalsIgnoreCase("oppo")) {
//                return hasNotchOPPO(activity);
//            } else if (manufacturer.equalsIgnoreCase("vivo")) {
//                return hasNotchVIVO(activity);
//            } else {
//                return false;
//            }
//        }
//        return false;
//    }
//
//    /**
//     * 判断vivo是否有刘海屏
//     * https://swsdl.vivo.com.cn/appstore/developer/uploadfile/20180328/20180328152252602.pdf
//     *
//     * @param activity
//     * @return
//     */
//    private static boolean hasNotchVIVO(Activity activity) {
//        try {
//            Class<?> c = Class.forName("android.util.FtFeature");
//            Method get = c.getMethod("isFeatureSupport", int.class);
//            return (boolean) (get.invoke(c, 0x20));
//        } catch (Exception e) {
//            e.printStackTrace();
//            return false;
//        }
//    }
//
//    /**
//     * 判断oppo是否有刘海屏
//     * https://open.oppomobile.com/wiki/doc#id=10159
//     *
//     * @param activity
//     * @return
//     */
//    private static boolean hasNotchOPPO(Activity activity) {
//        return activity.getPackageManager().hasSystemFeature("com.oppo.feature.screen.heteromorphism");
//    }
//
//    /**
//     * 判断xiaomi是否有刘海屏
//     * https://dev.mi.com/console/doc/detail?pId=1293
//     *
//     * @param activity
//     * @return
//     */
//    private static boolean hasNotchXiaoMi(Activity activity) {
//        try {
//            Class<?> c = Class.forName("android.os.SystemProperties");
//            Method get = c.getMethod("getInt", String.class, int.class);
//            return (int) (get.invoke(c, "ro.miui.notch", 0)) == 1;
//        } catch (Exception e) {
//            e.printStackTrace();
//            return false;
//        }
//    }
//
//    /**
//     * 判断华为是否有刘海屏
//     * https://devcenter-test.huawei.com/consumer/cn/devservice/doc/50114
//     *
//     * @param activity
//     * @return
//     */
//    private static boolean hasNotchHw(Activity activity) {
//
//        try {
//            ClassLoader cl = activity.getClassLoader();
//            Class HwNotchSizeUtil = cl.loadClass("com.huawei.android.util.HwNotchSizeUtil");
//            Method get = HwNotchSizeUtil.getMethod("hasNotchInScreen");
//            return (boolean) get.invoke(HwNotchSizeUtil);
//        } catch (Exception e) {
//            return false;
//        }
//    }
}

