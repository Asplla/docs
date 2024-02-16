<template><div><h1 id="模板风格创建" tabindex="-1"><a class="header-anchor" href="#模板风格创建"><span>模板风格创建</span></a></h1>
<h2 id="开启模板开发者模式" tabindex="-1"><a class="header-anchor" href="#开启模板开发者模式"><span>开启模板开发者模式</span></a></h2>
<p>开始设计一个新模板，请首先打开 config/config_global.php 文件，在文件结尾添加以下代码开启模板开发者模式。</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token variable">$_config</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'plugindeveloper'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="模板套系与风格区别" tabindex="-1"><a class="header-anchor" href="#模板套系与风格区别"><span>模板套系与风格区别</span></a></h2>
<p>模板套系：统一的一类模板，集中放置并打包的系列。<br>
模板风格：使用某个模板套系代码，仅改变其中变量设置的一个方案。<br>
（默认一个模板套系下就一个风格方案，通过“复制”功能，可以复制出不同的风格，进行不同的设置，比如改变logo设置）</p>
<h2 id="模板创建-基于最新版的教程" tabindex="-1"><a class="header-anchor" href="#模板创建-基于最新版的教程"><span>模板创建（基于最新版的教程）</span></a></h2>
<ul>
<li>
<p>首先进入<strong>后台 - 模板 - 设计新模板</strong></p>
</li>
<li>
<p>填写模板名称(name)，例如设置为“我的模板”</p>
</li>
<li>
<p>填写版权信息(copyright)，根据自己的情况填写版权信息</p>
</li>
<li>
<p>填写惟一标识符(identifier)，惟一标识符用于生成模板目录和后续提交模板到应用中心，不可与现有模板重复，命名规则限制与 PHP 变量命名相同，建议一次性将此配置设置好，否则可能涉及到很多代码方面的变更，增加编码的麻烦。请注意：惟一标识符请不要设置的过短，或使用有可能与其他模板重复的命名。会自动创建模板目录：template/标识符/。</p>
</li>
<li>
<p>初始化模板设置，使用已经存在的模板设置初始化本模板，或创建空白设置的模板</p>
</li>
<li>
<p>其他细节参考下边老教程的说明</p>
</li>
</ul>
<h2 id="模板创建-老版本dz的教程" tabindex="-1"><a class="header-anchor" href="#模板创建-老版本dz的教程"><span>模板创建（老版本dz的教程）</span></a></h2>
<h3 id="创建模板套系" tabindex="-1"><a class="header-anchor" href="#创建模板套系"><span>创建模板套系</span></a></h3>
<ul>
<li>首先进入<strong>后台 - 界面 - 模板管理</strong>，扩展制作模板时需要创建一个专属套系用来后期修改</li>
<li>基于“模板套系”可以扩展针对 ./template/default/ 目录中对的模板文件</li>
<li>创建套系的原则是不破坏原有模板基础上进行全新的扩展模板设计</li>
</ul>
<h4 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h4>
<ul>
<li>在站点根目录 ./template/中创建新的目录如” ./template/mytest”</li>
<li>在 mytest 目录中创建必要子目录与文件如：<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code>./template/mytest/common/
./template/mytext/common/extend_common.css
./template/mytext/common/extend_module.css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>其中common目录为公共模板目录，其内部新建的<strong>extend_common.css</strong>、<strong>extend_module.css</strong>为扩展型CSS文件，它们可以在./template/default/common/common.css的和module.css的基础上进行CSS代码的覆盖性扩展</li>
<li>如果需要替换论坛首页模板，可以新建 ./template/mytext/forum/discuz，或复制 ./template/default 中的对应文件放在 mytext 对应目录，以在缓存生成时覆盖原有模板缓存，达到修改模板而不破坏原生模板的目的</li>
</ul>
<h3 id="后台风格管理" tabindex="-1"><a class="header-anchor" href="#后台风格管理"><span>后台风格管理</span></a></h3>
<ul>
<li>进入<strong>后台 - 界面 - 风格管理</strong></li>
<li>“风格管理”可以对已有风格进行风格变量的编辑，也可以基于前面创建的“模板套系”来全新开辟新的风格</li>
</ul>
<h4 id="新建风格" tabindex="-1"><a class="header-anchor" href="#新建风格"><span>新建风格</span></a></h4>
<ul>
<li>后台风格管理中，可以通过<strong>新增</strong>和<strong>复制</strong>原有风格进行新建风格的操作</li>
<li>新建风格之后，需要编辑它，调整里面的“匹配模板”为上面创建的新套系即可</li>
</ul>
<h4 id="风格管理编辑页面中重点风格常量介绍" tabindex="-1"><a class="header-anchor" href="#风格管理编辑页面中重点风格常量介绍"><span>风格管理编辑页面中重点风格常量介绍</span></a></h4>
<ul>
<li>匹配模板：对应的模板套系</li>
<li>扩展配色：此风格基础上可用于用户切换配色方案的扩展，它对应 ./template/mytest/style/ 目录中的样式文件。全新创建时应在./template/mytest/style/目录中建立如t1/style.css之后方能生效</li>
<li>默认配色：指定站点访问时，用户首先看到的配色方案</li>
<li>默认表情分类：对应<strong>后台 - 界面 - 表情管理</strong>中所启用的表情</li>
<li>界面基础图片目录：可用于更改模板图片目录，在CSS文件中使用**{IMGDIR}**的常量进行输出，<strong>在Discuz! X2版本之后的模板中需要使用<code v-pre>$_G['style']['imgdir']</code></strong></li>
<li>扩展图片目录：用来更改扩展图片目录，在CSS文件中使用**{STYLEIMGDIR}**的常量进行输出，<strong>在Discuz! X2版本之后的模板中需要使用<code v-pre>$_G['style']['styleimgdir']</code></strong></li>
<li>其他风格常量：以上没有提到风格常量，均可以在后台取得以花括号框选的常量用以在CSS文件中使用（X2以后的模板中均需要<code v-pre>$_G['style']</code>中对应的数组键值），涉及到CSS样式的动态变更，可以在修改对应设置如：正常字体大小 <code v-pre>{FONTSIZE}:12px/1.5</code>，则直接修改程序运行中CSS缓存中的值</li>
<li>自定义模板变量 - 新增：可以根据扩展需求，针对个性化的CSS进行全局的定义</li>
</ul>
</div></template>


