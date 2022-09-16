using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

using UnityEditor;
using UnityEditor.AnimatedValues;
using UnityEditorInternal;
using UnityEngine;
using UnityEngine.Rendering;

[CustomEditor(typeof(ParticleSystem))]
[CanEditMultipleObjects]
public class LayaParticleSystemEditor : Editor
{
	public static string str_UnityInspector;

	public static string str_LayaInspector;

	public static string str_clearData;

	public static string str_needVIP;

	public static string str_Tips;

	private Assembly assembly_0;

	private Type type_0;

	private MethodInfo methodInfo_0;

	private MethodInfo methodInfo_1;

	private MethodInfo methodInfo_2;

	private MethodInfo methodInfo_3;

	private MethodInfo methodInfo_4;

	private MethodInfo methodInfo_5;

	private MethodInfo methodInfo_6;

	private MethodInfo methodInfo_7;

	private Editor editor_0;

	private static bool bool_0;

	private static bool bool_1;

	private static int int_0;

	private static bool bool_2;

	private static float float_0;

	private static float float_1;

	private static bool bool_3;

	private static GUIStyle guistyle_0;

	private float float_2;

	private static bool bool_4;

	private static bool bool_5;

	private static bool bool_6;

	private static bool bool_7;

	private static bool bool_8;

	private static bool bool_9;

	private static bool bool_10;

	private static bool bool_11;

	private static bool bool_12;

	private static AnimBool animBool_0;

	private static AnimBool animBool_1;

	private static AnimBool animBool_2;

	private static AnimBool animBool_3;

	private static AnimBool animBool_4;

	private static AnimBool animBool_5;

	private static AnimBool animBool_6;

	private static AnimBool animBool_7;

	private static AnimBool animBool_8;

	private static Dictionary<uint, string[]> dictionary_0;

	private static Dictionary<uint, int[]> dictionary_1;

	private SerializedProperty serializedProperty_0;

	private SerializedProperty serializedProperty_1;

	private SerializedProperty serializedProperty_2;

	private SerializedProperty serializedProperty_3;

	private SerializedProperty serializedProperty_4;

	private SerializedProperty serializedProperty_5;

	private SerializedProperty serializedProperty_6;

	private SerializedProperty serializedProperty_7;

	private SerializedProperty serializedProperty_8;

	private SerializedProperty serializedProperty_9;

	private SerializedProperty serializedProperty_10;

	private SerializedProperty serializedProperty_11;

	private SerializedProperty serializedProperty_12;

	private SerializedProperty serializedProperty_13;

	private SerializedProperty serializedProperty_14;

	private SerializedProperty serializedProperty_15;

	private SerializedProperty serializedProperty_16;

	private SerializedProperty serializedProperty_17;

	private SerializedProperty serializedProperty_18;

	private SerializedProperty serializedProperty_19;

	private SerializedProperty serializedProperty_20;

	private SerializedProperty serializedProperty_21;

	private SerializedProperty serializedProperty_22;

	private SerializedProperty serializedProperty_23;

	private SerializedProperty serializedProperty_24;

	private SerializedProperty serializedProperty_25;

	private SerializedProperty serializedProperty_26;

	private ReorderableList reorderableList_0;

	private SerializedProperty serializedProperty_27;

	private SerializedProperty serializedProperty_28;

	private SerializedProperty serializedProperty_29;

	private SerializedProperty serializedProperty_30;

	private SerializedProperty serializedProperty_31;

	private SerializedProperty serializedProperty_32;

	private SerializedProperty serializedProperty_33;

	private SerializedProperty serializedProperty_34;

	private SerializedProperty serializedProperty_35;

	private SerializedProperty serializedProperty_36;

	private SerializedProperty serializedProperty_37;

	private SerializedProperty serializedProperty_38;

	private SerializedProperty serializedProperty_39;

	private SerializedProperty serializedProperty_40;

	private SerializedProperty serializedProperty_41;

	private SerializedProperty serializedProperty_42;

	private SerializedProperty serializedProperty_43;

	private SerializedProperty serializedProperty_44;

	private SerializedProperty serializedProperty_45;

	private SerializedProperty serializedProperty_46;

	private SerializedProperty serializedProperty_47;

	private SerializedProperty serializedProperty_48;

	private SerializedProperty serializedProperty_49;

	private SerializedProperty serializedProperty_50;

	private SerializedProperty serializedProperty_51;

	private SerializedProperty serializedProperty_52;

	private SerializedProperty serializedProperty_53;

	private SerializedProperty serializedProperty_54;

	private SerializedProperty serializedProperty_55;

	private SerializedProperty serializedProperty_56;

	private SerializedProperty serializedProperty_57;

	private SerializedProperty serializedProperty_58;

	private SerializedProperty serializedProperty_59;

	private SerializedProperty serializedProperty_60;

	private SerializedProperty serializedProperty_61;

	private SerializedProperty serializedProperty_62;

	private SerializedObject serializedObject_0;

	private SerializedProperty serializedProperty_63;

	private SerializedProperty serializedProperty_64;

	private SerializedProperty serializedProperty_65;

	private SerializedProperty serializedProperty_66;

	private SerializedProperty serializedProperty_67;

	private SerializedProperty serializedProperty_68;

	private SerializedProperty serializedProperty_69;

	private SerializedProperty serializedProperty_70;

	private SerializedProperty serializedProperty_71;

	private static GUIStyle guistyle_1;

	private static GUIStyle guistyle_2;

	public static GUIStyle CollapseButton
	{
		get
		{
			if (guistyle_1 == null)
			{
				guistyle_1 = new GUIStyle(EditorStyles.miniButtonLeft)
				{
					fontSize = 16,
					fontStyle = FontStyle.Normal,
					fixedWidth = 30f,
					fixedHeight = 21.5f
				};
			}
			return guistyle_1;
		}
	}

	public static GUIStyle GroupFoldout
	{
		get
		{
			if (guistyle_2 == null)
			{
				guistyle_2 = new GUIStyle(EditorStyles.miniButtonMid)
				{
					fontSize = 11,
					alignment = TextAnchor.MiddleLeft,
					stretchWidth = true,
					padding = new RectOffset
					{
						left = 10,
						top = 4,
						bottom = 5
					}
				};
			}
			return guistyle_2;
		}
	}

	private void OnEnable()
	{
		method_1();
		method_2();
		method_5();
		method_7();
		method_9();
		method_11();
		method_13();
		method_15();
		method_17();
		method_19();
		method_21();
		guistyle_0.normal.textColor = Color.red;
		LayaAir3D.ReadLanguage(1);
	}

	private void OnDisable()
	{
		methodInfo_2.Invoke(editor_0, null);
	}

	private void method_0()
	{
	}

