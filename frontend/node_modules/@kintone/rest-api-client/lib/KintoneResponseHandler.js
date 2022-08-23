"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KintoneResponseHandler = void 0;
var KintoneAbortSearchError_1 = require("./error/KintoneAbortSearchError");
var KintoneRestAPIError_1 = require("./error/KintoneRestAPIError");
var KintoneResponseHandler = /** @class */ (function () {
    function KintoneResponseHandler(_a) {
        var enableAbortSearchError = _a.enableAbortSearchError;
        this.enableAbortSearchError = enableAbortSearchError;
    }
    KintoneResponseHandler.prototype.handle = function (response) {
        var _this = this;
        return response.then(function (res) { return _this.handleSuccessResponse(res); }, function (error) { return _this.handleErrorResponse(error); });
    };
    KintoneResponseHandler.prototype.handleSuccessResponse = function (response) {
        if (this.enableAbortSearchError &&
            /Filter aborted because of too many search results/.test(response.headers["x-cybozu-warning"])) {
            throw new KintoneAbortSearchError_1.KintoneAbortSearchError(response.headers["x-cybozu-warning"]);
        }
        return response.data;
    };
    KintoneResponseHandler.prototype.handleErrorResponse = function (error) {
        if (!error.response) {
            // FIXME: find a better way to handle this error
            if (/mac verify failure/.test(error.toString())) {
                throw new Error("invalid clientCertAuth setting");
            }
            throw error;
        }
        var errorResponse = error.response;
        var data = errorResponse.data, rest = __rest(errorResponse, ["data"]);
        if (typeof data === "string") {
            throw new Error("".concat(rest.status, ": ").concat(rest.statusText));
        }
        throw new KintoneRestAPIError_1.KintoneRestAPIError(__assign({ data: data }, rest));
    };
    return KintoneResponseHandler;
}());
exports.KintoneResponseHandler = KintoneResponseHandler;
//# sourceMappingURL=KintoneResponseHandler.js.map