using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Reflection;
using System.Text;


[DefaultMember("Item")]
internal class ExportDataItem
{
    /**
     * // Token: 0x04000085 RID: 133
		const_0,
		// Token: 0x04000086 RID: 134
		const_1,
		// Token: 0x04000087 RID: 135
		const_2,
		// Token: 0x04000088 RID: 136
		const_3,
		// Token: 0x04000089 RID: 137
		const_4,
		// Token: 0x0400008A RID: 138
		const_5,
		// Token: 0x0400008B RID: 139
		const_6
     **/
    public enum Enum0
	{
		Null,// const_0,
        String, // const_1,
        Number, // const_2,
        Object, // const_3,
        Array, // const_4,
        Boolean, // const_5,
        RawString // const_6,
    }

	public delegate void Delegate0(ExportDataItem class16_0);

	private delegate void Delegate1(string string_0);

	private delegate void Delegate2(ExportDataItem class16_0);

	private static readonly char[] char_0;

	private Enum0 enum0_0;

	private List<ExportDataItem> list_0;

	public List<string> list_1;

	public string string_0;

	public float float_0;

	private bool bool_0;

	public long long_0;

	public bool bool_1;

	private static readonly Stopwatch stopwatch_0;

	private bool method_0()
	{
		if (enum0_0 != Enum0.Array)
		{
			return enum0_0 == Enum0.Object;
		}
		return true;
	}

	public int method_1()
	{
		if (list_0 == null)
		{
			return -1;
		}
		return list_0.Count;
	}

	public float method_2()
	{
		return float_0;
	}

	private static ExportDataItem smethod_0()
	{
		return smethod_5(Enum0.Null);
	}

	private static ExportDataItem smethod_1()
	{
		return smethod_5(Enum0.Object);
	}

	private static ExportDataItem smethod_2()
	{
		return smethod_5(Enum0.Array);
	}

	public ExportDataItem(Enum0 enum0_1)
	{
		
		
		enum0_0 = enum0_1;
		switch (enum0_1)
		{
		case Enum0.Array:
			list_0 = new List<ExportDataItem>();
			break;
		case Enum0.Object:
			list_0 = new List<ExportDataItem>();
			list_1 = new List<string>();
			break;
		}
	}

	private ExportDataItem(bool bool_2)
	{
		
		
		enum0_0 = Enum0.Boolean;
		bool_1 = bool_2;
	}

	private ExportDataItem(float float_1)
	{
		
		
		enum0_0 = Enum0.Number;
		float_0 = float_1;
	}

	private ExportDataItem(int int_0)
	{
		
		
		enum0_0 = Enum0.Number;
		long_0 = int_0;
		bool_0 = true;
		float_0 = int_0;
	}

	private ExportDataItem(long long_1)
	{
		
		
		enum0_0 = Enum0.Number;
		long_0 = long_1;
		bool_0 = true;
		float_0 = long_1;
	}

	private ExportDataItem(Dictionary<string, string> dictionary_0)
	{
		
		
		enum0_0 = Enum0.Object;
		list_1 = new List<string>();
		list_0 = new List<ExportDataItem>();
		foreach (KeyValuePair<string, string> item in dictionary_0)
		{
			list_1.Add(item.Key);
			list_0.Add(CreateClass16_string(item.Value));
		}
	}

	private ExportDataItem(Dictionary<string, ExportDataItem> dictionary_0)
	{
		
		
		enum0_0 = Enum0.Object;
		list_1 = new List<string>();
		list_0 = new List<ExportDataItem>();
		foreach (KeyValuePair<string, ExportDataItem> item in dictionary_0)
		{
			list_1.Add(item.Key);
			list_0.Add(item.Value);
		}
	}

	private ExportDataItem(Delegate0 delegate0_0)
	{
		
		
		delegate0_0(this);
	}

	private ExportDataItem(ExportDataItem[] class16_0)
	{
		
		
		enum0_0 = Enum0.Array;
		list_0 = new List<ExportDataItem>(class16_0);
	}

