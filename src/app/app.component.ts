import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  welcome = "SN's Discount Calculator";
  productPrice = 0;
  discountAmount = 0;
  finalPrice;
  calcFinalPrice(price, discount){
    this.finalPrice = price - (price * (discount/100));
  }
}
