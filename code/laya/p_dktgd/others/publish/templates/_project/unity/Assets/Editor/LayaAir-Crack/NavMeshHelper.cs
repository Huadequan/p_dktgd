using System.IO;
using System.Text;

using UnityEditor;
using UnityEngine;
using UnityEngine.AI;
using UnityEngine.SceneManagement;

internal class NavMeshHelper : MonoBehaviour
{
	private GameObject gameObject_0;

	[MenuItem("Tools/Export NavMesh Data")]
	private static void smethod_0()
	{
		NavMeshTriangulation navMeshTriangulation = NavMesh.CalculateTriangulation();
		Mesh mesh_ = new Mesh
		{
			name = "_NavMesh",
			vertices = navMeshTriangulation.vertices,
			triangles = navMeshTriangulation.indices
		};
		string text = "navmesh_" + SceneManager.GetActiveScene().name;
		string text2 = Application.dataPath + "/NavMeshTest/" + text + ".obj";
		smethod_3(mesh_, text2);
		AssetDatabase.Refresh();
		GameObject gameObject = Object.Instantiate(AssetDatabase.LoadAssetAtPath<GameObject>(text2.Replace(Application.dataPath, "Assets")));
		gameObject.name = text;
		smethod_4(gameObject);
		Debug.Log("导出完成：" + text);
		AssetDatabase.Refresh();
	}

	[MenuItem("Tools/NavMesh Data Test")]
	private static void smethod_1()
	{
		GameObject gameObject = GameObject.Find("_NavMesh");
		Vector3[] vertices = gameObject.GetComponent<MeshFilter>().sharedMesh.vertices;
		int[] triangles = gameObject.GetComponent<MeshFilter>().sharedMesh.triangles;
		Vector3[] array = new Vector3[vertices.Length];
		for (int i = 0; i < vertices.Length; i++)
		{
			Vector3 vector = (array[i] = gameObject.transform.TransformPoint(vertices[i]));
		}
		Vector3 position = GameObject.Find("TestPoint").transform.position;
		bool flag = false;
		for (int j = 0; j < triangles.Length; j += 3)
		{
			if (smethod_6(array[triangles[j]], array[triangles[j + 1]], array[triangles[j + 2]], position))
			{
				flag = true;
				break;
			}
		}
		if (flag)
		{
			Debug.Log("该点合法");
		}
		else
		{
			Debug.Log("该点非法");
		}
	}

	private static string smethod_2(Mesh mesh_0)
	{
		StringBuilder stringBuilder = new StringBuilder();
		stringBuilder.Append("g ").Append(mesh_0.name).Append("\n");
		Vector3[] vertices = mesh_0.vertices;
		for (int i = 0; i < vertices.Length; i++)
		{
			Vector3 vector = vertices[i];
			stringBuilder.Append($"v {vector.x} {vector.y} {vector.z}\n");
		}
		stringBuilder.Append("\n");
		vertices = mesh_0.normals;
		for (int i = 0; i < vertices.Length; i++)
		{
			Vector3 vector2 = vertices[i];
			stringBuilder.Append($"vn {vector2.x} {vector2.y} {vector2.z}\n");
		}
		stringBuilder.Append("\n");
		Vector2[] uv = mesh_0.uv;
		for (int i = 0; i < uv.Length; i++)
		{
			Vector3 vector3 = uv[i];
			stringBuilder.Append($"vt {vector3.x} {vector3.y}\n");
		}
		for (int j = 0; j < mesh_0.subMeshCount; j++)
		{
			stringBuilder.Append("\n");
			int[] triangles = mesh_0.GetTriangles(j);
			for (int k = 0; k < triangles.Length; k += 3)
			{
				stringBuilder.Append(string.Format("f {0}/{0}/{0} {1}/{1}/{1} {2}/{2}/{2}\n", triangles[k] + 1, triangles[k + 1] + 1, triangles[k + 2] + 1));
			}
		}
		return stringBuilder.ToString();
	}

	private static void smethod_3(Mesh mesh_0, string string_0)
	{
		using (StreamWriter streamWriter = new StreamWriter(string_0))
		{
			streamWriter.Write(smethod_2(mesh_0));
		}
	}

	private static void smethod_4(GameObject gameObject_1)
	{
		Vector3[] vertices = gameObject_1.transform.Find("_NavMesh").GetComponent<MeshFilter>().sharedMesh.vertices;
		int[] triangles = gameObject_1.transform.Find("_NavMesh").GetComponent<MeshFilter>().sharedMesh.triangles;
		Vector3[] array = new Vector3[vertices.Length];
		for (int i = 0; i < vertices.Length; i++)
		{
			Vector3 vector = (array[i] = gameObject_1.transform.TransformPoint(vertices[i]));
		}
		StringBuilder stringBuilder = new StringBuilder();
		stringBuilder.Append("local nav = {\n");
		for (int j = 0; j < triangles.Length; j += 3)
		{
			stringBuilder.AppendFormat("\t{{{0},{1},{2}}},\n", smethod_5(array[triangles[j]]), smethod_5(array[triangles[j + 1]]), smethod_5(array[triangles[j + 2]]));
		}
		stringBuilder.Append("}\n");
		stringBuilder.Append("return nav");
		using (StreamWriter streamWriter = new StreamWriter(Application.dataPath + "/NavMeshTest/" + gameObject_1.name + ".lua"))
		{
			streamWriter.Write(stringBuilder.ToString());
		}
		Object.DestroyImmediate(gameObject_1);
	}

	private static string smethod_5(Vector3 vector3_0)
	{
		return $"{{{vector3_0.x},{vector3_0.y},{vector3_0.z}}}";
	}

	private static bool smethod_6(Vector3 vector3_0, Vector3 vector3_1, Vector3 vector3_2, Vector3 vector3_3)
	{
		Vector3 vector = vector3_2 - vector3_0;
		Vector3 vector2 = vector3_1 - vector3_0;
		Vector3 rhs = vector3_3 - vector3_0;
		float num = Vector3.Dot(vector, vector);
		float num2 = Vector3.Dot(vector, vector2);
		float num3 = Vector3.Dot(vector, rhs);
		float num4 = Vector3.Dot(vector2, vector2);
		float num5 = Vector3.Dot(vector2, rhs);
		float num6 = 1f / (num * num4 - num2 * num2);
		float num7 = (num4 * num3 - num2 * num5) * num6;
		if (!(num7 < 0f) && num7 <= 1f)
		{
			float num8 = (num * num5 - num2 * num3) * num6;
			if (!(num8 < 0f) && num8 <= 1f)
			{
				return num7 + num8 <= 1f;
			}
			return false;
		}
		return false;
	}

	public NavMeshHelper()
	{
		
		
	}
}