	private static ExportDataItem smethod_3(string string_1)
	{
		return CreateClass16_string(string_1);
	}

	private void method_3(ExportDataItem class16_0)
	{
		list_0.AddRange(class16_0.list_0);
		list_1.AddRange(class16_0.list_1);
		string_0 = class16_0.string_0;
		float_0 = class16_0.float_0;
		bool_0 = class16_0.bool_0;
		long_0 = class16_0.long_0;
		bool_1 = class16_0.bool_1;
		enum0_0 = class16_0.enum0_0;
	}

	public static ExportDataItem CreateClass16()
	{
		return new ExportDataItem();
	}

	public static ExportDataItem smethod_5(Enum0 enum0_1)
	{
		ExportDataItem @class = CreateClass16();
		@class.enum0_0 = enum0_1;
		switch (enum0_1)
		{
		case Enum0.Array:
			@class.list_0 = new List<ExportDataItem>();
			break;
		case Enum0.Object:
			@class.list_0 = new List<ExportDataItem>();
			@class.list_1 = new List<string>();
			break;
		}
		return @class;
	}

	public static ExportDataItem smethod_6(bool bool_2)
	{
		ExportDataItem @class = CreateClass16();
		@class.enum0_0 = Enum0.Boolean;
		@class.bool_1 = bool_2;
		return @class;
	}

	public static ExportDataItem smethod_7(float float_1)
	{
		ExportDataItem @class = CreateClass16();
		@class.enum0_0 = Enum0.Number;
		@class.float_0 = float_1;
		return @class;
	}

	public static ExportDataItem smethod_8(int int_0)
	{
		ExportDataItem @class = CreateClass16();
		@class.enum0_0 = Enum0.Number;
		@class.float_0 = int_0;
		@class.bool_0 = true;
		@class.long_0 = int_0;
		return @class;
	}

	public static ExportDataItem smethod_9(long long_1)
	{
		ExportDataItem @class = CreateClass16();
		@class.enum0_0 = Enum0.Number;
		@class.float_0 = long_1;
		@class.bool_0 = true;
		@class.long_0 = long_1;
		return @class;
	}

	public static ExportDataItem CreateClass16_string(string string_1)
	{
		ExportDataItem @class = CreateClass16();
		@class.enum0_0 = Enum0.String;
		@class.string_0 = string_1;
		return @class;
	}

	public static ExportDataItem smethod_11(string string_1)
	{
		ExportDataItem @class = CreateClass16();
		@class.enum0_0 = Enum0.RawString;
		@class.string_0 = string_1;
		return @class;
	}

	public static ExportDataItem smethod_12(string string_1, int int_0 = -2, bool bool_2 = false, bool bool_3 = false)
	{
		ExportDataItem @class = CreateClass16();
		@class.method_4(string_1, int_0, bool_2, bool_3);
		return @class;
	}

	private static ExportDataItem smethod_13(Delegate0 delegate0_0)
	{
		ExportDataItem @class = CreateClass16();
		delegate0_0(@class);
		return @class;
	}

	private static ExportDataItem smethod_14(Dictionary<string, string> dictionary_0)
	{
		ExportDataItem @class = CreateClass16();
		@class.enum0_0 = Enum0.Object;
		@class.list_1 = new List<string>();
		@class.list_0 = new List<ExportDataItem>();
		foreach (KeyValuePair<string, string> item in dictionary_0)
		{
			@class.list_1.Add(item.Key);
			@class.list_0.Add(CreateClass16_string(item.Value));
		}
		return @class;
	}

	private ExportDataItem()
	{
		
		
	}

	public ExportDataItem(string string_1, int int_0 = -2, bool bool_2 = false, bool bool_3 = false)
	{
		
		
		method_4(string_1, int_0, bool_2, bool_3);
	}

