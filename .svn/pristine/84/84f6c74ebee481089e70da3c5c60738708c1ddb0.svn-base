using System;
using System.Collections.Generic;
using System.IO;

using UnityEditor;
using UnityEditor.Animations;
using UnityEngine;

internal class BakeAnimatorHelper : EditorWindow
{
	private static GameObject gameObject_0;

	private static GameObject gameObject_1;

	private static Animator animator_0;

	private List<Matrix4x4> list_0;

	private static int int_0;

	private static List<AnimationClip> list_1;

	private static Transform[] transform_0;

	private static Matrix4x4[] matrix4x4_0;

	private static List<float[]> list_2;

	private static float[] float_0;

	public static Dictionary<string, backAnimatorData> dictionary_0;

	private static bool bool_0;

	public static void BakeAnimator(int int_1, GameObject gameObject_2, string string_0, List<string> list_3, List<string> list_4)
	{
		gameObject_0 = gameObject_2;
		gameObject_1 = UnityEngine.Object.Instantiate(gameObject_0);
		gameObject_1.SetActive(value: true);
		gameObject_1.transform.position = Vector3.zero;
		gameObject_1.transform.rotation = Quaternion.identity;
		gameObject_1.transform.localScale = new Vector3(1f, 1f, 1f);
		animator_0 = gameObject_1.GetComponent<Animator>();
		smethod_1(gameObject_1.GetComponentsInChildren<SkinnedMeshRenderer>(), out transform_0, out matrix4x4_0);
		list_2 = smethod_3(matrix4x4_0);
		int_0 = matrix4x4_0.Length;
		if (animator_0.runtimeAnimatorController == null)
		{
			UnityEngine.Object.DestroyImmediate(gameObject_1);
			Debug.LogError("The prefab's Animator should have a Animator Controller.");
			return;
		}
		AnimatorController animatorController = animator_0.runtimeAnimatorController as AnimatorController;
		for (int i = 0; i < animatorController.layers.Length; i++)
		{
			AnimatorStateMachine stateMachine = animatorController.layers[i].stateMachine;
			int num = stateMachine.states.Length;
			list_1.Clear();
			for (int j = 0; j < num; j++)
			{
				AnimationClip item = stateMachine.states[j].state.motion as AnimationClip;
				list_1.Add(item);
			}
		}
		int int_2 = 0;
		int textureWidth = smethod_4(list_1, int_0, int_1, ref int_2);
		float_0 = new float[int_2 * 4];
		backAnimatorData backAnimatorData = new backAnimatorData();
		backAnimatorData.animator = animator_0;
		backAnimatorData.animatorGameObject = gameObject_1;
		backAnimatorData.clips = list_1.ToArray();
		backAnimatorData.pixelData = float_0;
		backAnimatorData.clipIndex = new List<int>(list_1.Count);
		backAnimatorData.currentFrame = 0;
		backAnimatorData.bondPos = list_2;
		backAnimatorData.bones = transform_0;
		backAnimatorData.bakeFPS = int_1;
		backAnimatorData.deltaTime = 1f / (float)int_1;
		backAnimatorData.textureWidth = textureWidth;
		backAnimatorData.socketsBoneNames = list_3;
		backAnimatorData.boneNames = list_4;
		backAnimatorData.onStart();
		dictionary_0.Add(string_0, backAnimatorData);
		bool_0 = true;
	}

	public static void smethod_1(SkinnedMeshRenderer[] skinnedMeshRenderer_0, out Transform[] transform_1, out Matrix4x4[] matrix4x4_1)
	{
		List<Transform> list = new List<Transform>();
		List<Matrix4x4> list2 = new List<Matrix4x4>();
		int i = 0;
		for (int num = skinnedMeshRenderer_0.Length; i < num; i++)
		{
			Transform[] bones = skinnedMeshRenderer_0[i].bones;
			Matrix4x4[] bindposes = skinnedMeshRenderer_0[i].sharedMesh.bindposes;
			for (int j = 0; j < bones.Length; j++)
			{
				if (!list.Contains(bones[j]))
				{
					list.Add(bones[j]);
					list2.Add(bindposes[j]);
				}
			}
		}
		transform_1 = list.ToArray();
		matrix4x4_1 = list2.ToArray();
	}

