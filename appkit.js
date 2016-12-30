;function Appkit() {

    // 是否在微信浏览器中
    this.isWeixin = function() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        }
        return false;
    };

    // 是否在Android浏览器中
    this.isAD = function() {
        if (typeof(window.adwebkit) != "undefined") {
            return true;
        }
        return false;
    };

    // 是否在iOS浏览器中
    this.isIOS = function() {
        if (typeof(window.webkit) != "undefined") {
            return true;
        }
        return false;
    };

    // 是否在App浏览器中
    this.isApp = function() {
        if (this.isAD() || this.isIOS()) {
            return true;
        }
        return false;
    };

    // JS调用App方法
    this.callApp = function(method, json) {
        var json = arguments[1] || null;
        if (this.isAD()) {
            this.callAD(method, json);
        }
        if (this.isIOS()) {
            this.callIOS(method, json);
        }
    };

    // JS调用Android方法
    this.callAD = function(method, json) {
        eval("window.adwebkit." + method + "(" + (json == null ? "": "'" + json + "'") + ");");
    };

    // JS调用iOS方法
    this.callIOS = function(method, json) {
        eval("window.webkit.messageHandlers." + method + ".postMessage(" + (json == null ? "null": json) + ");");
    };

};