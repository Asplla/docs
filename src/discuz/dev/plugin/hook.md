---
title: 页面嵌入
date: 2012/05/03
---
# 页面嵌入
## 页面嵌入类型脚本格式
```php
<?php
//全局嵌入点类（必须存在）
class plugin_identifier {
    function HookId_1() {
        ......
        return ...;
    }
    function HookId_2() {
        ......
        return ...;
    }
    ......
}
//脚本嵌入点类
class plugin_identifier_CURSCRIPT extends plugin_identifier {
    function HookId_1() {
        ......
        return ...;
    }
    function HookId_2() {
        ......
        return ...;
    }
    ......
}
?>
```
### plugin_

> 普通版脚本中的类名以 `plugin_` 开头。手机版脚本中的类名以 mobileplugin_ 开头。

### identifier

> 插件的唯一标识符，在插件设置中设置。

### CURSCRIPT

> 嵌入点位于的脚本名，如 forum.php 为 forum。

X3.4 最新版本开始支持plugin.php为CURSCRIPT的插件之间的hook调用，CURSCRIPT值为plugin。New!

### HookId

|函数名|调用位置|声明位置|参数含义|
|---|---|---|---|
|HookId()|所有模块执行前被调用|脚本嵌入点类||
|HookId_output($value)|模块执行完毕，模板输出前被调用|脚本嵌入点类|$value: array(  <br>‘template’ => 当前要输出的模版,  <br>‘message’ => showmessage 的信息内容,  <br>‘values’ => showmessage 的信息变量,  <br>)|
|global_HookId()|模块执行完毕，模板输出前被调用|全局嵌入点类||
|HookId_message($value)|showmessage() 执行时调用|脚本嵌入点类|$value: array(  <br>‘param’ => showmessage() 函数的参数数组,  <br>)|
|ad_adId($value)|相应的广告位中调用  <br>函数名为广告位脚本 ID  <br>如：ad_headerbanner()|全局嵌入点类  <br>脚本嵌入点类|>$value: array(  <br>‘params’ => 广告位参数,  <br>‘content’ => 当前广告位原本将要显示的内容,  <br>)|
|common()|所有模块执行前被调用|全局嵌入点类||
|discuzcode($value)|discuzcode() 函数执行时调用  <br>用于在帖子内容解析时嵌入自己的功能，函数中 `$_G['discuzcodemessage']` 变量为待解析的字串|全局嵌入点类|$value: array(  <br>‘param’ => caller 函数的参数数组,  <br>‘caller’ => caller 函数，此嵌入点被哪个函数调用  <br>‘discuzcode’ 被 discuzcode() 调用  <br>‘messagecutstr’ 被 messagecutstr() 调用  <br>)|
|deletethread($value)|deletethread() 函数执行时调用  <br>用于在主题删除前后嵌入自己的功能，此函数将在 deletethread() 中被调用 2 次，函数中 `$_G['deletethreadtids']` 变量为待处理的 TID 数组|全局嵌入点类|$value: array(  <br>‘param’ => deletethread() 函数的参数数组,  <br>‘step’ => 删除的步骤  <br>‘check’ 检测步骤  <br>‘delete’ 删除步骤  <br>)|
|deletepost($value)|deletepost() 函数执行时调用  <br>用于在帖子删除前后嵌入自己的功能，此函数将在 deletepost() 中被调用 2 次，函数中 `$_G['deletepostids']` 变量为待处理的 ID 数组|全局嵌入点类|$value: array(  <br>‘param’ => deletepost() 函数的参数数组,  <br>‘step’ => 删除的步骤  <br>‘check’ 检测步骤  <br>‘delete’ 删除步骤  <br>)|
|avatar($value)  <br>(X2.5 新增)|avatar() 函数执行时调用  <br>用于在头像调用时嵌入自己的功能，函数中 `$_G['hookavatar']` 变量为新头像返回值|全局嵌入点类|$value: array(  <br>‘param’ => avatar() 函数的参数数组  <br>)|
|profile_node($post, $start, $end)  <br>(X3.0 新增)|贴内用户信息标记，返回值为标记显示内容|全局嵌入点类|$post: 当前帖子信息数组  <br>$start: 用户填写的前置字符  <br>$end: 用户填写的后置字符|
|identifier__hookid(_output)()  <br>(X3.4 新增New!)|插件的hook调用  <br>identifier为输出对象的应用ID，hookid为输出对象应用自定义的hook名称  <br>其他使用方法参考HookId()以及HookId_output($value)|脚本嵌入点类  <br>应用互动嵌入点类|参数含义|

> 要查看所有的预定义嵌入点，请打开 config/config_global.php 文件，将文件结尾添加的设计者模式值改成“2”，然后更新缓存即可。在页面源码中查找`<hook>`可搜索到嵌入点。（详细内容可参阅的《[插件嵌入点列表](hooklist)》）
```php
$_config['plugindeveloper'] = 2;
```
> 预定义的嵌入点会在页面预置好的位置输出函数返回的内容。函数返回值类型如果是 array 且是空值的，必须输出一个空数组，如：
```php
return array();
```
> 函数名并不限于以上列表，您可以自定义，只要符合以下规则，函数就会在适当的地方被调用。
```php
function CURMODULE_USERDEFINE[_output]()
```
> CURMODULE 指明了此函数在哪个模块执行，可通过常量 CURMODULE 得到当前页面的 CURMODULE 值。  
> USERDEFINE 可自定义，如果函数名以“_output”结尾则会在模板输出前调用，否则会在模块执行前调用。

如：attachment_test() 函数会在论坛的下载附件的时候执行。

> “_output”结尾的函数的第一个参数为数组，含义为 array(‘template’ => 要输出的模板名, ‘message’ => showmessage 的文字)

如：以下函数将在登录的时候输出调试文字
```php
function logging_test_output($a) {
    print_r($a);
    print_r($_POST);
}
```
plugin_identifier 类中的其它函数为了便于阅读建议以“_”开头，如：
```php
<?php
class plugin_sample {
    function _updatecache() {
        ......
        return ...;
    }
}
class plugin_sample_forum extends plugin_sample {
    function viewthread_posttop() {
        ......
        return ...;
    }
    ......
}
?>
```
## 插件嵌入点列表

附: [插件嵌入点列表](hooklist)