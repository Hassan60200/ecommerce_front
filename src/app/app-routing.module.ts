import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeViewComponent} from "./home-view/home-view.component";
import {CategoryListComponent} from "./category-list/category-list.component";



const routes: Routes = [
  {
    path: '', component: HomeViewComponent
  },
  {
    path: '/category', component: CategoryListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
