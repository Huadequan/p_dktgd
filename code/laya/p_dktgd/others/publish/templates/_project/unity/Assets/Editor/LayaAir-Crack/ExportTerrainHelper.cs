using System;
using System.Collections.Generic;
using System.IO;

using UnityEditor;
using UnityEngine;

internal class ExportTerrainHelper
{
	private static int int_0;

	private static int int_1;

	private static int int_2;

	private static int int_3;

	private static int int_4;

	private static Color[] color_0;

	private static ExportDataItem class16_0;

	private static List<KeyValuePair<string, Color[]>> list_0;

	private static Terrain terrain_0;

	private static string string_0;

	private static ExportDataItem class16_1;

	private static ExportDataItem class16_2;

	private static ExportDataItem class16_3;

	private static ExportDataItem class16_4;

	private static string string_1;

	private static bool bool_0;

	private static bool bool_1;

	public static void smethod_0(string string_2, ExportDataItem class16_5)
	{
		string_0 = string_2 + "/terrain";
		Terrain[] activeTerrains = Terrain.activeTerrains;
		foreach (Terrain obj in activeTerrains)
		{
			smethod_3();
			terrain_0 = obj;
			class16_5.AddString("dataPath", "terrain/" + terrain_0.name.ToLower() + ".lt");
			smethod_2();
		}
	}

