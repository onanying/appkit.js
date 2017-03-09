
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
        if (ua.match(/micromessenger/i) == "micromessenger" &&  ua.match(/mobile/i) == "mobile") {
            return true;
        }
        return false;
    };

    // 是否在微信PC版的浏览器中
    obj.isWeixinPC = function() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/micromessenger/i) == "micromessenger" &&  ua.match(/windowswechat/i) == "windowswechat") {
            return true;
        }
        return false;
    };

    // 是否在自家APP的Android浏览器中
    obj.isAD = function() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/www51efancom/i) == "www51efancom" &&  ua.match(/android/i) == "android") {
            return true;
        }
        return false;
    };

    // 是否在自家APP的iOS浏览器中
    obj.isIOS = function() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/www51efancom/i) == "www51efancom" &&  ua.match(/ios/i) == "ios") {
            return true;
        }
        return false;
    };

    // 是否在自家APP的浏览器中
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

    // JS调用自家APP的Android方法
    obj.callAD = function(method, json) {
        eval("window.adwebkit." + method + "(" + (json == null ? "" : "'" + json + "'") + ");");
    };

    // JS调用自家APP的iOS方法
    obj.callIOS = function(method, json) {
        eval("window.webkit.messageHandlers." + method + ".postMessage(" + (json == null ? "null" : json) + ");");
    };

    return obj;
};
var appkit = new Appkit();
