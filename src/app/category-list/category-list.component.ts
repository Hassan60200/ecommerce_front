import { Component, OnInit } from '@angular/core';
import {ApiManagerService} from "../services/Api/api-manager.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{
constructor(private api: ApiManagerService) {
}
  ngOnInit() {

  }
}
