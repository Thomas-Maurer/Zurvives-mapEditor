//We need to do this to get createjs library working with Typescript
/// <reference path="../../../node_modules/@types/createjs-lib/index.d.ts"/>
/// <reference path="../../../node_modules/@types/easeljs/index.d.ts"/>

import {Component, OnInit, ElementRef} from "@angular/core";
import { JsonPipe } from '@angular/common';
import {LocalizationService} from '../localization/localization.service';
@Component({
    selector: 'map-creator',
    templateUrl: '/templates/map-creator/map-creator.ejs'
})
export class MapcreatorComponent implements OnInit{
  labels : {};
  width : number;
  grid : any[];
  tile_size : number;
  stage : any;
  localService : any;
  trad : {}[];
  currentUserLocalization : string;

  constructor(private localizationService: LocalizationService) {
    this.localService = localizationService;
    //get the currentUser localisation to know which language we need to use
    this.currentUserLocalization = 'fr';
    //All the labels in the template
    this.labels =
      {
        'mapCreation' : '',
        'newMap' : '',
        'userMenu' : '',
        'dashboard' : ''
      };
      this.tile_size = 35;
      this.grid = [];
      this.width = 800;

  }
  ngOnInit() {
      this.localService.getTrad(this.currentUserLocalization).then((data:any) => {
        this.trad = data;
        //Go through each labels key to get the translate
        for (let key in this.labels)
        {
          this.labels[key] = this.trad[key];
        }
      });
      //create our canvas
      this.stage = new createjs.Stage("demoCanvas");
      //Create a Shape DisplayObject.
      this.displayBoard();
      //Update stage will render next frame
      this.stage.update();
    }

    displayBoard()
			{
        var x,y = -1;
				for(var i = 0; i < Math.pow(this.width % this.tile_size, 2); i++)
				{
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
					if(((x + y) % 2) == 1)
					{
						tile.graphics.beginFill("black").drawRect(x*this.tile_size,y*this.tile_size,this.tile_size,this.tile_size);
					} else {
						tile.graphics.beginFill("#C6CACC").drawRect(x*this.tile_size,y*this.tile_size,this.tile_size,this.tile_size);
					}
					this.grid.push(tile);
					this.stage.addChild(this.grid[i]);
					this.stage.setChildIndex( tile, i);
				}
			}
      //When we click on a tile
      handleClick(event:any) {
        console.log(event);
      }
}
