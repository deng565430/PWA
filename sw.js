// 整个网页的控制权交个 sw  搞定页面所有的request 本地拦截
// self : 标识的是serviceWorker scope
// caches: 控制缓存用的全局变量
// clients: 标识serviceWorker接管的页面
// skipWaiting: 强制的将我们处于waiting 状态的脚本记录到 activate 里

const cacheName = 'PWA-缓存-版本号1.001';
const filesToCache = [
  '/js/index.js',
  '/css/index.css',
  '/image/timg.jpeg',
  '/index.html',
  '/'
];

const updateStaticCache = () => {
  return caches.open(cacheName)
    .then(function (cache) {
      return cache.addAll(filesToCache);
    })
    .then(() => self.skipWaiting());  // 加入这一句 保险进入到active
}


self.addEventListener('install', function (e) {
  // 首次访问被执行 资源要在这里进行缓存
  // 原子操作 addAll 如果一个文件缓存失败， 所有的缓存都将失败
  console.log('安装完成');
  // 装载静态资源缓存
  e.waitUntil(updateStaticCache())
})

// activate 版本的变化 做资源管理
self.addEventListener('activate', function (e) {
  // 文件以及被缓存了。 激活文件
  // 很多个keyList维持
  e.waitUntil(caches.keys().then(function (keyList) {
    return Promise.all(keyList.map(function (key) {
      console.log(`serviceWorker Removing old key `, key)
      // 把老key里面的数据删除 保持版本的变化
      if (key !== cacheName) {
        return caches.delete(key)
      }
    }))
  }));
});

// 真正的去让资源run起来
self.addEventListener('fetch', function (e) {
  // 拿到对应脚本
  console.log(e.request);
  // 终止 e.respondWith对象去终止
  // e.respondWith(new Response('Hello World'));
  // 输出缓存的结果
  e.respondWith(
    // 如果在缓存里面匹配到请求了。 直接从缓存里面拿 如果没有则发起ajax请求 fetch
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request)
    })
  )
})
