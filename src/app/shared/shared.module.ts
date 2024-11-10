import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { SearchComponent } from './components/search/search.component';
import { VideoTileComponent } from './components/video-tile/video-tile.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports:[
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    MaterialModule,
    CommonModule,
    VideoTileComponent,
    SearchComponent
  ],
  declarations: [
    SearchComponent,
    VideoTileComponent
  ],
})
export class SharedModule { }
