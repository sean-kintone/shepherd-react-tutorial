"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPath = void 0;
var buildPath = function (params) {
    var endpointName = params.endpointName, guestSpaceId = params.guestSpaceId, preview = params.preview;
    var guestPath = guestSpaceId !== undefined ? "/guest/".concat(guestSpaceId) : "";
    var previewPath = preview ? "/preview" : "";
    return "/k".concat(guestPath, "/v1").concat(previewPath, "/").concat(endpointName, ".json");
};
exports.buildPath = buildPath;
//# sourceMappingURL=url.js.map