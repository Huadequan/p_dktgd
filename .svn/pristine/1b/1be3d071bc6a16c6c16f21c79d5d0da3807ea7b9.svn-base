
using UnityEditor;
using UnityEngine;
using ZXing;
using ZXing.QrCode;

internal class ErweimaiWindow : EditorWindow
{
	private static ErweimaiWindow class25_0;

	private static string string_0;

	private static Texture2D texture2D_0;

	private static Texture texture_0;

	private static Rect rect_0;

    /// <summary>
    /// Õ¹Ê¾¶þÎ¬Âë
    /// </summary>
	public static void GenErweima()
	{
		string str = LayaAir3D.str_ip + ":" + LayaAir3D.curNodePort;
		string_0 = "http://" + str + "/index.html";
		class25_0 = (ErweimaiWindow)EditorWindow.GetWindow(typeof(ErweimaiWindow), utility: false, "LayaAirbox");
		class25_0.Show(immediateDisplay: true);
		class25_0.minSize = new Vector2(280f, 295f);
		class25_0.maxSize = new Vector2(280f, 296f);
		texture2D_0 = new Texture2D(256, 256);
		smethod_2();
		LayaAir3D.runLayaDemo(isSilent: true);
	}

	private void OnGUI()
	{
		GUI.DrawTexture(rect_0, texture_0);
		EditorGUI.LabelField(new Rect(10f, 270f, 210f, 20f), string_0);
		if (GUI.Button(new Rect(225f, 270f, 43f, 20f), new GUIContent(LayaAir3D.str_Copy)))
		{
			GUIUtility.systemCopyBuffer = string_0;
		}
	}

	private void OnDestroy()
	{
	}

	private static Color32[] smethod_1(string string_1, int int_0, int int_1)
	{
		return new BarcodeWriter
		{
			Format = BarcodeFormat.QR_CODE,
			Options = new QrCodeEncodingOptions
			{
				Height = int_1,
				Width = int_0
			}
		}.Write(string_1);
	}

	private static void smethod_2()
	{
		if (string_0.Length > 1)
		{
			Color32[] pixels = smethod_1(string_0, texture2D_0.width, texture2D_0.height);
			texture2D_0.SetPixels32(pixels);
			texture2D_0.Apply();
			texture_0 = texture2D_0;
		}
	}

	public ErweimaiWindow()
	{
		
		
	}

	static ErweimaiWindow()
	{
		
		rect_0 = new Rect(10f, 10f, 256f, 256f);
	}
}
