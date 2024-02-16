<template><div><h1 id="一键脚本" tabindex="-1"><a class="header-anchor" href="#一键脚本"><span>一键脚本</span></a></h1>
<p>仅适用于 Linux amd64/arm64 平台。</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="更新" tabindex="-1"><a class="header-anchor" href="#更新"><span>更新</span></a></h2>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载"><span>卸载</span></a></h2>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s uninstall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="自定义路径" tabindex="-1"><a class="header-anchor" href="#自定义路径"><span>自定义路径</span></a></h2>
<p>默认安装在 <code v-pre>/opt/alist</code> 中。 自定义安装路径，将安装路径作为第二个参数添加，必须是绝对路径（如果路径以 alist 结尾，则直接安装到给定路径，否则会安装在给定路径 alist 目录下），如 安装到 <code v-pre>/root</code>：</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code># Install
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s install /root
# update
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s update /root
# Uninstall
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s uninstall /root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>启动: <code v-pre>systemctl start alist</code></li>
<li>关闭: <code v-pre>systemctl stop alist</code></li>
<li>状态: <code v-pre>systemctl status alist</code></li>
<li>重启: <code v-pre>systemctl restart alist</code></li>
</ul>
<h2 id="获取密码" tabindex="-1"><a class="header-anchor" href="#获取密码"><span>获取密码</span></a></h2>
<p>需要进入脚本安装AList的目录文件夹內执行如下命令</p>
<h4 id="低于v3-25-0版本" tabindex="-1"><a class="header-anchor" href="#低于v3-25-0版本"><span>低于v3.25.0版本</span></a></h4>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>./alist admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="高于v3-25-0版本" tabindex="-1"><a class="header-anchor" href="#高于v3-25-0版本"><span>高于v3.25.0版本</span></a></h4>
<p>3.25.0以上版本将密码改成加密方式存储的hash值，无法直接反算出密码，如果忘记了密码只能通过重新 <strong><code v-pre>随机生成</code></strong> 或者 <strong><code v-pre>手动设置</code></strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code># 随机生成一个密码
./alist admin random
# 手动设置一个密码,`NEW_PASSWORD`是指你需要设置的密码
./alist admin set NEW_PASSWORD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一直在加载怎么办" tabindex="-1"><a class="header-anchor" href="#一直在加载怎么办"><span>一直在加载怎么办?</span></a></h2>
<p>挂载了一些网盘但是不能用了重启了一下AList，发现进不去 网页提示：<code v-pre>获取设置失败：请稍后，正在加载存储</code>怎么办？</p>
<ol>
<li>等待几分钟</li>
<li>通过使用命令将<code v-pre>失效的/无法启动的</code>存储停止运行</li>
</ol>
<p>LinuxWindowsMacDocker其它</p>
<p>如果通过命令停止 ==必须先进入你AList所在的文件夹输入命令==</p>
<p>如果我们不知道是那个存储原因导致的，可以通过命令列出所有的存储</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>./alist storage list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>[root@OPSD-g8xXordx3B9f alist]# ./alist storage list
INFO[2023-11-23 17:54:10] reading config file: data/config.json
INFO[2023-11-23 17:54:10] load config from env with prefix: ALIST_
INFO[2023-11-23 17:54:10] init logrus...
INFO[2023-11-23 17:54:10] Found 2 storages
┌─────────────────────────────────────────────────────────────────┐
│ ID    Driver            Mount Path                      Enabled │
│─────────────────────────────────────────────────────────────────│
│ 1     S3                /R2                             true    │
│ 2     UrlTree           /233                            true    │
└─────────────────────────────────────────────────────────────────┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入查询命令后我们会进入另一种模式无法输入，如果添加的存储过多可以通过键盘的 ↑ 和 ↓ 来往下翻，等找到后可以按<code v-pre>Ctrl+C</code>退出</p>
<p>例如我们是因为 <code v-pre>233</code> 这个存储停止的，我们就输入命令来停止，然后在 重启一下AList就可以了</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>./alist storage disable /233
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>[root@OPSD-g8xXordx3B9f alist]# ./alist storage disable /233
INFO[2023-11-23 17:54:52] reading config file: data/config.json
INFO[2023-11-23 17:54:52] load config from env with prefix: ALIST_
INFO[2023-11-23 17:54:52] init logrus...
INFO[2023-11-23 17:54:52] Storage with mount path [/233] have been disabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


