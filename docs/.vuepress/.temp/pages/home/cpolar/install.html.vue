<template><div><h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h1>
<h2 id="一键自动安装脚本" tabindex="-1"><a class="header-anchor" href="#一键自动安装脚本"><span>一键自动安装脚本</span></a></h2>
<h3 id="安装说明" tabindex="-1"><a class="header-anchor" href="#安装说明"><span>安装说明</span></a></h3>
<ul>
<li>cpolar默认安装路径 /usr/local/bin/cpolar,</li>
<li>安装脚本会自动配置systemd服务脚本，启动以后，可以开机自启动。</li>
<li>如果第一次安装，会默认配置一个简单的样例配置文件，创建了两个样例隧道，一个web，一个ssh</li>
<li>cpolar配置文件路径: /usr/local/etc/cpolar/cpolar.yml</li>
</ul>
<h3 id="环境需求" tabindex="-1"><a class="header-anchor" href="#环境需求"><span>环境需求</span></a></h3>
<p>该脚本适用于Ubuntu16.04/18.04/20.04及以后，Centos7/8及以后版本，树莓派最新官方镜像，及支持systemd的新式Linux操作系统，该脚本会自动判断CPU架构（i386/amd64/mips/arm/arm64等等），自动下载对应cpolar客户端，并自动部署安装。</p>
<h3 id="安装-国内使用" tabindex="-1"><a class="header-anchor" href="#安装-国内使用"><span>安装（国内使用）</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> https://www.cpolar.com/static/downloads/install-release-cpolar.sh <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装-国外使用" tabindex="-1"><a class="header-anchor" href="#安装-国外使用"><span>安装（国外使用）</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sL</span> https://git.io/cpolar <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看版本号-有正常显示版本号即为安装成功" tabindex="-1"><a class="header-anchor" href="#查看版本号-有正常显示版本号即为安装成功"><span>查看版本号，有正常显示版本号即为安装成功</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>cpolar version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="token认证" tabindex="-1"><a class="header-anchor" href="#token认证"><span>TOKEN认证</span></a></h3>
<p>登录cpolar官网<a href="https://dashboard.cpolar.com/get-started" target="_blank" rel="noopener noreferrer">后台<ExternalLinkIcon/></a>，点击左侧的<code v-pre>验证</code>，查看自己的认证token，之后将token贴在命令行里</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>cpolar authtoken <span class="token operator">&lt;</span>YOUR_AUTHTOKEN<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="简单穿透测试" tabindex="-1"><a class="header-anchor" href="#简单穿透测试"><span>简单穿透测试</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>cpolar http <span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>按ctrl+c退出</p>
<h3 id="向系统添加服务" tabindex="-1"><a class="header-anchor" href="#向系统添加服务"><span>向系统添加服务</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> cpolar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="启动cpolar服务" tabindex="-1"><a class="header-anchor" href="#启动cpolar服务"><span>启动cpolar服务</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> systemctl start cpolar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看服务状态" tabindex="-1"><a class="header-anchor" href="#查看服务状态"><span>查看服务状态</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> systemctl status cpolar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="登录后台-查看隧道在线状态" tabindex="-1"><a class="header-anchor" href="#登录后台-查看隧道在线状态"><span>登录后台，查看隧道在线状态</span></a></h3>
<p>https://dashboard.cpolar.com/status</p>
<h3 id="安装完成" tabindex="-1"><a class="header-anchor" href="#安装完成"><span>安装完成</span></a></h3>
<p>可以参考系列文章进一步使用cpolar——<a href="https://www.cpolar.com/blog/build-a-website-on-ubuntu-system" target="_blank" rel="noopener noreferrer"><code v-pre>linux系列教程文章</code><ExternalLinkIcon/></a></p>
<h3 id="cpolar-web-ui" tabindex="-1"><a class="header-anchor" href="#cpolar-web-ui"><span>Cpolar Web UI</span></a></h3>
<p>cpolar web UI管理界面，默认端口为<code v-pre>9200</code>。如需修改默认端口号，请查阅常见问题下的相关教程进行修改。</p>
<p>cpolar本地安装成功后，可通过浏览器访问cpolar web UI管理界面，以【 http://本地ip地址:9200 】形式访问，如<a href="http://127.0.0.1:9200/" target="_blank" rel="noopener noreferrer">http://127.0.0.1:9200/<ExternalLinkIcon/></a>或<a href="http://localhost:9200/" target="_blank" rel="noopener noreferrer">http://localhost:9200/<ExternalLinkIcon/></a>均可访问到cpolar web ui管理界面【也可在同个局域网下不同的设备上进行访问】，使用cpolar账号登录即可。</p>
</div></template>


