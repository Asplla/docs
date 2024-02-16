<template><div><h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h1>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<p>Docker是一款开源的容器化应用程序，它可以将应用程序及其依赖项打包到一个容器中，从而实现跨平台、可移植性和自包含性。Docker越来越流行，成为云计算和容器化技术中的重要组成部分。</p>
<h2 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件"><span>前置条件</span></a></h2>
<p>在安装Docker之前，您应该检查以下要求是否已满足：</p>
<ul>
<li>确保操作系统为64位版本且内核版本不低于3.10；</li>
<li>确保操作系统为Linux系统，Windows系统需要先安装适用于本地环境的虚拟机管理器(VirtualBox等)，Mac系统需要先安装Homebrew工具；</li>
<li>确保您拥有sudo权限，这将允许您在系统中安装软件包。</li>
</ul>
<h2 id="安装步骤" tabindex="-1"><a class="header-anchor" href="#安装步骤"><span>安装步骤</span></a></h2>
<p>在完成前置条件之后，请按照以下步骤安装Docker：</p>
<h3 id="更新软件包" tabindex="-1"><a class="header-anchor" href="#更新软件包"><span>更新软件包</span></a></h3>
<p>在开始安装Docker之前，使用以下命令更新现有软件包:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update  
<span class="token function">sudo</span> <span class="token function">apt-get</span> upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装必要的软件包" tabindex="-1"><a class="header-anchor" href="#安装必要的软件包"><span>安装必要的软件包</span></a></h3>
<p>Docker需要一些必要的软件包才能正常运行，包括apt-transport-https，ca-certificates，curl，software-properties-common。使用以下命令安装这些软件包:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> apt-transport-https ca-certificates <span class="token function">curl</span> software-properties-common
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置docker官方gpg密钥" tabindex="-1"><a class="header-anchor" href="#配置docker官方gpg密钥"><span>配置Docker官方GPG密钥</span></a></h3>
<p>使用以下命令下载并添加Docker官方GPG密钥：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://repo.huaweicloud.com/docker-ce/linux/ubuntu/gpg <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置docker软件源" tabindex="-1"><a class="header-anchor" href="#配置docker软件源"><span>配置Docker软件源</span></a></h3>
<p>使用以下命令添加Docker软件源：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> add-apt-repository <span class="token string">"deb [arch=amd64] https://repo.huaweicloud.com/docker-ce/linux/ubuntu <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> stable"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker"><span>安装Docker</span></a></h3>
<p>使用以下命令安装Docker：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update  
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动docker" tabindex="-1"><a class="header-anchor" href="#启动docker"><span>启动Docker</span></a></h3>
<p>使用以下命令启动Docker服务：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="设置docker自动启动" tabindex="-1"><a class="header-anchor" href="#设置docker自动启动"><span>设置Docker自动启动</span></a></h3>
<p>使用以下命令设置Docker自动启动：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="验证docker安装是否成功" tabindex="-1"><a class="header-anchor" href="#验证docker安装是否成功"><span>验证Docker安装是否成功</span></a></h3>
<p>使用以下命令检查Docker版本：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果安装成功，您将看到Docker版本信息的输出。</p>
<h3 id="给用户添加docker权限" tabindex="-1"><a class="header-anchor" href="#给用户添加docker权限"><span>给用户添加Docker权限</span></a></h3>
<h4 id="创建docker用户组" tabindex="-1"><a class="header-anchor" href="#创建docker用户组"><span>创建Docker用户组</span></a></h4>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">groupadd</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="将目标用户添加到docker组" tabindex="-1"><a class="header-anchor" href="#将目标用户添加到docker组"><span>将目标用户添加到Docker组</span></a></h4>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> gpasswd <span class="token parameter variable">-a</span> <span class="token operator">&lt;</span>USERNAME<span class="token operator">></span> <span class="token function">docker</span>
newgrp <span class="token function">docker</span> <span class="token comment">#更新用户组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="更新用户组" tabindex="-1"><a class="header-anchor" href="#更新用户组"><span>更新用户组</span></a></h4>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>newgrp <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="测试是否可以正常使用" tabindex="-1"><a class="header-anchor" href="#测试是否可以正常使用"><span>测试是否可以正常使用</span></a></h4>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>至此，Docker的安装过程已经完成。</p>
<p>按照上述步骤完成安装后，您可以开始在Docker容器中运行应用程序。Docker的优点之一是其跨平台性，因此您可以在各种环境中使用它。</p>
</div></template>


