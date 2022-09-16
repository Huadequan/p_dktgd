using System;
using System.IO;
using System.Text;


internal class FSWriterHelper
{
	public static FileStream WriteObj(string pathName, ExportDataItem class16_0 = null)
	{
		string directoryName = Path.GetDirectoryName(pathName);
		if (!Directory.Exists(directoryName))
		{
			Directory.CreateDirectory(directoryName);
		}
		FileStream fileStream = new FileStream(pathName, FileMode.Create, FileAccess.Write);
		if (class16_0 == null)
		{
			return fileStream;
		}
		StreamWriter streamWriter = new StreamWriter(fileStream);
		string value = class16_0.Serialize();
		streamWriter.Write(value);
		streamWriter.Close();
		return fileStream;
	}

	public static FileStream CreateFS(string pathName)
	{
		string directoryName = Path.GetDirectoryName(pathName);
		if (!Directory.Exists(directoryName))
		{
			Directory.CreateDirectory(directoryName);
		}
		return new FileStream(pathName, FileMode.Create, FileAccess.Write);
	}

	public static string WrapPath(string string_0, string string_1)
	{
		string text = "";
		string[] array = string_0.Split('/');
		string[] array2 = string_1.Split('/');
		int num = 0;
		for (int i = 0; i < array.Length - 1 && !(array[i] != array2[i]); i++)
		{
			num++;
		}
		for (int j = 0; j < array.Length - num - 1; j++)
		{
			text += "../";
		}
		for (int k = num; k < array2.Length; k++)
		{
			text += array2[k];
			if (k < array2.Length - 1)
			{
				text += "/";
			}
		}
		return text;
	}

	public static void Write_IntArray(FileStream fileStream_0, params int[] int_0)
	{
		for (int i = 0; i < int_0.Length; i++)
		{
			byte[] bytes = BitConverter.GetBytes(int_0[i]);
			fileStream_0.Write(bytes, 0, bytes.Length);
		}
	}

	private static void Write_LongArray(FileStream fileStream_0, params long[] long_0)
	{
		for (int i = 0; i < long_0.Length; i++)
		{
			byte[] bytes = BitConverter.GetBytes(long_0[i]);
			fileStream_0.Write(bytes, 0, bytes.Length);
		}
	}

	public static void Write_BytesArray(FileStream fileStream_0, params byte[] byte_0)
	{
		foreach (byte value in byte_0)
		{
			fileStream_0.WriteByte(value);
		}
	}

	public static void Write_UnshortArray(FileStream fileStream_0, params ushort[] ushort_0)
	{
		for (int i = 0; i < ushort_0.Length; i++)
		{
			byte[] bytes = BitConverter.GetBytes(ushort_0[i]);
			fileStream_0.Write(bytes, 0, bytes.Length);
		}
	}

	public static void Write_ShortArray(FileStream fileStream_0, params short[] short_0)
	{
		for (int i = 0; i < short_0.Length; i++)
		{
			byte[] bytes = BitConverter.GetBytes(short_0[i]);
			fileStream_0.Write(bytes, 0, bytes.Length);
		}
	}

	public static void Write_UnitArray(FileStream fileStream_0, params uint[] uint_0)
	{
		for (int i = 0; i < uint_0.Length; i++)
		{
			byte[] bytes = BitConverter.GetBytes(uint_0[i]);
			fileStream_0.Write(bytes, 0, bytes.Length);
		}
	}

	private static void smethod_9(FileStream fileStream_0, params sbyte[] sbyte_0)
	{
		BinaryWriter binaryWriter = new BinaryWriter(fileStream_0);
		foreach (sbyte value in sbyte_0)
		{
			binaryWriter.Write(value);
		}
	}

	public static void Write_FloatArray(FileStream fileStream_0, params float[] float_0)
	{
		for (int i = 0; i < float_0.Length; i++)
		{
			byte[] bytes = BitConverter.GetBytes(float_0[i]);
			fileStream_0.Write(bytes, 0, bytes.Length);
		}
	}

	private static void Write_DoubleArray(FileStream fileStream_0, params double[] double_0)
	{
		for (int i = 0; i < double_0.Length; i++)
		{
			byte[] bytes = BitConverter.GetBytes(double_0[i]);
			fileStream_0.Write(bytes, 0, bytes.Length);
		}
	}

	public static void Write_BooleanArray(FileStream fileStream_0, params bool[] bool_0)
	{
		for (int i = 0; i < bool_0.Length; i++)
		{
			byte[] bytes = BitConverter.GetBytes(bool_0[i]);
			fileStream_0.Write(bytes, 0, bytes.Length);
		}
	}

	public static void Write_String(FileStream fileStream_0, string string_0)
	{
		byte[] bytes = Encoding.UTF8.GetBytes(string_0);
		short num = (short)bytes.Length;
		Write_ShortArray(fileStream_0, num);
		fileStream_0.Write(bytes, 0, bytes.Length);
	}

	public FSWriterHelper()
	{
		
		
	}
}
