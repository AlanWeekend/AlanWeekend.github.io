const e=JSON.parse(`{"key":"v-6b37c376","path":"/posts/%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8/PHP%E4%B8%80%E5%8F%A5%E8%AF%9D%E6%9C%A8%E9%A9%AC/","title":"PHP一句话木马","lang":"zh-CN","frontmatter":{"icon":"edit","title":"PHP一句话木马","date":"2022-01-07T16:27:29.000Z","category":["网络安全"],"description":"引言 未知攻，焉知防。本文仅用来研究及学习PHP一句话木马及中国菜刀软件的原理及防御。 什么是PHP一句话木马 还是以栗子说明： 上图是一个最简单的PHP一句话木马。简单的解释一下： @不在前端网页显示报错信息 eval()函数 — 把字符串作为PHP代码执行. $_POST['abcd'] 创建一个名为abcd的变量，通过_POST请求传入数据 这么简单的一句话可以产生什么效果呢？","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8/PHP%E4%B8%80%E5%8F%A5%E8%AF%9D%E6%9C%A8%E9%A9%AC/"}],["meta",{"property":"og:site_name","content":"周末的博客"}],["meta",{"property":"og:title","content":"PHP一句话木马"}],["meta",{"property":"og:description","content":"引言 未知攻，焉知防。本文仅用来研究及学习PHP一句话木马及中国菜刀软件的原理及防御。 什么是PHP一句话木马 还是以栗子说明： 上图是一个最简单的PHP一句话木马。简单的解释一下： @不在前端网页显示报错信息 eval()函数 — 把字符串作为PHP代码执行. $_POST['abcd'] 创建一个名为abcd的变量，通过_POST请求传入数据 这么简单的一句话可以产生什么效果呢？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-30T07:00:52.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"PHP一句话木马"}],["meta",{"property":"article:author","content":"Weekend"}],["meta",{"property":"article:published_time","content":"2022-01-07T16:27:29.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-30T07:00:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PHP一句话木马\\",\\"image\\":[\\"https://mister-hope.github.io/\\"],\\"datePublished\\":\\"2022-01-07T16:27:29.000Z\\",\\"dateModified\\":\\"2023-05-30T07:00:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Weekend\\",\\"url\\":\\"https://alanweekend.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"引言","slug":"引言","link":"#引言","children":[]},{"level":2,"title":"什么是PHP一句话木马","slug":"什么是php一句话木马","link":"#什么是php一句话木马","children":[]},{"level":2,"title":"什么是中国菜刀","slug":"什么是中国菜刀","link":"#什么是中国菜刀","children":[]},{"level":2,"title":"中国菜刀是一款专业的“网站管理”软件，用途广泛，使用方便，小巧实用。只要支持动态脚本的网站，都可以用中国菜刀来进行“管理”！在非简体中文环境下使用，自动切换到英文界面。UINCODE方式编译，支持多国语言输入显示。----某百科说的，不是我说的！支持的服务端脚本：PHP, ASP，.NET。可以理解为一个封装好的eval()函数加system()的POST请求利用工具，常常被一些黑客用作非法用途。","slug":"中国菜刀是一款专业的-网站管理-软件-用途广泛-使用方便-小巧实用。只要支持动态脚本的网站-都可以用中国菜刀来进行-管理-在非简体中文环境下使用-自动切换到英文界面。uincode方式编译-支持多国语言输入显示。-某百科说的-不是我说的-支持的服务端脚本-php-asp-net。可以理解为一个封装好的eval-函数加system-的post请求利用工具-常常被一些黑客用作非法用途。","link":"#中国菜刀是一款专业的-网站管理-软件-用途广泛-使用方便-小巧实用。只要支持动态脚本的网站-都可以用中国菜刀来进行-管理-在非简体中文环境下使用-自动切换到英文界面。uincode方式编译-支持多国语言输入显示。-某百科说的-不是我说的-支持的服务端脚本-php-asp-net。可以理解为一个封装好的eval-函数加system-的post请求利用工具-常常被一些黑客用作非法用途。","children":[]},{"level":2,"title":"分析中国菜刀的POST请求信息","slug":"分析中国菜刀的post请求信息","link":"#分析中国菜刀的post请求信息","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1685430052000,"updatedTime":1685430052000,"contributors":[{"name":"Weekend","email":"872285171@qq.com","commits":1}]},"readingTime":{"minutes":7.21,"words":2163},"filePathRelative":"posts/网络安全/PHP一句话木马/index.md","localizedDate":"2022年1月7日","excerpt":"<h2> 引言</h2>\\n<p>未知攻，焉知防。本文仅用来研究及学习PHP一句话木马及中国菜刀软件的原理及防御。</p>\\n<hr>\\n<h2> 什么是PHP一句话木马</h2>\\n<p>还是以栗子说明：</p>\\n<figure><figcaption></figcaption></figure>\\n<p>上图是一个最简单的PHP一句话木马。简单的解释一下：\\n<code>@</code>不在前端网页显示报错信息\\n<code>eval()</code>函数 — 把字符串作为PHP代码执行.\\n<code>$_POST['abcd']</code> 创建一个名为abcd的变量，通过_POST请求传入数据\\n这么简单的一句话可以产生什么效果呢？</p>","autoDesc":true}`);export{e as data};
