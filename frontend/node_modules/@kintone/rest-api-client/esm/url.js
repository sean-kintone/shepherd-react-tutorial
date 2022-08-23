export var buildPath = function (params) {
    var endpointName = params.endpointName, guestSpaceId = params.guestSpaceId, preview = params.preview;
    var guestPath = guestSpaceId !== undefined ? "/guest/".concat(guestSpaceId) : "";
    var previewPath = preview ? "/preview" : "";
    return "/k".concat(guestPath, "/v1").concat(previewPath, "/").concat(endpointName, ".json");
};
//# sourceMappingURL=url.js.map