	public override void OnInspectorGUI()
	{
		base.serializedObject.Update();
		EditorGUILayout.BeginHorizontal();
		if (bool_3 && Time.time - float_1 > float_0)
		{
			bool_3 = false;
		}
		if (bool_3)
		{
			EditorGUILayout.LabelField(str_needVIP, guistyle_0);
		}
		GUILayout.FlexibleSpace();
		EditorGUI.BeginChangeCheck();
		int_0 = EditorGUILayout.IntPopup(int_0, new string[2]
		{
			str_LayaInspector,
			str_UnityInspector
		}, new int[2]
		{
			0,
			1
		}, GUILayout.Width(100f));
		if (EditorGUI.EndChangeCheck())
		{
			if (AccountHelper.bool_isVip && AccountHelper.bool_isBindDivice)
			{
				bool_0 = int_0 == 1;
				bool_1 = int_0 == 0;
			}
			else
			{
				bool_3 = true;
				float_1 = Time.time;
				bool_0 = true;
				bool_1 = false;
				int_0 = 1;
			}
		}
		else
		{
			bool_0 = int_0 == 1;
			bool_1 = int_0 == 0;
		}
		bool_0 = int_0 == 1;
		bool_1 = int_0 == 0;
		EditorGUILayout.EndHorizontal();
		if (bool_0)
		{
			methodInfo_0.Invoke(editor_0, null);
		}
		if (bool_1)
		{
			method_41(animBool_0, ref bool_4, "main");
			if (EditorGUILayout.BeginFadeGroup(animBool_0.faded))
			{
				method_6();
			}
			EditorGUILayout.EndFadeGroup();
			method_41(animBool_1, ref bool_5, "Emission");
			if (EditorGUILayout.BeginFadeGroup(animBool_1.faded))
			{
				method_8();
			}
			EditorGUILayout.EndFadeGroup();
			method_41(animBool_2, ref bool_6, "Shape");
			if (EditorGUILayout.BeginFadeGroup(animBool_2.faded))
			{
				method_10();
			}
			EditorGUILayout.EndFadeGroup();
			method_41(animBool_3, ref bool_7, "VelocityOverLifeTime");
			if (EditorGUILayout.BeginFadeGroup(animBool_3.faded))
			{
				method_12();
			}
			EditorGUILayout.EndFadeGroup();
			method_41(animBool_4, ref bool_8, "ColorOverLifeTime");
			if (EditorGUILayout.BeginFadeGroup(animBool_4.faded))
			{
				method_14();
			}
			EditorGUILayout.EndFadeGroup();
			method_41(animBool_5, ref bool_9, "SizeOverLifeTime");
			if (EditorGUILayout.BeginFadeGroup(animBool_5.faded))
			{
				method_16();
			}
			EditorGUILayout.EndFadeGroup();
			method_41(animBool_6, ref bool_10, "RotationOverLifeTime");
			if (EditorGUILayout.BeginFadeGroup(animBool_6.faded))
			{
				method_18();
			}
			EditorGUILayout.EndFadeGroup();
			method_41(animBool_7, ref bool_11, "TextureSheetAnimation");
			if (EditorGUILayout.BeginFadeGroup(animBool_7.faded))
			{
				method_20();
			}
			EditorGUILayout.EndFadeGroup();
			method_41(animBool_8, ref bool_12, "Render");
			if (EditorGUILayout.BeginFadeGroup(animBool_8.faded))
			{
				method_22();
			}
			EditorGUILayout.EndFadeGroup();
		}
		if (bool_2)
		{
			ParticleSystem particleSystem_ = base.target as ParticleSystem;
			method_27(ref particleSystem_);
			method_28(ref particleSystem_);
			method_29(ref particleSystem_);
			method_30(ref particleSystem_);
			method_31(ref particleSystem_);
			method_32(ref particleSystem_);
			method_33(ref particleSystem_);
			method_34(ref particleSystem_);
			method_35(ref particleSystem_);
			method_36(ref particleSystem_);
		}
		base.serializedObject.ApplyModifiedProperties();
	}

	public override bool HasPreviewGUI()
	{
		return (bool)methodInfo_3.Invoke(editor_0, null);
	}

	public override void DrawPreview(Rect previewArea)
	{
		if (bool_0)
		{
			methodInfo_4.Invoke(editor_0, new object[1]
			{
				previewArea
			});
		}
	}

	public override void OnPreviewGUI(Rect rect_0, GUIStyle background)
	{
		methodInfo_5.Invoke(type_0, new object[2]
		{
			rect_0,
			background
		});
	}

	public override GUIContent GetPreviewTitle()
	{
		return new GUIContent("Particle System");
	}

	public override void OnPreviewSettings()
	{
	}

	public void OnSceneViewGUI(SceneView sceneView)
	{
		Debug.Log(7777);
	}

