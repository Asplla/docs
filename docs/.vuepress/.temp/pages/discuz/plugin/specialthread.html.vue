<template><div><h1 id="特殊主题" tabindex="-1"><a class="header-anchor" href="#特殊主题"><span>特殊主题</span></a></h1>
<h2 id="脚本格式" tabindex="-1"><a class="header-anchor" href="#脚本格式"><span>脚本格式</span></a></h2>
<p>特殊主题模块用于创建一个特殊主题，特殊主题类型脚本格式</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">threadplugin_identifier</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> <span class="token variable">$name</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'XX主题'</span><span class="token punctuation">;</span>            <span class="token comment">//主题类型名称</span>
    <span class="token keyword">var</span> <span class="token variable">$iconfile</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'icon.gif'</span><span class="token punctuation">;</span>        <span class="token comment">//发布主题链接中的前缀图标</span>
    <span class="token keyword">var</span> <span class="token variable">$buttontext</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'发布xx主题'</span><span class="token punctuation">;</span>    <span class="token comment">//发帖时按钮文字</span>
    <span class="token keyword">function</span> <span class="token function-definition function">newthread</span><span class="token punctuation">(</span><span class="token variable">$fid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">...</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function-definition function">newthread_submit</span><span class="token punctuation">(</span><span class="token variable">$fid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function-definition function">newthread_submit_end</span><span class="token punctuation">(</span><span class="token variable">$fid</span><span class="token punctuation">,</span> <span class="token variable">$tid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function-definition function">editpost</span><span class="token punctuation">(</span><span class="token variable">$fid</span><span class="token punctuation">,</span> <span class="token variable">$tid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">...</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function-definition function">editpost_submit</span><span class="token punctuation">(</span><span class="token variable">$fid</span><span class="token punctuation">,</span> <span class="token variable">$tid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function-definition function">editpost_submit_end</span><span class="token punctuation">(</span><span class="token variable">$fid</span><span class="token punctuation">,</span> <span class="token variable">$tid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function-definition function">newreply_submit_end</span><span class="token punctuation">(</span><span class="token variable">$fid</span><span class="token punctuation">,</span> <span class="token variable">$tid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function-definition function">viewthread</span><span class="token punctuation">(</span><span class="token variable">$tid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">...</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token delimiter important">?></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>identifier</p>
<blockquote>
<p>插件的唯一标识符，在插件设置中设置。</p>
</blockquote>
<h2 id="函数名以及含义" tabindex="-1"><a class="header-anchor" href="#函数名以及含义"><span>函数名以及含义</span></a></h2>
<table>
<thead>
<tr>
<th>函数名</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>newthread()</td>
<td>发主题时页面新增的表单项目，通过 return 返回即可输出到发帖页面中</td>
</tr>
<tr>
<td>newthread_submit()</td>
<td>主题发布后的数据判断</td>
</tr>
<tr>
<td>newthread_submit_end()</td>
<td>主题发布后的数据处理</td>
</tr>
<tr>
<td>editpost()</td>
<td>编辑主题时页面新增的表单项目，通过 return 返回即可输出到编辑主题页面中</td>
</tr>
<tr>
<td>editpost_submit()</td>
<td>主题编辑后的数据判断</td>
</tr>
<tr>
<td>editpost_submit_end()</td>
<td>主题编辑后的数据处理</td>
</tr>
<tr>
<td>newreply_submit_end()</td>
<td>回帖后的数据处理</td>
</tr>
<tr>
<td>viewthread()</td>
<td>查看主题时页面新增的内容，通过 return 返回即可输出到主题首贴页面中</td>
</tr>
</tbody>
</table>
</div></template>


