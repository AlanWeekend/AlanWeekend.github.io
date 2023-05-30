---
title: BDFramework修改Sqlite可读写
katex: false
date: 2022-08-18 21:41:06
category:
 - Unity
tag:
 - BDFramework
---
打开挂载在`BDFrame`上的`BDLauncher`脚本,定位到``Launch``函数，找到``SqliteLoder.Load()``,定位到``SqliterLoader``类中，添加一个函数
```csharp
/// <summary>
/// runtime下加载，可读写
/// </summary>
/// <param name="str"></param>
static public void LoadReadWrite(AssetLoadPathType assetLoadPathTypeType)
{
    Connection?.Dispose();
    var path = GameConfig.GetLoadPath(assetLoadPathTypeType);

    //用当前平台目录进行加载
    path = GetLocalDBPath(path, Application.platform);
    if (File.Exists(path))
    {
        Connection = new SQLiteConnection(path, SQLiteOpenFlags.ReadWrite);
        BDebug.Log("DB加载路径:" + path, "red");
    }
    else
    {
        Debug.LogError("DB不存在:" + path);
    }
}
```
将``BDLauncher``中的``SqliteLoder.Load()``替换成``SqliteLoder.LoadReadWrite()``