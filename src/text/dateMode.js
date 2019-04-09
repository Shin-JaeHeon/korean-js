"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dateMode;
(function (dateMode) {
    dateMode["TRIM"] = "";
    dateMode["SPACE"] = " ";
    dateMode[dateMode["SECOND"] = 7] = "SECOND";
    dateMode[dateMode["MINUTES"] = 6] = "MINUTES";
    dateMode[dateMode["HOUR"] = 5] = "HOUR";
    dateMode[dateMode["DATE"] = 3] = "DATE";
    dateMode[dateMode["MONTH"] = 2] = "MONTH";
    dateMode[dateMode["YEAR"] = 1] = "YEAR";
    dateMode[dateMode["MONTH_DATE"] = 4] = "MONTH_DATE";
})(dateMode || (dateMode = {}));
exports.default = dateMode;
