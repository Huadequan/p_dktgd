using LTGame;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Diagnostics;
using System.Net;
using System.Net.Sockets;
using System.Text.RegularExpressions;
using System.Xml;

using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.SceneManagement;
using Util;

public class LayaAir3D : EditorWindow
{
	public enum ConfigEnum
	{
		config1,
		config2,
		config3,
		config4,
		config5
	}

	private enum Enum1
	{
		const_0,
		const_1
	}

	public enum TerrainToMeshResolution
	{
		VeryHigh = 2,
		High = 4,
		Medium = 8,
		Low = 0x10,
		VeryLow = 0x20
	}

	public enum TerrainToMeshResolutionHanHua
	{
		VeryHigh = 2,
		High = 4,
		Medium = 8,
		Low = 0x10,
		VeryLow = 0x20
	}

	private static int webserver_progress_id;

	private static bool bool_isNodeInstalled;

	private static bool bool_isserver_running;

	public static int curNodePort;

	public static bool isHaveCmdPath;

	private static ConfigEnum configEnum_0;

	private static ConfigEnum configEnum_1;

	public static int curConfigIndex;

	private static int int_1;

	private static int int_exportType;

	private static Vector2 vector2_0;

	private static bool bool_toggle_meshset;

	private static bool bool_ignoreverticesUV;

	private static bool bool_IgnoreVerticesNormal;

	private static bool bool_IgnoreVerticesTangent;

	private static bool bool_IgnoreVerticesColor;

	private static bool bool_Compress_mesh;

	private static bool bool_8;

	private static bool bool_toggle_terrainset;

	private static bool bool_ConvertTerrainToMesh;

	private static TerrainToMeshResolution terrainToMeshResolution_0;

	private static TerrainToMeshResolutionHanHua terrainToMeshResolutionHanHua_0;

	private static bool bool_toggle_gameobject;

	private static bool bool_ignorenotactiveobjs;

	private static bool bool_batchmakethefirstlevelobjs;

	private static bool bool_toggle_otherset;

	private static bool bool_toggle_animset;

	private static bool bool_compress_anim;

	private static bool bool_bakeAnim;

	private static int int_bakefps;

	private static bool bool_keepsocket;

	public static bool bool_multiScene;

	private static SceneSetup[] sceneSetup_0;

	public static int sceneIndex;

	private static bool bool_isSceneLoaded;

	private static bool bool_CustomizeExportRootDirectoryName;

	private static string string_customPath;

	private static bool bool_toggle_assets_platform;

    private static bool bool_toggle_texture;

    public static bool bool_Android_compress;

	public static bool bool_Ios_compress;

	public static bool bool_Conventional_compress;

    public static bool bool_Enable_TextureRead;

	public static string SAVEPATH;

	private static Texture2D texture2D_0;

	private static Texture2D texture2D_1;

	private static Texture2D texture2D_2;

	private static float float_0;

	private static GUIStyle guistyle_0;

	private static bool bool_showPathError;

	public static LayaAir3D layaWindow;

	public static int language;

	public static long adTime;

	public static string str_Scene;

	public static string str_Sprite3D;

	public static string str_MeshSetting;

	public static string str_IgnoreVerticesUV;

	public static string str_IgnoreVerticesColor;

	public static string str_IgnoreVerticesNormal;

	public static string str_IgnoreVerticesTangent;

	public static string str_Compress;

	public static string str_ThisfunctionneedVIP;

	public static string str_PleaseBindthecurrentdevice;

	public static string str_TerrainSetting;

	public static string str_ConvertTerrainToMesh;

	public static string str_Resolution;

	public static string str_GameObjectSetting;

	public static string str_IgnoreNotActiveGameObjects;

	public static string str_BatchMakeTheFirstLevelGameObjects;

	public static string str_Assetsplatform;

	public static string str_AnimationSetting;

	public static string str_OtherSetting;

	public static string str_CustomizeExportRootDirectoryName;

	public static string str_SavePathcannotbeempty;

	public static string str_SavePath;

	public static string str_Browse;

	public static string str_ClearConfig;

	public static string str_LayaAirRun;

	public static string str_LayaAirExport;

	public static string str_Exportaddresscannotbeempty;

	public static string str_JPGQuality;

	public static string str_erweimaIcon;

	public static string str_MultiScene;

	public static string str_IOSQuality;

	public static string str_TexAnimation;

	public static string str_TexAniamtionFPS;

	public static string str_TexAnimationSocket;

	public static string str_time;

	public static string str_Copy;

	public static string str_ip;

	public static CustomExport customExport;

	[MenuItem("LayaAir3D/Export Tool", false, 1)]
	public static void initLayaExport()
	{
		layaWindow = (LayaAir3D)EditorWindow.GetWindow(typeof(LayaAir3D));
		Texture2D texture2D = new Texture2D(16, 16);
		GUIHelper.LoadTexture("Assets/LayaAir3D/LayaTool/LayaResouce/layabox.png", texture2D);
		GUIContent titleContent = new GUIContent(" LayaAir3D", texture2D);
		layaWindow.titleContent = titleContent;
		layaWindow.Show(immediateDisplay: true);
		readConfiguration(readConfig: true);
		texture2D_0 = new Texture2D(52, 52);
		GUIHelper.LoadTexture("Assets/LayaAir3D/LayaTool/LayaResouce/erweitu.png", texture2D_0);
		texture2D_1 = new Texture2D(52, 52);
		GUIHelper.LoadTexture("Assets/LayaAir3D/LayaTool/LayaResouce/Play.png", texture2D_1);
		texture2D_2 = new Texture2D(52, 52);
		GUIHelper.LoadTexture("Assets/LayaAir3D/LayaTool/LayaResouce/Export.png", texture2D_2);
		guistyle_0.normal.textColor = Color.red;
	}

	[MenuItem("LayaAir3D/Help/Demo", false)]
	private static void _OpenDemoURL()
	{
		Application.OpenURL("https://layaair.ldc.layabox.com/demo2");
	}

	[MenuItem("LayaAir3D/Help/Study")]
	private static void _OpenStudyURL()
	{
		Application.OpenURL("https://ldc2.layabox.com/doc/?nav=zh-ts-4-2-0");
	}

	[MenuItem("LayaAir3D/Help/Answsers")]
	private static void _OpenAnswersURL()
	{
		Application.OpenURL("https://ask.layabox.com");
	}

	private void OnEnable()
	{
		str_ip = _ReadIP();
	}

