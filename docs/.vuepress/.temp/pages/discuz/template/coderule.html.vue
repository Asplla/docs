<template><div><h1 id="discuz-模板解析语法" tabindex="-1"><a class="header-anchor" href="#discuz-模板解析语法"><span>Discuz!模板解析语法</span></a></h1>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<p>在设计模板之初，您需要详细了解一下模板解析语法，以进行模板制作实战<br>
语法示例中，变量可根据实际情况使用，本处仅使用：<strong>变量$my_var</strong>、<strong>数组$my_arr</strong>进行演示，</p>
<h2 id="php中使用template-函数显示已存在模板" tabindex="-1"><a class="header-anchor" href="#php中使用template-函数显示已存在模板"><span>PHP中使用template()函数显示已存在模板</span></a></h2>
<p>在Discuz!程序执行中可以通过 include template(‘模板文件夹/模板名称无后缀’);的方式进行解析，前提是您使用的Discuz!程序已经包含了 ./source/function/function_core.php 的函数库</p>
<h2 id="php格式的模板" tabindex="-1"><a class="header-anchor" href="#php格式的模板"><span>PHP格式的模板</span></a></h2>
<h6 id="x2-5新增内容" tabindex="-1"><a class="header-anchor" href="#x2-5新增内容"><span>[X2.5新增内容]</span></a></h6>
<p>从 Discuz! X2.5 开始，模板文件支持 PHP 扩展名的格式，你可以创建例如 ./template/mytext/common/forum/discuz.php 文件，PHP 的模板文件中你只需在原有 HTM 的模板文件开头添加一行代码即可，如：</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">exit</span><span class="token punctuation">;</span><span class="token delimiter important">?></span></span>
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token string single-quoted-string">'你不能看到此模板内容'</span><span class="token punctuation">;</span> <span class="token keyword">exit</span><span class="token punctuation">;</span> <span class="token delimiter important">?></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>PHP 的模板文件的模板数据内容将从文件的第二行开始解析。PHP 和 HTM 模板文件同时存在时，会优先解析 PHP 模板文件</p>
<h2 id="模板语法" tabindex="-1"><a class="header-anchor" href="#模板语法"><span>模板语法</span></a></h2>
<h3 id="变量输出" tabindex="-1"><a class="header-anchor" href="#变量输出"><span>变量输出</span></a></h3>
<p>输出一个变量的值，等同于php的 <code v-pre>&lt;?php echo $my_var;?&gt;</code>，花括号可以省略但不建议去掉。</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code>{$my_var}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="条件判断" tabindex="-1"><a class="header-anchor" href="#条件判断"><span>条件判断</span></a></h3>
<p>通过if判断流程分支</p>
<ul>
<li>如果写在HTML表单元素中，可以省去使代码更清晰易读，如<code v-pre>{if $my_var}xxx{/if}</code><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--{if $my_var}--></span>`
    任意html语句`
<span class="token comment">&lt;!--{/if}--></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>带有多条件的if写法，可使用PHP常规判断中的按位运算符等<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--{if $my_var &amp;&amp; ($my_var2 &amp; 1 || $my_var3 == 3)}--></span>
    任意html语句
<span class="token comment">&lt;!--{/if}--></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>带有分支条件的if写法<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--{if $my_var == 1}--></span>
    变量为1
<span class="token comment">&lt;!--{elseif $my_var == 2}--></span>
    变量为2
<span class="token comment">&lt;!--{else}--></span>
    其他情况
<span class="token comment">&lt;!--{/if}--></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="循环输出" tabindex="-1"><a class="header-anchor" href="#循环输出"><span>循环输出</span></a></h3>
<p>带有数组键的循环写法</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--{loop $my_arr $key $val}--></span>
	循环输出的HTML语句
