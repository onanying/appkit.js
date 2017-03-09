## appkit.js

JS调用Android/iOS方法的封装，支持iOS的WKWebView，可判断网页是否在APP浏览器中，是否在微信浏览器中

### 说明文档

> demo.html 里有范例代码

#### Android/iOS的定义规则

- iOS使用WKWebView后无法自定义JS对象名，默认为webkit，所以不用动
- 修改Android的JS对象名为adwebkit
- Android/iOS定义的方法名需统一

#### 建立对象

引用后脚本后，默认会建立一个 appkit 对象，可直接使用

#### JS调用Android/iOS的方法

调用自家APP中带参数的方法

```javascript
// 第一个参数为Android/iOS定义的方法名，第二个参数为json字符串参数
appkit.callApp("HtmlGetLocation", '{"lat": 116.436464,"lng":40.024643}');
```

调用自家APP中不带参数的方法

```javascript
appkit.callApp("HtmlGetLocation");
```

#### 判断网页是否在微信浏览器中

```javascript
if(appkit.isWeixin()){
	alert("true");
}else{
	alert("false");
}
```

#### 判断网页是否在微信APP版的浏览器中

```javascript
if(appkit.isWeixinApp()){
	alert("true");
}else{
	alert("false");
}
```

#### 判断网页是否在微信PC版的浏览器中

```javascript
if(appkit.isWeixinPC()){
	alert("true");
}else{
	alert("false");
}
```

#### 判断网页是否在自家APP浏览器中

```javascript
if(appkit.isApp()){
	alert("true");
}else{
	alert("false");
}
```