	private void OnGUI()
	{
		if (str_Scene == null)
		{
			ReadLanguage(1);
		}
		if (texture2D_0 == null)
		{
			initLayaExport();
		}
		EditorGUI.BeginDisabledGroup(GUIHelper.bool_disableMainWindow);
		EditorGUI.BeginDisabledGroup(AccountHelper.int_ExportState != 0);
		GUILayout.Space(23f);
		GUILayout.BeginHorizontal();
		GUILayout.Space(30f);

        // 预览
		if (GUILayout.Button(new GUIContent(str_LayaAirRun, texture2D_1), GUILayout.Height(26f), GUILayout.Width(80f)))
		{
			UnityEngine.Debug.Log(LayaMainExport.string_PluginTag + "Start Exporting");
			LayaMainExport.int_exportType = 0;
			if (Lightmapping.giWorkflowMode != Lightmapping.GIWorkflowMode.OnDemand)
			{
				Lightmapping.giWorkflowMode = Lightmapping.GIWorkflowMode.OnDemand;
				Lightmapping.Bake();
			}
			exportResource(isDebug: true, 0, "/Conventional");
			runLayaDemo();
			if (AccountHelper.int_ExportState == 0)
			{
				UnityEngine.Debug.Log(LayaMainExport.string_PluginTag + "Exporting Success");
			}
		}
		GUILayout.Label("", GUILayout.Height(26f), GUILayout.Width(14f));

        // 二维码
		if (GUILayout.Button(new GUIContent(str_erweimaIcon, texture2D_0), GUILayout.Height(26f), GUILayout.Width(80f)))
		{
			ErweimaiWindow.GenErweima();
		}
		GUILayout.Label("", GUILayout.Height(26f), GUILayout.Width(14f));

        // 导出
		if (GUILayout.Button(new GUIContent(str_LayaAirExport, texture2D_2), GUILayout.Height(26f), GUILayout.Width(80f)))
		{
			if (bool_multiScene)
			{
				sceneSetup_0 = EditorSceneManager.GetSceneManagerSetup();
				sceneIndex = 0;
				SynchronizeExportScenes();
			}
			else
			{
				ExportResources();
			}
		}
		GUILayout.EndHorizontal();
		GUILayout.Space(21f);
		GUILayout.BeginHorizontal();
		GUILayout.Space(25f);
		GUILayout.Box("", GUILayout.Height(3f), GUILayout.Width(base.position.width - 50f));
		GUI.Box(new Rect(24f, 74f, base.position.width - 50f, 2f), "");
		GUILayout.EndHorizontal();
		GUILayout.Space(10f);
		GUILayout.BeginHorizontal(GUILayout.Height(30f));
		GUILayout.Space(base.position.width - 105f);

        // config保存设置
		configEnum_0 = (ConfigEnum)(object)EditorGUI.EnumPopup(new Rect(base.position.width - 193f, 95f, 70f, 20f), configEnum_0);
		if (configEnum_0 != configEnum_1)
		{
			ReloadExportConfig();
			configEnum_1 = configEnum_0;
		}
		if (GUI.Button(new Rect(base.position.width - 119f, 95f, 95f, 15f), str_ClearConfig))
		{
			ClearExportConfig();
		}
		GUILayout.EndHorizontal();
		GUILayout.BeginHorizontal();
		GUILayout.Space(24f);
		int_exportType = GUILayout.Toolbar(int_exportType, new string[2]
		{
			str_Scene,
			str_Sprite3D
		}, GUILayout.Height(30f), GUILayout.Width(base.position.width - 48f));
		GUILayout.EndHorizontal();
		vector2_0 = GUILayout.BeginScrollView(vector2_0);
		GUILayout.Space(25f);
		GUILayout.BeginHorizontal();
		GUILayout.Space(21f);

        // 节点设置
		bool_toggle_gameobject = EditorGUILayout.Foldout(bool_toggle_gameobject, str_GameObjectSetting, toggleOnLabelClick: true);
		GUILayout.EndHorizontal();
		if (bool_toggle_gameobject)
		{
			GUILayout.BeginHorizontal();
			GUILayout.Space(21f);
			GUILayout.Label("", GUILayout.Width(15f));
			GUILayout.BeginVertical(GUILayout.ExpandWidth(expand: true));
			bool_ignorenotactiveobjs = GUILayout.Toggle(bool_ignorenotactiveobjs, str_IgnoreNotActiveGameObjects);
			if (int_exportType == 1)
			{
				bool_batchmakethefirstlevelobjs = GUILayout.Toggle(bool_batchmakethefirstlevelobjs, str_BatchMakeTheFirstLevelGameObjects);
			}
			GUILayout.EndVertical();
			GUILayout.EndHorizontal();
		}
		GUILayout.BeginHorizontal();
		GUILayout.Space(25f);
		GUILayout.Box("", GUILayout.Height(1f), GUILayout.Width(base.position.width - 50f));
		GUILayout.EndHorizontal();
		GUILayout.Space(10f);
		GUILayout.BeginHorizontal();
		GUILayout.Space(21f);

        // 网格设置
		bool_toggle_meshset = EditorGUILayout.Foldout(bool_toggle_meshset, str_MeshSetting, toggleOnLabelClick: true);
		GUILayout.EndHorizontal();
		if (bool_toggle_meshset)
		{
			GUILayout.BeginVertical(GUILayout.ExpandWidth(expand: true));
			GUILayout.BeginHorizontal();
			GUILayout.Space(21f);
			GUILayout.Label("", guistyle_0, GUILayout.Width(15f));
			bool_ignoreverticesUV = GUILayout.Toggle(bool_ignoreverticesUV, str_IgnoreVerticesUV);
			GUILayout.EndHorizontal();
			GUILayout.BeginHorizontal();
			GUILayout.Space(21f);
			GUILayout.Label("", guistyle_0, GUILayout.Width(15f));
			bool_IgnoreVerticesColor = GUILayout.Toggle(bool_IgnoreVerticesColor, str_IgnoreVerticesColor);
			GUILayout.EndHorizontal();
			GUILayout.BeginHorizontal();
			GUILayout.Space(21f);
			GUILayout.Label("", guistyle_0, GUILayout.Width(15f));
			bool_IgnoreVerticesNormal = GUILayout.Toggle(bool_IgnoreVerticesNormal, str_IgnoreVerticesNormal);
			GUILayout.EndHorizontal();
			GUILayout.BeginHorizontal();
			GUILayout.Space(21f);
			GUILayout.Label("", guistyle_0, GUILayout.Width(15f));
			bool_IgnoreVerticesTangent = GUILayout.Toggle(bool_IgnoreVerticesTangent, str_IgnoreVerticesTangent);
			GUILayout.EndHorizontal();
			GUILayout.BeginHorizontal();
			GUILayout.Space(21f);
			GUILayout.Label("", guistyle_0, GUILayout.Width(15f));
			bool_Compress_mesh = GUILayout.Toggle(bool_Compress_mesh, str_Compress);
			GUILayout.FlexibleSpace();
			GUILayout.EndHorizontal();
			GUILayout.EndVertical();
		}
		GUILayout.BeginHorizontal();
		GUILayout.Space(25f);
		GUILayout.Box("", GUILayout.Height(1f), GUILayout.Width(base.position.width - 50f));
		GUILayout.EndHorizontal();
		GUILayout.Space(10f);
		GUILayout.BeginHorizontal();
		GUILayout.Space(21f);

        // 地形设置
		bool_toggle_terrainset = EditorGUILayout.Foldout(bool_toggle_terrainset, str_TerrainSetting, toggleOnLabelClick: true);
		GUILayout.EndHorizontal();
		if (bool_toggle_terrainset)
		{
			GUILayout.BeginHorizontal();
			GUILayout.Space(21f);
			GUILayout.Label("", GUILayout.Width(15f));
			bool_ConvertTerrainToMesh = GUILayout.Toggle(bool_ConvertTerrainToMesh, str_ConvertTerrainToMesh);
			GUILayout.EndHorizontal();
			if (bool_ConvertTerrainToMesh)
			{
				GUILayout.BeginHorizontal();
				GUILayout.Label("", GUILayout.Width(30f));
				if (language == 0)
				{
					terrainToMeshResolution_0 = (TerrainToMeshResolution)(object)EditorGUILayout.EnumPopup(str_Resolution, terrainToMeshResolution_0, GUILayout.Width(base.position.width - 63f));
				}
				else if (language == 1)
				{
					terrainToMeshResolutionHanHua_0 = (TerrainToMeshResolutionHanHua)(object)EditorGUILayout.EnumPopup(str_Resolution, terrainToMeshResolutionHanHua_0, GUILayout.Width(base.position.width - 63f));
				}
				GUILayout.EndHorizontal();
			}
		}
		GUILayout.BeginHorizontal();
		GUILayout.Space(25f);
		GUILayout.Box("", GUILayout.Height(1f), GUILayout.Width(base.position.width - 50f));
		GUILayout.EndHorizontal();
		GUILayout.Space(10f);
		GUILayout.BeginHorizontal();
		GUILayout.Space(21f);

        // 动画设置
		bool_toggle_animset = EditorGUILayout.Foldout(bool_toggle_animset, str_AnimationSetting, toggleOnLabelClick: true);
		GUILayout.EndHorizontal();
		if (bool_toggle_animset)
		{
			GUILayout.BeginHorizontal();
			GUILayout.Space(21f);
			GUILayout.Label("", GUILayout.Width(15f));
			GUILayout.BeginVertical(GUILayout.ExpandWidth(expand: true));
			GUILayout.BeginHorizontal();
			bool_compress_anim = GUILayout.Toggle(bool_compress_anim, str_Compress);
			GUILayout.Label("", guistyle_0, GUILayout.Width(base.position.width - 240f));
			GUILayout.EndHorizontal();
			GUILayout.EndVertical();
			GUILayout.EndHorizontal();
			GUILayout.BeginHorizontal();
			GUILayout.Space(21f);
			GUILayout.Label("", GUILayout.Width(15f));
			GUILayout.BeginVertical(GUILayout.ExpandWidth(expand: true));
			GUILayout.BeginHorizontal();

            // 动画烘焙
			bool_bakeAnim = GUILayout.Toggle(bool_bakeAnim, str_TexAnimation);
			GUILayout.Label("", guistyle_0, GUILayout.Width(base.position.width - 242f));
			GUILayout.EndHorizontal();
			GUILayout.EndVertical();
			GUILayout.EndHorizontal();
			if (bool_bakeAnim)
			{
				GUILayout.BeginHorizontal();
				GUILayout.Space(42f);
				GUILayout.Label("", GUILayout.Width(15f));
				GUILayout.BeginVertical(GUILayout.ExpandWidth(expand: true));
				GUILayout.BeginHorizontal();
				bool_keepsocket = GUILayout.Toggle(bool_keepsocket, str_TexAnimationSocket);
				GUILayout.EndHorizontal();
				GUILayout.EndVertical();
				GUILayout.EndHorizontal();
				GUILayout.BeginHorizontal();
				GUILayout.Space(42f);
				GUILayout.Label("", GUILayout.Width(15f));
				GUILayout.Label(str_TexAniamtionFPS, GUILayout.Width(70f));
				int_bakefps = EditorGUILayout.IntSlider(int_bakefps, 15, 120, GUILayout.Width(base.position.width - 175f));
				GUILayout.Label("", guistyle_0);
				GUILayout.EndHorizontal();
				GUILayout.Label("", guistyle_0);
			}
		}
		GUILayout.BeginHorizontal();
		GUILayout.Space(25f);
		GUILayout.Box("", GUILayout.Height(1f), GUILayout.Width(base.position.width - 50f));
		GUILayout.EndHorizontal();
		GUILayout.Space(10f);
		GUILayout.BeginHorizontal();
		GUILayout.Space(21f);

        bool_toggle_texture = EditorGUILayout.Foldout(bool_toggle_texture, " 图 片 设 置", toggleOnLabelClick: true);
        GUILayout.EndHorizontal();

        if (bool_toggle_texture)
        {
            GUILayout.BeginHorizontal();
            GUILayout.Space(17f);
            GUILayout.Label("", GUILayout.Width(15f));

            GUILayout.BeginVertical(GUILayout.ExpandWidth(expand: true));
            GUILayout.BeginHorizontal();

            bool_Enable_TextureRead = GUILayout.Toggle(bool_Enable_TextureRead, " 开启图片readable");

            GUILayout.EndHorizontal();
            GUILayout.EndVertical();
            GUILayout.EndHorizontal();
        }

        GUILayout.BeginHorizontal();
        GUILayout.Space(25f);
        GUILayout.Box("", GUILayout.Height(1f), GUILayout.Width(base.position.width - 50f));
        GUILayout.EndHorizontal();
        GUILayout.Space(10f);
        GUILayout.BeginHorizontal();
        GUILayout.Space(21f);

        // 发布平台
        bool_toggle_assets_platform = EditorGUILayout.Foldout(bool_toggle_assets_platform, str_Assetsplatform, toggleOnLabelClick: true);
		GUILayout.EndHorizontal();
		if (bool_toggle_assets_platform)
		{
			GUILayout.BeginHorizontal();
			GUILayout.Space(17f);
			GUILayout.Label("", GUILayout.Width(15f));
			GUILayout.BeginVertical(GUILayout.ExpandWidth(expand: true));
			GUILayout.BeginHorizontal();
			bool_Conventional_compress = GUILayout.Toggle(bool_Conventional_compress, " Conventional");
			GUILayout.Label("", guistyle_0);
			GUILayout.EndHorizontal();
			if (bool_Conventional_compress)
			{
				GUILayout.BeginHorizontal();
				GUILayout.Space(21f);
				GUILayout.Label("", GUILayout.Width(15f));
				GUILayout.Label(str_JPGQuality, GUILayout.Width(70f));
				LayaMainExport.int_1 = EditorGUILayout.IntSlider(LayaMainExport.int_1, 1, 100, GUILayout.Width(base.position.width - 175f));
				GUILayout.Label("", guistyle_0);
				GUILayout.EndHorizontal();
			}
			GUILayout.BeginHorizontal();
			bool_Android_compress = GUILayout.Toggle(bool_Android_compress, " Android", GUILayout.Height(15f));
			GUILayout.FlexibleSpace();
			GUILayout.EndHorizontal();
			GUILayout.BeginHorizontal();
			bool_Ios_compress = GUILayout.Toggle(bool_Ios_compress, " iOS");
			GUILayout.Label("", guistyle_0, GUILayout.Width(base.position.width - 242f));
			GUILayout.EndHorizontal();
			if (bool_Ios_compress)
			{
				GUILayout.BeginHorizontal();
				GUILayout.Space(21f);
				GUILayout.Label("", GUILayout.Width(15f));
				GUILayout.Label(str_IOSQuality, GUILayout.Width(70f));
				LayaMainExport.int_2 = EditorGUILayout.IntSlider(LayaMainExport.int_2, 1, 5, GUILayout.Width(base.position.width - 175f));
				GUILayout.Label("", guistyle_0);
				GUILayout.EndHorizontal();
			}
			GUILayout.BeginHorizontal();
			GUILayout.EndHorizontal();
			GUILayout.EndVertical();
			GUILayout.EndHorizontal();
		}
		GUILayout.BeginHorizontal();
		GUILayout.Space(25f);
		GUILayout.Box("", GUILayout.Height(1f), GUILayout.Width(base.position.width - 50f));
		GUILayout.EndHorizontal();
		GUILayout.Space(10f);
		GUILayout.BeginHorizontal();
		GUILayout.Space(21f);

        // 其他设置
		bool_toggle_otherset = EditorGUILayout.Foldout(bool_toggle_otherset, str_OtherSetting, toggleOnLabelClick: true);
		GUILayout.EndHorizontal();
		if (bool_toggle_otherset)
		{
			GUILayout.BeginHorizontal();
			GUILayout.Space(21f);
			GUILayout.Label("", GUILayout.Width(15f));
			GUILayout.BeginVertical(GUILayout.ExpandWidth(expand: true));
			GUILayout.BeginHorizontal();
			bool_CustomizeExportRootDirectoryName = GUILayout.Toggle(bool_CustomizeExportRootDirectoryName, str_CustomizeExportRootDirectoryName, GUILayout.Width(250f));
			if (bool_CustomizeExportRootDirectoryName)
			{
				string_customPath = GUILayout.TextField(string_customPath);
			}
			GUILayout.EndHorizontal();
			GUILayout.EndVertical();
			GUILayout.EndHorizontal();
			if (int_exportType == 0)
			{
				GUILayout.BeginHorizontal();
				GUILayout.Space(21f);
				GUILayout.Label("", GUILayout.Width(15f));
				bool_multiScene = GUILayout.Toggle(bool_multiScene, str_MultiScene);
				GUILayout.FlexibleSpace();
				GUILayout.EndHorizontal();
			}
		}
		GUILayout.BeginHorizontal();
		GUILayout.Space(25f);
		GUILayout.Box("", GUILayout.Height(1f), GUILayout.Width(base.position.width - 50f));
		GUILayout.EndHorizontal();
		GUILayout.EndScrollView();
		GUILayout.BeginHorizontal();
		if (bool_showPathError)
		{
			GUIStyle gUIStyle = new GUIStyle();
			gUIStyle.normal.textColor = Color.red;
			GUILayout.Label(str_SavePathcannotbeempty, gUIStyle);
		}
		GUILayout.EndHorizontal();
		GUILayout.BeginHorizontal();
		GUILayout.Space(21f);
		GUILayout.Label(str_SavePath, GUILayout.Width(65f));
		SAVEPATH = GUILayout.TextField(SAVEPATH, GUILayout.Height(21f));
		if (SAVEPATH != "")
		{
			bool_showPathError = false;
			Repaint();
		}
		if (GUILayout.Button(str_Browse, GUILayout.MaxWidth(100f), GUILayout.Height(22f)))
		{
            var selectPath = EditorUtility.SaveFolderPanel("LayaUnityPlugin", "Assets", "");
            if (!string.IsNullOrEmpty(selectPath))
            {
                var selectDir = LTDirInfo.CreateDirInfo(selectPath);
                var dataPathDir = LTDirInfo.CreateDirInfo(Application.dataPath);

                var matchDirPath = selectDir.Match(dataPathDir);

                SAVEPATH = matchDirPath;
            }

            // SAVEPATH = EditorUtility.SaveFolderPanel("LayaUnityPlugin", "Assets", "");
		}
		GUILayout.Space(21f);
		GUILayout.EndHorizontal();
		GUILayout.Space(30f);
		EditorGUI.EndDisabledGroup();
		EditorGUI.EndDisabledGroup();
	}

