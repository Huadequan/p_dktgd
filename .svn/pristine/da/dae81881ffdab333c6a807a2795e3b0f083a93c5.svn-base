using System;
using System.Collections.Generic;

using UnityEngine;

public class SocketBone
{
	public static void buildSocketBoneList(List<string> socketsBoneNames, List<string> boneNames, SkinnedMeshRenderer skinnedRenderer)
	{
		Transform rootBone = skinnedRenderer.rootBone;
		Transform[] bones = skinnedRenderer.bones;
		List<Transform> list = new List<Transform>();
		list.AddRange(bones);
		findBones(rootBone, socketsBoneNames, boneNames, list);
	}

	public static void findBones(Transform bone, List<string> socketsBoneNames, List<string> boneNames, List<Transform> bones, string path = null)
	{
		if (!bones.Contains(bone))
		{
			return;
		}
		boneNames.Add(bone.name);
		path = ((path != null) ? (path + "/" + bone.name) : bone.name);
		if (hasSocket(bone, bones))
		{
			string[] array = path.Split('/');
			foreach (string item in array)
			{
				if (!socketsBoneNames.Contains(item))
				{
					socketsBoneNames.Add(item);
				}
			}
		}
		for (int j = 0; j < bone.childCount; j++)
		{
			findBones(bone.GetChild(j), socketsBoneNames, boneNames, bones, path);
		}
	}

	public static bool hasSocket(Transform bone, List<Transform> bones)
	{
		Type type = bone.GetType();
		int num = 0;
		Transform child;
		while (true)
		{
			if (num < bone.childCount)
			{
				child = bone.GetChild(num);
				if (!bones.Contains(child))
				{
					break;
				}
				num++;
				continue;
			}
			return false;
		}
		Component[] components = child.gameObject.GetComponents<Component>();
		Component[] componentsInChildren = child.gameObject.GetComponentsInChildren<Component>(includeInactive: true);
		return hasNonTransComp(components, type) | hasNonTransComp(componentsInChildren, type);
	}

	public static bool hasNonTransComp(Component[] components, Type type)
	{
		int num = 0;
		while (true)
		{
			if (num < components.Length)
			{
				if (components[num].GetType() != type)
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

	public SocketBone()
	{
		
		
	}
}
