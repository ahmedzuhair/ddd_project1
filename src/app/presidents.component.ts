import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { President }                from './president';
import { PresidentService }         from './president.service';

@Component({
  selector: 'my-presidents',
  templateUrl: './presidents.component.html',
  styleUrls: [ './presidents.component.css' ]
})
export class PresidentsComponent implements OnInit {
  presidents: President[];
  selectedPresident: President;

  constructor(
    private presidentService: PresidentService,
    private router: Router) { }

  getPresidents(): void {
    this.presidentService
        .getPresidents()
        .then(presidents => this.presidents = presidents);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.presidentService.create(name)
      .then(president => {
        this.presidents.push(president);
        this.selectedPresident = null;
      });
  }

  delete(president: President): void {
    this.presidentService
        .delete(president.id)
        .then(() => {
          this.presidents = this.presidents.filter(h => h !== president);
          if (this.selectedPresident === president) { this.selectedPresident = null; }
        });
  }

  ngOnInit(): void {
    this.getPresidents();
  }

  onSelect(president: President): void {
    this.selectedPresident = president;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPresident.id]);
  }
}
