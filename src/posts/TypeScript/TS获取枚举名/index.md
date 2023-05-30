---
icon: edit
title: TS获取枚举名
katex: false
date: 2023-03-12 20:43:26
category: 
 - TypeSctipt
---

```Typescript
/**
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
```

```TypeScript
import {_decorator, Component, EventTouch, Node} from 'cc';
import {DirectionType} from "db://assets/script/DirectionType";

const { ccclass, property } = _decorator;

@ccclass('cube')
export class cube extends Component {

    public dirType:DirectionType = DirectionType.right;

    start() {
        console.log(DirectionType); // 看下f12就知道结果了
        console.log(DirectionType[this.dirType]); // 获取枚举名
    }
}
```