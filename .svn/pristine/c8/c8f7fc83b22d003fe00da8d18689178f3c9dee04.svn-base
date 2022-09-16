using System.Collections.Generic;

using UnityEngine;

public class backAnimatorData
{
	public GameObject animatorGameObject;

	public Animator animator;

	public AnimationClip[] clips;

	public int currentFrame;

	public int currentClipEndFrame;

	public int currentClipIndex;

	public int allFrameLength;

	public float[] pixelData;

	public List<int> clipIndex;

	public bool isUpdate;

	public Transform[] bones;

	public List<float[]> bondPos;

	public int pixelDataOffset;

	public float deltaTime;

	public int bakeFPS;

	public int textureWidth;

	public int saveLaniindex;

	public List<string> socketsBoneNames;

	public List<string> boneNames;

	public void onStart()
	{
		animator.Update(0f);
		animator.Play(clips[currentClipIndex].name);
		AnimationClip animationClip = clips[currentClipIndex];
		currentClipEndFrame = (int)(animationClip.averageDuration * (float)bakeFPS + 0.5f) + 1;
		animator.Update(0f);
		currentFrame = 0;
		clipIndex.Add(pixelDataOffset);
	}

	public void update()
	{
		if (!isUpdate)
		{
			return;
		}
		if (currentFrame >= currentClipEndFrame)
		{
			currentClipIndex++;
			if (currentClipIndex == clips.Length)
			{
				isUpdate = false;
				return;
			}
			animator.Update(0f);
			animator.Play(clips[currentClipIndex].name);
			AnimationClip animationClip = clips[currentClipIndex];
			currentClipEndFrame = (int)(animationClip.averageDuration * (float)bakeFPS + 0.5f) + 1;
			animator.Update(0f);
			currentFrame = 0;
			clipIndex.Add(pixelDataOffset / 4);
		}
		else
		{
			method_0();
			currentFrame++;
			animator.Update(deltaTime);
		}
	}

	private void method_0()
	{
		int num = bones.Length;
		for (int i = 0; i < num; i++)
		{
			LayaMathHelper.smethod_0(bones[i].localToWorldMatrix.transpose, out var vector3_, out var quaternion_, out var vector3_2);
			quaternion_.x *= -1f;
			quaternion_.w *= -1f;
			vector3_2.x *= -1f;
			quaternion_.Normalize();
			LayaMathHelper.smethod_7(LayaMathHelper.smethod_6(vector3_2, quaternion_, vector3_), bondPos[i], 0, out var float_);
			pixelDataOffset += method_1(pixelDataOffset, float_);
		}
	}

	private int method_1(int int_0, float[] float_0)
	{
		pixelData[int_0] = float_0[0];
		pixelData[int_0 + 1] = float_0[1];
		pixelData[int_0 + 2] = float_0[2];
		pixelData[int_0 + 3] = float_0[3];
		pixelData[int_0 + 4] = float_0[4];
		pixelData[int_0 + 5] = float_0[5];
		pixelData[int_0 + 6] = float_0[6];
		pixelData[int_0 + 7] = float_0[7];
		pixelData[int_0 + 8] = float_0[8];
		pixelData[int_0 + 9] = float_0[9];
		pixelData[int_0 + 10] = float_0[10];
		pixelData[int_0 + 11] = float_0[11];
		pixelData[int_0 + 12] = float_0[12];
		pixelData[int_0 + 13] = float_0[13];
		pixelData[int_0 + 14] = float_0[14];
		pixelData[int_0 + 15] = float_0[15];
		return 16;
	}

	public backAnimatorData()
	{
		
		clipIndex = new List<int>();
		isUpdate = true;
		saveLaniindex = -1;
		
	}
}
