import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { YoutubeService } from 'src/app/core/services/youtube.service';
import { VideoSnippet } from 'src/app/shared/models/youtube.model';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent {
  public videoList?: Subject<VideoSnippet[]>;
  constructor(private youtubeService: YoutubeService){}
  ngOnInit(): void {
    this.videoList = this.youtubeService.videosData;
  }
}
