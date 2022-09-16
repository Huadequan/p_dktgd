using System;

using UnityEngine;

internal class LayaMathHelper
{
	public static bool smethod_0(Matrix4x4 matrix4x4_0, out Vector3 vector3_0, out Quaternion quaternion_0, out Vector3 vector3_1)
	{
		smethod_1(matrix4x4_0, out vector3_0, out var matrix4x4_, out vector3_1);
		smethod_2(matrix4x4_, out quaternion_0);
		return true;
	}

	private static bool smethod_1(Matrix4x4 matrix4x4_0, out Vector3 vector3_0, out Matrix4x4 matrix4x4_1, out Vector3 vector3_1)
	{
		vector3_1.x = matrix4x4_0.m30;
		vector3_1.y = matrix4x4_0.m31;
		vector3_1.z = matrix4x4_0.m32;
		vector3_0.x = (float)Math.Sqrt(matrix4x4_0.m00 * matrix4x4_0.m00 + matrix4x4_0.m01 * matrix4x4_0.m01 + matrix4x4_0.m02 * matrix4x4_0.m02);
		vector3_0.y = (float)Math.Sqrt(matrix4x4_0.m10 * matrix4x4_0.m10 + matrix4x4_0.m11 * matrix4x4_0.m11 + matrix4x4_0.m12 * matrix4x4_0.m12);
		vector3_0.z = (float)Math.Sqrt(matrix4x4_0.m20 * matrix4x4_0.m20 + matrix4x4_0.m21 * matrix4x4_0.m21 + matrix4x4_0.m22 * matrix4x4_0.m22);
		if (!smethod_3(vector3_0.x) && !smethod_3(vector3_0.y) && !smethod_3(vector3_0.z))
		{
			Vector3 vector = new Vector3(matrix4x4_0.m20 / vector3_0.z, matrix4x4_0.m21 / vector3_0.z, matrix4x4_0.m22 / vector3_0.z);
			Vector3 lhs = Vector3.Cross(vector, new Vector3(matrix4x4_0.m00 / vector3_0.x, matrix4x4_0.m01 / vector3_0.x, matrix4x4_0.m02 / vector3_0.x));
			Vector3 lhs2 = Vector3.Cross(lhs, vector);
			matrix4x4_1 = Matrix4x4.identity;
			matrix4x4_1.m00 = lhs2.x;
			matrix4x4_1.m01 = lhs2.y;
			matrix4x4_1.m02 = lhs2.z;
			matrix4x4_1.m10 = lhs.x;
			matrix4x4_1.m11 = lhs.y;
			matrix4x4_1.m12 = lhs.z;
			matrix4x4_1.m20 = vector.x;
			matrix4x4_1.m21 = vector.y;
			matrix4x4_1.m22 = vector.z;
			vector3_0.x = ((Vector3.Dot(lhs2, new Vector3(matrix4x4_0.m00, matrix4x4_0.m01, matrix4x4_0.m02)) > 0f) ? vector3_0.x : (0f - vector3_0.x));
			vector3_0.y = ((Vector3.Dot(lhs, new Vector3(matrix4x4_0.m10, matrix4x4_0.m11, matrix4x4_0.m12)) > 0f) ? vector3_0.y : (0f - vector3_0.y));
			vector3_0.z = ((Vector3.Dot(vector, new Vector3(matrix4x4_0.m20, matrix4x4_0.m21, matrix4x4_0.m22)) > 0f) ? vector3_0.z : (0f - vector3_0.z));
			return true;
		}
		matrix4x4_1 = Matrix4x4.identity;
		return false;
	}

