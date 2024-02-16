import{_ as a,r as t,o as l,c as d,a as i,d as n,b as r,e}from"./app-77oj9XKw.js";const o={},c=e(`<h1 id="页面嵌入" tabindex="-1"><a class="header-anchor" href="#页面嵌入"><span>页面嵌入</span></a></h1><h2 id="页面嵌入类型脚本格式" tabindex="-1"><a class="header-anchor" href="#页面嵌入类型脚本格式"><span>页面嵌入类型脚本格式</span></a></h2><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">//全局嵌入点类（必须存在）</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">plugin_identifier</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function-definition function">HookId_1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token operator">...</span>
        <span class="token keyword">return</span> <span class="token operator">...</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function-definition function">HookId_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token operator">...</span>
        <span class="token keyword">return</span> <span class="token operator">...</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token operator">...</span><span class="token operator">...</span>
<span class="token punctuation">}</span>
<span class="token comment">//脚本嵌入点类</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">plugin_identifier_CURSCRIPT</span> <span class="token keyword">extends</span> <span class="token class-name">plugin_identifier</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function-definition function">HookId_1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token operator">...</span>
        <span class="token keyword">return</span> <span class="token operator">...</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function-definition function">HookId_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token operator">...</span>
        <span class="token keyword">return</span> <span class="token operator">...</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token operator">...</span><span class="token operator">...</span>
<span class="token punctuation">}</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="plugin" tabindex="-1"><a class="header-anchor" href="#plugin"><span>plugin_</span></a></h3><blockquote><p>普通版脚本中的类名以 <code>plugin_</code> 开头。手机版脚本中的类名以 mobileplugin_ 开头。</p></blockquote><h3 id="identifier" tabindex="-1"><a class="header-anchor" href="#identifier"><span>identifier</span></a></h3><blockquote><p>插件的唯一标识符，在插件设置中设置。</p></blockquote><h3 id="curscript" tabindex="-1"><a class="header-anchor" href="#curscript"><span>CURSCRIPT</span></a></h3><blockquote><p>嵌入点位于的脚本名，如 forum.php 为 forum。</p></blockquote><p>X3.4 最新版本开始支持plugin.php为CURSCRIPT的插件之间的hook调用，CURSCRIPT值为plugin。New!</p><h3 id="hookid" tabindex="-1"><a class="header-anchor" href="#hookid"><span>HookId</span></a></h3><table><thead><tr><th>函数名</th><th>调用位置</th><th>声明位置</th><th>参数含义</th></tr></thead><tbody><tr><td>HookId()</td><td>所有模块执行前被调用</td><td>脚本嵌入点类</td><td></td></tr><tr><td>HookId_output($value)</td><td>模块执行完毕，模板输出前被调用</td><td>脚本嵌入点类</td><td>$value: array( <br>‘template’ =&gt; 当前要输出的模版, <br>‘message’ =&gt; showmessage 的信息内容, <br>‘values’ =&gt; showmessage 的信息变量, <br>)</td></tr><tr><td>global_HookId()</td><td>模块执行完毕，模板输出前被调用</td><td>全局嵌入点类</td><td></td></tr><tr><td>HookId_message($value)</td><td>showmessage() 执行时调用</td><td>脚本嵌入点类</td><td>$value: array( <br>‘param’ =&gt; showmessage() 函数的参数数组, <br>)</td></tr><tr><td>ad_adId($value)</td><td>相应的广告位中调用 <br>函数名为广告位脚本 ID <br>如：ad_headerbanner()</td><td>全局嵌入点类 <br>脚本嵌入点类</td><td>&gt;$value: array( <br>‘params’ =&gt; 广告位参数, <br>‘content’ =&gt; 当前广告位原本将要显示的内容, <br>)</td></tr><tr><td>common()</td><td>所有模块执行前被调用</td><td>全局嵌入点类</td><td></td></tr><tr><td>discuzcode($value)</td><td>discuzcode() 函数执行时调用 <br>用于在帖子内容解析时嵌入自己的功能，函数中 <code>$_G[&#39;discuzcodemessage&#39;]</code> 变量为待解析的字串</td><td>全局嵌入点类</td><td>$value: array( <br>‘param’ =&gt; caller 函数的参数数组, <br>‘caller’ =&gt; caller 函数，此嵌入点被哪个函数调用 <br>‘discuzcode’ 被 discuzcode() 调用 <br>‘messagecutstr’ 被 messagecutstr() 调用 <br>)</td></tr><tr><td>deletethread($value)</td><td>deletethread() 函数执行时调用 <br>用于在主题删除前后嵌入自己的功能，此函数将在 deletethread() 中被调用 2 次，函数中 <code>$_G[&#39;deletethreadtids&#39;]</code> 变量为待处理的 TID 数组</td><td>全局嵌入点类</td><td>$value: array( <br>‘param’ =&gt; deletethread() 函数的参数数组, <br>‘step’ =&gt; 删除的步骤 <br>‘check’ 检测步骤 <br>‘delete’ 删除步骤 <br>)</td></tr><tr><td>deletepost($value)</td><td>deletepost() 函数执行时调用 <br>用于在帖子删除前后嵌入自己的功能，此函数将在 deletepost() 中被调用 2 次，函数中 <code>$_G[&#39;deletepostids&#39;]</code> 变量为待处理的 ID 数组</td><td>全局嵌入点类</td><td>$value: array( <br>‘param’ =&gt; deletepost() 函数的参数数组, <br>‘step’ =&gt; 删除的步骤 <br>‘check’ 检测步骤 <br>‘delete’ 删除步骤 <br>)</td></tr><tr><td>avatar($value) <br>(X2.5 新增)</td><td>avatar() 函数执行时调用 <br>用于在头像调用时嵌入自己的功能，函数中 <code>$_G[&#39;hookavatar&#39;]</code> 变量为新头像返回值</td><td>全局嵌入点类</td><td>$value: array( <br>‘param’ =&gt; avatar() 函数的参数数组 <br>)</td></tr><tr><td>profile_node($post, $start, $end) <br>(X3.0 新增)</td><td>贴内用户信息标记，返回值为标记显示内容</td><td>全局嵌入点类</td><td>$post: 当前帖子信息数组 <br>$start: 用户填写的前置字符 <br>$end: 用户填写的后置字符</td></tr><tr><td>identifier__hookid(_output)() <br>(X3.4 新增New!)</td><td>插件的hook调用 <br>identifier为输出对象的应用ID，hookid为输出对象应用自定义的hook名称 <br>其他使用方法参考HookId()以及HookId_output($value)</td><td>脚本嵌入点类 <br>应用互动嵌入点类</td><td>参数含义</td></tr></tbody></table>`,12),v=i("code",null,"<hook>",-1),m={href:"https://open.dismall.com/?ac=document&page=plugin_hooklist",target:"_blank",rel:"noopener noreferrer"},u=e(`<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token variable">$_config</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;plugindeveloper&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>预定义的嵌入点会在页面预置好的位置输出函数返回的内容。函数返回值类型如果是 array 且是空值的，必须输出一个空数组，如：</p></blockquote><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>函数名并不限于以上列表，您可以自定义，只要符合以下规则，函数就会在适当的地方被调用。</p></blockquote><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">function</span> <span class="token constant">CURMODULE_USERDEFINE</span><span class="token punctuation">[</span>_output<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>CURMODULE 指明了此函数在哪个模块执行，可通过常量 CURMODULE 得到当前页面的 CURMODULE 值。<br> USERDEFINE 可自定义，如果函数名以“_output”结尾则会在模板输出前调用，否则会在模块执行前调用。</p></blockquote><p>如：attachment_test() 函数会在论坛的下载附件的时候执行。</p><blockquote><p>“_output”结尾的函数的第一个参数为数组，含义为 array(‘template’ =&gt; 要输出的模板名, ‘message’ =&gt; showmessage 的文字)</p></blockquote><p>如：以下函数将在登录的时候输出调试文字</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">function</span> <span class="token function-definition function">logging_test_output</span><span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$_POST</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>plugin_identifier 类中的其它函数为了便于阅读建议以“_”开头，如：</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">plugin_sample</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function-definition function">_updatecache</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token operator">...</span>
        <span class="token keyword">return</span> <span class="token operator">...</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">plugin_sample_forum</span> <span class="token keyword">extends</span> <span class="token class-name">plugin_sample</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function-definition function">viewthread_posttop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token operator">...</span>
        <span class="token keyword">return</span> <span class="token operator">...</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token operator">...</span><span class="token operator">...</span>
<span class="token punctuation">}</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插件嵌入点列表" tabindex="-1"><a class="header-anchor" href="#插件嵌入点列表"><span>插件嵌入点列表</span></a></h2><h3 id="全局-common" tabindex="-1"><a class="header-anchor" href="#全局-common"><span>全局(common/)</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>extcredits.htm
   string spacecp_credit_extra
faq.htm
   string faq_extra
footer.htm
   string global_footer
   string global_footerlink
header.htm
   string global_cpnav_top (X2.5)
   string global_cpnav_extra1
   string global_cpnav_extra2
   string global_myitem_extra (X3.1)
   string global_qmenu_top (X3)
   string global_qmenu_bottom (X3)
   string global_nav_extra (X2.5)
   string global_header
userabout.htm
   array global_userabout_top
   string userapp_menu_top
   string userapp_menu_middle
   array global_userabout_bottom
userstatus.htm
   string global_usernav_extra1
   string global_usernav_extra2
   string global_usernav_extra3
   string global_usernav_extra4 (X2.5)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="论坛-forum" tabindex="-1"><a class="header-anchor" href="#论坛-forum"><span>论坛(forum/)</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>collection_all.htm (X2.5)
   string collection_index_top
   string collection_index_bottom
collection_comment.htm (X2.5)
   string collection_nav_extra
collection_index.htm (X2.5)
   string collection_index_top
   string collection_index_bottom
collection_mycollection.htm (X2.5)
   string collection_index_top
   string collection_index_bottom
collection_nav.htm (X2.5)
   string collection_nav_extra
collection_view.htm (X2.5)
   string collection_viewoptions
   string collection_view_top
   string collection_threadlistbottom
   string collection_relatedop
   string collection_view_bottom
   string collection_side_bottom
discuz.htm
   string index_status_extra
   string index_nav_extra (X2.5)
   string index_top
   string index_catlist_top (X2.5)
   array index_followcollection_extra (X3)
   array index_favforum_extra (X2.5)
   array index_favforum_extra (X3)
   array index_catlist (X2.5)
   array index_forum_extra (X2.5)
   array index_forum_extra (X2.5)
   array index_datacollection_extra (X3)
   string index_middle
   string index_bottom
   string index_side_top
   string index_side_bottom
discuzcode.htm
   array viewthread_attach_extra (X2.5)
editor_menu_forum.htm
   string post_image_btn_extra
   string post_image_tab_extra
   string post_attach_btn_extra
   string post_attach_tab_extra
forumdisplay.htm
   string forumdisplay_leftside_top
   string forumdisplay_leftside_bottom
   string forumdisplay_forumaction
   string forumdisplay_modlink
   string forumdisplay_top
   string forumdisplay_middle
   string forumdisplay_postbutton_top
   string forumdisplay_threadtype_inner (X2.5)
   string forumdisplay_filter_extra (X2.5)
   string forumdisplay_threadtype_extra (X2.5)
   string forumdisplay_bottom
   string forumdisplay_side_top
   string forumdisplay_side_bottom
forumdisplay_fastpost.htm
   string forumdisplay_fastpost_content
   string forumdisplay_fastpost_func_extra
   string forumdisplay_fastpost_ctrl_extra
   string global_login_text
   string forumdisplay_fastpost_upload_extend (X3)
   string forumdisplay_fastpost_btn_extra
   string forumdisplay_fastpost_sync_method
forumdisplay_list.htm
   string forumdisplay_filter_extra
   array forumdisplay_thread
   array forumdisplay_thread_subject (X2.5)
   array forumdisplay_author
   array forumdisplay_thread (X2.5)
   array forumdisplay_author (X2.5)
   string forumdisplay_threadlist_bottom (X2.5)
   string forumdisplay_postbutton_bottom
forumdisplay_sort.htm (X2.5)
   string forumdisplay_postbutton_bottom
forumdisplay_subforum.htm (X2.5)
   array forumdisplay_subforum_extra
   array forumdisplay_subforum_extra
guide.htm
   string guide_nav_extra
   string guide_top
   string guide_bottom
index_navbar.htm
   string index_navbar
post.htm
   string post_top
   string post_middle
   string post_btn_extra
   string post_sync_method
   string post_bottom
   string post_upload_extend (X3)
post_activity.htm
   string post_activity_extra
post_debate.htm
   string post_debate_extra
post_editor_attribute.htm (X3)
   string post_attribute_extra
   string post_attribute_extra_body
post_editor_body.htm
   string post_editorctrl_right
   string post_editorctrl_left
   string post_editorctrl_top
   string post_editorctrl_bottom
post_infloat.htm
   string post_infloat_top
   string post_infloat_middle
   string post_infloat_btn_extra
post_poll.htm
   string post_poll_extra
   string post_poll_upload_extend (X3)
post_reward.htm
   string post_reward_extra
post_trade.htm
   string post_trade_extra
topicadmin_modlayer.htm
   string forumdisplay_modlayer
   string modcp_modlayer
trade_info.htm
   string viewthread_tradeinfo_extra
viewthread.htm
   string viewthread_top
   string viewthread_postbutton_top
   string viewthread_modoption
   string viewthread_beginline (X2.5)
   string viewthread_title_extra
   string viewthread_title_row
   string viewthread_middle
   string viewthread_bottom
viewthread_activity.htm
   string viewthread_activity_extra1
   string viewthread_activity_extra2
viewthread_album.htm (X3)
   string viewthread_beginline
   string viewthread_useraction_prefix
   string viewthread_useraction
   string viewthread_bottom
viewthread_fastpost.htm
   string viewthread_fastpost_side
   string viewthread_fastpost_content
   string viewthread_fastpost_func_extra
   string viewthread_fastpost_ctrl_extra
   string global_login_text
   string viewthread_fastpost_upload_extend (X3)
   string viewthread_fastpost_btn_extra (X2.5)
viewthread_from_node.htm
   array viewthread_postheader
   array viewthread_postheader
   array viewthread_postheader
   array viewthread_endline
viewthread_node.htm
   array viewthread_profileside
   array viewthread_imicons
   array viewthread_magic_user
   array viewthread_avatar
   array viewthread_sidetop
   array viewthread_sidebottom
   array viewthread_postheader
   string viewthread_modaction (X2.5)
   string viewthread_share_method
   string viewthread_useraction
   array viewthread_postsightmlafter (X2.5)
   array viewthread_postfooter
   array viewthread_postaction (X2.5)
   string viewthread_magic_thread
   array viewthread_magic_post
   array viewthread_endline
viewthread_node_body.htm
   array viewthread_posttop
   string global_login_text
   array viewthread_postbottom
viewthread_poll.htm
   string viewthread_poll_top
   string viewthread_poll_bottom
viewthread_portal.htm
   string viewthread_useraction_prefix
   string viewthread_useraction
   string viewthread_side_bottom
viewthread_preview_node.htm (X3)
   array viewthread_postheader
   array viewthread_endline
viewthread_trade.htm
   array viewthread_trade_extra
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="群组-group" tabindex="-1"><a class="header-anchor" href="#群组-group"><span>群组(group/)</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>group.htm
   string group_navlink
   string forumdisplay_navlink
   string group_navlink
   string forumdisplay_navlink
   string group_top
   string forumdisplay_top
   string group_nav_extra
   string forumdisplay_nav_extra
   string group_bottom
   string forumdisplay_bottom
   string group_side_bottom
   string forumdisplay_side_bottom
group_list.htm
   string forumdisplay_postbutton_top
   string forumdisplay_filter_extra
   array forumdisplay_thread
   string forumdisplay_postbutton_bottom
group_my.htm
   string my_header
   string my_bottom
   string my_side_top
   string my_side_bottom
group_right.htm
   string group_index_side
   string group_side_top
   string forumdisplay_side_top
index.htm
   string index_header
   string index_top
   string index_bottom
   string index_side_top
   string index_side_bottom
type.htm
	string index_top
   array index_grouplist
   string index_bottom
   string index_side_top
   string index_side_bottom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="家园-home" tabindex="-1"><a class="header-anchor" href="#家园-home"><span>家园(home/)</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>editor_image_menu.htm (X3)
   string spacecp_blog_upload_extend
   string portalcp_top_upload_extend
follow_feed.htm
   string follow_nav_extra
   string follow_top
   string follow_upload_extend (X3)
   string follow_nav_extra (X3)
spacecp_avatar.htm
   string spacecp_avatar_top
   string spacecp_avatar_bottom
spacecp_blog.htm
   string spacecp_blog_top
   string spacecp_blog_middle
   string spacecp_blog_bottom
spacecp_credit_base.htm
   string spacecp_credit_top
   string spacecp_credit_extra
   string spacecp_credit_bottom
spacecp_credit_log.htm
   string spacecp_credit_top
   string spacecp_credit_bottom
spacecp_privacy.htm
   string spacecp_privacy_top
   string spacecp_privacy_base_extra
   string spacecp_privacy_feed_extra
   string spacecp_privacy_bottom
spacecp_profile.htm
   string spacecp_profile_top
   string spacecp_profile_extra
   string spacecp_profile_bottom
spacecp_promotion.htm
   string spacecp_promotion_top
   string spacecp_promotion_bottom
spacecp_upload.htm (X3)
   string spacecp_upload_extend
spacecp_usergroup.htm
   string spacecp_usergroup_top
   string spacecp_usergroup_bottom
   string spacecp_usergroup_top
   string spacecp_usergroup_bottom
   string spacecp_usergroup_top
   string spacecp_usergroup_bottom
space_album_pic.htm
   string space_album_pic_top
   string space_album_pic_op_extra
   string space_album_pic_bottom
   string space_album_pic_face_extra
space_album_view.htm
   string space_album_op_extra
space_blog_list.htm
   array space_blog_list_status
space_blog_view.htm
   string space_blog_title
   string space_blog_share_method (X2.5)
   string space_blog_op_extra
   string space_blog_face_extra
space_card.htm
   string space_card_top
   string space_card_baseinfo_middle
   string space_card_baseinfo_bottom
   string space_card_option
   string space_card_magic_user
   string space_card_bottom
space_comment_li.htm
   array global_space_comment_op (X3)
   string global_comment_bottom (X3)
space_doing.htm
   string space_doing_top
   string space_doing_bottom
space_favorite.htm
   string space_favorite_nav_extra
space_friend.htm
   string space_interaction_extra
space_header.htm
   string global_usernav_extra1
   string global_usernav_extra2
space_home.htm
   string space_home_navlink (X3)
   string space_home_side_top (X2.5)
   string space_home_side_bottom
   string space_home_top
   string space_home_navlink
   string space_home_bottom
space_magic.htm (X2.5)
   string magic_nav_extra
space_medal.htm (X2.5)
   string medal_nav_extra
space_menu.htm
   string space_menu_extra
space_profile_body.htm
   string space_profile_baseinfo_top
   string follow_profile_baseinfo_top (X2.5)
   string space_profile_baseinfo_middle
   string follow_profile_baseinfo_middle (X2.5)
   string space_profile_baseinfo_bottom
   string follow_profile_baseinfo_bottom (X2.5)
   string space_profile_extrainfo
   string follow_profile_extrainfo (X2.5)
space_share_li.htm
   array space_share_comment_op
space_status.htm
   string space_home_doing_sync_method
space_wall.htm
   string space_wall_face_extra
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注册-登录-member" tabindex="-1"><a class="header-anchor" href="#注册-登录-member"><span>注册/登录(member/)</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>login.htm
   string logging_side_top
   string logging_top
   string logging_input
   string logging_method
login_simple.htm
   string global_login_extra
register.htm
   string register_side_top
   string register_top
   string register_input
   string register_logging_method
   string register_bottom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="门户-portal" tabindex="-1"><a class="header-anchor" href="#门户-portal"><span>门户(portal/)</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>portalcp_article.htm
   string portalcp_top
   string portalcp_extend
   string portalcp_middle
   string portalcp_bottom
view.htm
   string view_article_top (X2.5)
   string view_article_subtitle (X2.5)
   string view_article_summary (X2.5)
   string view_article_content (X2.5)
   string view_share_method
   string view_article_op_extra (X2.5)
   string view_article_side_top (X2.5)
   string view_article_side_bottom (X2.5)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="排行榜-ranklist" tabindex="-1"><a class="header-anchor" href="#排行榜-ranklist"><span>排行榜(ranklist/)</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>side_left.htm
   string ranklist_nav_extra
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="搜索-search" tabindex="-1"><a class="header-anchor" href="#搜索-search"><span>搜索(search/)</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>album.htm
   string album_top
   string album_bottom
blog.htm
   string blog_top
   string blog_bottom
collection.htm (X3)
   string collection_top
   string collection_bottom
footer.htm
   string global_footer
   string global_footerlink
forum.htm
   string forum_top
   string forum_bottom
group.htm
   string group_top
   string group_bottom
header.htm
   string global_usernav_extra1
   string global_usernav_extra2
portal.htm
   string portal_top
   string portal_bottom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用-userapp" tabindex="-1"><a class="header-anchor" href="#应用-userapp"><span>应用(userapp/)</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>userapp_app.htm
   string userapp_app_top
   string userapp_app_bottom
userapp_index.htm
   string userapp_index_top
   string userapp_index_bottom
userapp_menu_list.htm
   string userapp_menu_top
   string userapp_menu_middle
   string userapp_menu_bottom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手机标准版-mobile-common" tabindex="-1"><a class="header-anchor" href="#手机标准版-mobile-common"><span>手机标准版(mobile/common/)</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>footer.htm
   string global_footer_mobile
header.htm
   string global_header_mobile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手机标准版-mobile-forum" tabindex="-1"><a class="header-anchor" href="#手机标准版-mobile-forum"><span>手机标准版(mobile/forum/)</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>discuz.htm
   string index_top_mobile
   string index_middle_mobile
   string index_bottom_mobile
forumdisplay.htm
   string forumdisplay_top_mobile
   array forumdisplay_thread_mobile
   string forumdisplay_bottom_mobile
viewthread.htm
   string viewthread_top_mobile
   array viewthread_posttop_mobile
   array viewthread_postbottom_mobile
   string viewthread_bottom_mobile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手机触屏版-touch-common" tabindex="-1"><a class="header-anchor" href="#手机触屏版-touch-common"><span>手机触屏版(touch/common/)</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>footer.htm
    string global_footer_mobile
header.htm
    string global_header_mobile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手机触屏版-touch-forum" tabindex="-1"><a class="header-anchor" href="#手机触屏版-touch-forum"><span>手机触屏版(touch/forum/)</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>discuz.htm
    string index_top_mobile
    string index_middle_mobile
forumdisplay.htm
    string forumdisplay_top_mobile
    array forumdisplay_thread_mobile
    string forumdisplay_bottom_mobile
forumdisplay_fastpost.htm
    string viewthread_fastpost_button_mobile (X3.1)
post.htm
    string post_bottom_mobile (X3.1)
viewthread.htm
    string viewthread_top_mobile
    array viewthread_posttop_mobile
    array viewthread_postbottom_mobile
    string viewthread_bottom_mobile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手机触屏版-touch-member" tabindex="-1"><a class="header-anchor" href="#手机触屏版-touch-member"><span>手机触屏版(touch/member/)</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>login.htm
    string logging_bottom_mobile (X3.1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手机极简版-wml-forum" tabindex="-1"><a class="header-anchor" href="#手机极简版-wml-forum"><span>手机极简版(wml/forum/)</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>discuz.htm
   string index_top_mobile
   string index_middle_mobile
forumdisplay.htm
   string forumdisplay_top_mobile
   array forumdisplay_thread_mobile
   string forumdisplay_bottom_mobile
viewthread.htm
   string viewthread_top_mobile
   array viewthread_posttop_mobile
   array viewthread_postbottom_mobile
   string viewthread_bottom_mobile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43);function p(b,_){const s=t("ExternalLinkIcon");return l(),d("div",null,[c,i("blockquote",null,[i("p",null,[n("要查看所有的预定义嵌入点，请打开 config/config_global.php 文件，将文件结尾添加的设计者模式值改成“2”，然后更新缓存即可。在页面源码中查找"),v,n("可搜索到嵌入点。（详细内容可参阅的《"),i("a",m,[n("插件嵌入点列表"),r(s)]),n("》）")])]),u])}const h=a(o,[["render",p],["__file","hook.html.vue"]]),f=JSON.parse('{"path":"/discuz/plugin/hook.html","title":"页面嵌入","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"页面嵌入类型脚本格式","slug":"页面嵌入类型脚本格式","link":"#页面嵌入类型脚本格式","children":[{"level":3,"title":"plugin_","slug":"plugin","link":"#plugin","children":[]},{"level":3,"title":"identifier","slug":"identifier","link":"#identifier","children":[]},{"level":3,"title":"CURSCRIPT","slug":"curscript","link":"#curscript","children":[]},{"level":3,"title":"HookId","slug":"hookid","link":"#hookid","children":[]}]},{"level":2,"title":"插件嵌入点列表","slug":"插件嵌入点列表","link":"#插件嵌入点列表","children":[{"level":3,"title":"全局(common/)","slug":"全局-common","link":"#全局-common","children":[]},{"level":3,"title":"论坛(forum/)","slug":"论坛-forum","link":"#论坛-forum","children":[]},{"level":3,"title":"群组(group/)","slug":"群组-group","link":"#群组-group","children":[]},{"level":3,"title":"家园(home/)","slug":"家园-home","link":"#家园-home","children":[]},{"level":3,"title":"注册/登录(member/)","slug":"注册-登录-member","link":"#注册-登录-member","children":[]},{"level":3,"title":"门户(portal/)","slug":"门户-portal","link":"#门户-portal","children":[]},{"level":3,"title":"排行榜(ranklist/)","slug":"排行榜-ranklist","link":"#排行榜-ranklist","children":[]},{"level":3,"title":"搜索(search/)","slug":"搜索-search","link":"#搜索-search","children":[]},{"level":3,"title":"应用(userapp/)","slug":"应用-userapp","link":"#应用-userapp","children":[]},{"level":3,"title":"手机标准版(mobile/common/)","slug":"手机标准版-mobile-common","link":"#手机标准版-mobile-common","children":[]},{"level":3,"title":"手机标准版(mobile/forum/)","slug":"手机标准版-mobile-forum","link":"#手机标准版-mobile-forum","children":[]},{"level":3,"title":"手机触屏版(touch/common/)","slug":"手机触屏版-touch-common","link":"#手机触屏版-touch-common","children":[]},{"level":3,"title":"手机触屏版(touch/forum/)","slug":"手机触屏版-touch-forum","link":"#手机触屏版-touch-forum","children":[]},{"level":3,"title":"手机触屏版(touch/member/)","slug":"手机触屏版-touch-member","link":"#手机触屏版-touch-member","children":[]},{"level":3,"title":"手机极简版(wml/forum/)","slug":"手机极简版-wml-forum","link":"#手机极简版-wml-forum","children":[]}]}],"git":{},"filePathRelative":"discuz/plugin/hook.md"}');export{h as comp,f as data};
