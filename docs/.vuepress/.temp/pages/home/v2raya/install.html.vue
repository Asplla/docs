<template><div><h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h1>
<p>v2rayA 的功能依赖于 V2Ray 内核，因此需要安装内核。</p>
<h2 id="通过软件源安装" tabindex="-1"><a class="header-anchor" href="#通过软件源安装"><span>通过软件源安装</span></a></h2>
<h3 id="添加公钥" tabindex="-1"><a class="header-anchor" href="#添加公钥"><span>添加公钥</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-qO</span> - https://apt.v2raya.org/key/public-key.asc <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/keyrings/v2raya.asc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="添加软件源" tabindex="-1"><a class="header-anchor" href="#添加软件源"><span>添加软件源</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">"deb [signed-by=/etc/apt/keyrings/v2raya.asc] https://apt.v2raya.org/ v2raya main"</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/v2raya.list <span class="token function">sudo</span> <span class="token function">apt</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装v2raya" tabindex="-1"><a class="header-anchor" href="#安装v2raya"><span>安装V2rayA</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token comment">## 也可以使用 xray 包</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> v2raya v2ray
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="手动安装" tabindex="-1"><a class="header-anchor" href="#手动安装"><span>手动安装</span></a></h2>
<p><a href="https://github.com/v2rayA/v2rayA/releases" target="_blank" rel="noopener noreferrer">从 Release 下载 v2rayA 的 deb 包<ExternalLinkIcon/></a> 后可以使用 Gdebi、QApt 等图形化工具来安装，也可以使用命令行：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token comment">### 自行替换 deb 包所在的实际路径</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> /path/download/installer_debian_xxx_vxxx.deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>V2Ray / Xray 的 deb 包可以在 <a href="https://github.com/v2rayA/v2raya-apt/tree/master/pool/main/" target="_blank" rel="noopener noreferrer">APT 软件源中<ExternalLinkIcon/></a> 找到。</p>
<h2 id="启动-v2raya" tabindex="-1"><a class="header-anchor" href="#启动-v2raya"><span>启动 v2rayA</span></a></h2>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> systemctl start v2raya.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="设置-v2raya-自动启动" tabindex="-1"><a class="header-anchor" href="#设置-v2raya-自动启动"><span>设置 v2rayA 自动启动</span></a></h2>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> v2raya.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用-nftables" tabindex="-1"><a class="header-anchor" href="#使用-nftables"><span>使用 nftables</span></a></h2>
<p>如果你的系统上已经有了 <code v-pre>nftables</code> 防火墙，那么 v2rayA 将优先使用 <code v-pre>nft</code> 命令来创建防火墙规则。可以使用 <code v-pre>--nftables-support</code> 参数或者 <code v-pre>V2RAYA_NFTABLES_SUPPORT</code> 来进行控制是否开启 nftables 支持。</p>
</div></template>


