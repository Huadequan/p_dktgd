using System.IO;

using UnityEditor;
using UnityEngine;

internal class GUIHelper : EditorWindow
{

	public static bool bool_disableMainWindow;

	public static void LoadTexture(string string_1, Texture2D texture2D_20)
	{
		FileStream fileStream = new FileStream(string_1, FileMode.Open);
		byte[] array = new byte[fileStream.Length];
		fileStream.Read(array, 0, array.Length);
		fileStream.Close();
		bool num = texture2D_20.LoadImage(array);
		texture2D_20.Apply();
		if (!num)
		{
			Debug.Log("Texture存在但生成Texture失败");
		}
	}

	private void OnDestroy()
	{
		bool_disableMainWindow = false;
	}

	public GUIHelper()
	{
	}

	static GUIHelper()
	{
		bool_disableMainWindow = false;
	}
}