	public static void ReadFileExportResources()
	{
		ReadExportConfig();
		ExportResources();
	}

	public static void ExportResources()
	{
		if (SAVEPATH == "")
		{
			bool_showPathError = true;
			UnityEngine.Debug.LogError(str_Exportaddresscannotbeempty);
			return;
		}
		if (customExport != null)
		{
			customExport.StartHierarchysExport(SAVEPATH);
		}
		LayaMainExport.int_exportType = int_exportType;
		LayaMainExport.bool_multiScene = bool_multiScene;
		LayaMainExport.bool_bakeAnim = bool_bakeAnim;
		LayaMainExport.int_bakefps = int_bakefps;
		LayaMainExport.bool_keepsocket = bool_keepsocket;
        LayaMainExport.bool_enableTextureReadable = bool_Enable_TextureRead;

        UnityEngine.Debug.Log(LayaMainExport.string_PluginTag + "Start Exporting");

		if (Lightmapping.giWorkflowMode != Lightmapping.GIWorkflowMode.OnDemand)
		{
			Lightmapping.giWorkflowMode = Lightmapping.GIWorkflowMode.OnDemand;
			Lightmapping.Bake();
		}

		exportResource(isDebug: false, 0, "/Conventional");

		if (AccountHelper.int_ExportState == 0)
		{
			UnityEngine.Debug.Log(LayaMainExport.string_PluginTag + "Exporting Success");
		}
		if (customExport != null)
		{
			customExport.EndHierarchysExport(SAVEPATH);
		}
	}

