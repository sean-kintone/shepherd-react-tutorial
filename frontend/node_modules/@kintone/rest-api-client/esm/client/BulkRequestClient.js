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
import { buildPath } from "../url";
var BulkRequestClient = /** @class */ (function () {
    function BulkRequestClient(client, guestSpaceId) {
        this.client = client;
        this.guestSpaceId = guestSpaceId;
        this.REQUESTS_LENGTH_LIMIT = 20;
    }
    BulkRequestClient.prototype.send = function (params) {
        var _this = this;
        var requestsParam = params.requests;
        var requests = requestsParam.map(function (request) {
            if ("endpointName" in request) {
                var endpointName = request.endpointName, rest = __rest(request, ["endpointName"]);
                return __assign({ api: _this.buildPathWithGuestSpaceId({ endpointName: endpointName }) }, rest);
            }
            return request;
        });
        var path = this.buildPathWithGuestSpaceId({
            endpointName: "bulkRequest",
        });
        return this.client.post(path, { requests: requests });
    };
    BulkRequestClient.prototype.buildPathWithGuestSpaceId = function (params) {
        return buildPath(__assign(__assign({}, params), { guestSpaceId: this.guestSpaceId }));
    };
    return BulkRequestClient;
}());
export { BulkRequestClient };
//# sourceMappingURL=BulkRequestClient.js.map