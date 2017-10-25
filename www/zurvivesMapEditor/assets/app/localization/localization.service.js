"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var LocalizationService = /** @class */ (function () {
    function LocalizationService(http) {
        this.http = http;
    }
    LocalizationService.prototype.getLabelTrad = function (localization, label) {
        var _this = this;
        this.getTrad(localization).subscribe(function (data) { return _this.results = data; }, function (error) { return console.log(error); });
        return this.results[label];
    };
    LocalizationService.prototype.getTrad = function (localization) {
        return this.http.get(localization).map(function (res) { return res.json(); });
    };
    LocalizationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], LocalizationService);
    return LocalizationService;
}());
exports.LocalizationService = LocalizationService;
//# sourceMappingURL=localization.service.js.map