	private void method_4(string string_1, int int_0 = -2, bool bool_2 = false, bool bool_3 = false)
	{
		if (!string.IsNullOrEmpty(string_1))
		{
			string_1 = string_1.Trim(char_0);
			if (bool_3 && string_1[0] != '[' && string_1[0] != '{')
			{
				enum0_0 = Enum0.Null;
			}
			else if (string_1.Length > 0)
			{
				if (string.Compare(string_1, "true", ignoreCase: true) == 0)
				{
					enum0_0 = Enum0.Boolean;
					bool_1 = true;
					return;
				}
				if (string.Compare(string_1, "false", ignoreCase: true) == 0)
				{
					enum0_0 = Enum0.Boolean;
					bool_1 = false;
					return;
				}
				if (string.Compare(string_1, "null", ignoreCase: true) == 0)
				{
					enum0_0 = Enum0.Null;
					return;
				}
				switch (string_1)
				{
				case "\"INFINITY\"":
					enum0_0 = Enum0.Number;
					float_0 = float.PositiveInfinity;
					return;
				case "\"NEGINFINITY\"":
					enum0_0 = Enum0.Number;
					float_0 = float.NegativeInfinity;
					return;
				case "\"NaN\"":
					enum0_0 = Enum0.Number;
					float_0 = float.NaN;
					return;
				}
				if (string_1[0] == '"')
				{
					enum0_0 = Enum0.String;
					string_0 = string_1.Substring(1, string_1.Length - 2);
					return;
				}
				int num = 1;
				int num2 = 0;
				switch (string_1[0])
				{
				case '{':
					enum0_0 = Enum0.Object;
					list_1 = new List<string>();
					list_0 = new List<ExportDataItem>();
					break;
				default:
					try
					{
						float_0 = Convert.ToSingle(string_1);
						if (!string_1.Contains("."))
						{
							long_0 = Convert.ToInt64(string_1);
							bool_0 = true;
						}
						enum0_0 = Enum0.Number;
					}
					catch (FormatException)
					{
						enum0_0 = Enum0.Null;
					}
					return;
				case '[':
					enum0_0 = Enum0.Array;
					list_0 = new List<ExportDataItem>();
					break;
				}
				string item = "";
				bool flag = false;
				bool flag2 = false;
				int num3 = 0;
				while (++num2 < string_1.Length)
				{
					if (Array.IndexOf(char_0, string_1[num2]) > -1)
					{
						continue;
					}
					if (string_1[num2] == '\\')
					{
						num2++;
						continue;
					}
					if (string_1[num2] == '"')
					{
						if (flag)
						{
							if (!flag2 && num3 == 0 && enum0_0 == Enum0.Object)
							{
								item = string_1.Substring(num + 1, num2 - num - 1);
							}
							flag = false;
						}
						else
						{
							if (num3 == 0 && enum0_0 == Enum0.Object)
							{
								num = num2;
							}
							flag = true;
						}
					}
					if (flag)
					{
						continue;
					}
					if (enum0_0 == Enum0.Object && num3 == 0 && string_1[num2] == ':')
					{
						num = num2 + 1;
						flag2 = true;
					}
					if (string_1[num2] != '[' && string_1[num2] != '{')
					{
						if (string_1[num2] == ']' || string_1[num2] == '}')
						{
							num3--;
						}
					}
					else
					{
						num3++;
					}
					if ((string_1[num2] != ',' || num3 != 0) && num3 >= 0)
					{
						continue;
					}
					flag2 = false;
					string text = string_1.Substring(num, num2 - num).Trim(char_0);
					if (text.Length > 0)
					{
						if (enum0_0 == Enum0.Object)
						{
							list_1.Add(item);
						}
						if (int_0 != -1)
						{
							list_0.Add(smethod_12(text, (int_0 < -1) ? (-2) : (int_0 - 1)));
						}
						else if (bool_2)
						{
							list_0.Add(smethod_11(text));
						}
					}
					num = num2 + 1;
				}
			}
			else
			{
				enum0_0 = Enum0.Null;
			}
		}
		else
		{
			enum0_0 = Enum0.Null;
		}
	}

	private bool method_5()
	{
		return enum0_0 == Enum0.Number;
	}

