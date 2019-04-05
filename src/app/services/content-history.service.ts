import { Injectable } from '@angular/core';
import contentHistory from '../../assets/data/contentHistory.json';
import { of } from 'rxjs';
import contenthistoryserve from '../../assets/data/contentHistoryserver.json';

@Injectable({
  providedIn: 'root'
})
export class ContentHistoryService {
  
  constructor() { }

  getContentHistory() {
    //  return of(contentHistory);
    return of(contenthistoryserve);
    
  }


}
