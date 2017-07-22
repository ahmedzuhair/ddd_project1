import { Component, OnInit } from '@angular/core';

import { President }        from './president';
import { PresidentService } from './president.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  presidents: President[] = [];

  constructor(private presidentService: PresidentService) { }

  ngOnInit(): void {
    this.presidentService.getPresidents()
      .then(presidents => this.presidents = presidents.slice(1, 7));
  }
}
