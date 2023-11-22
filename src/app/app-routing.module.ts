import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeViewComponent} from "./home-view/home-view.component";
import {CategoryListComponent} from "./category-list/category-list.component";
import {CategoryShowComponent} from "./category-show/category-show.component";
import {ProductListComponent} from "./product-list/product-list.component";


const routes: Routes = [
  {
    path: '', component: HomeViewComponent
  },
  {
    path: 'category', component: CategoryListComponent
  },
  {
    path: 'category/:id', component: CategoryShowComponent
  },
  {
    path: 'products', component: ProductListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
