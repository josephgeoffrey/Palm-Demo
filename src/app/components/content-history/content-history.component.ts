import { Component, OnInit } from '@angular/core';
import { ContentHistoryService } from 'src/app/services/content-history.service';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-content-history',
  templateUrl: './content-history.component.html',
  styleUrls: ['./content-history.component.scss']
})
export class ContentHistoryComponent implements OnInit {
  contentHistory: object[];
  constructor(
    private contentHistoryService: ContentHistoryService,
    private dataService: AboutService
    ) { }

  about: any;

  ngOnInit() {
    this.contentHistory = [];
    this.about = {};
    this.dataService.getAboutData().subscribe(data => {
      this.about.applicationName = data.applicationIdentifier.applicationNumberText;
      this.about.filingDate = data.filingDate;
      this.about.continuityForeign = data['continuityForeign'] || 'N/A';
      this.about.title = data.inventionTitle;
      this.about.status = [data.status || 'N/A', data.applicationStatusDate];
      this.about.Examiner = data.examinerName || 'N/A';
      this.about.ID = data.examinerNumber || 'N/A';
      this.about.GAU = data.gau || 'N/A';
      this.about.docketCategory = data['docketCategory'] || 'N/A';
    });
    this.contentHistoryService.getContentHistory().subscribe(res => {
      res.results.forEach( record => {
        this.contentHistory.push({
          recordedDate: record.audit.lastModifiedTime,
          status: record.applicationStatusNumber || '',
          code: record.caseActionCode,
          description: record.caseActionDescriptionText,
          palmEntryDate: record.recordedDate
        });
      });
    });
  }
}
