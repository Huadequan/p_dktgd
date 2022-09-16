
using UnityEditor;
using UnityEngine;

internal class LayaTutourialWindow : EditorWindow
{
	private static Vector2 vector2_0;

	private static LayaTutourialWindow class26_0;

	private static Texture2D texture2D_0;

	private static Texture2D texture2D_1;

	private static int int_0;

	private static int int_1;

	private static int int_2;

	private static int int_3;

	private static int int_4;

	private static int int_5;

	private static GUIStyle guistyle_0;

	private static GUIStyle guistyle_1;

	private static GUIStyle guistyle_2;

	private static GUIStyle guistyle_3;

	private static Texture texture_0;

	private static Texture texture_1;

	private static Texture texture_2;

	private static Texture texture_3;

	private static Texture texture_4;

	private static Texture texture_5;

	[MenuItem("LayaAir3D/Help/Tutorial", false)]
	private static void smethod_0()
	{
		class26_0 = (LayaTutourialWindow)EditorWindow.GetWindow(typeof(LayaTutourialWindow));
		Texture2D texture2D = new Texture2D(16, 16);
		GUIHelper.LoadTexture("Assets/LayaAir3D/LayaTool/LayaResouce/layabox.png", texture2D);
		GUIContent titleContent = new GUIContent("LayaAir3D", texture2D);
		class26_0.titleContent = titleContent;
		texture2D_0 = new Texture2D(14, 14);
		GUIHelper.LoadTexture("Assets/LayaAir3D/LayaTool/LayaResouce/Open.png", texture2D_0);
		texture2D_1 = new Texture2D(14, 14);
		GUIHelper.LoadTexture("Assets/LayaAir3D/LayaTool/LayaResouce/Close.png", texture2D_1);
		Color textColor = EditorStyles.label.normal.textColor;
		guistyle_0.fontSize = 15;
		guistyle_0.fontStyle = FontStyle.Bold;
		guistyle_0.normal.textColor = textColor;
		guistyle_1.fontSize = 12;
		guistyle_1.normal.textColor = textColor;
		guistyle_2.fontSize = 16;
		guistyle_2.fontStyle = FontStyle.Bold;
		guistyle_2.normal.textColor = textColor;
		guistyle_3.fontSize = 12;
		guistyle_3.normal.textColor = textColor;
		texture_0 = texture2D_0;
		texture_1 = texture2D_0;
		texture_2 = texture2D_0;
		texture_3 = texture2D_0;
		texture_4 = texture2D_0;
		texture_5 = texture2D_0;
	}