	private void method_1()
	{
		assembly_0 = Assembly.GetAssembly(typeof(Editor));
		type_0 = (from type_0 in assembly_0.GetTypes()
			where type_0.Name == "ParticleSystemInspector"
			select type_0).FirstOrDefault();
		methodInfo_0 = type_0.GetMethod("OnInspectorGUI", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
		methodInfo_1 = type_0.GetMethod("OnEnable", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
		methodInfo_2 = type_0.GetMethod("OnDisable", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
		methodInfo_3 = type_0.GetMethod("HasPreviewGUI", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
		methodInfo_4 = type_0.GetMethod("DrawPreview", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
		methodInfo_5 = type_0.GetMethod("OnPreviewGUI", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
		methodInfo_6 = type_0.GetMethod("GetPreviewTitle", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
		methodInfo_7 = type_0.GetMethod("OnPreviewSettings", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
		editor_0 = Editor.CreateEditor(base.target, type_0);
		methodInfo_1.Invoke(editor_0, null);
	}

	private void method_2()
	{
		animBool_0 = new AnimBool(value: true);
		animBool_0.valueChanged.AddListener(Repaint);
		animBool_0.speed = float_2;
		animBool_1 = new AnimBool(value: true);
		animBool_1.valueChanged.AddListener(Repaint);
		animBool_1.speed = float_2;
		animBool_2 = new AnimBool(value: true);
		animBool_2.valueChanged.AddListener(Repaint);
		animBool_2.speed = float_2;
		animBool_3 = new AnimBool(value: true);
		animBool_3.valueChanged.AddListener(Repaint);
		animBool_3.speed = float_2;
		animBool_4 = new AnimBool(value: true);
		animBool_4.valueChanged.AddListener(Repaint);
		animBool_4.speed = float_2;
		animBool_5 = new AnimBool(value: true);
		animBool_5.valueChanged.AddListener(Repaint);
		animBool_5.speed = float_2;
		animBool_6 = new AnimBool(value: true);
		animBool_6.valueChanged.AddListener(Repaint);
		animBool_6.speed = float_2;
		animBool_7 = new AnimBool(value: true);
		animBool_7.valueChanged.AddListener(Repaint);
		animBool_7.speed = float_2;
		animBool_8 = new AnimBool(value: true);
		animBool_8.valueChanged.AddListener(Repaint);
		animBool_8.speed = float_2;
	}

	private void OnAddBurstCallback(ReorderableList list)
	{
		int arraySize = list.serializedProperty.arraySize;
		if (arraySize != 8)
		{
			serializedProperty_25.intValue++;
			list.serializedProperty.arraySize = serializedProperty_25.intValue;
			list.index = arraySize;
			SerializedProperty arrayElementAtIndex = list.serializedProperty.GetArrayElementAtIndex(arraySize);
			SerializedProperty serializedProperty = arrayElementAtIndex.FindPropertyRelative("time");
			SerializedProperty serializedProperty2 = arrayElementAtIndex.FindPropertyRelative("countCurve");
			SerializedProperty serializedProperty3 = arrayElementAtIndex.FindPropertyRelative("cycleCount");
			SerializedProperty serializedProperty4 = arrayElementAtIndex.FindPropertyRelative("repeatInterval");
			SerializedProperty serializedProperty5 = arrayElementAtIndex.FindPropertyRelative("probability");
			serializedProperty.floatValue = 0f;
			serializedProperty2.FindPropertyRelative("minMaxState").intValue = 0;
			serializedProperty2.FindPropertyRelative("scalar").floatValue = 30f;
			serializedProperty3.intValue = 1;
			serializedProperty4.floatValue = 0.01f;
			serializedProperty5.floatValue = 1f;
		}
	}

	private void OnRemoveBurstCallback(ReorderableList list)
	{
		int index = list.index;
		int num = list.serializedProperty.arraySize - 1;
		list.serializedProperty.MoveArrayElement(index, num);
		list.serializedProperty.arraySize--;
		list.serializedProperty.DeleteArrayElementAtIndex(num);
		serializedProperty_25.intValue--;
		list.index = num - 1;
	}

	private void method_3(Rect rect_0, int int_1, bool bool_13, bool bool_14)
	{
		SerializedProperty arrayElementAtIndex = reorderableList_0.serializedProperty.GetArrayElementAtIndex(int_1);
		SerializedProperty serializedProperty = arrayElementAtIndex.FindPropertyRelative("time");
		SerializedProperty serializedProperty2 = arrayElementAtIndex.FindPropertyRelative("countCurve");
		serializedProperty.floatValue = EditorGUI.FloatField(new Rect(rect_0.x, rect_0.y, 100f, EditorGUIUtility.singleLineHeight), serializedProperty.floatValue);
		switch (serializedProperty2.FindPropertyRelative("minMaxState").intValue)
		{
		case 0:
			serializedProperty2.FindPropertyRelative("scalar").floatValue = EditorGUI.FloatField(new Rect(rect_0.x + 120f, rect_0.y, 100f, EditorGUIUtility.singleLineHeight), serializedProperty2.FindPropertyRelative("scalar").floatValue);
			break;
		case 3:
			serializedProperty2.FindPropertyRelative("minScalar").floatValue = EditorGUI.FloatField(new Rect(rect_0.x + 120f, rect_0.y, 50f, EditorGUIUtility.singleLineHeight), serializedProperty2.FindPropertyRelative("minScalar").floatValue);
			serializedProperty2.FindPropertyRelative("scalar").floatValue = EditorGUI.FloatField(new Rect(rect_0.x + 180f, rect_0.y, 50f, EditorGUIUtility.singleLineHeight), serializedProperty2.FindPropertyRelative("scalar").floatValue);
			break;
		}
		string[] displayedOptions = new string[2]
		{
			"Constant",
			"TwoConstants"
		};
		int[] optionValues = new int[2]
		{
			0,
			3
		};
		serializedProperty2.FindPropertyRelative("minMaxState").intValue = EditorGUI.IntPopup(new Rect(rect_0.x + 300f, rect_0.y, 100f, EditorGUIUtility.singleLineHeight), serializedProperty2.FindPropertyRelative("minMaxState").intValue, displayedOptions, optionValues);
		if (serializedProperty_25.intValue == 8)
		{
			reorderableList_0.displayAdd = false;
		}
		else
		{
			reorderableList_0.displayAdd = true;
		}
	}

	private void method_4(Rect rect_0)
	{
		EditorGUI.PrefixLabel(new Rect(rect_0.x + 40f, rect_0.y, 50f, EditorGUIUtility.singleLineHeight), new GUIContent("Time                   Count"));
	}

	private void method_5()
	{
		serializedProperty_0 = base.serializedObject.FindProperty("lengthInSec");
		serializedProperty_1 = base.serializedObject.FindProperty("looping");
		serializedProperty_2 = base.serializedObject.FindProperty("startDelay");
		serializedProperty_3 = base.serializedObject.FindProperty("InitialModule.startLifetime");
		serializedProperty_4 = base.serializedObject.FindProperty("InitialModule.startSpeed");
		serializedProperty_5 = base.serializedObject.FindProperty("InitialModule.size3D");
		serializedProperty_6 = base.serializedObject.FindProperty("InitialModule.startSize");
		serializedProperty_7 = base.serializedObject.FindProperty("InitialModule.startSizeY");
		serializedProperty_8 = base.serializedObject.FindProperty("InitialModule.startSizeZ");
		serializedProperty_9 = base.serializedObject.FindProperty("InitialModule.rotation3D");
		serializedProperty_10 = base.serializedObject.FindProperty("InitialModule.startRotationX");
		serializedProperty_11 = base.serializedObject.FindProperty("InitialModule.startRotationY");
		serializedProperty_12 = base.serializedObject.FindProperty("InitialModule.startRotation");
		serializedProperty_13 = base.serializedObject.FindProperty("InitialModule.randomizeRotationDirection");
		serializedProperty_14 = base.serializedObject.FindProperty("InitialModule.startColor");
		serializedProperty_15 = base.serializedObject.FindProperty("InitialModule.gravityModifier");
		serializedProperty_16 = base.serializedObject.FindProperty("moveWithTransform");
		serializedProperty_17 = base.serializedObject.FindProperty("simulationSpeed");
		serializedProperty_18 = base.serializedObject.FindProperty("scalingMode");
		serializedProperty_19 = base.serializedObject.FindProperty("playOnAwake");
		serializedProperty_20 = base.serializedObject.FindProperty("InitialModule.maxNumParticles");
		serializedProperty_21 = base.serializedObject.FindProperty("autoRandomSeed");
		serializedProperty_22 = base.serializedObject.FindProperty("randomSeed");
	}

	private void method_6()
	{
		serializedProperty_0.floatValue = EditorGUILayout.FloatField(new GUIContent("Duration"), serializedProperty_0.floatValue);
		serializedProperty_1.boolValue = EditorGUILayout.Toggle("Looping", serializedProperty_1.boolValue);
		EditorGUILayout.BeginHorizontal();
		method_23(ref serializedProperty_2, "Start Delay");
		method_24(ref serializedProperty_2, 5u, 2);
		EditorGUILayout.EndHorizontal();
		EditorGUILayout.BeginHorizontal();
		method_23(ref serializedProperty_3, "Start Lifetime");
		method_24(ref serializedProperty_3, 5u, 2);
		EditorGUILayout.EndHorizontal();
		EditorGUILayout.BeginHorizontal();
		method_23(ref serializedProperty_4, "Start Speed");
		method_24(ref serializedProperty_4, 5u, 2);
		EditorGUILayout.EndHorizontal();
		serializedProperty_5.boolValue = EditorGUILayout.Toggle("3D Start Size", serializedProperty_5.boolValue);
		if (serializedProperty_5.boolValue)
		{
			EditorGUILayout.BeginHorizontal();
			method_23(ref serializedProperty_6, "X");
			method_24(ref serializedProperty_6, 5u, 2);
			EditorGUILayout.EndHorizontal();
			EditorGUILayout.BeginHorizontal();
			method_23(ref serializedProperty_7, "Y");
			serializedProperty_7.FindPropertyRelative("minMaxState").intValue = serializedProperty_6.FindPropertyRelative("minMaxState").intValue;
			EditorGUILayout.EndHorizontal();
			EditorGUILayout.BeginHorizontal();
			method_23(ref serializedProperty_8, "Z");
			serializedProperty_8.FindPropertyRelative("minMaxState").intValue = serializedProperty_6.FindPropertyRelative("minMaxState").intValue;
			EditorGUILayout.EndHorizontal();
		}
		else
		{
			EditorGUILayout.BeginHorizontal();
			method_23(ref serializedProperty_6, "Start Size");
			method_24(ref serializedProperty_6, 5u, 2);
			EditorGUILayout.EndHorizontal();
		}
		serializedProperty_9.boolValue = EditorGUILayout.Toggle("3D Start Rotation", serializedProperty_9.boolValue);
		if (serializedProperty_9.boolValue)
		{
			EditorGUILayout.BeginHorizontal();
			method_23(ref serializedProperty_10, "X");
			method_24(ref serializedProperty_10, 5u, 2);
			EditorGUILayout.EndHorizontal();
			EditorGUILayout.BeginHorizontal();
			method_23(ref serializedProperty_11, "Y");
			serializedProperty_11.FindPropertyRelative("minMaxState").intValue = serializedProperty_10.FindPropertyRelative("minMaxState").intValue;
			EditorGUILayout.EndHorizontal();
			EditorGUILayout.BeginHorizontal();
			method_23(ref serializedProperty_12, "Z");
			serializedProperty_12.FindPropertyRelative("minMaxState").intValue = serializedProperty_10.FindPropertyRelative("minMaxState").intValue;
			EditorGUILayout.EndHorizontal();
		}
		else
		{
			EditorGUILayout.BeginHorizontal();
			method_23(ref serializedProperty_12, "Start Rotation");
			method_24(ref serializedProperty_12, 5u, 2);
			EditorGUILayout.EndHorizontal();
		}
		serializedProperty_13.floatValue = EditorGUILayout.FloatField("Flip Rotation", serializedProperty_13.floatValue);
		EditorGUILayout.BeginHorizontal();
		method_25(ref serializedProperty_14, "Start Color");
		method_26(ref serializedProperty_14, 80u, 2);
		EditorGUILayout.EndHorizontal();
		EditorGUILayout.BeginHorizontal();
		method_23(ref serializedProperty_15, "Gravity Modifier");
		method_24(ref serializedProperty_15, 1u, 1);
		EditorGUILayout.EndHorizontal();
		serializedProperty_16.intValue = EditorGUILayout.IntPopup("Simulation Space", serializedProperty_16.intValue, new string[2]
		{
			"Local",
			"World"
		}, new int[2]
		{
			0,
			1
		});
		EditorGUILayout.PropertyField(serializedProperty_16);
		serializedProperty_17.floatValue = EditorGUILayout.FloatField("Simulation Speed ", serializedProperty_17.floatValue);
		serializedProperty_18.intValue = EditorGUILayout.IntPopup("Scaling Mode", serializedProperty_18.intValue, new string[2]
		{
			"Hierarchy",
			"Local"
		}, new int[2]
		{
			0,
			1
		});
		serializedProperty_19.boolValue = EditorGUILayout.Toggle("Play On Awake", serializedProperty_19.boolValue);
		serializedProperty_20.intValue = EditorGUILayout.IntField("Max Particles", serializedProperty_20.intValue);
		serializedProperty_21.boolValue = EditorGUILayout.Toggle("Auto Random Seed", serializedProperty_21.boolValue);
		if (!serializedProperty_21.boolValue)
		{
			serializedProperty_22.intValue = EditorGUILayout.IntField("Random Seed", serializedProperty_22.intValue);
		}
	}

	private void method_7()
	{
		serializedProperty_23 = base.serializedObject.FindProperty("EmissionModule.enabled");
		serializedProperty_24 = base.serializedObject.FindProperty("EmissionModule.rateOverTime");
		serializedProperty_25 = base.serializedObject.FindProperty("EmissionModule.m_BurstCount");
		serializedProperty_26 = base.serializedObject.FindProperty("EmissionModule.m_Bursts");
		reorderableList_0 = new ReorderableList(base.serializedObject, serializedProperty_26, draggable: true, displayHeader: true, displayAddButton: true, displayRemoveButton: true)
		{
			drawElementCallback = method_3,
			drawHeaderCallback = method_4,
			onAddCallback = OnAddBurstCallback,
			onRemoveCallback = OnRemoveBurstCallback
		};
	}

	private void method_8()
	{
		serializedProperty_23.boolValue = EditorGUILayout.BeginToggleGroup("Emission", serializedProperty_23.boolValue);
		EditorGUILayout.Space();
		if (serializedProperty_23.boolValue)
		{
			EditorGUILayout.BeginHorizontal();
			method_23(ref serializedProperty_24, "Rate over Time");
			method_24(ref serializedProperty_24, 5u, 2);
			EditorGUILayout.EndHorizontal();
			reorderableList_0.DoLayoutList();
		}
		EditorGUILayout.EndToggleGroup();
	}

	private void method_9()
	{
		SerializedProperty serializedProperty = base.serializedObject.FindProperty("ShapeModule");
		serializedProperty_27 = serializedProperty.FindPropertyRelative("enabled");
		serializedProperty_28 = serializedProperty.FindPropertyRelative("type");
		serializedProperty_29 = serializedProperty.FindPropertyRelative("radius.value");
		serializedProperty_30 = serializedProperty.FindPropertyRelative("radiusThickness");
		serializedProperty_31 = serializedProperty.FindPropertyRelative("randomDirectionAmount");
		serializedProperty_32 = serializedProperty.FindPropertyRelative("angle");
		serializedProperty_33 = serializedProperty.FindPropertyRelative("length");
		serializedProperty_34 = serializedProperty.FindPropertyRelative("m_Scale");
		serializedProperty_35 = serializedProperty.FindPropertyRelative("arc.value");
	}

	private void method_10()
	{
		serializedProperty_27.boolValue = EditorGUILayout.BeginToggleGroup("Shape", serializedProperty_27.boolValue);
		EditorGUILayout.Space();
		if (serializedProperty_27.boolValue)
		{
			serializedProperty_28.intValue = EditorGUILayout.IntPopup("Shape", serializedProperty_28.intValue, new string[6]
			{
				"Sphere",
				"Hemisphere",
				"Cone",
				"ConeVolume",
				"Box",
				"Circle"
			}, new int[6]
			{
				0,
				2,
				4,
				8,
				5,
				10
			});
			switch (serializedProperty_28.intValue)
			{
			case 0:
			case 2:
				serializedProperty_29.floatValue = EditorGUILayout.FloatField("Radius", serializedProperty_29.floatValue);
				serializedProperty_30.floatValue = EditorGUILayout.IntPopup("Radius Thickness", (int)serializedProperty_30.floatValue, new string[2]
				{
					"0",
					"1"
				}, new int[2]
				{
					0,
					1
				});
				break;
			case 5:
				serializedProperty_34.vector3Value = EditorGUILayout.Vector3Field("Scale", serializedProperty_34.vector3Value);
				break;
			case 4:
			case 8:
				serializedProperty_32.floatValue = EditorGUILayout.FloatField("Angle", serializedProperty_32.floatValue);
				serializedProperty_29.floatValue = EditorGUILayout.FloatField("Radius", serializedProperty_29.floatValue);
				serializedProperty_30.floatValue = EditorGUILayout.IntPopup("Radius Thickness", (int)serializedProperty_30.floatValue, new string[2]
				{
					"0",
					"1"
				}, new int[2]
				{
					0,
					1
				});
				serializedProperty_33.floatValue = EditorGUILayout.FloatField("Length", serializedProperty_33.floatValue);
				serializedProperty_28.intValue = EditorGUILayout.IntPopup("Emit from", serializedProperty_28.intValue, new string[2]
				{
					"Base",
					"Volume"
				}, new int[2]
				{
					4,
					8
				});
				break;
			case 10:
				serializedProperty_29.floatValue = EditorGUILayout.FloatField("Radius", serializedProperty_29.floatValue);
				serializedProperty_30.floatValue = EditorGUILayout.IntPopup("Radius Thickness", (int)serializedProperty_30.floatValue, new string[2]
				{
					"0",
					"1"
				}, new int[2]
				{
					0,
					1
				});
				serializedProperty_35.floatValue = EditorGUILayout.FloatField("Arc", serializedProperty_35.floatValue);
				break;
			}
			serializedProperty_31.floatValue = EditorGUILayout.FloatField("Randomize Direction", serializedProperty_31.floatValue);
		}
		EditorGUILayout.EndToggleGroup();
	}

	private void method_11()
	{
		SerializedProperty serializedProperty = base.serializedObject.FindProperty("VelocityModule");
		serializedProperty_36 = serializedProperty.FindPropertyRelative("enabled");
		serializedProperty_37 = serializedProperty.FindPropertyRelative("x");
		serializedProperty_38 = serializedProperty.FindPropertyRelative("y");
		serializedProperty_39 = serializedProperty.FindPropertyRelative("z");
		serializedProperty_40 = serializedProperty.FindPropertyRelative("inWorldSpace");
	}

	private void method_12()
	{
		serializedProperty_36.boolValue = EditorGUILayout.BeginToggleGroup("Velocity over Lifetime", serializedProperty_36.boolValue);
		EditorGUILayout.Space();
		if (serializedProperty_36.boolValue)
		{
			EditorGUILayout.BeginHorizontal();
			method_23(ref serializedProperty_37, "X");
			method_24(ref serializedProperty_37, 15u, 4);
			EditorGUILayout.EndHorizontal();
			EditorGUILayout.BeginHorizontal();
			method_23(ref serializedProperty_38, "Y");
			serializedProperty_38.FindPropertyRelative("minMaxState").intValue = serializedProperty_37.FindPropertyRelative("minMaxState").intValue;
			EditorGUILayout.EndHorizontal();
			EditorGUILayout.BeginHorizontal();
			method_23(ref serializedProperty_39, "Z");
			serializedProperty_39.FindPropertyRelative("minMaxState").intValue = serializedProperty_37.FindPropertyRelative("minMaxState").intValue;
			EditorGUILayout.EndHorizontal();
			int selectedValue = (serializedProperty_40.boolValue ? 1 : 0);
			selectedValue = EditorGUILayout.IntPopup("Space", selectedValue, new string[2]
			{
				"Local",
				"World"
			}, new int[2]
			{
				0,
				1
			});
			serializedProperty_40.boolValue = selectedValue == 1;
		}
		EditorGUILayout.EndToggleGroup();
	}

	private void method_13()
	{
		SerializedProperty serializedProperty = base.serializedObject.FindProperty("ColorModule");
		serializedProperty_41 = serializedProperty.FindPropertyRelative("enabled");
		serializedProperty_42 = serializedProperty.FindPropertyRelative("gradient");
	}

	private void method_14()
	{
		serializedProperty_41.boolValue = EditorGUILayout.BeginToggleGroup("Color over Lifetime", serializedProperty_41.boolValue);
		EditorGUILayout.Space();
		if (serializedProperty_41.boolValue)
		{
			method_25(ref serializedProperty_42, "Color");
			method_26(ref serializedProperty_42, 160u, 2);
		}
		EditorGUILayout.EndToggleGroup();
	}

	private void method_15()
	{
		SerializedProperty serializedProperty = base.serializedObject.FindProperty("SizeModule");
		serializedProperty_43 = serializedProperty.FindPropertyRelative("enabled");
		serializedProperty_44 = serializedProperty.FindPropertyRelative("separateAxes");
		serializedProperty_45 = serializedProperty.FindPropertyRelative("curve");
		serializedProperty_46 = serializedProperty.FindPropertyRelative("y");
		serializedProperty_47 = serializedProperty.FindPropertyRelative("z");
	}

	private void method_16()
	{
		serializedProperty_43.boolValue = EditorGUILayout.BeginToggleGroup("Size over Lifetime", serializedProperty_43.boolValue);
		EditorGUILayout.Space();
		if (serializedProperty_43.boolValue)
		{
			serializedProperty_44.boolValue = EditorGUILayout.Toggle("Separate Axes", serializedProperty_44.boolValue);
			if (serializedProperty_44.boolValue)
			{
				EditorGUILayout.BeginHorizontal();
				method_23(ref serializedProperty_45, "X");
				method_24(ref serializedProperty_45, 14u, 3);
				EditorGUILayout.EndHorizontal();
				EditorGUILayout.BeginHorizontal();
				method_23(ref serializedProperty_46, "Y");
				serializedProperty_46.FindPropertyRelative("minMaxState").intValue = serializedProperty_45.FindPropertyRelative("minMaxState").intValue;
				EditorGUILayout.EndHorizontal();
				EditorGUILayout.BeginHorizontal();
				method_23(ref serializedProperty_47, "Z");
				serializedProperty_47.FindPropertyRelative("minMaxState").intValue = serializedProperty_45.FindPropertyRelative("minMaxState").intValue;
				EditorGUILayout.EndHorizontal();
			}
			else
			{
				EditorGUILayout.BeginHorizontal();
				method_23(ref serializedProperty_45, "Size");
				method_24(ref serializedProperty_45, 14u, 3);
				EditorGUILayout.EndHorizontal();
			}
		}
		EditorGUILayout.EndToggleGroup();
	}

	private void method_17()
	{
		SerializedProperty serializedProperty = base.serializedObject.FindProperty("RotationModule");
		serializedProperty_48 = serializedProperty.FindPropertyRelative("enabled");
		serializedProperty_49 = serializedProperty.FindPropertyRelative("separateAxes");
		serializedProperty_50 = serializedProperty.FindPropertyRelative("x");
		serializedProperty_51 = serializedProperty.FindPropertyRelative("y");
		serializedProperty_52 = serializedProperty.FindPropertyRelative("curve");
	}

	private void method_18()
	{
		serializedProperty_48.boolValue = EditorGUILayout.BeginToggleGroup("Rotation over Lifetime", serializedProperty_48.boolValue);
		EditorGUILayout.Space();
		if (serializedProperty_48.boolValue)
		{
			serializedProperty_49.boolValue = EditorGUILayout.Toggle("Separate Axes", serializedProperty_49.boolValue);
			if (serializedProperty_49.boolValue)
			{
				EditorGUILayout.BeginHorizontal();
				method_23(ref serializedProperty_50, "X");
				method_24(ref serializedProperty_50, 15u, 4);
				EditorGUILayout.EndHorizontal();
				EditorGUILayout.BeginHorizontal();
				method_23(ref serializedProperty_51, "Y");
				serializedProperty_51.FindPropertyRelative("minMaxState").intValue = serializedProperty_50.FindPropertyRelative("minMaxState").intValue;
				EditorGUILayout.EndHorizontal();
				EditorGUILayout.BeginHorizontal();
				method_23(ref serializedProperty_52, "Z");
				serializedProperty_52.FindPropertyRelative("minMaxState").intValue = serializedProperty_50.FindPropertyRelative("minMaxState").intValue;
				EditorGUILayout.EndHorizontal();
			}
			else
			{
				EditorGUILayout.BeginHorizontal();
				method_23(ref serializedProperty_52, "Angular Velocity");
				method_24(ref serializedProperty_52, 15u, 4);
				EditorGUILayout.EndHorizontal();
			}
		}
		EditorGUILayout.EndToggleGroup();
	}

	private void method_19()
	{
		SerializedProperty serializedProperty = base.serializedObject.FindProperty("UVModule");
		serializedProperty_53 = serializedProperty.FindPropertyRelative("enabled");
		serializedProperty_54 = serializedProperty.FindPropertyRelative("mode");
		serializedProperty_55 = serializedProperty.FindPropertyRelative("tilesX");
		serializedProperty_56 = serializedProperty.FindPropertyRelative("tilesY");
		serializedProperty_57 = serializedProperty.FindPropertyRelative("animationType");
		serializedProperty_58 = serializedProperty.FindPropertyRelative("randomRow");
		serializedProperty_59 = serializedProperty.FindPropertyRelative("timeMode");
		serializedProperty_60 = serializedProperty.FindPropertyRelative("frameOverTime");
		serializedProperty_61 = serializedProperty.FindPropertyRelative("startFrame");
		serializedProperty_62 = serializedProperty.FindPropertyRelative("cycles");
	}

	private void method_20()
	{
		serializedProperty_53.boolValue = EditorGUILayout.BeginToggleGroup("Texture Sheet Aniamtion", serializedProperty_53.boolValue);
		EditorGUILayout.Space();
		if (serializedProperty_53.boolValue)
		{
			serializedProperty_54.intValue = EditorGUILayout.IntPopup("Mode", serializedProperty_54.intValue, new string[1]
			{
				"Grid"
			}, new int[1]);
			EditorGUILayout.LabelField("Tiles");
			serializedProperty_55.intValue = EditorGUILayout.IntField("X", serializedProperty_55.intValue);
			serializedProperty_56.intValue = EditorGUILayout.IntField("Y", serializedProperty_56.intValue);
			serializedProperty_57.intValue = EditorGUILayout.IntPopup("Animation", serializedProperty_57.intValue, new string[2]
			{
				"WholeSheet",
				"SingleRow"
			}, new int[2]
			{
				0,
				1
			});
			if (serializedProperty_57.intValue == 1)
			{
				serializedProperty_58.boolValue = EditorGUILayout.Toggle("Random Row", serializedProperty_58.boolValue);
			}
			serializedProperty_59.intValue = EditorGUILayout.IntPopup("Time Mode", serializedProperty_59.intValue, new string[1]
			{
				"LifeTime"
			}, new int[1]);
			EditorGUILayout.BeginHorizontal();
			method_23(ref serializedProperty_60, "Frame over Time");
			method_24(ref serializedProperty_60, 15u, 4);
			EditorGUILayout.EndHorizontal();
			EditorGUILayout.BeginHorizontal();
			method_23(ref serializedProperty_61, "Start Frame");
			method_24(ref serializedProperty_61, 5u, 2);
			EditorGUILayout.EndHorizontal();
			serializedProperty_62.floatValue = EditorGUILayout.FloatField("Cycles", serializedProperty_62.floatValue);
		}
		EditorGUILayout.EndToggleGroup();
	}

	private void method_21()
	{
		ParticleSystemRenderer component = (base.target as ParticleSystem).GetComponent<ParticleSystemRenderer>();
		serializedObject_0 = new SerializedObject(component);
		serializedProperty_63 = serializedObject_0.FindProperty("m_Enabled");
		serializedProperty_64 = serializedObject_0.FindProperty("m_RenderMode");
		serializedProperty_65 = serializedObject_0.FindProperty("m_NormalDirection");
		serializedProperty_66 = serializedObject_0.FindProperty("m_VelocityScale");
		serializedProperty_67 = serializedObject_0.FindProperty("m_LengthScale");
		serializedProperty_68 = serializedObject_0.FindProperty("m_Mesh");
		serializedProperty_69 = serializedObject_0.FindProperty("m_Materials");
		serializedProperty_70 = serializedProperty_69.GetArrayElementAtIndex(0);
		serializedProperty_71 = serializedObject_0.FindProperty("m_SortingFudge");
	}

	private void method_22()
	{
		serializedProperty_63.boolValue = EditorGUILayout.BeginToggleGroup("Renderer", serializedProperty_63.boolValue);
		EditorGUILayout.Space();
		if (serializedProperty_63.boolValue)
		{
			serializedProperty_64.intValue = EditorGUILayout.IntPopup("Render Mode", serializedProperty_64.intValue, new string[5]
			{
				"Billboard",
				"Stretch Billboard",
				"Horizontal Billboard",
				"Vertical Billboard",
				"Mesh"
			}, new int[5]
			{
				0,
				1,
				2,
				3,
				4
			});
			switch (serializedProperty_64.intValue)
			{
			case 1:
				serializedProperty_66.floatValue = EditorGUILayout.FloatField("Speed Scale", serializedProperty_66.floatValue);
				serializedProperty_67.floatValue = EditorGUILayout.FloatField("Length Scale", serializedProperty_67.floatValue);
				break;
			case 4:
				EditorGUILayout.PropertyField(serializedProperty_68);
				break;
			}
			serializedProperty_71.floatValue = EditorGUILayout.FloatField("Sort Fudge", serializedProperty_71.floatValue);
			serializedProperty_70.objectReferenceValue = EditorGUILayout.ObjectField("Material", serializedProperty_70.objectReferenceValue, typeof(Material), false);
		}
		EditorGUILayout.EndToggleGroup();
		serializedObject_0.ApplyModifiedProperties();
	}

	private void method_23(ref SerializedProperty serializedProperty_72, string string_0)
	{
		EditorGUILayout.PrefixLabel(string_0);
		switch (serializedProperty_72.FindPropertyRelative("minMaxState").intValue)
		{
		case 0:
			serializedProperty_72.FindPropertyRelative("scalar").floatValue = EditorGUILayout.FloatField(serializedProperty_72.FindPropertyRelative("scalar").floatValue);
			break;
		case 1:
			serializedProperty_72.FindPropertyRelative("maxCurve").animationCurveValue = EditorGUILayout.CurveField(serializedProperty_72.FindPropertyRelative("maxCurve").animationCurveValue);
			break;
		case 2:
			serializedProperty_72.FindPropertyRelative("minCurve").animationCurveValue = EditorGUILayout.CurveField(serializedProperty_72.FindPropertyRelative("minCurve").animationCurveValue);
			serializedProperty_72.FindPropertyRelative("maxCurve").animationCurveValue = EditorGUILayout.CurveField(serializedProperty_72.FindPropertyRelative("maxCurve").animationCurveValue);
			break;
		case 3:
			serializedProperty_72.FindPropertyRelative("minScalar").floatValue = EditorGUILayout.FloatField(serializedProperty_72.FindPropertyRelative("minScalar").floatValue);
			serializedProperty_72.FindPropertyRelative("scalar").floatValue = EditorGUILayout.FloatField(serializedProperty_72.FindPropertyRelative("scalar").floatValue);
			break;
		}
	}

	private void method_24(ref SerializedProperty serializedProperty_72, uint uint_0, int int_1)
	{
		string[] array;
		int[] array2;
		if (dictionary_0.ContainsKey(uint_0))
		{
			array = dictionary_0[uint_0];
			array2 = dictionary_1[uint_0];
		}
		else
		{
			array = new string[int_1];
			array2 = new int[int_1];
			int num = 0;
			if ((uint_0 & (true ? 1u : 0u)) != 0)
			{
				array[num] = "Constant";
				array2[num] = 0;
				num++;
			}
			if ((uint_0 & 2u) != 0)
			{
				array[num] = "Curve";
				array2[num] = 1;
				num++;
			}
			if ((uint_0 & 4u) != 0)
			{
				array[num] = "Random Between Two Constants";
				array2[num] = 3;
				num++;
			}
			if ((uint_0 & 8u) != 0)
			{
				array[num] = "Random Between Two Curves";
				array2[num] = 2;
			}
			dictionary_0.Add(uint_0, array);
			dictionary_1.Add(uint_0, array2);
		}
		if (bool_2 && !array2.Contains(serializedProperty_72.FindPropertyRelative("minMaxState").intValue) && array2.Length != 0)
		{
			serializedProperty_72.FindPropertyRelative("minMaxState").intValue = array2[0];
		}
		serializedProperty_72.FindPropertyRelative("minMaxState").intValue = EditorGUILayout.IntPopup(serializedProperty_72.FindPropertyRelative("minMaxState").intValue, array, array2, GUILayout.Width(80f));
	}

	private void method_25(ref SerializedProperty serializedProperty_72, string string_0)
	{
		EditorGUILayout.PrefixLabel(string_0);
		switch (serializedProperty_72.FindPropertyRelative("minMaxState").intValue)
		{
		case 0:
			serializedProperty_72.FindPropertyRelative("maxColor").colorValue = EditorGUILayout.ColorField(serializedProperty_72.FindPropertyRelative("maxColor").colorValue);
			break;
		case 1:
			EditorGUILayout.PropertyField(serializedProperty_72.FindPropertyRelative("maxGradient"));
			break;
		case 2:
			serializedProperty_72.FindPropertyRelative("maxColor").colorValue = EditorGUILayout.ColorField(serializedProperty_72.FindPropertyRelative("maxColor").colorValue);
			serializedProperty_72.FindPropertyRelative("minColor").colorValue = EditorGUILayout.ColorField(serializedProperty_72.FindPropertyRelative("minColor").colorValue);
			break;
		case 3:
			EditorGUILayout.PropertyField(serializedProperty_72.FindPropertyRelative("maxGradient"));
			EditorGUILayout.PropertyField(serializedProperty_72.FindPropertyRelative("minGradient"));
			break;
		case 4:
			break;
		}
	}

	private void method_26(ref SerializedProperty serializedProperty_72, uint uint_0, int int_1)
	{
		string[] array;
		int[] array2;
		if (dictionary_0.ContainsKey(uint_0))
		{
			array = dictionary_0[uint_0];
			array2 = dictionary_1[uint_0];
		}
		else
		{
			array = new string[int_1];
			array2 = new int[int_1];
			int num = 0;
			if ((uint_0 & 0x10u) != 0)
			{
				array[num] = "Color";
				array2[num] = 0;
				num++;
			}
			if ((uint_0 & 0x20u) != 0)
			{
				array[num] = "Gradient";
				array2[num] = 1;
				num++;
			}
			if ((uint_0 & 0x40u) != 0)
			{
				array[num] = "TwoColors";
				array2[num] = 2;
				num++;
			}
			if ((uint_0 & 0x80u) != 0)
			{
				array[num] = "TwoGradients";
				array2[num] = 3;
				num++;
			}
			if ((uint_0 & 0x100u) != 0)
			{
				array[num] = "RandomColor";
				array2[num] = 4;
			}
			dictionary_0.Add(uint_0, array);
			dictionary_1.Add(uint_0, array2);
		}
		if (bool_2 && !array2.Contains(serializedProperty_72.FindPropertyRelative("minMaxState").intValue) && array2.Length != 0)
		{
			serializedProperty_72.FindPropertyRelative("minMaxState").intValue = array2[0];
		}
		serializedProperty_72.FindPropertyRelative("minMaxState").intValue = EditorGUILayout.IntPopup(serializedProperty_72.FindPropertyRelative("minMaxState").intValue, array, array2, GUILayout.Width(80f));
	}

	private void method_27(ref ParticleSystem particleSystem_0)
	{
		ParticleSystem.MainModule main = particleSystem_0.main;
		if (main.simulationSpace == ParticleSystemSimulationSpace.Custom)
		{
			main.simulationSpace = ParticleSystemSimulationSpace.Local;
		}
		if (main.scalingMode == ParticleSystemScalingMode.Shape)
		{
			main.scalingMode = ParticleSystemScalingMode.Local;
		}
		main.stopAction = ParticleSystemStopAction.None;
		main.cullingMode = ParticleSystemCullingMode.Automatic;
		main.ringBufferMode = ParticleSystemRingBufferMode.Disabled;
	}

	private void method_28(ref ParticleSystem particleSystem_0)
	{
		ParticleSystem.EmissionModule emission = particleSystem_0.emission;
		emission.rateOverDistance = 0f;
		int burstCount = emission.burstCount;
		for (int i = 0; i < burstCount; i++)
		{
			ParticleSystem.Burst burst = emission.GetBurst(i);
			burst.cycleCount = 1;
			burst.repeatInterval = 0.01f;
			burst.probability = 1f;
			emission.SetBurst(i, burst);
		}
	}

	private void method_29(ref ParticleSystem particleSystem_0)
	{
		ParticleSystem.ShapeModule shape = particleSystem_0.shape;
		switch (shape.shapeType)
		{
		case ParticleSystemShapeType.Sphere:
		case ParticleSystemShapeType.Hemisphere:
			shape.arc = 360f;
			shape.arcMode = ParticleSystemShapeMultiModeValue.Random;
			shape.arcSpread = 0f;
			shape.texture = null;
			shape.position = new Vector3(0f, 0f, 0f);
			shape.rotation = new Vector3(0f, 0f, 0f);
			shape.scale = new Vector3(1f, 1f, 1f);
			shape.alignToDirection = false;
			shape.sphericalDirectionAmount = 0f;
			shape.randomPositionAmount = 0f;
			break;
		case ParticleSystemShapeType.Box:
		case ParticleSystemShapeType.BoxShell:
		case ParticleSystemShapeType.BoxEdge:
			shape.shapeType = ParticleSystemShapeType.Box;
			shape.texture = null;
			shape.position = new Vector3(0f, 0f, 0f);
			shape.rotation = new Vector3(0f, 0f, 0f);
			shape.alignToDirection = false;
			shape.sphericalDirectionAmount = 0f;
			shape.randomPositionAmount = 0f;
			break;
		case ParticleSystemShapeType.Cone:
		case ParticleSystemShapeType.ConeVolume:
			shape.arc = 360f;
			shape.arcMode = ParticleSystemShapeMultiModeValue.Random;
			shape.arcSpread = 0f;
			shape.texture = null;
			shape.position = new Vector3(0f, 0f, 0f);
			shape.rotation = new Vector3(0f, 0f, 0f);
			shape.scale = new Vector3(1f, 1f, 1f);
			shape.alignToDirection = false;
			shape.sphericalDirectionAmount = 0f;
			shape.randomPositionAmount = 0f;
			break;
		default:
			shape.shapeType = ParticleSystemShapeType.Cone;
			shape.arc = 360f;
			shape.arcMode = ParticleSystemShapeMultiModeValue.Random;
			shape.arcSpread = 0f;
			shape.texture = null;
			shape.position = new Vector3(0f, 0f, 0f);
			shape.rotation = new Vector3(0f, 0f, 0f);
			shape.scale = new Vector3(1f, 1f, 1f);
			shape.alignToDirection = false;
			shape.sphericalDirectionAmount = 0f;
			shape.randomPositionAmount = 0f;
			break;
		case ParticleSystemShapeType.Circle:
			shape.arcMode = ParticleSystemShapeMultiModeValue.Random;
			shape.arcSpread = 0f;
			shape.texture = null;
			shape.position = new Vector3(0f, 0f, 0f);
			shape.rotation = new Vector3(0f, 0f, 0f);
			shape.scale = new Vector3(1f, 1f, 1f);
			shape.alignToDirection = false;
			shape.sphericalDirectionAmount = 0f;
			shape.randomPositionAmount = 0f;
			break;
		}
	}

	private void method_30(ref ParticleSystem particleSystem_0)
	{
		ParticleSystem.VelocityOverLifetimeModule velocityOverLifetime = particleSystem_0.velocityOverLifetime;
		ParticleSystem.MinMaxCurve minMaxCurve9 = (velocityOverLifetime.speedModifier = (velocityOverLifetime.radial = (velocityOverLifetime.orbitalOffsetZ = (velocityOverLifetime.orbitalOffsetY = (velocityOverLifetime.orbitalOffsetX = (velocityOverLifetime.orbitalZ = (velocityOverLifetime.orbitalY = (velocityOverLifetime.orbitalX = new ParticleSystem.MinMaxCurve(0f)))))))));
	}

	private void method_31(ref ParticleSystem particleSystem_0)
	{
	}

	private void method_32(ref ParticleSystem particleSystem_0)
	{
	}

	private void method_33(ref ParticleSystem particleSystem_0)
	{
	}

	private void method_34(ref ParticleSystem particleSystem_0)
	{
		ParticleSystem.TextureSheetAnimationModule textureSheetAnimation = particleSystem_0.textureSheetAnimation;
		textureSheetAnimation.mode = ParticleSystemAnimationMode.Grid;
		textureSheetAnimation.timeMode = ParticleSystemAnimationTimeMode.Lifetime;
	}

	private void method_35(ref ParticleSystem particleSystem_0)
	{
		ParticleSystemRenderer component = particleSystem_0.GetComponent<ParticleSystemRenderer>();
		switch (component.renderMode)
		{
		case ParticleSystemRenderMode.Billboard:
			component.alignment = ParticleSystemRenderSpace.View;
			break;
		case ParticleSystemRenderMode.Stretch:
			component.alignment = ParticleSystemRenderSpace.View;
			component.cameraVelocityScale = 0f;
			break;
		case ParticleSystemRenderMode.HorizontalBillboard:
			component.alignment = ParticleSystemRenderSpace.View;
			break;
		case ParticleSystemRenderMode.VerticalBillboard:
			component.alignment = ParticleSystemRenderSpace.View;
			break;
		case ParticleSystemRenderMode.Mesh:
			component.alignment = ParticleSystemRenderSpace.Local;
			break;
		case ParticleSystemRenderMode.None:
			component.renderMode = ParticleSystemRenderMode.Billboard;
			component.alignment = ParticleSystemRenderSpace.View;
			break;
		}
		component.trailMaterial = null;
		component.sortMode = ParticleSystemSortMode.None;
		component.minParticleSize = 0f;
		component.maxParticleSize = 1f;
		component.flip = new Vector3(0f, 0f, 0f);
		component.allowRoll = true;
		component.pivot = new Vector3(0f, 0f, 0f);
		component.maskInteraction = SpriteMaskInteraction.None;
		component.shadowCastingMode = ShadowCastingMode.Off;
		component.receiveShadows = false;
		component.motionVectorGenerationMode = MotionVectorGenerationMode.Object;
		component.lightProbeUsage = LightProbeUsage.Off;
		component.reflectionProbeUsage = ReflectionProbeUsage.Off;
	}

	private void method_36(ref ParticleSystem particleSystem_0)
	{
		ParticleSystem.LimitVelocityOverLifetimeModule limitVelocityOverLifetime = particleSystem_0.limitVelocityOverLifetime;
		limitVelocityOverLifetime.enabled = false;
		ParticleSystem.InheritVelocityModule inheritVelocity = particleSystem_0.inheritVelocity;
		inheritVelocity.enabled = false;
		ParticleSystem.ForceOverLifetimeModule forceOverLifetime = particleSystem_0.forceOverLifetime;
		forceOverLifetime.enabled = false;
		ParticleSystem.SizeBySpeedModule sizeBySpeed = particleSystem_0.sizeBySpeed;
		sizeBySpeed.enabled = false;
		ParticleSystem.RotationBySpeedModule rotationBySpeed = particleSystem_0.rotationBySpeed;
		rotationBySpeed.enabled = false;
		ParticleSystem.ExternalForcesModule externalForces = particleSystem_0.externalForces;
		externalForces.enabled = false;
		ParticleSystem.NoiseModule noise = particleSystem_0.noise;
		noise.enabled = false;
		ParticleSystem.CollisionModule collision = particleSystem_0.collision;
		collision.enabled = false;
		ParticleSystem.TriggerModule trigger = particleSystem_0.trigger;
		trigger.enabled = false;
		ParticleSystem.SubEmittersModule subEmitters = particleSystem_0.subEmitters;
		subEmitters.enabled = false;
		ParticleSystem.LightsModule lights = particleSystem_0.lights;
		lights.enabled = false;
		ParticleSystem.TrailModule trails = particleSystem_0.trails;
		trails.enabled = false;
		ParticleSystem.CustomDataModule customData = particleSystem_0.customData;
		customData.enabled = false;
	}

	private float method_37(string string_0, float float_3)
	{
		EditorGUILayout.BeginHorizontal();
		EditorGUILayout.PrefixLabel(string_0);
		float result = EditorGUILayout.FloatField("", float_3);
		EditorGUILayout.EndHorizontal();
		return result;
	}

	private bool method_38(string string_0, bool bool_13)
	{
		EditorGUILayout.BeginHorizontal();
		EditorGUILayout.PrefixLabel(string_0);
		bool result = EditorGUILayout.Toggle("", bool_13);
		EditorGUILayout.EndHorizontal();
		return result;
	}

	private int method_39(string string_0, int int_1)
	{
		EditorGUILayout.BeginHorizontal();
		EditorGUILayout.PrefixLabel(string_0);
		int result = EditorGUILayout.IntField("", int_1);
		EditorGUILayout.EndHorizontal();
		return result;
	}

	private int method_40(string string_0, int int_1, string[] string_1, int[] int_2)
	{
		EditorGUILayout.BeginHorizontal();
		EditorGUILayout.PrefixLabel(string_0);
		int result = EditorGUILayout.IntPopup("", int_1, string_1, int_2);
		EditorGUILayout.EndHorizontal();
		return result;
	}

	private void method_41(AnimBool animBool_9, ref bool bool_13, string string_0)
	{
		EditorGUILayout.BeginHorizontal();
		if (GUILayout.Button(bool_13 ? "-" : "≡", CollapseButton))
		{
			bool_13 = !bool_13;
		}
		if (GUILayout.Button(string_0, GroupFoldout))
		{
			bool_13 = !bool_13;
		}
		animBool_9.target = bool_13;
		EditorGUILayout.EndHorizontal();
	}

	public LayaParticleSystemEditor()
	{
		
		float_2 = 4f;
		
	}

	static LayaParticleSystemEditor()
	{
		
		bool_0 = false;
		bool_1 = true;
		int_0 = 1;
		bool_2 = false;
		float_0 = 3f;
		float_1 = 0f;
		bool_3 = false;
		guistyle_0 = new GUIStyle();
		bool_4 = false;
		bool_5 = false;
		bool_6 = false;
		bool_7 = false;
		bool_8 = false;
		bool_9 = false;
		bool_10 = false;
		bool_11 = false;
		bool_12 = false;
		dictionary_0 = new Dictionary<uint, string[]>();
		dictionary_1 = new Dictionary<uint, int[]>();
	}
}
