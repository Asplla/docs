<template><div><h1 id="使用mysql数据库" tabindex="-1"><a class="header-anchor" href="#使用mysql数据库"><span>使用MYSQL数据库</span></a></h1>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2>
<p>Homeassistant正常运行后每天要产生大量传感器数据及日志，其各种事件及传感信息默认使用sqlite本地存储数据，随着数据量不断增加，系统性能也会受到影响。
现将数据保存到远程mysql数据库中，使得数据可长久化保存，为将来数据分析提供相应数据源。</p>
<h2 id="实现方法" tabindex="-1"><a class="header-anchor" href="#实现方法"><span>实现方法</span></a></h2>
<h3 id="mysql创建数据库和用户" tabindex="-1"><a class="header-anchor" href="#mysql创建数据库和用户"><span>MYSQL创建数据库和用户</span></a></h3>
<p>在MYSQL中创建 <strong>homeAssistant</strong> 数据库和用户名</p>
<h3 id="修改homeassistant配置文件" tabindex="-1"><a class="header-anchor" href="#修改homeassistant配置文件"><span>修改HomeAssistant配置文件</span></a></h3>
<ul>
<li>在HomeAssistant目录下的 <strong>configuration.yaml</strong> 配置文件新增下方代码</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">recorder</span><span class="token punctuation">:</span>
    <span class="token key atrule">db_url</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span>//USERNAME<span class="token punctuation">:</span>PASSWORD@SERVER_IP<span class="token punctuation">:</span>3306/DB_NAME<span class="token punctuation">?</span>charset=utf8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>替换 <strong>USERNAME</strong> <strong>PASSWORD</strong> <strong>SERVER_IP</strong> <strong>DB_NAME</strong></p>
<h3 id="重启homeassistant" tabindex="-1"><a class="header-anchor" href="#重启homeassistant"><span>重启HomeAssistant</span></a></h3>
<p>重启HomeAssistant后，相应的数据便迁移到了mysql远程数据库中。</p>
<h3 id="监测-mysql-数据库大小的-sensor" tabindex="-1"><a class="header-anchor" href="#监测-mysql-数据库大小的-sensor"><span>监测 MySQL 数据库大小的 sensor</span></a></h3>
<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">sensor</span><span class="token punctuation">:</span>
	<span class="token key atrule">platform</span><span class="token punctuation">:</span> sql
	<span class="token key atrule">db_url</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span>//USERNAME<span class="token punctuation">:</span>PASSWORD@SERVER_IP<span class="token punctuation">:</span>3306/information_schema
	<span class="token key atrule">queries</span><span class="token punctuation">:</span>
		<span class="token key atrule">name</span><span class="token punctuation">:</span> HOMEASSISTANT_DB_SIZE
		<span class="token key atrule">query</span><span class="token punctuation">:</span> “SELECT CONCAT(ROUND(SUM(DATA_LENGTH/1024/1024)<span class="token punctuation">,</span>2)) AS DB_SIZE FROM TABLES WHERE TABLE_SCHEMA='DB_NAME';”
		<span class="token key atrule">column</span><span class="token punctuation">:</span> <span class="token string">'DB_SIZE'</span>
		<span class="token key atrule">unit_of_measurement</span><span class="token punctuation">:</span> MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>替换 <strong>USERNAME</strong> <strong>PASSWORD</strong> <strong>SERVER_IP</strong> <strong>DB_NAME</strong> 可根据需要使用。</p>
</div></template>


