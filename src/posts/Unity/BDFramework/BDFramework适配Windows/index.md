---
title: BDFramework适配Windows
date: 2022-08-16 22:17:20
categorie:
 - Unity
tag:
 - BDFramework
cover:
---
# 将BDFramework本地化
不要通过unpm安装框架，在框架[发布页](https://github.com/yimengfan/BDFramework.Core/releases)下载包文件，放在项目的``Packages``目录中。
# 适配Windows
## 修改支持Windows打包
1. 修改`Packages/BDFramework/Editor/EditorPiepeline/PublishPipeline/EditroWindow_PublishAssets.cs`的``OnGUI_OneKeyExprot()``方法，添加Windows打包支持，内容如下

```cs
/// <summary>
/// 一键导出
/// </summary>
public void OnGUI_OneKeyExprot()
{
    GUILayout.BeginVertical();
    {
        GUILayout.Label("注:上面按钮操作,会默认生成到DevOps", GUILayout.Width(500), GUILayout.Height(30));
        isGenWindowsAssets = GUILayout.Toggle(isGenWindowsAssets, "生成Windows资源");// 修改，isGenWindowsAssets变量自行添加定义
        isGenAndroidAssets = GUILayout.Toggle(isGenAndroidAssets, "生成Android资源(Windows共用)");
        isGenIOSAssets = GUILayout.Toggle(isGenIOSAssets, "生成Ios资源");

        //
        GUILayout.Label("导出地址:" + exportPath, GUILayout.Width(500));
        //
        if (GUILayout.Button("一键导出", GUILayout.Width(350), GUILayout.Height(30)))
        {
            if (isBuilding)
            {
                return;
            }

            isBuilding = true;

            //选择目录
            exportPath = BDApplication.DevOpsPublishAssetsPath;

            //生成windows资源 // 修改
            if (isGenWindowsAssets)
            {
                GenAllAssets(exportPath, RuntimePlatform.WindowsPlayer);
            }

            //生成android资源
            if (isGenAndroidAssets)
            {
                GenAllAssets(exportPath, RuntimePlatform.Android);
            }

            //生成ios资源
            if (isGenIOSAssets)
            {
                GenAllAssets(exportPath, RuntimePlatform.IPhonePlayer);
            }

            //EditorUtility.DisplayDialog("提示", "资源导出完成", "OK");

            isBuilding = false;
        }

        //
        if (GUILayout.Button("热更资源转hash(生成服务器配置)", GUILayout.Width(350), GUILayout.Height(30)))
        {
            //自动转hash
            PublishPipelineTools.PublishAssetsToServer(BDApplication.DevOpsPublishAssetsPath);
        }
    }
    GUILayout.EndVertical();
}
```
2. 修改``Packages\BDFramework\Runtime\Tools\BDApplication.cs``中的``GetPlatformPath()``方法，修改内容如下

```cs
/// <summary>
/// 平台资源的父路径
/// </summary>
public static string GetPlatformPath(RuntimePlatform platform)
{
    switch (platform)
    {
        case RuntimePlatform.WindowsEditor:
        case RuntimePlatform.WindowsPlayer:
            return "Windows"; // 修改
        case RuntimePlatform.Android:
            return "Android";
        case RuntimePlatform.OSXEditor:
        case RuntimePlatform.OSXPlayer:
        case RuntimePlatform.IPhonePlayer:
            return "iOS";
    }

    return "";
}
```
---
## 去掉Sqlite
项目不使用sqlite，且平台为x86，框架只有x64的sqlite依赖，会导致报错无法正常启动

1. 修改``Packages\BDFramework\Runtime\BDLauncher.cs``中的``Launch()``方法，修改内容如下

```cs
/// <summary>
/// 初始化
/// 修改版本,让这个启动逻辑由使用者自行处理
/// </summary>
/// <param name="mainProjectTypes">Editor模式下,UPM隔离了DLL需要手动传入</param>
/// <param name="GameId">单游戏更新启动不需要id，多游戏更新需要id号</param>
public void Launch(Type[] mainProjectTypes, Action<bool> clrBindingAction, string gameId = "default")
{
    BDebug.Log("【Launch】Persistent:" + Application.persistentDataPath);
    BDebug.Log("【Launch】StreamingAsset:" + Application.streamingAssetsPath);
    //主工程启动
    IGameStart mainStart;
    foreach (var type in mainProjectTypes)
    {
        //TODO 这里有可能先访问到 IGamestart的Adaptor
        if (type.IsClass && type.GetInterface(nameof(IGameStart)) != null)
        {
            BDebug.Log("【Launch】主工程Start! " + type.FullName);
            mainStart = Activator.CreateInstance(type) as IGameStart;
            if (mainStart != null)
            {
                //注册
                mainStart.Start();
                OnUpdate += mainStart.Update;
                OnLateUpdate += mainStart.LateUpdate;
                break;
            }
        }
    }


    BDebug.Log("【Launch】框架资源版本验证!");
    //开始资源检测
    GameAssetHelper.CheckAssetPackageVersion(Application.platform, () =>
    {
        //1.美术目录
        BResources.Load(GameConfig.ArtRoot);
        //2.sql
        //SqliteLoder.Load(GameConfig.SQLRoot); // 修改
        //3.脚本,这个启动会开启所有的逻辑
        ScriptLoder.Load(GameConfig.CodeRoot, GameConfig.CodeRunMode, mainProjectTypes, clrBindingAction);
    });
}
```