using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using LayaExport;

using UnityEditor;
using UnityEditor.Animations;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.SceneManagement;

internal class LayaMainExport
{
	public enum ECMPType
	{
		GameObject,
		Camera,
		DirectionalLight,
		PointLight,
		SpotLight,
		Meshfilter,
		Meshrenderer,
		SkinnedMeshRenderer,
		Animator,
		ParticleSystem,
		Terrain,
		Collider,
		Rigidbody,
		TrailRenderer,
		LineRenderer,
		FixedJoint,
		ConfigurableJoint,
		ReflectionProbe
	}

	private class Class32
	{
		public int int_0;

		public Vector3 vector3_0;

		public Vector3 vector3_1;

		public Color color_0;

		public Vector2 vector2_0;

		public Vector2 vector2_1;

		public Vector4 vector4_0;

		public Vector4 vector4_1;

		public Vector4 vector4_2;

		public bool bool_0;

		public int int_1;

		public int int_2;

		public Dictionary<string, int> dictionary_0;

		public void method_0(Class32 class32_0)
		{
			vector3_0 = class32_0.vector3_0;
			vector3_1 = class32_0.vector3_1;
			color_0 = class32_0.color_0;
			vector2_0 = class32_0.vector2_0;
			vector2_1 = class32_0.vector2_1;
			vector4_0 = class32_0.vector4_0;
			vector4_2 = class32_0.vector4_2;
			vector4_1 = new Vector4(class32_0.vector4_1.x, class32_0.vector4_1.y, class32_0.vector4_1.z, class32_0.vector4_1.w);
		}

		public Class32()
		{
			
			bool_0 = true;
			int_1 = -1;
			int_2 = -1;
			
		}
	}

	private class Class33
	{
		public Class32 class32_0;

		public Class32 class32_1;

		public Class32 class32_2;

		public Class33()
		{
			
			
		}
	}

	private struct Struct0
	{
		public Vector3 vector3_0;

		public Vector3 vector3_1;

		public Vector2 vector2_0;
	}

	private struct Struct1
	{
		public ushort ushort_0;

		public List<float> list_0;

		public List<float> list_1;

		public List<float> list_2;
	}

	private struct Struct2
	{
		public byte byte_0;

		public ushort ushort_0;

		public List<ushort> list_0;

		public ushort ushort_1;

		public ushort ushort_2;

		public List<ushort> list_1;

		public ushort ushort_3;

		public List<Struct1> list_2;
	}

	private struct Struct3
	{
		public Keyframe[] keyframe_0;
	}

	private struct Struct4
	{
		public Struct3 struct3_0;

		public string string_0;

		public string string_1;

		public Type type_0;
	}

	public static string string_PluginTag;

	public static Dictionary<string, string> dictionary_shaderMap;

	public static int int_exportType;

	public static bool bool_multiScene;

	public static bool bool_ignoreverticesUV;

	public static bool bool_IgnoreVerticesColor;

	public static bool bool_IgnoreVerticesNormal;

	public static bool bool_IgnoreVerticesTangent;

	public static bool bool_Compress_mesh;

	public static bool bool_compress_anim;

	public static int int_1;

	public static int int_2;

	public static bool bool_ConvertTerrainToMesh;

	public static int int_terrainToMeshResolution;

	public static bool bool_ignorenotactiveobjs;

	public static bool bool_batchmakethefirstlevelobjs;

	public static bool bool_CustomizeExportRootDirectoryName;

	public static string string_customPath;

	public static string string_exportPath;

	public static float float_0;

	public static bool bool_bakeAnim;

	public static int int_bakefps;

	public static bool bool_keepsocket;

    public static bool bool_enableTextureReadable;

	public static bool bool_Ios_compress;

	public static bool bool_Android_compress;

	public static bool bool_Conventional_compress;

	public static int int_Platformindex;

	private static bool bool_16;

	private static int int_6;

	private static int int_7;

	private static float float_1;

	private static int[] int_8;

	private static string sceneName;

	private static List<string> list_0;

	private static int int_9;

	private static int int_10;

	private static int int_11;

	private static int int_12;

	private static int int_13;

	private static int int_14;

	public static Dictionary<string, TextureInfo> dictionary_1;

	public static Dictionary<string, Mesh> dictionary_2;

	public static Dictionary<string, SkinnedMeshRenderer> dictionary_3;

	public static Dictionary<string, GameObject> dictionary_4;

	public static AccountHelper class1_0;

	private static string string_4;

	private static string string_exportversion;

	private static string string_6;

	private static string string_7;

	private static string string_8;

	private static string string_9;

	public static string string_10;

	public static string string_11;

	public static string string_12;

	public static int int_15;

	public static Dictionary<string, int> dictionary_5;

	public static List<string> list_1;

	public static int GenInstanceId()
	{
		return int_15++;
	}

	public static void StartExport(string lastName)
	{
		sceneName = SceneManager.GetActiveScene().name;
		sceneName = WrapName(sceneName, isFile: true);
		if (sceneName == "")
		{
			sceneName = "layaScene";
		}
		string text = "";
		if (bool_CustomizeExportRootDirectoryName && string_customPath != "")
		{
			string_customPath = WrapName(string_customPath, isFile: true);
			text = "/" + string_customPath + lastName;
		}
		else
		{
			text = "/LayaScene_" + sceneName + lastName;
		}
		string_exportPath += text;
		list_0 = new List<string>();
		list_0.Add(".jpeg");
		list_0.Add(".JPEG");
		list_0.Add(".bmp");
		list_0.Add(".BMP");
		list_0.Add(".png");
		list_0.Add(".PNG");
		list_0.Add(".jpg");
		list_0.Add(".JPG");
		int_10 = 0;
		int_12 = 0;
		int_14 = 0;
		GenIndexHtml(text + "/" + sceneName);
		BuildNeedExportInfo();
		Export_AllMeshs();
		Export_AllSkinMeshrenders();
		Export_AllAnimators();
		dictionary_2.Clear();
		dictionary_3.Clear();
		dictionary_4.Clear();
		if (bool_Conventional_compress && int_Platformindex == 0)
		{
			Export_Conventional_Img();
		}
		if (bool_Android_compress && int_Platformindex == 2)
		{
			Export_Android_img();
		}
		if (bool_Ios_compress && int_Platformindex == 1)
		{
			Export_Ios_Img();
		}
		list_1.Clear();
	}

	private static void BuildNeedExportInfo()
	{
		int_15 = 0;
		dictionary_5.Clear();
		if (bool_batchmakethefirstlevelobjs && int_exportType == 1)
		{
			Build_PrefabsInfo();
			return;
		}
		string itemPath = "";
        // 场景
		if (int_exportType == 0)
		{
			itemPath = string_exportPath + "/" + sceneName + ".ls";
		}
        // 预制体
		else if (int_exportType == 1)
		{
			itemPath = string_exportPath + "/" + sceneName + ".lh";
		}
		FSWriterHelper.WriteObj(itemPath, export_scene());
		list_1.Add(itemPath);
	}

	private static ExportDataItem export_scene()
	{
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Object);
		ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Object);
		ExportDataItem class3 = new ExportDataItem(ExportDataItem.Enum0.Object);
		class3.AddString("name", sceneName);
		if (int_exportType == 0)
		{
			@class.AddString("version", string_4);
			class2.AddString("type", "Scene3D");
		}
		else if (int_exportType == 1)
		{
			@class.AddString("version", string_exportversion);
			class2.AddString("type", "Sprite3D");
			class2.AddNumber_Int("instanceID", GenInstanceId());
			dictionary_5.Add("scene", int_15 - 1);
			class3.AddBoolean("active", bool_2: true);
		}
		class2.Add_Class16("props", class3);
		@class.Add_Class16("data", class2);
		if (int_exportType == 0)
		{
			Material skybox = RenderSettings.skybox;
			if (skybox != null)
			{
				Export_SkyMat(skybox, class3);
			}
			Color ambientLight = RenderSettings.ambientLight;
			ExportDataItem class4 = new ExportDataItem(ExportDataItem.Enum0.Array);
			class4.Add_Number_Float(ambientLight.r);
			class4.Add_Number_Float(ambientLight.g);
			class4.Add_Number_Float(ambientLight.b);
			class3.Add_Class16("ambientColor", class4);
			if (RenderSettings.defaultReflectionMode == DefaultReflectionMode.Skybox)
			{
				smethod_52(class3);
				class3.method_18("reflectionIntensity", RenderSettings.reflectionIntensity);
			}
			if (RenderSettings.ambientMode == AmbientMode.Skybox)
			{
				class3.AddNumber_Int("ambientMode", 1);
				ExportDataItem class16_ = new ExportDataItem(ExportDataItem.Enum0.Array);
				class3.Add_Class16("ambientSphericalHarmonics", class16_);
				smethod_56(class16_);
				class3.method_18("ambientSphericalHarmonicsIntensity", RenderSettings.ambientIntensity);
			}
			else
			{
				class3.AddNumber_Int("ambientMode", 0);
				class3.method_18("ambientSphericalHarmonicsIntensity", 1f);
			}
			smethod_47(class3);
			class3.AddBoolean("enableFog", RenderSettings.fog);
			class3.method_18("fogStart", RenderSettings.fogStartDistance);
			class3.method_18("fogRange", RenderSettings.fogEndDistance - RenderSettings.fogStartDistance);
			ExportDataItem class5 = new ExportDataItem(ExportDataItem.Enum0.Array);
			Color fogColor = RenderSettings.fogColor;
			class5.Add_Number_Float(fogColor.r);
			class5.Add_Number_Float(fogColor.g);
			class5.Add_Number_Float(fogColor.b);
			class3.Add_Class16("fogColor", class5);
		}
		else if (int_exportType == 1)
		{
			Vector3 vector = new Vector3(0f, 0f, 0f);
			Quaternion quaternion = new Quaternion(0f, 0f, 0f, -1f);
			Vector3 vector2 = new Vector3(1f, 1f, 1f);
			ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
			class6.Add_Number_Float(vector.x);
			class6.Add_Number_Float(vector.y);
			class6.Add_Number_Float(vector.z);
			class3.Add_Class16("position", class6);
			ExportDataItem class7 = new ExportDataItem(ExportDataItem.Enum0.Array);
			class7.Add_Number_Float(quaternion.x);
			class7.Add_Number_Float(quaternion.y);
			class7.Add_Number_Float(quaternion.z);
			class7.Add_Number_Float(quaternion.w);
			class3.Add_Class16("rotation", class7);
			ExportDataItem class8 = new ExportDataItem(ExportDataItem.Enum0.Array);
			class8.Add_Number_Float(vector2.x);
			class8.Add_Number_Float(vector2.y);
			class8.Add_Number_Float(vector2.z);
			class3.Add_Class16("scale", class8);
		}
		GameObject[] rootGameObjects = SceneManager.GetActiveScene().GetRootGameObjects();
		if (rootGameObjects.Length != 0)
		{
			ExportDataItem class16_2 = new ExportDataItem(ExportDataItem.Enum0.Array);
			class2.Add_Class16("child", class16_2);
			string string_ = sceneName;
			for (int i = 0; i < rootGameObjects.Length; i++)
			{
				Build_ObjectInfo(rootGameObjects[i].gameObject, string_, class16_2);
			}
		}
		else
		{
			class2.Add_Class16("child", new ExportDataItem(ExportDataItem.Enum0.Array));
		}
		return @class;
	}

	private static Dictionary<string, ExportDataItem> Build_PrefabsInfo()
	{
		GameObject[] rootGameObjects = SceneManager.GetActiveScene().GetRootGameObjects();
		Dictionary<string, ExportDataItem> dictionary = new Dictionary<string, ExportDataItem>();
		if (rootGameObjects.Length != 0)
		{
			for (int i = 0; i < rootGameObjects.Length; i++)
			{
				if (LayaAir3D.customExport != null && !LayaAir3D.customExport.StartEachHierarchyExport(string_exportPath + "/" + WrapName(rootGameObjects[i].name, isFile: true) + ".lh"))
				{
					continue;
				}
				List<ECMPType> cmpList = SeachNeedExportCmps(rootGameObjects[i]);
				SearchObjChildren(rootGameObjects[i], bool_17: true);
				if ((rootGameObjects[i].activeInHierarchy || !bool_ignorenotactiveobjs) && (cmpList.Count > 1 || bool_16))
				{
					ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Object);
					@class.AddString("version", string_exportversion);
					string string_ = sceneName;
					Build_ObjectInfo(rootGameObjects[i].gameObject, string_, @class, bool_17: false, check_Children: false, bool_19: true);
					string hierarchyPath;
					if (dictionary.ContainsKey(rootGameObjects[i].name))
					{
						hierarchyPath = string_exportPath + "/" + rootGameObjects[i].name + dictionary.Count + ".lh";
						FSWriterHelper.WriteObj(hierarchyPath, @class);
					}
					else
					{
						hierarchyPath = string_exportPath + "/" + rootGameObjects[i].name + ".lh";
						FSWriterHelper.WriteObj(hierarchyPath, @class);
					}
					if (LayaAir3D.customExport != null)
					{
						LayaAir3D.customExport.EndEachHierarchyExport(hierarchyPath);
					}
				}
			}
		}
		return dictionary;
	}

	private static void Build_ObjectInfo(GameObject gameObject_0, string string_13, ExportDataItem class16_0, bool bool_17 = false, bool check_Children = false, bool bool_19 = false)
	{
		List<ECMPType> cmpList = SeachNeedExportCmps(gameObject_0);
		SearchObjChildren(gameObject_0, bool_17: true);
		if ((!gameObject_0.activeSelf && bool_ignorenotactiveobjs) 
            || (cmpList.Count < 1 && !bool_16) 
            || (cmpList.Count < 1 && bool_17) 
            || (cmpList.IndexOf(ECMPType.DirectionalLight) != -1 && int_10 >= int_9) 
            || (cmpList.IndexOf(ECMPType.PointLight) != -1 && int_12 >= int_11) 
            || (cmpList.IndexOf(ECMPType.SpotLight) != -1 && int_14 >= int_13))
		{
			return;
		}
		ExportDataItem classObject = new ExportDataItem(ExportDataItem.Enum0.Object);
		ExportDataItem array_Children = new ExportDataItem(ExportDataItem.Enum0.Array);
		Vector3 localPosition = gameObject_0.transform.localPosition;
		Quaternion localRotation = gameObject_0.transform.localRotation;
		Vector3 localScale = gameObject_0.transform.localScale;
		string savePath = string_13;
		Export_GameObject(gameObject_0, classObject, array_Children, localPosition, localRotation, localScale, ref savePath);

		if (gameObject_0.transform.childCount > 0 && !check_Children)
		{
			for (int i = 0; i < gameObject_0.transform.childCount; i++)
			{
				Build_ObjectInfo(gameObject_0.transform.GetChild(i).gameObject, savePath, array_Children);
			}
		}
		classObject.Add_Class16("child", array_Children);
		if (bool_19)
		{
			class16_0.Add_Class16("data", classObject);
		}
		else
		{
			class16_0.Add_ArrayData(classObject);
		}
	}

	private static void smethod_6(GameObject gameObject_0, string string_13, ExportDataItem class16_0)
	{
		List<ECMPType> list = SeachNeedExportCmps(gameObject_0);
		Transform[] componentsInChildren = gameObject_0.GetComponentsInChildren<Transform>();
		for (int i = 0; i < componentsInChildren.Length; i++)
		{
			ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Object);
			ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Array);
			GameObject gameObject = componentsInChildren[i].gameObject;
			List<ECMPType> list2 = SeachNeedExportCmps(gameObject);
			SearchObjChildren(gameObject, bool_17: true);
			if (!(gameObject == gameObject_0) && (gameObject.activeInHierarchy || !bool_ignorenotactiveobjs) && !(smethod_68(gameObject, ECMPType.Animator) != null) && (list.IndexOf(ECMPType.DirectionalLight) == -1 || int_10 < int_9))
			{
				if ((list.IndexOf(ECMPType.PointLight) != -1 && int_12 >= int_11) || (list.IndexOf(ECMPType.SpotLight) != -1 && int_14 >= int_13))
				{
					break;
				}
				if (list2.Count > 1 || bool_16)
				{
					Matrix4x4 matrix4x = gameObject_0.transform.worldToLocalMatrix * gameObject.transform.localToWorldMatrix;
					Vector3 vector3_ = matrix4x.GetColumn(3);
					Quaternion quaternion_ = Quaternion.LookRotation(matrix4x.GetColumn(2), matrix4x.GetColumn(1));
					Vector3 vector3_2 = new Vector3(matrix4x.GetColumn(0).magnitude, matrix4x.GetColumn(1).magnitude, matrix4x.GetColumn(2).magnitude);
					LayaMathHelper.smethod_0(matrix4x.transpose, out vector3_2, out quaternion_, out vector3_);
					string string_14 = string_13;
					Export_GameObject(gameObject, @class, class2, vector3_, quaternion_, vector3_2, ref string_14);
					@class.Add_Class16("child", class2);
					class16_0.Add_ArrayData(@class);
				}
			}
		}
	}

	private static void smethod_7(Dictionary<GameObject, ExportDataItem> dictionary_6, GameObject gameObject_0, GameObject gameObject_1, string string_13, ExportDataItem class16_0, List<string> list_2 = null)
	{
		List<ECMPType> list = SeachNeedExportCmps(gameObject_1);
		SearchObjChildren(gameObject_1, bool_17: true);
		if (list.Count > 1 && gameObject_1.transform.parent.gameObject == gameObject_0)
		{
			ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Object);
			ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Array);
			Matrix4x4 matrix4x = gameObject_0.transform.worldToLocalMatrix * gameObject_1.transform.localToWorldMatrix;
			Vector3 vector3_ = matrix4x.GetColumn(3);
			Quaternion quaternion_ = Quaternion.LookRotation(matrix4x.GetColumn(2), matrix4x.GetColumn(1));
			Vector3 vector3_2 = new Vector3(matrix4x.GetColumn(0).magnitude, matrix4x.GetColumn(1).magnitude, matrix4x.GetColumn(2).magnitude);
			LayaMathHelper.smethod_0(matrix4x.transpose, out vector3_2, out quaternion_, out vector3_);
			string string_14 = string_13;
			Export_GameObject(gameObject_1, @class, class2, vector3_, quaternion_, vector3_2, ref string_14);
			for (int i = 0; i < gameObject_1.transform.childCount; i++)
			{
				Build_ObjectInfo(gameObject_1.transform.GetChild(i).gameObject, string_13, class2, bool_17: true);
			}
			@class.Add_Class16("child", class2);
			class16_0.Add_ArrayData(@class);
		}
		else if (list.Count <= 1)
		{
			int childCount = gameObject_1.transform.childCount;
			if (childCount != 0)
			{
				for (int j = 0; j < childCount; j++)
				{
					smethod_7(dictionary_6, gameObject_0, gameObject_1.transform.GetChild(j).gameObject, string_13, class16_0, list_2);
				}
			}
		}
		else
		{
			if (!gameObject_1.activeSelf && bool_ignorenotactiveobjs)
			{
				return;
			}
			if (list_2 != null && list_2.IndexOf(gameObject_1.name) == -1 && gameObject_1.GetComponent<SkinnedMeshRenderer>() == null)
			{
				list_2.Add(gameObject_1.name);
			}
			if (!dictionary_6.ContainsKey(gameObject_1))
			{
				ExportDataItem class3 = new ExportDataItem(ExportDataItem.Enum0.Array);
				ExportDataItem class4 = new ExportDataItem(ExportDataItem.Enum0.Object);
				Matrix4x4 matrix4x2 = gameObject_0.transform.worldToLocalMatrix * gameObject_1.transform.localToWorldMatrix;
				Vector3 vector3_3 = matrix4x2.GetColumn(3);
				Quaternion quaternion_2 = Quaternion.LookRotation(matrix4x2.GetColumn(2), matrix4x2.GetColumn(1));
				Vector3 vector3_4 = new Vector3(matrix4x2.GetColumn(0).magnitude, matrix4x2.GetColumn(1).magnitude, matrix4x2.GetColumn(2).magnitude);
				LayaMathHelper.smethod_0(matrix4x2.transpose, out vector3_4, out quaternion_2, out vector3_3);
				string string_15 = string_13;
				Export_GameObject(gameObject_1, class4, class3, vector3_3, quaternion_2, vector3_4, ref string_15);
				class4.Add_Class16("child", class3);
				class16_0.Add_ArrayData(class4);
				dictionary_6.Add(gameObject_1, class4);
			}
			else
			{
				ExportDataItem class16_ = dictionary_6[gameObject_1].method_43("child");
				Build_ObjectInfo(gameObject_1, string_13, class16_, bool_17: true);
			}
			if (!(gameObject_1.GetComponent<Animator>() == null))
			{
				return;
			}
			int childCount2 = gameObject_1.transform.childCount;
			if (childCount2 != 0)
			{
				for (int k = 0; k < childCount2; k++)
				{
					smethod_7(dictionary_6, gameObject_0, gameObject_1.transform.GetChild(k).gameObject, string_13, class16_0, list_2);
				}
			}
		}
	}

	private static void smethod_8(GameObject gameObject_0, string string_13, ExportDataItem class16_0, List<string> list_2 = null)
	{
		Dictionary<GameObject, ExportDataItem> dictionary_ = new Dictionary<GameObject, ExportDataItem>();
		int childCount = gameObject_0.transform.childCount;
		for (int i = 0; i < childCount; i++)
		{
			if (!bool_ignorenotactiveobjs || gameObject_0.transform.GetChild(i).gameObject.activeSelf)
			{
				smethod_7(dictionary_, gameObject_0, gameObject_0.transform.GetChild(i).gameObject, string_13, class16_0, list_2);
			}
		}
	}

	private static void Export_GameObject(GameObject gameObject_0, ExportDataItem class16_0, ExportDataItem class16_1, Vector3 vector3_0, Quaternion quaternion_0, Vector3 vector3_1, ref string string_13)
	{
		List<ECMPType> list = SeachNeedExportCmps(gameObject_0);
		
		// base info
		class16_0.AddString("type", "");
		if (list.IndexOf(ECMPType.GameObject) != -1)
		{
			class16_0.SetString("type", "Sprite3D");
		}
		if (list.IndexOf(ECMPType.Collider) != -1)
		{
			class16_0.SetString("type", "Sprite3D");
		}
		if (list.IndexOf(ECMPType.Rigidbody) != -1)
		{
			class16_0.SetString("type", "Sprite3D");
		}
		if (list.IndexOf(ECMPType.Animator) != -1)
		{
			class16_0.SetString("type", "Sprite3D");
		}
		if (list.IndexOf(ECMPType.DirectionalLight) != -1)
		{
			class16_0.SetString("type", "DirectionLight");
		}
		if (list.IndexOf(ECMPType.PointLight) != -1)
		{
			class16_0.SetString("type", "PointLight");
		}
		if (list.IndexOf(ECMPType.SpotLight) != -1)
		{
			class16_0.SetString("type", "SpotLight");
		}
		if (list.IndexOf(ECMPType.ReflectionProbe) != -1)
		{
			class16_0.SetString("type", "ReflectionProbe");
		}
		if (list.IndexOf(ECMPType.Camera) != -1)
		{
			class16_0.SetString("type", "Camera");
		}
		if (list.IndexOf(ECMPType.Meshfilter) != -1)
		{
			class16_0.SetString("type", "MeshSprite3D");
		}
		if (list.IndexOf(ECMPType.Meshrenderer) != -1)
		{
			class16_0.SetString("type", "MeshSprite3D");
		}
		if (list.IndexOf(ECMPType.SkinnedMeshRenderer) != -1)
		{
			if (bool_bakeAnim)
			{
				class16_0.SetString("type", "SimpleSkinnedMeshSprite3D");
			}
			else
			{
				class16_0.SetString("type", "SkinnedMeshSprite3D");
			}
		}
		if (list.IndexOf(ECMPType.ParticleSystem) != -1)
		{
			class16_0.SetString("type", "ShuriKenParticle3D");
		}
		if (list.IndexOf(ECMPType.Terrain) != -1)
		{
			if (bool_ConvertTerrainToMesh)
			{
				class16_0.SetString("type", "MeshSprite3D");
			}
			else
			{
				class16_0.SetString("type", "Terrain");
			}
		}
		if (list.IndexOf(ECMPType.TrailRenderer) != -1)
		{
			class16_0.SetString("type", "TrailSprite3D");
		}
		if (list.IndexOf(ECMPType.LineRenderer) != -1)
		{
			class16_0.SetString("type", "LineSprite3D");
		}
		if (dictionary_5.ContainsKey(gameObject_0.GetInstanceID().ToString()))
		{
			class16_0.AddNumber_Int("instanceID", dictionary_5[gameObject_0.GetInstanceID().ToString()]);
		}
		else
		{
			class16_0.AddNumber_Int("instanceID", GenInstanceId());
			dictionary_5.Add(gameObject_0.GetInstanceID().ToString(), int_15 - 1);
		}

        // props
        ExportDataItem class_props = new ExportDataItem(ExportDataItem.Enum0.Object);
        class16_0.Add_Class16("props", class_props);
		StaticEditorFlags staticEditorFlags = GameObjectUtility.GetStaticEditorFlags(gameObject_0);
		class_props.AddString("name", gameObject_0.name);
		class_props.AddBoolean("active", gameObject_0.activeSelf);
		class_props.AddBoolean("isStatic", (staticEditorFlags & StaticEditorFlags.BatchingStatic) > (StaticEditorFlags)0);
		string_13 = string_13 + "/" + gameObject_0.name;
		if (gameObject_0.layer == 31)
		{
			Debug.LogWarning("LayaUnityPlugin : layer must less than 31 !");
		}
		else
		{
			class_props.AddNumber_Int("layer", gameObject_0.layer);
		}

        // components
        ExportDataItem array_cmps = new ExportDataItem(ExportDataItem.Enum0.Array);
        class16_0.Add_Class16("components", array_cmps);
		if (list.IndexOf(ECMPType.GameObject) != -1)
		{
			Export_TranformInfo(gameObject_0, class_props, vector3_0, quaternion_0, vector3_1);
		}
		if (list.IndexOf(ECMPType.Rigidbody) != -1)
		{
			Export_Rigidbody(gameObject_0, array_cmps);
		}
		if (list.IndexOf(ECMPType.Collider) != -1)
		{
			Export_Collider(gameObject_0, array_cmps);
		}
		if (list.IndexOf(ECMPType.Animator) != -1)
		{
			List<string> list_ = new List<string>();
			Export_Animator(gameObject_0, array_cmps, list_);
		}
		if (list.IndexOf(ECMPType.DirectionalLight) != -1)
		{
			Export_DirectionalLight(gameObject_0, class_props);
		}
		if (list.IndexOf(ECMPType.PointLight) != -1)
		{
			Export_PointLight(gameObject_0, class_props);
		}
		if (list.IndexOf(ECMPType.SpotLight) != -1)
		{
			Export_SpotLight(gameObject_0, class_props);
		}
		if (list.IndexOf(ECMPType.ReflectionProbe) != -1)
		{
			Export_ReflectionProbe(gameObject_0, class_props);
		}
		if (list.IndexOf(ECMPType.Camera) != -1)
		{
			Export_Camera(gameObject_0, class_props);
		}
		if (list.IndexOf(ECMPType.Meshfilter) != -1)
		{
			Export_Meshfilter(gameObject_0, class_props);
		}
		if (list.IndexOf(ECMPType.Meshrenderer) != -1)
		{
			Export_Meshrenderer(gameObject_0, class_props);
		}
		if (list.IndexOf(ECMPType.SkinnedMeshRenderer) != -1)
		{
			Export_SkinnedMeshRenderer(gameObject_0, class_props);
		}
		if (list.IndexOf(ECMPType.ParticleSystem) != -1)
		{
			Export_ParticleSystem(gameObject_0, class_props);
		}
		if (list.IndexOf(ECMPType.Terrain) != -1)
		{
			Export_Terrain(gameObject_0, class_props);
		}
		if (list.IndexOf(ECMPType.TrailRenderer) != -1)
		{
			Export_TrailRenderer(gameObject_0, class_props);
		}
		if (list.IndexOf(ECMPType.LineRenderer) != -1)
		{
			Export_LineRenderer(gameObject_0, class_props);
		}
		if (list.IndexOf(ECMPType.FixedJoint) != -1)
		{
			Export_FixedJoint(gameObject_0, array_cmps);
		}
		if (list.IndexOf(ECMPType.ConfigurableJoint) != -1)
		{
			Export_ConfigurableJoint(gameObject_0, array_cmps);
		}
	}

	private static void Export_TranformInfo(GameObject gameObject_0, ExportDataItem class16_0, Vector3 vector3_0, Quaternion quaternion_0, Vector3 vector3_1)
	{
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Array);
		ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Array);
		ExportDataItem class3 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class16_0.Add_Class16("position", @class);
		class16_0.Add_Class16("rotation", class2);
		class16_0.Add_Class16("scale", class3);
		List<ECMPType> list = SeachNeedExportCmps(gameObject_0);
		@class.Add_Number_Float(vector3_0.x * -1f);
		@class.Add_Number_Float(vector3_0.y);
		@class.Add_Number_Float(vector3_0.z);
		if (list.IndexOf(ECMPType.Terrain) == -1)
		{
			if (list.IndexOf(ECMPType.Camera) != -1 || list.IndexOf(ECMPType.DirectionalLight) != -1 || list.IndexOf(ECMPType.SpotLight) != -1)
			{
				quaternion_0 *= new Quaternion(0f, 1f, 0f, 0f);
			}
			class2.Add_Number_Float(quaternion_0.x * -1f);
			class2.Add_Number_Float(quaternion_0.y);
			class2.Add_Number_Float(quaternion_0.z);
			class2.Add_Number_Float(quaternion_0.w * -1f);
			class3.Add_Number_Float(vector3_1.x);
			class3.Add_Number_Float(vector3_1.y);
			class3.Add_Number_Float(vector3_1.z);
		}
		else
		{
			class2.Add_Number_Int(0);
			class2.Add_Number_Int(0);
			class2.Add_Number_Int(0);
			class2.Add_Number_Int(-1);
			class3.Add_Number_Int(1);
			class3.Add_Number_Int(1);
			class3.Add_Number_Int(1);
		}
	}

	private static void Export_Camera(GameObject gameObject_0, ExportDataItem class16_0)
	{
		Camera component = gameObject_0.GetComponent<Camera>();
		if (component.clearFlags == CameraClearFlags.Skybox)
		{
			class16_0.AddNumber_Int("clearFlag", 1);
		}
		else if (component.clearFlags != CameraClearFlags.Color && component.clearFlags != CameraClearFlags.Color)
		{
			if (component.clearFlags == CameraClearFlags.Depth)
			{
				class16_0.AddNumber_Int("clearFlag", 2);
			}
			else
			{
				class16_0.AddNumber_Int("clearFlag", 3);
			}
		}
		else
		{
			class16_0.AddNumber_Int("clearFlag", 0);
		}
		class16_0.AddBoolean("orthographic", component.orthographic);
		class16_0.method_18("orthographicVerticalSize", component.orthographicSize * 2f);
		class16_0.method_18("fieldOfView", component.fieldOfView);
		class16_0.AddBoolean("enableHDR", component.allowHDR);
		class16_0.method_18("nearPlane", component.nearClipPlane);
		class16_0.method_18("farPlane", component.farClipPlane);
		ExportDataItem data_viewport = new ExportDataItem(ExportDataItem.Enum0.Array);
		Rect rect = component.rect;
		data_viewport.Add_Number_Float(rect.x);
		data_viewport.Add_Number_Float(1f - rect.y - rect.height);
		data_viewport.Add_Number_Float(rect.width);
		data_viewport.Add_Number_Float(rect.height);
		class16_0.Add_Class16("viewport", data_viewport);
		ExportDataItem data_clearColor = new ExportDataItem(ExportDataItem.Enum0.Array);
		Color backgroundColor = component.backgroundColor;
		data_clearColor.Add_Number_Float(backgroundColor.r);
		data_clearColor.Add_Number_Float(backgroundColor.g);
		data_clearColor.Add_Number_Float(backgroundColor.b);
		data_clearColor.Add_Number_Float(backgroundColor.a);
		class16_0.Add_Class16("clearColor", data_clearColor);
		Skybox[] components = gameObject_0.GetComponents<Skybox>();
		if (components.Length == 0)
		{
			return;
		}
		int num = 0;
		Material material;
		while (true)
		{
			if (num >= components.Length)
			{
				return;
			}
			Skybox skybox = components[num];
			if (skybox.enabled)
			{
				material = skybox.material;
				if (material != null)
				{
					break;
				}
			}
			num++;
		}
		Export_SkyMat(material, class16_0);
	}

	private static void Export_DirectionalLight(GameObject gameObject_0, ExportDataItem class16_0)
	{
		Light component = gameObject_0.GetComponent<Light>();
		class16_0.method_18("intensity", component.intensity);
		switch (component.lightmapBakeType)
		{
		case LightmapBakeType.Mixed:
			class16_0.AddNumber_Int("lightmapBakedType", 1);
			break;
		case LightmapBakeType.Baked:
			class16_0.AddNumber_Int("lightmapBakedType", 2);
			break;
		default:
			class16_0.AddNumber_Int("lightmapBakedType", 0);
			break;
		case LightmapBakeType.Realtime:
			class16_0.AddNumber_Int("lightmapBakedType", 0);
			break;
		}
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Array);
		Color color = component.color;
		@class.Add_Number_Float(color.r);
		@class.Add_Number_Float(color.g);
		@class.Add_Number_Float(color.b);
		class16_0.Add_Class16("color", @class);
		int_10++;
	}

	private static void Export_PointLight(GameObject gameObject_0, ExportDataItem class16_0)
	{
		Light component = gameObject_0.GetComponent<Light>();
		class16_0.method_18("intensity", component.intensity);
		switch (component.lightmapBakeType)
		{
		case LightmapBakeType.Mixed:
			class16_0.AddNumber_Int("lightmapBakedType", 1);
			break;
		case LightmapBakeType.Baked:
			class16_0.AddNumber_Int("lightmapBakedType", 2);
			break;
		default:
			class16_0.AddNumber_Int("lightmapBakedType", 0);
			break;
		case LightmapBakeType.Realtime:
			class16_0.AddNumber_Int("lightmapBakedType", 0);
			break;
		}
		class16_0.method_18("range", component.range);
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Array);
		Color color = component.color;
		@class.Add_Number_Float(color.r);
		@class.Add_Number_Float(color.g);
		@class.Add_Number_Float(color.b);
		class16_0.Add_Class16("color", @class);
		int_12++;
	}

	private static void Export_SpotLight(GameObject gameObject_0, ExportDataItem class16_0)
	{
		Light component = gameObject_0.GetComponent<Light>();
		class16_0.method_18("intensity", component.intensity);
		switch (component.lightmapBakeType)
		{
		case LightmapBakeType.Mixed:
			class16_0.AddNumber_Int("lightmapBakedType", 1);
			break;
		case LightmapBakeType.Baked:
			class16_0.AddNumber_Int("lightmapBakedType", 2);
			break;
		default:
			class16_0.AddNumber_Int("lightmapBakedType", 0);
			break;
		case LightmapBakeType.Realtime:
			class16_0.AddNumber_Int("lightmapBakedType", 0);
			break;
		}
		class16_0.method_18("range", component.range);
		class16_0.method_18("spotAngle", component.spotAngle);
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Array);
		Color color = component.color;
		@class.Add_Number_Float(color.r);
		@class.Add_Number_Float(color.g);
		@class.Add_Number_Float(color.b);
		class16_0.Add_Class16("color", @class);
		int_14++;
	}

	private static void Export_ReflectionProbe(GameObject gameObject_0, ExportDataItem class16_0)
	{
		ReflectionProbe component = gameObject_0.GetComponent<ReflectionProbe>();
		int importance = component.importance;
		class16_0.AddNumber_Int("importance", importance);
		float intensity = component.intensity;
		class16_0.method_18("intensity", intensity);
		bool boxProjection = component.boxProjection;
		class16_0.AddBoolean("boxProjection", boxProjection);
		Vector3 size = component.bounds.size;
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Array);
		class16_0.Add_Class16("boxSize", @class);
		@class.Add_Number_Float(size.x);
		@class.Add_Number_Float(size.y);
		@class.Add_Number_Float(size.z);
		Vector3 center = component.center;
		ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class16_0.Add_Class16("boxOffset", class2);
		class2.Add_Number_Float(center.x);
		class2.Add_Number_Float(center.y);
		class2.Add_Number_Float(center.z);
		string name = gameObject_0.name;
		string text = SceneManager.GetActiveScene().path.Split('.')[0];
		Cubemap cubemap = ((component.mode != ReflectionProbeMode.Custom) ? ((Cubemap)component.bakedTexture) : ((Cubemap)component.customBakedTexture));
		if (!cubemap)
		{
			Debug.LogWarning($"LayaAir: {name} has no cubemap.");
			return;
		}
		string assetPath = AssetDatabase.GetAssetPath(cubemap.GetInstanceID());
		string a = Path.GetExtension(assetPath).ToLower();
		bool flag = ((a == ".exr" || a == ".ehdr") ? true : false);
		TextureImporter textureImporter = AssetImporter.GetAtPath(assetPath) as TextureImporter;
		if ((bool)textureImporter)
		{
			textureImporter.isReadable = true;
			TextureImporterPlatformSettings defaultPlatformTextureSettings = textureImporter.GetDefaultPlatformTextureSettings();
			defaultPlatformTextureSettings.textureCompression = TextureImporterCompression.Uncompressed;
			textureImporter.SetPlatformTextureSettings(defaultPlatformTextureSettings);
			AssetDatabase.ImportAsset(assetPath);
		}
		else if (!cubemap.isReadable)
		{
			Debug.LogError($"LayaAir:Texture {assetPath} isReadable must be true.");
			return;
		}
		class16_0.AddNumber_Int("reflectionDecodingFormat", flag ? 1 : 0);
		class16_0.AddString("reflection", text + "ReflectionProbe_" + name + ".ltcb");
		int int_ = (byte)cubemap.mipmapCount;
		byte byte_ = (byte)(flag ? 1 : 0);
		string string_ = string_exportPath + "/" + text + "ReflectionProbe_" + name + ".ltcb";
		smethod_53(cubemap, string_, byte_, int_, flag);
	}

	private static void Export_Meshfilter(GameObject gameObject_0, ExportDataItem class16_0)
	{
		Mesh sharedMesh = gameObject_0.GetComponent<MeshFilter>().sharedMesh;
		if (sharedMesh != null)
		{
			string str = WrapName(sharedMesh.name, isFile: true);
			string str2 = WrapName(AssetDatabase.GetAssetPath(sharedMesh.GetInstanceID()).Split('.')[0], isFile: false) + "-" + str;
			str2 += ".lm";
			string key = string_exportPath + "/" + str2;
			while (true)
			{
				if (dictionary_2.ContainsKey(key))
				{
					if (!(dictionary_2[key] != sharedMesh))
					{
						break;
					}
					str2 = str2.Remove(str2.Length - 3, 3);
					str2 += "-copy.lm";
					key = string_exportPath + "/" + str2;
					continue;
				}
				dictionary_2.Add(key, sharedMesh);
				break;
			}
			class16_0.AddString("meshPath", str2);
		}
		else
		{
			Debug.LogWarning("LayaAir3D Warning(Code:1001) : " + gameObject_0.name + "'s MeshFilter Component Mesh data can't be null!");
		}
	}

	private static void Export_Meshrenderer(GameObject gameObject_0, ExportDataItem class16_0)
	{
		MeshRenderer component = gameObject_0.GetComponent<MeshRenderer>();
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Array);
		if (int_exportType == 0 && component.lightmapIndex > -1)
		{
			class16_0.AddNumber_Int("lightmapIndex", component.lightmapIndex);
			class16_0.Add_Class16("lightmapScaleOffset", @class);
			@class.Add_Number_Float(component.lightmapScaleOffset.x);
			@class.Add_Number_Float(component.lightmapScaleOffset.y);
			@class.Add_Number_Float(component.lightmapScaleOffset.z);
			@class.Add_Number_Float(component.lightmapScaleOffset.w);
		}
		bool enabled = component.enabled;
		class16_0.AddBoolean("enableRender", enabled);
		bool receiveShadows = component.receiveShadows;
		class16_0.AddBoolean("receiveShadows", receiveShadows);
		class16_0.AddBoolean("castShadow", component.shadowCastingMode == ShadowCastingMode.On);
		Material[] sharedMaterials = component.sharedMaterials;
		ExportDataItem class16_ = new ExportDataItem(ExportDataItem.Enum0.Array);
		class16_0.Add_Class16("materials", class16_);
		smethod_28(gameObject_0, sharedMaterials, class16_);
	}

	private static void Export_SkinnedMeshRenderer(GameObject gameObject_0, ExportDataItem class16_0)
	{
		SkinnedMeshRenderer component = gameObject_0.GetComponent<SkinnedMeshRenderer>();
		if ((bool)component.rootBone)
		{
			if (dictionary_5.ContainsKey(component.rootBone.gameObject.GetInstanceID().ToString()))
			{
				class16_0.AddNumber_Int("rootBone", dictionary_5[component.rootBone.gameObject.GetInstanceID().ToString()]);
			}
			else
			{
				dictionary_5.Add(component.rootBone.gameObject.GetInstanceID().ToString(), GenInstanceId());
				class16_0.AddNumber_Int("rootBone", dictionary_5[component.rootBone.gameObject.GetInstanceID().ToString()]);
			}
			if (bool_bakeAnim)
			{
				GameObject gameObject = smethod_68(component.rootBone.gameObject, ECMPType.Animator);
				string text = GenSaveAnimatorControllerName(gameObject);
				class16_0.AddString("animatorTexture", text);
				BakeAnimatorHelper.smethod_1(gameObject.GetComponentsInChildren<SkinnedMeshRenderer>(), out var transform_, out var _);
				class16_0.AddNumber_Int("bonesNums", transform_.Length);
			}
		}
		else
		{
			class16_0.AddString("rootBone", "");
		}
		Bounds localBounds = component.localBounds;
		Vector3 center = localBounds.center;
		Vector3 a = new Vector3(0f - center.x, center.y, center.z);
		Vector3 extents = localBounds.extents;
		Vector3 a2 = a - extents;
		Vector3 b = a + extents;
		float num = Vector3.Distance(a2, b) / 2f;
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Object);
		class16_0.Add_Class16("boundBox", @class);
		ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class2.Add_Number_Float(a2.x);
		class2.Add_Number_Float(a2.y);
		class2.Add_Number_Float(a2.z);
		@class.Add_Class16("min", class2);
		ExportDataItem class3 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class3.Add_Number_Float(b.x);
		class3.Add_Number_Float(b.y);
		class3.Add_Number_Float(b.z);
		@class.Add_Class16("max", class3);
		ExportDataItem class4 = new ExportDataItem(ExportDataItem.Enum0.Object);
		class16_0.Add_Class16("boundSphere", class4);
		ExportDataItem class5 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class5.Add_Number_Float(a.x);
		class5.Add_Number_Float(a.y);
		class5.Add_Number_Float(a.z);
		class4.Add_Class16("center", class5);
		class4.method_18("radius", num);
		ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class16_0.Add_Class16("bones", class6);
		Transform[] bones = component.bones;
		for (int i = 0; i < bones.Length; i++)
		{
			if (dictionary_5.ContainsKey(bones[i].gameObject.GetInstanceID().ToString()))
			{
				class6.Add_Number_Int(dictionary_5[bones[i].gameObject.GetInstanceID().ToString()]);
				continue;
			}
			dictionary_5.Add(bones[i].gameObject.GetInstanceID().ToString(), GenInstanceId());
			class6.Add_Number_Int(dictionary_5[bones[i].gameObject.GetInstanceID().ToString()]);
		}
		bool enabled = component.enabled;
		class16_0.AddBoolean("enableRender", enabled);
		bool receiveShadows = component.receiveShadows;
		class16_0.AddBoolean("receiveShadows", receiveShadows);
		class16_0.AddBoolean("castShadow", component.shadowCastingMode == ShadowCastingMode.On);
		Material[] sharedMaterials = component.sharedMaterials;
		ExportDataItem class16_ = new ExportDataItem(ExportDataItem.Enum0.Array);
		class16_0.Add_Class16("materials", class16_);
		smethod_28(gameObject_0, sharedMaterials, class16_);
		Mesh sharedMesh = component.sharedMesh;
		if (sharedMesh != null)
		{
			string str = WrapName(sharedMesh.name, isFile: true);
			string str2 = WrapName(AssetDatabase.GetAssetPath(sharedMesh.GetInstanceID()).Split('.')[0], isFile: false) + "-" + str;
			str2 += ".lm";
			string key = string_exportPath + "/" + str2;
			while (true)
			{
				if (dictionary_3.ContainsKey(key))
				{
					if (!(dictionary_3[key].sharedMesh != sharedMesh))
					{
						break;
					}
					str2 = str2.Remove(str2.Length - 3, 3);
					str2 += "-copy.lm";
					key = string_exportPath + "/" + str2;
					continue;
				}
				dictionary_3.Add(key, component);
				break;
			}
			class16_0.AddString("meshPath", str2);
		}
		else
		{
			Debug.LogWarning("LayaAir3D Warning(Code:1001) : " + gameObject_0.name + "'s MeshFilter Component Mesh data can't be null!");
		}
	}

	private static void Export_Animator(GameObject gameObject_0, ExportDataItem class16_0, List<string> list_2)
	{
		ExportDataItem export_animatorData = new ExportDataItem(ExportDataItem.Enum0.Object);
		new ExportDataItem(ExportDataItem.Enum0.Object);
		new ExportDataItem(ExportDataItem.Enum0.Object);
		new ExportDataItem(ExportDataItem.Enum0.Object);
		ExportDataItem export_layers = new ExportDataItem(ExportDataItem.Enum0.Array);
		export_animatorData.AddString("type", "Animator");
		Animator component = gameObject_0.GetComponent<Animator>();
		_ = component.avatar;
		export_animatorData.Add_Class16("layers", export_layers);
		Export_AnimatorLayers(gameObject_0, export_layers, bool_compress_anim);
		if (component.cullingMode == AnimatorCullingMode.AlwaysAnimate)
		{
			export_animatorData.AddNumber_Int("cullingMode", 0);
		}
		else if (component.cullingMode == AnimatorCullingMode.CullCompletely)
		{
			export_animatorData.AddNumber_Int("cullingMode", 2);
		}
		else
		{
			export_animatorData.AddNumber_Int("cullingMode", 0);
		}
		AnimatorController animatorController = component.runtimeAnimatorController as AnimatorController;
		if ((bool)animatorController)
		{
			Motion motion = animatorController.layers[0].stateMachine.defaultState.motion;
			export_animatorData.AddBoolean("playOnWake", motion ? true : false);
		}
		class16_0.Add_ArrayData(export_animatorData);
	}

	private static void smethod_20(AnimationCurve animationCurve_0, ExportDataItem class16_0, string string_13, string string_14)
	{
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Array);
		if (animationCurve_0 != null && animationCurve_0.length > 0)
		{
			class16_0.Add_Class16(string_13, @class);
			ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Array);
			ExportDataItem class3 = new ExportDataItem(ExportDataItem.Enum0.Object);
			for (int i = 0; i < animationCurve_0.length; i++)
			{
				class3.method_46();
				class2.Add_ArrayData(class3);
				class3.method_18("key", animationCurve_0[i].time);
				class3.method_18("value", animationCurve_0[i].value);
			}
			@class.Add_Class16(string_14, class2);
		}
	}

	private static void Export_ParticleSystem(GameObject gameObject_0, ExportDataItem class16_0)
	{
		ParticleSystem component = gameObject_0.GetComponent<ParticleSystem>();
		ParticleSystemRenderer component2 = gameObject_0.GetComponent<ParticleSystemRenderer>();
		int num = 0;
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Object);
		class16_0.Add_Class16("main", @class);
		ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Object);
		ExportDataItem class3 = new ExportDataItem(ExportDataItem.Enum0.Object);
		ExportDataItem class4 = new ExportDataItem(ExportDataItem.Enum0.Object);
		ExportDataItem class5 = new ExportDataItem(ExportDataItem.Enum0.Object);
		class2.AddBoolean("isPerformanceMode", bool_2: true);
		if (component.main.duration != 5f)
		{
			class2.method_18("duration", component.main.duration);
		}
		if (!component.main.loop)
		{
			class2.AddBoolean("looping", component.main.loop);
		}
		if (component.main.prewarm)
		{
			class2.AddBoolean("prewarm", bool_2: false);
		}
		if (component.main.startDelay.mode.ToString() == "Constant")
		{
			num = 0;
		}
		else if (component.main.startDelay.mode.ToString() == "TwoConstants")
		{
			num = 1;
		}
		if (num != 0)
		{
			class2.AddNumber_Int("startDelayType", num);
		}
		if (component.main.startDelay.constant != 0f)
		{
			class2.method_18("startDelay", component.main.startDelay.constant);
		}
		if (component.main.startDelay.constantMin != 0f)
		{
			class2.method_18("startDelayMin", component.main.startDelay.constantMin);
		}
		if (component.main.startDelay.constantMax != 0f)
		{
			class2.method_18("startDelayMax", component.main.startDelay.constantMax);
		}
		if (component.main.startLifetime.mode.ToString() == "Constant")
		{
			num = 0;
		}
		else if (component.main.startLifetime.mode.ToString() == "Curves")
		{
			num = 1;
		}
		else if (component.main.startLifetime.mode.ToString() == "TwoConstants")
		{
			num = 2;
		}
		else if (component.main.startLifetime.mode.ToString() == "MinMaxCurves")
		{
			num = 3;
		}
		if (num != 0)
		{
			class2.AddNumber_Int("startLifetimeType", num);
		}
		if (component.main.startLifetime.constant != 5f)
		{
			class2.method_18("startLifetimeConstant", component.main.startLifetime.constant);
		}
		if (component.main.startLifetime.constantMin != 0f)
		{
			class2.method_18("startLifetimeConstantMin", component.main.startLifetime.constantMin);
		}
		if (component.main.startLifetime.constantMax != 5f)
		{
			class2.method_18("startLifetimeConstantMax", component.main.startLifetime.constantMax);
		}
		smethod_20(component.main.startLifetime.curve, class4, "startLifetimeGradient", "startLifetimes");
		smethod_20(component.main.startLifetime.curveMin, class4, "startLifetimeGradientMin", "startLifetimes");
		smethod_20(component.main.startLifetime.curveMax, class4, "startLifetimeGradientMax", "startLifetimes");
		if (component.main.startSpeed.mode.ToString() == "Constant")
		{
			num = 0;
		}
		else if (component.main.startSpeed.mode.ToString() == "Curve")
		{
			num = 1;
		}
		else if (component.main.startSpeed.mode.ToString() == "TwoConstants")
		{
			num = 2;
		}
		else if (component.main.startSpeed.mode.ToString() == "TwoCurves")
		{
			num = 3;
		}
		if (num != 0)
		{
			class2.AddNumber_Int("startSpeedType", num);
		}
		if (component.main.startSpeed.constant != 5f)
		{
			class2.method_18("startSpeedConstant", component.main.startSpeed.constant);
		}
		if (component.main.startSpeed.constantMin != 0f)
		{
			class2.method_18("startSpeedConstantMin", component.main.startSpeed.constantMin);
		}
		if (component.main.startSpeed.constantMax != 5f)
		{
			class2.method_18("startSpeedConstantMax", component.main.startSpeed.constantMax);
		}
		if (component.main.startSizeX.mode.ToString() == "Constant")
		{
			num = 0;
		}
		else if (component.main.startSizeX.mode.ToString() == "Curve")
		{
			num = 1;
		}
		else if (component.main.startSizeX.mode.ToString() == "TwoConstants")
		{
			num = 2;
		}
		else if (component.main.startSizeX.mode.ToString() == "TwoCurves")
		{
			num = 3;
		}
		if (component.main.startSize3D)
		{
			class2.AddBoolean("threeDStartSize", component.main.startSize3D);
		}
		if (num != 0)
		{
			class2.AddNumber_Int("startSizeType", num);
		}
		if (component.main.startSize.constant != 1f)
		{
			class2.method_18("startSizeConstant", component.main.startSize.constant);
		}
		if (component.main.startSize.constantMin != 0f)
		{
			class2.method_18("startSizeConstantMin", component.main.startSize.constantMin);
		}
		if (component.main.startSize.constantMax != 1f)
		{
			class2.method_18("startSizeConstantMax", component.main.startSize.constantMax);
		}
		if (component.main.startSizeX.constant != 1f || component.main.startSizeY.constant != 1f || component.main.startSizeZ.constant != 1f)
		{
			ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
			class6.Add_Number_Float(component.main.startSizeX.constant);
			class6.Add_Number_Float(component.main.startSizeY.constant);
			class6.Add_Number_Float(component.main.startSizeZ.constant);
			class3.Add_Class16("startSizeConstantSeparate", class6);
		}
		if (component.main.startSizeX.constantMin != 0f || component.main.startSizeY.constantMin != 0f || component.main.startSizeZ.constantMin != 0f)
		{
			ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
			class6.Add_Number_Float(component.main.startSizeX.constantMin);
			class6.Add_Number_Float(component.main.startSizeY.constantMin);
			class6.Add_Number_Float(component.main.startSizeZ.constantMin);
			class3.Add_Class16("startSizeConstantMinSeparate", class6);
		}
		if (component.main.startSizeX.constantMax != 1f || component.main.startSizeY.constantMax != 1f || component.main.startSizeZ.constantMax != 1f)
		{
			ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
			class6.Add_Number_Float(component.main.startSizeX.constantMax);
			class6.Add_Number_Float(component.main.startSizeY.constantMax);
			class6.Add_Number_Float(component.main.startSizeZ.constantMax);
			class3.Add_Class16("startSizeConstantMaxSeparate", class6);
		}
		if (component.main.startRotation3D)
		{
			class2.AddBoolean("threeDStartRotation", component.main.startRotation3D);
		}
		if (component.main.startRotationX.mode.ToString() == "Constant")
		{
			num = 0;
		}
		else if (component.main.startRotationX.mode.ToString() == "Curve")
		{
			num = 1;
		}
		else if (component.main.startRotationX.mode.ToString() == "TwoConstants")
		{
			num = 2;
		}
		else if (component.main.startRotationX.mode.ToString() == "TwoCurves")
		{
			num = 3;
		}
		if (num != 0)
		{
			class2.AddNumber_Int("startRotationType", num);
		}
		if (component.main.startRotation.constant != 0f)
		{
			class2.method_18("startRotationConstant", component.main.startRotation.constant);
		}
		if (component.main.startRotation.constantMin != 0f)
		{
			class2.method_18("startRotationConstantMin", component.main.startRotation.constantMin);
		}
		if (component.main.startRotation.constantMax != 0f)
		{
			class2.method_18("startRotationConstantMax", component.main.startRotation.constantMax);
		}
		if (component.main.startRotationX.constant != 0f || -1f * component.main.startRotationY.constant != 0f || -1f * component.main.startRotationZ.constant != 0f)
		{
			ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
			class6.Add_Number_Float(component.main.startRotationX.constant);
			class6.Add_Number_Float(-1f * component.main.startRotationY.constant);
			class6.Add_Number_Float(-1f * component.main.startRotationZ.constant);
			class3.Add_Class16("startRotationConstantSeparate", class6);
		}
		if (component.main.startRotationX.constantMin != 0f || component.main.startRotationY.constantMin != 0f || component.main.startRotationZ.constantMin != 0f)
		{
			ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
			class6.Add_Number_Float(component.main.startRotationX.constantMin);
			class6.Add_Number_Float(-1f * component.main.startRotationY.constantMin);
			class6.Add_Number_Float(-1f * component.main.startRotationZ.constantMin);
			class3.Add_Class16("startRotationConstantMinSeparate", class6);
		}
		if (component.main.startRotationX.constantMax != 0f || component.main.startRotationY.constantMax != 0f || component.main.startRotationZ.constantMax != 0f)
		{
			ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
			class6.Add_Number_Float(component.main.startRotationX.constantMax);
			class6.Add_Number_Float(-1f * component.main.startRotationY.constantMax);
			class6.Add_Number_Float(-1f * component.main.startRotationZ.constantMax);
			class3.Add_Class16("startRotationConstantMaxSeparate", class6);
		}
		if (component.main.flipRotation != 0f)
		{
			class2.method_18("randomizeRotationDirection", component.main.flipRotation);
		}
		if (component.main.startColor.mode.ToString() == "Color")
		{
			num = 0;
		}
		else if (component.main.startColor.mode.ToString() == "Gradient")
		{
			num = 1;
		}
		else if (component.main.startColor.mode.ToString() == "TwoColors")
		{
			num = 2;
		}
		else if (component.main.startColor.mode.ToString() == "TwoGradients")
		{
			num = 3;
		}
		else if (component.main.startColor.mode.ToString() == "RandomColor")
		{
			num = 4;
		}
		if (num != 0)
		{
			class2.AddNumber_Int("startColorType", num);
		}
		if (component.main.startColor.color.r != 1f || component.main.startColor.color.g != 1f || component.main.startColor.color.b != 1f || component.main.startColor.color.a != 1f)
		{
			ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
			class6.Add_Number_Float(component.main.startColor.color.r);
			class6.Add_Number_Float(component.main.startColor.color.g);
			class6.Add_Number_Float(component.main.startColor.color.b);
			class6.Add_Number_Float(component.main.startColor.color.a);
			class5.Add_Class16("startColorConstant", class6);
		}
		if (component.main.startColor.colorMin.r != 0f || component.main.startColor.colorMin.g != 0f || component.main.startColor.colorMin.b != 0f || component.main.startColor.colorMin.a != 0f)
		{
			ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
			class6.Add_Number_Float(component.main.startColor.colorMin.r);
			class6.Add_Number_Float(component.main.startColor.colorMin.g);
			class6.Add_Number_Float(component.main.startColor.colorMin.b);
			class6.Add_Number_Float(component.main.startColor.colorMin.a);
			class5.Add_Class16("startColorConstantMin", class6);
		}
		if (component.main.startColor.colorMax.r != 1f || component.main.startColor.colorMax.g != 1f || component.main.startColor.colorMax.b != 1f || component.main.startColor.colorMax.a != 1f)
		{
			ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
			class6.Add_Number_Float(component.main.startColor.colorMax.r);
			class6.Add_Number_Float(component.main.startColor.colorMax.g);
			class6.Add_Number_Float(component.main.startColor.colorMax.b);
			class6.Add_Number_Float(component.main.startColor.colorMax.a);
			class5.Add_Class16("startColorConstantMax", class6);
		}
		if (Physics.gravity.x != 0f || !smethod_76(Physics.gravity.y, -9.81f) || Physics.gravity.z != 0f)
		{
			ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
			class6.Add_Number_Float(Physics.gravity.x);
			class6.Add_Number_Float(Physics.gravity.y);
			class6.Add_Number_Float(Physics.gravity.z);
			class3.Add_Class16("gravity", class6);
		}
		if (component.main.gravityModifier.constant != 0f)
		{
			class2.method_18("gravityModifier", component.main.gravityModifier.constant);
		}
		if (component.main.simulationSpace.ToString() == "World")
		{
			num = 0;
		}
		else if (component.main.simulationSpace.ToString() == "Local")
		{
			num = 1;
		}
		if (num != 1)
		{
			class2.AddNumber_Int("simulationSpace", num);
		}
		if (component.main.simulationSpeed != 1f)
		{
			class2.method_18("simulationSpeed", component.main.simulationSpeed);
		}
		if (component.main.scalingMode.ToString() == "Hierarchy")
		{
			num = 0;
		}
		else if (component.main.scalingMode.ToString() == "Local")
		{
			num = 1;
		}
		else if (component.main.scalingMode.ToString() == "Shape")
		{
			num = 2;
		}
		if (num != 1)
		{
			class2.AddNumber_Int("scaleMode", num);
		}
		if (!component.main.playOnAwake)
		{
			class2.AddBoolean("playOnAwake", component.main.playOnAwake);
		}
		class2.AddNumber_Int("maxParticles", component.main.maxParticles);
		if (!component.useAutoRandomSeed)
		{
			class2.AddBoolean("autoRandomSeed", component.useAutoRandomSeed);
		}
		@class.method_18("randomSeed", component.randomSeed);
		if (class2.list_1.Count != 0)
		{
			@class.Add_Class16("bases", class2);
		}
		if (class3.list_1.Count != 0)
		{
			@class.Add_Class16("vector3s", class3);
		}
		if (class4.list_1.Count != 0)
		{
			@class.Add_Class16("gradientDataNumbers", class4);
		}
		if (class5.list_1.Count != 0)
		{
			@class.Add_Class16("vector4s", class5);
		}
		if (component.emission.enabled)
		{
			ExportDataItem class7 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class16_0.Add_Class16("emission", class7);
			class2 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class2.AddBoolean("enable", component.emission.enabled);
			if (component.emission.rateOverTime.mode.ToString() == "Constant")
			{
				num = 0;
			}
			else if (component.emission.rateOverTime.mode.ToString() == "Curve")
			{
				num = 1;
			}
			else if (component.emission.rateOverTime.mode.ToString() == "TwoConstants")
			{
				num = 2;
			}
			else if (component.emission.rateOverTime.mode.ToString() == "TwoCurves")
			{
				num = 3;
			}
			if (component.emission.rateOverTime.constant != 10f)
			{
				class2.method_18("emissionRate", component.emission.rateOverTime.constant);
			}
			if (class2.list_1.Count != 0)
			{
				class7.Add_Class16("bases", class2);
			}
			ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
			ParticleSystem.Burst[] array = new ParticleSystem.Burst[component.emission.burstCount];
			component.emission.GetBursts(array);
			if (array.Length != 0)
			{
				for (int i = 0; i < array.Length; i++)
				{
					ExportDataItem class8 = new ExportDataItem(ExportDataItem.Enum0.Object);
					class8.method_18("time", array[i].time);
					class8.AddNumber_Int("min", array[i].minCount);
					class8.AddNumber_Int("max", array[i].maxCount);
					class6.Add_ArrayData(class8);
				}
				class7.Add_Class16("bursts", class6);
			}
		}
		if (component.shape.enabled)
		{
			ExportDataItem class9 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class16_0.Add_Class16("shape", class9);
			class2 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class3 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class4 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class5 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class2.AddBoolean("enable", component.shape.enabled);
			if (!(component.shape.shapeType.ToString() == "Sphere") 
                && !(component.shape.shapeType.ToString() == "SphereShell"))
			{
				if (!(component.shape.shapeType.ToString() == "Hemisphere") 
                    && !(component.shape.shapeType.ToString() == "HemisphereShell"))
				{
					if (!(component.shape.shapeType.ToString() == "Cone") 
                        && !(component.shape.shapeType.ToString() == "ConeShell") 
                        && !(component.shape.shapeType.ToString() == "ConeBase")
                        && !(component.shape.shapeType.ToString() == "ConeBaseShell") 
                        && !(component.shape.shapeType.ToString() == "ConeVolume") 
                        && !(component.shape.shapeType.ToString() == "ConeVolumeShell"))
					{
						if (component.shape.shapeType.ToString() == "Box")
						{
							num = 3;
						}
						else if (component.shape.shapeType.ToString() == "Mesh")
						{
							num = 4;
						}
						else if (component.shape.shapeType.ToString() == "MeshRenderer")
						{
							num = 5;
						}
						else if (component.shape.shapeType.ToString() == "SkinnedMeshRenderer")
						{
							num = 6;
						}
						else if (!(component.shape.shapeType.ToString() == "Circle") && !(component.shape.shapeType.ToString() == "CircleEdge"))
						{
							if (component.shape.shapeType.ToString() == "SingleSidedEdge")
							{
								num = 8;
							}
						}
						else
						{
							num = 7;
						}
					}
					else
					{
						num = 2;
					}
				}
				else
				{
					num = 1;
				}
			}
			else
			{
				num = 0;
			}
			class9.AddNumber_Int("shapeType", num);
			if (component.shape.radius != 1f)
			{
				class2.method_18("radius", component.shape.radius);
			}
			if (component.shape.shapeType.ToString() == "SphereShell" || (component.shape.shapeType.ToString() == "Sphere" && component.shape.radiusThickness == 0f))
			{
				class2.AddBoolean("emitFromShell", bool_2: true);
			}
			if (component.shape.randomDirectionAmount != 0f)
			{
				class2.method_18("randomDirection", component.shape.randomDirectionAmount);
			}
			if (component.shape.shapeType.ToString() == "HemisphereShell" || (component.shape.shapeType.ToString() == "Hemisphere" && component.shape.radiusThickness == 0f))
			{
				class2.AddBoolean("emitFromShell", bool_2: true);
			}
			if (component.shape.angle != 25f)
			{
				class2.method_18("angle", component.shape.angle * (float)Math.PI / 180f);
			}
			if (component.shape.length != 5f)
			{
				class2.method_18("length", component.shape.length);
			}
			num = -1;
			if (component.shape.shapeType.ToString() == "Cone")
			{
				num = 0;
			}
			else if (!(component.shape.shapeType.ToString() == "ConeShell") && (!(component.shape.shapeType.ToString() == "Cone") || component.shape.radiusThickness != 0f))
			{
				if (component.shape.shapeType.ToString() == "ConeVolume")
				{
					num = 2;
				}
				else if (component.shape.shapeType.ToString() == "ConeVolumeShell" || (component.shape.shapeType.ToString() == "ConeVolume" && component.shape.radiusThickness == 0f))
				{
					num = 3;
				}
			}
			else
			{
				num = 1;
			}
			if (num != -1)
			{
				class2.AddNumber_Int("emitType", num);
			}
			if (component.shape.scale.x != 1f)
			{
				class2.method_18("x", component.shape.scale.x);
			}
			if (component.shape.scale.y != 1f)
			{
				class2.method_18("y", component.shape.scale.y);
			}
			if (component.shape.scale.z != 1f)
			{
				class2.method_18("z", component.shape.scale.z);
			}
			if (component.shape.arc != 360f)
			{
				class2.method_18("arc", (float)((double)(component.shape.arc / 180f) * Math.PI));
			}
			if (component.shape.shapeType.ToString() == "CircleEdge" || (component.shape.shapeType.ToString() == "Circle" && component.shape.radiusThickness == 0f))
			{
				class2.AddBoolean("emitFromEdge", bool_2: true);
			}
			if (class2.list_1.Count != 0)
			{
				class9.Add_Class16("bases", class2);
			}
		}
		if (component.velocityOverLifetime.enabled)
		{
			ExportDataItem class10 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class16_0.Add_Class16("velocityOverLifetime", class10);
			class2 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class2.AddBoolean("enable", component.velocityOverLifetime.enabled);
			if (component.velocityOverLifetime.space.ToString() == "Local")
			{
				num = 0;
			}
			else if (component.velocityOverLifetime.space.ToString() == "World")
			{
				num = 1;
			}
			class2.AddNumber_Int("space", num);
			ExportDataItem class11 = new ExportDataItem(ExportDataItem.Enum0.Object);
			if (component.velocityOverLifetime.x.mode.ToString() == "Constant")
			{
				num = 0;
			}
			else if (component.velocityOverLifetime.x.mode.ToString() == "Curve")
			{
				num = 1;
			}
			else if (component.velocityOverLifetime.x.mode.ToString() == "TwoConstants")
			{
				num = 2;
			}
			else if (component.velocityOverLifetime.x.mode.ToString() == "TwoCurves")
			{
				num = 3;
			}
			class11.AddNumber_Int("type", num);
			if (component.velocityOverLifetime.x.constant != 0f || component.velocityOverLifetime.y.constant != 0f || component.velocityOverLifetime.z.constant != 0f)
			{
				ExportDataItem class12 = new ExportDataItem(ExportDataItem.Enum0.Array);
				class12.Add_Number_Float(component.velocityOverLifetime.x.constant * -1f);
				class12.Add_Number_Float(component.velocityOverLifetime.y.constant);
				class12.Add_Number_Float(component.velocityOverLifetime.z.constant);
				class11.Add_Class16("constant", class12);
			}
			smethod_62(component.velocityOverLifetime.x, class11, "gradientX", "velocitys", 0, component.velocityOverLifetime.x.curveMultiplier, -1f);
			smethod_62(component.velocityOverLifetime.y, class11, "gradientY", "velocitys", 0, component.velocityOverLifetime.y.curveMultiplier, 1f);
			smethod_62(component.velocityOverLifetime.z, class11, "gradientZ", "velocitys", 0, component.velocityOverLifetime.z.curveMultiplier, 1f);
			if (component.velocityOverLifetime.x.constantMin != 0f || component.velocityOverLifetime.y.constantMin != 0f || component.velocityOverLifetime.z.constantMin != 0f)
			{
				ExportDataItem class12 = new ExportDataItem(ExportDataItem.Enum0.Array);
				class12.Add_Number_Float(component.velocityOverLifetime.x.constantMin * -1f);
				class12.Add_Number_Float(component.velocityOverLifetime.y.constantMin);
				class12.Add_Number_Float(component.velocityOverLifetime.z.constantMin);
				class11.Add_Class16("constantMin", class12);
			}
			if (component.velocityOverLifetime.x.constantMax != 0f || component.velocityOverLifetime.y.constantMax != 0f || component.velocityOverLifetime.z.constantMax != 0f)
			{
				ExportDataItem class12 = new ExportDataItem(ExportDataItem.Enum0.Array);
				class12.Add_Number_Float(component.velocityOverLifetime.x.constantMax * -1f);
				class12.Add_Number_Float(component.velocityOverLifetime.y.constantMax);
				class12.Add_Number_Float(component.velocityOverLifetime.z.constantMax);
				class11.Add_Class16("constantMax", class12);
			}
			smethod_62(component.velocityOverLifetime.x, class11, "gradientXMin", "velocitys", -1, component.velocityOverLifetime.x.curveMultiplier, -1f);
			smethod_62(component.velocityOverLifetime.x, class11, "gradientXMax", "velocitys", 1, component.velocityOverLifetime.x.curveMultiplier, -1f);
			smethod_62(component.velocityOverLifetime.y, class11, "gradientYMin", "velocitys", -1, component.velocityOverLifetime.y.curveMultiplier, 1f);
			smethod_62(component.velocityOverLifetime.y, class11, "gradientYMax", "velocitys", 1, component.velocityOverLifetime.y.curveMultiplier, 1f);
			smethod_62(component.velocityOverLifetime.z, class11, "gradientZMin", "velocitys", -1, component.velocityOverLifetime.z.curveMultiplier, 1f);
			smethod_62(component.velocityOverLifetime.z, class11, "gradientZMax", "velocitys", 1, component.velocityOverLifetime.z.curveMultiplier, 1f);
			if (class2.list_1.Count != 0)
			{
				class10.Add_Class16("bases", class2);
			}
			if (class11.list_1.Count != 0)
			{
				class10.Add_Class16("velocity", class11);
			}
		}
		if (component.limitVelocityOverLifetime.enabled)
		{
			Debug.LogWarning("LayaAir3D Warning(Code:3040) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support Limit_Velocity_Over_Lifetime Module !");
		}
		if (component.inheritVelocity.enabled)
		{
			Debug.LogWarning("LayaAir3D Warning(Code:3050) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support Inherit_Velocity Module !");
		}
		if (component.forceOverLifetime.enabled)
		{
			Debug.LogWarning("LayaAir3D Warning(Code:3060) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support Force_Over_Lifetime Module !");
		}
		if (component.colorOverLifetime.enabled)
		{
			ExportDataItem class13 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class16_0.Add_Class16("colorOverLifetime", class13);
			class2 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class2.AddBoolean("enable", component.colorOverLifetime.enabled);
			ExportDataItem class11 = new ExportDataItem(ExportDataItem.Enum0.Object);
			if (component.colorOverLifetime.color.mode.ToString() == "Gradient")
			{
				num = 1;
			}
			else if (component.colorOverLifetime.color.mode.ToString() == "TwoGradients")
			{
				num = 3;
			}
			class11.AddNumber_Int("type", num);
			if (component.colorOverLifetime.color.color.r != 0f || component.colorOverLifetime.color.color.g != 0f || component.colorOverLifetime.color.color.b != 0f || component.colorOverLifetime.color.color.a != 0f)
			{
				ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
				class6.Add_Number_Float(component.colorOverLifetime.color.color.r);
				class6.Add_Number_Float(component.colorOverLifetime.color.color.g);
				class6.Add_Number_Float(component.colorOverLifetime.color.color.b);
				class6.Add_Number_Float(component.colorOverLifetime.color.color.a);
				class11.Add_Class16("constant", class6);
			}
			smethod_63(component.colorOverLifetime.color.gradient, class11, "gradient");
			if (component.colorOverLifetime.color.colorMin.r != 0f || component.colorOverLifetime.color.colorMin.g != 0f || component.colorOverLifetime.color.colorMin.b != 0f || component.colorOverLifetime.color.colorMin.a != 0f)
			{
				ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
				class6.Add_Number_Float(component.colorOverLifetime.color.colorMin.r);
				class6.Add_Number_Float(component.colorOverLifetime.color.colorMin.g);
				class6.Add_Number_Float(component.colorOverLifetime.color.colorMin.b);
				class6.Add_Number_Float(component.colorOverLifetime.color.colorMin.a);
				class11.Add_Class16("constantMin", class6);
			}
			if (component.colorOverLifetime.color.colorMax.r != 0f || component.colorOverLifetime.color.colorMax.g != 0f || component.colorOverLifetime.color.colorMax.b != 0f || component.colorOverLifetime.color.colorMax.a != 0f)
			{
				ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
				class6.Add_Number_Float(component.colorOverLifetime.color.colorMax.r);
				class6.Add_Number_Float(component.colorOverLifetime.color.colorMax.g);
				class6.Add_Number_Float(component.colorOverLifetime.color.colorMax.b);
				class6.Add_Number_Float(component.colorOverLifetime.color.colorMax.a);
				class11.Add_Class16("constantMax", class6);
			}
			smethod_63(component.colorOverLifetime.color.gradientMin, class11, "gradientMin");
			smethod_63(component.colorOverLifetime.color.gradientMax, class11, "gradientMax");
			if (class2.list_1.Count != 0)
			{
				class13.Add_Class16("bases", class2);
			}
			if (class11.list_1.Count != 0)
			{
				class13.Add_Class16("color", class11);
			}
		}
		if (component.colorBySpeed.enabled)
		{
			Debug.LogWarning("LayaAir3D Warning(Code:3080) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support Color_By_Speed Module !");
		}
		if (component.sizeOverLifetime.enabled)
		{
			ExportDataItem class14 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class16_0.Add_Class16("sizeOverLifetime", class14);
			class2 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class2.AddBoolean("enable", component.sizeOverLifetime.enabled);
			ExportDataItem class11 = new ExportDataItem(ExportDataItem.Enum0.Object);
			if (component.sizeOverLifetime.size.mode.ToString() == "Curve")
			{
				num = 0;
			}
			else if (component.sizeOverLifetime.size.mode.ToString() == "TwoConstants")
			{
				num = 1;
			}
			else if (component.sizeOverLifetime.size.mode.ToString() == "TwoCurves")
			{
				num = 2;
			}
			class11.AddNumber_Int("type", num);
			if (component.sizeOverLifetime.separateAxes)
			{
				class11.AddBoolean("separateAxes", component.sizeOverLifetime.separateAxes);
			}
			smethod_62(component.sizeOverLifetime.size, class11, "gradient", "sizes", 0, component.sizeOverLifetime.size.curveMultiplier, 1f, bool_17: true);
			smethod_62(component.sizeOverLifetime.x, class11, "gradientX", "sizes", 0, component.sizeOverLifetime.x.curveMultiplier, 1f, bool_17: true);
			smethod_62(component.sizeOverLifetime.y, class11, "gradientY", "sizes", 0, component.sizeOverLifetime.y.curveMultiplier, 1f, bool_17: true);
			smethod_62(component.sizeOverLifetime.z, class11, "gradientZ", "sizes", 0, component.sizeOverLifetime.z.curveMultiplier, 1f, bool_17: true);
			if (component.sizeOverLifetime.size.constantMin != 0f)
			{
				class11.method_18("constantMin", component.sizeOverLifetime.size.constantMin);
			}
			if (component.sizeOverLifetime.size.constantMax != 0f)
			{
				class11.method_18("constantMax", component.sizeOverLifetime.size.constantMax);
			}
			if (component.sizeOverLifetime.x.constantMin != 0f || component.sizeOverLifetime.y.constantMin != 0f || component.sizeOverLifetime.z.constantMin != 0f)
			{
				ExportDataItem class12 = new ExportDataItem(ExportDataItem.Enum0.Array);
				class12.Add_Number_Float(component.sizeOverLifetime.x.constantMin);
				class12.Add_Number_Float(component.sizeOverLifetime.y.constantMin);
				class12.Add_Number_Float(component.sizeOverLifetime.z.constantMin);
				class11.Add_Class16("constantMinSeparate", class12);
			}
			if (component.sizeOverLifetime.x.constantMax != 0f || component.sizeOverLifetime.y.constantMax != 0f || component.sizeOverLifetime.z.constantMax != 0f)
			{
				ExportDataItem class12 = new ExportDataItem(ExportDataItem.Enum0.Array);
				class12.Add_Number_Float(component.sizeOverLifetime.x.constantMax);
				class12.Add_Number_Float(component.sizeOverLifetime.y.constantMax);
				class12.Add_Number_Float(component.sizeOverLifetime.z.constantMax);
				class11.Add_Class16("constantMaxSeparate", class12);
			}
			smethod_62(component.sizeOverLifetime.size, class11, "gradientMin", "sizes", -1, component.sizeOverLifetime.size.curveMultiplier, 1f, bool_17: true);
			smethod_62(component.sizeOverLifetime.size, class11, "gradientMax", "sizes", 1, component.sizeOverLifetime.size.curveMultiplier, 1f, bool_17: true);
			smethod_62(component.sizeOverLifetime.x, class11, "gradientXMin", "sizes", -1, 1f, 1f, bool_17: true);
			smethod_62(component.sizeOverLifetime.x, class11, "gradientXMax", "sizes", 1, 1f, 1f, bool_17: true);
			smethod_62(component.sizeOverLifetime.y, class11, "gradientYMin", "sizes", -1, 1f, 1f, bool_17: true);
			smethod_62(component.sizeOverLifetime.y, class11, "gradientYMax", "sizes", 1, 1f, 1f, bool_17: true);
			smethod_62(component.sizeOverLifetime.z, class11, "gradientZMin", "sizes", -1, 1f, 1f, bool_17: true);
			smethod_62(component.sizeOverLifetime.z, class11, "gradientZMax", "sizes", 1, 1f, 1f, bool_17: true);
			if (class2.list_1.Count != 0)
			{
				class14.Add_Class16("bases", class2);
			}
			if (class11.list_1.Count != 0)
			{
				class14.Add_Class16("size", class11);
			}
		}
		if (component.sizeBySpeed.enabled)
		{
			Debug.LogWarning("LayaAir3D Warning(Code:3100) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support Size_By_Speed Module !");
		}
		if (component.rotationOverLifetime.enabled)
		{
			ExportDataItem class15 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class16_0.Add_Class16("rotationOverLifetime", class15);
			class2 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class2.AddBoolean("enable", component.rotationOverLifetime.enabled);
			ExportDataItem class11 = new ExportDataItem(ExportDataItem.Enum0.Object);
			if (component.rotationOverLifetime.z.mode.ToString() == "Constant")
			{
				num = 0;
			}
			else if (component.rotationOverLifetime.z.mode.ToString() == "Curve")
			{
				num = 1;
			}
			else if (component.rotationOverLifetime.z.mode.ToString() == "TwoConstants")
			{
				num = 2;
			}
			else if (component.rotationOverLifetime.z.mode.ToString() == "TwoCurves")
			{
				num = 3;
			}
			class11.AddNumber_Int("type", num);
			if (component.rotationOverLifetime.separateAxes)
			{
				class11.AddBoolean("separateAxes", component.rotationOverLifetime.separateAxes);
			}
			if (component.rotationOverLifetime.z.constant != (float)Math.PI / 4f)
			{
				class11.method_18("constant", component.rotationOverLifetime.z.constant);
			}
			if (component.rotationOverLifetime.z.constantMin != 0f)
			{
				class11.method_18("constantMin", component.rotationOverLifetime.z.constantMin);
			}
			if (component.rotationOverLifetime.z.constantMax != (float)Math.PI / 4f)
			{
				class11.method_18("constantMax", component.rotationOverLifetime.z.constantMax);
			}
			if (component.rotationOverLifetime.x.constant != 0f || component.rotationOverLifetime.y.constant != 0f || component.rotationOverLifetime.z.constant != (float)Math.PI / 4f)
			{
				ExportDataItem class12 = new ExportDataItem(ExportDataItem.Enum0.Array);
				class12.Add_Number_Float(component.rotationOverLifetime.x.constant);
				class12.Add_Number_Float(-1f * component.rotationOverLifetime.y.constant);
				class12.Add_Number_Float(-1f * component.rotationOverLifetime.z.constant);
				class11.Add_Class16("constantSeparate", class12);
			}
			if (component.rotationOverLifetime.x.constantMin != 0f || component.rotationOverLifetime.y.constantMin != 0f || component.rotationOverLifetime.z.constantMin != 0f)
			{
				ExportDataItem class12 = new ExportDataItem(ExportDataItem.Enum0.Array);
				class12.Add_Number_Float(component.rotationOverLifetime.x.constantMin);
				class12.Add_Number_Float(component.rotationOverLifetime.y.constantMin);
				class12.Add_Number_Float(component.rotationOverLifetime.z.constantMin);
				class11.Add_Class16("constantMinSeparate", class12);
			}
			if (component.rotationOverLifetime.x.constantMax != 0f || component.rotationOverLifetime.y.constantMax != 0f || component.rotationOverLifetime.z.constantMax != (float)Math.PI / 4f)
			{
				ExportDataItem class12 = new ExportDataItem(ExportDataItem.Enum0.Array);
				class12.Add_Number_Float(component.rotationOverLifetime.x.constantMax);
				class12.Add_Number_Float(component.rotationOverLifetime.y.constantMax);
				class12.Add_Number_Float(component.rotationOverLifetime.z.constantMax);
				class11.Add_Class16("constantMaxSeparate", class12);
			}
			smethod_62(component.rotationOverLifetime.z, class11, "gradient", "angularVelocitys", 0, component.rotationOverLifetime.z.curveMultiplier * 180f / (float)Math.PI, 1f);
			smethod_62(component.rotationOverLifetime.x, class11, "gradientX", "angularVelocitys", 0, component.rotationOverLifetime.x.curveMultiplier * 180f / (float)Math.PI, 1f);
			smethod_62(component.rotationOverLifetime.y, class11, "gradientY", "angularVelocitys", 0, component.rotationOverLifetime.y.curveMultiplier * 180f / (float)Math.PI, -1f);
			smethod_62(component.rotationOverLifetime.z, class11, "gradientZ", "angularVelocitys", 0, component.rotationOverLifetime.z.curveMultiplier * 180f / (float)Math.PI, -1f);
			smethod_62(component.rotationOverLifetime.z, class11, "gradientMin", "angularVelocitys", -1, component.rotationOverLifetime.z.curveMultiplier * 180f / (float)Math.PI, 1f);
			smethod_62(component.rotationOverLifetime.z, class11, "gradientMax", "angularVelocitys", 1, component.rotationOverLifetime.z.curveMultiplier * 180f / (float)Math.PI, 1f);
			smethod_62(component.rotationOverLifetime.z, class11, "gradientXMin", "angularVelocitys", -1, component.rotationOverLifetime.x.curveMultiplier * 180f / (float)Math.PI, 1f);
			smethod_62(component.rotationOverLifetime.z, class11, "gradientXMax", "angularVelocitys", 1, component.rotationOverLifetime.x.curveMultiplier * 180f / (float)Math.PI, 1f);
			smethod_62(component.rotationOverLifetime.z, class11, "gradientYMin", "angularVelocitys", -1, component.rotationOverLifetime.y.curveMultiplier * 180f / (float)Math.PI, 1f);
			smethod_62(component.rotationOverLifetime.z, class11, "gradientYMax", "angularVelocitys", 1, component.rotationOverLifetime.y.curveMultiplier * 180f / (float)Math.PI, 1f);
			smethod_62(component.rotationOverLifetime.z, class11, "gradientZMin", "angularVelocitys", -1, component.rotationOverLifetime.z.curveMultiplier * 180f / (float)Math.PI, 1f);
			smethod_62(component.rotationOverLifetime.z, class11, "gradientZMax", "angularVelocitys", 1, component.rotationOverLifetime.z.curveMultiplier * 180f / (float)Math.PI, 1f);
			if (class2.list_1.Count != 0)
			{
				class15.Add_Class16("bases", class2);
			}
			if (class11.list_1.Count != 0)
			{
				class15.Add_Class16("angularVelocity", class11);
			}
		}
		if (component.rotationBySpeed.enabled)
		{
			Debug.LogWarning("LayaAir3D Warning(Code:3120) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support Rotation_By_Speed Module !", gameObject_0);
		}
		if (component.externalForces.enabled)
		{
			Debug.LogWarning("LayaAir3D Warning(Code:3130) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support External_Forces Module !", gameObject_0);
		}
		if (component.noise.enabled)
		{
			Debug.LogWarning("LayaAir3D Warning(Code:3140) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support Noise Module !", gameObject_0);
		}
		if (component.collision.enabled)
		{
			Debug.LogWarning("LayaAir3D Warning(Code:3150) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support Collision Module !", gameObject_0);
		}
		if (component.trigger.enabled)
		{
			Debug.LogWarning("LayaAir3D Warning(Code:3160) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support Trigger Module !", gameObject_0);
		}
		if (component.subEmitters.enabled)
		{
			Debug.LogWarning("LayaAir3D Warning(Code:3170) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support SubEmitters Module !", gameObject_0);
		}
		if (component.textureSheetAnimation.enabled)
		{
			ExportDataItem class16 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class16_0.Add_Class16("textureSheetAnimation", class16);
			class2 = new ExportDataItem(ExportDataItem.Enum0.Object);
			ExportDataItem class17 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class2.AddBoolean("enable", component.textureSheetAnimation.enabled);
			if (component.textureSheetAnimation.numTilesX != 1 || component.textureSheetAnimation.numTilesY != 1)
			{
				ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
				class17.Add_Class16("tiles", class6);
				class6.Add_Number_Int(component.textureSheetAnimation.numTilesX);
				class6.Add_Number_Int(component.textureSheetAnimation.numTilesY);
			}
			float num2 = 0f;
			switch (component.textureSheetAnimation.animation)
			{
			case ParticleSystemAnimationType.SingleRow:
				num = 1;
				num2 = component.textureSheetAnimation.numTilesX;
				break;
			default:
				Debug.LogWarning("unknown type.");
				break;
			case ParticleSystemAnimationType.WholeSheet:
				num = 0;
				num2 = component.textureSheetAnimation.numTilesX * component.textureSheetAnimation.numTilesY;
				break;
			}
			float float_ = num2 * component.textureSheetAnimation.frameOverTime.curveMultiplier;
			if (num != 0)
			{
				class2.AddNumber_Int("type", num);
			}
			if (!component.textureSheetAnimation.useRandomRow)
			{
				class2.AddBoolean("randomRow", component.textureSheetAnimation.useRandomRow);
			}
			if (component.textureSheetAnimation.rowIndex != 0)
			{
				class2.AddNumber_Int("rowIndex", component.textureSheetAnimation.rowIndex);
			}
			ExportDataItem class11 = new ExportDataItem(ExportDataItem.Enum0.Object);
			if (component.textureSheetAnimation.frameOverTime.mode.ToString() == "Constant")
			{
				num = 0;
			}
			else if (component.textureSheetAnimation.frameOverTime.mode.ToString() == "Curve")
			{
				num = 1;
			}
			else if (component.textureSheetAnimation.frameOverTime.mode.ToString() == "TwoConstants")
			{
				num = 2;
			}
			else if (component.textureSheetAnimation.frameOverTime.mode.ToString() == "TwoCurves")
			{
				num = 3;
			}
			class11.AddNumber_Int("type", num);
			if (component.textureSheetAnimation.frameOverTime.constant * num2 != 0f)
			{
				class11.method_18("constant", component.textureSheetAnimation.frameOverTime.constant * num2);
			}
			smethod_62(component.textureSheetAnimation.frameOverTime, class11, "overTime", "frames", 0, float_, 1f, bool_17: true);
			if (component.textureSheetAnimation.frameOverTime.constantMin * num2 != 0f)
			{
				class11.method_18("constantMin", component.textureSheetAnimation.frameOverTime.constantMin * num2);
			}
			if (component.textureSheetAnimation.frameOverTime.constantMax * num2 != 0f)
			{
				class11.method_18("constantMax", component.textureSheetAnimation.frameOverTime.constantMax * num2);
			}
			smethod_62(component.textureSheetAnimation.frameOverTime, class11, "overTimeMin", "frames", -1, float_, 1f);
			smethod_62(component.textureSheetAnimation.frameOverTime, class11, "overTimeMax", "frames", 1, float_, 1f, bool_17: true);
			ExportDataItem class18 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class18.AddNumber_Int("type", 0);
			if (component.textureSheetAnimation.startFrame.constant != 0f)
			{
				class18.method_18("constant", component.textureSheetAnimation.startFrame.constant * num2);
			}
			if (component.textureSheetAnimation.startFrame.constantMin != 0f)
			{
				class18.method_18("constantMin", component.textureSheetAnimation.startFrame.constantMin * num2);
			}
			if (component.textureSheetAnimation.startFrame.constantMax != 0f)
			{
				class18.method_18("constantMax", component.textureSheetAnimation.startFrame.constantMax * num2);
			}
			if (component.textureSheetAnimation.cycleCount != 1)
			{
				class2.AddNumber_Int("cycles", component.textureSheetAnimation.cycleCount);
			}
			if (!component.textureSheetAnimation.enabled)
			{
				class2.AddNumber_Int("enableUVChannels", 0);
			}
			if (component.textureSheetAnimation.uvChannelMask.ToString() != "-1")
			{
				class2.AddString("enableUVChannelsTip", component.textureSheetAnimation.uvChannelMask.ToString());
			}
			if (class2.list_1.Count != 0)
			{
				class16.Add_Class16("bases", class2);
			}
			if (class17.list_1.Count != 0)
			{
				class16.Add_Class16("vector2s", class17);
			}
			if (class11.list_1.Count != 0)
			{
				class16.Add_Class16("frame", class11);
			}
			if (class18.list_1.Count != 0)
			{
				class16.Add_Class16("startFrame", class18);
			}
		}
		if (component.lights.enabled)
		{
			Debug.LogWarning("LayaAir3D Warning(Code:3190) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support Lights Module !");
		}
		if (component.trails.enabled)
		{
			Debug.LogWarning("LayaAir3D Warning(Code:3200) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support Trails Module !");
		}
		if (component.customData.enabled)
		{
			Debug.LogWarning("LayaAir3D Warning(Code:3014) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support CustomData Module !");
		}
		ExportDataItem class19 = new ExportDataItem(ExportDataItem.Enum0.Object);
		class16_0.Add_Class16("renderer", class19);
		class2 = new ExportDataItem(ExportDataItem.Enum0.Object);
		ExportDataItem class20 = new ExportDataItem(ExportDataItem.Enum0.Object);
		int num3 = ((!(component2.renderMode.ToString() == "Billboard")) ? ((component2.renderMode.ToString() == "Stretch") ? 1 : ((component2.renderMode.ToString() == "HorizontalBillboard") ? 2 : ((component2.renderMode.ToString() == "VerticalBillboard") ? 3 : ((component2.renderMode.ToString() == "Mesh") ? 4 : 0)))) : 0);
		if (num3 != 0)
		{
			class2.AddNumber_Int("renderMode", num3);
		}
		if (component2.cameraVelocityScale != 0f)
		{
			class2.method_18("stretchedBillboardCameraSpeedScale", component2.cameraVelocityScale);
		}
		if (component2.velocityScale != 0f)
		{
			class2.method_18("stretchedBillboardSpeedScale", component2.velocityScale);
		}
		if (component2.lengthScale != 2f)
		{
			class2.method_18("stretchedBillboardLengthScale", component2.lengthScale);
		}
		if (component2.sortingFudge != 0f)
		{
			class2.method_18("sortingFudge", component2.sortingFudge);
		}
		Material sharedMaterial = gameObject_0.GetComponent<Renderer>().sharedMaterial;
		new ExportDataItem(ExportDataItem.Enum0.Array);
		if (sharedMaterial != null)
		{
			string str = WrapName(AssetDatabase.GetAssetPath(sharedMaterial.GetInstanceID()).Split('.')[0], isFile: false) + ".lmat";
			string string_ = string_exportPath + "/" + str;
			new ExportDataItem(ExportDataItem.Enum0.Object);
			class20.AddString("material", str);
			string name = sharedMaterial.shader.name;
			if (name != "LayaAir3D/Particle/ShurikenParticle")
			{
				Debug.LogWarning("LayaAir3D Warning(Code:2002) : " + gameObject_0.name + " dose's match " + name + " Shader, Must use ShurikenParticle Shader！");
			}
			smethod_45(sharedMaterial, string_, "ShurikenParticle");
		}
		if (num3 == 4)
		{
			Mesh mesh = gameObject_0.GetComponent<ParticleSystemRenderer>().mesh;
			if (mesh != null)
			{
				string str2 = WrapName(mesh.name, isFile: true);
				string str3 = WrapName(AssetDatabase.GetAssetPath(mesh.GetInstanceID()).Split('.')[0], isFile: false) + "-" + str2 + ".lm";
				string text = string_exportPath + "/" + str3;
				class20.AddString("mesh", str3);
				if (!File.Exists(text))
				{
					_DoExportMesh(mesh, text, bool_Compress_mesh);
				}
			}
			else
			{
				class20.AddString("mesh", "");
				Debug.LogWarning("LayaAir3D Warning(Code:1001) : " + gameObject_0.name + "'s MeshFilter Component Mesh data can't be null!");
			}
		}
		if (class2.list_1.Count != 0)
		{
			class19.Add_Class16("bases", class2);
		}
		if (class20.list_1.Count != 0)
		{
			class19.Add_Class16("resources", class20);
		}
	}

	private static void Export_Terrain(GameObject gameObject_0, ExportDataItem class16_0)
	{
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Array);
		Terrain component = gameObject_0.GetComponent<Terrain>();
		if (bool_ConvertTerrainToMesh)
		{
			smethod_42(gameObject_0, class16_0, 3);
			smethod_43(gameObject_0, class16_0);
		}
		else
		{
			smethod_61(string_exportPath, class16_0);
		}
		if (component.lightmapIndex > -1)
		{
			class16_0.AddNumber_Int("lightmapIndex", component.lightmapIndex);
			class16_0.Add_Class16("lightmapScaleOffset", @class);
			@class.Add_Number_Float(component.lightmapScaleOffset.x);
			@class.Add_Number_Float(component.lightmapScaleOffset.y);
			@class.Add_Number_Float(component.lightmapScaleOffset.z);
			@class.Add_Number_Float(component.lightmapScaleOffset.w);
		}
	}

	private static void Export_Collider(GameObject gameObject_0, ExportDataItem class16_0)
	{
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Object);
		class16_0.Add_ArrayData(@class);
		@class.AddString("type", "PhysicsCollider");
		@class.method_18("restitution", 0f);
		@class.method_18("friction", 0.5f);
		@class.method_18("rollingFriction", 0f);
		ExportDataItem class16_ = new ExportDataItem(ExportDataItem.Enum0.Array);
		@class.Add_Class16("shapes", class16_);
		@class.AddBoolean("isTrigger", smethod_27(gameObject_0, class16_));
	}

	private static void Export_Rigidbody(GameObject gameObject_0, ExportDataItem class16_0)
	{
		Rigidbody component = gameObject_0.GetComponent<Rigidbody>();
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Object);
		class16_0.Add_ArrayData(@class);
		@class.AddString("type", "Rigidbody3D");
		@class.method_18("mass", component.mass);
		@class.AddBoolean("isKinematic", component.isKinematic);
		@class.method_18("restitution", 0f);
		@class.method_18("friction", 0.5f);
		@class.method_18("rollingFriction", 0f);
		@class.method_18("linearDamping", component.drag);
		@class.method_18("angularDamping", component.angularDrag);
		@class.AddBoolean("overrideGravity", !component.useGravity);
		ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class2.Add_Number_Int(0);
		class2.Add_Number_Int(0);
		class2.Add_Number_Int(0);
		@class.Add_Class16("gravity", class2);
		ExportDataItem class16_ = new ExportDataItem(ExportDataItem.Enum0.Array);
		@class.Add_Class16("shapes", class16_);
		@class.AddBoolean("isTrigger", smethod_27(gameObject_0, class16_));
		int constraints = (int)component.constraints;
		ExportDataItem class3 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class3.Add_Number_Int(1 - ((constraints & 2) >> 1));
		class3.Add_Number_Int(1 - ((constraints & 4) >> 2));
		class3.Add_Number_Int(1 - ((constraints & 8) >> 3));
		ExportDataItem class4 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class4.Add_Number_Int(1 - ((constraints & 0x10) >> 4));
		class4.Add_Number_Int(1 - ((constraints & 0x20) >> 5));
		class4.Add_Number_Int(1 - ((constraints & 0x40) >> 6));
		@class.Add_Class16("linearFactor", class3);
		@class.Add_Class16("angularFactor", class4);
	}

	private static void Export_TrailRenderer(GameObject gameObject_0, ExportDataItem class16_0)
	{
		TrailRenderer component = gameObject_0.GetComponent<TrailRenderer>();
		class16_0.method_18("time", component.time);
		class16_0.method_18("minVertexDistance", component.minVertexDistance);
		class16_0.method_18("widthMultiplier", component.widthMultiplier);
		if (component.textureMode == LineTextureMode.Stretch)
		{
			class16_0.AddNumber_Int("textureMode", 0);
		}
		else
		{
			class16_0.AddNumber_Int("textureMode", 1);
		}
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Array);
		class16_0.Add_Class16("widthCurve", @class);
		Keyframe[] keys = component.widthCurve.keys;
		for (int i = 0; i < keys.Length; i++)
		{
			Keyframe keyframe = keys[i];
			ExportDataItem class2;
			if (i == 0 && keyframe.time != 0f)
			{
				class2 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class2.AddNumber_Int("time", 0);
				class2.AddNumber_Int("inTangent", 0);
				class2.AddNumber_Int("outTangent", 0);
				class2.method_18("value", keyframe.value);
				@class.Add_ArrayData(class2);
			}
			class2 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class2.method_18("time", keyframe.time);
			class2.method_18("inTangent", keyframe.inTangent);
			class2.method_18("outTangent", keyframe.inTangent);
			class2.method_18("value", keyframe.value);
			@class.Add_ArrayData(class2);
			if (i == keys.Length - 1 && keyframe.time != 1f)
			{
				class2 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class2.AddNumber_Int("time", 1);
				class2.AddNumber_Int("inTangent", 0);
				class2.AddNumber_Int("outTangent", 0);
				class2.method_18("value", keyframe.value);
				@class.Add_ArrayData(class2);
			}
		}
		ExportDataItem class3 = new ExportDataItem(ExportDataItem.Enum0.Object);
		class16_0.Add_Class16("colorGradient", class3);
		Gradient colorGradient = component.colorGradient;
		if (colorGradient.mode == GradientMode.Blend)
		{
			class3.AddNumber_Int("mode", 0);
		}
		else
		{
			class3.AddNumber_Int("mode", 1);
		}
		ExportDataItem class4 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class3.Add_Class16("colorKeys", class4);
		GradientColorKey[] colorKeys = colorGradient.colorKeys;
		for (int j = 0; j < colorKeys.Length; j++)
		{
			GradientColorKey gradientColorKey = colorKeys[j];
			ExportDataItem class5;
			ExportDataItem class6;
			Color color;
			if (j == 0 && gradientColorKey.time != 0f)
			{
				class5 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class5.AddNumber_Int("time", 0);
				class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
				class5.Add_Class16("value", class6);
				color = gradientColorKey.color;
				class6.Add_Number_Float(color.r);
				class6.Add_Number_Float(color.g);
				class6.Add_Number_Float(color.b);
				class4.Add_ArrayData(class5);
			}
			class5 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class5.method_18("time", gradientColorKey.time);
			class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
			class5.Add_Class16("value", class6);
			color = gradientColorKey.color;
			class6.Add_Number_Float(color.r);
			class6.Add_Number_Float(color.g);
			class6.Add_Number_Float(color.b);
			class4.Add_ArrayData(class5);
			if (j == colorKeys.Length - 1 && gradientColorKey.time != 1f)
			{
				class5 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class5.AddNumber_Int("time", 1);
				class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
				class5.Add_Class16("value", class6);
				color = gradientColorKey.color;
				class6.Add_Number_Float(color.r);
				class6.Add_Number_Float(color.g);
				class6.Add_Number_Float(color.b);
				class4.Add_ArrayData(class5);
			}
		}
		ExportDataItem class7 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class3.Add_Class16("alphaKeys", class7);
		GradientAlphaKey[] alphaKeys = colorGradient.alphaKeys;
		for (int k = 0; k < alphaKeys.Length; k++)
		{
			GradientAlphaKey gradientAlphaKey = alphaKeys[k];
			ExportDataItem class8;
			if (k == 0 && gradientAlphaKey.time != 0f)
			{
				class8 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class8.AddNumber_Int("time", 0);
				class8.method_18("value", gradientAlphaKey.alpha);
				class7.Add_ArrayData(class8);
			}
			class8 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class8.method_18("time", gradientAlphaKey.time);
			class8.method_18("value", gradientAlphaKey.alpha);
			class7.Add_ArrayData(class8);
			if (k == alphaKeys.Length - 1 && gradientAlphaKey.time != 1f)
			{
				class8 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class8.AddNumber_Int("time", 1);
				class8.method_18("value", gradientAlphaKey.alpha);
				class7.Add_ArrayData(class8);
			}
		}
		class16_0.AddNumber_Int("alignment", (int)component.alignment);
		Material[] sharedMaterials = component.sharedMaterials;
		ExportDataItem class9 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class16_0.Add_Class16("materials", class9);
		foreach (Material material in sharedMaterials)
		{
			if (!(material == null))
			{
				string str = WrapName(AssetDatabase.GetAssetPath(material.GetInstanceID()).Split('.')[0], isFile: false) + ".lmat";
				string string_ = string_exportPath + "/" + str;
				string name = material.shader.name;
				if (name != "LayaAir3D/Trail")
				{
					Debug.LogWarning("LayaAir3D Warning(Code:2003) : " + gameObject_0.name + " dose's match " + name + "Shader, Must use Trail Shader！");
				}
				ExportDataItem class10 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class10.AddString("type", "Laya.TrailMaterial");
				class10.AddString("path", str);
				class9.Add_ArrayData(class10);
				smethod_45(material, string_, "Trail");
			}
		}
	}

	private static void Export_LineRenderer(GameObject gameObject_0, ExportDataItem class16_0)
	{
		LineRenderer component = gameObject_0.GetComponent<LineRenderer>();
		class16_0.AddBoolean("useWorldSpace", component.useWorldSpace);
		class16_0.method_18("widthMultiplier", component.widthMultiplier);
		if (component.textureMode == LineTextureMode.Stretch)
		{
			class16_0.AddNumber_Int("textureMode", 0);
		}
		else
		{
			class16_0.AddNumber_Int("textureMode", 1);
		}
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Object);
		class16_0.Add_Class16("positions", @class);
		@class.AddNumber_Int("size", component.positionCount);
		ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Array);
		@class.Add_Class16("values", class2);
		for (int i = 0; i < component.positionCount; i++)
		{
			ExportDataItem class3 = new ExportDataItem(ExportDataItem.Enum0.Array);
			class2.Add_ArrayData(class3);
			Vector3 position = component.GetPosition(i);
			class3.Add_Number_Float(0f - position.x);
			class3.Add_Number_Float(position.y);
			class3.Add_Number_Float(position.z);
		}
		ExportDataItem class4 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class16_0.Add_Class16("widthCurve", class4);
		Keyframe[] keys = component.widthCurve.keys;
		for (int j = 0; j < keys.Length; j++)
		{
			Keyframe keyframe = keys[j];
			ExportDataItem class5;
			if (j == 0 && keyframe.time != 0f)
			{
				class5 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class5.AddNumber_Int("time", 0);
				class5.AddNumber_Int("inTangent", 0);
				class5.AddNumber_Int("outTangent", 0);
				class5.method_18("value", keyframe.value);
				class4.Add_ArrayData(class5);
			}
			class5 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class5.method_18("time", keyframe.time);
			class5.method_18("inTangent", keyframe.inTangent);
			class5.method_18("outTangent", keyframe.inTangent);
			class5.method_18("value", keyframe.value);
			class4.Add_ArrayData(class5);
			if (j == keys.Length - 1 && keyframe.time != 1f)
			{
				class5 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class5.AddNumber_Int("time", 1);
				class5.AddNumber_Int("inTangent", 0);
				class5.AddNumber_Int("outTangent", 0);
				class5.method_18("value", keyframe.value);
				class4.Add_ArrayData(class5);
			}
		}
		ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Object);
		class16_0.Add_Class16("colorGradient", class6);
		Gradient colorGradient = component.colorGradient;
		if (colorGradient.mode == GradientMode.Blend)
		{
			class6.AddNumber_Int("mode", 0);
		}
		else
		{
			class6.AddNumber_Int("mode", 1);
		}
		ExportDataItem class7 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class6.Add_Class16("colorKeys", class7);
		GradientColorKey[] colorKeys = colorGradient.colorKeys;
		for (int k = 0; k < colorKeys.Length; k++)
		{
			GradientColorKey gradientColorKey = colorKeys[k];
			ExportDataItem class8;
			ExportDataItem class9;
			Color color;
			if (k == 0 && gradientColorKey.time != 0f)
			{
				class8 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class8.AddNumber_Int("time", 0);
				class9 = new ExportDataItem(ExportDataItem.Enum0.Array);
				class8.Add_Class16("value", class9);
				color = gradientColorKey.color;
				class9.Add_Number_Float(color.r);
				class9.Add_Number_Float(color.g);
				class9.Add_Number_Float(color.b);
				class7.Add_ArrayData(class8);
			}
			class8 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class8.method_18("time", gradientColorKey.time);
			class9 = new ExportDataItem(ExportDataItem.Enum0.Array);
			class8.Add_Class16("value", class9);
			color = gradientColorKey.color;
			class9.Add_Number_Float(color.r);
			class9.Add_Number_Float(color.g);
			class9.Add_Number_Float(color.b);
			class7.Add_ArrayData(class8);
			if (k == colorKeys.Length - 1 && gradientColorKey.time != 1f)
			{
				class8 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class8.AddNumber_Int("time", 1);
				class9 = new ExportDataItem(ExportDataItem.Enum0.Array);
				class8.Add_Class16("value", class9);
				color = gradientColorKey.color;
				class9.Add_Number_Float(color.r);
				class9.Add_Number_Float(color.g);
				class9.Add_Number_Float(color.b);
				class7.Add_ArrayData(class8);
			}
		}
		ExportDataItem class10 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class6.Add_Class16("alphaKeys", class10);
		GradientAlphaKey[] alphaKeys = colorGradient.alphaKeys;
		for (int l = 0; l < alphaKeys.Length; l++)
		{
			GradientAlphaKey gradientAlphaKey = alphaKeys[l];
			ExportDataItem class11;
			if (l == 0 && gradientAlphaKey.time != 0f)
			{
				class11 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class11.AddNumber_Int("time", 0);
				class11.method_18("value", gradientAlphaKey.alpha);
				class10.Add_ArrayData(class11);
			}
			class11 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class11.method_18("time", gradientAlphaKey.time);
			class11.method_18("value", gradientAlphaKey.alpha);
			class10.Add_ArrayData(class11);
			if (l == alphaKeys.Length - 1 && gradientAlphaKey.time != 1f)
			{
				class11 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class11.AddNumber_Int("time", 1);
				class11.method_18("value", gradientAlphaKey.alpha);
				class10.Add_ArrayData(class11);
			}
		}
		Material[] sharedMaterials = component.sharedMaterials;
		ExportDataItem class12 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class16_0.Add_Class16("materials", class12);
		foreach (Material material in sharedMaterials)
		{
			if (!(material == null))
			{
				string str = WrapName(AssetDatabase.GetAssetPath(material.GetInstanceID()).Split('.')[0], isFile: false) + ".lmat";
				string string_ = string_exportPath + "/" + str;
				string name = material.shader.name;
				if (name != "LayaAir3D/Line")
				{
					Debug.LogWarning("LayaAir3D Warning(Code:2004) : " + gameObject_0.name + " dose's match " + name + "Shader, Must use Line Shader！");
				}
				ExportDataItem class13 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class13.AddString("type", "Laya.LineMaterial");
				class13.AddString("path", str);
				class12.Add_ArrayData(class13);
				smethod_45(material, string_, "Line");
			}
		}
	}

	private static bool smethod_27(GameObject gameObject_0, ExportDataItem class16_0)
	{
		bool result = false;
		BoxCollider[] components = gameObject_0.GetComponents<BoxCollider>();
		foreach (BoxCollider obj in components)
		{
			ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Object);
			ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Array);
			ExportDataItem class3 = new ExportDataItem(ExportDataItem.Enum0.Array);
			@class.AddString("type", "BoxColliderShape");
			Vector3 center = obj.center;
			class2.Add_Number_Float(0f - center.x);
			class2.Add_Number_Float(center.y);
			class2.Add_Number_Float(center.z);
			@class.Add_Class16("center", class2);
			Vector3 size = obj.size;
			class3.Add_Number_Float(size.x);
			class3.Add_Number_Float(size.y);
			class3.Add_Number_Float(size.z);
			@class.Add_Class16("size", class3);
			if (obj.isTrigger)
			{
				result = true;
			}
			class16_0.Add_ArrayData(@class);
		}
		SphereCollider[] components2 = gameObject_0.GetComponents<SphereCollider>();
		foreach (SphereCollider sphereCollider in components2)
		{
			ExportDataItem class4 = new ExportDataItem(ExportDataItem.Enum0.Object);
			ExportDataItem class5 = new ExportDataItem(ExportDataItem.Enum0.Array);
			class4.AddString("type", "SphereColliderShape");
			Vector3 center2 = sphereCollider.center;
			class5.Add_Number_Float(0f - center2.x);
			class5.Add_Number_Float(center2.y);
			class5.Add_Number_Float(center2.z);
			class4.Add_Class16("center", class5);
			class4.method_18("radius", sphereCollider.radius);
			if (sphereCollider.isTrigger)
			{
				result = true;
			}
			class16_0.Add_ArrayData(class4);
		}
		CapsuleCollider[] components3 = gameObject_0.GetComponents<CapsuleCollider>();
		foreach (CapsuleCollider capsuleCollider in components3)
		{
			ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Object);
			ExportDataItem class7 = new ExportDataItem(ExportDataItem.Enum0.Array);
			class6.AddString("type", "CapsuleColliderShape");
			Vector3 center3 = capsuleCollider.center;
			class7.Add_Number_Float(center3.x);
			class7.Add_Number_Float(center3.y);
			class7.Add_Number_Float(center3.z);
			class6.Add_Class16("center", class7);
			class6.method_18("radius", capsuleCollider.radius);
			class6.method_18("height", capsuleCollider.height);
			class6.AddNumber_Int("orientation", capsuleCollider.direction);
			if (capsuleCollider.isTrigger)
			{
				result = true;
			}
			class16_0.Add_ArrayData(class6);
		}
		MeshCollider[] components4 = gameObject_0.GetComponents<MeshCollider>();
		foreach (MeshCollider meshCollider in components4)
		{
			ExportDataItem class8 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class8.AddString("type", "MeshColliderShape");
			Mesh sharedMesh = meshCollider.sharedMesh;
			if (sharedMesh != null)
			{
				string str = WrapName(sharedMesh.name, isFile: true);
				string str2 = WrapName(AssetDatabase.GetAssetPath(sharedMesh.GetInstanceID()).Split('.')[0], isFile: false) + "-" + str;
				str2 += ".lm";
				class8.AddString("mesh", str2);
				string key = string_exportPath + "/" + str2;
				if (!dictionary_2.ContainsKey(key))
				{
					dictionary_2.Add(key, sharedMesh);
				}
			}
			else
			{
				Debug.LogWarning("LayaAir3D Warning(Code:1001) : " + gameObject_0.name + "'s MeshFilter Component Mesh data can't be null!");
			}
			if (meshCollider.isTrigger)
			{
				result = true;
			}
			class16_0.Add_ArrayData(class8);
		}
		return result;
	}

	private static void smethod_28(GameObject gameObject_0, Material[] material_0, ExportDataItem class16_0)
	{
		foreach (Material material in material_0)
		{
			if (material == null)
			{
				continue;
			}
			string matPath = WrapName(AssetDatabase.GetAssetPath(material.GetInstanceID()).Split('.')[0], isFile: false) + ".lmat";
			string matFullPath = LayaMainExport.string_exportPath + "/" + matPath;
			string name = material.shader.name;
			if (name.Split('/')[0] == "LayaAir3D")
			{
				int num = name.Split('/').Length;
				ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Object);
				class16_0.Add_ArrayData(@class);
				string text = name.Split('/')[num - 1];
				switch (text)
				{
				case "BlinnPhong":
					@class.AddString("path", matPath);
					Export_Material(material, matFullPath, text);
					break;
				case "Unlit":
					@class.AddString("path", matPath);
					Export_Material(material, matFullPath, text);
					break;
				case "Effect":
					@class.AddString("path", matPath);
					smethod_45(material, matFullPath, text);
					break;
				case "Water (Primary)":
					@class.AddString("type", "Laya.WaterPrimaryMaterial");
					@class.AddString("path", matPath);
					class16_0.Add_ArrayData(@class);
					smethod_46(material, matFullPath);
					break;
				default:
					@class.AddString("path", matPath);
					export_material(material, matFullPath, "Laya." + text);
					break;
				}
			}
			else
			{
				ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class2.AddString("type", "Laya.BlinnPhongMaterial");
				class2.AddString("path", matPath);
				class16_0.Add_ArrayData(class2);
				string string_2 = "BlinnPhong";
				Export_Material(material, matFullPath, string_2);
				Debug.LogWarning("LayaAir3D Warning(Code:2000) : " + gameObject_0.name + " must use LayaAir3D shader!", gameObject_0);
			}
		}
	}

	private static void Export_FixedJoint(GameObject gameObject_0, ExportDataItem class16_0)
	{
		FixedJoint component = gameObject_0.GetComponent<FixedJoint>();
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Object);
		class16_0.Add_ArrayData(@class);
		@class.AddString("type", "FixedConstraint");
		Rigidbody component2 = gameObject_0.GetComponent<Rigidbody>();
		int num = dictionary_5[component2.gameObject.GetInstanceID().ToString()];
		@class.AddNumber_Int("rigidbodyID", num);
		Rigidbody connectedBody = component.connectedBody;
		if ((bool)connectedBody)
		{
			if (dictionary_5.ContainsKey(connectedBody.gameObject.GetInstanceID().ToString()))
			{
				int num2 = dictionary_5[connectedBody.gameObject.GetInstanceID().ToString()];
				@class.AddNumber_Int("connectRigidbodyID", num2);
			}
			else
			{
				dictionary_5.Add(connectedBody.gameObject.GetInstanceID().ToString(), GenInstanceId());
				@class.AddNumber_Int("connectRigidbodyID", dictionary_5[connectedBody.gameObject.GetInstanceID().ToString()]);
			}
		}
		else
		{
			@class.AddNumber_Int("connectRigidbodyID", -1);
		}
		float f = component.breakForce;
		if (float.IsInfinity(f))
		{
			f = -1f;
		}
		@class.method_18("breakForce", f);
		float f2 = component.breakTorque;
		if (float.IsInfinity(f2))
		{
			f2 = -1f;
		}
		@class.method_18("breakTorque", f2);
		component.connectedBody = null;
		component.connectedBody = connectedBody;
		ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Array);
		@class.Add_Class16("anchor", class2);
		Vector3 anchor = component.anchor;
		class2.Add_Number_Float(anchor.x);
		class2.Add_Number_Float(anchor.y);
		class2.Add_Number_Float(anchor.z);
		ExportDataItem class3 = new ExportDataItem(ExportDataItem.Enum0.Array);
		@class.Add_Class16("connectAnchor", class3);
		Vector3 connectedAnchor = component.connectedAnchor;
		class3.Add_Number_Float(connectedAnchor.x);
		class3.Add_Number_Float(connectedAnchor.y);
		class3.Add_Number_Float(connectedAnchor.z);
	}

	private static void Export_ConfigurableJoint(GameObject gameObject_0, ExportDataItem class16_0)
	{
		ConfigurableJoint component = gameObject_0.GetComponent<ConfigurableJoint>();
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Object);
		class16_0.Add_ArrayData(@class);
		@class.AddString("type", "ConfigurableConstraint");
		Rigidbody component2 = gameObject_0.GetComponent<Rigidbody>();
		int num = dictionary_5[component2.gameObject.GetInstanceID().ToString()];
		@class.AddNumber_Int("rigidbodyID", num);
		Rigidbody connectedBody = component.connectedBody;
		if ((bool)connectedBody)
		{
			if (dictionary_5.ContainsKey(connectedBody.gameObject.GetInstanceID().ToString()))
			{
				int num2 = dictionary_5[connectedBody.gameObject.GetInstanceID().ToString()];
				@class.AddNumber_Int("connectRigidbodyID", num2);
			}
			else
			{
				dictionary_5.Add(connectedBody.gameObject.GetInstanceID().ToString(), GenInstanceId());
				@class.AddNumber_Int("connectRigidbodyID", dictionary_5[connectedBody.gameObject.GetInstanceID().ToString()]);
			}
		}
		else
		{
			@class.AddNumber_Int("connectRigidbodyID", -1);
		}
		component.connectedBody = null;
		component.connectedBody = connectedBody;
		ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Array);
		@class.Add_Class16("anchor", class2);
		Vector3 anchor = component.anchor;
		class2.Add_Number_Float(anchor.x);
		class2.Add_Number_Float(anchor.y);
		class2.Add_Number_Float(anchor.z);
		ExportDataItem class3 = new ExportDataItem(ExportDataItem.Enum0.Array);
		@class.Add_Class16("axis", class3);
		Vector3 axis = component.axis;
		class3.Add_Number_Float(axis.x);
		class3.Add_Number_Float(axis.y);
		class3.Add_Number_Float(axis.z);
		ExportDataItem class4 = new ExportDataItem(ExportDataItem.Enum0.Array);
		@class.Add_Class16("connectAnchor", class4);
		Vector3 connectedAnchor = component.connectedAnchor;
		class4.Add_Number_Float(connectedAnchor.x);
		class4.Add_Number_Float(connectedAnchor.y);
		class4.Add_Number_Float(connectedAnchor.z);
		ExportDataItem class5 = new ExportDataItem(ExportDataItem.Enum0.Array);
		@class.Add_Class16("secondaryAxis", class5);
		Vector3 secondaryAxis = component.secondaryAxis;
		class5.Add_Number_Float(secondaryAxis.x);
		class5.Add_Number_Float(secondaryAxis.y);
		class5.Add_Number_Float(secondaryAxis.z);
		@class.AddNumber_Int("xMotion", (int)component.xMotion);
		@class.AddNumber_Int("yMotion", (int)component.yMotion);
		@class.AddNumber_Int("zMotion", (int)component.zMotion);
		@class.AddNumber_Int("angularXMotion", (int)component.angularXMotion);
		@class.AddNumber_Int("angularYMotion", (int)component.angularYMotion);
		@class.AddNumber_Int("angularZMotion", (int)component.angularZMotion);
		float spring = component.linearLimitSpring.spring;
		@class.method_18("linearLimitSpring", spring);
		float damper = component.linearLimitSpring.damper;
		@class.method_18("linearLimitDamper", damper);
		float limit = component.linearLimit.limit;
		@class.method_18("linearLimit", limit);
		float bounciness = component.linearLimit.bounciness;
		@class.method_18("linearLimitBounciness", bounciness);
		float spring2 = component.angularXLimitSpring.spring;
		@class.method_18("angularXLimitSpring", spring2);
		float damper2 = component.angularXLimitSpring.damper;
		@class.method_18("angularXLimitDamper", damper2);
		float limit2 = component.lowAngularXLimit.limit;
		@class.method_18("lowAngularXLimit", limit2);
		float bounciness2 = component.lowAngularXLimit.bounciness;
		@class.method_18("lowAngularXLimitBounciness", bounciness2);
		float limit3 = component.highAngularXLimit.limit;
		@class.method_18("highAngularXLimit", limit3);
		float bounciness3 = component.highAngularXLimit.bounciness;
		@class.method_18("highAngularXLimitBounciness", bounciness3);
		float spring3 = component.angularYZLimitSpring.spring;
		@class.method_18("angularYZLimitSpring", spring3);
		float damper3 = component.angularYZLimitSpring.damper;
		@class.method_18("angularYZLimitDamper", damper3);
		float limit4 = component.angularYLimit.limit;
		@class.method_18("angularYLimit", limit4);
		float bounciness4 = component.angularYLimit.bounciness;
		@class.method_18("angularYLimitBounciness", bounciness4);
		float limit5 = component.angularZLimit.limit;
		@class.method_18("angularZLimit", limit5);
		float bounciness5 = component.angularZLimit.bounciness;
		@class.method_18("angularZLimitBounciness", bounciness5);
		ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
		@class.Add_Class16("targetPosition", class6);
		Vector3 targetPosition = component.targetPosition;
		class6.Add_Number_Float(targetPosition.x);
		class6.Add_Number_Float(targetPosition.y);
		class6.Add_Number_Float(targetPosition.z);
		ExportDataItem class7 = new ExportDataItem(ExportDataItem.Enum0.Array);
		@class.Add_Class16("targetVelocity", class7);
		Vector3 targetVelocity = component.targetVelocity;
		class7.Add_Number_Float(targetVelocity.x);
		class7.Add_Number_Float(targetVelocity.y);
		class7.Add_Number_Float(targetVelocity.z);
		float f = component.breakForce;
		if (float.IsInfinity(f))
		{
			f = -1f;
		}
		@class.method_18("breakForce", f);
		float f2 = component.breakTorque;
		if (float.IsInfinity(f2))
		{
			f2 = -1f;
		}
		@class.method_18("breakTorque", f2);
	}

	private static bool smethod_31(GameObject gameObject_0)
	{
		Transform parent = gameObject_0.transform.parent;
		if (parent != null)
		{
			if (parent.gameObject.GetComponent<Animator>() == null)
			{
				return smethod_31(parent.gameObject);
			}
			return true;
		}
		return false;
	}

	private static void smethod_32(GameObject gameObject_0, ExportDataItem class16_0, GameObject gameObject_1)
	{
		smethod_71(gameObject_0, bool_17: true);
		bool flag = false;
		if (!gameObject_0.activeSelf && bool_ignorenotactiveobjs)
		{
			return;
		}
		if (gameObject_0.GetComponent<Animator>() != null && smethod_31(gameObject_0) && gameObject_0 != gameObject_1)
		{
			flag = true;
		}
		else if ((smethod_68(gameObject_0, ECMPType.Animator) != gameObject_1 || SeachNeedExportCmps(gameObject_0).IndexOf(ECMPType.Animator) != -1) && gameObject_0 != gameObject_1)
		{
			return;
		}
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Object);
		ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Object);
		ExportDataItem class3 = new ExportDataItem(ExportDataItem.Enum0.Array);
		ExportDataItem class4 = new ExportDataItem(ExportDataItem.Enum0.Array);
		ExportDataItem class5 = new ExportDataItem(ExportDataItem.Enum0.Array);
		Vector3 localPosition = gameObject_0.transform.localPosition;
		Quaternion localRotation = gameObject_0.transform.localRotation;
		Vector3 localScale = gameObject_0.transform.localScale;
		class2.AddString("name", gameObject_0.name);
		@class.Add_Class16("props", class2);
		class3 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class2.Add_Class16("translate", class3);
		class3.Add_Number_Float(localPosition.x * -1f);
		class3.Add_Number_Float(localPosition.y);
		class3.Add_Number_Float(localPosition.z);
		class4 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class2.Add_Class16("rotation", class4);
		class4.Add_Number_Float(localRotation.x * -1f);
		class4.Add_Number_Float(localRotation.y);
		class4.Add_Number_Float(localRotation.z);
		class4.Add_Number_Float(localRotation.w * -1f);
		class5 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class2.Add_Class16("scale", class5);
		class5.Add_Number_Float(localScale.x);
		class5.Add_Number_Float(localScale.y);
		class5.Add_Number_Float(localScale.z);
		if (gameObject_0.transform.childCount > 0)
		{
			ExportDataItem class16_ = new ExportDataItem(ExportDataItem.Enum0.Array);
			@class.Add_Class16("child", class16_);
			if (!flag)
			{
				for (int i = 0; i < gameObject_0.transform.childCount; i++)
				{
					smethod_32(gameObject_0.transform.GetChild(i).gameObject, class16_, gameObject_1);
				}
			}
		}
		else
		{
			@class.Add_Class16("child", new ExportDataItem(ExportDataItem.Enum0.Array));
		}
		class16_0.Add_ArrayData(@class);
	}

	static LayaMainExport()
	{
		
		string_PluginTag = "LayaAir3D UnityPlugin: ";
		dictionary_shaderMap = new Dictionary<string, string>();
		int_1 = 75;
		int_2 = 2;
		int_bakefps = 60;
		bool_keepsocket = false;
		int_6 = 24;
		int_7 = 24;
		float_1 = 0.01f;
		int_8 = new int[7];
		int_9 = 2048;
		int_10 = 0;
		int_11 = 2048;
		int_12 = 0;
		int_13 = 2048;
		int_14 = 0;
		dictionary_1 = new Dictionary<string, TextureInfo>();
		dictionary_2 = new Dictionary<string, Mesh>();
		dictionary_3 = new Dictionary<string, SkinnedMeshRenderer>();
		dictionary_4 = new Dictionary<string, GameObject>();
		class1_0 = new AccountHelper();
		string_4 = "LAYASCENE3D:02";
		string_exportversion = "LAYAHIERARCHY:02";
		string_6 = "LAYAMODEL:0501";
		string_7 = "LAYAMODEL:COMPRESSION_0501";
		string_8 = "LAYAMATERIAL:02";
		string_9 = "LAYAANIMATION:04";
		string_10 = "LAYAANIMATION:COMPRESSION_04";
		string_11 = "LAYAANIMATORTEXTURE:0000";
		string_12 = "LAYACOMPRESSANIMATORTEXTURE:0000";
		int_15 = 0;
		dictionary_5 = new Dictionary<string, int>();
		list_1 = new List<string>();
		dictionary_shaderMap.Add("LayaAir3D/Sky/Cubemap", "Laya.SkyBoxMaterial");
		dictionary_shaderMap.Add("LayaAir3D/Sky/Procedural", "Laya.SkyProceduralMaterial");
		dictionary_shaderMap.Add("LayaAir3D/Sky/Panoramic", "Laya.SkyPanoramicMaterial");
		InitCustomShader();
	}

	private static void InitCustomShader()
	{
		ExportDataItem @class = ExportDataItem.smethod_12(File.ReadAllText("Assets/LayaAir3D/LayaTool/CustomShaderConfig.json"));
		for (int i = 0; i < @class.list_1.Count; i++)
		{
			string key = @class.list_1[i];
			dictionary_shaderMap.Add(key, @class.method_43(key).string_0);
		}
	}

	private static void Export_SkyMat(Material material_0, ExportDataItem class16_0)
	{
		string str = WrapName(AssetDatabase.GetAssetPath(material_0.GetInstanceID()).Split('.')[0], isFile: false) + ".lmat";
		string save_path = LayaMainExport.string_exportPath + "/" + str;
		string name = material_0.shader.name;
		if (name.Split('/')[0] == "LayaAir3D")
		{
			string string_2 = dictionary_shaderMap[name];
			ExportDataItem data_sky = new ExportDataItem(ExportDataItem.Enum0.Object);
			class16_0.Add_Class16("sky", data_sky);
			ExportDataItem sky_mat = new ExportDataItem(ExportDataItem.Enum0.Object);
			data_sky.Add_Class16("material", sky_mat);
			sky_mat.AddString("type", string_2);
			sky_mat.AddString("path", str);
			data_sky.AddString("mesh", (name == "LayaAir3D/Sky/Cubemap") ? "SkyBox" : "SkyDome");
			export_material(material_0, save_path, string_2);
		}
		else
		{
			Debug.LogWarning("LayaAir3D UnityPlugin: unknown Shader" + name + ",please use LayaAir3D shader");
		}
	}

	private static void export_material(Material material_0, string savePath, string matName)
	{
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Object);
		ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Object);
		ExportDataItem class3 = new ExportDataItem(ExportDataItem.Enum0.Array);
		ExportDataItem class4 = new ExportDataItem(ExportDataItem.Enum0.Array);
		ExportDataItem class5 = new ExportDataItem(ExportDataItem.Enum0.Array);
		List<string> list = material_0.shaderKeywords.ToList();
		string name = material_0.name;
		@class.AddString("version", string_8);
		@class.Add_Class16("props", class2);
		class2.AddString("type", matName);
		class2.AddString("name", name);
		class2.Add_Class16("textures", class3);
		class2.Add_Class16("vectors", class4);
		class2.Add_Class16("defines", class5);
		class2.AddNumber_Int("cull", material_0.HasProperty("_Cull") ? material_0.GetInt("_Cull") : 2);
		if (material_0.HasProperty("_SrcBlend"))
		{
			switch (material_0.GetInt("_SrcBlend"))
			{
			default:
				class2.AddNumber_Int("blendSrc", 1);
				break;
			case 0:
				class2.AddNumber_Int("blendSrc", 0);
				break;
			case 1:
				class2.AddNumber_Int("blendSrc", 1);
				break;
			case 2:
				class2.AddNumber_Int("blendSrc", 774);
				break;
			case 3:
				class2.AddNumber_Int("blendSrc", 768);
				break;
			case 4:
				class2.AddNumber_Int("blendSrc", 775);
				break;
			case 5:
				class2.AddNumber_Int("blendSrc", 770);
				break;
			case 6:
				class2.AddNumber_Int("blendSrc", 769);
				break;
			case 7:
				class2.AddNumber_Int("blendSrc", 772);
				break;
			case 8:
				class2.AddNumber_Int("blendSrc", 773);
				break;
			case 9:
				class2.AddNumber_Int("blendSrc", 776);
				break;
			case 10:
				class2.AddNumber_Int("blendSrc", 771);
				break;
			}
		}
		else
		{
			class2.AddNumber_Int("blendSrc", 1);
		}
		if (material_0.HasProperty("_DstBlend"))
		{
			switch (material_0.GetInt("_DstBlend"))
			{
			default:
				class2.AddNumber_Int("blendDst", 0);
				break;
			case 0:
				class2.AddNumber_Int("blendDst", 0);
				break;
			case 1:
				class2.AddNumber_Int("blendDst", 1);
				break;
			case 2:
				class2.AddNumber_Int("blendDst", 774);
				break;
			case 3:
				class2.AddNumber_Int("blendDst", 768);
				break;
			case 4:
				class2.AddNumber_Int("blendDst", 775);
				break;
			case 5:
				class2.AddNumber_Int("blendDst", 770);
				break;
			case 6:
				class2.AddNumber_Int("blendDst", 769);
				break;
			case 7:
				class2.AddNumber_Int("blendDst", 772);
				break;
			case 8:
				class2.AddNumber_Int("blendDst", 773);
				break;
			case 9:
				class2.AddNumber_Int("blendDst", 776);
				break;
			case 10:
				class2.AddNumber_Int("blendDst", 771);
				break;
			}
		}
		else
		{
			class2.AddNumber_Int("blendDst", 0);
		}
		if (!material_0.HasProperty("_SrcBlend") && !material_0.HasProperty("_DstBlend"))
		{
			class2.AddNumber_Int("blend", 0);
		}
		else
		{
			class2.AddNumber_Int("blend", (material_0.GetInt("_DstBlend") != 0 || material_0.GetInt("_SrcBlend") != 1) ? 1 : 0);
		}
		if (material_0.HasProperty("_ZWrite"))
		{
			class2.AddBoolean("depthWrite", (material_0.GetInt("_ZWrite") == 1) ? true : false);
		}
		else
		{
			class2.AddBoolean("depthWrite", bool_2: true);
		}
		if (material_0.HasProperty("_ZTest"))
		{
			switch (material_0.GetInt("_ZTest"))
			{
			default:
				class2.AddNumber_Int("depthTest", 0);
				break;
			case 0:
				class2.AddNumber_Int("depthTest", 0);
				break;
			case 1:
				class2.AddNumber_Int("depthTest", 512);
				break;
			case 2:
				class2.AddNumber_Int("depthTest", 513);
				break;
			case 3:
				class2.AddNumber_Int("depthTest", 514);
				break;
			case 4:
				class2.AddNumber_Int("depthTest", 515);
				break;
			case 5:
				class2.AddNumber_Int("depthTest", 516);
				break;
			case 6:
				class2.AddNumber_Int("depthTest", 517);
				break;
			case 7:
				class2.AddNumber_Int("depthTest", 518);
				break;
			case 8:
				class2.AddNumber_Int("depthTest", 519);
				break;
			}
		}
		else
		{
			class2.AddNumber_Int("depthTest", 515);
		}
		class2.AddNumber_Int("renderQueue", material_0.renderQueue);
		Dictionary<string, string> dictionary = new Dictionary<string, string>();
		dictionary.Add("_Color", "albedoColor");
		dictionary.Add("_EmissionColor", "emissionColor");
		dictionary.Add("_EmissionMap", "emissionTexture");
		dictionary.Add("_EMISSION", "EMISSION");
		Shader shader = material_0.shader;
		bool flag = false;
		if (shader.name == "LayaAir3D/Mesh/PBRStandardMaterial" || shader.name == "LayaAir3D/Mesh/PBRSpecularMaterial")
		{
			flag = true;
		}
		for (int i = 0; i < list.Count; i++)
		{
			string text = ((!flag || !dictionary.ContainsKey(list[i])) ? list[i] : dictionary[list[i]]);
			class5.Add_String(text);
		}
		int j = 0;
		for (int propertyCount = ShaderUtil.GetPropertyCount(shader); j < propertyCount; j++)
		{
			if (ShaderUtil.IsShaderPropertyHidden(shader, j))
			{
				continue;
			}
			ShaderUtil.ShaderPropertyType propertyType = ShaderUtil.GetPropertyType(shader, j);
			string propertyName = ShaderUtil.GetPropertyName(shader, j);
			string str = ((!flag || !dictionary.ContainsKey(propertyName)) ? propertyName : dictionary[propertyName]);
			switch (propertyType)
			{
			case ShaderUtil.ShaderPropertyType.Color:
			{
				ExportDataItem class9 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class9.AddString("name", str);
				ExportDataItem class10 = new ExportDataItem(ExportDataItem.Enum0.Array);
				Color color = material_0.GetColor(propertyName);
				class10.Add_Number_Float(color.r);
				class10.Add_Number_Float(color.g);
				class10.Add_Number_Float(color.b);
				class10.Add_Number_Float(color.a);
				class9.Add_Class16("value", class10);
				class4.Add_ArrayData(class9);
				break;
			}
			case ShaderUtil.ShaderPropertyType.Vector:
			{
				ExportDataItem class7 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class7.AddString("name", str);
				ExportDataItem class8 = new ExportDataItem(ExportDataItem.Enum0.Array);
				Vector4 vector = material_0.GetVector(propertyName);
				class8.Add_Number_Float(vector.x);
				class8.Add_Number_Float(vector.y);
				class8.Add_Number_Float(vector.z);
				class8.Add_Number_Float(vector.w);
				class7.Add_Class16("value", class8);
				class4.Add_ArrayData(class7);
				break;
			}
			case ShaderUtil.ShaderPropertyType.Float:
				class2.method_18(str, material_0.GetFloat(propertyName));
				break;
			case ShaderUtil.ShaderPropertyType.Range:
				class2.method_18(str, material_0.GetFloat(propertyName));
				break;
			case ShaderUtil.ShaderPropertyType.TexEnv:
			{
				ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Object);
				Texture texture = material_0.GetTexture(propertyName);
				if ((bool)texture)
				{
					string assetPath = AssetDatabase.GetAssetPath(texture.GetInstanceID());
					bool flag2 = false;
					if (!string.IsNullOrEmpty(assetPath))
					{
						string a = Path.GetExtension(assetPath).ToLower();
						flag2 = a == ".hdr" || a == ".exr";
					}
					class6.AddString("name", str);
					if (texture is Texture2D)
					{
						Export_Texture(class6, (Texture2D)texture, int_Platformindex, savePath, name, "path", flag2);
					}
					else
					{
						smethod_50((Cubemap)texture, class6, bool_17: true, savePath);
					}
					class3.Add_ArrayData(class6);
					if (flag2)
					{
						class2.AddNumber_Int(str + "DecodeFormat", 1);
					}
				}
				break;
			}
			}
		}
		FSWriterHelper.WriteObj(savePath, @class);
	}

	private static void _DoExportMesh(Mesh mesh_0, string string_13, bool bool_compress = false)
	{
		string item = WrapName(mesh_0.name, isFile: true);
		ushort num = (ushort)mesh_0.subMeshCount;
		int num2 = num + 1;
		FileStream fileStream = FSWriterHelper.CreateFS(string_13);
		ushort num3 = 0;
		string text = "";
		for (int i = 0; i < int_8.Length; i++)
		{
			int_8[i] = 0;
		}
		Vector3[] vertices = mesh_0.vertices;
		Vector3[] normals = mesh_0.normals;
		Color[] colors = mesh_0.colors;
		Vector2[] uv = mesh_0.uv;
		Vector2[] uv2 = mesh_0.uv2;
		Vector4[] tangents = mesh_0.tangents;
		if (vertices != null && vertices.Length != 0)
		{
			int_8[0] = 1;
			text += "POSITION";
			num3 = (ushort)(num3 + 12);
		}
		if (normals != null && normals.Length != 0 && !bool_IgnoreVerticesNormal)
		{
			int_8[1] = 1;
			text += ",NORMAL";
			num3 = (ushort)(num3 + 12);
		}
		if (colors != null && colors.Length != 0 && !bool_IgnoreVerticesColor)
		{
			int_8[2] = 1;
			text += ",COLOR";
			num3 = (ushort)(num3 + 16);
		}
		if (uv != null && uv.Length != 0 && !bool_ignoreverticesUV)
		{
			int_8[3] = 1;
			text += ",UV";
			num3 = (ushort)(num3 + 8);
		}
		if (uv2 != null && uv2.Length != 0 && !bool_ignoreverticesUV)
		{
			int_8[4] = 1;
			text += ",UV1";
			num3 = (ushort)(num3 + 8);
		}
		if (tangents != null && tangents.Length != 0 && !bool_IgnoreVerticesTangent)
		{
			int_8[6] = 1;
			text += ",TANGENT";
			num3 = (ushort)(num3 + 16);
		}
		int[] array = new int[num];
		int[] array2 = new int[num];
		for (int i = 0; i < num; i++)
		{
			int[] indices = mesh_0.GetIndices(i);
			array[i] = indices[0];
			array2[i] = indices.Length;
		}
		long num4 = 0L;
		long num5 = 0L;
		long num6 = 0L;
		long num7 = 0L;
		long num8 = 0L;
		long num9 = 0L;
		long num10 = 0L;
		long num11 = 0L;
		long num12 = 0L;
		long num13 = 0L;
		long num14 = 0L;
		long num15 = 0L;
		long num16 = 0L;
		long[] array3 = new long[num];
		long[] array4 = new long[num];
		long[] array5 = new long[num];
		List<string> list = new List<string>();
		list.Add("MESH");
		list.Add("SUBMESH");
		string text2 = (bool_compress ? string_7 : string_6);
		FSWriterHelper.Write_String(fileStream, text2);
		_ = fileStream.Position;
		num4 = fileStream.Position;
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		num9 = fileStream.Position;
		FSWriterHelper.Write_UnshortArray(fileStream, (ushort)num2);
		for (int i = 0; i < num2; i++)
		{
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		}
		num10 = fileStream.Position;
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		FSWriterHelper.Write_UnshortArray(fileStream, default(ushort));
		num5 = fileStream.Position;
		FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list.IndexOf("MESH"));
		list.Add(item);
		FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list.IndexOf(item));
		FSWriterHelper.Write_UnshortArray(fileStream, 1);
		num7 = fileStream.Position;
		for (int i = 0; i < 1; i++)
		{
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
			list.Add(text);
			FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list.IndexOf(text));
		}
		num8 = fileStream.Position;
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		mesh_0.RecalculateBounds();
		Bounds bounds = mesh_0.bounds;
		FSWriterHelper.Write_FloatArray(fileStream, 0f - bounds.max.x);
		FSWriterHelper.Write_FloatArray(fileStream, bounds.min.y);
		FSWriterHelper.Write_FloatArray(fileStream, bounds.min.z);
		FSWriterHelper.Write_FloatArray(fileStream, 0f - bounds.min.x);
		FSWriterHelper.Write_FloatArray(fileStream, bounds.max.y);
		FSWriterHelper.Write_FloatArray(fileStream, bounds.max.z);
		_ = fileStream.Position;
		FSWriterHelper.Write_UnshortArray(fileStream, default(ushort));
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		num6 = fileStream.Position - num5;
		for (int i = 0; i < num; i++)
		{
			array3[i] = fileStream.Position;
			FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list.IndexOf("SUBMESH"));
			FSWriterHelper.Write_UnshortArray(fileStream, default(ushort));
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
			FSWriterHelper.Write_UnshortArray(fileStream, 1);
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
			array4[i] = fileStream.Position;
			array5[i] = array4[i] - array3[i];
		}
		num11 = fileStream.Position;
		for (int i = 0; i < list.Count; i++)
		{
			FSWriterHelper.Write_String(fileStream, list[i]);
		}
		num12 = fileStream.Position - num11;
		num13 = fileStream.Position;
		if (bool_compress)
		{
			for (int j = 0; j < mesh_0.vertexCount; j++)
			{
				Vector3 vector = vertices[j];
				FSWriterHelper.Write_UnshortArray(fileStream, CompressHelper.smethod_0(0f - vector.x), CompressHelper.smethod_0(vector.y), CompressHelper.smethod_0(vector.z));
				if (int_8[1] == 1)
				{
					Vector3 vector2 = normals[j];
					FSWriterHelper.Write_BytesArray(fileStream, (byte)(((double)(0f - vector2.x) + 1.0) / 2.0 * 255.0), (byte)(((double)vector2.y + 1.0) / 2.0 * 255.0), (byte)(((double)vector2.z + 1.0) / 2.0 * 255.0));
				}
				if (int_8[2] == 1)
				{
					Color color = colors[j];
					FSWriterHelper.Write_BytesArray(fileStream, (byte)(color.r * 255f), (byte)(color.g * 255f), (byte)(color.b * 255f), (byte)(color.a * 255f));
				}
				if (int_8[3] == 1)
				{
					Vector2 vector3 = uv[j];
					FSWriterHelper.Write_UnshortArray(fileStream, CompressHelper.smethod_0(vector3.x), CompressHelper.smethod_0(0f - vector3.y + 1f));
				}
				if (int_8[4] == 1)
				{
					Vector2 vector4 = uv2[j];
					FSWriterHelper.Write_UnshortArray(fileStream, CompressHelper.smethod_0(vector4.x), CompressHelper.smethod_0(0f - vector4.y + 1f));
				}
				if (int_8[6] == 1)
				{
					Vector4 vector5 = tangents[j];
					FSWriterHelper.Write_BytesArray(fileStream, (byte)(((double)(0f - vector5.x) + 1.0) / 2.0 * 255.0), (byte)(((double)vector5.y + 1.0) / 2.0 * 255.0), (byte)(((double)vector5.z + 1.0) / 2.0 * 255.0), (byte)(((double)vector5.w + 1.0) / 2.0 * 255.0));
				}
			}
		}
		else
		{
			for (int j = 0; j < mesh_0.vertexCount; j++)
			{
				Vector3 vector = vertices[j];
				FSWriterHelper.Write_FloatArray(fileStream, 0f - vector.x, vector.y, vector.z);
				if (int_8[1] == 1)
				{
					Vector3 vector2 = normals[j];
					FSWriterHelper.Write_FloatArray(fileStream, 0f - vector2.x, vector2.y, vector2.z);
				}
				if (int_8[2] == 1)
				{
					Color color = colors[j];
					FSWriterHelper.Write_FloatArray(fileStream, color.r, color.g, color.b, color.a);
				}
				if (int_8[3] == 1)
				{
					Vector2 vector3 = uv[j];
					FSWriterHelper.Write_FloatArray(fileStream, vector3.x, vector3.y * -1f + 1f);
				}
				if (int_8[4] == 1)
				{
					Vector2 vector4 = uv2[j];
					FSWriterHelper.Write_FloatArray(fileStream, vector4.x, vector4.y * -1f + 1f);
				}
				if (int_8[6] == 1)
				{
					Vector4 vector5 = tangents[j];
					FSWriterHelper.Write_FloatArray(fileStream, 0f - vector5.x, vector5.y, vector5.z, vector5.w);
				}
			}
		}
		num14 = fileStream.Position - num13;
		num15 = fileStream.Position;
		int[] triangles = mesh_0.triangles;
		if (mesh_0.indexFormat == IndexFormat.UInt32 && mesh_0.vertexCount > 65535)
		{
			for (int j = 0; j < triangles.Length; j++)
			{
				FSWriterHelper.Write_UnitArray(fileStream, (uint)triangles[j]);
			}
		}
		else
		{
			for (int j = 0; j < triangles.Length; j++)
			{
				FSWriterHelper.Write_UnshortArray(fileStream, (ushort)triangles[j]);
			}
		}
		num16 = fileStream.Position - num15;
		uint num17 = 0u;
		uint num18 = 0u;
		uint num19 = 0u;
		for (int i = 0; i < num; i++)
		{
			fileStream.Position = array3[i] + 4L;
			if (num == 1)
			{
				num17 = 0u;
				num18 = (uint)((mesh_0.indexFormat == IndexFormat.UInt32) ? (num16 / 4L) : (num16 / 2L));
			}
			else if (i == 0)
			{
				num17 = num19;
				num18 = (uint)array2[i];
			}
			else if (i < num - 1)
			{
				num17 = num19;
				num18 = (uint)array2[i];
			}
			else
			{
				num17 = num19;
				num18 = (uint)array2[i];
			}
			FSWriterHelper.Write_UnitArray(fileStream, num17);
			FSWriterHelper.Write_UnitArray(fileStream, num18);
			num19 += num18;
			fileStream.Position += 2L;
			FSWriterHelper.Write_UnitArray(fileStream, num17);
			FSWriterHelper.Write_UnitArray(fileStream, num18);
		}
		fileStream.Position = num7;
		FSWriterHelper.Write_UnitArray(fileStream, (uint)(num13 - num11));
		FSWriterHelper.Write_UnitArray(fileStream, (uint)mesh_0.vertexCount);
		fileStream.Position = num8;
		FSWriterHelper.Write_UnitArray(fileStream, (uint)(num15 - num11));
		FSWriterHelper.Write_UnitArray(fileStream, (uint)num16);
		fileStream.Position = num10;
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list.Count);
		_ = fileStream.Position;
		fileStream.Position = num9 + 2L;
		FSWriterHelper.Write_UnitArray(fileStream, (uint)num5);
		FSWriterHelper.Write_UnitArray(fileStream, (uint)num6);
		for (int i = 0; i < num; i++)
		{
			FSWriterHelper.Write_UnitArray(fileStream, (uint)array3[i]);
			FSWriterHelper.Write_UnitArray(fileStream, (uint)array5[i]);
		}
		fileStream.Position = num4;
		FSWriterHelper.Write_UnitArray(fileStream, (uint)num11);
		FSWriterHelper.Write_UnitArray(fileStream, (uint)(num11 + num12 + num14 + num16 + array5[0]));
		fileStream.Close();
	}

	private static void _DoExport_SkinnedMeshRenderer(SkinnedMeshRenderer skinnedMeshRenderer_0, string string_13, bool bool_compress = false)
	{
		if (bool_bakeAnim)
		{
			int_7 = int.MaxValue;
		}
		else
		{
			int_7 = int_6;
		}
		Mesh sharedMesh = skinnedMeshRenderer_0.sharedMesh;
		ushort num = 1;
		ushort num2 = (ushort)sharedMesh.subMeshCount;
		ushort num3 = 0;
		string text = "";
		string item = WrapName(sharedMesh.name, isFile: true);
		for (int i = 0; i < int_8.Length; i++)
		{
			int_8[i] = 0;
		}
		if (sharedMesh.vertices != null && sharedMesh.vertices.Length != 0)
		{
			int_8[0] = 1;
			text += "POSITION";
			num3 = (ushort)(num3 + 12);
		}
		if (sharedMesh.normals != null && sharedMesh.normals.Length != 0 && !bool_IgnoreVerticesNormal)
		{
			int_8[1] = 1;
			text += ",NORMAL";
			num3 = (ushort)(num3 + 12);
		}
		if (sharedMesh.colors != null && sharedMesh.colors.Length != 0 && !bool_IgnoreVerticesColor)
		{
			int_8[2] = 1;
			text += ",COLOR";
			num3 = (ushort)(num3 + 16);
		}
		if (sharedMesh.uv != null && sharedMesh.uv.Length != 0 && !bool_ignoreverticesUV)
		{
			int_8[3] = 1;
			text += ",UV";
			num3 = (ushort)(num3 + 8);
		}
		if (sharedMesh.uv2 != null && sharedMesh.uv2.Length != 0 && !bool_ignoreverticesUV)
		{
			int_8[4] = 1;
			text += ",UV1";
			num3 = (ushort)(num3 + 8);
		}
		if (sharedMesh.boneWeights != null && sharedMesh.boneWeights.Length != 0)
		{
			int_8[5] = 1;
			text += ",BLENDWEIGHT,BLENDINDICES";
			num3 = (ushort)(num3 + 32);
		}
		if (sharedMesh.tangents != null && sharedMesh.tangents.Length != 0 && !bool_IgnoreVerticesTangent)
		{
			int_8[6] = 1;
			text += ",TANGENT";
			num3 = (ushort)(num3 + 16);
		}
		List<Transform> list = new List<Transform>();
		for (int j = 0; j < skinnedMeshRenderer_0.bones.Length; j++)
		{
			Transform item2 = skinnedMeshRenderer_0.bones[j];
			if (list.IndexOf(item2) == -1)
			{
				list.Add(item2);
			}
		}
		int vertexCount = sharedMesh.vertexCount;
		List<Class32> list2 = new List<Class32>();
		List<int> list3 = new List<int>();
		List<List<int>>[] array = new List<List<int>>[num2];
		List<int>[] array2 = new List<int>[num2];
		List<List<Class33>>[] array3 = new List<List<Class33>>[num2];
		Vector3[] vertices = sharedMesh.vertices;
		Vector3[] normals = sharedMesh.normals;
		Color[] colors = sharedMesh.colors;
		Vector2[] uv = sharedMesh.uv;
		Vector2[] uv2 = sharedMesh.uv2;
		BoneWeight[] boneWeights = sharedMesh.boneWeights;
		Vector4[] tangents = sharedMesh.tangents;
		for (int k = 0; k < vertexCount; k++)
		{
			list2.Add(smethod_65(vertices, normals, colors, uv, uv2, boneWeights, tangents, k));
		}
		if (bool_bakeAnim)
		{
			SkinnedMeshRenderer[] componentsInChildren = skinnedMeshRenderer_0.gameObject.GetComponentInParent<Animator>().gameObject.GetComponentsInChildren<SkinnedMeshRenderer>();
			if (componentsInChildren.ToList().IndexOf(skinnedMeshRenderer_0) < 0)
			{
				Debug.LogError("error find skinnedMeshrender");
			}
			Transform[] bones = skinnedMeshRenderer_0.bones;
			BakeAnimatorHelper.smethod_1(componentsInChildren, out var transform_, out var _);
			List<Transform> list4 = transform_.ToList();
			int[] array4 = new int[bones.Length];
			for (int l = 0; l < bones.Length; l++)
			{
				array4[l] = list4.IndexOf(bones[l]);
			}
			for (int m = 0; m < vertexCount; m++)
			{
				Class32 @class = list2[m];
				@class.vector4_1.x = array4[(int)@class.vector4_1.x];
				@class.vector4_1.y = array4[(int)@class.vector4_1.y];
				@class.vector4_1.z = array4[(int)@class.vector4_1.z];
				@class.vector4_1.w = array4[(int)@class.vector4_1.w];
			}
		}
		int[] array5 = new int[num2];
		int[] array6 = new int[num2];
		int num4 = 0;
		if (bool_bakeAnim)
		{
			int[] triangles = sharedMesh.triangles;
			for (int n = 0; n < triangles.Length; n++)
			{
				list3.Add(triangles[n]);
			}
			for (int num5 = 0; num5 < num2; num5++)
			{
				int[] indices = sharedMesh.GetIndices(num5);
				array5[num5] = indices[0];
				array6[num5] = indices.Length;
				array[num5] = new List<List<int>>();
				array[num5].Add(new List<int>());
				array[num5][0].Add(0);
				array[num5][0].Add(1);
				array[num5][0].Add(2);
				array2[num5] = new List<int>();
				array2[num5].Add(indices.Length);
			}
		}
		else
		{
			for (int num6 = 0; num6 < num2; num6++)
			{
				int[] indices2 = sharedMesh.GetIndices(num6);
				array[num6] = new List<List<int>>();
				array[num6].Add(new List<int>());
				array2[num6] = new List<int>();
				List<List<Class33>> list5 = (array3[num6] = new List<List<Class33>>());
				list5.Add(new List<Class33>());
				List<Class33> list6 = new List<Class33>();
				int num7 = 0;
				for (int num8 = indices2.Length; num7 < num8; num7 += 3)
				{
					Class33 class2 = new Class33();
					class2.class32_0 = list2[indices2[num7]];
					class2.class32_1 = list2[indices2[num7 + 1]];
					class2.class32_2 = list2[indices2[num7 + 2]];
					list6.Add(class2);
				}
				for (int num9 = 0; num9 < list6.Count; num9++)
				{
					Class33 class3 = list6[num9];
					List<int> list7 = smethod_38(class3);
					bool flag = false;
					for (int num10 = 0; num10 < array[num6].Count; num10++)
					{
						List<int> list8 = smethod_39(list7, array[num6][num10]);
						if (list8.Count != 0)
						{
							if (array[num6][num10].Count + list8.Count <= int_7)
							{
								for (int num11 = 0; num11 < list8.Count; num11++)
								{
									array[num6][num10].Add(list8[num11]);
								}
								list5[num10].Add(class3);
								flag = true;
								break;
							}
							continue;
						}
						list5[num10].Add(class3);
						flag = true;
						break;
					}
					if (!flag)
					{
						List<int> list9 = new List<int>();
						List<Class33> list10 = new List<Class33>();
						array[num6].Add(list9);
						list5.Add(list10);
						for (int num12 = 0; num12 < list7.Count; num12++)
						{
							list9.Add(list7[num12]);
						}
						list10.Add(class3);
					}
				}
				for (int num13 = 0; num13 < list5.Count; num13++)
				{
					List<Class33> list11 = list5[num13];
					for (int num14 = 0; num14 < list11.Count; num14++)
					{
						Class33 class4 = list11[num14];
						class4.class32_0 = smethod_41(class4.class32_0, num6, num13, list2);
						class4.class32_1 = smethod_41(class4.class32_1, num6, num13, list2);
						class4.class32_2 = smethod_41(class4.class32_2, num6, num13, list2);
					}
				}
				int num15 = 0;
				for (int num16 = 0; num16 < list5.Count; num16++)
				{
					num15 += list5[num16].Count * 3;
					array2[num6].Add(num15);
				}
			}
			for (int num17 = 0; num17 < num2; num17++)
			{
				List<List<Class33>> list12 = array3[num17];
				for (int num18 = 0; num18 < list12.Count; num18++)
				{
					List<int> list_ = array[num17][num18];
					for (int num19 = 0; num19 < list12[num18].Count; num19++)
					{
						Class33 class5 = list12[num18][num19];
						smethod_40(list_, class5.class32_2);
						smethod_40(list_, class5.class32_1);
						smethod_40(list_, class5.class32_0);
						list3.Add(class5.class32_0.int_0);
						list3.Add(class5.class32_1.int_0);
						list3.Add(class5.class32_2.int_0);
					}
				}
			}
			for (int num20 = 0; num20 < num2; num20++)
			{
				int[] indices3 = sharedMesh.GetIndices(num20);
				array5[num20] = list3[num4];
				array6[num20] = indices3.Length;
				num4 += indices3.Length;
			}
		}
		long num21 = 0L;
		long num22 = 0L;
		long num23 = 0L;
		long num24 = 0L;
		long num25 = 0L;
		long num26 = 0L;
		long num27 = 0L;
		long num28 = 0L;
		long num29 = 0L;
		long num30 = 0L;
		long num31 = 0L;
		long num32 = 0L;
		long num33 = 0L;
		long num34 = 0L;
		long num35 = 0L;
		long num36 = 0L;
		long[] array7 = new long[num2];
		long[] array8 = new long[num2];
		long[] array9 = new long[num2];
		List<string> list13 = new List<string>();
		list13.Add("MESH");
		list13.Add("SUBMESH");
		FileStream fileStream = FSWriterHelper.CreateFS(string_13);
		string text2 = (bool_compress ? string_7 : string_6);
		FSWriterHelper.Write_String(fileStream, text2);
		_ = fileStream.Position;
		num21 = fileStream.Position;
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		num27 = fileStream.Position;
		int num37 = num2 + 1;
		FSWriterHelper.Write_UnshortArray(fileStream, (ushort)num37);
		for (int num38 = 0; num38 < num37; num38++)
		{
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		}
		num28 = fileStream.Position;
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		FSWriterHelper.Write_UnshortArray(fileStream, default(ushort));
		num22 = fileStream.Position;
		FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list13.IndexOf("MESH"));
		list13.Add(item);
		FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list13.IndexOf(item));
		FSWriterHelper.Write_UnshortArray(fileStream, num);
		num24 = fileStream.Position;
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		list13.Add(text);
		FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list13.IndexOf(text));
		num25 = fileStream.Position;
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		sharedMesh.RecalculateBounds();
		Bounds bounds = sharedMesh.bounds;
		FSWriterHelper.Write_FloatArray(fileStream, 0f - bounds.max.x);
		FSWriterHelper.Write_FloatArray(fileStream, bounds.min.y);
		FSWriterHelper.Write_FloatArray(fileStream, bounds.min.z);
		FSWriterHelper.Write_FloatArray(fileStream, 0f - bounds.min.x);
		FSWriterHelper.Write_FloatArray(fileStream, bounds.max.y);
		FSWriterHelper.Write_FloatArray(fileStream, bounds.max.z);
		num26 = fileStream.Position;
		FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list.Count);
		for (int num39 = 0; num39 < list.Count; num39++)
		{
			list13.Add(list[num39].name);
			FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list13.IndexOf(list[num39].name));
		}
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		num23 = fileStream.Position - num22;
		for (int num40 = 0; num40 < num2; num40++)
		{
			array7[num40] = fileStream.Position;
			FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list13.IndexOf("SUBMESH"));
			FSWriterHelper.Write_UnshortArray(fileStream, default(ushort));
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
			FSWriterHelper.Write_UnshortArray(fileStream, (ushort)array[num40].Count);
			for (int num41 = 0; num41 < array[num40].Count; num41++)
			{
				FSWriterHelper.Write_UnitArray(fileStream, default(uint));
				FSWriterHelper.Write_UnitArray(fileStream, default(uint));
				FSWriterHelper.Write_UnitArray(fileStream, default(uint));
				FSWriterHelper.Write_UnitArray(fileStream, default(uint));
			}
			array8[num40] = fileStream.Position;
			array9[num40] = array8[num40] - array7[num40];
		}
		num29 = fileStream.Position;
		for (int num42 = 0; num42 < list13.Count; num42++)
		{
			FSWriterHelper.Write_String(fileStream, list13[num42]);
		}
		num30 = fileStream.Position - num29;
		num31 = fileStream.Position;
		if (bool_compress)
		{
			for (int num43 = 0; num43 < list2.Count; num43++)
			{
				Class32 class6 = list2[num43];
				Vector3 vector3_ = class6.vector3_0;
				FSWriterHelper.Write_UnshortArray(fileStream, CompressHelper.smethod_0(0f - vector3_.x), CompressHelper.smethod_0(vector3_.y), CompressHelper.smethod_0(vector3_.z));
				if (int_8[1] == 1)
				{
					Vector3 vector3_2 = class6.vector3_1;
					FSWriterHelper.Write_BytesArray(fileStream, (byte)(((double)(0f - vector3_2.x) + 1.0) / 2.0 * 255.0), (byte)(((double)vector3_2.y + 1.0) / 2.0 * 255.0), (byte)(((double)vector3_2.z + 1.0) / 2.0 * 255.0));
				}
				if (int_8[2] == 1)
				{
					Color color_ = class6.color_0;
					FSWriterHelper.Write_BytesArray(fileStream, (byte)(color_.r * 255f), (byte)(color_.g * 255f), (byte)(color_.b * 255f), (byte)(color_.a * 255f));
				}
				if (int_8[3] == 1)
				{
					Vector2 vector2_ = class6.vector2_0;
					FSWriterHelper.Write_UnshortArray(fileStream, CompressHelper.smethod_0(vector2_.x), CompressHelper.smethod_0(0f - vector2_.y + 1f));
				}
				if (int_8[4] == 1)
				{
					Vector2 vector2_2 = class6.vector2_1;
					FSWriterHelper.Write_UnshortArray(fileStream, CompressHelper.smethod_0(vector2_2.x), CompressHelper.smethod_0(0f - vector2_2.y + 1f));
				}
				if (int_8[5] == 1)
				{
					Vector4 vector4_ = class6.vector4_0;
					Vector4 vector4_2 = class6.vector4_1;
					FSWriterHelper.Write_BytesArray(fileStream, (byte)(vector4_.x * 255f), (byte)(vector4_.y * 255f), (byte)(vector4_.z * 255f), (byte)(vector4_.w * 255f));
					FSWriterHelper.Write_BytesArray(fileStream, (byte)vector4_2.x, (byte)vector4_2.y, (byte)vector4_2.z, (byte)vector4_2.w);
				}
				if (int_8[6] == 1)
				{
					Vector4 vector4_3 = class6.vector4_2;
					FSWriterHelper.Write_BytesArray(fileStream, (byte)(((double)(0f - vector4_3.x) + 1.0) / 2.0 * 255.0), (byte)(((double)vector4_3.y + 1.0) / 2.0 * 255.0), (byte)(((double)vector4_3.z + 1.0) / 2.0 * 255.0), (byte)(((double)vector4_3.w + 1.0) / 2.0 * 255.0));
				}
			}
		}
		else
		{
			for (int num44 = 0; num44 < list2.Count; num44++)
			{
				Class32 class6 = list2[num44];
				Vector3 vector3_3 = class6.vector3_0;
				FSWriterHelper.Write_FloatArray(fileStream, vector3_3.x * -1f, vector3_3.y, vector3_3.z);
				if (int_8[1] == 1)
				{
					Vector3 vector3_4 = class6.vector3_1;
					FSWriterHelper.Write_FloatArray(fileStream, vector3_4.x * -1f, vector3_4.y, vector3_4.z);
				}
				if (int_8[2] == 1)
				{
					Color color_2 = class6.color_0;
					FSWriterHelper.Write_FloatArray(fileStream, color_2.r, color_2.g, color_2.b, color_2.a);
				}
				if (int_8[3] == 1)
				{
					Vector2 vector2_3 = class6.vector2_0;
					FSWriterHelper.Write_FloatArray(fileStream, vector2_3.x, 0f - vector2_3.y + 1f);
				}
				if (int_8[4] == 1)
				{
					Vector2 vector2_4 = class6.vector2_1;
					FSWriterHelper.Write_FloatArray(fileStream, vector2_4.x, 0f - vector2_4.y + 1f);
				}
				if (int_8[5] == 1)
				{
					Vector4 vector4_4 = class6.vector4_0;
					Vector4 vector4_5 = class6.vector4_1;
					FSWriterHelper.Write_FloatArray(fileStream, vector4_4.x, vector4_4.y, vector4_4.z, vector4_4.w);
					FSWriterHelper.Write_BytesArray(fileStream, (byte)vector4_5.x, (byte)vector4_5.y, (byte)vector4_5.z, (byte)vector4_5.w);
				}
				if (int_8[6] == 1)
				{
					Vector4 vector4_6 = class6.vector4_2;
					FSWriterHelper.Write_FloatArray(fileStream, vector4_6.x * -1f, vector4_6.y, vector4_6.z, vector4_6.w);
				}
			}
		}
		num32 = fileStream.Position - num31;
		num33 = fileStream.Position;
		if (sharedMesh.indexFormat == IndexFormat.UInt32 && list2.Count > 65535)
		{
			for (int num45 = 0; num45 < list3.Count; num45++)
			{
				FSWriterHelper.Write_UnitArray(fileStream, (uint)list3[num45]);
			}
		}
		else
		{
			for (int num46 = 0; num46 < list3.Count; num46++)
			{
				FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list3[num46]);
			}
		}
		num34 = fileStream.Position - num33;
		if (sharedMesh.bindposes != null && sharedMesh.bindposes.Length != 0)
		{
			Matrix4x4[] array10 = new Matrix4x4[sharedMesh.bindposes.Length];
			for (int num47 = 0; num47 < sharedMesh.bindposes.Length; num47++)
			{
				array10[num47] = sharedMesh.bindposes[num47];
				array10[num47] = array10[num47].inverse;
				LayaMathHelper.smethod_0(array10[num47].transpose, out var vector3_5, out var quaternion_, out var vector3_6);
				vector3_6.x *= -1f;
				quaternion_.x *= -1f;
				quaternion_.w *= -1f;
				quaternion_.Normalize();
				array10[num47] = Matrix4x4.TRS(vector3_6, quaternion_, vector3_5);
			}
			num35 = fileStream.Position;
			for (int num48 = 0; num48 < sharedMesh.bindposes.Length; num48++)
			{
				Matrix4x4 inverse = array10[num48].inverse;
				for (int num49 = 0; num49 < 16; num49++)
				{
					FSWriterHelper.Write_FloatArray(fileStream, inverse[num49]);
				}
			}
			num36 = fileStream.Position;
			for (int num50 = 0; num50 < num2; num50++)
			{
				for (int num51 = 0; num51 < array[num50].Count; num51++)
				{
					for (int num52 = 0; num52 < array[num50][num51].Count; num52++)
					{
						FSWriterHelper.Write_UnshortArray(fileStream, (ushort)array[num50][num51][num52]);
					}
				}
			}
			_ = fileStream.Position;
		}
		uint num53 = 0u;
		uint num54 = 0u;
		uint num55 = 0u;
		long num56 = num36 - num29;
		for (int num57 = 0; num57 < num2; num57++)
		{
			fileStream.Position = array7[num57] + 4L;
			if (num2 == 1)
			{
				num53 = 0u;
				num54 = (uint)((sharedMesh.indexFormat == IndexFormat.UInt32) ? (num34 / 4L) : (num34 / 2L));
			}
			else if (num57 == 0)
			{
				num53 = num55;
				num54 = (uint)array6[num57];
			}
			else if (num57 < num2 - 1)
			{
				num53 = num55;
				num54 = (uint)array6[num57];
			}
			else
			{
				num53 = num55;
				num54 = (uint)array6[num57];
			}
			FSWriterHelper.Write_UnitArray(fileStream, num53);
			FSWriterHelper.Write_UnitArray(fileStream, num54);
			num55 += num54;
			fileStream.Position += 2L;
			int num58 = 0;
			for (int num59 = 0; num59 < array[num57].Count; num59++)
			{
				FSWriterHelper.Write_UnitArray(fileStream, (uint)num58 + num53);
				FSWriterHelper.Write_UnitArray(fileStream, (uint)(array2[num57][num59] - num58));
				num58 = array2[num57][num59];
				FSWriterHelper.Write_UnitArray(fileStream, (uint)num56);
				FSWriterHelper.Write_UnitArray(fileStream, (uint)(array[num57][num59].Count * 2));
				num56 += array[num57][num59].Count * 2;
			}
		}
		fileStream.Position = num24;
		FSWriterHelper.Write_UnitArray(fileStream, (uint)(num31 - num29));
		FSWriterHelper.Write_UnitArray(fileStream, (uint)list2.Count);
		fileStream.Position = num25;
		FSWriterHelper.Write_UnitArray(fileStream, (uint)(num33 - num29));
		FSWriterHelper.Write_UnitArray(fileStream, (uint)num34);
		fileStream.Position = num26 + (list.Count + 1) * 2;
		FSWriterHelper.Write_UnitArray(fileStream, (uint)(num35 - num29));
		FSWriterHelper.Write_UnitArray(fileStream, (uint)(num36 - num35));
		fileStream.Position = num28;
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list13.Count);
		_ = fileStream.Position;
		fileStream.Position = num27 + 2L;
		FSWriterHelper.Write_UnitArray(fileStream, (uint)num22);
		FSWriterHelper.Write_UnitArray(fileStream, (uint)num23);
		for (int num60 = 0; num60 < num2; num60++)
		{
			FSWriterHelper.Write_UnitArray(fileStream, (uint)array7[num60]);
			FSWriterHelper.Write_UnitArray(fileStream, (uint)array9[num60]);
		}
		fileStream.Position = num21;
		FSWriterHelper.Write_UnitArray(fileStream, (uint)num29);
		FSWriterHelper.Write_UnitArray(fileStream, (uint)(num29 + num30 + num32 + num34 + array9[0]));
		fileStream.Close();
	}

	private static List<int> smethod_38(Class33 class33_0)
	{
		List<int> list = new List<int>();
		Vector4 vector4_ = class33_0.class32_0.vector4_1;
		Vector4 vector4_2 = class33_0.class32_1.vector4_1;
		Vector4 vector4_3 = class33_0.class32_2.vector4_1;
		if (list.IndexOf((int)vector4_.x) == -1)
		{
			list.Add((int)vector4_.x);
		}
		if (list.IndexOf((int)vector4_.y) == -1)
		{
			list.Add((int)vector4_.y);
		}
		if (list.IndexOf((int)vector4_.z) == -1)
		{
			list.Add((int)vector4_.z);
		}
		if (list.IndexOf((int)vector4_.w) == -1)
		{
			list.Add((int)vector4_.w);
		}
		if (list.IndexOf((int)vector4_2.x) == -1)
		{
			list.Add((int)vector4_2.x);
		}
		if (list.IndexOf((int)vector4_2.y) == -1)
		{
			list.Add((int)vector4_2.y);
		}
		if (list.IndexOf((int)vector4_2.z) == -1)
		{
			list.Add((int)vector4_2.z);
		}
		if (list.IndexOf((int)vector4_2.w) == -1)
		{
			list.Add((int)vector4_2.w);
		}
		if (list.IndexOf((int)vector4_3.x) == -1)
		{
			list.Add((int)vector4_3.x);
		}
		if (list.IndexOf((int)vector4_3.y) == -1)
		{
			list.Add((int)vector4_3.y);
		}
		if (list.IndexOf((int)vector4_3.z) == -1)
		{
			list.Add((int)vector4_3.z);
		}
		if (list.IndexOf((int)vector4_3.w) == -1)
		{
			list.Add((int)vector4_3.w);
		}
		return list;
	}

	private static List<int> smethod_39(List<int> list_2, List<int> list_3)
	{
		List<int> list = new List<int>();
		for (int i = 0; i < list_2.Count; i++)
		{
			if (list_3.IndexOf(list_2[i]) == -1)
			{
				list.Add(list_2[i]);
			}
		}
		return list;
	}

	private static void smethod_40(List<int> list_2, Class32 class32_0)
	{
		if (class32_0.bool_0)
		{
			for (int i = 0; i < 4; i++)
			{
				class32_0.vector4_1[i] = list_2.IndexOf((int)class32_0.vector4_1[i]);
			}
			class32_0.bool_0 = false;
		}
	}

	private static Class32 smethod_41(Class32 class32_0, int int_16, int int_17, List<Class32> list_2)
	{
		if (class32_0.int_1 == -1 && class32_0.int_2 == -1)
		{
			class32_0.int_1 = int_16;
			class32_0.int_2 = int_17;
			return class32_0;
		}
		if (class32_0.int_1 == int_16 && class32_0.int_2 == int_17)
		{
			return class32_0;
		}
		if (class32_0.dictionary_0 == null)
		{
			class32_0.dictionary_0 = new Dictionary<string, int>();
			Class32 @class = new Class32();
			list_2.Add(@class);
			@class.method_0(class32_0);
			@class.int_0 = list_2.Count - 1;
			class32_0.dictionary_0.Add(int_16 + "," + int_17, list_2.Count - 1);
			return @class;
		}
		if (class32_0.dictionary_0.ContainsKey(int_16 + "," + int_17))
		{
			return list_2[class32_0.dictionary_0[int_16 + "," + int_17]];
		}
		Class32 class2 = new Class32();
		list_2.Add(class2);
		class2.method_0(class32_0);
		class2.int_0 = list_2.Count - 1;
		class32_0.dictionary_0.Add(int_16 + "," + int_17, list_2.Count - 1);
		return class2;
	}

	private static void smethod_42(GameObject gameObject_0, ExportDataItem class16_0, int int_16)
	{
		TerrainData terrainData = gameObject_0.GetComponent<Terrain>().terrainData;
		int heightmapWidth = terrainData.heightmapWidth;
		int heightmapHeight = terrainData.heightmapHeight;
		Vector3 size = terrainData.size;
		int num = int_terrainToMeshResolution;
		Vector3 b = new Vector3(size.x / (float)(heightmapWidth - 1) * (float)num, size.y, size.z / (float)(heightmapHeight - 1) * (float)num);
		Vector2 b2 = new Vector2(1f / (float)(heightmapWidth - 1), 1f / (float)(heightmapHeight - 1));
		float[,] heights = terrainData.GetHeights(0, 0, heightmapWidth, heightmapHeight);
		heightmapWidth = (heightmapWidth - 1) / num + 1;
		heightmapHeight = (heightmapHeight - 1) / num + 1;
		Vector3[] array = new Vector3[heightmapWidth * heightmapHeight];
		Vector3[] array2 = new Vector3[heightmapWidth * heightmapHeight];
		Vector2[] array3 = new Vector2[heightmapWidth * heightmapHeight];
		int[] array4 = new int[(heightmapWidth - 1) * (heightmapHeight - 1) * 6];
		for (int i = 0; i < heightmapHeight; i++)
		{
			for (int j = 0; j < heightmapWidth; j++)
			{
				array[i * heightmapWidth + j] = Vector3.Scale(new Vector3(i, heights[j * num, i * num], j), b);
				array3[i * heightmapWidth + j] = Vector2.Scale(new Vector2(j * num, 1f - (float)(i * num)), b2) - new Vector2(0f, 1f / (float)(terrainData.heightmapHeight - 1));
				float x = array3[i * heightmapWidth + j].x;
				float y = array3[i * heightmapWidth + j].y;
				array3[i * heightmapWidth + j] = new Vector2(x * Mathf.Cos((float)Math.PI / 2f) - y * Mathf.Sin((float)Math.PI / 2f), x * Mathf.Sin((float)Math.PI / 2f) + y * Mathf.Cos((float)Math.PI / 2f));
			}
		}
		int num2 = 0;
		for (int k = 0; k < heightmapHeight - 1; k++)
		{
			for (int l = 0; l < heightmapWidth - 1; l++)
			{
				array4[num2++] = k * heightmapWidth + l;
				array4[num2++] = k * heightmapWidth + l + 1;
				array4[num2++] = (k + 1) * heightmapWidth + l;
				array4[num2++] = (k + 1) * heightmapWidth + l;
				array4[num2++] = k * heightmapWidth + l + 1;
				array4[num2++] = (k + 1) * heightmapWidth + l + 1;
			}
		}
		for (int m = 0; m < array.Length; m++)
		{
			List<Vector3> list = new List<Vector3>();
			for (int n = 0; n < array4.Length; n += 3)
			{
				if (array4[n] == m || array4[n + 1] == m || array4[n + 2] == m)
				{
					list.Add(array[array4[n]]);
					list.Add(array[array4[n + 1]]);
					list.Add(array[array4[n + 2]]);
				}
			}
			float num3 = 0f;
			List<float> list2 = new List<float>();
			List<Vector3> list3 = new List<Vector3>();
			for (int num4 = 0; num4 < list.Count; num4 += 3)
			{
				Vector3 a = list[num4];
				Vector3 b3 = list[num4 + 1];
				Vector3 b4 = list[num4 + 2];
				float num5 = Mathf.Sqrt(Mathf.Pow(a.x - b3.x, 2f) + Mathf.Pow(a.y - b3.y, 2f) + Mathf.Pow(a.z - b3.z, 2f));
				float num6 = Mathf.Sqrt(Mathf.Pow(a.x - b4.x, 2f) + Mathf.Pow(a.y - b4.y, 2f) + Mathf.Pow(a.z - b4.z, 2f));
				float num7 = Mathf.Sqrt(Mathf.Pow(b4.x - b3.x, 2f) + Mathf.Pow(b4.y - b3.y, 2f) + Mathf.Pow(b4.z - b3.z, 2f));
				float num8 = (num5 + num6 + num7) / 2f;
				float num9 = Mathf.Sqrt(num8 * (num8 - num5) * (num8 - num6) * (num8 - num7));
				list2.Add(num9);
				num3 += num9;
				list3.Add(Vector3.Cross(a - b3, a - b4).normalized);
			}
			Vector3 vector = default(Vector3);
			for (int num10 = 0; num10 < list3.Count; num10++)
			{
				vector += list3[num10] * list2[num10] / num3;
			}
			array2[m] = vector.normalized;
		}
		int num11 = 65534;
		List<List<Struct0>> list4 = new List<List<Struct0>>();
		List<Struct0> list5 = new List<Struct0>();
		list4.Add(list5);
		List<List<int>> list6 = new List<List<int>>();
		List<int> list7 = new List<int>();
		list6.Add(list7);
		List<int> list8 = new List<int>();
		Struct0 item = default(Struct0);
		for (int num12 = 0; num12 < array4.Length; num12++)
		{
			if (list5.Count == num11)
			{
				list5 = new List<Struct0>();
				list4.Add(list5);
				list7 = new List<int>();
				list6.Add(list7);
				list8 = new List<int>();
			}
			int num13 = array4[num12];
			item.vector3_0 = array[num13];
			item.vector3_1 = array2[num13];
			item.vector2_0 = array3[num13];
			int num14 = list8.IndexOf(num13);
			if (num14 == -1)
			{
				list5.Add(item);
				list7.Add(list5.Count - 1);
				list8.Add(num13);
			}
			else
			{
				list7.Add(num14);
			}
		}
		int count = list4.Count;
		string text = WrapName("terrain_" + gameObject_0.name, isFile: true);
		string str = "terrain/" + text + ".lm";
		class16_0.AddString("meshPath", str);
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Array);
		class16_0.Add_Class16("materials", @class);
		string str2 = WrapName("terrain_" + gameObject_0.name, isFile: true);
		string text2 = "terrain/" + str2 + ".lmat";
		ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Object);
		class2.AddString("type", "Laya.ExtendTerrainMaterial");
		class2.AddString("path", text2);
		for (int num15 = 0; num15 < count; num15++)
		{
			@class.Add_ArrayData(class2);
		}
		string text3 = string_exportPath + "/" + str;
		int num16 = 1 + count;
		ushort num17 = 32;
		string item2 = "POSITION,NORMAL,UV";
		long num18 = 0L;
		long num19 = 0L;
		long num20 = 0L;
		long[] array5 = new long[count];
		long num21 = 0L;
		long num22 = 0L;
		long num23 = 0L;
		long num24 = 0L;
		long num25 = 0L;
		long[] array6 = new long[count];
		long num26 = 0L;
		long num27 = 0L;
		long num28 = 0L;
		long num29 = 0L;
		long[] array7 = new long[count];
		long[] array8 = new long[count];
		long[] array9 = new long[count];
		List<string> list9 = new List<string>
		{
			"MESH",
			"SUBMESH"
		};
		FileStream fileStream = FSWriterHelper.CreateFS(text3);
		string text4 = "LAYAMODEL:0301";
		FSWriterHelper.Write_String(fileStream, text4);
		_ = fileStream.Position;
		num18 = fileStream.Position;
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		num22 = fileStream.Position;
		FSWriterHelper.Write_UnshortArray(fileStream, (ushort)num16);
		for (int num30 = 0; num30 < num16; num30++)
		{
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		}
		num23 = fileStream.Position;
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		FSWriterHelper.Write_UnshortArray(fileStream, default(ushort));
		num19 = fileStream.Position;
		FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list9.IndexOf("MESH"));
		list9.Add(text);
		FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list9.IndexOf(text));
		FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list4.Count);
		list9.Add(item2);
		for (int num30 = 0; num30 < list4.Count; num30++)
		{
			array5[num30] = fileStream.Position;
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
			FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list9.IndexOf(item2));
		}
		num21 = fileStream.Position;
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		_ = fileStream.Position;
		FSWriterHelper.Write_UnshortArray(fileStream, default(ushort));
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		num20 = fileStream.Position - num19;
		for (int num30 = 0; num30 < count; num30++)
		{
			array7[num30] = fileStream.Position;
			FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list9.IndexOf("SUBMESH"));
			FSWriterHelper.Write_UnshortArray(fileStream, default(ushort));
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
			FSWriterHelper.Write_UnshortArray(fileStream, 1);
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
			FSWriterHelper.Write_UnitArray(fileStream, default(uint));
			array8[num30] = fileStream.Position;
			array9[num30] = array8[num30] - array7[num30];
		}
		num24 = fileStream.Position;
		for (int num30 = 0; num30 < list9.Count; num30++)
		{
			FSWriterHelper.Write_String(fileStream, list9[num30]);
		}
		num25 = fileStream.Position - num24;
		num26 = fileStream.Position;
		for (int num30 = 0; num30 < list4.Count; num30++)
		{
			array6[num30] = fileStream.Position;
			List<Struct0> list10 = list4[num30];
			for (int num31 = 0; num31 < list10.Count; num31++)
			{
				Struct0 @struct = list10[num31];
				Vector3 vector3_ = @struct.vector3_0;
				FSWriterHelper.Write_FloatArray(fileStream, vector3_.x * -1f, vector3_.y, vector3_.z);
				Vector3 vector3_2 = @struct.vector3_1;
				FSWriterHelper.Write_FloatArray(fileStream, vector3_2.x * -1f, vector3_2.y, vector3_2.z);
				Vector2 vector2_ = @struct.vector2_0;
				FSWriterHelper.Write_FloatArray(fileStream, vector2_.x, vector2_.y * -1f + 1f);
			}
		}
		num27 = fileStream.Position - num26;
		num28 = fileStream.Position;
		for (int num30 = 0; num30 < list6.Count; num30++)
		{
			List<int> list11 = list6[num30];
			for (int num31 = 0; num31 < list11.Count; num31++)
			{
				FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list11[num31]);
			}
		}
		num29 = fileStream.Position - num28;
		uint num32 = 0u;
		uint num33 = 0u;
		uint num34 = 0u;
		uint num35 = 0u;
		uint num36 = 0u;
		uint num37 = 0u;
		for (int num30 = 0; num30 < count; num30++)
		{
			fileStream.Position = array7[num30] + 2L;
			FSWriterHelper.Write_UnshortArray(fileStream, (ushort)num30);
			num32 = num34;
			num33 = (uint)list4[num30].Count;
			num35 = num37;
			num36 = (uint)list6[num30].Count;
			FSWriterHelper.Write_UnitArray(fileStream, num32);
			FSWriterHelper.Write_UnitArray(fileStream, num33);
			FSWriterHelper.Write_UnitArray(fileStream, num35);
			FSWriterHelper.Write_UnitArray(fileStream, num36);
			num34 += num33;
			num37 += num36;
			fileStream.Position += 2L;
			FSWriterHelper.Write_UnitArray(fileStream, num35);
			FSWriterHelper.Write_UnitArray(fileStream, num36);
		}
		for (int num30 = 0; num30 < list4.Count; num30++)
		{
			fileStream.Position = array5[num30];
			FSWriterHelper.Write_UnitArray(fileStream, (uint)(array6[num30] - num24));
			FSWriterHelper.Write_UnitArray(fileStream, (uint)(list4[num30].Count * num17));
		}
		fileStream.Position = num21;
		FSWriterHelper.Write_UnitArray(fileStream, (uint)(num28 - num24));
		FSWriterHelper.Write_UnitArray(fileStream, (uint)num29);
		fileStream.Position = num23;
		FSWriterHelper.Write_UnitArray(fileStream, default(uint));
		FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list9.Count);
		_ = fileStream.Position;
		fileStream.Position = num22 + 2L;
		FSWriterHelper.Write_UnitArray(fileStream, (uint)num19);
		FSWriterHelper.Write_UnitArray(fileStream, (uint)num20);
		for (int num30 = 0; num30 < count; num30++)
		{
			FSWriterHelper.Write_UnitArray(fileStream, (uint)array7[num30]);
			FSWriterHelper.Write_UnitArray(fileStream, (uint)array9[num30]);
		}
		fileStream.Position = num18;
		FSWriterHelper.Write_UnitArray(fileStream, (uint)num24);
		FSWriterHelper.Write_UnitArray(fileStream, (uint)(num24 + num25 + num27 + num29 + array9[0]));
		fileStream.Close();
	}

	private static void smethod_43(GameObject gameObject_0, ExportDataItem class16_0)
	{
		TerrainData terrainData = gameObject_0.GetComponent<Terrain>().terrainData;
		string str = WrapName("terrain_" + gameObject_0.name, isFile: true);
		string str2 = "terrain/" + str + ".lmat";
		string string_ = string_exportPath + "/" + str2;
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Object);
		ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Object);
		ExportDataItem class3 = new ExportDataItem(ExportDataItem.Enum0.Array);
		ExportDataItem class4 = new ExportDataItem(ExportDataItem.Enum0.Array);
		ExportDataItem class5 = new ExportDataItem(ExportDataItem.Enum0.Array);
		ExportDataItem class16_ = new ExportDataItem(ExportDataItem.Enum0.Array);
		@class.AddString("version", string_8);
		@class.Add_Class16("props", class2);
		class2.AddString("type", "Laya.ExtendTerrainMaterial");
		class2.AddString("name", str);
		class2.Add_Class16("renderStates", class3);
		ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Object);
		class3.Add_ArrayData(class6);
		class6.AddNumber_Int("cull", 2);
		class6.AddNumber_Int("blend", 0);
		class6.AddNumber_Int("srcBlend", 1);
		class6.AddNumber_Int("dstBlend", 0);
		class6.AddBoolean("depthWrite", bool_2: true);
		class6.AddNumber_Int("depthTest", 515);
		class2.AddBoolean("alphaTest", bool_2: false);
		class2.AddNumber_Int("renderQueue", 1);
		class2.Add_Class16("textures", class4);
		class2.Add_Class16("vectors", class5);
		class2.Add_Class16("defines", class16_);
		if (terrainData.alphamapTextures.Length > 0)
		{
			for (int i = 0; i < 1; i++)
			{
				ExportDataItem class7 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class7.AddString("name", "splatAlphaTexture");
				Color[] pixels = terrainData.alphamapTextures[i].GetPixels();
				int num = pixels.Length;
				int num2 = (int)Mathf.Sqrt(num);
				Texture2D texture2D = new Texture2D(num2, num2);
				Color[] array = new Color[num];
				for (int j = 0; j < num; j++)
				{
					array[j] = pixels[j];
					if (array[j].a == 0f)
					{
						array[j].a = 0.03125f;
					}
				}
				texture2D.SetPixels(array);
				texture2D.Apply();
				FileStream fileStream = File.Open(string_exportPath + "/terrain/splatAlphaTexture.png", FileMode.Create);
				new BinaryWriter(fileStream).Write(texture2D.EncodeToPNG());
				fileStream.Close();
				class7.AddString("path", "splatAlphaTexture.png");
				class4.Add_ArrayData(class7);
			}
		}
		int num3 = terrainData.terrainLayers.Length;
		for (int k = 0; k < num3; k++)
		{
			TerrainLayer terrainLayer = terrainData.terrainLayers[k];
			ExportDataItem class8 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class8.AddString("name", "diffuseTexture" + (k + 1));
			Export_Texture(class8, terrainLayer.diffuseTexture, int_Platformindex, WrapName(string_, isFile: false));
			class4.Add_ArrayData(class8);
			ExportDataItem class9 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class9.AddString("name", "diffuseScaleOffset" + (k + 1));
			ExportDataItem class10 = new ExportDataItem(ExportDataItem.Enum0.Array);
			class10.Add_Number_Float(terrainData.size.x / terrainLayer.tileSize.x);
			class10.Add_Number_Float(terrainData.size.z / terrainLayer.tileSize.y);
			class10.Add_Number_Float(terrainLayer.tileOffset.x);
			class10.Add_Number_Float(terrainLayer.tileOffset.y);
			class9.Add_Class16("value", class10);
			class5.Add_ArrayData(class9);
		}
		ExportDataItem class11 = new ExportDataItem(ExportDataItem.Enum0.Object);
		class11.AddString("name", "albedo");
		ExportDataItem class12 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class12.Add_Number_Float(1f);
		class12.Add_Number_Float(1f);
		class12.Add_Number_Float(1f);
		class12.Add_Number_Float(1f);
		class11.Add_Class16("value", class12);
		class5.Add_ArrayData(class11);
		ExportDataItem class13 = new ExportDataItem(ExportDataItem.Enum0.Object);
		class13.AddString("name", "ambientColor");
		ExportDataItem class14 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class14.Add_Number_Float(0f);
		class14.Add_Number_Float(0f);
		class14.Add_Number_Float(0f);
		class13.Add_Class16("value", class14);
		class5.Add_ArrayData(class13);
		ExportDataItem class15 = new ExportDataItem(ExportDataItem.Enum0.Object);
		class15.AddString("name", "diffuseColor");
		ExportDataItem class16 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class16.Add_Number_Float(1f);
		class16.Add_Number_Float(1f);
		class16.Add_Number_Float(1f);
		class15.Add_Class16("value", class16);
		class5.Add_ArrayData(class15);
		ExportDataItem class17 = new ExportDataItem(ExportDataItem.Enum0.Object);
		class17.AddString("name", "specularColor");
		ExportDataItem class18 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class18.Add_Number_Float(1f);
		class18.Add_Number_Float(1f);
		class18.Add_Number_Float(1f);
		class18.Add_Number_Float(8f);
		class17.Add_Class16("value", class18);
		class5.Add_ArrayData(class17);
		FSWriterHelper.WriteObj(string_, @class);
	}

	private static void Export_Material(Material material_0, string exportPath, string string_14)
	{
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Object);
		ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Object);
		ExportDataItem class3 = new ExportDataItem(ExportDataItem.Enum0.Array);
		ExportDataItem class4 = new ExportDataItem(ExportDataItem.Enum0.Array);
		ExportDataItem class5 = new ExportDataItem(ExportDataItem.Enum0.Array);
		ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
		@class.AddString("version", string_8);
		@class.Add_Class16("props", class2);
		switch (string_14)
		{
		case "BlinnPhong":
			class2.AddString("type", "Laya.BlinnPhongMaterial");
			break;
		case "Unlit":
			class2.AddString("type", "Laya.UnlitMaterial");
			break;
		case "Effect":
			class2.AddString("type", "Laya.EffectMaterial");
			break;
		case "PBR(Standard)":
			class2.AddString("type", "Laya.PBRStandardMaterial");
			break;
		case "PBR(Specular)":
			class2.AddString("type", "Laya.PBRSpecularMaterial");
			break;
		default:
			class2.AddString("type", "Laya.BlinnPhongMaterial");
			break;
		}
		List<string> list = material_0.shaderKeywords.ToList();
		string name = material_0.name;
		class2.AddString("name", name);
		class2.Add_Class16("renderStates", class3);
		ExportDataItem class7 = new ExportDataItem(ExportDataItem.Enum0.Object);
		class3.Add_ArrayData(class7);
		if (material_0.HasProperty("_Cull"))
		{
			class7.AddNumber_Int("cull", material_0.GetInt("_Cull"));
		}
		else
		{
			class7.AddNumber_Int("cull", 2);
		}
		if (list.IndexOf("_ALPHABLEND_ON") != -1)
		{
			class7.AddNumber_Int("blend", 1);
		}
		else
		{
			class7.AddNumber_Int("blend", 0);
		}
		if (material_0.HasProperty("_SrcBlend"))
		{
			switch (material_0.GetInt("_SrcBlend"))
			{
			default:
				class7.AddNumber_Int("srcBlend", 1);
				break;
			case 0:
				class7.AddNumber_Int("srcBlend", 0);
				break;
			case 1:
				class7.AddNumber_Int("srcBlend", 1);
				break;
			case 2:
				class7.AddNumber_Int("srcBlend", 774);
				break;
			case 3:
				class7.AddNumber_Int("srcBlend", 768);
				break;
			case 4:
				class7.AddNumber_Int("srcBlend", 775);
				break;
			case 5:
				class7.AddNumber_Int("srcBlend", 770);
				break;
			case 6:
				class7.AddNumber_Int("srcBlend", 769);
				break;
			case 7:
				class7.AddNumber_Int("srcBlend", 772);
				break;
			case 8:
				class7.AddNumber_Int("srcBlend", 773);
				break;
			case 9:
				class7.AddNumber_Int("srcBlend", 776);
				break;
			case 10:
				class7.AddNumber_Int("srcBlend", 771);
				break;
			}
		}
		else
		{
			class7.AddNumber_Int("srcBlend", 1);
		}
		if (material_0.HasProperty("_DstBlend"))
		{
			switch (material_0.GetInt("_DstBlend"))
			{
			default:
				class7.AddNumber_Int("dstBlend", 0);
				break;
			case 0:
				class7.AddNumber_Int("dstBlend", 0);
				break;
			case 1:
				class7.AddNumber_Int("dstBlend", 1);
				break;
			case 2:
				class7.AddNumber_Int("dstBlend", 774);
				break;
			case 3:
				class7.AddNumber_Int("dstBlend", 768);
				break;
			case 4:
				class7.AddNumber_Int("dstBlend", 775);
				break;
			case 5:
				class7.AddNumber_Int("dstBlend", 770);
				break;
			case 6:
				class7.AddNumber_Int("dstBlend", 769);
				break;
			case 7:
				class7.AddNumber_Int("dstBlend", 772);
				break;
			case 8:
				class7.AddNumber_Int("dstBlend", 773);
				break;
			case 9:
				class7.AddNumber_Int("dstBlend", 776);
				break;
			case 10:
				class7.AddNumber_Int("dstBlend", 771);
				break;
			}
		}
		else
		{
			class7.AddNumber_Int("dstBlend", 0);
		}
		if (material_0.HasProperty("_ZWrite"))
		{
			if (material_0.GetInt("_ZWrite") == 1)
			{
				class7.AddBoolean("depthWrite", bool_2: true);
			}
			else
			{
				class7.AddBoolean("depthWrite", bool_2: false);
			}
		}
		else
		{
			class7.AddBoolean("depthWrite", bool_2: true);
		}
		if (material_0.HasProperty("_ZTest"))
		{
			switch (material_0.GetInt("_ZTest"))
			{
			default:
				class7.AddNumber_Int("depthTest", 0);
				break;
			case 0:
				class7.AddNumber_Int("depthTest", 0);
				break;
			case 1:
				class7.AddNumber_Int("depthTest", 512);
				break;
			case 2:
				class7.AddNumber_Int("depthTest", 513);
				break;
			case 3:
				class7.AddNumber_Int("depthTest", 514);
				break;
			case 4:
				class7.AddNumber_Int("depthTest", 515);
				break;
			case 5:
				class7.AddNumber_Int("depthTest", 516);
				break;
			case 6:
				class7.AddNumber_Int("depthTest", 517);
				break;
			case 7:
				class7.AddNumber_Int("depthTest", 518);
				break;
			case 8:
				class7.AddNumber_Int("depthTest", 519);
				break;
			}
		}
		else
		{
			class7.AddNumber_Int("depthTest", 515);
		}
		if (material_0.HasProperty("_IsVertexColor"))
		{
			class2.AddBoolean("enableVertexColor", (material_0.GetInt("_IsVertexColor") != 0) ? true : false);
		}
		if (list.IndexOf("_ALPHATEST_ON") != -1)
		{
			class2.AddBoolean("alphaTest", bool_2: true);
		}
		else
		{
			class2.AddBoolean("alphaTest", bool_2: false);
		}
		if (material_0.HasProperty("_Cutoff"))
		{
			class2.method_18("alphaTestValue", material_0.GetFloat("_Cutoff"));
		}
		else
		{
			class2.method_18("alphaTestValue", 0.5f);
		}
		class2.AddNumber_Int("renderQueue", material_0.renderQueue);
		if (material_0.HasProperty("_AlbedoIntensity"))
		{
			class2.method_18("albedoIntensity", material_0.GetFloat("_AlbedoIntensity"));
		}
		if (material_0.HasProperty("_Metallic"))
		{
			class2.method_18("metallic", material_0.GetFloat("_Metallic"));
		}
		if (material_0.HasProperty("_Glossiness"))
		{
			class2.method_18("smoothness", material_0.GetFloat("_Glossiness"));
		}
		if (material_0.HasProperty("_GlossMapScale"))
		{
			class2.method_18("smoothnessTextureScale", material_0.GetFloat("_GlossMapScale"));
		}
		if (material_0.HasProperty("_SmoothnessTextureChannel"))
		{
			class2.method_18("smoothnessSource", material_0.GetFloat("_SmoothnessTextureChannel"));
		}
		if (material_0.HasProperty("_BumpScale"))
		{
			class2.method_18("normalTextureScale", material_0.GetFloat("_BumpScale"));
		}
		if (material_0.HasProperty("_Parallax"))
		{
			class2.method_18("parallaxTextureScale", material_0.GetFloat("_Parallax"));
		}
		if (material_0.HasProperty("_OcclusionStrength"))
		{
			class2.method_18("occlusionTextureStrength", material_0.GetFloat("_OcclusionStrength"));
		}
		if (material_0.HasProperty("_Reflection"))
		{
			if ((double)material_0.GetFloat("_Reflection") == 1.0)
			{
				class2.AddBoolean("enableReflection", bool_2: true);
			}
			else
			{
				class2.AddBoolean("enableReflection", bool_2: false);
			}
		}
		if (string_14 == "PBR(Standard)" || string_14 == "PBR(Specular)")
		{
			if (material_0.IsKeywordEnabled("_EMISSION"))
			{
				class2.AddBoolean("enableEmission", bool_2: true);
			}
			else
			{
				class2.AddBoolean("enableEmission", bool_2: false);
			}
		}
		if (material_0.HasProperty("_MainTex"))
		{
			Texture2D texture2D = (Texture2D)material_0.GetTexture("_MainTex");
			if (texture2D != null)
			{
				ExportDataItem class8 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class8.AddString("name", "albedoTexture");
				Export_Texture(class8, texture2D, int_Platformindex, exportPath, name);
				class4.Add_ArrayData(class8);
			}
			ExportDataItem class9 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class9.AddString("name", "tilingOffset");
			ExportDataItem class10 = new ExportDataItem(ExportDataItem.Enum0.Array);
			Vector2 textureScale = material_0.GetTextureScale("_MainTex");
			Vector2 textureOffset = material_0.GetTextureOffset("_MainTex");
			class10.Add_Number_Float(textureScale.x);
			class10.Add_Number_Float(textureScale.y);
			class10.Add_Number_Float(textureOffset.x);
			class10.Add_Number_Float(textureOffset.y);
			class9.Add_Class16("value", class10);
			class5.Add_ArrayData(class9);
		}
		if (material_0.HasProperty("_MetallicGlossMap"))
		{
			Texture2D texture2D2 = (Texture2D)material_0.GetTexture("_MetallicGlossMap");
			if (texture2D2 != null)
			{
				ExportDataItem class11 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class11.AddString("name", "metallicGlossTexture");
				Export_Texture(class11, texture2D2, int_Platformindex, exportPath, name);
				class4.Add_ArrayData(class11);
			}
		}
		if (material_0.HasProperty("_Lighting"))
		{
			if ((double)material_0.GetFloat("_Lighting") == 0.0)
			{
				class2.AddBoolean("enableLighting", bool_2: true);
			}
			else
			{
				class2.AddBoolean("enableLighting", bool_2: false);
			}
		}
		if (!material_0.HasProperty("_Lighting") || (material_0.HasProperty("_Lighting") && (double)material_0.GetFloat("_Lighting") == 0.0))
		{
			if (material_0.HasProperty("_Shininess"))
			{
				class2.method_18("shininess", material_0.GetFloat("_Shininess"));
			}
			if (material_0.HasProperty("_SpecGlossMap"))
			{
				Texture2D texture2D3 = (Texture2D)material_0.GetTexture("_SpecGlossMap");
				if (texture2D3 != null)
				{
					ExportDataItem class12 = new ExportDataItem(ExportDataItem.Enum0.Object);
					class12.AddString("name", "specularTexture");
					Export_Texture(class12, texture2D3, int_Platformindex, exportPath, name);
					class4.Add_ArrayData(class12);
				}
			}
			if (material_0.HasProperty("_BumpMap"))
			{
				Texture2D texture2D4 = (Texture2D)material_0.GetTexture("_BumpMap");
				if (texture2D4 != null)
				{
					ExportDataItem class13 = new ExportDataItem(ExportDataItem.Enum0.Object);
					class13.AddString("name", "normalTexture");
					Export_Texture(class13, texture2D4, int_Platformindex, exportPath, name);
					class4.Add_ArrayData(class13);
				}
			}
			ExportDataItem class14 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class14.AddString("name", "specularColor");
			ExportDataItem class15 = new ExportDataItem(ExportDataItem.Enum0.Array);
			if (material_0.HasProperty("_SpecColor"))
			{
				Color color = material_0.GetColor("_SpecColor");
				class15.Add_Number_Float(color.r);
				class15.Add_Number_Float(color.g);
				class15.Add_Number_Float(color.b);
				class15.Add_Number_Float(color.a);
				class14.Add_Class16("value", class15);
				class5.Add_ArrayData(class14);
			}
		}
		if (material_0.HasProperty("_ParallaxMap"))
		{
			Texture2D texture2D5 = (Texture2D)material_0.GetTexture("_ParallaxMap");
			if (texture2D5 != null)
			{
				ExportDataItem class16 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class16.AddString("name", "parallaxTexture");
				Export_Texture(class16, texture2D5, int_Platformindex, exportPath, name);
				class4.Add_ArrayData(class16);
			}
		}
		if (material_0.HasProperty("_OcclusionMap"))
		{
			Texture2D texture2D6 = (Texture2D)material_0.GetTexture("_OcclusionMap");
			if (texture2D6 != null)
			{
				ExportDataItem class17 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class17.AddString("name", "occlusionTexture");
				Export_Texture(class17, texture2D6, int_Platformindex, exportPath, name);
				class4.Add_ArrayData(class17);
			}
		}
		if (material_0.HasProperty("_EmissionMap"))
		{
			Texture2D texture2D7 = (Texture2D)material_0.GetTexture("_EmissionMap");
			if (texture2D7 != null)
			{
				ExportDataItem class18 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class18.AddString("name", "emissionTexture");
				Export_Texture(class18, texture2D7, int_Platformindex, exportPath, name);
				class4.Add_ArrayData(class18);
			}
		}
		if (material_0.HasProperty("thinknessTexture"))
		{
			Texture2D texture2D8 = (Texture2D)material_0.GetTexture("thinknessTexture");
			if (texture2D8 != null)
			{
				ExportDataItem class19 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class19.AddString("name", "thinknessTexture");
				Export_Texture(class19, texture2D8, int_Platformindex, exportPath, name);
				class4.Add_ArrayData(class19);
			}
		}
		
        if (material_0.HasProperty("transmissionColor"))
		{
            var obj_transmissionColor = new ExportDataItem(ExportDataItem.Enum0.Object);
            obj_transmissionColor.AddString("name", "transmissionColor");
            var color_array = new ExportDataItem(ExportDataItem.Enum0.Array);

            Color transmissionColor = material_0.GetColor("transmissionColor");
			color_array.Add_Number_Float(transmissionColor.r);
			color_array.Add_Number_Float(transmissionColor.g);
			color_array.Add_Number_Float(transmissionColor.b);
			color_array.Add_Number_Float(transmissionColor.a);
			obj_transmissionColor.Add_Class16("value", color_array);
			class5.Add_ArrayData(obj_transmissionColor);
		}

		if (material_0.HasProperty("backDiffuse"))
		{
			class2.method_18("backDiffuse", material_0.GetFloat("backDiffuse"));
		}
		if (material_0.HasProperty("backScale"))
		{
			class2.method_18("backScale", material_0.GetFloat("backScale"));
		}
		if (material_0.HasProperty("_enableSubsurfaceScattering") && (float)material_0.GetInt("_enableSubsurfaceScattering") == 1f)
		{
			class6.Add_String("ENABLETRANSMISSION");
		}
		ExportDataItem class22 = new ExportDataItem(ExportDataItem.Enum0.Object);
		class22.AddString("name", "albedoColor");
		ExportDataItem class23 = new ExportDataItem(ExportDataItem.Enum0.Array);
		if (material_0.HasProperty("_Color"))
		{
			Color color3 = material_0.GetColor("_Color");
			class23.Add_Number_Float(color3.r);
			class23.Add_Number_Float(color3.g);
			class23.Add_Number_Float(color3.b);
			class23.Add_Number_Float(color3.a);
			class22.Add_Class16("value", class23);
			class5.Add_ArrayData(class22);
		}
		ExportDataItem class24 = new ExportDataItem(ExportDataItem.Enum0.Object);
		class24.AddString("name", "emissionColor");
		ExportDataItem class25 = new ExportDataItem(ExportDataItem.Enum0.Array);
		if (material_0.HasProperty("_EmissionColor"))
		{
			Color color4 = material_0.GetColor("_EmissionColor");
			class25.Add_Number_Float(color4.r);
			class25.Add_Number_Float(color4.g);
			class25.Add_Number_Float(color4.b);
			class25.Add_Number_Float(color4.a);
			class24.Add_Class16("value", class25);
			class5.Add_ArrayData(class24);
		}
		if ((string_14 == "PBR(Standard)" || string_14 == "PBR(Specular)") && material_0.HasProperty("_Mode") && material_0.GetInt("_Mode") == 3)
		{
			class6.Add_String("ALPHAPREMULTIPLY");
		}
		if (string_14 == "Unlit")
		{
			if (material_0.HasProperty("_Mode") && material_0.GetInt("_Mode") == 3)
			{
				class6.Add_String("ADDTIVEFOG");
			}
			if (material_0.HasProperty("_EnableVertexColor") && material_0.GetInt("_EnableVertexColor") == 1)
			{
				class6.Add_String("ENABLEVERTEXCOLOR");
			}
		}
		class2.Add_Class16("textures", class4);
		class2.Add_Class16("vectors", class5);
		class2.Add_Class16("defines", class6);
		FSWriterHelper.WriteObj(exportPath, @class);
	}

	private static void smethod_45(Material material_0, string string_13, string string_14)
	{
		_ = material_0.shader.name;
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Object);
		ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Object);
		ExportDataItem class3 = new ExportDataItem(ExportDataItem.Enum0.Array);
		ExportDataItem class4 = new ExportDataItem(ExportDataItem.Enum0.Array);
		ExportDataItem class5 = new ExportDataItem(ExportDataItem.Enum0.Array);
		ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
		@class.AddString("version", string_8);
		@class.Add_Class16("props", class2);
		switch (string_14)
		{
		case "Trail":
			class2.AddString("type", "Laya.TrailMaterial");
			break;
		case "Unlit":
			class2.AddString("type", "Laya.LineMaterial");
			break;
		case "Effect":
			class2.AddString("type", "Laya.EffectMaterial");
			break;
		case "ShurikenParticle":
			class2.AddString("type", "Laya.ShurikenParticleMaterial");
			break;
		default:
			class2.AddString("type", "Laya.EffectMaterial");
			break;
		}
		class2.Add_Class16("renderStates", class3);
		ExportDataItem class7 = new ExportDataItem(ExportDataItem.Enum0.Object);
		class3.Add_ArrayData(class7);
		List<string> list = material_0.shaderKeywords.ToList();
		string name = material_0.name;
		class2.AddString("name", name);
		class7.AddNumber_Int("cull", 0);
		class7.AddNumber_Int("blend", 1);
		if (material_0.HasProperty("_SrcBlend"))
		{
			switch (material_0.GetInt("_SrcBlend"))
			{
			default:
				class7.AddNumber_Int("srcBlend", 1);
				break;
			case 0:
				class7.AddNumber_Int("srcBlend", 0);
				break;
			case 1:
				class7.AddNumber_Int("srcBlend", 1);
				break;
			case 2:
				class7.AddNumber_Int("srcBlend", 774);
				break;
			case 3:
				class7.AddNumber_Int("srcBlend", 768);
				break;
			case 4:
				class7.AddNumber_Int("srcBlend", 775);
				break;
			case 5:
				class7.AddNumber_Int("srcBlend", 770);
				break;
			case 6:
				class7.AddNumber_Int("srcBlend", 769);
				break;
			case 7:
				class7.AddNumber_Int("srcBlend", 772);
				break;
			case 8:
				class7.AddNumber_Int("srcBlend", 773);
				break;
			case 9:
				class7.AddNumber_Int("srcBlend", 776);
				break;
			case 10:
				class7.AddNumber_Int("srcBlend", 771);
				break;
			}
		}
		else
		{
			class7.AddNumber_Int("srcBlend", 1);
		}
		if (material_0.HasProperty("_DstBlend"))
		{
			switch (material_0.GetInt("_DstBlend"))
			{
			default:
				class7.AddNumber_Int("dstBlend", 0);
				break;
			case 0:
				class7.AddNumber_Int("dstBlend", 0);
				break;
			case 1:
				class7.AddNumber_Int("dstBlend", 1);
				break;
			case 2:
				class7.AddNumber_Int("dstBlend", 774);
				break;
			case 3:
				class7.AddNumber_Int("dstBlend", 768);
				break;
			case 4:
				class7.AddNumber_Int("dstBlend", 775);
				break;
			case 5:
				class7.AddNumber_Int("dstBlend", 770);
				break;
			case 6:
				class7.AddNumber_Int("dstBlend", 769);
				break;
			case 7:
				class7.AddNumber_Int("dstBlend", 772);
				break;
			case 8:
				class7.AddNumber_Int("dstBlend", 773);
				break;
			case 9:
				class7.AddNumber_Int("dstBlend", 776);
				break;
			case 10:
				class7.AddNumber_Int("dstBlend", 771);
				break;
			}
		}
		else
		{
			class7.AddNumber_Int("dstBlend", 0);
		}
		if (material_0.HasProperty("_ZWrite"))
		{
			if (material_0.GetInt("_ZWrite") == 1)
			{
				class7.AddBoolean("depthWrite", bool_2: true);
			}
			else
			{
				class7.AddBoolean("depthWrite", bool_2: false);
			}
		}
		else
		{
			class7.AddBoolean("depthWrite", bool_2: true);
		}
		if (material_0.HasProperty("_ZTest"))
		{
			switch (material_0.GetInt("_ZTest"))
			{
			default:
				class7.AddNumber_Int("depthTest", 0);
				break;
			case 0:
				class7.AddNumber_Int("depthTest", 0);
				break;
			case 1:
				class7.AddNumber_Int("depthTest", 512);
				break;
			case 2:
				class7.AddNumber_Int("depthTest", 513);
				break;
			case 3:
				class7.AddNumber_Int("depthTest", 514);
				break;
			case 4:
				class7.AddNumber_Int("depthTest", 515);
				break;
			case 5:
				class7.AddNumber_Int("depthTest", 516);
				break;
			case 6:
				class7.AddNumber_Int("depthTest", 517);
				break;
			case 7:
				class7.AddNumber_Int("depthTest", 518);
				break;
			case 8:
				class7.AddNumber_Int("depthTest", 519);
				break;
			}
		}
		else
		{
			class7.AddNumber_Int("depthTest", 515);
		}
		if (list.IndexOf("_ALPHATEST_ON") != -1)
		{
			class2.AddBoolean("alphaTest", bool_2: true);
		}
		else
		{
			class2.AddBoolean("alphaTest", bool_2: false);
		}
		class2.AddNumber_Int("renderQueue", material_0.renderQueue);
		if (material_0.HasProperty("_MainTex"))
		{
			Texture2D texture2D = (Texture2D)material_0.GetTexture("_MainTex");
			if (texture2D != null)
			{
				ExportDataItem class8 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class8.AddString("name", "texture");
				Export_Texture(class8, texture2D, int_Platformindex, string_13, name);
				class4.Add_ArrayData(class8);
			}
			ExportDataItem class9 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class9.AddString("name", "tilingOffset");
			ExportDataItem class10 = new ExportDataItem(ExportDataItem.Enum0.Array);
			Vector2 textureScale = material_0.GetTextureScale("_MainTex");
			Vector2 textureOffset = material_0.GetTextureOffset("_MainTex");
			class10.Add_Number_Float(textureScale.x);
			class10.Add_Number_Float(textureScale.y);
			class10.Add_Number_Float(textureOffset.x);
			class10.Add_Number_Float(textureOffset.y);
			class9.Add_Class16("value", class10);
			class5.Add_ArrayData(class9);
		}
		ExportDataItem class11 = new ExportDataItem(ExportDataItem.Enum0.Object);
		class11.AddString("name", "color");
		ExportDataItem class12 = new ExportDataItem(ExportDataItem.Enum0.Array);
		if (material_0.HasProperty("_TintColor"))
		{
			Color color = material_0.GetColor("_TintColor");
			class12.Add_Number_Float(color.r);
			class12.Add_Number_Float(color.g);
			class12.Add_Number_Float(color.b);
			class12.Add_Number_Float(color.a);
			class11.Add_Class16("value", class12);
			class5.Add_ArrayData(class11);
		}
		if (material_0.HasProperty("_Mode") && material_0.GetInt("_Mode") == 0)
		{
			class6.Add_String("ADDTIVEFOG");
		}
		class2.Add_Class16("textures", class4);
		class2.Add_Class16("vectors", class5);
		class2.Add_Class16("defines", class6);
		FSWriterHelper.WriteObj(string_13, @class);
	}

	private static void smethod_46(Material material_0, string string_13)
	{
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Object);
		ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Array);
		ExportDataItem class3 = new ExportDataItem(ExportDataItem.Enum0.Array);
		ExportDataItem class16_ = new ExportDataItem(ExportDataItem.Enum0.Array);
		@class.AddString("version", string_8);
		ExportDataItem class4 = new ExportDataItem(ExportDataItem.Enum0.Object);
		@class.Add_Class16("props", class4);
		class4.AddString("type", "Laya.WaterPrimaryMaterial");
		string name = material_0.name;
		class4.AddString("name", name);
		if (material_0.HasProperty("_WaveScale"))
		{
			class4.method_18("waveScale", material_0.GetFloat("_WaveScale"));
		}
		if (material_0.HasProperty("_ColorControl"))
		{
			Texture2D texture2D = (Texture2D)material_0.GetTexture("_ColorControl");
			if (texture2D != null)
			{
				ExportDataItem class5 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class5.AddString("name", "mainTexture");
				Export_Texture(class5, texture2D, int_Platformindex, string_13, name);
				class2.Add_ArrayData(class5);
			}
		}
		if (material_0.HasProperty("_BumpMap"))
		{
			Texture2D texture2D2 = (Texture2D)material_0.GetTexture("_BumpMap");
			if (texture2D2 != null)
			{
				ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class6.AddString("name", "normalTexture");
				Export_Texture(class6, texture2D2, int_Platformindex, string_13, name);
				class2.Add_ArrayData(class6);
			}
		}
		ExportDataItem class7 = new ExportDataItem(ExportDataItem.Enum0.Object);
		class7.AddString("name", "horizonColor");
		ExportDataItem class8 = new ExportDataItem(ExportDataItem.Enum0.Array);
		if (material_0.HasProperty("_horizonColor"))
		{
			Color color = material_0.GetColor("_horizonColor");
			class8.Add_Number_Float(color.r);
			class8.Add_Number_Float(color.g);
			class8.Add_Number_Float(color.b);
			class8.Add_Number_Float(color.a);
			class7.Add_Class16("value", class8);
			class3.Add_ArrayData(class7);
		}
		ExportDataItem class9 = new ExportDataItem(ExportDataItem.Enum0.Object);
		class9.AddString("name", "waveSpeed");
		ExportDataItem class10 = new ExportDataItem(ExportDataItem.Enum0.Array);
		if (material_0.HasProperty("_WaveSpeed"))
		{
			Color color2 = material_0.GetColor("_WaveSpeed");
			class10.Add_Number_Float(0f - color2.r);
			class10.Add_Number_Float(color2.g);
			class10.Add_Number_Float(0f - color2.b);
			class10.Add_Number_Float(color2.a);
			class9.Add_Class16("value", class10);
			class3.Add_ArrayData(class9);
		}
		class4.Add_Class16("textures", class2);
		class4.Add_Class16("vectors", class3);
		class4.Add_Class16("defines", class16_);
		FSWriterHelper.WriteObj(string_13, @class);
	}

	private static void smethod_47(ExportDataItem class16_0)
	{
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Array);
		class16_0.Add_Class16("lightmaps", @class);
		LightmapData[] lightmaps = LightmapSettings.lightmaps;
		if (lightmaps == null || lightmaps.Length == 0)
		{
			return;
		}
		bool flag = false;
		if (GraphicsSettings.HasShaderDefine(BuiltinShaderDefine.UNITY_LIGHTMAP_RGBM_ENCODING))
		{
			flag = true;
		}
		for (int i = 0; i < lightmaps.Length; i++)
		{
			ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Object);
			Texture2D lightmapColor = lightmaps[i].lightmapColor;
			if (lightmapColor == null)
			{
				continue;
			}
			ExportDataItem class3 = new ExportDataItem(ExportDataItem.Enum0.Array);
			ExportDataItem class4 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class2.Add_Class16("constructParams", class3);
			class2.Add_Class16("propertyParams", class4);
			class3.Add_Number_Int(lightmapColor.width);
			class3.Add_Number_Int(lightmapColor.height);
			class3.Add_Number_Int(1);
			class3.Add_Number_Boolean(bool_2: false);
			if (lightmapColor.filterMode == FilterMode.Point)
			{
				class4.AddNumber_Int("filterMode", 0);
			}
			else if (lightmapColor.filterMode == FilterMode.Bilinear)
			{
				class4.AddNumber_Int("filterMode", 1);
			}
			else if (lightmapColor.filterMode == FilterMode.Trilinear)
			{
				class4.AddNumber_Int("filterMode", 2);
			}
			else
			{
				class4.AddNumber_Int("filterMode", 0);
			}
			if (lightmapColor.wrapMode == TextureWrapMode.Repeat)
			{
				class4.AddNumber_Int("wrapModeU", 0);
				class4.AddNumber_Int("wrapModeV", 0);
			}
			else if (lightmapColor.wrapMode == TextureWrapMode.Clamp)
			{
				class4.AddNumber_Int("wrapModeU", 1);
				class4.AddNumber_Int("wrapModeV", 1);
			}
			else
			{
				class4.AddNumber_Int("wrapModeU", 0);
				class4.AddNumber_Int("wrapModeV", 0);
			}
			class4.AddNumber_Int("anisoLevel", lightmapColor.anisoLevel);
			if (!(lightmapColor != null))
			{
				continue;
			}
			string assetPath = AssetDatabase.GetAssetPath(lightmapColor.GetInstanceID());
			if (string.IsNullOrEmpty(assetPath))
			{
				Debug.LogError("LayaAir:can't select Auto Generate checkbox with generate Lighting.");
				continue;
			}
			@class.Add_ArrayData(class2);
			string path = string_exportPath + "/" + Path.GetDirectoryName(assetPath);
			if (!Directory.Exists(path))
			{
				Directory.CreateDirectory(path);
			}
			string text = string_exportPath + "/" + assetPath;
			text = text.Substring(0, text.LastIndexOf(".")) + ".png";
			TextureImporter textureImporter = AssetImporter.GetAtPath(assetPath) as TextureImporter;
			textureImporter.isReadable = true;
			if (flag)
			{
				textureImporter.textureCompression = TextureImporterCompression.Uncompressed;
			}
			else
			{
				TextureImporterPlatformSettings defaultPlatformTextureSettings = textureImporter.GetDefaultPlatformTextureSettings();
				defaultPlatformTextureSettings.format = TextureImporterFormat.RGBAFloat;
				textureImporter.SetPlatformTextureSettings(defaultPlatformTextureSettings);
			}
			AssetDatabase.ImportAsset(assetPath);
			FileStream fileStream = File.Open(text, FileMode.Create, FileAccess.ReadWrite);
			BinaryWriter binaryWriter = new BinaryWriter(fileStream);
			if (flag)
			{
				binaryWriter.Write(lightmapColor.EncodeToPNG());
			}
			else
			{
				Texture2D texture2D = new Texture2D(lightmapColor.width, lightmapColor.height, TextureFormat.RGBA32, lightmapColor.mipmapCount > 1);
				Color[] pixels = lightmapColor.GetPixels(0);
				for (int j = 0; j < pixels.Length; j++)
				{
					pixels[j] = smethod_51(pixels[j], 5f);
				}
				texture2D.SetPixels(pixels);
				binaryWriter.Write(texture2D.EncodeToPNG());
			}
			fileStream.Close();
			ExportDataItem class5 = new ExportDataItem(ExportDataItem.Enum0.Object);
			class2.Add_Class16("color", class5);
			class5.AddString("path", assetPath.Split('.')[0] + ".png");
			Texture2D lightmapDir = lightmaps[i].lightmapDir;
			if (lightmapDir != null)
			{
				smethod_48(lightmapDir, class2, string_exportPath);
			}
		}
	}

	private static void smethod_48(Texture2D texture2D_0, ExportDataItem class16_0, string string_13)
	{
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Object);
		class16_0.Add_Class16("direction", @class);
		string assetPath = AssetDatabase.GetAssetPath(texture2D_0.GetInstanceID());
		string path = string_13 + "/" + Path.GetDirectoryName(assetPath);
		if (!Directory.Exists(path))
		{
			Directory.CreateDirectory(path);
		}
		string text = string_13 + "/" + assetPath;
		text = text.Substring(0, text.LastIndexOf(".")) + ".png";
		(AssetImporter.GetAtPath(assetPath) as TextureImporter).isReadable = true;
		AssetDatabase.ImportAsset(assetPath);
		FileStream fileStream = File.Open(text, FileMode.Create, FileAccess.ReadWrite);
		new BinaryWriter(fileStream).Write(texture2D_0.EncodeToPNG());
		fileStream.Close();
		@class.AddString("path", assetPath);
	}

	private static void Export_Texture(ExportDataItem class16_0, Texture2D texture2D_0, int int_16, string string_13 = null, string string_14 = null, string string_15 = "path", bool bool_17 = false)
	{
        
		if (texture2D_0 != null)
		{
			var assetPath = AssetDatabase.GetAssetPath(texture2D_0.GetInstanceID());
			var savePath = string_exportPath + "/" + Path.GetDirectoryName(assetPath);
			savePath = WrapName(savePath, isFile: false);
            if (!Directory.Exists(savePath))
			{
				Directory.CreateDirectory(savePath);
			}
			var textureImporter = AssetImporter.GetAtPath(assetPath) as TextureImporter;
			if (textureImporter == null)
			{
				Debug.LogError(string_PluginTag + assetPath + " can't export   You should check the texture file format");
				return;
			}
			var text = string_exportPath + "/" + assetPath;
			text = text.Substring(0, text.LastIndexOf("."));
			TextureInfo textureInfo;
			if (!dictionary_1.ContainsKey(assetPath))
			{
				textureInfo = new TextureInfo();
				if (textureImporter.textureType == TextureImporterType.NormalMap || !textureImporter.isReadable || textureImporter.textureCompression != 0)
				{
                    var enableMiniMap = textureImporter.mipmapEnabled;
                    textureImporter.textureType = TextureImporterType.Default;
					textureImporter.isReadable = true;
                    textureImporter.mipmapEnabled = enableMiniMap;

                    textureImporter.textureCompression = TextureImporterCompression.Uncompressed;
					AssetDatabase.ImportAsset(assetPath);
				}
				if (texture2D_0.format == TextureFormat.DXT1 || texture2D_0.format == TextureFormat.DXT5 || texture2D_0.format == TextureFormat.DXT1Crunched || texture2D_0.format == TextureFormat.DXT5Crunched)
				{
					Debug.LogError("LayaAir: Texture " + assetPath + " can't Readable,maybe you should cancel  Override for PC,MAC&Linux Standalone  checkbox.");
					return;
				}
				if (texture2D_0.format == TextureFormat.PVRTC_RGB2 || texture2D_0.format == TextureFormat.PVRTC_RGB4 || texture2D_0.format == TextureFormat.PVRTC_RGBA2 || texture2D_0.format == TextureFormat.PVRTC_RGBA4)
				{
					Debug.LogError("LayaAir: Texture" + assetPath + " can't Readable,maybe you should cancel  Override for iOS.");
					return;
				}
				textureInfo.Path = assetPath;
				textureInfo.SavePath = text;
				textureInfo.texture = texture2D_0;
				textureInfo.rgbmEncoding = bool_17;
				dictionary_1.Add(assetPath, textureInfo);
				if (texture2D_0.format != TextureFormat.RGB24 && texture2D_0.format != TextureFormat.DXT1 && texture2D_0.format != TextureFormat.DXT1Crunched)
				{
					if (texture2D_0.format != TextureFormat.RGBA32 && texture2D_0.format != TextureFormat.DXT5 && texture2D_0.format != TextureFormat.DXT5Crunched)
					{
						textureInfo.format = 1;
					}
					else
					{
						textureInfo.format = 1;
					}
				}
				else
				{
					textureInfo.format = 0;
				}
				if (textureImporter.mipmapEnabled)
				{
					textureInfo.MipMap = texture2D_0.mipmapCount;
				}
				else
				{
					textureInfo.MipMap = 0;
				}
			}
			else
			{
				textureInfo = dictionary_1[assetPath];
			}
			switch (int_16)
			{
			default:
				Debug.LogError("no format select");
				break;
			case 0:
				if (textureInfo.format == 0)
				{
					string[] array = assetPath.Split('.');
					string text2 = array[array.Length - 1];
					string str = ((list_0.IndexOf(text2) == -1) ? ".jpg" : text2);
					text += str;
				}
				else
				{
					string[] array2 = assetPath.Split('.');
					string text3 = array2[array2.Length - 1];
					string str2 = ((list_0.IndexOf(text3) == -1) ? ".png" : text3);
					text += str2;
				}
				text = WrapName(text, isFile: false);
				break;
			case 1:
				text += ".pvr";
				break;
			case 2:
				if (textureInfo.format == 0)
				{
					text += ".ktx";
				}
				else if (textureInfo.format == 1)
				{
					text += ".png";
				}
				break;
			}
			textureInfo.SavePath = text;
			if (File.Exists(assetPath))
			{
				string text4 = FSWriterHelper.WrapPath(string_13, text);
				class16_0.AddString(string_15, text4);
				ExportDataItem obj_constructParams = new ExportDataItem(ExportDataItem.Enum0.Array);
				ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class16_0.Add_Class16("constructParams", obj_constructParams);
				class16_0.Add_Class16("propertyParams", class2);
				if (int_16 == 1)
				{
					int num = Mathf.Max(texture2D_0.width, texture2D_0.height);
					obj_constructParams.Add_Number_Int(num);
					obj_constructParams.Add_Number_Int(num);
				}
				else
				{
					obj_constructParams.Add_Number_Int(texture2D_0.width);
					obj_constructParams.Add_Number_Int(texture2D_0.height);
				}
				if (textureInfo.format == 0)
				{
					switch (int_16)
					{
					case 0:
						obj_constructParams.Add_Number_Int(0);
						break;
					case 1:
						obj_constructParams.Add_Number_Int(11);
						break;
					case 2:
						obj_constructParams.Add_Number_Int(5);
						break;
					}
				}
				else if (textureInfo.format == 1)
				{
					switch (int_16)
					{
					case 0:
						obj_constructParams.Add_Number_Int(1);
						break;
					case 1:
						obj_constructParams.Add_Number_Int(12);
						break;
					case 2:
						obj_constructParams.Add_Number_Int(1);
						break;
					}
				}
				else
				{
					obj_constructParams.Add_Number_Int(1);
				}
				if (textureImporter != null)
				{
					obj_constructParams.Add_Number_Boolean(textureImporter.mipmapEnabled);
				}
				else
				{
					obj_constructParams.Add_Number_Boolean(false);
				}

                // readable
                if (textureImporter != null && bool_enableTextureReadable)
                {
                    obj_constructParams.Add_Number_Boolean(textureImporter.isReadable);
                }
                else
                {
                    obj_constructParams.Add_Number_Boolean(false);
                }
                if (texture2D_0.filterMode == FilterMode.Point)
				{
					class2.AddNumber_Int("filterMode", 0);
				}
				else if (texture2D_0.filterMode == FilterMode.Bilinear)
				{
					class2.AddNumber_Int("filterMode", 1);
				}
				else if (texture2D_0.filterMode == FilterMode.Trilinear)
				{
					class2.AddNumber_Int("filterMode", 2);
				}
				else
				{
					class2.AddNumber_Int("filterMode", 1);
				}
				if (texture2D_0.wrapMode == TextureWrapMode.Repeat)
				{
					class2.AddNumber_Int("wrapModeU", 0);
					class2.AddNumber_Int("wrapModeV", 0);
				}
				else if (texture2D_0.wrapMode == TextureWrapMode.Clamp)
				{
					class2.AddNumber_Int("wrapModeU", 1);
					class2.AddNumber_Int("wrapModeV", 1);
				}
				else
				{
					class2.AddNumber_Int("wrapModeU", 0);
					class2.AddNumber_Int("wrapModeV", 0);
				}
				if (textureImporter != null)
				{
					class2.AddNumber_Int("anisoLevel", texture2D_0.anisoLevel);
				}
				else
				{
					class2.AddNumber_Int("anisoLevel", 0);
				}
			}
			else
			{
				class16_0.AddString(string_15, "");
			}
		}
		else
		{
			class16_0.AddString(string_15, "");
		}
	}

	public static void smethod_50(Cubemap cubemap_0, ExportDataItem class16_0, bool bool_17 = false, string string_13 = null)
	{
		if (!(cubemap_0 == null))
		{
			string text = WrapName(AssetDatabase.GetAssetPath(cubemap_0.GetInstanceID()), isFile: false);
			text = text.Split('.')[0];
			if (bool_17)
			{
				string text2 = FSWriterHelper.WrapPath(string_13, string_exportPath + "/" + text + ".ltc");
				class16_0.AddString("path", text2);
			}
			else
			{
				class16_0.AddString("reflectionTexture", text + ".ltc");
			}
			ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Object);
			string str = text.Substring(text.LastIndexOf("/") + 1);
			@class.AddString("front", str + "_PositiveZ.png");
			@class.AddString("back", str + "_NegativeZ.png");
			@class.AddString("left", str + "_PositiveX.png");
			@class.AddString("right", str + "_NegativeX.png");
			@class.AddString("up", str + "_PositiveY.png");
			@class.AddString("down", str + "_NegativeY.png");
			text = string_exportPath + "/" + text + ".ltc";
			FSWriterHelper.WriteObj(text, @class);
			try
			{
				Color[] pixels = cubemap_0.GetPixels(CubemapFace.PositiveX);
				Color[] pixels2 = cubemap_0.GetPixels(CubemapFace.NegativeX);
				Color[] pixels3 = cubemap_0.GetPixels(CubemapFace.PositiveY);
				Color[] pixels4 = cubemap_0.GetPixels(CubemapFace.NegativeY);
				Color[] pixels5 = cubemap_0.GetPixels(CubemapFace.PositiveZ);
				Color[] pixels6 = cubemap_0.GetPixels(CubemapFace.NegativeZ);
				Texture2D tex = smethod_64(pixels);
				Texture2D tex2 = smethod_64(pixels2);
				Texture2D tex3 = smethod_64(pixels3);
				Texture2D tex4 = smethod_64(pixels4);
				Texture2D tex5 = smethod_64(pixels5);
				Texture2D tex6 = smethod_64(pixels6);
				text = text.Substring(0, text.LastIndexOf('.'));
				File.WriteAllBytes(text + "_PositiveX.png", tex.EncodeToPNG());
				File.WriteAllBytes(text + "_NegativeX.png", tex2.EncodeToPNG());
				File.WriteAllBytes(text + "_PositiveY.png", tex3.EncodeToPNG());
				File.WriteAllBytes(text + "_NegativeY.png", tex4.EncodeToPNG());
				File.WriteAllBytes(text + "_PositiveZ.png", tex5.EncodeToPNG());
				File.WriteAllBytes(text + "_NegativeZ.png", tex6.EncodeToPNG());
			}
			catch (Exception ex)
			{
				ex.ToString();
				Debug.LogWarning("LayaAir3D Warning(Code:2006) : " + cubemap_0.name + "must set can read!");
			}
		}
	}

	private static Color smethod_51(Color color_0, float float_2)
	{
		float b = 1f / float_2;
		Color color = color_0 * b;
		float num = Math.Max(Math.Max(color.r, color.g), Math.Max(color.b, 0.02f));
		num = (float)Math.Ceiling(num * 255f) / 255f;
		num = Math.Max(num, 0.02f);
		return new Color(color.r / num, color.g / num, color.b / num, num);
	}

	public static void smethod_52(ExportDataItem class16_0)
	{
		string text = SceneManager.GetActiveScene().path.Split('.')[0];
		Cubemap cubemap = (Cubemap)ReflectionProbe.defaultTexture;
		string assetPath = AssetDatabase.GetAssetPath(cubemap.GetInstanceID());
		string a = Path.GetExtension(assetPath).ToLower();
		bool flag = ((a == ".exr" || a == ".ehdr") ? true : false);
		TextureImporter textureImporter = AssetImporter.GetAtPath(assetPath) as TextureImporter;
		if ((bool)textureImporter)
		{
			textureImporter.isReadable = true;
			TextureImporterPlatformSettings defaultPlatformTextureSettings = textureImporter.GetDefaultPlatformTextureSettings();
			defaultPlatformTextureSettings.textureCompression = TextureImporterCompression.Uncompressed;
			textureImporter.SetPlatformTextureSettings(defaultPlatformTextureSettings);
			AssetDatabase.ImportAsset(assetPath);
		}
		else if (!cubemap.isReadable)
		{
			Debug.LogError($"LayaAir:Texture {assetPath} isReadable must be true.");
			return;
		}
		class16_0.AddNumber_Int("reflectionDecodingFormat", flag ? 1 : 0);
		class16_0.AddString("reflection", text + "GIReflection.ltcb.ls");
		int int_ = (byte)cubemap.mipmapCount;
		byte byte_ = (byte)(flag ? 1 : 0);
		string string_ = string_exportPath + "/" + text + "GIReflection.ltcb.ls";
		smethod_53(cubemap, string_, byte_, int_, flag);
	}

	public static void smethod_53(Cubemap cubemap_0, string string_13, byte byte_0, int int_16, bool bool_17)
	{
		FileStream fileStream = FSWriterHelper.CreateFS(string_13);
		FSWriterHelper.Write_String(fileStream, "LAYATEXTURECUBE:0000");
		FSWriterHelper.Write_BytesArray(fileStream, byte_0);
		FSWriterHelper.Write_BytesArray(fileStream, (byte)int_16);
		FSWriterHelper.Write_ShortArray(fileStream, (short)cubemap_0.width);
		FSWriterHelper.Write_BytesArray(fileStream, (byte)cubemap_0.filterMode);
		FSWriterHelper.Write_BytesArray(fileStream, (byte)cubemap_0.wrapModeU);
		FSWriterHelper.Write_BytesArray(fileStream, (byte)cubemap_0.wrapModeV);
		FSWriterHelper.Write_BytesArray(fileStream, (byte)cubemap_0.anisoLevel);
		for (int i = 0; i < int_16; i++)
		{
			Color[] pixels = cubemap_0.GetPixels(CubemapFace.PositiveX, i);
			Color[] pixels2 = cubemap_0.GetPixels(CubemapFace.NegativeX, i);
			Color[] pixels3 = cubemap_0.GetPixels(CubemapFace.PositiveY, i);
			Color[] pixels4 = cubemap_0.GetPixels(CubemapFace.NegativeY, i);
			Color[] pixels5 = cubemap_0.GetPixels(CubemapFace.PositiveZ, i);
			Color[] pixels6 = cubemap_0.GetPixels(CubemapFace.NegativeZ, i);
			if (bool_17)
			{
				smethod_55(fileStream, pixels5);
				smethod_55(fileStream, pixels6);
				smethod_55(fileStream, pixels);
				smethod_55(fileStream, pixels2);
				smethod_55(fileStream, pixels3);
				smethod_55(fileStream, pixels4);
			}
			else
			{
				smethod_54(fileStream, pixels5, byte_0);
				smethod_54(fileStream, pixels6, byte_0);
				smethod_54(fileStream, pixels, byte_0);
				smethod_54(fileStream, pixels2, byte_0);
				smethod_54(fileStream, pixels3, byte_0);
				smethod_54(fileStream, pixels4, byte_0);
			}
		}
		fileStream.Close();
	}

	public static void smethod_54(FileStream fileStream_0, Color[] color_0, int int_16)
	{
		int num = color_0.Length;
		for (int i = 0; i < num; i++)
		{
			Color32 color = color_0[i];
			switch (int_16)
			{
			case 1:
				FSWriterHelper.Write_BytesArray(fileStream_0, color.r, color.g, color.b, color.a);
				break;
			case 0:
				FSWriterHelper.Write_BytesArray(fileStream_0, color.r, color.g, color.b);
				break;
			}
		}
	}

	public static void smethod_55(FileStream fileStream_0, Color[] color_0)
	{
		int num = color_0.Length;
		for (int i = 0; i < num; i++)
		{
			Color32 color = smethod_51(color_0[i], 5f);
			FSWriterHelper.Write_BytesArray(fileStream_0, color.r, color.g, color.b, color.a);
		}
	}

	private static void smethod_56(ExportDataItem class16_0)
	{
		SphericalHarmonicsL2 ambientProbe = RenderSettings.ambientProbe;
		for (int i = 0; i < 3; i++)
		{
			class16_0.Add_Number_Float(ambientProbe[i, 0]);
			class16_0.Add_Number_Float(ambientProbe[i, 1]);
			class16_0.Add_Number_Float(ambientProbe[i, 2]);
			class16_0.Add_Number_Float(ambientProbe[i, 3]);
			class16_0.Add_Number_Float(ambientProbe[i, 4]);
			class16_0.Add_Number_Float(ambientProbe[i, 5]);
			class16_0.Add_Number_Float(ambientProbe[i, 6]);
			class16_0.Add_Number_Float(ambientProbe[i, 7]);
			class16_0.Add_Number_Float(ambientProbe[i, 8]);
		}
	}

	public static void Export_AnimatorLayers(GameObject gameObject_0, ExportDataItem export_layers, bool bool_compress = false)
	{
		SeachNeedExportCmps(gameObject_0);
		AnimatorController animatorController = (AnimatorController)gameObject_0.GetComponent<Animator>().runtimeAnimatorController;
		if (animatorController == null)
		{
			Debug.LogWarning("LayaAir3D Warning(Code:1002) : " 
                + gameObject_0.name + "'s Animator Compoment must have a Controller!", gameObject_0);
			return;
		}
		var layers = animatorController.layers;
		for (int i = 0; i < layers.Length; i++)
		{
			var animatorControllerLayer = layers[i];
			var stateMachine = animatorControllerLayer.stateMachine;
			var states = stateMachine.states;
			var name = stateMachine.defaultState.name;
			int num2 = 0;
			for (int j = 0; j < states.Length; j++)
			{
				if (states[j].state.name == name)
				{
					num2 = j;
					break;
				}
			}

            // 将默认需要播放的移动到第一个
			var childAnimatorState = states[0];
			states[0] = states[num2];
			states[num2] = childAnimatorState;

			var export_layer = new ExportDataItem(ExportDataItem.Enum0.Object);
			export_layer.AddString("name", animatorControllerLayer.name);
			export_layer.method_18("weight", animatorControllerLayer.defaultWeight);
			if (animatorControllerLayer.blendingMode == AnimatorLayerBlendingMode.Override)
			{
				export_layer.AddNumber_Int("blendingMode", 0);
			}
			else if (animatorControllerLayer.blendingMode == AnimatorLayerBlendingMode.Additive)
			{
				export_layer.AddNumber_Int("blendingMode", 1);
			}
			else
			{
				export_layer.AddNumber_Int("blendingMode", 0);
			}

            var avatarMask = animatorControllerLayer.avatarMask;
            if (avatarMask)
            {
                var export_avatarmask = new ExportDataItem(ExportDataItem.Enum0.Object);
                int transformCount = avatarMask.transformCount;
                for (int k = 0; k < transformCount; k++)
                {
                    export_avatarmask.AddBoolean(avatarMask.GetTransformPath(k), avatarMask.GetTransformActive(k));
                }
                export_layer.Add_Class16("avatarMask", export_avatarmask);
            }

            var export_states = new ExportDataItem(ExportDataItem.Enum0.Array);
			export_layer.Add_Class16("states", export_states);
			export_layers.Add_ArrayData(export_layer);
			for (int k = 0; k < states.Length; k++)
			{
				var state = states[k].state;
				var export_state = new ExportDataItem(ExportDataItem.Enum0.Object);
				export_state.AddString("name", state.name);
				export_states.Add_ArrayData(export_state);
				var animationClip = state.motion as AnimationClip;
				if (animationClip != null)
				{
					var str = WrapName(animationClip.name, true);
					var text = WrapName(AssetDatabase.GetAssetPath(animationClip.GetInstanceID()).Split('.')[0], false) + "-" + str + ".lani";
					export_state.AddString("clipPath", text);
				}
			}
		}
		var key = GenSaveAnimatorControllerName(gameObject_0);
		if (!dictionary_4.ContainsKey(key))
		{
			dictionary_4.Add(key, gameObject_0);
		}
	}

	public static string GenSaveAnimatorControllerName(GameObject gameObject_0)
	{
		AnimatorController animatorController = (AnimatorController)gameObject_0.GetComponent<Animator>().runtimeAnimatorController;
		if (!animatorController)
		{
			return "";
		}
		string str = WrapName(animatorController.name, isFile: true);
		return string.Concat(WrapName(AssetDatabase.GetAssetPath(animatorController.GetInstanceID()).Split('.')[0], isFile: false) + "/" + str, ".lanit.ls");
	}

	public static void _DoExport_Animator(GameObject gameObject_0, bool bool_compress = false, backAnimatorData backAnimatorData_0 = null)
	{
		bool flag = backAnimatorData_0 != null;
		bool_compress = backAnimatorData_0 == null && bool_compress;
		List<ECMPType> list = SeachNeedExportCmps(gameObject_0);
		Dictionary<string, string> dictionary = new Dictionary<string, string>();
		dictionary.Add("UnityEngine.GameObject", "");
		dictionary.Add("UnityEngine.Transform", "transform");
		dictionary.Add("UnityEngine.MeshRenderer", "meshRenderer");
		dictionary.Add("UnityEngine.SkinnedMeshRenderer", "skinnedMeshRenderer");
		dictionary.Add("UnityEngine.ParticleSystemRenderer", "particleRenderer");
		dictionary.Add("UnityEngine.TrailRenderer", "trailRenderer");
		dictionary.Add("LayaExport.SimpleSkinnedMeshRenderer", "simpleSkinnedMeshRenderer");
		Dictionary<string, string> dictionary2 = new Dictionary<string, string>();
		dictionary2.Add("m_IsActive", "active");
		dictionary2.Add("m_LocalPosition", "localPosition");
		dictionary2.Add("m_LocalRotation", "localRotation");
		dictionary2.Add("m_LocalScale", "localScale");
		dictionary2.Add("localEulerAnglesRaw", "localRotationEuler");
		dictionary2.Add("material", "material");
		dictionary2.Add("m_Enabled", "enable");
		dictionary2.Add("r", "x");
		dictionary2.Add("g", "y");
		dictionary2.Add("b", "z");
		dictionary2.Add("a", "w");
		dictionary2.Add("x", "x");
		dictionary2.Add("y", "y");
		dictionary2.Add("z", "z");
		dictionary2.Add("w", "w");
		dictionary2.Add("simpleAnimatorOffset", "simpleAnimatorOffset");
		Dictionary<string, string> dictionary3 = new Dictionary<string, string>();
		dictionary3.Add("_Color", "albedoColor");
		dictionary3.Add("_EmissionColor", "emissionColor");
		dictionary3.Add("_EmissionMap", "emissionTexture");
		new Dictionary<string, byte>
		{
			{
				"m_LocalPosition",
				12
			},
			{
				"m_LocalRotation",
				16
			},
			{
				"m_LocalScale",
				12
			},
			{
				"localEulerAnglesRaw",
				12
			}
		};
		Dictionary<string, int> dictionary4 = new Dictionary<string, int>();
		dictionary4.Add("m_LocalPosition", 3);
		dictionary4.Add("m_LocalRotation", 4);
		dictionary4.Add("m_LocalScale", 3);
		dictionary4.Add("localEulerAnglesRaw", 3);
		List<string> list2 = new List<string>();
		list2.Add("x");
		list2.Add("y");
		list2.Add("z");
		List<string> list3 = new List<string>();
		list3.Add("x");
		list3.Add("y");
		list3.Add("z");
		list3.Add("w");
		new List<string>().Add("value");
		Dictionary<string, List<string>> dictionary5 = new Dictionary<string, List<string>>();
		dictionary5.Add("m_LocalPosition", list2);
		dictionary5.Add("m_LocalRotation", list3);
		dictionary5.Add("m_LocalScale", list2);
		dictionary5.Add("localEulerAnglesRaw", list2);
		new List<ushort>
		{
			12,
			16
		};
		AnimatorController animatorController = (AnimatorController)gameObject_0.GetComponent<Animator>().runtimeAnimatorController;
		if (animatorController == null)
		{
			Debug.LogWarning("LayaAir3D Warning(Code:1002) : " + gameObject_0.name + "'s Animator Compoment must have a Controller!");
			return;
		}
		AnimatorControllerLayer[] layers = animatorController.layers;
		int num = layers.Length;
		Struct3 struct3_ = default(Struct3);
		Struct4 item6 = default(Struct4);
		Struct3 struct3_2 = default(Struct3);
		Struct4 item7 = default(Struct4);
		Struct3 struct3_3 = default(Struct3);
		Struct4 item9 = default(Struct4);
		Struct3 struct3_4 = default(Struct3);
		Struct4 value5 = default(Struct4);
		Struct2 item11 = default(Struct2);
		Struct1 item15 = default(Struct1);
		for (int i = 0; i < num; i++)
		{
			ChildAnimatorState[] states = layers[i].stateMachine.states;
			for (int j = 0; j < states.Length; j++)
			{
				AnimationClip animationClip = states[j].state.motion as AnimationClip;
				List<double> list4 = new List<double>();
				List<string> list5 = new List<string>();
				list5.Add("ANIMATIONS");
				if (!(animationClip != null))
				{
					continue;
				}
				_ = gameObject_0.name;
				int num2 = (int)animationClip.frameRate;
				string text = WrapName(animationClip.name, isFile: true);
				list5.Add(text);
				string str = WrapName(AssetDatabase.GetAssetPath(animationClip.GetInstanceID()).Split('.')[0], isFile: false) + "-" + text + ".lani";
				string text2 = string_exportPath + "/" + str;
				List<EditorCurveBinding> list6 = new List<EditorCurveBinding>();
				SkinnedMeshRenderer[] componentsInChildren = gameObject_0.GetComponentsInChildren<SkinnedMeshRenderer>();
				bool flag2 = componentsInChildren.Length != 0;
				EditorCurveBinding[] curveBindings = AnimationUtility.GetCurveBindings(animationClip);
				Type type = new SimpleSkinnedMeshRenderer().GetType();
				if (flag && bool_bakeAnim && flag2)
				{
					backAnimatorData_0.saveLaniindex++;
					SkinnedMeshRenderer[] array = componentsInChildren;
					foreach (SkinnedMeshRenderer obj in array)
					{
						_ = obj.gameObject.name;
						string path = AnimationUtility.CalculateTransformPath(obj.gameObject.transform, gameObject_0.transform);
						EditorCurveBinding item = default(EditorCurveBinding);
						item.path = path;
						item.propertyName = "simpleAnimatorOffset.x";
						item.type = type;
						list6.Add(item);
						EditorCurveBinding item2 = default(EditorCurveBinding);
						item2.path = path;
						item2.propertyName = "simpleAnimatorOffset.y";
						item2.type = type;
						list6.Add(item2);
					}
				}
				int count = list6.Count;
				if (flag && bool_bakeAnim)
				{
					if (bool_keepsocket)
					{
						EditorCurveBinding[] array2 = curveBindings;
						for (int k = 0; k < array2.Length; k++)
						{
							EditorCurveBinding item3 = array2[k];
							string[] array3 = item3.path.Split('/');
							string item4 = "";
							bool flag3 = true;
							if (array3.Length != 0)
							{
								item4 = array3[array3.Length - 1];
							}
							if (backAnimatorData_0.boneNames.Contains(item4) && !backAnimatorData_0.socketsBoneNames.Contains(item4))
							{
								flag3 = false;
							}
							if (flag3)
							{
								list6.Add(item3);
							}
						}
					}
				}
				else
				{
					list6.AddRange(curveBindings);
				}
				EditorCurveBinding[] array4 = list6.ToArray();
				AnimationClipCurveData[] array5 = new AnimationClipCurveData[array4.Length];
				for (int l = 0; l < array4.Length; l++)
				{
					array5[l] = new AnimationClipCurveData(array4[l]);
					if (flag && bool_bakeAnim && flag2)
					{
						bool flag4 = l < count;
						if (l % 2 == 0 && flag4)
						{
							array5[l].curve = new AnimationCurve();
							Keyframe[] array6 = new Keyframe[2];
							array6[0].time = 0f;
							array6[1].time = animationClip.averageDuration;
							array6[0].value = backAnimatorData_0.clipIndex[backAnimatorData_0.saveLaniindex];
							array6[1].value = backAnimatorData_0.clipIndex[backAnimatorData_0.saveLaniindex];
							array5[l].curve.keys = array6;
							AnimationUtility.SetKeyLeftTangentMode(array5[l].curve, 0, AnimationUtility.TangentMode.Linear);
							AnimationUtility.SetKeyRightTangentMode(array5[l].curve, 0, AnimationUtility.TangentMode.Linear);
							AnimationUtility.SetKeyLeftTangentMode(array5[l].curve, 1, AnimationUtility.TangentMode.Linear);
							AnimationUtility.SetKeyRightTangentMode(array5[l].curve, 1, AnimationUtility.TangentMode.Linear);
						}
						else if (l % 2 == 1 && flag4)
						{
							array5[l].curve = new AnimationCurve();
							Keyframe[] array7 = new Keyframe[2];
							array7[0].time = 0f;
							array7[1].time = animationClip.averageDuration;
							array7[0].value = 2f;
							array7[1].value = (int)(animationClip.averageDuration * (float)backAnimatorData_0.bakeFPS + 0.5f) - 2;
							array5[l].curve.keys = array7;
							AnimationUtility.SetKeyLeftTangentMode(array5[l].curve, 0, AnimationUtility.TangentMode.Linear);
							AnimationUtility.SetKeyRightTangentMode(array5[l].curve, 0, AnimationUtility.TangentMode.Linear);
							AnimationUtility.SetKeyLeftTangentMode(array5[l].curve, 1, AnimationUtility.TangentMode.Linear);
							AnimationUtility.SetKeyRightTangentMode(array5[l].curve, 1, AnimationUtility.TangentMode.Linear);
						}
						else
						{
							array5[l].curve = AnimationUtility.GetEditorCurve(animationClip, array4[l]);
						}
					}
					else
					{
						array5[l].curve = AnimationUtility.GetEditorCurve(animationClip, array4[l]);
					}
				}
				for (int m = 0; m < array5.Length; m++)
				{
					Keyframe[] keys = array5[m].curve.keys;
					for (int n = 0; n < keys.Length; n++)
					{
						double item5 = Math.Round(keys[n].time, 3);
						if (list4.IndexOf(item5) == -1)
						{
							list4.Add(item5);
						}
					}
				}
				list4.Sort();
				List<string> list7 = new List<string>();
				List<Struct4> list8 = new List<Struct4>();
				foreach (AnimationClipCurveData animationClipCurveData in array5)
				{
					struct3_.keyframe_0 = animationClipCurveData.curve.keys;
					item6.struct3_0 = struct3_;
					item6.string_0 = animationClipCurveData.path;
					item6.string_1 = animationClipCurveData.propertyName;
					item6.type_0 = animationClipCurveData.type;
					list8.Add(item6);
				}
				List<Struct4> list9 = new List<Struct4>();
				List<Struct4> list10 = new List<Struct4>();
				foreach (AnimationClipCurveData animationClipCurveData2 in array5)
				{
					string path2 = animationClipCurveData2.path;
					string propertyName = animationClipCurveData2.propertyName;
					if (!dictionary.ContainsKey(animationClipCurveData2.type.ToString()))
					{
						continue;
					}
					switch (dictionary[animationClipCurveData2.type.ToString()])
					{
					case "meshRenderer":
					case "skinnedMeshRenderer":
					case "particleRenderer":
					case "trailRenderer":
					case "simpleSkinnedMeshRenderer":
					case "":
						struct3_2.keyframe_0 = animationClipCurveData2.curve.keys;
						item7.struct3_0 = struct3_2;
						item7.string_0 = animationClipCurveData2.path;
						item7.string_1 = animationClipCurveData2.propertyName;
						item7.type_0 = animationClipCurveData2.type;
						list10.Add(item7);
						continue;
					}
					string text4 = "";
					text4 = propertyName.Substring(0, propertyName.LastIndexOf('.'));
					string item8 = text4 + "|" + path2;
					if (list7.IndexOf(item8) != -1)
					{
						continue;
					}
					list7.Add(item8);
					list9 = new List<Struct4>();
					for (int num5 = 0; num5 < dictionary5[text4].Count; num5++)
					{
						string b = text4 + "." + dictionary5[text4][num5];
						for (int num6 = 0; num6 < list8.Count; num6++)
						{
							if (list8[num6].string_1 == b && list8[num6].string_0 == path2)
							{
								list9.Add(list8[num6]);
								list8.RemoveAt(list8.IndexOf(list8[num6]));
							}
						}
					}
					if (dictionary5[text4].Count != list9.Count)
					{
						List<Struct4> list11 = new List<Struct4>();
						for (int num7 = 0; num7 < dictionary5[text4].Count; num7++)
						{
							string b2 = text4 + "." + dictionary5[text4][num7];
							bool flag5 = false;
							for (int num8 = 0; num8 < list9.Count; num8++)
							{
								if (list9[num8].string_1 == b2)
								{
									flag5 = true;
									list11.Add(list9[num8]);
								}
							}
							if (!flag5)
							{
								struct3_3.keyframe_0 = new Keyframe[0];
								item9.string_0 = list9[0].string_0;
								item9.string_1 = b2;
								item9.type_0 = list9[0].type_0;
								item9.struct3_0 = struct3_3;
								list11.Add(item9);
							}
						}
						list9 = list11;
					}
					List<double> list12 = new List<double>();
					for (int num9 = 0; num9 < list9.Count; num9++)
					{
						Keyframe[] keyframe_ = list9[num9].struct3_0.keyframe_0;
						for (int num10 = 0; num10 < keyframe_.Length; num10++)
						{
							bool flag6 = false;
							for (int num11 = 0; num11 < list12.Count; num11++)
							{
								if (Math.Round(list12[num11], 3) == Math.Round(keyframe_[num10].time, 3))
								{
									flag6 = true;
								}
							}
							if (!flag6)
							{
								list12.Add(keyframe_[num10].time);
							}
						}
					}
					list12.Sort();
					List<Keyframe> list13 = new List<Keyframe>();
					for (int num12 = 0; num12 < list12.Count; num12++)
					{
						Keyframe item10 = default(Keyframe);
						item10.inTangent = float.NaN;
						item10.outTangent = float.NaN;
						item10.time = (float)list12[num12];
						item10.value = float.NaN;
						list13.Add(item10);
					}
					for (int num13 = 0; num13 < list9.Count; num13++)
					{
						List<Keyframe> list14 = list9[num13].struct3_0.keyframe_0.ToList();
						List<Keyframe> list15 = new List<Keyframe>();
						for (int num14 = 0; num14 < list12.Count; num14++)
						{
							bool flag7 = false;
							for (int num15 = 0; num15 < list14.Count; num15++)
							{
								if (Math.Round(list14[num15].time, 3) == Math.Round(list12[num14], 3))
								{
									flag7 = true;
									list15.Add(list14[num15]);
								}
							}
							if (!flag7)
							{
								list15.Add(list13[num14]);
							}
						}
						for (int num16 = 0; num16 < list12.Count; num16++)
						{
							if (!float.IsNaN(list15[num16].value))
							{
								continue;
							}
							bool flag8 = false;
							bool flag9 = false;
							int index = -1;
							int index2 = -1;
							int num17 = num16 - 1;
							while (num17 >= 0)
							{
								if (float.IsNaN(list15[num17].value))
								{
									num17--;
									continue;
								}
								flag8 = true;
								index = num17;
								break;
							}
							for (int num18 = num16 + 1; num18 < list12.Count; num18++)
							{
								if (!float.IsNaN(list15[num18].value))
								{
									flag9 = true;
									index2 = num18;
									break;
								}
							}
							if (flag8 && flag9)
							{
								float num19 = list15[index2].time - list15[index].time;
								float float_ = (float)((list12[num16] - list12[index]) / (list12[index2] - list12[index]));
								float float_2;
								float value = LayaMathHelper.smethod_5((float)list12[index], (float)list12[index2], list15[index].value, list15[index2].value, list15[index].outTangent * num19, list15[index2].inTangent * num19, float_, out float_2);
								Keyframe value2 = default(Keyframe);
								float num22 = (value2.inTangent = (value2.outTangent = float_2));
								value2.value = value;
								value2.time = (float)list12[num16];
								list15[num16] = value2;
							}
							else if (flag8 && !flag9)
							{
								Keyframe value3 = default(Keyframe);
								float num22 = 0f;
								value3.outTangent = 0f;
								value3.inTangent = num22;
								value3.value = list15[index].value;
								value3.time = (float)list12[num16];
								list15[num16] = value3;
							}
							else if (!flag8 && flag9)
							{
								Keyframe value4 = default(Keyframe);
								float num22 = 0f;
								value4.outTangent = 0f;
								value4.inTangent = num22;
								value4.value = list15[index2].value;
								value4.time = (float)list12[num16];
								list15[num16] = value4;
							}
							else
							{
								Debug.LogWarning(gameObject_0.name + "'s Animator " + gameObject_0.name + "/" + list9[num13].string_0 + " " + list9[num13].string_1 + " keyFrame data can't be null!");
							}
						}
						struct3_4.keyframe_0 = list15.ToArray();
						value5.struct3_0 = struct3_4;
						value5.string_0 = list9[num13].string_0;
						value5.string_1 = list9[num13].string_1;
						value5.type_0 = list9[num13].type_0;
						list9[num13] = value5;
					}
					for (int num23 = 0; num23 < list9.Count; num23++)
					{
						list10.Add(list9[num23]);
					}
				}
				List<Struct2> list16 = new List<Struct2>();
				int num24 = 0;
				for (int num25 = 0; num25 < list10.Count; num25 += num24)
				{
					Struct4 @struct = list10[num25];
					List<ushort> list17 = new List<ushort>();
					string text5 = @struct.string_0;
					bool flag10 = false;
					GameObject gameObject = gameObject_0;
					string[] array8 = text5.Split('/');
					for (int num26 = 0; num26 < array8.Length; num26++)
					{
						if (list5.IndexOf(array8[num26]) == -1)
						{
							list5.Add(array8[num26]);
						}
						list17.Add((ushort)list5.IndexOf(array8[num26]));
						Transform transform = gameObject.transform.Find(array8[num26]);
						if ((bool)transform)
						{
							gameObject = transform.gameObject;
							continue;
						}
						gameObject = null;
						Debug.LogWarning(gameObject_0.name + "'s Aniamtor: " + text + " clip " + array8[num26] + " is missing");
						break;
					}
					if ((bool)gameObject)
					{
						List<ECMPType> list18 = SeachNeedExportCmps(gameObject);
						if (list18.IndexOf(ECMPType.Camera) != -1 || list18.IndexOf(ECMPType.DirectionalLight) != -1 || list18.IndexOf(ECMPType.SpotLight) != -1)
						{
							flag10 = true;
						}
					}
					item11.ushort_0 = (ushort)list17.Count;
					item11.list_0 = list17;
					string text6 = dictionary[@struct.type_0.ToString()];
					if (list5.IndexOf(text6) == -1)
					{
						list5.Add(text6);
					}
					item11.ushort_1 = (ushort)list5.IndexOf(text6);
					string[] array9 = @struct.string_1.Split('.');
					try
					{
						num24 = dictionary4[array9[0]];
					}
					catch (Exception ex)
					{
						ex.ToString();
						num24 = 1;
					}
					List<ushort> list19 = new List<ushort>();
					string key = array9[0];
					if (dictionary2.ContainsKey(array9[0]))
					{
						key = dictionary2[key];
						switch (text6)
						{
						case "transform":
							if (list5.IndexOf(key) == -1)
							{
								list5.Add(key);
							}
							list19.Add((ushort)list5.IndexOf(key));
							item11.ushort_2 = 1;
							item11.list_1 = list19;
							break;
						default:
							item11.ushort_2 = 0;
							item11.list_1 = list19;
							Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " Animation attribute length overbounds!");
							break;
						case "meshRenderer":
						case "skinnedMeshRenderer":
						case "particleRenderer":
						case "trailRenderer":
						case "simpleSkinnedMeshRenderer":
						case "":
							if (array9.Length == 1)
							{
								if (list5.IndexOf(key) == -1)
								{
									list5.Add(key);
								}
								list19.Add((ushort)list5.IndexOf(key));
								item11.ushort_2 = 1;
								item11.list_1 = list19;
							}
							else if (array9.Length == 2)
							{
								if (list5.IndexOf(key) == -1)
								{
									list5.Add(key);
								}
								list19.Add((ushort)list5.IndexOf(key));
								string item12 = array9[1];
								if (list5.IndexOf(item12) == -1)
								{
									list5.Add(item12);
								}
								list19.Add((ushort)list5.IndexOf(item12));
								item11.ushort_2 = 2;
								item11.list_1 = list19;
							}
							else if (array9.Length == 3)
							{
								if (key == "material")
								{
									Material material = null;
									switch (text6)
									{
									case "skinnedMeshRenderer":
									case "simpleSkinnedMeshRenderer":
									{
										SkinnedMeshRenderer component2 = gameObject.GetComponent<SkinnedMeshRenderer>();
										if ((bool)component2)
										{
											material = component2.sharedMaterial;
										}
										break;
									}
									case "meshRenderer":
									{
										MeshRenderer component = gameObject.GetComponent<MeshRenderer>();
										if ((bool)component)
										{
											material = component.sharedMaterial;
										}
										break;
									}
									}
									if ((bool)material && (material.shader.name == "LayaAir3D/Mesh/PBRStandardMaterial" || material.shader.name == "LayaAir3D/Mesh/PBRSpecularMaterial") && dictionary3.ContainsKey(array9[1]))
									{
										array9[1] = dictionary3[array9[1]];
									}
								}
								if (list5.IndexOf(key) == -1)
								{
									list5.Add(key);
								}
								list19.Add((ushort)list5.IndexOf(key));
								string item13 = array9[1];
								string item14 = dictionary2[array9[2]];
								if (list5.IndexOf(item13) == -1)
								{
									list5.Add(item13);
								}
								if (list5.IndexOf(item14) == -1)
								{
									list5.Add(item14);
								}
								list19.Add((ushort)list5.IndexOf(item13));
								list19.Add((ushort)list5.IndexOf(item14));
								item11.ushort_2 = 3;
								item11.list_1 = list19;
							}
							else
							{
								item11.ushort_2 = 0;
								item11.list_1 = list19;
								Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " Animation attribute length overbounds!");
							}
							break;
						}
						if (array9[0] == "m_LocalPosition")
						{
							item11.byte_0 = 1;
						}
						else if (array9[0] == "m_LocalRotation")
						{
							item11.byte_0 = 2;
						}
						else if (array9[0] == "m_LocalScale")
						{
							item11.byte_0 = 3;
						}
						else if (array9[0] == "localEulerAnglesRaw")
						{
							item11.byte_0 = 4;
						}
						else
						{
							item11.byte_0 = 0;
						}
						List<Struct1> list20 = new List<Struct1>();
						Keyframe[] keyframe_2 = @struct.struct3_0.keyframe_0;
						float num27 = 0f;
						for (int num28 = 0; num28 < keyframe_2.Length; num28++)
						{
							num27 = keyframe_2[num28].time;
							item15.ushort_0 = (ushort)list4.IndexOf(Math.Round(num27, 3));
							List<float> list21 = new List<float>();
							List<float> list22 = new List<float>();
							List<float> list23 = new List<float>();
							int num29 = 0;
							if (key == "localRotation" && flag10)
							{
								float[] array10 = new float[4];
								for (int num30 = num25; num30 < num25 + num24; num30++)
								{
									Keyframe keyframe = list10[num30].struct3_0.keyframe_0[num28];
									array10[num30 - num25] = keyframe.value;
								}
								Quaternion quaternion = new Quaternion(array10[0], array10[1], array10[2], array10[3]);
								quaternion *= new Quaternion(0f, 1f, 0f, 0f);
								array10[0] = quaternion.x;
								array10[1] = quaternion.y;
								array10[2] = quaternion.z;
								array10[3] = quaternion.w;
								for (int num31 = num25; num31 < num25 + num24; num31++)
								{
									list10[num31].struct3_0.keyframe_0[num28].value = array10[num31 - num25];
								}
							}
							if (key == "localRotationEuler" && flag10)
							{
								float[] array11 = new float[3];
								for (int num32 = num25; num32 < num25 + num24; num32++)
								{
									Keyframe keyframe = list10[num32].struct3_0.keyframe_0[num28];
									array11[num32 - num25] = keyframe.value;
								}
								Vector3 eulerAngles = new Vector3(array11[0], array11[1], array11[2]);
								Quaternion lhs = default(Quaternion);
								lhs.eulerAngles = eulerAngles;
								eulerAngles = (lhs * new Quaternion(0f, 1f, 0f, 0f)).eulerAngles;
								array11[0] = eulerAngles.x;
								array11[1] = eulerAngles.y;
								array11[2] = eulerAngles.z;
								for (int num33 = num25; num33 < num25 + num24; num33++)
								{
									list10[num33].struct3_0.keyframe_0[num28].value = array11[num33 - num25];
								}
							}
							for (int num34 = num25; num34 < num25 + num24; num34++)
							{
								Keyframe keyframe = list10[num34].struct3_0.keyframe_0[num28];
								switch (key)
								{
								case "localPosition":
									if (num29 == 0)
									{
										list21.Add(keyframe.value * -1f);
										list22.Add(keyframe.inTangent * -1f);
										list23.Add(keyframe.outTangent * -1f);
									}
									else
									{
										list21.Add(keyframe.value);
										list22.Add(keyframe.inTangent);
										list23.Add(keyframe.outTangent);
									}
									break;
								case "localRotation":
									if (num29 != 0 && num29 != 3)
									{
										list21.Add(keyframe.value);
										list22.Add(keyframe.inTangent);
										list23.Add(keyframe.outTangent);
									}
									else
									{
										list21.Add(keyframe.value * -1f);
										list22.Add(keyframe.inTangent * -1f);
										list23.Add(keyframe.outTangent * -1f);
									}
									break;
								case "localRotationEuler":
									list.IndexOf(ECMPType.Camera);
									if (num29 != 1 && num29 != 2)
									{
										list21.Add(keyframe.value);
										list22.Add(keyframe.inTangent);
										list23.Add(keyframe.outTangent);
									}
									else
									{
										list21.Add(keyframe.value * -1f);
										list22.Add(keyframe.inTangent * -1f);
										list23.Add(keyframe.outTangent * -1f);
									}
									break;
								default:
									list21.Add(keyframe.value);
									list22.Add(keyframe.inTangent);
									list23.Add(keyframe.outTangent);
									break;
								}
								num29++;
							}
							item15.list_2 = list21;
							item15.list_0 = list22;
							item15.list_1 = list23;
							list20.Add(item15);
						}
						item11.ushort_3 = (ushort)keyframe_2.Length;
						item11.list_2 = list20;
						list16.Add(item11);
					}
					else
					{
						Debug.LogWarning("LayaAir3D : \"" + gameObject_0.name + "\" Aniamtion clip: \"" + text + "\" have nosupport attrition: " + text5 + ":" + @struct.string_1);
					}
				}
				FileStream fileStream = FSWriterHelper.CreateFS(text2);
				long num35 = 0L;
				long num36 = 0L;
				long num37 = 0L;
				long num38 = 0L;
				long num39 = 0L;
				long num40 = 0L;
				string text7 = ((!bool_compress) ? string_9 : string_10);
				FSWriterHelper.Write_String(fileStream, text7);
				num35 = fileStream.Position;
				FSWriterHelper.Write_UnitArray(fileStream, default(uint));
				FSWriterHelper.Write_UnitArray(fileStream, default(uint));
				num36 = fileStream.Position;
				int num41 = 1;
				FSWriterHelper.Write_UnshortArray(fileStream, 1);
				for (int num42 = 0; num42 < num41; num42++)
				{
					FSWriterHelper.Write_UnitArray(fileStream, default(uint));
					FSWriterHelper.Write_UnitArray(fileStream, default(uint));
				}
				num37 = fileStream.Position;
				FSWriterHelper.Write_UnitArray(fileStream, default(uint));
				FSWriterHelper.Write_UnshortArray(fileStream, default(ushort));
				num38 = fileStream.Position;
				FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list5.IndexOf("ANIMATIONS"));
				FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list4.Count);
				for (int num43 = 0; num43 < list4.Count; num43++)
				{
					FSWriterHelper.Write_FloatArray(fileStream, (float)list4[num43]);
				}
				FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list5.IndexOf(text));
				float num44 = ((list4.Count == 0) ? 0f : ((float)list4[list4.Count - 1]));
				FSWriterHelper.Write_FloatArray(fileStream, num44);
				FSWriterHelper.Write_BooleanArray(fileStream, animationClip.isLooping);
				FSWriterHelper.Write_UnshortArray(fileStream, (ushort)num2);
				FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list16.Count);
				for (int num45 = 0; num45 < list16.Count; num45++)
				{
					item11 = list16[num45];
					FSWriterHelper.Write_BytesArray(fileStream, item11.byte_0);
					FSWriterHelper.Write_UnshortArray(fileStream, item11.ushort_0);
					for (int num46 = 0; num46 < item11.ushort_0; num46++)
					{
						FSWriterHelper.Write_UnshortArray(fileStream, item11.list_0[num46]);
					}
					FSWriterHelper.Write_UnshortArray(fileStream, item11.ushort_1);
					FSWriterHelper.Write_UnshortArray(fileStream, item11.ushort_2);
					for (int num47 = 0; num47 < item11.ushort_2; num47++)
					{
						FSWriterHelper.Write_UnshortArray(fileStream, item11.list_1[num47]);
					}
					FSWriterHelper.Write_UnshortArray(fileStream, item11.ushort_3);
					if (bool_compress)
					{
						for (int num48 = 0; num48 < item11.ushort_3; num48++)
						{
							FSWriterHelper.Write_UnshortArray(fileStream, item11.list_2[num48].ushort_0);
							List<float> list_ = item11.list_2[num48].list_2;
							List<float> list24 = item11.list_2[num48].list_0;
							List<float> list25 = item11.list_2[num48].list_1;
							for (int num49 = 0; num49 < list24.Count; num49++)
							{
								FSWriterHelper.Write_UnshortArray(fileStream, CompressHelper.smethod_0(list24[num49]));
							}
							for (int num50 = 0; num50 < list25.Count; num50++)
							{
								FSWriterHelper.Write_UnshortArray(fileStream, CompressHelper.smethod_0(list25[num50]));
							}
							for (int num51 = 0; num51 < list_.Count; num51++)
							{
								FSWriterHelper.Write_UnshortArray(fileStream, CompressHelper.smethod_0(list_[num51]));
							}
						}
						continue;
					}
					for (int num52 = 0; num52 < item11.ushort_3; num52++)
					{
						FSWriterHelper.Write_UnshortArray(fileStream, item11.list_2[num52].ushort_0);
						List<float> list_2 = item11.list_2[num52].list_2;
						List<float> list26 = item11.list_2[num52].list_0;
						List<float> list27 = item11.list_2[num52].list_1;
						for (int num53 = 0; num53 < list26.Count; num53++)
						{
							FSWriterHelper.Write_FloatArray(fileStream, list26[num53]);
						}
						for (int num54 = 0; num54 < list27.Count; num54++)
						{
							FSWriterHelper.Write_FloatArray(fileStream, list27[num54]);
						}
						for (int num55 = 0; num55 < list_2.Count; num55++)
						{
							FSWriterHelper.Write_FloatArray(fileStream, list_2[num55]);
						}
					}
				}
				AnimationEvent[] events = animationClip.events;
				int num56 = events.Length;
				FSWriterHelper.Write_ShortArray(fileStream, (short)num56);
				for (int num57 = 0; num57 < num56; num57++)
				{
					AnimationEvent animationEvent = events[num57];
					FSWriterHelper.Write_FloatArray(fileStream, animationEvent.time);
					string functionName = animationEvent.functionName;
					if (list5.IndexOf(functionName) == -1)
					{
						list5.Add(functionName);
					}
					FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list5.IndexOf(functionName));
					FSWriterHelper.Write_UnshortArray(fileStream, 3);
					for (int num58 = 0; num58 < 1; num58++)
					{
						FSWriterHelper.Write_BytesArray(fileStream, 2);
						FSWriterHelper.Write_FloatArray(fileStream, animationEvent.floatParameter);
						FSWriterHelper.Write_BytesArray(fileStream, 1);
						FSWriterHelper.Write_IntArray(fileStream, animationEvent.intParameter);
						FSWriterHelper.Write_BytesArray(fileStream, 3);
						string stringParameter = animationEvent.stringParameter;
						if (list5.IndexOf(stringParameter) == -1)
						{
							list5.Add(stringParameter);
						}
						FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list5.IndexOf(stringParameter));
					}
				}
				num39 = fileStream.Position;
				for (int num59 = 0; num59 < list5.Count; num59++)
				{
					FSWriterHelper.Write_String(fileStream, list5[num59]);
				}
				num40 = fileStream.Position;
				fileStream.Position = num37 + 4L;
				FSWriterHelper.Write_UnshortArray(fileStream, (ushort)list5.Count);
				fileStream.Position = num36 + 2L + 4L;
				FSWriterHelper.Write_UnitArray(fileStream, (uint)(num39 - num38));
				fileStream.Position = num35;
				FSWriterHelper.Write_UnitArray(fileStream, (uint)num39);
				FSWriterHelper.Write_UnitArray(fileStream, (uint)(num40 - num39));
				fileStream.Close();
			}
		}
	}

	public static void smethod_61(string string_13, ExportDataItem class16_0, GameObject gameObject_0 = null)
	{
		ExportTerrainHelper.smethod_0(string_13, class16_0);
	}

	public static void smethod_62(ParticleSystem.MinMaxCurve minMaxCurve_0, ExportDataItem class16_0, string string_13, string string_14, int int_16, float float_2, float float_3, bool bool_17 = false)
	{
		AnimationCurve animationCurve;
		switch (int_16)
		{
		case -1:
			animationCurve = minMaxCurve_0.curveMin;
			break;
		case 1:
			animationCurve = minMaxCurve_0.curveMax;
			break;
		default:
			animationCurve = minMaxCurve_0.curve;
			break;
		}
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Object);
		ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Array);
		ExportDataItem class3 = new ExportDataItem(ExportDataItem.Enum0.Object);
		if (animationCurve != null && animationCurve.length != 0)
		{
			int length = animationCurve.length;
			if (length <= 0)
			{
				return;
			}
			if (!bool_17)
			{
				class16_0.Add_Class16(string_13, @class);
			}
			else
			{
				if (animationCurve.length == 2 && animationCurve[0].time == 0f && animationCurve[0].value == 0f && animationCurve[1].time == 1f && smethod_76(animationCurve[1].value, 1f) && smethod_76(float_2, 1f))
				{
					return;
				}
				class16_0.Add_Class16(string_13, @class);
			}
			for (int i = 0; i < length; i++)
			{
				Keyframe keyframe = animationCurve[i];
				if (i == 0)
				{
					class3 = new ExportDataItem(ExportDataItem.Enum0.Object);
					class3.method_18("key", 0f);
					class3.method_18("value", keyframe.value * float_2 * float_3);
					class2.Add_ArrayData(class3);
					if (keyframe.time - float_1 > 0f && (double)keyframe.time < 0.5)
					{
						class3 = new ExportDataItem(ExportDataItem.Enum0.Object);
						class3.method_18("key", keyframe.time);
						class3.method_18("value", keyframe.value * float_2 * float_3);
						class2.Add_ArrayData(class3);
					}
				}
				if (i != 0 && i != length - 1)
				{
					class3 = new ExportDataItem(ExportDataItem.Enum0.Object);
					class3.method_18("key", keyframe.time);
					class3.method_18("value", keyframe.value * float_2 * float_3);
					class2.Add_ArrayData(class3);
				}
				if (i == length - 1)
				{
					if (keyframe.time + float_1 < 1f && (double)keyframe.time >= 0.5)
					{
						class3 = new ExportDataItem(ExportDataItem.Enum0.Object);
						class3.method_18("key", keyframe.time);
						class3.method_18("value", keyframe.value * float_2 * float_3);
						class2.Add_ArrayData(class3);
					}
					class3 = new ExportDataItem(ExportDataItem.Enum0.Object);
					class3.method_18("key", 1f);
					class3.method_18("value", keyframe.value * float_2 * float_3);
					class2.Add_ArrayData(class3);
				}
			}
		}
		@class.Add_Class16(string_14, class2);
	}

	public static void smethod_63(Gradient gradient_0, ExportDataItem class16_0, string string_13)
	{
		if (gradient_0 == null)
		{
			return;
		}
		bool flag = false;
		GradientAlphaKey[] alphaKeys = gradient_0.alphaKeys;
		GradientColorKey[] colorKeys = gradient_0.colorKeys;
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Object);
		ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Array);
		ExportDataItem class3 = new ExportDataItem(ExportDataItem.Enum0.Object);
		if (alphaKeys != null && alphaKeys.Length != 0)
		{
			int num = alphaKeys.Length;
			for (int i = 0; i < num; i++)
			{
				GradientAlphaKey gradientAlphaKey = alphaKeys[i];
				if (i == 0)
				{
					class3 = new ExportDataItem(ExportDataItem.Enum0.Object);
					class3.method_18("key", 0f);
					class3.method_18("value", gradientAlphaKey.alpha);
					class2.Add_ArrayData(class3);
					if (gradientAlphaKey.time - float_1 > 0f && (double)gradientAlphaKey.time < 0.5)
					{
						class3 = new ExportDataItem(ExportDataItem.Enum0.Object);
						class3.method_18("key", gradientAlphaKey.time);
						class3.method_18("value", gradientAlphaKey.alpha);
						class2.Add_ArrayData(class3);
					}
				}
				if (i != 0 && i != num - 1)
				{
					class3 = new ExportDataItem(ExportDataItem.Enum0.Object);
					class3.method_18("key", gradientAlphaKey.time);
					class3.method_18("value", gradientAlphaKey.alpha);
					class2.Add_ArrayData(class3);
				}
				if (i == num - 1)
				{
					if (gradientAlphaKey.time + float_1 < 1f && (double)gradientAlphaKey.time >= 0.5)
					{
						class3 = new ExportDataItem(ExportDataItem.Enum0.Object);
						class3.method_18("key", gradientAlphaKey.time);
						class3.method_18("value", gradientAlphaKey.alpha);
						class2.Add_ArrayData(class3);
					}
					class3 = new ExportDataItem(ExportDataItem.Enum0.Object);
					class3.method_18("key", 1f);
					class3.method_18("value", gradientAlphaKey.alpha);
					class2.Add_ArrayData(class3);
				}
			}
		}
		if (alphaKeys.Length != 2 || alphaKeys[0].alpha != 1f || alphaKeys[1].alpha != 1f)
		{
			@class.Add_Class16("alphas", class2);
			flag = true;
		}
		ExportDataItem class4 = new ExportDataItem(ExportDataItem.Enum0.Array);
		ExportDataItem class5 = new ExportDataItem(ExportDataItem.Enum0.Object);
		ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
		if (colorKeys != null && colorKeys.Length != 0)
		{
			int num2 = colorKeys.Length;
			for (int j = 0; j < num2; j++)
			{
				GradientColorKey gradientColorKey = colorKeys[j];
				if (j == 0)
				{
					class5 = new ExportDataItem(ExportDataItem.Enum0.Object);
					class5.method_18("key", 0f);
					class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
					class6.Add_Number_Float(gradientColorKey.color.r);
					class6.Add_Number_Float(gradientColorKey.color.g);
					class6.Add_Number_Float(gradientColorKey.color.b);
					class5.Add_Class16("value", class6);
					class4.Add_ArrayData(class5);
					if (gradientColorKey.time - float_1 > 0f && (double)gradientColorKey.time < 0.5)
					{
						class5 = new ExportDataItem(ExportDataItem.Enum0.Object);
						class5.method_18("key", gradientColorKey.time);
						class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
						class6.Add_Number_Float(gradientColorKey.color.r);
						class6.Add_Number_Float(gradientColorKey.color.g);
						class6.Add_Number_Float(gradientColorKey.color.b);
						class5.Add_Class16("value", class6);
						class4.Add_ArrayData(class5);
					}
				}
				if (j != 0 && j != num2 - 1)
				{
					class5 = new ExportDataItem(ExportDataItem.Enum0.Object);
					class5.method_18("key", gradientColorKey.time);
					class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
					class6.Add_Number_Float(gradientColorKey.color.r);
					class6.Add_Number_Float(gradientColorKey.color.g);
					class6.Add_Number_Float(gradientColorKey.color.b);
					class5.Add_Class16("value", class6);
					class4.Add_ArrayData(class5);
				}
				if (j == num2 - 1)
				{
					if (gradientColorKey.time + float_1 < 1f && (double)gradientColorKey.time >= 0.5)
					{
						class5 = new ExportDataItem(ExportDataItem.Enum0.Object);
						class5.method_18("key", gradientColorKey.time);
						class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
						class6.Add_Number_Float(gradientColorKey.color.r);
						class6.Add_Number_Float(gradientColorKey.color.g);
						class6.Add_Number_Float(gradientColorKey.color.b);
						class5.Add_Class16("value", class6);
						class4.Add_ArrayData(class5);
					}
					class5 = new ExportDataItem(ExportDataItem.Enum0.Object);
					class5.method_18("key", 1f);
					class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
					class6.Add_Number_Float(gradientColorKey.color.r);
					class6.Add_Number_Float(gradientColorKey.color.g);
					class6.Add_Number_Float(gradientColorKey.color.b);
					class5.Add_Class16("value", class6);
					class4.Add_ArrayData(class5);
				}
			}
		}
		if (colorKeys.Length != 2 || colorKeys[0].color.r != 1f || colorKeys[0].color.g != 1f || colorKeys[0].color.b != 1f || colorKeys[1].color.r != 1f || colorKeys[1].color.g != 1f || colorKeys[1].color.b != 1f)
		{
			@class.Add_Class16("rgbs", class4);
			flag = true;
		}
		if (flag)
		{
			class16_0.Add_Class16(string_13, @class);
		}
	}

	public static Texture2D smethod_64(Color[] color_0)
	{
		int num = 0;
		int num2;
		int num3 = (num2 = (int)Mathf.Sqrt(color_0.Length));
		Texture2D texture2D = new Texture2D(num3, num2);
		for (int i = 0; i < num2; i++)
		{
			for (int j = 0; j < num3; j++)
			{
				texture2D.SetPixel(j, num2 - 1 - i, color_0[num++]);
			}
		}
		return texture2D;
	}

	private static Class32 smethod_65(Vector3[] vector3_0, Vector3[] vector3_1, Color[] color_0, Vector2[] vector2_0, Vector2[] vector2_1, BoneWeight[] boneWeight_0, Vector4[] vector4_0, int int_16)
	{
		Class32 @class = new Class32();
		@class.int_0 = int_16;
		@class.vector3_0 = vector3_0[int_16];
		if (int_8[1] == 1)
		{
			@class.vector3_1 = vector3_1[int_16];
		}
		else
		{
			@class.vector3_1 = default(Vector3);
		}
		if (int_8[2] == 1)
		{
			@class.color_0 = color_0[int_16];
		}
		else
		{
			@class.color_0 = default(Color);
		}
		if (int_8[3] == 1)
		{
			@class.vector2_0 = vector2_0[int_16];
		}
		else
		{
			@class.vector2_0 = default(Vector2);
		}
		if (int_8[4] == 1)
		{
			@class.vector2_1 = vector2_1[int_16];
		}
		else
		{
			@class.vector2_1 = default(Vector2);
		}
		if (int_8[5] == 1)
		{
			BoneWeight boneWeight = boneWeight_0[int_16];
			@class.vector4_0.x = boneWeight.weight0;
			@class.vector4_0.y = boneWeight.weight1;
			@class.vector4_0.z = boneWeight.weight2;
			@class.vector4_0.w = boneWeight.weight3;
			@class.vector4_1.x = boneWeight.boneIndex0;
			@class.vector4_1.y = boneWeight.boneIndex1;
			@class.vector4_1.z = boneWeight.boneIndex2;
			@class.vector4_1.w = boneWeight.boneIndex3;
		}
		else
		{
			@class.vector4_0 = default(Vector4);
			@class.vector4_1 = default(Vector4);
		}
		if (int_8[6] == 1)
		{
			@class.vector4_2 = vector4_0[int_16];
		}
		else
		{
			@class.vector4_2 = default(Vector4);
		}
		return @class;
	}

	private static bool smethod_66(GameObject gameObject_0, ECMPType enum3_0, bool bool_17, bool bool_18)
	{
		GameObject gameObject_ = gameObject_0;
		if (bool_18)
		{
			gameObject_ = gameObject_0.transform.parent.gameObject;
		}
		List<GameObject> list = new List<GameObject>();
		smethod_67(gameObject_, enum3_0, list, bool_17);
		if (list.Count > 0)
		{
			return true;
		}
		return false;
	}

	private static void smethod_67(GameObject gameObject_0, ECMPType enum3_0, List<GameObject> list_2, bool bool_17)
	{
		if (gameObject_0.transform.childCount <= 0)
		{
			return;
		}
		for (int i = 0; i < gameObject_0.transform.childCount; i++)
		{
			GameObject gameObject = gameObject_0.transform.GetChild(i).gameObject;
			if (SeachNeedExportCmps(gameObject).IndexOf(enum3_0) != -1)
			{
				list_2.Add(gameObject);
			}
			if (!bool_17)
			{
				smethod_67(gameObject, enum3_0, list_2, bool_17);
			}
		}
	}

	private static GameObject smethod_68(GameObject gameObject_0, ECMPType enum3_0)
	{
		if (gameObject_0.transform.parent == null)
		{
			return null;
		}
		GameObject gameObject = gameObject_0.transform.parent.gameObject;
		if (SeachNeedExportCmps(gameObject).IndexOf(enum3_0) != -1)
		{
			return gameObject;
		}
		return smethod_68(gameObject, enum3_0);
	}

	private static bool smethod_69(GameObject gameObject_0)
	{
		int num = 0;
		while (true)
		{
			if (num < gameObject_0.transform.childCount)
			{
				GameObject gameObject = gameObject_0.transform.GetChild(num).gameObject;
				if (SeachNeedExportCmps(gameObject).Count > 1 && gameObject.activeInHierarchy)
				{
					break;
				}
				num++;
				continue;
			}
			return false;
		}
		return true;
	}

	private static void smethod_71(GameObject gameObject_0, bool bool_17)
	{
		_ = SeachNeedExportCmps(gameObject_0).Count;
		if (gameObject_0.transform.childCount > 0)
		{
			for (int i = 0; i < gameObject_0.transform.childCount; i++)
			{
				GameObject gameObject = gameObject_0.transform.GetChild(i).gameObject;
				_ = SeachNeedExportCmps(gameObject).Count;
				smethod_71(gameObject, bool_17: false);
			}
		}
	}

	private static void SearchObjChildren(GameObject gameObject_0, bool bool_17)
	{
		if (bool_17)
		{
			bool_16 = false;
		}
		if (gameObject_0.transform.childCount <= 0)
		{
			return;
		}
		for (int i = 0; i < gameObject_0.transform.childCount; i++)
		{
			GameObject gameObject = gameObject_0.transform.GetChild(i).gameObject;
			if (SeachNeedExportCmps(gameObject).Count >= 1)
			{
				bool_16 = true;
			}
			SearchObjChildren(gameObject, bool_17: false);
		}
	}

	private static bool smethod_73(Transform transform_0, Transform transform_1, Transform transform_2, int int_16)
	{
		if (transform_0 == transform_1)
		{
			return true;
		}
		int num = 0;
		while (true)
		{
			if (num < int_16)
			{
				if (transform_2 == transform_0)
				{
					break;
				}
				if (!(transform_1 == transform_2))
				{
					transform_2 = transform_2.parent;
					num++;
					continue;
				}
				return true;
			}
			return false;
		}
		return false;
	}

	private static List<ECMPType> SeachNeedExportCmps(GameObject gameObject_0)
	{
		List<ECMPType> list = new List<ECMPType>();
		Camera componentCamera = gameObject_0.GetComponent<Camera>();
		Light componentLight = gameObject_0.GetComponent<Light>();
		MeshFilter componentMeshfilter = gameObject_0.GetComponent<MeshFilter>();
		MeshRenderer componentMeshrenderer = gameObject_0.GetComponent<MeshRenderer>();
		SkinnedMeshRenderer componentSkinnedMeshRenderer = gameObject_0.GetComponent<SkinnedMeshRenderer>();
		Animation componentAnimation = gameObject_0.GetComponent<Animation>();
		Animator componentAnimator = gameObject_0.GetComponent<Animator>();
		ParticleSystem componentParticleSystem = gameObject_0.GetComponent<ParticleSystem>();
		Terrain componentTerrain = gameObject_0.GetComponent<Terrain>();
		BoxCollider componentBoxCollider = gameObject_0.GetComponent<BoxCollider>();
		SphereCollider componentSphereCollider = gameObject_0.GetComponent<SphereCollider>();
		CapsuleCollider componentCapsuleCollider = gameObject_0.GetComponent<CapsuleCollider>();
		MeshCollider componentMeshCollider = gameObject_0.GetComponent<MeshCollider>();
		Rigidbody componentRigidbody = gameObject_0.GetComponent<Rigidbody>();
		TrailRenderer componentTrailRenderer = gameObject_0.GetComponent<TrailRenderer>();
		LineRenderer componentLineRenderer = gameObject_0.GetComponent<LineRenderer>();
		FixedJoint componentFixedJoint = gameObject_0.GetComponent<FixedJoint>();
		ConfigurableJoint componentConfigurableJoint = gameObject_0.GetComponent<ConfigurableJoint>();
		ReflectionProbe componentReflectionProbe = gameObject_0.GetComponent<ReflectionProbe>();
		list.Add(ECMPType.GameObject);
		if (componentReflectionProbe != null)
		{
			list.Add(ECMPType.ReflectionProbe);
		}
		if (componentFixedJoint != null)
		{
			list.Add(ECMPType.FixedJoint);
		}
		if (componentConfigurableJoint != null)
		{
			list.Add(ECMPType.ConfigurableJoint);
		}
		if (componentLineRenderer != null)
		{
			list.Add(ECMPType.LineRenderer);
		}
		if (componentTrailRenderer != null)
		{
			list.Add(ECMPType.TrailRenderer);
		}
		if (componentRigidbody != null)
		{
			list.Add(ECMPType.Rigidbody);
		}
		else if (componentBoxCollider != null || componentSphereCollider != null || componentCapsuleCollider != null || componentMeshCollider != null)
		{
			list.Add(ECMPType.Collider);
		}
		if (componentAnimation != null)
		{
			Debug.LogWarning("LayaAir3D Warning(Code:0000) : " + gameObject_0.name + " can't use Animation Componment!");
		}
		if (componentAnimator != null)
		{
			list.Add(ECMPType.Animator);
		}
		if (componentCamera != null)
		{
			list.Add(ECMPType.Camera);
		}
		if (componentLight != null)
		{
			if (componentLight.type == LightType.Directional)
			{
				list.Add(ECMPType.DirectionalLight);
			}
			else if (componentLight.type == LightType.Point)
			{
				list.Add(ECMPType.PointLight);
			}
			else if (componentLight.type == LightType.Spot)
			{
				list.Add(ECMPType.SpotLight);
			} else
            {
                Debug.LogWarning("LayaAir3D Warning(Code:0000) : " + gameObject_0.name + " unsupport light model:" + componentLight.type);
            }
		}
		if (componentMeshfilter != null)
		{
			if (componentCamera == null)
			{
				list.Add(ECMPType.Meshfilter);
				if (componentMeshrenderer == null)
				{
					Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " need a MeshRenderer ComponentType !");
				}
			}
			else
			{
				Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " Camera and MeshFilter can't exist at the same time !");
			}
		}
		if (componentMeshrenderer != null)
		{
			if (componentCamera == null)
			{
				list.Add(ECMPType.Meshrenderer);
				if (componentMeshfilter == null)
				{
					Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " need a meshFilter ComponentType !");
				}
			}
			else
			{
				Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " Camera and MeshRenderer can't exist at the same time !");
			}
		}
		if (componentSkinnedMeshRenderer != null)
		{
			if (componentCamera == null && componentMeshfilter == null && componentMeshrenderer == null)
			{
				list.Add(ECMPType.SkinnedMeshRenderer);
			}
			else
			{
				if (componentCamera != null)
				{
					Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " Camera and SkinnedMeshRenderer can't exist at the same time !");
				}
				if (componentMeshfilter != null)
				{
					Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " MeshFilter and SkinnedMeshRenderer can't exist at the same time !");
				}
				if (componentMeshrenderer != null)
				{
					Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " MeshRenderer and SkinnedMeshRenderer can't exist at the same time !");
				}
			}
		}
		if (componentParticleSystem != null)
		{
			if (componentCamera == null && componentMeshfilter == null && componentMeshrenderer == null && componentSkinnedMeshRenderer == null)
			{
				list.Add(ECMPType.ParticleSystem);
			}
			else
			{
				if (componentCamera != null)
				{
					Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " Camera and ParticleSystem can't exist at the same time !");
				}
				if (componentMeshfilter != null)
				{
					Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " MeshFilter and ParticleSystem can't exist at the same time !");
				}
				if (componentMeshrenderer != null)
				{
					Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " MeshRenderer and ParticleSystem can't exist at the same time !");
				}
				if (componentSkinnedMeshRenderer != null)
				{
					Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " SkinnedMeshRenderer and ParticleSystem can't exist at the same time !");
				}
			}
		}
		if (componentTerrain != null)
		{
			if (componentCamera == null && componentMeshfilter == null && componentMeshrenderer == null && componentSkinnedMeshRenderer == null && componentParticleSystem == null)
			{
				list.Add(ECMPType.Terrain);
			}
			else
			{
				if (componentCamera != null)
				{
					Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " Camera and Terrain can't exist at the same time !");
				}
				if (componentMeshfilter != null)
				{
					Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " MeshFilter and Terrain can't exist at the same time !");
				}
				if (componentMeshrenderer != null)
				{
					Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " MeshRenderer and Terrain can't exist at the same time !");
				}
				if (componentSkinnedMeshRenderer != null)
				{
					Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " SkinnedMeshRenderer and Terrain can't exist at the same time !");
				}
				if (componentParticleSystem != null)
				{
					Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " ParticleSystem and Terrain can't exist at the same time !");
				}
			}
		}
		return list;
	}

	private static string WrapName(string savePath, bool isFile)
	{
		savePath = savePath.Replace("<", "_");
		savePath = savePath.Replace(">", "_");
		savePath = savePath.Replace("\"", "_");
		savePath = savePath.Replace("|", "_");
		savePath = savePath.Replace("?", "_");
		savePath = savePath.Replace("*", "_");
		savePath = savePath.Replace("#", "_");
		if (isFile)
		{
			savePath = savePath.Replace("/", "_");
			savePath = savePath.Replace(":", "_");
		}
		return savePath;
	}

	private static bool smethod_76(float float_2, float float_3)
	{
		if ((double)Math.Abs(float_2 - float_3) > 0.01)
		{
			return false;
		}
		return true;
	}

	private static bool smethod_77(string string_13, List<string> list_2)
	{
		int num = string_13.Length - 4;
		int num2 = 0;
		while (true)
		{
			if (num2 < list_2.Count)
			{
				if (string_13.IndexOf(list_2[num2]) == num)
				{
					break;
				}
				num2++;
				continue;
			}
			return false;
		}
		return true;
	}

	private static void GenIndexHtml(string string_13)
	{
		FileStream fileStream = new FileStream(Application.dataPath + "/StreamingAssets/LayaDemo/LayaAir3DSample.js", FileMode.Create, FileAccess.ReadWrite);
		StreamWriter streamWriter = new StreamWriter(fileStream);
		streamWriter.WriteLine("(function(global){");
		streamWriter.WriteLine("var Laya3D = global.Laya3D;");
		streamWriter.WriteLine("var Laya = global.Laya;");
		streamWriter.WriteLine("Laya3D.init(0, 0);");
		streamWriter.WriteLine("Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;");
		streamWriter.WriteLine("Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;");
		streamWriter.WriteLine("Laya.Stat.show();");
		if (int_exportType == 0)
		{
			streamWriter.WriteLine("Laya.Scene3D.load('.previewres" + string_13 + ".ls', Laya.Handler.create(null, function(scene){Laya.stage.addChild(scene); }));");
		}
		else
		{
			streamWriter.WriteLine("var scene = Laya.stage.addChild(new Laya.Scene3D());");
			streamWriter.WriteLine("Laya.Sprite3D.load('.previewres" + string_13 + ".lh', Laya.Handler.create(null, function(sprite){scene.addChild(sprite); }));");
		}
		streamWriter.WriteLine("})(this);");
		streamWriter.Close();
		fileStream.Close();
	}

	private static long smethod_79()
	{
		return Convert.ToInt64((DateTime.UtcNow - new DateTime(1970, 1, 1, 0, 0, 0, 0)).TotalMilliseconds);
	}

	private static void Export_Conventional_Img()
	{
		foreach (KeyValuePair<string, TextureInfo> item in dictionary_1)
		{
			TextureInfo value = item.Value;
			Texture2D texture = value.texture;
			if (item.Value.format == 0)
			{
				byte[] bytes = texture.EncodeToJPG(int_1);
				File.WriteAllBytes(value.SavePath, bytes);
			}
			else if (value.rgbmEncoding)
			{
				Texture2D texture2D = new Texture2D(texture.width, texture.height, TextureFormat.RGBA32, texture.mipmapCount > 1);
				Color[] pixels = texture.GetPixels(0);
				int i = 0;
				for (int num = pixels.Length; i < num; i++)
				{
					pixels[i] = smethod_51(pixels[i], 5f);
				}
				texture2D.SetPixels(pixels);
				File.WriteAllBytes(value.SavePath, texture2D.EncodeToPNG());
			}
			else
			{
				byte[] bytes2 = texture.EncodeToPNG();
				File.WriteAllBytes(value.SavePath, bytes2);
			}
		}
	}

	private static void Export_Ios_Img()
	{
		AccountHelper.string_8 = "pvr";
		AccountHelper.int_ExportState += dictionary_1.Count;
		_ = dictionary_1.Keys;
		int count = dictionary_1.Count;
		string[] array = new string[count];
		string[] array2 = new string[count];
		int num = 0;
		foreach (KeyValuePair<string, TextureInfo> item in dictionary_1)
		{
			array[num] = item.Key;
			array2[num++] = item.Value.SavePath;
		}
		if (count > 0)
		{
			smethod_82(array, array2, 0);
		}
	}

	public static void smethod_82(string[] string_13, string[] string_14, int int_16)
	{
		if (int_16 >= string_13.Length)
		{
			return;
		}
		string key = string_13[int_16];
		if (!dictionary_1.ContainsKey(key))
		{
			return;
		}
		TextureInfo textureInfo = dictionary_1[key];
		Texture2D texture = textureInfo.texture;
		string string_15 = string_14[int_16];
		AccountHelper.int_1 = textureInfo.MipMap;
		int num = Mathf.Max(texture.width, texture.height);
		if ((num & (num - 1)) != 0)
		{
			int i;
			for (i = 0; !((double)num <= Math.Pow(2.0, i)); i++)
			{
			}
			num = (int)Math.Pow(2.0, i);
		}
		string text = "";
		switch (int_2)
		{
		default:
			text = " -q pvrtcfast";
			break;
		case 1:
			text = " -q pvrtcfastest";
			break;
		case 2:
			text = " -q pvrtcfast";
			break;
		case 3:
			text = " -q pvrtcnormal";
			break;
		case 4:
			text = " -q pvrtchigh";
			break;
		case 5:
			text = " -q pvrtcbest";
			break;
		}
		AccountHelper.string_0 = " -m " + textureInfo.MipMap + " -r " + num + "," + num + text;
		if (textureInfo.format == 0)
		{
			AccountHelper.string_7 = "PVRTC1_4_RGB";
		}
		else
		{
			AccountHelper.string_7 = "PVRTC1_4";
		}
		AccountHelper.byte_0 = ((textureInfo.format == 0) ? texture.EncodeToJPG(100) : texture.EncodeToPNG());
		AccountHelper.string_6 = ((textureInfo.format == 0) ? "jpg" : "png");
		class1_0.method_3(string_15, string_13, string_14, int_16, 0);
	}

	public static void smethod_83(string[] string_13, string[] string_14, int int_16)
	{
		if (int_16 >= string_13.Length)
		{
			return;
		}
		string key = string_13[int_16];
		if (dictionary_1.ContainsKey(key))
		{
			TextureInfo textureInfo = dictionary_1[key];
			Texture2D texture = textureInfo.texture;
			if (textureInfo.format == 0)
			{
				string string_15 = string_14[int_16];
				AccountHelper.string_7 = "ETC1";
				AccountHelper.byte_0 = texture.EncodeToJPG(100);
				AccountHelper.string_6 = "jpg";
				AccountHelper.int_1 = textureInfo.MipMap;
				AccountHelper.string_0 = " -m " + textureInfo.MipMap + " -r " + texture.width + "," + texture.height + " -q etcfastperceptual ";
				class1_0.method_3(string_15, string_13, string_14, int_16, 1);
				AccountHelper.int_ExportState++;
			}
			else
			{
				string path = textureInfo.Path;
				string path2 = string_14[int_16];
				TextureImporter obj = AssetImporter.GetAtPath(path) as TextureImporter;
				obj.isReadable = true;
				obj.textureCompression = TextureImporterCompression.Uncompressed;
				AssetDatabase.ImportAsset(path);
				byte[] bytes = texture.EncodeToPNG();
				File.WriteAllBytes(path2, bytes);
			}
		}
	}

	private static void Export_Android_img()
	{
		int count = dictionary_1.Count;
		string[] array = new string[count];
		string[] array2 = new string[count];
		int num = 0;
		AccountHelper.string_8 = "ktx";
		foreach (KeyValuePair<string, TextureInfo> item in dictionary_1)
		{
			array[num] = item.Key;
			array2[num++] = item.Value.SavePath;
		}
		if (count > 0)
		{
			smethod_83(array, array2, 0);
		}
	}

	private static void Export_AllMeshs()
	{
		foreach (KeyValuePair<string, Mesh> item in dictionary_2)
		{
			_DoExportMesh(item.Value, item.Key, bool_Compress_mesh);
		}
	}

	private static void Export_AllSkinMeshrenders()
	{
		foreach (KeyValuePair<string, SkinnedMeshRenderer> item in dictionary_3)
		{
			_DoExport_SkinnedMeshRenderer(item.Value, item.Key, bool_Compress_mesh);
		}
	}

	private static void Export_AllAnimators()
	{
		if (bool_bakeAnim)
		{
			BakeAnimatorHelper.ClearBackAnimatorData();
			bool flag = false;
			foreach (KeyValuePair<string, GameObject> item in dictionary_4)
			{
				SkinnedMeshRenderer[] componentsInChildren = item.Value.GetComponentsInChildren<SkinnedMeshRenderer>();
				bool num = componentsInChildren.Length != 0;
				flag = num || flag;
				if (num)
				{
					List<string> list = new List<string>();
					List<string> list2 = new List<string>();
					SocketBone.buildSocketBoneList(list, list2, componentsInChildren[0]);
					BakeAnimatorHelper.BakeAnimator(int_bakefps, item.Value, string_exportPath + "/" + item.Key, list, list2);
				}
				else
				{
					_DoExport_Animator(item.Value, bool_compress_anim);
				}
			}
			if (flag)
			{
				EditorApplication.update = (EditorApplication.CallbackFunction)Delegate.Combine(EditorApplication.update, new EditorApplication.CallbackFunction(BakeAnimatorHelper.BakeUpdate));
			}
			return;
		}
		foreach (KeyValuePair<string, GameObject> item2 in dictionary_4)
		{
			_DoExport_Animator(item2.Value, bool_compress_anim);
		}
	}

	private static void smethod_89(GameObject gameObject_0, bool bool_17 = false)
	{
		List<ECMPType> list = SeachNeedExportCmps(gameObject_0);
		Shader shader = Shader.Find("LayaAir3D/Mesh/BlinnPhong");
		Shader item = Shader.Find("LayaAir3D/Mesh/Effect");
		Shader item2 = Shader.Find("LayaAir3D/Mesh/PBRStandardMaterial");
		Shader item3 = Shader.Find("LayaAir3D/Mesh/PBRSpecularMaterial");
		Shader item4 = Shader.Find("LayaAir3D/Mesh/Unlit");
		Shader item5 = Shader.Find("LayaAir3D/Sky/Cubemap");
		Shader item6 = Shader.Find("LayaAir3D/Sky/Procedural");
		Shader item7 = Shader.Find("LayaAir3D/Sky/Panoramic");
		Shader item8 = Shader.Find("LayaAir3D/Water/Water (Primary)");
		Shader item9 = Shader.Find("LayaAir3D/Line");
		Shader shader2 = Shader.Find("LayaAir3D/Particle/ShurikenParticle");
		Shader shader3 = Shader.Find("LayaAir3D/Trail");
		List<Shader> list2 = new List<Shader>
		{
			shader,
			item,
			item2,
			item3,
			item4,
			item5,
			item6,
			item7,
			item8,
			item9,
			shader2,
			shader3
		};
		if (list.IndexOf(ECMPType.Meshrenderer) != -1)
		{
			Material[] sharedMaterials = gameObject_0.GetComponent<MeshRenderer>().sharedMaterials;
			foreach (Material material in sharedMaterials)
			{
				if (list2.IndexOf(material.shader) != -1)
				{
					continue;
				}
				if (bool_17)
				{
					if (!(material == null))
					{
						if (material.shader.name == "Standard")
						{
							smethod_92(material, bool_17: true);
						}
						else
						{
							Debug.Log("the gameObject " + gameObject_0.name + "  material need Custom settings");
						}
					}
				}
				else if (!(material == null))
				{
					material.shader = shader;
					smethod_90(material);
				}
			}
		}
		if (list.IndexOf(ECMPType.SkinnedMeshRenderer) != -1)
		{
			Material[] sharedMaterials2 = gameObject_0.GetComponent<SkinnedMeshRenderer>().sharedMaterials;
			foreach (Material material2 in sharedMaterials2)
			{
				if (list2.IndexOf(material2.shader) != -1 || material2 == null)
				{
					continue;
				}
				if (bool_17)
				{
					if (material2.shader.name == "Standard")
					{
						smethod_92(material2, bool_17: true);
					}
					else
					{
						Debug.Log("the gameObject " + gameObject_0.name + "  material need Custom settings");
					}
				}
				else
				{
					material2.shader = shader;
					smethod_90(material2);
				}
			}
		}
		if (list.IndexOf(ECMPType.ParticleSystem) != -1)
		{
			Material sharedMaterial = gameObject_0.GetComponent<Renderer>().sharedMaterial;
			if (sharedMaterial != null)
			{
				sharedMaterial.shader = shader2;
				smethod_91(sharedMaterial);
			}
		}
		if (list.IndexOf(ECMPType.TrailRenderer) != -1)
		{
			Material sharedMaterial2 = gameObject_0.GetComponent<Renderer>().sharedMaterial;
			if (sharedMaterial2 != null)
			{
				sharedMaterial2.shader = shader3;
				smethod_91(sharedMaterial2);
			}
		}
		if (gameObject_0.transform.childCount > 0)
		{
			for (int k = 0; k < gameObject_0.transform.childCount; k++)
			{
				smethod_89(gameObject_0.transform.GetChild(k).gameObject, bool_17);
			}
		}
	}

	private static void smethod_90(Material material_0)
	{
		switch (material_0.GetInt("_Mode"))
		{
		default:
			material_0.SetInt("_AlphaTest", 0);
			material_0.SetInt("_AlphaBlend", 0);
			material_0.SetInt("_SrcBlend", 1);
			material_0.SetInt("_DstBlend", 0);
			material_0.SetInt("_ZWrite", 1);
			material_0.SetInt("_ZTest", 4);
			material_0.DisableKeyword("_ALPHATEST_ON");
			material_0.DisableKeyword("_ALPHABLEND_ON");
			material_0.DisableKeyword("EnableAlphaCutoff");
			material_0.EnableKeyword("EnableLighting");
			material_0.renderQueue = 2000;
			break;
		case 0:
			material_0.SetInt("_AlphaTest", 0);
			material_0.SetInt("_AlphaBlend", 0);
			material_0.SetInt("_SrcBlend", 1);
			material_0.SetInt("_DstBlend", 0);
			material_0.SetInt("_ZWrite", 1);
			material_0.SetInt("_ZTest", 4);
			material_0.DisableKeyword("_ALPHATEST_ON");
			material_0.DisableKeyword("_ALPHABLEND_ON");
			material_0.DisableKeyword("EnableAlphaCutoff");
			material_0.EnableKeyword("EnableLighting");
			material_0.renderQueue = 2000;
			break;
		case 1:
			material_0.SetInt("_AlphaTest", 1);
			material_0.SetInt("_AlphaBlend", 0);
			material_0.SetInt("_SrcBlend", 1);
			material_0.SetInt("_DstBlend", 0);
			material_0.SetInt("_ZWrite", 1);
			material_0.SetInt("_ZTest", 4);
			material_0.EnableKeyword("_ALPHATEST_ON");
			material_0.DisableKeyword("_ALPHABLEND_ON");
			material_0.EnableKeyword("EnableAlphaCutoff");
			material_0.EnableKeyword("EnableLighting");
			material_0.renderQueue = 2450;
			break;
		case 2:
			material_0.SetInt("_AlphaTest", 0);
			material_0.SetInt("_AlphaBlend", 1);
			material_0.SetInt("_SrcBlend", 5);
			material_0.SetInt("_DstBlend", 10);
			material_0.SetInt("_ZWrite", 0);
			material_0.SetInt("_ZTest", 4);
			material_0.DisableKeyword("_ALPHATEST_ON");
			material_0.EnableKeyword("_ALPHABLEND_ON");
			material_0.DisableKeyword("EnableAlphaCutoff");
			material_0.EnableKeyword("EnableLighting");
			material_0.renderQueue = 3000;
			break;
		}
	}

	private static void smethod_91(Material material_0)
	{
		switch (material_0.GetInt("_Mode"))
		{
		default:
			material_0.SetInt("_AlphaTest", 0);
			material_0.SetInt("_AlphaBlend", 1);
			material_0.SetInt("_SrcBlend", 5);
			material_0.SetInt("_DstBlend", 10);
			material_0.SetInt("_ZWrite", 0);
			material_0.SetInt("_ZTest", 4);
			material_0.DisableKeyword("_ALPHATEST_ON");
			material_0.EnableKeyword("_ALPHABLEND_ON");
			material_0.renderQueue = 3000;
			break;
		case 1:
			material_0.SetInt("_AlphaTest", 0);
			material_0.SetInt("_AlphaBlend", 1);
			material_0.SetInt("_SrcBlend", 5);
			material_0.SetInt("_DstBlend", 10);
			material_0.SetInt("_ZWrite", 0);
			material_0.SetInt("_ZTest", 4);
			material_0.DisableKeyword("_ALPHATEST_ON");
			material_0.EnableKeyword("_ALPHABLEND_ON");
			material_0.renderQueue = 3000;
			break;
		case 0:
			material_0.SetInt("_AlphaTest", 0);
			material_0.SetInt("_AlphaBlend", 1);
			material_0.SetInt("_SrcBlend", 5);
			material_0.SetInt("_DstBlend", 1);
			material_0.SetInt("_ZWrite", 0);
			material_0.SetInt("_ZTest", 4);
			material_0.DisableKeyword("_ALPHATEST_ON");
			material_0.EnableKeyword("_ALPHABLEND_ON");
			material_0.renderQueue = 3000;
			break;
		}
	}

	private static Material smethod_92(Material material_0, bool bool_17)
	{
		Material material = new Material(material_0);
		Material material2;
		Material material3;
		if (bool_17)
		{
			material_0.shader = Shader.Find("LayaAir3D/Mesh/PBRStandardMaterial");
			material2 = material_0;
			material3 = material;
		}
		else
		{
			material.shader = Shader.Find("LayaAir3D/Mesh/PBRStandardMaterial");
			material2 = material;
			material3 = material_0;
		}
		if (material3.HasProperty("_SrcBlend"))
		{
			material2.SetInt("_SrcBlend", material3.GetInt("_SrcBlend"));
		}
		else
		{
			material2.SetInt("_SrcBlend", 1);
		}
		if (material3.HasProperty("_DstBlend"))
		{
			material2.SetInt("_DstBlend", material3.GetInt("_DstBlend"));
		}
		else
		{
			material2.SetInt("_DstBlend", 0);
		}
		if (material3.HasProperty("_Mode"))
		{
			material2.SetFloat("_Mode", material3.GetFloat("_Mode"));
		}
		else
		{
			material2.SetFloat("_Mode", 0f);
		}
		if (material3.HasProperty("_ZWrite"))
		{
			material2.SetFloat("_ZWrite", material3.GetFloat("_ZWrite"));
		}
		else
		{
			material2.SetFloat("_ZWrite", 1f);
		}
		material2.SetColor("albedoColor", material3.GetColor("_Color"));
		material2.SetTexture("albedoTexture", material3.GetTexture("_MainTex"));
		material2.SetFloat("smoothness", material3.GetFloat("_Glossiness"));
		material2.SetFloat("smoothnessTextureScale", material3.GetFloat("_GlossMapScale"));
		material2.SetFloat("metallic", material3.GetFloat("_Metallic"));
		material2.SetTexture("metallicGlossTexture", material3.GetTexture("_MetallicGlossMap"));
		material2.SetFloat("normalTextureScale", material3.GetFloat("_BumpScale"));
		material2.SetTexture("normalTexture", material3.GetTexture("_BumpMap"));
		material2.SetFloat("parallaxTextureScale", material3.GetFloat("_Parallax"));
		material2.SetTexture("parallaxTexture", material3.GetTexture("_ParallaxMap"));
		material2.SetFloat("occlusionTextureStrength", material3.GetFloat("_OcclusionStrength"));
		material2.SetTexture("occlusionTexture", material3.GetTexture("_OcclusionMap"));
		if (material3.IsKeywordEnabled("_EMISSION"))
		{
			material2.EnableKeyword("EMISSION");
		}
		else
		{
			material2.DisableKeyword("EMISSION");
		}
		material2.SetColor("emissionColor", material3.GetColor("_EmissionColor"));
		material2.SetTexture("emissionTexture", material3.GetTexture("_EmissionMap"));
		Vector2 mainTextureScale = material3.mainTextureScale;
		Vector2 mainTextureOffset = material3.mainTextureOffset;
		Vector4 value = default(Vector4);
		value.x = mainTextureScale.x;
		value.y = mainTextureScale.y;
		value.z = mainTextureOffset.x;
		value.w = mainTextureOffset.y;
		material2.SetVector("tilingOffset", value);
		material2.renderQueue = material3.renderQueue;
		return material2;
	}

	public LayaMainExport()
	{
		
		
	}
}
