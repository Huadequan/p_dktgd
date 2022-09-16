
using UnityEditor;
using UnityEngine;

internal class DownloadNodejsWindow : EditorWindow
{
	private static Vector2 vector2_0;

	private static DownloadNodejsWindow class28_0;

	public static string string_0;

	public static string string_1;

	public static string string_2;

	public static void smethod_0()
	{
		class28_0 = (DownloadNodejsWindow)EditorWindow.GetWindow(typeof(DownloadNodejsWindow));
		Texture2D texture2D = new Texture2D(16, 16);
		GUIHelper.LoadTexture("Assets/LayaAir3D/LayaTool/LayaResouce/layabox.png", texture2D);
		GUIContent titleContent = new GUIContent("LayaAir3D", texture2D);
		class28_0.titleContent = titleContent;
		class28_0.maxSize = vector2_0;
		class28_0.minSize = vector2_0;
	}

	private void OnGUI()
	{
		GUI.Label(new Rect(base.position.width / 2f - 95f, base.position.height / 2f - 50f, 300f, 30f), string_0);
		GUI.Label(new Rect(base.position.width / 2f - 55f, base.position.height / 2f - 30f, 300f, 30f), string_1);
		if (GUI.Button(new Rect(base.position.width / 2f - 70f, base.position.height / 2f + 10f, 150f, 30f), string_2))
		{
			Application.OpenURL("http://nodejs.cn/");
		}
	}

	public DownloadNodejsWindow()
	{
		
		
	}

	static DownloadNodejsWindow()
	{
		
		vector2_0 = new Vector2(300f, 200f);
	}
}
