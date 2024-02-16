<template><div><h1 id="数据库设计" tabindex="-1"><a class="header-anchor" href="#数据库设计"><span>数据库设计</span></a></h1>
<h2 id="字段" tabindex="-1"><a class="header-anchor" href="#字段"><span>字段</span></a></h2>
<h3 id="表和字段命名" tabindex="-1"><a class="header-anchor" href="#表和字段命名"><span>表和字段命名</span></a></h3>
<p>表和字段的命名以前面《4.4命名原则》的约定为基本准则。 所有数据表名称，只要其名称是可数名词，则必须以复数方式命名，例如：<code v-pre>cdb_members</code>(用户表)、<code v-pre>cdb_posts</code>(帖子表)；存储多项内容的字段，或代表数量的字段，也应当以复数方式命名，例如：<code v-pre>params(parameters, vars, ...)</code>、<code v-pre>views(...)</code>、<code v-pre>replies(...)</code>。 当几个表间的字段有关连时，要注意表与表之间关联字段命名的统一，如<code v-pre>cdb_threads</code>表中的<code v-pre>tid</code>与<code v-pre>cdb_posts</code>表中的<code v-pre>tid</code>。 代表<code v-pre>id</code>自增量的字段，通常用以下几种形式： - 最常用的核心<code v-pre>id</code>，或经常在URL中进行调用的，尽量用简写的形式，例如<code v-pre>tid、pid、uid</code>；</p>
<ul>
<li>有功能性作用，URL中偶尔用到的<code v-pre>id</code>，使用全称的形式，例如 <code v-pre>pluginid</code> ；</li>
<li>没有功能性作用，只为管理和维护方便而设的<code v-pre>id</code>，可以使用全称的形式，也可只将其命名为<code v-pre>id</code>。</li>
</ul>
<p>所有与表、字段相关的命名，请务必大量参考Discuz!现有字段的命名方式，以保证命名的系统性和统一性。</p>
<h3 id="字段结构" tabindex="-1"><a class="header-anchor" href="#字段结构"><span>字段结构</span></a></h3>
<ul>
<li>允许<code v-pre>NULL</code>值的字段，数据库在进行比较操作时，会先判断其是否为<code v-pre>NULL</code>，非<code v-pre>NULL</code>时才进行值的比对。因此基于效率的考虑，所有字段均不能为空，即全部<code v-pre>NOT NULL</code>；</li>
<li>预计不会存储非负数的字段，例如各项<code v-pre>id</code>、发帖数等，必须设置为<code v-pre>UNSIGNED</code>类型。<code v-pre>UNSIGNED</code>类型比非<code v-pre>UNSIGNED</code>类型所能存储的正整数范围大一倍，因此能获得更大的数值存储空间；</li>
<li>存储开关、选项数据的字段，通常使用<code v-pre>tinyint(1)</code>非<code v-pre>UNSIGNED</code>类型，少数情况也可能使用<code v-pre>enum()</code>结果集的方式。<code v-pre>tinyint</code>作为开关字段时，通常1为打开；0为关闭；-1为特殊数据，例如N/A(不可用)；高于1的为特殊结果或开关二进制数组合(详见Discuz!中相关代码)；</li>
<li><code v-pre>MEMORY/HEAP</code>类型的表中，要尤其注意规划节约使用存储空间，这将节约更多内存。例如 <code v-pre>cdb_sessions</code> 表中，就将IP地址的存储拆分为4个<code v-pre>tinyint(3) UNSIGNED</code>类型的字段，而没有采用 <code v-pre>char(15)</code> 的方式；</li>
<li>任何类型的数据表，字段空间应当本着足够用，不浪费的原则，数值类型的字段取值范围见下表：</li>
</ul>
<table>
<thead>
<tr>
<th><strong>字段类型</strong></th>
<th><strong>存储空间(b)</strong></th>
<th><strong>UNSIGNED</strong></th>
<th><strong>取值范围</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>tinyint</td>
<td>1</td>
<td>否</td>
<td>-128~127</td>
</tr>
<tr>
<td></td>
<td></td>
<td>是</td>
<td>0~255</td>
</tr>
<tr>
<td>smallint</td>
<td>2</td>
<td>否</td>
<td>-32768~32767</td>
</tr>
<tr>
<td></td>
<td></td>
<td>是</td>
<td>0~65535</td>
</tr>
<tr>
<td>mediumint</td>
<td>3</td>
<td>否</td>
<td>-8388608~8388607</td>
</tr>
<tr>
<td></td>
<td></td>
<td>是</td>
<td>0~16777215</td>
</tr>
<tr>
<td>int</td>
<td>4</td>
<td>否</td>
<td>-2147483648~2147483647</td>
</tr>
<tr>
<td></td>
<td></td>
<td>是</td>
<td>0~4294967295</td>
</tr>
<tr>
<td>bigint</td>
<td>8</td>
<td>否</td>
<td>-9223372036854775808~9223372036854775807</td>
</tr>
<tr>
<td></td>
<td></td>
<td>是</td>
<td>0~18446744073709551615</td>
</tr>
</tbody>
</table>
<h2 id="sql语句" tabindex="-1"><a class="header-anchor" href="#sql语句"><span>SQL语句</span></a></h2>
<ul>
<li>所有SQL语句中，除了表名、字段名称以外，全部语句和函数均需大写，应当杜绝小写方式或大小写混杂的写法。例如 <code v-pre>select * from cdb_members;</code> 是不符合规范的写法。</li>
<li>很长的SQL语句应当有适当的断行，依据<code v-pre>JOIN、FROM</code>、<code v-pre>ORDER BY</code>等关键字进行界定。</li>
<li>通常情况下，在对多表进行操作时，要根据不同表名称，对每个表指定一个1~2个字母的缩写，以利于语句简洁和可读性。</li>
</ul>
<p>如下的语句范例，是符合规范的：</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code>$query <span class="token operator">=</span> $db<span class="token operator">-</span><span class="token operator">></span>query<span class="token punctuation">(</span>"<span class="token keyword">SELECT</span> s<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span> m<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">FROM</span> {$tablepre}sessions s<span class="token punctuation">,</span> {$tablepre}members m <span class="token keyword">WHERE</span> m<span class="token punctuation">.</span>uid<span class="token operator">=</span>s<span class="token punctuation">.</span>uid <span class="token operator">AND</span> s<span class="token punctuation">.</span>sid<span class="token operator">=</span><span class="token string">'$sid'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="性能与效率" tabindex="-1"><a class="header-anchor" href="#性能与效率"><span>性能与效率</span></a></h2>
<h3 id="定长与变长表" tabindex="-1"><a class="header-anchor" href="#定长与变长表"><span>定长与变长表</span></a></h3>
<p>包含任何 <code v-pre>varchar</code>、<code v-pre>text</code> 等变长字段的数据表，即为变长表，反之则为定长表。</p>
<ul>
<li>
<p>对于变长表，由于记录大小不同，在其上进行许多删除和更改将会使表中的碎片更多。需要定期运行 <code v-pre>OPTIMIZE TABLE</code> 以保持性能。而定长表就没有这个问题；</p>
</li>
<li>
<p>如果表中有可变长的字段，将它们转换为定长字段能够改进性能，因为定长记录易于处理。但在试图这样做之前，应该考虑下列问题：</p>
</li>
<li>
<p>使用定长列涉及某种折衷。它们更快，但占用的空间更多。char(n) 类型列的每个值总要占用n 个字节(即使空串也是如此)，因为在表中存储时，值的长度不够将在右边补空格；</p>
</li>
<li>
<p>而varchar(n)类型的列所占空间较少，因为只给它们分配存储每个值所需要的空间，每个值再加一个字节用于记录其长度。因此，如果在char和varchar类型之间进行选择，需要对时间与空间作出折衷；</p>
</li>
<li>
<p>变长表到定长表的转换，不能只转换一个可变长字段，必须对它们全部进行转换。而且必须使用一个ALTER TABLE语句同时全部转换，否则转换将不起作用；</p>
</li>
<li>
<p>有时不能使用定长类型，即使想这样做也不行。例如对于比255字符更长的串，没有定长类型；</p>
</li>
<li>
<p>在设计表结构时如果能够使用定长数据类型尽量用定长的，因为定长表的查询、检索、更新速度都很快。必要时可以把部分关键的、承担频繁访问的表拆分，例如定长数据一个表，非定长数据一个表。例如<code v-pre>Discuz!</code>的<code v-pre>cdb_members</code>和<code v-pre>cdb_memberfields</code>、<code v-pre>cdb_forums</code>和<code v-pre>cdb_forumfields</code>表等。因此规划数据结构时需要进行全局考虑；</p>
</li>
</ul>
<p>进行表结构设计时，应当做到恰到好处，反复推敲，从而实现最优的数据存储体系。</p>
<h3 id="运算与检索" tabindex="-1"><a class="header-anchor" href="#运算与检索"><span>运算与检索</span></a></h3>
<ul>
<li>
<p>数值运算一般比字符串运算更快。例如比较运算，可在单一运算中对数进行比较。而串运算涉及几个逐字节的比较，如果串更长的话，这种比较还要多。</p>
</li>
<li>
<p>如果串列的值数目有限，应该利用普通整型或<code v-pre>emum</code>类型来获得数值运算的优越性。</p>
</li>
<li>
<p>更小的字段类型永远比更大的字段类型处理要快得多。对于字符串，其处理时间与串长度直接相关。一般情况下，较小的表处理更快。对于定长表，应该选择最小的类型，只要能存储所需范围的值即可。例如，如果<code v-pre>mediumint</code>够用，就不要选择<code v-pre>bigint</code>。对于可变长类型，也仍然能够节省空间。一个 <code v-pre>TEXT</code> 类型的值用2 字节记录值的长度，而一个 <code v-pre>LONGTEXT</code> 则用4字节记录其值的长度。如果存储的值长度永远不会超过64KB，使用 <code v-pre>TEXT</code> 将使每个值节省2字节。</p>
</li>
</ul>
<h3 id="结构优化与索引优化" tabindex="-1"><a class="header-anchor" href="#结构优化与索引优化"><span>结构优化与索引优化</span></a></h3>
<p>索引能加快查询速度，而索引优化和查询优化是相辅相成的，既可以依据查询对索引进行优化，也可以依据现有索引对查询进行优化，这取决于修改查询或索引，哪个对现有产品架构和效率的影响最小。 索引优化与查询优化是多年经验积累的结晶，在此无法详述，但仍然给出几条最基本的准则。 首先，根据产品的实际运行和被访问情况，找出哪些SQL语句是最常被执行的。最常被执行和最常出现在程序中是完全不同的概念。最常被执行的SQL语句，又可被划分为对大表(数据条目多的)和对小表(数据条目少的)的操作。无论大表或小表，又可分为读<code v-pre>(SELECT)</code>多、写<code v-pre>(UPDATE/INSERT)</code>多或读写都多的操作。 对常被执行的SQL语句而言，对大表操作需要尤其注意：</p>
<ul>
<li>写操作多的，通常可使用写入缓存的方法，先将需要写或需要更新的数据缓存至文件或其他表，定期对大表进行批量写操作，例如Discuz!中点击数延迟更新机制，就是依据此原理实现。同时，应尽量使得常被读写的大表为定长类型，即便原本的结构中大表并非定长。大表定长化，可以通过改变数据存储结构和数据读取方式，将一个大表拆成一个读写多的定长表，和一个读多写少的变长表来实现；</li>
<li>读操作多的，需要依据SQL查询频率设置专门针对高频SQL语句的索引和联合索引。</li>
</ul>
<p>而小表就相对简单，加入符合查询要求的特定索引，通常效果比较明显。同时，定长化小表也有益于效率和负载能力的提高。字段比较少的小定长表，甚至可以不需要索引。</p>
<p>其次，看SQL语句的条件和排序字段是否动态性很高(即根据不同功能开关或属性，SQL查询条件和排序字段的变化很大的情况)，动态性过高的SQL语句是无法通过索引进行优化的。惟一的办法只有将数据缓存起来，定期更新，适用于结果对实效性要求不高的场合。 MySQL索引，常用的有<code v-pre>PRIMARY KEY</code>、<code v-pre>INDEX</code>、<code v-pre>UNIQUE</code>几种，详情请查阅MySQL文档。通常，在单表数据值不重复的情况下，<code v-pre>PRIMARY KEY</code>和<code v-pre>UNIQUE</code>索引比<code v-pre>INDEX</code>更快，请酌情使用。</p>
<p>事实上，索引是将条件查询、排序的读操作资源消耗，分布到了写操作中，索引越多，耗费磁盘空间越大，写操作越慢。因此，索引决不能盲目添加。对字段索引与否，最根本的出发点，依次仍然是SQL语句执行的概率、表的大小和写操作的频繁程度。</p>
<h3 id="查询优化" tabindex="-1"><a class="header-anchor" href="#查询优化"><span>查询优化</span></a></h3>
<p>MySQL中并没有提供针对查询条件的优化功能，因此需要开发者在程序中对查询条件的先后顺序人工进行优化。例如如下的SQL语句：</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">table</span> <span class="token keyword">WHERE</span> a<span class="token operator">></span><span class="token string">'0'</span> <span class="token operator">AND</span> b<span class="token operator">&lt;</span><span class="token string">'1'</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> c <span class="token keyword">LIMIT</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>事实上无论<code v-pre>a&gt;'0'</code>还是<code v-pre>b&lt;'1'</code>哪个条件在前，得到的结果都是一样的，但查询速度就大不相同，尤其在对大表进行操作时。 开发者需要牢记这个原则：最先出现的条件，一定是过滤和排除掉更多结果的条件；第二出现的次之；以此类推。因而，表中不同字段的值的分布，对查询速度有着很大影响。而<code v-pre>ORDER BY</code>中的条件，只与索引有关，与条件顺序无关。 除了条件顺序优化以外，针对固定或相对固定的SQL查询语句，还可以通过对索引结构进行优化，进而实现相当高的查询速度。原则是：在大多数情况下，根据 <code v-pre>WHERE</code> 条件的先后顺序和 <code v-pre>ORDER BY</code> 的排序字段的先后顺序而建立的联合索引，就是与这条SQL语句匹配的最优索引结构。尽管，事实的产品中不能只考虑一条SQL语句，也不能不考虑空间占用而建立太多的索引。 同样以上面的SQL语句为例，最优的当table表的记录达到百万甚至千万级后，可以明显的看到索引优化带来的速度提升。 依据上面条件优化和索引优化的两个原则，当table表的值为如下方案时，可以得出最优的条件顺序方案：</p>
<table>
<thead>
<tr>
<th>字段a</th>
<th>字段b</th>
<th>字段c</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>7</td>
<td>11</td>
</tr>
<tr>
<td>2</td>
<td>8</td>
<td>10</td>
</tr>
<tr>
<td>3</td>
<td>9</td>
<td>13</td>
</tr>
</tbody>
</table>
<p>最优条件：<code v-pre>b&lt;'1' AND a&gt;'0'</code> 最优索引：<code v-pre>INDEX abc (b, a, c)</code> 原因：<code v-pre>b&lt;'1'</code> 作为第一条件可以先过滤掉75%的结果。如果以 <code v-pre>a&gt;'0'</code> 作为第一条件，则只能先过滤掉25%的结果</p>
<p><strong>注意：</strong></p>
<ul>
<li>字段c由于未出现于条件中，故条件顺序优化与其无关</li>
<li>最优索引由最优条件顺序得来，而非由例子中的SQL语句得来</li>
<li>索引并非修改数据存储的物理顺序，而是通过对应特定偏移量的物理数据而实现的虚拟指针</li>
</ul>
<p><code v-pre>EXPLAIN</code>语句是检测索引和查询能否良好匹配的简便方法。在<code v-pre>phpMyAdmin</code>或其他MySQL客户端中运行<code v-pre>EXPLAIN+</code>查询语句，例如<code v-pre>EXPLAIN SELECT * FROM table WHERE a&gt;'0' AND b&lt;'1' ORDER BY c;</code>这种形式，即使得开发者无需模拟上百万条数据，也可以验证索引是否合理，相关细节请参考MySQL说明。 值得提出的是，<code v-pre>Using filesort</code>是最不应当出现的情况，如果<code v-pre>EXPLAIN</code>得出此结果，说明数据库为这个查询专门建立了一个用以缓存结果的临时表文件，并在查询结束后删除。众所周知，硬盘I/O速度始终是计算机存储的瓶颈，因此，查询中应当尽全力避免高执行频率的SQL语句使用<code v-pre>filesort</code>。尽管，开发者永远都不可能保证产品中的全部SQL语句都不会使用<code v-pre>filesort</code>。 限于篇幅，本文档远远没有涵盖数据库优化的方方面面，例如：联合索引与普通索引的可重用性、<code v-pre>JOIN</code>连接的索引设计、<code v-pre>MEMORY/HEAP</code>表等。数据库优化实际上就是在很多因素和利弊间不断权衡、修改，惟有在成功与失败经验中反复推敲才能得出的经验，这种经验往往就是最难能可贵和价值连城的。</p>
<h3 id="兼容性问题" tabindex="-1"><a class="header-anchor" href="#兼容性问题"><span>兼容性问题</span></a></h3>
<ul>
<li>由于MySQL 3.23至5.0的变化很大，因此程序中尽量不使用特殊的SQL语句，以免带来兼容性问题，并给数据库移植造成困难。</li>
<li>通常在MySQL 4.1以上版本，<code v-pre>Discuz!</code>应使用相当的字符集来存储，例如<code v-pre>GBK/BIG5/UTF-8</code>。传统的<code v-pre>latin1</code>编码虽然有一定的兼容性，但仍然不是推荐的选择。使用相应非默认字符集时，程序每次运行时需要使用 <code v-pre>SET NAMES 'character_set';</code> 来规定连接、传输和结果的字符集。</li>
<li>Mysql 5.0以上新增了数种<code v-pre>SQL_MODE</code>，默认的<code v-pre>SQL_MODE</code>依服务器安装设置不同而不同，因此程序每次运行时需要使用<code v-pre>SET SQL_MODE='';</code>来规定当前的SQL模式。</li>
</ul>
<h1 id="模板设计" tabindex="-1"><a class="header-anchor" href="#模板设计"><span>模板设计</span></a></h1>
<h2 id="代码标记" tabindex="-1"><a class="header-anchor" href="#代码标记"><span>代码标记</span></a></h2>
<p>HTML代码标记一律采用小写字母形式，杜绝任何使用大写字母的方式 模板中所有的逻辑体，如<code v-pre>{if}</code>、<code v-pre>{loop}</code>等，必须前后使用HTML注释<code v-pre>()</code>，即类似的形式。事实上，Discuz!模板编译器是支持不加HTML注释的逻辑体写法的，但加入注释可以使得模板可读性更好，同时方便用户使用<code v-pre>DreamWeaver</code>或<code v-pre>VSCODE</code>等对模板进行修改。 在HTML标记中使用的逻辑体无需使用HTML注释()，即：<code v-pre>&lt;input type=&quot;text&quot;{if xxx} value=&quot;1&quot;{/if} /&gt;</code></p>
<h2 id="书写规则" tabindex="-1"><a class="header-anchor" href="#书写规则"><span>书写规则</span></a></h2>
<h3 id="html" tabindex="-1"><a class="header-anchor" href="#html"><span>HTML</span></a></h3>
<p>所有HTML标记参数赋值需使用双引号包含，例如，应当使用<code v-pre>&lt;input type=&quot;text&quot; name=&quot;test&quot; value=&quot;ok&quot; /&gt;</code>,而绝对不能使用<code v-pre>&lt;input type=text name=test value=ok /&gt;</code>。 在任何情况下，产品中的模板文件必须采用手写HTML代码的方式，而绝对不能使用<code v-pre>DreamWeaver、VSCODE</code>等自动网页制作工具进行撰写或修改。 非成对标记必须以”/&gt;”结尾，如：<br>
<code v-pre>&lt;input …/&gt;</code>,<code v-pre>&lt;input /&gt;</code> 标记的属性必须按照以下顺序书写：<code v-pre>&lt;input type=&quot;&quot; name=&quot;&quot; id=&quot;&quot; class=&quot;&quot; … /&gt;</code></p>
<h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h3>
<p>模板中使用的变量，依据作用和出现位置不同，分为几种方式： - 逻辑体中，即被包围起来的部分，例如这种形式，其中的变量书写规范与PHP程序中完全一致；</p>
<ul>
<li>模板内容中，即未被包围起来的部分，与PHP程序中最大的不同是，对数组字符串类型下标无需加入单引号，因为Discuz!模板编译器会在对模板进行编译时将这部分的单引号自动加入。</li>
</ul>
<p>偶尔的，开发者需要使用<code v-pre>{}</code>将变量括起来，以免出现模板编译错误，可能的情况如下：</p>
<ul>
<li>变量前后含有中括号的或其他敏感字符的(包括但不限于<code v-pre>&quot;$&quot;、&quot;'&quot;</code>等)，正确的写法为<code v-pre>$descriptionnew[{$buddy['buddyid']}];</code>；</li>
<li>数组的下标为变量的，正确的写法为<code v-pre>{$extcredits[$creditstrans]['title']}</code>；</li>
<li>其他变量十分复杂的情况。</li>
</ul>
<h3 id="语言元素" tabindex="-1"><a class="header-anchor" href="#语言元素"><span>语言元素</span></a></h3>
<p>Discuz!模板编译器可以解析对应于<code v-pre>./templates/default/templates.lang.php</code>(以默认模板为例)的语言元素。在模板中调用相应语言元素的代码为<code v-pre>{lang item}</code>，其中<code v-pre>item</code>为在<code v-pre>templates.lang.php</code>中定义的语言元素名。</p>
<h3 id="缩进" tabindex="-1"><a class="header-anchor" href="#缩进"><span>缩进</span></a></h3>
<p>在Discuz!的模板文件中，由于具备逻辑结构，故不考虑任何HTML本身的缩进，所有缩进均意为着逻辑上的缩进结构。缩进采用TAB方式，不使用空格作为缩进符号，仅需适当断行即可。例如：</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--{loop $threadlist $thread}--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">cellspacing</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">cellspadding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>$thread[message]<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--{/loop}--></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="文件与目录" tabindex="-1"><a class="header-anchor" href="#文件与目录"><span>文件与目录</span></a></h1>
<h2 id="文件命名" tabindex="-1"><a class="header-anchor" href="#文件命名"><span>文件命名</span></a></h2>
<p>所有包含PHP代码的程序文件或半程序文件，应以小写.php作为扩展名，而不要使用<code v-pre>.phtml</code>、<code v-pre>.php3</code>、<code v-pre>.inc</code>、<code v-pre>.class</code>等作为扩展名。</p>
<p><strong>普通程序</strong><br>
能够被URL直接调用的程序，例如<code v-pre>home.php、index.php、forum.php</code>，直接使用程序名<code v-pre>+.php</code>的方式命名</p>
<p><strong>函数库和类库程序</strong><br>
分别以小写<code v-pre>function_xxxx.php</code>和<code v-pre>class_xxxx.php</code>的格式命名书写。函数库和类库程序只能被其他程序引用，而不能独立运行。其中不能包含任何流程性的、不属于任何函数或类的程序代码。</p>
<p><strong>流程性程序</strong><br>
以小写<code v-pre>.inc.php</code>作为扩展名。只能被其他程序引用，而不能独立运行。其中不能包含任何函数或类代码的程序代码。</p>
<p><strong>模板源文件</strong><br>
以小写作为扩展名。模板源文件按照<code v-pre>Discuz!</code>模板编码规则进行编写，不是可以执行的程序，而只能被Discuz!模板编译器所解析，放置于<code v-pre>./templates/default</code>或<code v-pre>./templates</code>下的其他模板目录下。</p>
<p><strong>模板目标文件</strong><br>
模板文件被编译后自动生成的目标程序，以小写<code v-pre>.tpl.php</code>作为扩展名，存放于./data/template目录下。</p>
<p><strong>语言包文件</strong></p>
<ul>
<li>以小写lang_xxxx.php格式命名，只能存放模板或程序使用的语言包信息。</li>
<li>模板语言包存放在对应模块名下的<code v-pre>lang_template.php</code>，例如：家园的模板语言包<code v-pre>source\language\home\lang_template.php</code></li>
</ul>
<p><strong>缓存文件</strong><br>
此类文件为系统自动生成，以<code v-pre>cache_xxx.php</code>、<code v-pre>usergroup_xxx.php</code>、<code v-pre>style_xxx.php</code>等类似形式命名，存放于<code v-pre>./data/cache</code>目录下。</p>
<h2 id="目录命名" tabindex="-1"><a class="header-anchor" href="#目录命名"><span>目录命名</span></a></h2>
<ul>
<li>Discuz!目录命名以前面《4.4命名原则》的约定为基本准则。在可能的情况下，多以复数形式出现，如 <code v-pre>./templates</code>、<code v-pre>./images</code> 等。</li>
<li>由于目录数量较少，因此目录命名大多是一些习惯和约定俗成，开发人员如需新建目录，应与项目组成员进行磋商，达成一致后方可实施。</li>
</ul>
<p>附：<a href="https://open.dismall.com/?ac=document&amp;page=dir_index" target="_blank" rel="noopener noreferrer">程序目录索引<ExternalLinkIcon/></a></p>
<h2 id="空目录索引" tabindex="-1"><a class="header-anchor" href="#空目录索引"><span>空目录索引</span></a></h2>
<ul>
<li>请在所有不包含普通程序(即能够被URL直接调用的程序)的目录中放置一个1字节的<code v-pre>index.htm</code>文件，内容为一个空格。几乎除Discuz!根目录以外，所有目录都属于这一类型，因此开发者需要在这些目录全部放入空<code v-pre>index.htm</code>文件，以避免当http服务器的目录列表打开时，服务器文件被索引和列表。</li>
<li>附件目录等敏感目录，要在程序中实现相应功能，当新建下级目录时，必须自动写入一个空的<code v-pre>index.htm</code>文件，以避免新建目录被索引的问题。</li>
</ul>
</div></template>