	private static void smethod_2(Matrix4x4 matrix4x4_0, out Quaternion quaternion_0)
	{
		float num = matrix4x4_0.m00 + matrix4x4_0.m11 + matrix4x4_0.m22;
		if (num > 0f)
		{
			float num2 = (float)Math.Sqrt(num + 1f);
			quaternion_0.w = num2 * 0.5f;
			num2 = 0.5f / num2;
			quaternion_0.x = (matrix4x4_0.m12 - matrix4x4_0.m21) * num2;
			quaternion_0.y = (matrix4x4_0.m20 - matrix4x4_0.m02) * num2;
			quaternion_0.z = (matrix4x4_0.m01 - matrix4x4_0.m10) * num2;
		}
		else if (matrix4x4_0.m00 >= matrix4x4_0.m11 && matrix4x4_0.m00 >= matrix4x4_0.m22)
		{
			float num2 = (float)Math.Sqrt(1f + matrix4x4_0.m00 - matrix4x4_0.m11 - matrix4x4_0.m22);
			float num3 = 0.5f / num2;
			quaternion_0.x = 0.5f * num2;
			quaternion_0.y = (matrix4x4_0.m01 + matrix4x4_0.m10) * num3;
			quaternion_0.z = (matrix4x4_0.m02 + matrix4x4_0.m20) * num3;
			quaternion_0.w = (matrix4x4_0.m12 - matrix4x4_0.m21) * num3;
		}
		else if (matrix4x4_0.m11 > matrix4x4_0.m22)
		{
			float num2 = (float)Math.Sqrt(1f + matrix4x4_0.m11 - matrix4x4_0.m00 - matrix4x4_0.m22);
			float num3 = 0.5f / num2;
			quaternion_0.x = (matrix4x4_0.m10 + matrix4x4_0.m01) * num3;
			quaternion_0.y = 0.5f * num2;
			quaternion_0.z = (matrix4x4_0.m21 + matrix4x4_0.m12) * num3;
			quaternion_0.w = (matrix4x4_0.m20 - matrix4x4_0.m02) * num3;
		}
		else
		{
			float num2 = (float)Math.Sqrt(1f + matrix4x4_0.m22 - matrix4x4_0.m00 - matrix4x4_0.m11);
			float num3 = 0.5f / num2;
			quaternion_0.x = (matrix4x4_0.m20 + matrix4x4_0.m02) * num3;
			quaternion_0.y = (matrix4x4_0.m21 + matrix4x4_0.m12) * num3;
			quaternion_0.z = 0.5f * num2;
			quaternion_0.w = (matrix4x4_0.m01 - matrix4x4_0.m10) * num3;
		}
	}

	private static bool smethod_3(float float_0)
	{
		return Math.Abs(float_0) < 1E-06f;
	}

	public static bool smethod_4(float float_0, float float_1)
	{
		return (double)(float_0 - float_1) <= 0.001;
	}

	public static float smethod_5(float float_0, float float_1, float float_2, float float_3, float float_4, float float_5, float float_6, out float float_7)
	{
		float result = (2f * float_6 * float_6 * float_6 - 3f * float_6 * float_6 + 1f) * float_2 + (float_6 * float_6 * float_6 - 2f * float_6 * float_6 + float_6) * float_4 + (-2f * float_6 * float_6 * float_6 + 3f * float_6 * float_6) * float_3 + (float_6 * float_6 * float_6 - float_6 * float_6) * float_5;
		float_7 = (6f * float_6 * float_6 - 6f * float_6) * float_2 + (3f * float_6 * float_6 - 4f * float_6 + 1f) * float_4 + (-6f * float_6 * float_6 + 6f * float_6) * float_3 + (3f * float_6 * float_6 - 2f * float_6) * float_5;
		float_7 /= float_1 - float_0;
		return result;
	}

