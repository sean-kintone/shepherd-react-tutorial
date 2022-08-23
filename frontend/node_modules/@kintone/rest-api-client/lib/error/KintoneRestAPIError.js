"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.KintoneRestAPIError = void 0;
var KintoneRestAPIError = /** @class */ (function (_super) {
    __extends(KintoneRestAPIError, _super);
    function KintoneRestAPIError(error) {
        var _this = this;
        var _a = KintoneRestAPIError.buildErrorResponseDateWithIndex(error), data = _a.data, bulkRequestIndex = _a.bulkRequestIndex;
        _this = _super.call(this, data.message) || this;
        _this.name = "KintoneRestAPIError";
        _this.id = data.id;
        _this.code = data.code;
        _this.errors = data.errors;
        _this.status = error.status;
        _this.bulkRequestIndex = bulkRequestIndex;
        _this.headers = error.headers;
        _this.message = "[".concat(error.status, "] [").concat(_this.code, "] ").concat(_this.message, " (").concat(_this.id, ")");
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, KintoneRestAPIError);
        }
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        // Set the prototype explicitly.
        Object.setPrototypeOf(_this, KintoneRestAPIError.prototype);
        return _this;
    }
    KintoneRestAPIError.findErrorResponseDataWithIndex = function (results) {
        for (var i = 0; i < results.length; i++) {
            if (Object.keys(results[i]).length !== 0) {
                var data = results[i];
                return { data: data, bulkRequestIndex: i };
            }
        }
        throw Error("Missing response data in `results`. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");
    };
    KintoneRestAPIError.buildErrorResponseDateWithIndex = function (error) {
        if ("results" in error.data) {
            return KintoneRestAPIError.findErrorResponseDataWithIndex(error.data.results);
        }
        return { data: error.data };
    };
    return KintoneRestAPIError;
}(Error));
exports.KintoneRestAPIError = KintoneRestAPIError;
//# sourceMappingURL=KintoneRestAPIError.js.map