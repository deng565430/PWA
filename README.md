# PWA

PWA（Progressive Web App）是全新的网页技术，让网站的离线体验变得更好，网络连接断断续续时体验也会更好，它会模拟一些原生功能，比如通知推送。在移动端利用标准化框架，让网页应用呈现和原生应用相似的体验。

```
// 启动服务 http-server

// 端口转发
./ngrok http 8080
```

##### offline
> - 解决用户在线离线状态 处理相应需求
[用 JavaScript 检测浏览器在线/离线状态](http://www.css88.com/archives/tag/offline)

##### webpack处理工程化的问题
offline-plugin
[offline-plugin](https://www.npmjs.com/package/offline-plugin)

// 百度PWA的解决方案
[lavas](https://lavas.baidu.com/)

##### 配置离线
```
<link rel="manifest" href="./manifest.json">
```
##### 苹果配置离线
```
<meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="baidu-tc-cerfication" content="ef2982c3430a61a4c8620d5e47f8b968">
  <link rel="apple-touch-startup-image" href="//webmap1.bdimg.com/mobile/simple/static/common/images/startup_320_460_96280c8.jpg">
  <link rel="apple-touch-icon" sizes="180x180" href="//webmap1.bdimg.com/mobile/simple/static/common/images/map-logo-180_eb76f71.png">
```