	private bool method_6()
	{
		return enum0_0 == Enum0.Null;
	}

	private bool method_7()
	{
		return enum0_0 == Enum0.String;
	}

	private bool method_8()
	{
		return enum0_0 == Enum0.Boolean;
	}

	private bool method_9()
	{
		return enum0_0 == Enum0.Array;
	}

	private bool method_10()
	{
		if (enum0_0 != Enum0.Object)
		{
			return enum0_0 == Enum0.RawString;
		}
		return true;
	}

	public void Add_Number_Boolean(bool bool_2)
	{
		Add_ArrayData(smethod_6(bool_2));
	}

	public void Add_Number_Float(float float_1)
	{
		Add_ArrayData(smethod_7(float_1));
	}

	public void Add_Number_Int(int int_0)
	{
		Add_ArrayData(smethod_8(int_0));
	}

	public void Add_String(string string_1)
	{
		Add_ArrayData(CreateClass16_string(string_1));
	}

	private void method_15(Delegate0 delegate0_0)
	{
		Add_ArrayData(smethod_13(delegate0_0));
	}

	public void Add_ArrayData(ExportDataItem class16_0)
	{
		if (!CheckIsNull(class16_0))
		{
			return;
		}
		if (enum0_0 != Enum0.Array)
		{
			enum0_0 = Enum0.Array;
			if (list_0 == null)
			{
				list_0 = new List<ExportDataItem>();
			}
		}
		list_0.Add(class16_0);
	}

	public void AddBoolean(string string_1, bool bool_2)
	{
		Add_Class16(string_1, smethod_6(bool_2));
	}

	public void method_18(string string_1, float float_1)
	{
		Add_Class16(string_1, smethod_7(float_1));
	}

	public void AddNumber_Int(string string_1, int int_0)
	{
		Add_Class16(string_1, smethod_8(int_0));
	}

	private void method_20(string string_1, long long_1)
	{
		Add_Class16(string_1, smethod_9(long_1));
	}

	private void method_21(string string_1, Delegate0 delegate0_0)
	{
		Add_Class16(string_1, smethod_13(delegate0_0));
	}

	public void AddString(string string_1, string string_2)
	{
		Add_Class16(string_1, CreateClass16_string(string_2));
	}

	public void Add_Class16(string string_1, ExportDataItem class16_0)
	{
		if (!CheckIsNull(class16_0))
		{
			return;
		}
		if (enum0_0 != Enum0.Object)
		{
			if (list_1 == null)
			{
				list_1 = new List<string>();
			}
			if (enum0_0 == Enum0.Array)
			{
				for (int i = 0; i < list_0.Count; i++)
				{
					list_1.Add(i.ToString() ?? "");
				}
			}
			else if (list_0 == null)
			{
				list_0 = new List<ExportDataItem>();
			}
			enum0_0 = Enum0.Object;
		}
		list_1.Add(string_1);
		list_0.Add(class16_0);
	}

	public void SetString(string string_1, string string_2)
	{
		_SetData_Class16(string_1, CreateClass16_string(string_2));
	}

	private void method_25(string string_1, bool bool_2)
	{
		_SetData_Class16(string_1, smethod_6(bool_2));
	}

	private void method_26(string string_1, float float_1)
	{
		_SetData_Class16(string_1, smethod_7(float_1));
	}

	private void method_27(string string_1, int int_0)
	{
		_SetData_Class16(string_1, smethod_8(int_0));
	}

	private void _SetData_Class16(string string_1, ExportDataItem class16_0)
	{
		if (method_45(string_1))
		{
			list_0.Remove(method_57(string_1));
			list_1.Remove(string_1);
		}
		Add_Class16(string_1, class16_0);
	}

	private void method_29(string string_1)
	{
		if (list_1.IndexOf(string_1) > -1)
		{
			list_0.RemoveAt(list_1.IndexOf(string_1));
			list_1.Remove(string_1);
		}
	}

