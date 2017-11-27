"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = require("graphql-tag");
exports.zoneSchema = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  enum ContentType {\n    Audio\n    Video\n    PhotoGallery\n  }\n\n  type Zone {\n    id: Int!\n    site: Int\n    hash: String\n    type: [ContentType]\n    broadcast: Boolean\n    name: String!\n  }\n"], ["\n  enum ContentType {\n    Audio\n    Video\n    PhotoGallery\n  }\n\n  type Zone {\n    id: Int!\n    site: Int\n    hash: String\n    type: [ContentType]\n    broadcast: Boolean\n    name: String!\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=zoneSchema.js.map