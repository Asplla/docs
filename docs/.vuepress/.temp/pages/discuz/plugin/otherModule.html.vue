<template><div><h1 id="其他模块" tabindex="-1"><a class="header-anchor" href="#其他模块"><span>其他模块</span></a></h1>
<h2 id="计划任务模块开发" tabindex="-1"><a class="header-anchor" href="#计划任务模块开发"><span>计划任务模块开发</span></a></h2>
<blockquote>
<p>本功能为 Discuz! X3.0 新增内容<br>
计划任务模块用于拓展一个计划任务项目，本模块会在插件安装时自动添加到系统计划任务中，并在插件卸载时自动从中删除</p>
</blockquote>
<p>脚本位置：source/plugin/插件目录/cron/cron_name.php</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token comment">//cronname:mycron     计划任务名称，可写脚本语言包中的项目</span>
<span class="token comment">//week:1              设置星期几执行本任务，留空为不限制</span>
<span class="token comment">//day:1               设置哪一日执行本任务，留空为不限制</span>
<span class="token comment">//hour:1              设置哪一小时执行本任务，留空为不限制</span>
<span class="token comment">//minute:0,30         设置哪些分钟执行本任务，至多可以设置 12 个分钟值，多个值之间用半角逗号 "," 隔开，留空为不限制</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">defined</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'IN_DISCUZ'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">exit</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Access Denied'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 您的计划任务脚本内容</span>

<span class="token delimiter important">?></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="缓存更新模块开发" tabindex="-1"><a class="header-anchor" href="#缓存更新模块开发"><span>缓存更新模块开发</span></a></h2>
<blockquote>
<p>本功能为 Discuz! X3.0 新增内容<br>
缓存更新模块用于在系统更新缓存时拓展一个缓存更新项目</p>
</blockquote>
<p>脚本位置：source/plugin/插件目录/cache/cache_name.php</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">defined</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'IN_DISCUZ'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">exit</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Access Denied'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-definition function">build_cache_plugin_name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 您的缓存更新脚本内容</span>
<span class="token punctuation">}</span>

<span class="token delimiter important">?></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