	private void OnGUI()
	{
		vector2_0 = GUILayout.BeginScrollView(vector2_0);
		GUILayout.Label("", GUILayout.Height(20f));
		GUILayout.Label("                            推荐使用Unity2018.4.7版本", guistyle_2, GUILayout.ExpandWidth(expand: true));
		GUILayout.Label("", GUILayout.Height(20f));
		method_0(ref texture_0, "节点");
		if (texture_0 == texture2D_0)
		{
			method_1(int_1, "(1)相机");
			method_1(int_2, "兼容Camera组件");
			method_1(int_1, "(2)光照");
			method_1(int_2, "兼容DirectionLight组件、PointLight组件、SpotLight组件,目前Mode为RealTime时仅支持三种类型灯光各一盏");
			method_2(int_3, "\u00a0Type(Directional、Point、Spot)");
			method_2(int_3, "\u00a0Color");
			method_2(int_3, " Mode(RealTime、Baked)   注：暂不支持Mixed,烘焙光照贴图需要选择Baked");
			method_2(int_3, "\u00a0Intensity");
			method_1(int_1, "(3)模型");
			method_1(int_2, "兼容MeshRender和MeshFilter组件");
			method_1(int_1, "(4)粒子");
			method_1(int_2, "兼容ParticleSystem组件部分模块");
			method_2(int_3, "\u00a0Emission");
			method_2(int_4, "\u00a0Rate over Time(Constant)");
			method_2(int_4, "\u00a0Bursts");
			method_2(int_3, " Shape(SphereShape、HemisphereShape、BoxShape、CircleShape、ConeShape)");
			method_2(int_3, "\u00a0Velocity over Lifetime");
			method_2(int_3, "\u00a0Color over Lifetime");
			method_2(int_3, " Size over Lifetime");
			method_2(int_3, "\u00a0Texture Sheet Animation");
			method_2(int_3, " Rotation Over LifeTime");
			method_1(int_1, "(5)拖尾");
			method_1(int_1 + int_0, "兼容TrailRender组件");
			method_1(int_1, "(6)地形");
			method_1(int_1 + int_0, "兼容Terrain组件 仅支持地表 不支持植被  导出时会转换为静态Mesh网格");
		}
		GUILayout.Label("", GUILayout.Height(5f));
		method_0(ref texture_1, "纹理");
		if (texture_1 == texture2D_0)
		{
			method_1(int_1, "兼容纹理属性面板中的部分属性");
			method_2(int_2, " Mip Map");
			method_2(int_2, " Wrap Mode");
			method_2(int_2, " Filter Mode");
			method_2(int_2, " Aniso Level");
		}
		GUILayout.Label("", GUILayout.Height(5f));
		method_0(ref texture_2, "材质");
		if (texture_2 == texture2D_0)
		{
			method_1(int_1, "支持Shader列表中LayaAir3D目录中的所有Shader");
			method_1(int_1, "如使用非LayaAir3D Shader会强制转换为LayaAir3D的默认Shader");
		}
		GUILayout.Label("", GUILayout.Height(5f));
		method_0(ref texture_3, "动画");
		if (texture_3 == texture2D_0)
		{
			method_1(int_1, "兼容Animator组件和关联的AnimatorState");
		}
		GUILayout.Label("", GUILayout.Height(5f));
		method_0(ref texture_4, "物理");
		if (texture_4 == texture2D_0)
		{
			method_1(int_1, "兼容BoxCollider、SphereCollider、CapsuleCollider、MeshCollider组件");
			method_1(int_1, "兼容Rigidbody组件");
		}
		GUILayout.Label("", GUILayout.Height(5f));
		method_0(ref texture_5, "光照配置");
		if (texture_5 == texture2D_0)
		{
			method_1(int_1, "兼容Lighting面板中的部分属性,不支持Auto Generate,需要手动点击Generate Lighting");
			method_1(int_2, "Scene:");
			method_2(int_3, " Lighting->");
			method_2(int_4, " Environment->");
			method_2(int_5, " Skybox Material(material)    注：请使用LayaAir3D/Sky目录下Shader");
			method_2(int_4, " Environment Lighting->");
			method_2(int_5, " Source(Skybox、Color)");
			method_2(int_5, " Ambient Color");
			method_2(int_5, " Ambient Mode(Realtime)");
			method_2(int_4, " Lightmapping Settings->");
			method_1(int_4, "    全部支持,但不包含 Directional Mode(Directional)    注：烘焙光照贴图必须使用Non-Directional");
			method_1(int_2, "Global maps:");
			method_1(int_2, "可导出,效果和PC、Mac & Linux Standalone保持一致");
		}
		GUILayout.EndScrollView();
	}

	private void method_0(ref Texture texture_6, string string_0)
	{
		GUILayout.BeginHorizontal();
		GUILayout.Label("", GUILayout.Width(15f));
		if (GUILayout.Button(texture_6, guistyle_0, GUILayout.Width(15f), GUILayout.Height(15f)))
		{
			if (texture_6 == texture2D_0)
			{
				texture_6 = texture2D_1;
			}
			else
			{
				texture_6 = texture2D_0;
			}
		}
		GUILayout.Label(string_0, guistyle_0, GUILayout.ExpandWidth(expand: true));
		GUILayout.EndHorizontal();
	}

	private void method_1(int int_6, string string_0)
	{
		GUILayout.BeginHorizontal();
		GUILayout.Label("", GUILayout.Width(int_6));
		GUILayout.Label(string_0, guistyle_1, GUILayout.ExpandWidth(expand: true));
		GUILayout.EndHorizontal();
	}

	private void method_2(int int_6, string string_0)
	{
		GUILayout.BeginHorizontal();
		GUILayout.Label("", GUILayout.Width(int_6));
		GUILayout.Label(" · ", guistyle_2, GUILayout.Width(10f));
		GUILayout.Label(string_0, guistyle_3, GUILayout.ExpandWidth(expand: true));
		GUILayout.EndHorizontal();
	}

	public LayaTutourialWindow()
	{
		
		
	}

	static LayaTutourialWindow()
	{
		
		int_0 = 18;
		int_1 = 30;
		int_2 = int_1 + int_0;
		int_3 = int_1 + int_0 * 2;
		int_4 = int_1 + int_0 * 3;
		int_5 = int_1 + int_0 * 4;
		guistyle_0 = new GUIStyle();
		guistyle_1 = new GUIStyle();
		guistyle_2 = new GUIStyle();
		guistyle_3 = new GUIStyle();
	}
}
