import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BvbooksBooksComponent } from './bvbooks-books/bvbooks-books.component';
import { BvbooksAboutComponent } from './bvbooks-about/bvbooks-about.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'books',
    pathMatch:'full'
  },
  {
    path: 'books',
    component: BvbooksBooksComponent
  },
  {
    path: 'about',
    component: BvbooksAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
