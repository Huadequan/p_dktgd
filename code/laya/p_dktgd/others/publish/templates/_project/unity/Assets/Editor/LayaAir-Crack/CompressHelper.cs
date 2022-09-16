using System.IO;


internal class CompressHelper
{
	private static MemoryStream memoryStream_0;

	private static BinaryReader binaryReader_0;

	private static BinaryWriter binaryWriter_0;

	private static uint[] uint_0;

	private static uint[] uint_1;

	private static uint[] uint_2;

	private static uint[] uint_3;

	private static uint[] uint_4;

	static CompressHelper()
	{
		
		memoryStream_0 = new MemoryStream(4);
		binaryReader_0 = new BinaryReader(memoryStream_0);
		binaryWriter_0 = new BinaryWriter(memoryStream_0);
		uint_0 = new uint[512];
		uint_1 = new uint[512];
		uint_2 = new uint[2048];
		uint_3 = new uint[64];
		uint_4 = new uint[64];
		for (int i = 0; i < 256; i++)
		{
			int num = i - 127;
			if (num < -27)
			{
				uint_0[i | 0] = 0u;
				uint_0[i | 0x100] = 32768u;
				uint_1[i | 0] = 24u;
				uint_1[i | 0x100] = 24u;
			}
			else if (num < -14)
			{
				uint_0[i | 0] = (uint)(1024 >> -num - 14);
				uint_0[i | 0x100] = (uint)(1024 >> -num - 14) | 0x8000u;
				uint_1[i | 0] = (uint)(-num - 1);
				uint_1[i | 0x100] = (uint)(-num - 1);
			}
			else if (num <= 15)
			{
				uint_0[i | 0] = (uint)(num + 15 << 10);
				uint_0[i | 0x100] = (uint)(num + 15 << 10) | 0x8000u;
				uint_1[i | 0] = 13u;
				uint_1[i | 0x100] = 13u;
			}
			else if (num < 128)
			{
				uint_0[i | 0] = 31744u;
				uint_0[i | 0x100] = 64512u;
				uint_1[i | 0] = 24u;
				uint_1[i | 0x100] = 24u;
			}
			else
			{
				uint_0[i | 0] = 31744u;
				uint_0[i | 0x100] = 64512u;
				uint_1[i | 0] = 13u;
				uint_1[i | 0x100] = 13u;
			}
		}
		uint_2[0] = 0u;
		for (int j = 1; j < 1024; j++)
		{
			int num2 = j << 13;
			int num3 = 0;
			while ((num2 & 0x800000) == 0)
			{
				num3 -= 8388608;
				num2 <<= 1;
			}
			num2 &= -8388609;
			num3 += 947912704;
			uint_2[j] = (uint)(num2 | num3);
		}
		for (int k = 1024; k < 2048; k++)
		{
			uint_2[k] = (uint)(939524096 + (k - 1024 << 13));
		}
		uint_3[0] = 0u;
		for (int l = 1; l < 31; l++)
		{
			uint_3[l] = (uint)(l << 23);
		}
		uint_3[31] = 1199570944u;
		uint_3[32] = 2147483648u;
		for (int m = 33; m < 63; m++)
		{
			uint_3[m] = (uint)(2147483648L + (m - 32 << 23));
		}
		uint_3[63] = 3347054592u;
		uint_4[0] = 0u;
		for (int n = 1; n < 64; n++)
		{
			if (n == 32)
			{
				uint_4[n] = 0u;
			}
			else
			{
				uint_4[n] = 1024u;
			}
		}
	}

	public static ushort smethod_0(float float_0)
	{
		memoryStream_0.Position = 0L;
		binaryWriter_0.Write(float_0);
		memoryStream_0.Position = 0L;
		uint num = binaryReader_0.ReadUInt32();
		uint num2 = (num >> 23) & 0x1FFu;
		return (ushort)(uint_0[num2] + ((num & 0x7FFFFF) >> (int)uint_1[num2]));
	}

	private static float smethod_1(uint uint_5)
	{
		uint num = uint_5 >> 10;
		memoryStream_0.Position = 0L;
		binaryWriter_0.Write(uint_2[uint_4[num] + (uint_5 & 0x3FF)] + uint_3[num]);
		memoryStream_0.Position = 0L;
		return binaryReader_0.ReadSingle();
	}

	public CompressHelper()
	{
		
		
	}
}
