var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { buildPath } from "./../url";
test.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  endpointName | guestSpaceId | preview      | expected\n  ", "  | ", " | ", " | ", "\n  ", "  | ", " | ", "     | ", "\n  ", "  | ", " | ", "      | ", "\n  ", "  | ", "         | ", " | ", "\n  ", "  | ", "         | ", "     | ", "\n  ", "  | ", "         | ", "      | ", "\n  ", "  | ", "       | ", " | ", "\n  ", "  | ", "       | ", "     | ", "\n  ", "  | ", "       | ", "      | ", "\n"], ["\n  endpointName | guestSpaceId | preview      | expected\n  ", "  | ", " | ", " | ", "\n  ", "  | ", " | ", "     | ", "\n  ", "  | ", " | ", "      | ", "\n  ", "  | ", "         | ", " | ", "\n  ", "  | ", "         | ", "     | ", "\n  ", "  | ", "         | ", "      | ", "\n  ", "  | ", "       | ", " | ", "\n  ", "  | ", "       | ", "     | ", "\n  ", "  | ", "       | ", "      | ", "\n"])), "record", undefined, undefined, "/k/v1/record.json", "record", undefined, false, "/k/v1/record.json", "record", undefined, true, "/k/v1/preview/record.json", "record", 3, undefined, "/k/guest/3/v1/record.json", "record", 3, false, "/k/guest/3/v1/record.json", "record", 3, true, "/k/guest/3/v1/preview/record.json", "record", "3", undefined, "/k/guest/3/v1/record.json", "record", "3", false, "/k/guest/3/v1/record.json", "record", "3", true, "/k/guest/3/v1/preview/record.json")("buildPath", function (_a) {
    var endpointName = _a.endpointName, guestSpaceId = _a.guestSpaceId, preview = _a.preview, expected = _a.expected;
    expect(buildPath({ endpointName: endpointName, guestSpaceId: guestSpaceId, preview: preview })).toBe(expected);
});
var templateObject_1;
//# sourceMappingURL=url.test.js.map