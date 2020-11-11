import { Component, OnInit } from '@angular/core';
import { Repos } from '../repos';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repository: Repos;
  public searchRepo: string;
  public resultCount = 12;

  searchRepos() {
      this.searchRepo = '';
      this.resultCount = 10;
      this.getDataFunction();

  }

  constructor(public gitRepoRequest: SearchRequestService ) { }

ngOnInit() {
      this.resultCount = 5;
    this.gitRepoRequest.gitRepos(this.searchRepo);
}


    getDataFunction() {
        this.gitRepoRequest.gitRepos(this.searchRepo);

    }


}

}