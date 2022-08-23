"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectPlatformDeps = exports.platformDeps = void 0;
exports.platformDeps = {
    readFileFromPath: function () {
        throw new Error("not implemented");
    },
    getRequestToken: function () {
        throw new Error("not implemented");
    },
    getDefaultAuth: function () {
        throw new Error("not implemented");
    },
    buildPlatformDependentConfig: function () {
        throw new Error("not implemented");
    },
    buildHeaders: function () {
        throw new Error("not implemented");
    },
    buildFormDataValue: function () {
        throw new Error("not implemented");
    },
    buildBaseUrl: function () {
        throw new Error("not implemented");
    },
    getVersion: function () {
        throw new Error("not implemented");
    },
};
var injectPlatformDeps = function (deps) {
    if (deps.readFileFromPath) {
        exports.platformDeps.readFileFromPath = deps.readFileFromPath;
    }
    if (deps.getRequestToken) {
        exports.platformDeps.getRequestToken = deps.getRequestToken;
    }
    if (deps.getDefaultAuth) {
        exports.platformDeps.getDefaultAuth = deps.getDefaultAuth;
    }
    if (deps.buildPlatformDependentConfig) {
        exports.platformDeps.buildPlatformDependentConfig =
            deps.buildPlatformDependentConfig;
    }
    if (deps.buildHeaders) {
        exports.platformDeps.buildHeaders = deps.buildHeaders;
    }
    if (deps.buildFormDataValue) {
        exports.platformDeps.buildFormDataValue = deps.buildFormDataValue;
    }
    if (deps.buildBaseUrl) {
        exports.platformDeps.buildBaseUrl = deps.buildBaseUrl;
    }
    if (deps.getVersion) {
        exports.platformDeps.getVersion = deps.getVersion;
    }
};
exports.injectPlatformDeps = injectPlatformDeps;
//# sourceMappingURL=index.js.map