	public static void SynchronizeExportScenes()
	{
		if (sceneIndex < sceneSetup_0.Length)
		{
			SceneSetup obj = sceneSetup_0[sceneIndex];
			bool_isSceneLoaded = obj.isLoaded;
			EditorSceneManager.sceneOpened += ExportScenes;
			EditorSceneManager.OpenScene(obj.path, OpenSceneMode.Additive);
		}
	}

	public static void ExportScenes(Scene scene, OpenSceneMode mode)
	{
		EditorSceneManager.sceneOpened -= ExportScenes;
		if (!(SceneManager.GetActiveScene().name != scene.name) || SceneManager.SetActiveScene(scene))
		{
			UnityEngine.Debug.Log(LayaMainExport.string_PluginTag + "start Export");
			if (bool_Ios_compress)
			{
				exportResource(isDebug: false, 1, "/iOS");
			}
			if (bool_Android_compress)
			{
				exportResource(isDebug: false, 2, "/Android");
			}
			if (bool_Conventional_compress)
			{
				exportResource(isDebug: false, 0, "/Conventional");
			}
			if (!bool_isSceneLoaded)
			{
				SceneSetup obj = sceneSetup_0[sceneIndex];
				SceneManager.UnloadSceneAsync(SceneManager.GetSceneByPath(obj.path));
				EditorSceneManager.OpenScene(obj.path, OpenSceneMode.AdditiveWithoutLoading);
			}
			if (AccountHelper.int_ExportState == 0 && BakeAnimatorHelper.dictionary_0.Count == 0)
			{
				UnityEngine.Debug.Log(LayaMainExport.string_PluginTag + "Exporting Success");
				sceneIndex++;
				SynchronizeExportScenes();
			}
			if (customExport != null)
			{
				customExport.EndHierarchysExport(SAVEPATH);
			}
		}
	}

