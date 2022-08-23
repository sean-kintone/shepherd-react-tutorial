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
exports.KintoneAbortSearchError = void 0;
var KintoneAbortSearchError = /** @class */ (function (_super) {
    __extends(KintoneAbortSearchError, _super);
    function KintoneAbortSearchError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "KintoneAbortSearchError";
        _this.message = message;
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        // Set the prototype explicitly.
        Object.setPrototypeOf(_this, KintoneAbortSearchError.prototype);
        return _this;
    }
    return KintoneAbortSearchError;
}(Error));
exports.KintoneAbortSearchError = KintoneAbortSearchError;
//# sourceMappingURL=KintoneAbortSearchError.js.map