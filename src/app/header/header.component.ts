import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isSearchExpanded = false;
  searchText = '';

  constructor() {}

  ngOnInit() {}

  expandSearch() {
    this.isSearchExpanded = true;
  }

  closeSearch() {
    this.isSearchExpanded = false;
    this.searchText = '';
  }
}
