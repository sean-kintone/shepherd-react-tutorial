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
import { KintoneRestAPIClient } from "../KintoneRestAPIClient";
import { injectPlatformDeps } from "../platform";
import * as browserDeps from "../platform/browser";
describe("KintoneRestAPIClient", function () {
    describe("constructor", function () {
        var originalKintone;
        var originalLocation;
        beforeEach(function () {
            originalKintone = global.kintone;
            originalLocation = global.location;
            global.kintone = {
                getRequestToken: function () { return "dummy request token"; },
            };
            global.location = __assign(__assign({}, global.location), { host: "example.com", protocol: "https:" });
        });
        afterEach(function () {
            global.kintone = originalKintone;
            global.location = originalLocation;
        });
        describe("guestSpaceId", function () {
            var baseUrl = "https://example.com";
            var auth = { apiToken: "foo" };
            it("should not throw an error", function () {
                var validGuestSpaceIds = [
                    undefined,
                    1,
                    "1",
                    100,
                    "100",
                    1234,
                    "1234",
                ];
                validGuestSpaceIds.forEach(function (guestSpaceId) {
                    expect(function () { return new KintoneRestAPIClient({ baseUrl: baseUrl, auth: auth, guestSpaceId: guestSpaceId }); }).not.toThrow();
                });
            });
            it("should throw an error", function () {
                var invalidGuestSpaceIds = ["", null];
                invalidGuestSpaceIds.forEach(function (guestSpaceId) {
                    expect(function () {
                        // @ts-ignore
                        return new KintoneRestAPIClient({ baseUrl: baseUrl, auth: auth, guestSpaceId: guestSpaceId });
                    }).toThrow();
                });
            });
        });
        describe("Header", function () {
            var baseUrl = "https://example.com";
            var USERNAME = "user";
            var PASSWORD = "password";
            var auth = {
                username: USERNAME,
                password: PASSWORD,
            };
            it("should use a location object in browser environment if baseUrl param is not specified", function () {
                injectPlatformDeps(browserDeps);
                var client = new KintoneRestAPIClient();
                expect(client.getBaseUrl()).toBe("https://example.com");
            });
            it("should remove trailing slash from baseUrl", function () {
                var baseUrlWithTrailingSlash = "https://example.com/";
                var client = new KintoneRestAPIClient({
                    baseUrl: baseUrlWithTrailingSlash,
                    auth: auth,
                });
                expect(client.getBaseUrl()).toBe("https://example.com");
            });
            it('should raise an error if the protocol of baseUrl is "http"', function () {
                expect(function () {
                    return new KintoneRestAPIClient({
                        baseUrl: "http://example.com/",
                        auth: auth,
                    });
                }).toThrow('The protocol of baseUrl must be "https".');
            });
            it('should NOT raise an error if the protocol of baseUrl is "http" but hostname is localhost', function () {
                var client = new KintoneRestAPIClient({
                    baseUrl: "http://localhost:8888",
                    auth: auth,
                });
                expect(client.getBaseUrl()).toBe("http://localhost:8888");
            });
            it("should raise an error in Node.js environment if baseUrl param is not specified", function () {
                expect(function () { return new KintoneRestAPIClient({ auth: auth }); }).toThrow("in Node.js environment, baseUrl is required");
            });
            it("should raise an error if trying to use session auth in Node.js environment", function () {
                expect(function () {
                    new KintoneRestAPIClient({
                        baseUrl: baseUrl,
                    });
                }).toThrow("session authentication is not supported in Node.js environment.");
            });
        });
    });
    describe("version", function () {
        it("should provide this library version", function () {
            expect(KintoneRestAPIClient.version).toBe(require("../../package.json").version);
        });
    });
});
//# sourceMappingURL=KintoneRestAPIClient.test.js.map