	private bool method_30(out bool bool_2, string string_1, bool bool_3)
	{
		bool_2 = bool_3;
		return method_31(ref bool_2, string_1);
	}

	private bool method_31(ref bool bool_2, string string_1, Delegate1 delegate1_0 = null)
	{
		if (enum0_0 == Enum0.Object)
		{
			int num = list_1.IndexOf(string_1);
			if (num >= 0)
			{
				bool_2 = list_0[num].bool_1;
				return true;
			}
		}
		delegate1_0?.Invoke(string_1);
		return false;
	}

	private bool method_32(out float float_1, string string_1, float float_2)
	{
		float_1 = float_2;
		return method_33(ref float_1, string_1);
	}

	private bool method_33(ref float float_1, string string_1, Delegate1 delegate1_0 = null)
	{
		if (enum0_0 == Enum0.Object)
		{
			int num = list_1.IndexOf(string_1);
			if (num >= 0)
			{
				float_1 = list_0[num].float_0;
				return true;
			}
		}
		delegate1_0?.Invoke(string_1);
		return false;
	}

	private bool method_34(out int int_0, string string_1, int int_1)
	{
		int_0 = int_1;
		return method_35(ref int_0, string_1);
	}

	private bool method_35(ref int int_0, string string_1, Delegate1 delegate1_0 = null)
	{
		if (method_10())
		{
			int num = list_1.IndexOf(string_1);
			if (num >= 0)
			{
				int_0 = (int)list_0[num].float_0;
				return true;
			}
		}
		delegate1_0?.Invoke(string_1);
		return false;
	}

	private bool method_36(out long long_1, string string_1, long long_2)
	{
		long_1 = long_2;
		return method_37(ref long_1, string_1);
	}

	private bool method_37(ref long long_1, string string_1, Delegate1 delegate1_0 = null)
	{
		if (method_10())
		{
			int num = list_1.IndexOf(string_1);
			if (num >= 0)
			{
				long_1 = (long)list_0[num].float_0;
				return true;
			}
		}
		delegate1_0?.Invoke(string_1);
		return false;
	}

	private bool method_38(out uint uint_0, string string_1, uint uint_1)
	{
		uint_0 = uint_1;
		return method_39(ref uint_0, string_1);
	}

	private bool method_39(ref uint uint_0, string string_1, Delegate1 delegate1_0 = null)
	{
		if (method_10())
		{
			int num = list_1.IndexOf(string_1);
			if (num >= 0)
			{
				uint_0 = (uint)list_0[num].float_0;
				return true;
			}
		}
		delegate1_0?.Invoke(string_1);
		return false;
	}

	private bool method_40(out string string_1, string string_2, string string_3)
	{
		string_1 = string_3;
		return method_41(ref string_1, string_2);
	}

	private bool method_41(ref string string_1, string string_2, Delegate1 delegate1_0 = null)
	{
		if (method_10())
		{
			int num = list_1.IndexOf(string_2);
			if (num >= 0)
			{
				string_1 = list_0[num].string_0;
				return true;
			}
		}
		delegate1_0?.Invoke(string_2);
		return false;
	}

	private void method_42(string string_1, Delegate2 delegate2_0, Delegate1 delegate1_0 = null)
	{
		if (delegate2_0 != null && method_10())
		{
			int num = list_1.IndexOf(string_1);
			if (num >= 0)
			{
				delegate2_0(list_0[num]);
				return;
			}
		}
		delegate1_0?.Invoke(string_1);
	}

	public ExportDataItem method_43(string string_1)
	{
		if (method_10())
		{
			for (int i = 0; i < list_1.Count; i++)
			{
				if (list_1[i] == string_1)
				{
					return list_0[i];
				}
			}
		}
		return null;
	}