	public static void BakeUpdate()
	{
		if (!bool_0)
		{
			return;
		}
		bool_0 = false;
		foreach (KeyValuePair<string, backAnimatorData> item in dictionary_0)
		{
			backAnimatorData value = item.Value;
			if (value.isUpdate)
			{
				value.update();
				bool_0 = true;
			}
		}
		if (bool_0)
		{
			return;
		}
		EditorApplication.update = (EditorApplication.CallbackFunction)Delegate.Remove(EditorApplication.update, new EditorApplication.CallbackFunction(BakeUpdate));
		foreach (KeyValuePair<string, backAnimatorData> item2 in dictionary_0)
		{
			Debug.Log("item.Key: " + item2.Key);
			smethod_6(item2.Key, item2.Value.textureWidth, "1", item2.Value.pixelData);
			LayaMainExport._DoExport_Animator(item2.Value.animatorGameObject, LayaMainExport.bool_compress_anim, item2.Value);
		}
		ClearBackAnimatorData();
		if (LayaAir3D.bool_multiScene)
		{
			if (AccountHelper.int_ExportState == 0 && dictionary_0.Count == 0)
			{
				Debug.Log(LayaMainExport.string_PluginTag + "Exporting Success");
				LayaAir3D.sceneIndex++;
				LayaAir3D.SynchronizeExportScenes();
			}
			if (LayaAir3D.customExport != null)
			{
				LayaAir3D.customExport.EndHierarchysExport(LayaAir3D.SAVEPATH);
			}
		}
	}

	private static List<float[]> smethod_3(Matrix4x4[] matrix4x4_1)
	{
		int num = matrix4x4_1.Length;
		List<float[]> list = new List<float[]>();
		for (int i = 0; i < num; i++)
		{
			Matrix4x4 matrix4x = matrix4x4_1[i];
			LayaMathHelper.smethod_0(matrix4x.inverse.transpose, out var vector3_, out var quaternion_, out var vector3_2);
			vector3_2.x *= -1f;
			quaternion_.x *= -1f;
			quaternion_.w *= -1f;
			quaternion_.Normalize();
			Matrix4x4 inverse = Matrix4x4.TRS(vector3_2, quaternion_, vector3_).inverse;
			list.Add(new float[16]
			{
				inverse[0],
				inverse[1],
				inverse[2],
				inverse[3],
				inverse[4],
				inverse[5],
				inverse[6],
				inverse[7],
				inverse[8],
				inverse[9],
				inverse[10],
				inverse[11],
				inverse[12],
				inverse[13],
				inverse[14],
				inverse[15]
			});
		}
		return list;
	}

	private static int smethod_4(List<AnimationClip> list_3, int int_1, int int_2, ref int int_3)
	{
		int count = list_3.Count;
		for (int i = 0; i < count; i++)
		{
			AnimationClip animationClip = list_3[i];
			int num = (int)((float)int_2 * animationClip.averageDuration + 0.5f) + 1;
			int_3 += num * int_1 * 4;
		}
		int num2 = 32;
		while (num2 * num2 <= int_3)
		{
			num2 <<= 1;
		}
		return num2;
	}

	public static void ClearBackAnimatorData()
	{
		foreach (KeyValuePair<string, backAnimatorData> item in dictionary_0)
		{
			backAnimatorData value = item.Value;
			value.saveLaniindex = -1;
			UnityEngine.Object.DestroyImmediate(value.animatorGameObject);
		}
		dictionary_0.Clear();
	}

	public static void smethod_6(string string_0, int int_1, string string_1, float[] float_1)
	{
		FileStream fileStream = FSWriterHelper.CreateFS(string_0);
		if (!LayaMainExport.bool_compress_anim)
		{
			FSWriterHelper.Write_String(fileStream, LayaMainExport.string_11);
			FSWriterHelper.Write_IntArray(fileStream, int_1);
			FSWriterHelper.Write_IntArray(fileStream, float_1.Length);
			for (int i = 0; i < float_1.Length; i++)
			{
				FSWriterHelper.Write_FloatArray(fileStream, float_1[i]);
			}
		}
		else
		{
			FSWriterHelper.Write_String(fileStream, LayaMainExport.string_12);
			FSWriterHelper.Write_IntArray(fileStream, int_1);
			FSWriterHelper.Write_IntArray(fileStream, float_1.Length);
			for (int j = 0; j < float_1.Length; j++)
			{
				FSWriterHelper.Write_UnshortArray(fileStream, CompressHelper.smethod_0(float_1[j]));
			}
		}
		fileStream.Close();
	}

	public BakeAnimatorHelper()
	{
		
		list_0 = new List<Matrix4x4>(150);
		
	}

	static BakeAnimatorHelper()
	{
		
		int_0 = 0;
		list_1 = new List<AnimationClip>();
		dictionary_0 = new Dictionary<string, backAnimatorData>();
		bool_0 = false;
	}
}
