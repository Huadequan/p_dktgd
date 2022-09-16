
using UnityEditor;
using UnityEngine;

public class Setting : EditorWindow
{
	public enum languages
	{
		English,
		Chinese
	}

	private static Setting setting_0;

	private static Vector2 vector2_0;

	private static languages languages_0;

	private static languages languages_1;

	[MenuItem("LayaAir3D/Setting")]
	public static void initTutorial()
	{
		GUIHelper.bool_disableMainWindow = true;
		languages_0 = languages.Chinese;
		languages_1 = languages.Chinese;
		setting_0 = (Setting)EditorWindow.GetWindow(typeof(Setting));
		Texture2D texture2D = new Texture2D(16, 16);
		GUIHelper.LoadTexture("Assets/LayaAir3D/LayaTool/LayaResouce/layabox.png", texture2D);
		GUIContent titleContent = new GUIContent("LayaAir3D", texture2D);
		setting_0.titleContent = titleContent;
		GUIHelper.bool_disableMainWindow = true;
		languages_1 = (languages)LayaAir3D.language;
	}

	private void OnGUI()
	{
		GUILayout.BeginHorizontal();
		GUILayout.Label("", GUILayout.Width(15f));
		languages_1 = (languages)(object)EditorGUILayout.EnumPopup("Language", languages_1);
		if (languages_1 != languages_0)
		{
			languages_0 = languages_1;
			if (LayaAir3D.layaWindow != null)
			{
				LayaAir3D.ReadLanguage((int)languages_1);
				LayaAir3D.layaWindow.Repaint();
			}
			else
			{
				LayaAir3D.initLayaExport();
				LayaAir3D.language = (int)languages_1;
				LayaAir3D.ReadLanguage((int)languages_1);
			}
		}
		GUILayout.EndHorizontal();
	}

	private void OnDestroy()
	{
		GUIHelper.bool_disableMainWindow = false;
	}

	public Setting()
	{
		
		
	}
}
