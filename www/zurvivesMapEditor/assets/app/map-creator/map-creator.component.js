"use strict";
//We need to do this to get createjs library working with Typescript
/// <reference path="../../../node_modules/@types/createjs-lib/index.d.ts"/>
/// <reference path="../../../node_modules/@types/easeljs/index.d.ts"/>
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
        this.localService = localizationService;
        //get the currentUser localisation to know which language we need to use
        this.currentUserLocalization = 'fr';
        //All the labels in the template
        this.labels =
            {
                'mapCreation': '',
                'newMap': '',
                'userMenu': '',
                'dashboard': ''
            };
        this.tile_size = 35;
        this.grid = [];
        this.width = 800;
    }
    MapcreatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.localService.getTrad(this.currentUserLocalization).then(function (data) {
            _this.trad = data;
            //Go through each labels key to get the translate
            for (var key in _this.labels) {
                _this.labels[key] = _this.trad[key];
            }
        });
        //create our canvas
        this.stage = new createjs.Stage("demoCanvas");
        //Create a Shape DisplayObject.
        this.displayBoard();
        //Update stage will render next frame
        this.stage.update();
    };
    MapcreatorComponent.prototype.displayBoard = function () {
        var x, y = -1;
        for (var i = 0; i < Math.pow(this.width % this.tile_size, 2); i++) {
            // counting the top left as (0,0)
            // left to right each line (then top two bottom from line to line)
            x++;
            if (i % this.tile_size == 0) {
                y++;
                x = 0;
            }
            var tile = new createjs.Shape();
            //add an event on the tile
            tile.addEventListener("click", this.handleClick);
            if (((x + y) % 2) == 1) {
                tile.graphics.beginFill("black").drawRect(x * this.tile_size, y * this.tile_size, this.tile_size, this.tile_size);
            }
            else {
                tile.graphics.beginFill("#C6CACC").drawRect(x * this.tile_size, y * this.tile_size, this.tile_size, this.tile_size);
            }
            this.grid.push(tile);
            this.stage.addChild(this.grid[i]);
            this.stage.setChildIndex(tile, i);
        }
        this.drawBorder();
    };
    MapcreatorComponent.prototype.drawBorder = function () {
        // Draw the border lines
        var border = new createjs.Shape();
        border.graphics.setStrokeStyle(3).beginStroke("black").moveTo(0, 0).lineTo(280, 0).lineTo(280, 280).lineTo(0, 280).lineTo(0, 0).endStroke();
        this.stage.addChild(border);
    };
    MapcreatorComponent.prototype.handleClick = function (event) {
        console.log(event);
    };
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