	private void Update()
	{
		if (configEnum_0 == ConfigEnum.config1)
		{
			curConfigIndex = 1;
		}
		else if (configEnum_0 == ConfigEnum.config2)
		{
			curConfigIndex = 2;
		}
		else if (configEnum_0 == ConfigEnum.config3)
		{
			curConfigIndex = 3;
		}
		else if (configEnum_0 == ConfigEnum.config4)
		{
			curConfigIndex = 4;
		}
		else if (configEnum_0 == ConfigEnum.config5)
		{
			curConfigIndex = 5;
		}
		if (int_1 != curConfigIndex)
		{
			readConfiguration(readConfig: false);
			int_1 = curConfigIndex;
		}
	}

	public static void exportResource(bool isDebug, int Platformindex, string lastname)
	{
		if ((SAVEPATH != null && SAVEPATH.Length != 0) || isDebug)
		{
			ReloadExportConfig();
			LayaMainExport.bool_ignoreverticesUV = bool_ignoreverticesUV;
			LayaMainExport.bool_IgnoreVerticesNormal = bool_IgnoreVerticesNormal;
			LayaMainExport.bool_IgnoreVerticesTangent = bool_IgnoreVerticesTangent;
			LayaMainExport.bool_IgnoreVerticesColor = bool_IgnoreVerticesColor;
			LayaMainExport.bool_Compress_mesh = bool_Compress_mesh;
			LayaMainExport.bool_compress_anim = bool_compress_anim;
			LayaMainExport.bool_bakeAnim = bool_bakeAnim;
			LayaMainExport.int_bakefps = int_bakefps;
			LayaMainExport.bool_keepsocket = bool_keepsocket;
			LayaMainExport.bool_multiScene = bool_multiScene;
			LayaMainExport.bool_ConvertTerrainToMesh = bool_ConvertTerrainToMesh;
			if (language == 0)
			{
				LayaMainExport.int_terrainToMeshResolution = (int)terrainToMeshResolution_0;
			}
			else if (language == 1)
			{
				LayaMainExport.int_terrainToMeshResolution = (int)terrainToMeshResolutionHanHua_0;
			}
			LayaMainExport.bool_ignorenotactiveobjs = bool_ignorenotactiveobjs;
			LayaMainExport.bool_batchmakethefirstlevelobjs = bool_batchmakethefirstlevelobjs;
			LayaMainExport.bool_CustomizeExportRootDirectoryName = bool_CustomizeExportRootDirectoryName;
			LayaMainExport.string_customPath = string_customPath;
			LayaMainExport.float_0 = float_0;
			LayaMainExport.bool_Android_compress = bool_Android_compress;
			LayaMainExport.bool_Ios_compress = bool_Ios_compress;
			LayaMainExport.bool_Conventional_compress = bool_Conventional_compress;
			if (isDebug)
			{
				LayaMainExport.string_exportPath = Application.dataPath + "/StreamingAssets/LayaDemo/.previewres";
				LayaMainExport.bool_batchmakethefirstlevelobjs = false;
			}
			else
			{
				LayaMainExport.string_exportPath = Application.dataPath + SAVEPATH;
			}
			LayaMainExport.int_Platformindex = Platformindex;
			LayaMainExport.dictionary_1.Clear();
			LayaMainExport.dictionary_4.Clear();
			LayaMainExport.StartExport(lastname);
		}
		else
		{
			UnityEngine.Debug.LogWarning("LayaUnityPlugin : Please check exporting path !");
		}
	}

	private static void ClearExportConfig()
	{
		int_exportType = 0;
		bool_multiScene = false;
		bool_bakeAnim = false;
		int_bakefps = 30;
		bool_keepsocket = false;
		bool_toggle_meshset = false;
		bool_ignoreverticesUV = false;
		bool_IgnoreVerticesNormal = false;
		bool_IgnoreVerticesTangent = false;
		bool_IgnoreVerticesColor = false;
		bool_Compress_mesh = false;
		bool_8 = false;
		LayaMainExport.int_1 = 75;
		LayaMainExport.int_2 = 2;
		bool_toggle_terrainset = false;
		bool_ConvertTerrainToMesh = false;
		if (language == 0)
		{
			terrainToMeshResolution_0 = TerrainToMeshResolution.Medium;
		}
		else if (language == 1)
		{
			terrainToMeshResolutionHanHua_0 = TerrainToMeshResolutionHanHua.Medium;
		}
		bool_toggle_gameobject = false;
		bool_ignorenotactiveobjs = false;
		bool_batchmakethefirstlevelobjs = false;
		bool_toggle_otherset = false;
		bool_compress_anim = false;
		bool_toggle_animset = false;
		bool_CustomizeExportRootDirectoryName = false;
		string_customPath = "";
		SAVEPATH = "";
		vector2_0.y = 0f;
		bool_Ios_compress = false;
		bool_Android_compress = false;
		bool_Conventional_compress = true;
	}

	public static void ReadExportConfig()
	{
		readConfiguration(readConfig: true);
	}

