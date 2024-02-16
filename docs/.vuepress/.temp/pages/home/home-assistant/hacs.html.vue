<template><div><h1 id="hacs组件" tabindex="-1"><a class="header-anchor" href="#hacs组件"><span>HACS组件</span></a></h1>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<p>首先，需要进入容器内部</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> homeassistant <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后运行 HACS 下载脚本</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-O</span> - https://get.hacs.xyz <span class="token operator">|</span> <span class="token function">bash</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


