---
title: 安装脚本
date: 2012/09/13
---
# 安装脚本
## 安装、卸载
插件作者可以设计 2 个脚本文件用于插件的安装和卸载，文件名任意。脚本中可用 runquery() 函数执行 SQL 语句，表名可以直接写“cdb_”。插件作者只需在导出的 XML 文件结尾加上安装、卸载脚本的文件名即可
```xml
        <item id="installfile"><![CDATA[install.php]]></item>
        <item id="uninstallfile"><![CDATA[uninstall.php]]></item>
    </item>
</root>
```
安装、卸载程序中可随意设计页面的跳转，只要在插件安装、卸载结束时候输出添加以下代码即可
```php
$finish = TRUE;
```
> 从 Discuz! X3.1 开始，卸载程序将不再支持页面的跳转及上面的 $finish 变量
## 升级
插件作者可以设计一个脚本文件用于插件的升级，文件名任意。脚本中可用 runquery() 函数执行 SQL 语句，表名可以直接写“cdb_”。插件作者只需在导出的 XML 文件结尾加上升级脚本的文件名即可
```xml
        <item id="upgradefile"><![CDATA[upgrade.php]]></item>
    </item>
</root>
```
升级程序中可通过 $fromversion 和 $toversion 变量判断升级的具体版本号，并随意设计页面的跳转，只要在插件升级结束时候输出添加以下代码即可。
```php
$finish = TRUE;
```
插件的当前版本号位于 XML 文件的以下分支中，可自行更改。
```xml
    <item id="plugin">
        ......
        <item id="version"><![CDATA[当前版本]]></item>
        ......
    </item>
```
## 检测
插件作者可以设计一个脚本文件用于插件在安装、卸载、升级操作前的检测，文件名任意。插件作者只需在导出的 XML 文件结尾加上检测脚本的文件名即可
```xml
        <item id="checkfile"><![CDATA[check.php]]></item>
    </item>
</root>
```
## 授权协议、插件介绍
插件在安装的时候您可以自定义授权信息文本，文本支持 Discuz! 代码，站长同意后才能安装插件。如果插件存在后台管理界面或者变量配置，那么插件介绍文本会显示在插件后台页面中。插件作者只需在导出的 XML 文件结尾加上以下内容即可
```xml
        <item id="license"><![CDATA[授权协议文本]]></item>
        <item id="intro"><![CDATA[插件介绍文本]]></item>
    </item>
</root>
```
## 开启、关闭(Discuz! X3.1 新增)
插件作者可以设计 2 个脚本文件用于插件在开启和关闭时执行，文件名任意。脚本中可用 runquery() 函数执行 SQL 语句，表名可以直接写“cdb_”。插件作者只需在导出的 XML 文件结尾加上开启、关闭脚本的文件名即可
```xml
        <item id="enablefile"><![CDATA[enable.php]]></item>
        <item id="disablefile"><![CDATA[disable.php]]></item>
    </item>
</root>
```
## Discuz! 版本兼容性设置
请仔细检查您的插件是否可以在相应的 Discuz! 版本中运行。然后在 XML 文件的以下分支中自行更改。  
如您的插件兼容多个版本，请用逗号(,)分隔，如“X2,X2.5”（此写法从 Discuz! X2 R20120329 后开始支持）
```xml
    <item id="Data">
        <item id="plugin">
                ......
        </item>
        ......
        <item id="version"><![CDATA[兼容性设置]]></item>
        ......
    </item>
```
## 其他论坛数据导入
插件安装时可以直接导入一个或多个论坛数据，这些论坛数据包括表情(smilies)、风格(styles)的数据。在导出的 XML 文件结尾加上需要导入数据的类型和数据文件名即可，多个文件名用逗号(“,”)分隔。
```xml
        <item id="importfile">
            <item id="smilies"><![CDATA[discuz_smilies_test.xml]]></item>
            <item id="styles"><![CDATA[discuz_styles_test.xml]]></item>
        </item>
    </item>
</root>
```
## 小提示

如果导出的 XML 文件名以 SC_GBK、SC_UTF8、TC_BIG5、TC_UTF8 结尾，显示的时候将直接显示为“简体”、“繁体”、“UTF8”等字样。