import { Component } from '@angular/core';
import { Filters } from '../../enums/filter.enum';
import { YoutubeService } from 'src/app/core/services/youtube.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  public filterValue: Filters | undefined;
  public searchText = new FormControl('');
  constructor(private youtubeService: YoutubeService){}

  public search():void{
    if(this.filterValue){
      this.youtubeService.getVideosBySeatchRequest(this.searchText.value!,this.filterValue)
    } else {
      this.youtubeService.getVideosBySeatchRequest(this.searchText.value!)
    }
  }
}
