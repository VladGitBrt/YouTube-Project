import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, Subject} from 'rxjs';
import { Filters } from 'src/app/shared/enums/filter.enum';
import { VideoSnippet } from 'src/app/shared/models/youtube.model';
import { environment } from 'src/envoronments/environment';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiUrl: string = '/youtube-api/search';
  private mockJsonUrl = 'assets/mock.json';
  public videosData?: Subject<VideoSnippet[]> = new Subject<VideoSnippet[]>();
  constructor(private http: HttpClient) { }

  public getVideosBySeatchRequest (searchQuerry:string, filter?: Filters):void{
    let params = new HttpParams()
      .set('q', searchQuerry)
      .set('part', 'snippet')
      .set('maxResults', '15')
      .set('key', environment.youtubeApiKey);

    if(filter) {
      params = params.append('order', filter)
    }

    this.http.get<any>(this.apiUrl, { params })
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {
          return this.http.get<any>(this.mockJsonUrl);
        } else {
          return of({ error: 'An error occurred', details: error.message });
        }
      }),
      map(response => response.items.map((item: any) => item.snippet))
    )
    .subscribe(data=>{
      this.videosData?.next(data)
    })
  }
}
