<template><div><h1 id="模板缓存与css缓存" tabindex="-1"><a class="header-anchor" href="#模板缓存与css缓存"><span>模板缓存与CSS缓存</span></a></h1>
<h2 id="模板缓存" tabindex="-1"><a class="header-anchor" href="#模板缓存"><span>模板缓存</span></a></h2>
<p>模板缓存存放：所有的模板缓存均被解析成php文件存放在 ./data/template 中，以 “<strong>数字</strong>_<strong>模板标示符组合</strong>.tpl.php”形式保存</p>
<p>页面缓存刷新原理：当开发者编辑过模板文件之后，Discuz! 模板解析器会匹配<strong>模板htm文件</strong>与<strong>缓存php文件</strong>的最后修改时间，如过模板html文件较新或无缓存文件，则更新或生成缓存，不新，则不采取任何动作</p>
<p>手动删除此目录的缓存不会影响Discuz!系统的整体运行，Discuz! 模板缓存仍然会进行自动生成</p>
<h2 id="css缓存" tabindex="-1"><a class="header-anchor" href="#css缓存"><span>CSS缓存</span></a></h2>
<p>CSS缓存存放：./data/cache/目录中，以 “style_<strong>风格自增编号</strong><em><strong>应用入口关键字</strong></em><strong>所在页面的mod值</strong>.css”形式保存</p>
<p>自建新套系模板文件可以通过创建 ./template/mytest/common/extend_common.css 或 extend_module.css 进行CSS扩展</p>
<p>其中这两个文件的CSS样式脚本会通过 Discuz! 模板解析将风格常量统一赋值进去并合将CSS脚本复制出来放入 ./template/default/common/common.css 和 module.css 所对应的缓存中去，方便站点运行时引用</p>
<p>extend_module.css 系统解析与缓存存放：<br>
其中可以使用下面的书写方法：</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token comment">/** forum::index,forum::forumdisplay **/</span>
<span class="token selector">.mycss</span> <span class="token punctuation">{</span><span class="token selector">font:</span> <span class="token punctuation">{</span>FONTSIZE<span class="token punctuation">}</span> <span class="token punctuation">{</span>FONT<span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token comment">/** end **/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>上面的写法含义是：针对 forum 的 <strong>index</strong> 和 <strong>forumdisplay</strong> 追加一个自定义的CSS样式 “<strong>mycss</strong>“ ，Discuz! 模板解析将会根据 forum::index 的关键词将 mycss 分别追加在“./data/cache/style_2_forum_index.css”和“./data/cache/style_2_forum_forumdisplay.css”中(里面的数字2，根据新增的风格编号而定)</li>
<li>这样的写法好处就是，不变更默认模板的情况下有效的扩展CSS，并可以很好的进行多站点移植</li>
</ul>
<h2 id="css-继承规范" tabindex="-1"><a class="header-anchor" href="#css-继承规范"><span>CSS 继承规范</span></a></h2>
<p>Discuz! X系列产品中 CSS 文件会在缓存时按照以下顺序进行合并：</p>
<ul>
<li>template/default/*.css 文件</li>
<li>当默认模版是非默认模版时，template/模版目录/extend__.css 文件 或 template/模版目录/_.css</li>
<li>当某插件启用时，source/plugin/插件目录/template/extend_*.css 文件
因此非默认模版目录中的 CSS 属性将继承默认模版中的 CSS 属性，插件目录中的 CSS 文件将继承前二者的 CSS 属性</li>
<li>CSS 自身的集成顺序为：当 CSS 属性名称相同时，CSS 文件中，写在后面的替换前面的代码</li>
</ul>
</div></template>


