import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})
export class SellersComponent implements OnInit {

  httpdata;
  constructor(private http: Http, private MatGridListModule: MatGridListModule, private MatIconModule: MatIconModule) {
    this.getSellers();
  }

  ngOnInit() {
  }

  displaydata(data) {
    console.log(data)
    this.httpdata = data.json()
  }


  getSellers() {
    console.log('clicked')
    this.http.get('http://localhost:4000/api/sellers').subscribe((data) => {
      this.displaydata(data)
    }, (err) => {
      console.log(err)
    })
  }


  colors = ['rgba(255, 213, 0, 0.5)', 'rgba(220, 0, 115, 0.5)', 'rgba(0, 161, 228, 0.5)', 'rgba(0, 155, 39, 0.5)'];
  randomItem;

  getColor() {
    this.randomItem = this.colors[Math.floor(Math.random() * this.colors.length)];
    //  console.log('s',this.randomItem);
    return this.randomItem;
  }

  trackByFn(index, material) {
    return index; // or material.id
  }



}




