;var Appkit = function() {

    var obj = new Object();

    // 是否在微信浏览器中
    obj.isWeixin = function() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/micromessenger/i) == "micromessenger") {
            return true;
        }
        return false;
    };

    // 是否在微信APP版的浏览器中
    obj.isWeixinApp = function() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/micromessenger/i) == "micromessenger" &&  ua.match(/webview/i) == "webview") {
            return true;
        }
        return false;
    };

    // 是否在微信PC版的浏览器中
    obj.isWeixinPC = function() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/micromessenger/i) == "micromessenger" &&  ua.match(/qqbrowser/i) == "qqbrowser") {
            return true;
        }
        return false;
    };

    // 是否在Android浏览器中
    obj.isAD = function() {
        if (typeof(window.adwebkit) != "undefined") {
            return true;
        }
        return false;
    };

    // 是否在iOS浏览器中
    obj.isIOS = function() {
        if (typeof(window.webkit) != "undefined") {
            return true;
        }
        return false;
    };

    // 是否在App浏览器中
    obj.isApp = function() {
        if (obj.isAD() || obj.isIOS()) {
            return true;
        }
        return false;
    };

    // JS调用App方法
    obj.callApp = function(method, json) {
        var json = arguments[1] || null;
        if (obj.isAD()) {
            obj.callAD(method, json);
        }
        if (obj.isIOS()) {
            obj.callIOS(method, json);
        }
    };

    // JS调用Android方法
    obj.callAD = function(method, json) {
        eval("window.adwebkit." + method + "(" + (json == null ? "" : "'" + json + "'") + ");");
    };

    // JS调用iOS方法
    obj.callIOS = function(method, json) {
        eval("window.webkit.messageHandlers." + method + ".postMessage(" + (json == null ? "null" : json) + ");");
    };

    return obj;
};
var appkit = new Appkit();