	private static void smethod_1(ExportDataItem class16_5)
	{
		if (terrain_0 != null && terrain_0.lightmapIndex > -1)
		{
			class16_5.AddNumber_Int("lightmapIndex", terrain_0.lightmapIndex);
			ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Array);
			class16_5.Add_Class16("lightmapScaleOffset", @class);
			@class.Add_Number_Float(terrain_0.lightmapScaleOffset.x);
			@class.Add_Number_Float(terrain_0.lightmapScaleOffset.y);
			@class.Add_Number_Float(terrain_0.lightmapScaleOffset.z);
			@class.Add_Number_Float(0f - terrain_0.lightmapScaleOffset.w);
		}
	}

	private static void smethod_2()
	{
		if (!Directory.Exists(string_0))
		{
			Directory.CreateDirectory(string_0);
		}
		if (terrain_0.terrainData == null)
		{
			Debug.LogWarning("LayaAir3D : " + terrain_0.name + "'s TerrainData can't find!");
			return;
		}
		ExportDataItem @class = new ExportDataItem(ExportDataItem.Enum0.Object);
		@class.AddString("version", "1.0");
		@class.AddBoolean("cameraCoordinateInverse", bool_1);
		float num = terrain_0.terrainData.size.x / (float)(terrain_0.terrainData.heightmapWidth - 1);
		@class.method_18("gridSize", num);
		if ((terrain_0.terrainData.heightmapWidth - 1) % int_0 != 0)
		{
			Debug.LogError("高度图的宽减去一必须是" + int_0 + "的倍数");
			return;
		}
		if ((terrain_0.terrainData.heightmapHeight - 1) % int_0 != 0)
		{
			Debug.LogError("高度图的高减去一必须是" + int_0 + "的倍数");
			return;
		}
		int num2 = (terrain_0.terrainData.heightmapWidth - 1) / int_0;
		int num3 = (terrain_0.terrainData.heightmapHeight - 1) / int_0;
		@class.AddNumber_Int("chunkNumX", num2);
		@class.AddNumber_Int("chunkNumZ", num3);
		ExportDataItem class2 = new ExportDataItem(ExportDataItem.Enum0.Object);
		class2.AddNumber_Int("numX", terrain_0.terrainData.heightmapWidth);
		class2.AddNumber_Int("numZ", terrain_0.terrainData.heightmapHeight);
		class2.AddNumber_Int("bitType", 16);
		class2.method_18("value", terrain_0.terrainData.size.y);
		class2.AddString("url", terrain_0.name.ToLower() + "_heightmap.thdata");
		@class.Add_Class16("heightData", class2);
		ExportDataItem class3 = new ExportDataItem(ExportDataItem.Enum0.Object);
		@class.Add_Class16("material", class3);
		ExportDataItem class4 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class4.Add_Number_Float(0f);
		class4.Add_Number_Float(0f);
		class4.Add_Number_Float(0f);
		class3.Add_Class16("ambient", class4);
		ExportDataItem class5 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class5.Add_Number_Float(1f);
		class5.Add_Number_Float(1f);
		class5.Add_Number_Float(1f);
		class3.Add_Class16("diffuse", class5);
		ExportDataItem class6 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class6.Add_Number_Float(0.2f);
		class6.Add_Number_Float(0.2f);
		class6.Add_Number_Float(0.2f);
		class6.Add_Number_Float(32f);
		class3.Add_Class16("specular", class6);
		ExportDataItem class7 = new ExportDataItem(ExportDataItem.Enum0.Array);
		@class.Add_Class16("detailTexture", class7);
		int num4 = terrain_0.terrainData.terrainLayers.Length;
		_ = terrain_0.terrainData.terrainLayers[0];
		for (int i = 0; i < num4; i++)
		{
			ExportDataItem class8 = new ExportDataItem(ExportDataItem.Enum0.Object);
			TerrainLayer terrainLayer = terrain_0.terrainData.terrainLayers[i];
			class8.AddString("diffuse", terrainLayer.diffuseTexture.name.ToLower() + ".jpg");
			if (terrainLayer.normalMapTexture != null)
			{
				class8.AddString("normal", terrainLayer.normalMapTexture.name.ToLower() + ".jpg");
			}
			ExportDataItem class9 = new ExportDataItem(ExportDataItem.Enum0.Array);
			class9.Add_Number_Float(terrainLayer.tileSize.x / num);
			class9.Add_Number_Float(terrainLayer.tileSize.y / num);
			class8.Add_Class16("scale", class9);
			ExportDataItem class10 = new ExportDataItem(ExportDataItem.Enum0.Array);
			class10.Add_Number_Float(terrainLayer.tileOffset.x);
			class10.Add_Number_Float(terrainLayer.tileOffset.y);
			class8.Add_Class16("offset", class10);
			class7.Add_ArrayData(class8);
		}
		class16_4 = new ExportDataItem(ExportDataItem.Enum0.Array);
		@class.Add_Class16("chunkInfo", class16_4);
		float[,] float_ = smethod_11();
		Texture2D texture2D = smethod_15(smethod_13(float_, num2 * int_1 * num3 * int_1 * 2, num));
		ExportDataItem class11 = new ExportDataItem(ExportDataItem.Enum0.Array);
		class11.Add_String(texture2D.name.ToLower() + ".png");
		@class.Add_Class16("normalMap", class11);
		int num5 = 0;
		int num6 = 0;
		int num7 = 0;
		int num8 = 0;
		int num9 = 0;
		int num10 = 0;
		int num11 = 0;
		Color[] array = null;
		TextureFormat textureFormat_ = (TextureFormat)0;
		for (num5 = 0; num5 < num3; num5++)
		{
			for (num6 = 0; num6 < num2; num6++)
			{
				num4 = terrain_0.terrainData.alphamapTextures.Length;
				class16_3 = new ExportDataItem(ExportDataItem.Enum0.Object);
				class16_1 = new ExportDataItem(ExportDataItem.Enum0.Array);
				class16_2 = new ExportDataItem(ExportDataItem.Enum0.Array);
				int_2 = 0;
				for (num7 = 0; num7 < num4; num7++)
				{
					Texture2D texture2D2 = terrain_0.terrainData.alphamapTextures[num7];
					if (texture2D2.width % num2 == 0)
					{
						if (texture2D2.height % num3 == 0)
						{
							num10 = texture2D2.width / num2;
							num11 = texture2D2.height / num3;
							num8 = num6 * num10;
							num9 = texture2D2.height - (num5 + 1) * num11;
							array = texture2D2.GetPixels(num8, num9, num10, num11);
							textureFormat_ = texture2D2.format;
							smethod_6(terrain_0.name.ToLower() + "_splatalpha{0}_" + num6 + "_" + num5 + (bool_0 ? ".jpg" : ".png"), textureFormat_, num10, num11, array);
							continue;
						}
						Debug.LogError("Control Texture(alpha map) 的高必须是" + num3 + "的倍数");
						return;
					}
					Debug.LogError("Control Texture(alpha map) 的宽必须是" + num2 + "的倍数");
					return;
				}
				smethod_5(terrain_0.name.ToLower() + "_splatalpha{0}_" + num6 + "_" + num5 + (bool_0 ? ".jpg" : ".png"), textureFormat_, num10, num11);
				class16_3.AddNumber_Int("normalMap", 0);
			}
			smethod_12();
			smethod_9(float_);
			smethod_10();
		}
		ExportDataItem class12 = new ExportDataItem(ExportDataItem.Enum0.Array);
		for (int j = 0; j < list_0.Count; j++)
		{
			class12.Add_String(list_0[j].Key.ToLower());
		}
		@class.Add_Class16("alphaMap", class12);
		smethod_16(@class);
	}

	private static void smethod_3()
	{
		int_2 = 0;
		int_3 = 0;
		int_4 = 0;
		color_0 = null;
		class16_0 = null;
		list_0.Clear();
		terrain_0 = null;
		class16_1 = null;
		class16_2 = null;
		class16_4 = null;
		string_1 = "";
	}

	private static void smethod_4(string string_2, TextureFormat textureFormat_0, int int_5, int int_6)
	{
		if (int_3 <= 0 || !smethod_7(color_0))
		{
			int num = smethod_8(color_0, list_0);
			if (num == -1)
			{
				Texture2D texture2D = new Texture2D(int_5, int_6, textureFormat_0, mipChain: false);
				Color[] array = new Color[color_0.Length];
				for (int i = 0; i < color_0.Length; i++)
				{
					float r = color_0[i].r;
					float g = color_0[i].g;
					float b = color_0[i].b;
					float a = color_0[i].a;
					array[i].r = g;
					array[i].g = b;
					array[i].b = a;
					float num2 = r + g + b + a;
					array[i].a = ((num2 > 1f) ? 1f : num2);
				}
				texture2D.SetPixels(array);
				texture2D.Apply();
				string text = string.Format(string_2, int_3).ToLower();
				File.WriteAllBytes(string_0 + "/" + text, bool_0 ? texture2D.EncodeToJPG() : texture2D.EncodeToPNG());
				list_0.Add(new KeyValuePair<string, Color[]>(text, color_0));
				num = list_0.Count - 1;
			}
			class16_1.Add_Number_Int(num);
			class16_2.Add_ArrayData(class16_0);
		}
		int_3++;
		color_0 = null;
		int_4 = 0;
	}

	private static void smethod_5(string string_2, TextureFormat textureFormat_0, int int_5, int int_6)
	{
		if (color_0 != null)
		{
			smethod_4(string_2, textureFormat_0, int_5, int_6);
		}
		int_3 = 0;
		string_1 = "";
		class16_3.Add_Class16("alphaMap", class16_1);
		class16_3.Add_Class16("detailID", class16_2);
		class16_4.Add_ArrayData(class16_3);
	}

	private static void smethod_6(string string_2, TextureFormat textureFormat_0, int int_5, int int_6, Color[] color_1)
	{
		for (int i = 0; i < 4; i++)
		{
			if (color_0 == null)
			{
				class16_0 = new ExportDataItem(ExportDataItem.Enum0.Array);
				string_1 = string_2;
				color_0 = new Color[color_1.Length];
				for (int j = 0; j < color_0.Length; j++)
				{
					color_0[j] = new Color(0f, 0f, 0f, 0f);
				}
			}
			bool flag = true;
			for (int k = 0; k < color_1.Length; k++)
			{
				float num = color_1[k][i];
				color_0[k][int_4] = num;
				if (num != 0f)
				{
					flag = false;
				}
			}
			if (!flag)
			{
				class16_0.Add_Number_Int(int_2);
				int_4++;
				if (int_4 > 3)
				{
					smethod_4(string_1, textureFormat_0, int_5, int_6);
				}
			}
			int_2++;
		}
	}

	private static bool smethod_7(Color[] color_1)
	{
		int num = 0;
		while (true)
		{
			if (num < color_1.Length)
			{
				if (color_1[num] != Color.clear)
				{
					break;
				}
				num++;
				continue;
			}
			return true;
		}
		return false;
	}

	private static int smethod_8(Color[] color_1, List<KeyValuePair<string, Color[]>> list_1)
	{
		int num = 0;
		while (true)
		{
			if (num < list_1.Count)
			{
				bool flag = true;
				for (int i = 0; i < color_1.Length; i++)
				{
					if (color_1[i] != list_1[num].Value[i])
					{
						flag = false;
						break;
					}
				}
				if (flag)
				{
					break;
				}
				num++;
				continue;
			}
			return -1;
		}
		return num;
	}

	private static void smethod_9(float[,] float_0)
	{
		byte[] array = new byte[terrain_0.terrainData.heightmapWidth * terrain_0.terrainData.heightmapHeight * 2];
		float num = 65536f;
		int num2 = 0;
		for (int i = 0; i < terrain_0.terrainData.heightmapHeight; i++)
		{
			for (int j = 0; j < terrain_0.terrainData.heightmapWidth; j++)
			{
				byte[] bytes = BitConverter.GetBytes((ushort)Mathf.Clamp(Mathf.RoundToInt(float_0[i, j] * num), 0, 65535));
				array[num2 * 2] = bytes[0];
				array[num2 * 2 + 1] = bytes[1];
				num2++;
			}
		}
		FileStream fileStream = new FileStream(string_0 + "/" + terrain_0.name.ToLower() + "_heightmap.thdata", FileMode.Create);
		fileStream.Write(array, 0, array.Length);
		fileStream.Close();
	}

	private static void smethod_10()
	{
		int num = terrain_0.terrainData.alphamapTextures.Length;
		for (int i = 0; i < num; i++)
		{
			Texture2D texture2D = terrain_0.terrainData.alphamapTextures[i];
			FileStream fileStream = File.Open(string_0 + "/" + texture2D.name.ToLower() + ".png", FileMode.Create);
			new BinaryWriter(fileStream).Write(texture2D.EncodeToPNG());
			fileStream.Close();
		}
	}

	private static float[,] smethod_11()
	{
		float[,] heights = terrain_0.terrainData.GetHeights(0, 0, terrain_0.terrainData.heightmapWidth, terrain_0.terrainData.heightmapHeight);
		float[,] array = new float[terrain_0.terrainData.heightmapWidth, terrain_0.terrainData.heightmapHeight];
		for (int num = terrain_0.terrainData.heightmapHeight - 1; num >= 0; num--)
		{
			for (int i = 0; i < terrain_0.terrainData.heightmapWidth; i++)
			{
				array[terrain_0.terrainData.heightmapHeight - 1 - num, i] = heights[num, i];
			}
		}
		return array;
	}

	private static void smethod_12()
	{
		int num = terrain_0.terrainData.terrainLayers.Length;
		for (int i = 0; i < num; i++)
		{
			TerrainLayer terrainLayer = terrain_0.terrainData.terrainLayers[i];
			Texture2D diffuseTexture = terrainLayer.diffuseTexture;
			string assetPath = AssetDatabase.GetAssetPath(diffuseTexture.GetInstanceID());
			TextureImporter obj = AssetImporter.GetAtPath(assetPath) as TextureImporter;
			obj.isReadable = true;
			obj.textureCompression = TextureImporterCompression.Uncompressed;
			AssetDatabase.ImportAsset(assetPath);
			FileStream fileStream = File.Open(string_0 + "/" + diffuseTexture.name.ToLower() + ".jpg", FileMode.Create);
			new BinaryWriter(fileStream).Write(diffuseTexture.EncodeToJPG());
			fileStream.Close();
			if (terrainLayer.normalMapTexture != null)
			{
				diffuseTexture = terrainLayer.normalMapTexture;
				string assetPath2 = AssetDatabase.GetAssetPath(diffuseTexture.GetInstanceID());
				TextureImporter obj2 = AssetImporter.GetAtPath(assetPath2) as TextureImporter;
				obj2.isReadable = true;
				obj2.textureCompression = TextureImporterCompression.Uncompressed;
				AssetDatabase.ImportAsset(assetPath2);
				FileStream fileStream2 = File.Open(string_0 + "/" + diffuseTexture.name.ToLower() + ".jpg", FileMode.Create);
				new BinaryWriter(fileStream2).Write(diffuseTexture.EncodeToJPG());
				fileStream2.Close();
			}
		}
	}

	private static Vector3[] smethod_13(float[,] float_0, int int_5, float float_1)
	{
		Vector3[] array = new Vector3[(terrain_0.terrainData.heightmapWidth - 1) * (terrain_0.terrainData.heightmapHeight - 1) * 2];
		Vector3 vector = default(Vector3);
		Vector3 vector2 = default(Vector3);
		Vector3 vector3 = default(Vector3);
		Vector3 vector4 = default(Vector3);
		float[] array2 = new float[terrain_0.terrainData.heightmapWidth * terrain_0.terrainData.heightmapHeight];
		float num = 65536f;
		int num2 = 0;
		for (int i = 0; i < terrain_0.terrainData.heightmapHeight; i++)
		{
			for (int j = 0; j < terrain_0.terrainData.heightmapWidth; j++)
			{
				ushort num3 = (ushort)Mathf.Clamp(Mathf.RoundToInt(float_0[i, j] * num), 0, 65535);
				array2[num2] = (float)(int)num3 * 1f / 32766f * terrain_0.terrainData.size.y * 0.5f;
				num2++;
			}
		}
		int heightmapWidth = terrain_0.terrainData.heightmapWidth;
		int heightmapHeight = terrain_0.terrainData.heightmapHeight;
		int num4 = 0;
		Matrix4x4 rhs = default(Matrix4x4);
		rhs.SetTRS(Vector3.zero, Quaternion.AngleAxis(180f, Vector3.up), Vector3.one);
		Matrix4x4 lhs = default(Matrix4x4);
		lhs.SetTRS(new Vector3(0f, 0f, terrain_0.terrainData.size.y), Quaternion.identity, Vector3.one);
		Matrix4x4 matrix4x = lhs * rhs;
		for (int k = 0; k < heightmapHeight - 1; k++)
		{
			for (int l = 0; l < heightmapWidth - 1; l++)
			{
				vector.x = (float)l * float_1;
				vector.y = array2[(k + 1) * heightmapWidth + l];
				vector.z = (float)(k + 1) * float_1;
				if (bool_1)
				{
					vector = matrix4x.MultiplyPoint(vector);
				}
				vector2.x = (float)(l + 1) * float_1;
				vector2.y = array2[(k + 1) * heightmapWidth + l + 1];
				vector2.z = (float)(k + 1) * float_1;
				if (bool_1)
				{
					vector2 = matrix4x.MultiplyPoint(vector2);
				}
				vector3.x = (float)l * float_1;
				vector3.y = array2[k * heightmapWidth + l];
				vector3.z = (float)k * float_1;
				if (bool_1)
				{
					vector3 = matrix4x.MultiplyPoint(vector3);
				}
				vector4.x = (float)(l + 1) * float_1;
				vector4.y = array2[k * heightmapWidth + l + 1];
				vector4.z = (float)k * float_1;
				if (bool_1)
				{
					vector4 = matrix4x.MultiplyPoint(vector4);
				}
				Vector3 vector5 = Vector3.Cross(vector - vector3, vector4 - vector3);
				vector5.Normalize();
				array[num4] = vector5;
				num4++;
				Vector3 vector6 = Vector3.Cross(vector4 - vector2, vector - vector2);
				vector6.Normalize();
				array[num4] = vector6;
				num4++;
			}
		}
		return array;
	}

	private static Vector3 smethod_14(int int_5, int int_6, Vector3[] vector3_0, int int_7, int int_8)
	{
		int num = int_6 - 1;
		int num2 = int_5 - 1;
		int[] array = new int[6]
		{
			(num * int_7 + num2) * 2 + 1,
			(int_6 * int_7 + num2) * 2,
			(int_6 * int_7 + num2) * 2 + 1,
			(int_6 * int_7 + int_5) * 2,
			(num * int_7 + int_5) * 2 + 1,
			(num * int_7 + int_5) * 2
		};
		if (num < 0)
		{
			array[5] = -1;
			array[4] = -1;
			array[0] = -1;
		}
		if (int_6 >= int_8)
		{
			array[1] = -1;
			array[2] = -1;
			array[3] = -1;
		}
		if (num2 < 0)
		{
			array[2] = -1;
			array[1] = -1;
			array[0] = -1;
		}
		if (int_5 >= int_7)
		{
			array[3] = -1;
			array[4] = -1;
			array[5] = -1;
		}
		float num3 = 0f;
		float num4 = 0f;
		float num5 = 0f;
		float num6 = 0f;
		for (int i = 0; i < array.Length; i++)
		{
			int num7 = array[i];
			if (array[i] >= 0)
			{
				num3 += vector3_0[num7].x;
				num4 += vector3_0[num7].y;
				num5 += vector3_0[num7].z;
				num6 += 1f;
			}
		}
		Vector3 result = new Vector3(num3 / num6, num4 / num6, num5 / num6);
		result.Normalize();
		return result;
	}

	private static Texture2D smethod_15(Vector3[] vector3_0)
	{
		Color[] array = new Color[terrain_0.terrainData.heightmapWidth * terrain_0.terrainData.heightmapHeight];
		int num = 0;
		for (int num2 = terrain_0.terrainData.heightmapHeight - 1; num2 >= 0; num2--)
		{
			for (int i = 0; i < terrain_0.terrainData.heightmapWidth; i++)
			{
				Vector3 vector = smethod_14(i, num2, vector3_0, terrain_0.terrainData.heightmapWidth - 1, terrain_0.terrainData.heightmapHeight - 1);
				vector.x = (vector.x + 1f) * 0.5f;
				vector.y = (vector.y + 1f) * 0.5f;
				vector.z = (vector.z + 1f) * 0.5f;
				array[num] = new Color(vector.x, vector.y, vector.z, 1f);
				num++;
			}
		}
		Texture2D texture2D = new Texture2D(terrain_0.terrainData.heightmapWidth, terrain_0.terrainData.heightmapHeight, TextureFormat.RGBA32, mipChain: false);
		texture2D.SetPixels(array);
		texture2D.Apply();
		texture2D.name = terrain_0.name.ToLower() + "_normalMap";
		File.WriteAllBytes(string_0 + "/" + texture2D.name + ".png", texture2D.EncodeToPNG());
		return texture2D;
	}

	private static void smethod_16(ExportDataItem class16_5)
	{
		string value = class16_5.Serialize();
		StreamWriter streamWriter = new StreamWriter(new FileStream(string_0 + "/" + terrain_0.name.ToLower() + ".lt", FileMode.Create, FileAccess.Write));
		streamWriter.Write(value);
		streamWriter.Close();
	}

	public ExportTerrainHelper()
	{
		
		
	}

	static ExportTerrainHelper()
	{
		
		int_0 = 64;
		int_1 = 32;
		int_2 = 0;
		int_3 = 0;
		int_4 = 0;
		color_0 = null;
		class16_0 = null;
		list_0 = new List<KeyValuePair<string, Color[]>>();
		class16_1 = null;
		class16_2 = null;
		class16_3 = null;
		class16_4 = null;
		string_1 = "";
		bool_0 = false;
		bool_1 = true;
	}
}
