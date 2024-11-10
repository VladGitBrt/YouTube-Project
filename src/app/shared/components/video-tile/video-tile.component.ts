import { Component, Input, OnInit } from '@angular/core';
import { VideoSnippet } from '../../models/youtube.model';


@Component({
  selector: 'app-video-tile',
  templateUrl: './video-tile.component.html',
  styleUrls: ['./video-tile.component.css']
})
export class VideoTileComponent{
  @Input() video: VideoSnippet | undefined;
  constructor(){}
}