	private bool method_44(string[] string_1)
	{
		if (!method_10())
		{
			return false;
		}
		int num = 0;
		while (true)
		{
			if (num < string_1.Length)
			{
				if (!list_1.Contains(string_1[num]))
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

	private bool method_45(string string_1)
	{
		if (!method_10())
		{
			return false;
		}
		int num = 0;
		while (true)
		{
			if (num < list_1.Count)
			{
				if (list_1[num] == string_1)
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

	public void method_46()
	{
		enum0_0 = Enum0.Null;
		if (list_0 != null)
		{
			list_0.Clear();
		}
		if (list_1 != null)
		{
			list_1.Clear();
		}
		string_0 = "";
		float_0 = 0f;
		bool_1 = false;
	}

	private ExportDataItem method_47()
	{
		return smethod_12(Serialize());
	}

	private void method_48(ExportDataItem class16_0)
	{
		smethod_15(this, class16_0);
	}

	private static void smethod_15(ExportDataItem class16_0, ExportDataItem class16_1)
	{
		if (class16_0.enum0_0 == Enum0.Null)
		{
			class16_0.method_3(class16_1);
		}
		else if (class16_0.enum0_0 == Enum0.Object && class16_1.enum0_0 == Enum0.Object)
		{
			for (int i = 0; i < class16_1.list_0.Count; i++)
			{
				string string_ = class16_1.list_1[i];
				if (class16_1.method_55(i).method_0())
				{
					if (class16_0.method_45(string_))
					{
						smethod_15(class16_0.method_57(string_), class16_1.method_55(i));
					}
					else
					{
						class16_0.Add_Class16(string_, class16_1.method_55(i));
					}
				}
				else if (class16_0.method_45(string_))
				{
					class16_0._SetData_Class16(string_, class16_1.method_55(i));
				}
				else
				{
					class16_0.Add_Class16(string_, class16_1.method_55(i));
				}
			}
		}
		else
		{
			if (class16_0.enum0_0 != Enum0.Array || class16_1.enum0_0 != Enum0.Array || class16_1.method_1() > class16_0.method_1())
			{
				return;
			}
			for (int j = 0; j < class16_1.list_0.Count; j++)
			{
				if (class16_0.method_55(j).enum0_0 == class16_1.method_55(j).enum0_0)
				{
					if (class16_0.method_55(j).method_0())
					{
						smethod_15(class16_0.method_55(j), class16_1.method_55(j));
					}
					else
					{
						class16_0.method_56(j, class16_1.method_55(j));
					}
				}
			}
		}
	}

	private void BuildSerializeString()
	{
		if (enum0_0 != Enum0.RawString)
		{
			string_0 = Serialize();
			enum0_0 = Enum0.RawString;
		}
	}

	public string Serialize(bool bool_2 = true)
	{
		StringBuilder stringBuilder = new StringBuilder();
		BuildString(0, stringBuilder, bool_2);
		return stringBuilder.ToString();
	}

	private void BuildString(int deepCount, StringBuilder stringBuilder_0, bool needFormat = true)
	{
		if (deepCount++ > 100)
		{
			return;
		}
		switch (enum0_0)
		{
		case Enum0.Null:
			stringBuilder_0.Append("null");
			break;
		case Enum0.String:
			stringBuilder_0.AppendFormat("\"{0}\"", string_0);
			break;
		case Enum0.Number:
			if (bool_0)
			{
				stringBuilder_0.Append(long_0.ToString());
			}
			else if (float.IsInfinity(float_0))
			{
				stringBuilder_0.Append("\"INFINITY\"");
			}
			else if (float.IsNegativeInfinity(float_0))
			{
				stringBuilder_0.Append("\"NEGINFINITY\"");
			}
			else if (float.IsNaN(float_0))
			{
				stringBuilder_0.Append("\"NaN\"");
			}
			else
			{
				stringBuilder_0.Append(float_0.ToString());
			}
			break;
		case Enum0.Object:
			stringBuilder_0.Append("{");
			if (list_0.Count > 0)
			{
				if (needFormat)
				{
					stringBuilder_0.Append("\n");
				}
				for (int i = 0; i < list_0.Count; i++)
				{
					string arg = list_1[i];
					ExportDataItem @class = list_0[i];
					if (!CheckIsNull(@class))
					{
						continue;
					}
					if (needFormat)
					{
						for (int j = 0; j < deepCount; j++)
						{
							stringBuilder_0.Append("\t");
						}
					}
					stringBuilder_0.AppendFormat("\"{0}\":", arg);
					@class.BuildString(deepCount, stringBuilder_0, needFormat);
					stringBuilder_0.Append(",");
					if (needFormat)
					{
						stringBuilder_0.Append("\n");
					}
				}
				if (needFormat)
				{
					stringBuilder_0.Length -= 2;
				}
				else
				{
					stringBuilder_0.Length--;
				}
			}
			if (needFormat && list_0.Count > 0)
			{
				stringBuilder_0.Append("\n");
				for (int k = 0; k < deepCount - 1; k++)
				{
					stringBuilder_0.Append("\t");
				}
			}
			stringBuilder_0.Append("}");
			break;
		case Enum0.Array:
			stringBuilder_0.Append("[");
			if (list_0.Count > 0)
			{
				if (needFormat)
				{
					stringBuilder_0.Append("\n");
				}
				for (int l = 0; l < list_0.Count; l++)
				{
					if (!CheckIsNull(list_0[l]))
					{
						continue;
					}
					if (needFormat)
					{
						for (int m = 0; m < deepCount; m++)
						{
							stringBuilder_0.Append("\t");
						}
					}
					list_0[l].BuildString(deepCount, stringBuilder_0, needFormat);
					stringBuilder_0.Append(",");
					if (needFormat)
					{
						stringBuilder_0.Append("\n");
					}
				}
				if (needFormat)
				{
					stringBuilder_0.Length -= 2;
				}
				else
				{
					stringBuilder_0.Length--;
				}
			}
			if (needFormat && list_0.Count > 0)
			{
				stringBuilder_0.Append("\n");
				for (int n = 0; n < deepCount - 1; n++)
				{
					stringBuilder_0.Append("\t");
				}
			}
			stringBuilder_0.Append("]");
			break;
		case Enum0.Boolean:
			if (bool_1)
			{
				stringBuilder_0.Append("true");
			}
			else
			{
				stringBuilder_0.Append("false");
			}
			break;
		case Enum0.RawString:
			stringBuilder_0.Append(string_0);
			break;
		}
	}

	public ExportDataItem method_55(int int_0)
	{
		if (list_0.Count > int_0)
		{
			return list_0[int_0];
		}
		return null;
	}

	public void method_56(int int_0, ExportDataItem class16_0)
	{
		if (list_0.Count > int_0)
		{
			list_0[int_0] = class16_0;
		}
	}

	public ExportDataItem method_57(string string_1)
	{
		return method_43(string_1);
	}

	public void method_58(string string_1, ExportDataItem class16_0)
	{
		_SetData_Class16(string_1, class16_0);
	}

	public override string ToString()
	{
		return Serialize();
	}

	private string method_59(bool bool_2)
	{
		return Serialize(bool_2);
	}

	private Dictionary<string, string> method_60()
	{
		if (enum0_0 == Enum0.Object)
		{
			Dictionary<string, string> dictionary = new Dictionary<string, string>();
			for (int i = 0; i < list_0.Count; i++)
			{
				ExportDataItem @class = list_0[i];
				switch (@class.enum0_0)
				{
				case Enum0.String:
					dictionary.Add(list_1[i], @class.string_0);
					break;
				case Enum0.Number:
					dictionary.Add(list_1[i], @class.float_0.ToString() ?? "");
					break;
				case Enum0.Boolean:
					dictionary.Add(list_1[i], @class.bool_1.ToString() ?? "");
					break;
				}
			}
			return dictionary;
		}
		return null;
	}

	public static bool CheckIsNull(ExportDataItem class16_0)
	{
		return class16_0 != null;
	}

	static ExportDataItem()
	{
		
		char_0 = new char[6]
		{
			' ',
			'\r',
			'\n',
			'\t',
			'\ufeff',
			'\t'
		};
		stopwatch_0 = new Stopwatch();
	}
}