	public static void readConfiguration(bool readConfig)
	{
		XmlDocument xmlDocument = new XmlDocument();
		xmlDocument.Load("Assets/LayaAir3D/LayaTool/Configuration.xml");
		XmlNodeList childNodes = xmlDocument.SelectSingleNode("LayaExportSetting").ChildNodes;
		if (readConfig)
		{
			switch (int.Parse(childNodes[0].InnerText))
			{
			case 1:
				configEnum_0 = ConfigEnum.config1;
				break;
			case 2:
				configEnum_0 = ConfigEnum.config2;
				break;
			case 3:
				configEnum_0 = ConfigEnum.config3;
				break;
			case 4:
				configEnum_0 = ConfigEnum.config4;
				break;
			case 5:
				configEnum_0 = ConfigEnum.config5;
				break;
			}
			int_1 = (curConfigIndex = int.Parse(childNodes[0].InnerText));
		}
		int_exportType = int.Parse(childNodes[curConfigIndex].SelectSingleNode("FirstlevelMenu").InnerText);
		bool_toggle_meshset = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("MeshSetting").InnerText);
		bool_ignoreverticesUV = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("IgnoreVerticesUV").InnerText);
		bool_IgnoreVerticesNormal = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("IgnoreVerticesNormal").InnerText);
		bool_IgnoreVerticesTangent = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("IgnoreVerticesTangent").InnerText);
		bool_IgnoreVerticesColor = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("IgnoreVerticesColor").InnerText);
		bool_Compress_mesh = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("CompressMesh").InnerText);
		bool_compress_anim = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("AnimatorCompress").InnerText);
		bool_8 = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("TextureSetting").InnerText);
		LayaMainExport.int_1 = int.Parse(childNodes[curConfigIndex].SelectSingleNode("JPGQuality").InnerText);
		LayaMainExport.int_2 = int.Parse(childNodes[curConfigIndex].SelectSingleNode("PVRQuality").InnerText);
		bool_toggle_terrainset = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("TerrainSetting").InnerText);
		bool_ConvertTerrainToMesh = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("ConvertTerrain").InnerText);
		switch (int.Parse(childNodes[curConfigIndex].SelectSingleNode("TerrainToMeshResolution").InnerText))
		{
		case 4:
			terrainToMeshResolution_0 = TerrainToMeshResolution.High;
			terrainToMeshResolutionHanHua_0 = TerrainToMeshResolutionHanHua.High;
			break;
		case 2:
			terrainToMeshResolution_0 = TerrainToMeshResolution.VeryHigh;
			terrainToMeshResolutionHanHua_0 = TerrainToMeshResolutionHanHua.VeryHigh;
			break;
		default:
			terrainToMeshResolution_0 = TerrainToMeshResolution.Medium;
			terrainToMeshResolutionHanHua_0 = TerrainToMeshResolutionHanHua.Medium;
			break;
		case 32:
			terrainToMeshResolution_0 = TerrainToMeshResolution.VeryLow;
			terrainToMeshResolutionHanHua_0 = TerrainToMeshResolutionHanHua.VeryLow;
			break;
		case 16:
			terrainToMeshResolution_0 = TerrainToMeshResolution.Low;
			terrainToMeshResolutionHanHua_0 = TerrainToMeshResolutionHanHua.Low;
			break;
		case 8:
			terrainToMeshResolution_0 = TerrainToMeshResolution.Medium;
			terrainToMeshResolutionHanHua_0 = TerrainToMeshResolutionHanHua.Medium;
			break;
		}
		bool_toggle_gameobject = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("GameObjectSetting").InnerText);
		bool_ignorenotactiveobjs = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("IgnoreNotActiveGameObject").InnerText);
		bool_batchmakethefirstlevelobjs = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("BatchMade").InnerText);
		bool_toggle_otherset = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("OtherSetting").InnerText);
		bool_CustomizeExportRootDirectoryName = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("CustomizeDirectory").InnerText);
		string_customPath = childNodes[curConfigIndex].SelectSingleNode("CustomizeDirectoryName").InnerText;
		bool_multiScene = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("Scenes").InnerText);
		bool_bakeAnim = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("TexAnimatorSetting").InnerText);
		int_bakefps = int.Parse(childNodes[curConfigIndex].SelectSingleNode("TexAnimatorbakeFPS").InnerText);
		bool_keepsocket = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("TexAnimationSocket").InnerText);
		bool_Ios_compress = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("Ios").InnerText);
		bool_Android_compress = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("Android").InnerText);
		bool_Conventional_compress = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("Conventional").InnerText);
		SAVEPATH = childNodes[curConfigIndex].SelectSingleNode("SavePath").InnerText;
		vector2_0.y = float.Parse(childNodes[curConfigIndex].SelectSingleNode("ScrollPositionY").InnerText);
		language = int.Parse(childNodes[6].InnerText);
		adTime = long.Parse(childNodes[7].InnerText);
		ReadLanguage(language);
		if (layaWindow != null)
		{
			layaWindow.Repaint();
		}
		xmlDocument.Save("Assets/LayaAir3D/LayaTool/Configuration.xml");
	}

	private static void ReloadExportConfig()
	{
		XmlDocument xmlDocument = new XmlDocument();
		xmlDocument.Load("Assets/LayaAir3D/LayaTool/Configuration.xml");
		XmlNodeList childNodes = xmlDocument.SelectSingleNode("LayaExportSetting").ChildNodes;
		childNodes[0].InnerText = curConfigIndex.ToString();
		childNodes[curConfigIndex].SelectSingleNode("FirstlevelMenu").InnerText = int_exportType.ToString();
		childNodes[curConfigIndex].SelectSingleNode("MeshSetting").InnerText = bool_toggle_meshset.ToString();
		childNodes[curConfigIndex].SelectSingleNode("IgnoreVerticesUV").InnerText = bool_ignoreverticesUV.ToString();
		childNodes[curConfigIndex].SelectSingleNode("IgnoreVerticesNormal").InnerText = bool_IgnoreVerticesNormal.ToString();
		childNodes[curConfigIndex].SelectSingleNode("IgnoreVerticesTangent").InnerText = bool_IgnoreVerticesTangent.ToString();
		childNodes[curConfigIndex].SelectSingleNode("IgnoreVerticesColor").InnerText = bool_IgnoreVerticesColor.ToString();
		childNodes[curConfigIndex].SelectSingleNode("CompressMesh").InnerText = bool_Compress_mesh.ToString();
		childNodes[curConfigIndex].SelectSingleNode("AnimatorCompress").InnerText = bool_compress_anim.ToString();
		childNodes[curConfigIndex].SelectSingleNode("TextureSetting").InnerText = bool_8.ToString();
		childNodes[curConfigIndex].SelectSingleNode("JPGQuality").InnerText = LayaMainExport.int_1.ToString();
		childNodes[curConfigIndex].SelectSingleNode("PVRQuality").InnerText = LayaMainExport.int_2.ToString();
		childNodes[curConfigIndex].SelectSingleNode("TerrainSetting").InnerText = bool_toggle_terrainset.ToString();
		childNodes[curConfigIndex].SelectSingleNode("ConvertTerrain").InnerText = bool_ConvertTerrainToMesh.ToString();
		if (language == 0)
		{
			XmlNode xmlNode = childNodes[curConfigIndex].SelectSingleNode("TerrainToMeshResolution");
			int num = (int)terrainToMeshResolution_0;
			xmlNode.InnerText = num.ToString();
		}
		else if (language == 1)
		{
			XmlNode xmlNode2 = childNodes[curConfigIndex].SelectSingleNode("TerrainToMeshResolution");
			int num = (int)terrainToMeshResolutionHanHua_0;
			xmlNode2.InnerText = num.ToString();
		}
		childNodes[curConfigIndex].SelectSingleNode("GameObjectSetting").InnerText = bool_toggle_gameobject.ToString();
		childNodes[curConfigIndex].SelectSingleNode("IgnoreNotActiveGameObject").InnerText = bool_ignorenotactiveobjs.ToString();
		childNodes[curConfigIndex].SelectSingleNode("BatchMade").InnerText = bool_batchmakethefirstlevelobjs.ToString();
		childNodes[curConfigIndex].SelectSingleNode("OtherSetting").InnerText = bool_toggle_otherset.ToString();
		childNodes[curConfigIndex].SelectSingleNode("CustomizeDirectory").InnerText = bool_CustomizeExportRootDirectoryName.ToString();
		childNodes[curConfigIndex].SelectSingleNode("CustomizeDirectoryName").InnerText = string_customPath;
		childNodes[curConfigIndex].SelectSingleNode("Scenes").InnerText = bool_multiScene.ToString();
		childNodes[curConfigIndex].SelectSingleNode("TexAnimatorSetting").InnerText = bool_bakeAnim.ToString();
		childNodes[curConfigIndex].SelectSingleNode("TexAnimatorbakeFPS").InnerText = int_bakefps.ToString();
		childNodes[curConfigIndex].SelectSingleNode("TexAnimationSocket").InnerText = bool_keepsocket.ToString();
		childNodes[curConfigIndex].SelectSingleNode("Ios").InnerText = bool_Ios_compress.ToString();
		childNodes[curConfigIndex].SelectSingleNode("Android").InnerText = bool_Android_compress.ToString();
		childNodes[curConfigIndex].SelectSingleNode("Conventional").InnerText = bool_Conventional_compress.ToString();
		childNodes[curConfigIndex].SelectSingleNode("SavePath").InnerText = SAVEPATH;
		childNodes[curConfigIndex].SelectSingleNode("ScrollPositionY").InnerText = vector2_0.y.ToString();
		childNodes[6].InnerText = language.ToString();
		xmlDocument.Save("Assets/LayaAir3D/LayaTool/Configuration.xml");
	}

	private static void smethod_7()
	{
		XmlDocument xmlDocument = new XmlDocument();
		xmlDocument.Load("Assets/LayaAir3D/LayaTool/English.xml");
		UnityEngine.Debug.Log(xmlDocument.SelectSingleNode("EnglishLanguage").SelectSingleNode("IgnoreNotActiveGameObject").InnerText);
	}

	public static void ReadLanguage(int index)
	{
		language = index;
		XmlDocument xmlDocument = new XmlDocument();
		XmlNode xmlNode;
		if (index == 0)
		{
			xmlDocument.Load("Assets/LayaAir3D/LayaTool/English.xml");
			xmlNode = xmlDocument.SelectSingleNode("EnglishLanguage");
		}
		else
		{
			xmlDocument.Load("Assets/LayaAir3D/LayaTool/Chinese.xml");
			xmlNode = xmlDocument.SelectSingleNode("ChineseLanguage");
		}
		str_Scene = xmlNode.SelectSingleNode("Scene").InnerText;
		str_Sprite3D = xmlNode.SelectSingleNode("Sprite3D").InnerText;
		str_MeshSetting = xmlNode.SelectSingleNode("MeshSetting").InnerText;
		str_IgnoreVerticesUV = xmlNode.SelectSingleNode("IgnoreVerticesUV").InnerText;
		str_IgnoreVerticesColor = xmlNode.SelectSingleNode("IgnoreVerticesColor").InnerText;
		str_IgnoreVerticesNormal = xmlNode.SelectSingleNode("IgnoreVerticesNormal").InnerText;
		str_IgnoreVerticesTangent = xmlNode.SelectSingleNode("IgnoreVerticesTangent").InnerText;
		str_Compress = xmlNode.SelectSingleNode("Compress").InnerText;
		str_ThisfunctionneedVIP = xmlNode.SelectSingleNode("ThisfunctionneedVIP").InnerText;
		str_PleaseBindthecurrentdevice = xmlNode.SelectSingleNode("PleaseBindthecurrentdevice").InnerText;
		str_TerrainSetting = xmlNode.SelectSingleNode("TerrainSetting").InnerText;
		str_ConvertTerrainToMesh = xmlNode.SelectSingleNode("ConvertTerrainToMesh").InnerText;
		str_Resolution = xmlNode.SelectSingleNode("Resolution").InnerText;
		str_GameObjectSetting = xmlNode.SelectSingleNode("GameObjectSetting").InnerText;
		str_IgnoreNotActiveGameObjects = xmlNode.SelectSingleNode("IgnoreNotActiveGameObjects").InnerText;
		str_BatchMakeTheFirstLevelGameObjects = xmlNode.SelectSingleNode("BatchMakeTheFirstLevelGameObjects").InnerText;
		str_Assetsplatform = xmlNode.SelectSingleNode("Assetsplatform").InnerText;
		str_AnimationSetting = xmlNode.SelectSingleNode("AnimationSetting").InnerText;
		str_OtherSetting = xmlNode.SelectSingleNode("OtherSetting").InnerText;
		str_CustomizeExportRootDirectoryName = xmlNode.SelectSingleNode("CustomizeExportRootDirectoryName").InnerText;
		str_SavePathcannotbeempty = xmlNode.SelectSingleNode("SavePathcannotbeempty").InnerText;
		str_SavePath = xmlNode.SelectSingleNode("SavePath").InnerText;
		str_Browse = xmlNode.SelectSingleNode("Browse").InnerText;
		str_ClearConfig = xmlNode.SelectSingleNode("ClearConfig").InnerText;
		str_LayaAirRun = xmlNode.SelectSingleNode("LayaAirRun").InnerText;
		str_LayaAirExport = xmlNode.SelectSingleNode("LayaAirExport").InnerText;
		str_Exportaddresscannotbeempty = xmlNode.SelectSingleNode("Exportaddresscannotbeempty").InnerText;
		str_JPGQuality = xmlNode.SelectSingleNode("JPGquality").InnerText;
		str_Copy = xmlNode.SelectSingleNode("Copy").InnerText;
		str_erweimaIcon = xmlNode.SelectSingleNode("erweimatu").InnerText;
		str_MultiScene = xmlNode.SelectSingleNode("multiScene").InnerText;
		str_IOSQuality = xmlNode.SelectSingleNode("IOSQuality").InnerText;
		str_TexAnimation = xmlNode.SelectSingleNode("TexAnimatorSetting").InnerText;
		str_TexAniamtionFPS = xmlNode.SelectSingleNode("TexAnimatorbakeFPS").InnerText;
		str_TexAnimationSocket = xmlNode.SelectSingleNode("TexAnimationSocket").InnerText;
		DownloadNodejsWindow.string_0 = xmlNode.SelectSingleNode("downloadNodejs").InnerText;
		DownloadNodejsWindow.string_1 = xmlNode.SelectSingleNode("unity").InnerText;
		DownloadNodejsWindow.string_2 = xmlNode.SelectSingleNode("down").InnerText;
		LayaParticleSystemEditor.str_UnityInspector = xmlNode.SelectSingleNode("UnityInspector").InnerText;
		LayaParticleSystemEditor.str_LayaInspector = xmlNode.SelectSingleNode("LayaInspector").InnerText;
		LayaParticleSystemEditor.str_clearData = xmlNode.SelectSingleNode("clearData").InnerText;
		LayaParticleSystemEditor.str_needVIP = xmlNode.SelectSingleNode("particleNeedVIP").InnerText;
		LayaParticleSystemEditor.str_Tips = xmlNode.SelectSingleNode("particleTips").InnerText;
	}

	private static void _SeachAvailablePort()
	{
		string text = "";
		if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.MacOSX)
		{
			text = "lsof -i tcp:port | awk '{print $2}' | tail -n +2";
		}
		else if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.Windows)
		{
			text = "netstat -ano | findstr :port";
		}
		text = text.Replace("port", curNodePort.ToString());
		string text2 = NodeServerHelper.smethod_2(text);
		for (int i = 0; i < 50; i++)
		{
			if (text2 == null)
			{
				break;
			}
			if (text2.Contains("TIME_WAIT"))
			{
				break;
			}
			text = text.Replace(curNodePort.ToString(), (curNodePort + 2).ToString());
			text2 = NodeServerHelper.smethod_2(text);
			curNodePort += 2;
		}
	}

	private static void _CheckNodeInstalled()
	{
		if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.MacOSX)
		{
			string environmentVariable = Environment.GetEnvironmentVariable("PATH");
			if (!environmentVariable.Contains("/usr/local/bin"))
			{
				environmentVariable += ":/usr/local/bin/";
				Environment.SetEnvironmentVariable("PATH", environmentVariable);
			}
		}
		if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.Windows && !isHaveCmdPath)
		{
			string str = Environment.ExpandEnvironmentVariables("%SystemRoot%");
			string text = str + "/system32";
			string text2 = str + "/System32/Wbem";
			string environmentVariable2 = Environment.GetEnvironmentVariable("PATH");
			environmentVariable2 = environmentVariable2 + ";" + text + ";" + text2;
			Environment.SetEnvironmentVariable("PATH", environmentVariable2);
			isHaveCmdPath = true;
		}
		string text3 = NodeServerHelper.smethod_2("node -v");
		if (text3 != null && text3.Contains("v"))
		{
			bool_isNodeInstalled = true;
		}
	}

	public static void runLayaDemo(bool isSilent = false)
	{
		if (bool_isserver_running)
		{
			if (!isSilent)
			{
				string str = str_ip + ":" + curNodePort;
				str = "http://" + str + "/index.html";
				Application.OpenURL(str);
			}
			return;
		}
		if (!bool_isNodeInstalled)
		{
			_CheckNodeInstalled();
			if (!bool_isNodeInstalled)
			{
				UnityEngine.Debug.Log("Please install and configure Node.js first!");
				DownloadNodejsWindow.smethod_0();
				return;
			}
		}
		_SeachAvailablePort();
		string text = Application.dataPath + "/StreamingAssets/LayaDemo";
		string str2 = "node ./node_modules/anywhere/bin/anywhere ";
		str2 = str2 + "-p " + curNodePort;
		webserver_progress_id = NodeServerHelper.StartServer(text, str2, isSilent);
		bool_isserver_running = true;
	}

	private void OnDestroy()
	{
		if (bool_isNodeInstalled && webserver_progress_id != 0)
		{
			Process.GetProcessById(webserver_progress_id).Kill();
			bool_isserver_running = false;
			webserver_progress_id = 0;
			destoryNodeProcess();
		}
		ReloadExportConfig();
	}

	public static void destoryNodeProcess()
	{
		try
		{
			string text = "";
			if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.MacOSX)
			{
				text = "lsof -i tcp:port | awk '{print $2}' | tail -n +2";
			}
			else if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.Windows)
			{
				text = "netstat -ano | findstr :port";
			}
			text = text.Replace("port", curNodePort.ToString());
			string text2 = NodeServerHelper.smethod_2(text);
			if (text2 == null)
			{
				return;
			}
			new List<int>();
			int result = 0;
			bool flag = false;
			if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.MacOSX)
			{
				text2 = text2.Trim();
				flag = int.TryParse(text2, out result);
			}
			else if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.Windows)
			{
				text2 = text2.Trim();
				if (text2.Length > 0 && (text2.Contains("TCP") || text2.Contains("UDP")))
				{
					string[] array = new Regex("\\s+").Split(text2);
					if (array.Length >= 4)
					{
						flag = int.TryParse(array[4], out result);
					}
				}
			}
			if (flag)
			{
				Process.GetProcessById(result).Kill();
			}
		}
		catch (Exception message)
		{
			UnityEngine.Debug.LogError(message);
		}
	}

	private string _ReadIP()
	{
		using (Socket socket = new Socket(AddressFamily.InterNetwork, SocketType.Dgram, ProtocolType.IP))
		{
			socket.Connect("8.8.8.8", 65530);
			return (socket.LocalEndPoint as IPEndPoint).Address.ToString();
		}
	}

	private string method_1()
	{
		IPAddress[] hostAddresses = Dns.GetHostAddresses(Dns.GetHostName());
		StringCollection stringCollection = new StringCollection();
		IPAddress[] array = hostAddresses;
		foreach (IPAddress iPAddress in array)
		{
			if (iPAddress.AddressFamily == AddressFamily.InterNetwork)
			{
				stringCollection.Add(iPAddress.ToString());
			}
		}
		string[] array2 = new string[stringCollection.Count];
		stringCollection.CopyTo(array2, 0);
		return array2[0];
	}

	public LayaAir3D()
	{
		
		
	}

	static LayaAir3D()
	{
		
		webserver_progress_id = 0;
		bool_isNodeInstalled = false;
		bool_isserver_running = false;
		curNodePort = 8024;
		isHaveCmdPath = false;
		curConfigIndex = 1;
		string_customPath = "";
		bool_Android_compress = false;
		bool_Ios_compress = false;
		bool_Conventional_compress = true;
		SAVEPATH = "";
		float_0 = 1f;
		guistyle_0 = new GUIStyle();
		bool_showPathError = false;
	}
}
