import {Component, OnInit} from '@angular/core';
import {ApiManagerService} from "../services/Api/api-manager.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = []

  constructor(private api: ApiManagerService) {
  }

  ngOnInit() {
    this.api.getAllProducts().then(data => {
      this.products = data
    });
  }
}
