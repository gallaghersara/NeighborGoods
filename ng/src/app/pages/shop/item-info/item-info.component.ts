import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../../services/shop.service';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit {
  itemselected: any;
  public httpdata = [];
 public selectId;
  constructor(
    private _shs: ShopService,
  ) {
    this.getItemsHere();
  }

  ngOnInit() {
  }

  displaydata(data) {
    console.log(data); //----------------------test
    this.httpdata = data;
  }

  getItemsHere() {
    this._shs.getItems()
      .subscribe((data) => {
        this.displaydata(data);
      }, (err) => {
        console.log(err);
      });
  }

  goto(){
    let select = this.selectId ? this.selectId : null
  
  }
}
