using System;
using System.Diagnostics;
using System.Text;

using UnityEngine;

internal class NodeServerHelper
{
	public static int StartServer(string string_0, string string_1, bool bool_0)
	{
		if (bool_0)
		{
			string_1 += " -s";
		}
		string fileName = "";
		string arguments = "";
		if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.MacOSX)
		{
			fileName = "bash";
			arguments = "-c";
			arguments = arguments + " \"" + string_1 + " \"";
		}
		else if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.Windows)
		{
			fileName = "cmd.exe";
			arguments = "/c";
			arguments = arguments + " \"" + string_1 + " \"";
		}
		return Process.Start(new ProcessStartInfo(fileName)
		{
			CreateNoWindow = true,
			Arguments = arguments,
			ErrorDialog = true,
			UseShellExecute = false,
			WorkingDirectory = string_0
		}).Id;
	}

	public static void smethod_1()
	{
		string str = Environment.ExpandEnvironmentVariables("%SystemRoot%");
		string text = str + "/system32";
		string text2 = str + "/System32/Wbem";
		string environmentVariable = Environment.GetEnvironmentVariable("PATH");
		environmentVariable = environmentVariable + ";" + text + ";" + text2;
		Environment.SetEnvironmentVariable("PATH", environmentVariable);
	}

	public static string smethod_2(string string_0)
	{
		string result = "";
		string fileName = "";
		string arguments = "";
		if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.MacOSX)
		{
			fileName = "bash";
			arguments = "-c";
			arguments = arguments + " \"" + string_0 + " \"";
		}
		else if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.Windows)
		{
			fileName = "cmd.exe";
			arguments = "/c";
			arguments = arguments + " \"" + string_0 + " \"";
		}
		ProcessStartInfo processStartInfo = new ProcessStartInfo(fileName);
		processStartInfo.Arguments = arguments;
		processStartInfo.CreateNoWindow = true;
		processStartInfo.ErrorDialog = true;
		processStartInfo.UseShellExecute = false;
		processStartInfo.WorkingDirectory = "";
		if (processStartInfo.UseShellExecute)
		{
			processStartInfo.RedirectStandardOutput = false;
			processStartInfo.RedirectStandardError = false;
			processStartInfo.RedirectStandardInput = false;
		}
		else
		{
			processStartInfo.RedirectStandardOutput = true;
			processStartInfo.RedirectStandardError = true;
			processStartInfo.RedirectStandardInput = true;
			processStartInfo.StandardOutputEncoding = Encoding.UTF8;
			processStartInfo.StandardErrorEncoding = Encoding.UTF8;
		}
		try
		{
			Process process = Process.Start(processStartInfo);
			result = process.StandardOutput.ReadLine();
			return result;
		}
		catch (Exception message)
		{
			UnityEngine.Debug.Log(message);
			return result;
		}
	}

	public NodeServerHelper()
	{
		
		
	}
}
