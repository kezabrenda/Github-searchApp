import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repos } from '../repos';
import { Search } from '../search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