	public static Matrix4x4 smethod_6(Vector3 vector3_0, Quaternion quaternion_0, Vector3 vector3_1)
	{
		Matrix4x4 result = default(Matrix4x4);
		float x = quaternion_0.x;
		float y = quaternion_0.y;
		float z = quaternion_0.z;
		float w = quaternion_0.w;
		float num = x + x;
		float num2 = y + y;
		float num3 = z + z;
		float num4 = x * num;
		float num5 = x * num2;
		float num6 = x * num3;
		float num7 = y * num2;
		float num8 = y * num3;
		float num9 = z * num3;
		float num10 = w * num;
		float num11 = w * num2;
		float num12 = w * num3;
		float x2 = vector3_1.x;
		float y2 = vector3_1.y;
		float z2 = vector3_1.z;
		result.m00 = (1f - (num7 + num9)) * x2;
		result.m01 = (num5 + num12) * x2;
		result.m02 = (num6 - num11) * x2;
		result.m03 = 0f;
		result.m10 = (num5 - num12) * y2;
		result.m11 = (1f - (num4 + num9)) * y2;
		result.m12 = (num8 + num10) * y2;
		result.m13 = 0f;
		result.m20 = (num6 + num11) * z2;
		result.m21 = (num8 - num10) * z2;
		result.m22 = (1f - (num4 + num7)) * z2;
		result.m23 = 0f;
		result.m30 = vector3_0.x;
		result.m31 = vector3_0.y;
		result.m32 = vector3_0.z;
		result.m33 = 1f;
		return result;
	}

	public static void smethod_7(Matrix4x4 matrix4x4_0, float[] float_0, int int_0, out float[] float_1)
	{
		Matrix4x4 matrix4x = matrix4x4_0;
		float[] array = (float_1 = (float_1 = new float[16]));
		float num = float_0[0];
		float num2 = float_0[1];
		float num3 = float_0[2];
		float num4 = float_0[3];
		float num5 = float_0[4];
		float num6 = float_0[5];
		float num7 = float_0[6];
		float num8 = float_0[7];
		float num9 = float_0[8];
		float num10 = float_0[9];
		float num11 = float_0[10];
		float num12 = float_0[11];
		float num13 = float_0[12];
		float num14 = float_0[13];
		float num15 = float_0[14];
		float num16 = float_0[15];
		float m = matrix4x.m00;
		float m2 = matrix4x.m01;
		float m3 = matrix4x.m02;
		float m4 = matrix4x.m03;
		float m5 = matrix4x.m10;
		float m6 = matrix4x.m11;
		float m7 = matrix4x.m12;
		float m8 = matrix4x.m13;
		float m9 = matrix4x.m20;
		float m10 = matrix4x.m21;
		float m11 = matrix4x.m22;
		float m12 = matrix4x.m23;
		float m13 = matrix4x.m30;
		float m14 = matrix4x.m31;
		float m15 = matrix4x.m32;
		float m16 = matrix4x.m33;
		array[0] = num * m + num2 * m5 + num3 * m9 + num4 * m13;
		array[1] = num * m2 + num2 * m6 + num3 * m10 + num4 * m14;
		array[2] = num * m3 + num2 * m7 + num3 * m11 + num4 * m15;
		array[3] = num * m4 + num2 * m8 + num3 * m12 + num4 * m16;
		array[4] = num5 * m + num6 * m5 + num7 * m9 + num8 * m13;
		array[5] = num5 * m2 + num6 * m6 + num7 * m10 + num8 * m14;
		array[6] = num5 * m3 + num6 * m7 + num7 * m11 + num8 * m15;
		array[7] = num5 * m4 + num6 * m8 + num7 * m12 + num8 * m16;
		array[8] = num9 * m + num10 * m5 + num11 * m9 + num12 * m13;
		array[9] = num9 * m2 + num10 * m6 + num11 * m10 + num12 * m14;
		array[10] = num9 * m3 + num10 * m7 + num11 * m11 + num12 * m15;
		array[11] = num9 * m4 + num10 * m8 + num11 * m12 + num12 * m16;
		array[12] = num13 * m + num14 * m5 + num15 * m9 + num16 * m13;
		array[13] = num13 * m2 + num14 * m6 + num15 * m10 + num16 * m14;
		array[14] = num13 * m3 + num14 * m7 + num15 * m11 + num16 * m15;
		array[15] = num13 * m4 + num14 * m8 + num15 * m12 + num16 * m16;
	}

	public LayaMathHelper()
	{
		
		
	}
}
