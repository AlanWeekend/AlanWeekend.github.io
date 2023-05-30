import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,e as t}from"./app-6bef6d75.js";const a="/assets/1-85e58960.png",s={},r=t('<figure><img src="'+a+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>WX.InitSDK((int code) =&gt;
{
    // 你的主逻辑
    var info = WX.GetSystemInfoSync();
    var systemBarHeight = info.statusBarHeight; // 状态栏高度
    var menu = WX.GetMenuButtonBoundingClientRect();
    var navigationBarHeight = menu.height; // 胶囊栏高度
    float py = ((float)info.windowHeight - (float)(systemBarHeight + navigationBarHeight)) / (float)info.windowHeight;
    // 调整UI根节点Rect
    var rect = UIKit.Root.Common.GetComponent&lt;RectTransform&gt;();
    rect.anchorMax = new Vector2(1, py);
    rect.offsetMax = Vector2.zero;
    rect.offsetMin = Vector2.zero;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[r];function c(d,l){return n(),i("div",null,o)}const u=e(s,[["render",c],["__file","index.html.vue"]]);export{u as default};
