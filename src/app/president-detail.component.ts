import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { President }        from './president';
import { PresidentService } from './president.service';

@Component({
  selector: 'president-detail',
  templateUrl: './president-detail.component.html',
  styleUrls: [ './president-detail.component.css' ]
})
export class PresidentDetailComponent implements OnInit {
  president: President;

  constructor(
    private presidentService: PresidentService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.presidentService.getPresident(+params.get('id')))
      .subscribe(president => this.president = president);
  }

  save(): void {
    this.presidentService.update(this.president)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