<span class="token comment">&lt;!--{/loop}--></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>没有数组键的循环写法</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--{loop $my_arr $val}--></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="模板嵌套" tabindex="-1"><a class="header-anchor" href="#模板嵌套"><span>模板嵌套</span></a></h3>
<p>将被嵌套模板内容解析为PHP语句并合并入本模板中的写法</p>
<ul>
<li>common/header 对应某个模板套系中的common目录的header模板文件<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--{subtemplate common/header}--></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>程序运行时include嵌套模板内容<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--{template common/header}--></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h3 id="插件钩子" tabindex="-1"><a class="header-anchor" href="#插件钩子"><span>插件钩子</span></a></h3>
<p>在模板中设立插件钩子：<RouteLink to="/discuz/plugin/language.html">插件模板和语言包的设计</RouteLink>
hook为关键词，意为将index_top定义为钩子</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--{hook/index_top}--></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="变量数组嵌套使用" tabindex="-1"><a class="header-anchor" href="#变量数组嵌套使用"><span>变量数组嵌套使用</span></a></h3>
<p>条件判断或变量输出时用到</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--{if $my_arr[$my_var]}--></span>
<span class="token comment">&lt;!--{if $my_arr[0]}--></span>
<span class="token comment">&lt;!--{if $my_arr[$my_arr2[$my_var]]}--></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php解析" tabindex="-1"><a class="header-anchor" href="#php解析"><span>PHP解析</span></a></h3>
<p>在模板中使用PHP语句可以通过{eval}进行</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--{eval $my_var = 1;}--></span>
<span class="token comment">&lt;!--{eval echo $my_var;}--></span>
<span class="token comment">&lt;!--{eval $my_arr = array(1, 2, 3);}--></span>
<span class="token comment">&lt;!--{eval print_r($my_arr);}--></span>
<span class="token comment">&lt;!--{eval output();}--></span>
<span class="token comment">&lt;!--{eval exit();}--></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多行PHP解析(Discuz! X3 新增)</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--{eval}--></span>
	PHP语句
<span class="token comment">&lt;!--{/eval}--></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="语言包使用" tabindex="-1"><a class="header-anchor" href="#语言包使用"><span>语言包使用</span></a></h3>
<p>在模板中可以通过下面的代码来使用语言包中的某个值</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code>{lang index_yesterday}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中语言包在 ./source/language/目录下，以PHP数组形式存放</p>
<h2 id="插件模板和语言包的设计" tabindex="-1"><a class="header-anchor" href="#插件模板和语言包的设计"><span>插件模板和语言包的设计</span></a></h2>
<p><strong>请参见：<RouteLink to="/discuz/plugin/language.html">插件模板和语言包的设计</RouteLink></strong></p>
<h2 id="综合示例" tabindex="-1"><a class="header-anchor" href="#综合示例"><span>综合示例</span></a></h2>
<p>综合示例题目1：php程序中创建一个数组并在模板中循环，并且根据模板显示奇数行输出不同的CSS样式</p>
<ul>
<li>PHP端代码：
<blockquote>
<p>此PHP代码省略了包含 class_core.php 以及初始化$_G变量，详细请查看：</p>
</blockquote>
</li>
</ul>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
	<span class="token comment">// 此处省略include class_core.php</span>
	<span class="token variable">$my_arr</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'one'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'two'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'three'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'four'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 使用自定义模板套系中的forum目录的mytest</span>
	<span class="token keyword">include</span> <span class="token function">template</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'forum/mytest'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>模板代码：</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--{loop $my_arr $key $val}--></span>
	&lt;div {if $key % 2 == 1}style="background: #ccc;"{/if}>
		这里是value值：{$val}
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--{/loop}--></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>综合示例题目2：结合风格常量与javascript，动态改变模板页面的字体大小,并引用默认模板的header和footer</p>
<ul>
<li>默认风格中，小号字体大小 {SMFONTSIZE}为0.83em，主题列表字体大小 {THREADTITLEFONTSIZE}为14px，<strong>在Disucz!X2中使用时，需要使用<code v-pre>$_G['style']['SMFONTSIZE']</code>和<code v-pre>$_G['style']['THREADTITLEFONTSIZE']</code></strong>。</li>
<li><code v-pre>$('test1')</code>此写法是因为header中已经加载了common.js全局javascript脚本文件，可以通过简写来达到<code v-pre>document.getElementById('test1')</code>的效果</li>
<li><code v-pre>./template/mytest/forum/mytest</code>模板代码如下<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--{subtemplate common/header}--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>test1<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token selector">font-size:</span><span class="token punctuation">{</span>$_G[<span class="token string">'style'</span>][<span class="token string">'FONTSIZE'</span>]<span class="token punctuation">}</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
	这是一个改变字体的实例
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">changefontsize</span><span class="token punctuation">(</span><span class="token string">'{$_G['</span>style<span class="token string">']['</span><span class="token constant">SMFONTSIZE</span><span class="token string">']}'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>改变小号字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">changefontsize</span><span class="token punctuation">(</span><span class="token string">'{$_G['</span>style<span class="token string">']['</span><span class="token constant">THREADTITLEFONTSIZE</span><span class="token string">']}'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>改变为大号字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">function</span> <span class="token function">changefontsize</span><span class="token punctuation">(</span><span class="token parameter">size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'test1'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> size<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<!--{subtemplate common/footer}-->
<pre><code>```
</code></pre>
</div></template>


