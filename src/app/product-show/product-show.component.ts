import {Component, OnInit} from '@angular/core';
import {ApiManagerService} from "../services/Api/api-manager.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {

  product: object = {};
  id?: number;

  constructor(private api: ApiManagerService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.api.getProductById(this.id).then(data => {
        this.product = data;
      }).catch(error => console.error(error));
    });
  }

}
