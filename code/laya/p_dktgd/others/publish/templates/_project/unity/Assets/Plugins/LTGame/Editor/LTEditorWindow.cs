using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;

namespace LTGame
{

    public class LTEditorWindow : EditorWindow
    {

        private static LTEditorWindow _windows;

        [MenuItem("LTGame/Config")]
        static void Init()
        {
            if (_windows == null)
            {
                _windows = GetWindow<LTEditorWindow>();
                _windows.titleContent = new GUIContent("全局配置");
            }
            _windows.Show();
            _windows.Focus();
        }

        private void OnGUI()
        {
            EditorGUILayout.BeginVertical();
            _toggleIndex = 0;
            _HandleToggleUI("Excel配置自动生成_TS", _TSExcelHandle);
            EditorGUILayout.EndVertical();
        }

        private int _toggleIndex;
        private void _HandleToggleUI(string toggleName, System.Action action)
        {
            LTEditorData.instance.enableKeys[_toggleIndex] = EditorGUILayout.ToggleLeft(toggleName, LTEditorData.instance.enableKeys[_toggleIndex]);
            if (LTEditorData.instance.enableKeys[_toggleIndex])
            {
                action();
            }
            _toggleIndex++;
        }

        private void _TSExcelHandle()
        {
            LTEditorUtils.ShowLine("Excel保存路径", ref LTEditorData.instance.ts_excelSavePath, "");
            LTEditorUtils.ShowLine("Config代码储存路径", ref LTEditorData.instance.ts_configCodeSavePath, "/Scripts/GenConfig");
            LTEditorUtils.ShowLine("Config文件储存路径", ref LTEditorData.instance.ts_configJsonSavePath, "/Scripts/GenConfig");

            EditorGUILayout.BeginHorizontal();
            if (GUILayout.Button("Progress Save Path"))
            {
                var savePath = LTEditorData.instance.ts_excelSavePath;
                if (savePath.StartsWith("/"))
                {
                    savePath = Application.dataPath + savePath;
                }
                if (string.IsNullOrEmpty(savePath))
                {
                    Debug.LogError("未配置生成路径");
                }
                else
                {
                    LTExcelHelper.GenCodeWithDir(savePath);
                }
            }
            EditorGUILayout.EndHorizontal();

            if (GUILayout.Button("Save Params"))
            {
                this._DoSaveAction();
            }
            EditorGUILayout.LabelField("");
        }

        private void OnDestroy()
        {
            this._DoSaveAction();
        }

        private void _DoSaveAction()
        {
            LTEditorData.instance.Save();
            Debug.Log("LTGame Editor数据已保存 at:" + System.DateTime.Now);
        }
    }
}
