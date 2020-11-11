import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { SearchComponent } from '../search/search.component';
import {RepositoryComponent} from '../repository/repository.component';
import { AppComponent } from '../app.component';


const routes: Routes = [
    {path: 'users', component: SearchComponent},
    {path: 'repository', component: RepositoryComponent},
    {path: '', redirectTo: '/users', pathMatch: 'full'},
];


@NgModule({
  declarations: [AppComponent, SearchComponent, RepositoryComponent],

  imports: [CommonModule,RouterModule.forRoot(routes)]
})
export class RoutingModule { }
