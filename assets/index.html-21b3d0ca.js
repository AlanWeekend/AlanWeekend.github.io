import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,e as s}from"./app-779f7ecf.js";const d={},l=s(`<div class="language-Typescript line-numbers-mode" data-ext="Typescript"><pre class="language-Typescript"><code>/**
 * 方向类型
 */
export enum DirectionType {
    /**
     * 左
     */
    left,
    /**
     * 右
     */
    right,
    /**
     * 前
     */
    front,
    /**
     * 后
     */
    back,
    /**
     * 上
     */
    up,
    /**
     * 下
     */
    down
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre class="language-TypeScript"><code>import {_decorator, Component, EventTouch, Node} from &#39;cc&#39;;
import {DirectionType} from &quot;db://assets/script/DirectionType&quot;;

const { ccclass, property } = _decorator;

@ccclass(&#39;cube&#39;)
export class cube extends Component {

    public dirType:DirectionType = DirectionType.right;

    start() {
        console.log(DirectionType); // 看下f12就知道结果了
        console.log(DirectionType[this.dirType]); // 获取枚举名
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[l];function r(v,a){return e(),n("div",null,c)}const t=i(d,[["render",r],["__file","index.html.vue"]]);export{t as default};
