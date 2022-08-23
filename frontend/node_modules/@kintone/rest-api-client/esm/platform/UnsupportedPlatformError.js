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
var UnsupportedPlatformError = /** @class */ (function (_super) {
    __extends(UnsupportedPlatformError, _super);
    function UnsupportedPlatformError(platform) {
        var _this = this;
        var message = "This function is not supported in ".concat(platform, " environment");
        _this = _super.call(this, message) || this;
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, UnsupportedPlatformError);
        }
        _this.name = "UnsupportedPlatformError";
        _this.platform = platform;
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        // Set the prototype explicitly.
        Object.setPrototypeOf(_this, UnsupportedPlatformError.prototype);
        return _this;
    }
    return UnsupportedPlatformError;
}(Error));
export { UnsupportedPlatformError };
//# sourceMappingURL=UnsupportedPlatformError.js.map