export var platformDeps = {
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
export var injectPlatformDeps = function (deps) {
    if (deps.readFileFromPath) {
        platformDeps.readFileFromPath = deps.readFileFromPath;
    }
    if (deps.getRequestToken) {
        platformDeps.getRequestToken = deps.getRequestToken;
    }
    if (deps.getDefaultAuth) {
        platformDeps.getDefaultAuth = deps.getDefaultAuth;
    }
    if (deps.buildPlatformDependentConfig) {
        platformDeps.buildPlatformDependentConfig =
            deps.buildPlatformDependentConfig;
    }
    if (deps.buildHeaders) {
        platformDeps.buildHeaders = deps.buildHeaders;
    }
    if (deps.buildFormDataValue) {
        platformDeps.buildFormDataValue = deps.buildFormDataValue;
    }
    if (deps.buildBaseUrl) {
        platformDeps.buildBaseUrl = deps.buildBaseUrl;
    }
    if (deps.getVersion) {
        platformDeps.getVersion = deps.getVersion;
    }
};
//# sourceMappingURL=index.js.map