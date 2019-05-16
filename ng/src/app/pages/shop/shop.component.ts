import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ItemInfoComponent } from './item-info/item-info.component';
import { ShopService } from '../../services/shop.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public httpdata = [];

  constructor(
    public dialog: MatDialog,
    private _shs: ShopService,
  ) {
    this.getItemsHere();
  }

  ngOnInit() { }
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

  itemInfo() {

    this.dialog.open(ItemInfoComponent, {

    });
  
    // dialogRef.afterClosed().subscribe(result => {
    // });

  }


}


