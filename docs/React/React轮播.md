# 轮播图 Carousel

## 思路

思路其实很简单，就是用`ul`列出传入的图片，然后用一个计数器迭代`showIndex`的值，如果图片的`index`和`showIndex`一致，图片就显示。上一张、下一张以及点击图片下的圆点显示对应照片也是这个原理。

## 简单实现

要实现一个轮播，需要：

- `showIndex` 当前显示图片`index`
- `timer`计时器

### 创建 Carousel 类
