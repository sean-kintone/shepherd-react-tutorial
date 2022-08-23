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
import { BulkRequestClient } from "./client/BulkRequestClient";
import { AppClient } from "./client/AppClient";
import { RecordClient } from "./client/RecordClient";
import { FileClient } from "./client/FileClient";
import { DefaultHttpClient } from "./http/";
import { KintoneRequestConfigBuilder } from "./KintoneRequestConfigBuilder";
import { KintoneResponseHandler } from "./KintoneResponseHandler";
import { platformDeps } from "./platform";
import { UnsupportedPlatformError } from "./platform/UnsupportedPlatformError";
var buildDiscriminatedAuth = function (auth) {
    if ("username" in auth) {
        return __assign({ type: "password" }, auth);
    }
    if ("apiToken" in auth) {
        return __assign({ type: "apiToken" }, auth);
    }
    if ("oAuthToken" in auth) {
        return __assign({ type: "oAuthToken" }, auth);
    }
    try {
        return platformDeps.getDefaultAuth();
    }
    catch (e) {
        if (e instanceof UnsupportedPlatformError) {
            throw new Error("session authentication is not supported in ".concat(e.platform, " environment."));
        }
        throw e;
    }
};
var KintoneRestAPIClient = /** @class */ (function () {
    function KintoneRestAPIClient(options) {
        if (options === void 0) { options = {}; }
        var _a, _b, _c;
        validateOptions(options);
        this.baseUrl = platformDeps
            .buildBaseUrl(options.baseUrl)
            .replace(/\/+$/, ""); // Remove trailing slash
        var auth = buildDiscriminatedAuth((_a = options.auth) !== null && _a !== void 0 ? _a : {});
        var requestConfigBuilder = new KintoneRequestConfigBuilder(__assign(__assign({}, options), { baseUrl: this.baseUrl, auth: auth }));
        var responseHandler = new KintoneResponseHandler({
            enableAbortSearchError: (_c = (_b = options.featureFlags) === null || _b === void 0 ? void 0 : _b.enableAbortSearchError) !== null && _c !== void 0 ? _c : false,
        });
        var httpClient = new DefaultHttpClient({
            responseHandler: responseHandler,
            requestConfigBuilder: requestConfigBuilder,
        });
        var guestSpaceId = options.guestSpaceId;
        this.bulkRequest_ = new BulkRequestClient(httpClient, guestSpaceId);
        this.record = new RecordClient(httpClient, this.bulkRequest_, guestSpaceId);
        this.app = new AppClient(httpClient, guestSpaceId);
        this.file = new FileClient(httpClient, guestSpaceId);
    }
    Object.defineProperty(KintoneRestAPIClient, "version", {
        get: function () {
            return platformDeps.getVersion();
        },
        enumerable: false,
        configurable: true
    });
    KintoneRestAPIClient.prototype.getBaseUrl = function () {
        return this.baseUrl;
    };
    KintoneRestAPIClient.prototype.bulkRequest = function (params) {
        return this.bulkRequest_.send(params);
    };
    return KintoneRestAPIClient;
}());
export { KintoneRestAPIClient };
var validateOptions = function (options) {
    validateBaseUrl(options.baseUrl);
    validateGuestSpaceId(options.guestSpaceId);
};
var validateBaseUrl = function (baseUrl) {
    if (baseUrl === undefined) {
        return;
    }
    var url = new URL(baseUrl);
    if (url.hostname !== "localhost" && url.protocol !== "https:") {
        throw new Error('The protocol of baseUrl must be "https".');
    }
};
var validateGuestSpaceId = function (guestSpaceId) {
    if (guestSpaceId === "" || guestSpaceId === null) {
        throw new Error("invalid guestSpaceId: got [".concat(guestSpaceId, "]"));
    }
};
//# sourceMappingURL=KintoneRestAPIClient.js.map