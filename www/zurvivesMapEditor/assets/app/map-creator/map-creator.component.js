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
var localization_service_1 = require("../localization/localization.service");
var MapcreatorComponent = /** @class */ (function () {
    function MapcreatorComponent(localizationService) {
        this.localizationService = localizationService;
        this.labels = [
            {
                'name': 'mapCreation',
                'value': ''
            },
            {
                'name': 'newMap',
                'value': ''
            }
        ];
        this.labels.forEach(function (label) {
            label.value = localizationService.getLabelTrad('fr', label.name);
        });
    }
    MapcreatorComponent = __decorate([
        core_1.Component({
            selector: 'map-creator',
            templateUrl: '/templates/map-creator/map-creator.ejs'
        }),
        __metadata("design:paramtypes", [localization_service_1.LocalizationService])
    ], MapcreatorComponent);
    return MapcreatorComponent;
}());
exports.MapcreatorComponent = MapcreatorComponent;
//# sourceMappingURL=map-creator.component.js.map