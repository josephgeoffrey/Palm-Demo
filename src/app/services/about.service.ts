import { Injectable } from '@angular/core';
import aboutData from '../../assets/data/link1.json';
import aboutDatafromServer from '../../assets/data/about.json';
import { of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  constructor(private http: HttpClient) {
  }

  getAboutData() {
    //return of(aboutData);
    return of(aboutDatafromServer);
    //return this.http.get('https://opsg-api.sit.uspto.gov/OPSGPCDMServices/file-content-transaction-history?applicationNumber='+);
  }
}
