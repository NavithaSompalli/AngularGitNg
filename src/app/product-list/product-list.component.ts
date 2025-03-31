import { ContentChild } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { Component, ElementRef, ViewChild,QueryList } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //name="John Smith";
  addToCart:number = 0;
  product = {
    name: 'iPhone X',
    price: 789,
    color: 'Black',
    discount: 8.5,
    inStock: 10,
    pImage: '/assets/images/iphone.png'
  }


  toggle: boolean = true;

  onToggle(){
    this.toggle = !this.toggle;
  }

  @ViewChildren('inputEl') inputElmeents: QueryList< ElementRef>; 
 fullname: string = '';
  show(){

    let name=""
    this.inputElmeents.forEach((el) =>{
      name += el.nativeElement.value+" ";
    })

    name.trim();

    this.fullname = name;
  }

  
  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100)
  }

  onNameChange(event: any){
    //this.name = event.target.value;
    //console.log(event.target.value);
  }

  decrementCartValue(){
    if(this.addToCart > 0){
      this.addToCart--;
    }
    
  }

  incrementCartValue(){
    if(this.addToCart < this.product.inStock){
      this.addToCart++;
    }
    
  }


  numbers = [30, 40, 50, 60, 70, 80];
  getClass(num) {
    if (num <= 50) return 'primary';
    else return 'secondary';
  }
}
