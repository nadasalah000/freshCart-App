import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/interface/cart.service';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private _CartService: CartService, private _Renderer2: Renderer2, private _ToastrService: ToastrService) { }

  cartDetails: any = null;
  cartNumber: number = 0;

  ngOnInit(): void {
    this._CartService.getCartUser().subscribe({
      next: (response) => {
        console.log('getCart' + response);
        this.cartDetails = response.data;
        console.log(this.cartDetails);
        this.cartNumber = response.numOfCartItems;
        console.log(this.cartNumber);
      },
      error:(err)=>{
        console.log(err);
        this._ToastrService.info(`No Product`);
      }
    });
  }

  removeItem(id: string, element: HTMLButtonElement): void {
    this._Renderer2.setAttribute(element, 'disabled', 'true');

    this._CartService.removeCartItem(id).subscribe({
      next: (response) => {
        console.log('remoc' + response);
        this.cartDetails = response.data;
        console.log(this.cartDetails);
        this.cartNumber = response.numOfCartItems;
        console.log(this.cartNumber);
        this._Renderer2.removeAttribute(element, 'disabled');

        this._CartService.cartNumber.next(response.numOfCartItems);
      },
      error: (err) => {
        this._Renderer2.removeAttribute(element, 'disabled');
      }
    })
  }

  changeCount(count: number, id: string, el1: HTMLButtonElement, el2: HTMLButtonElement): void {
    if (count >= 1) {
      this._Renderer2.setAttribute(el1, 'disabled', 'true');
      this._Renderer2.setAttribute(el2, 'disabled', 'true');
      this._CartService.updateCartCount(id, count).subscribe({
        next: (response) => {
          this.cartDetails = response.data;
          this.cartNumber = response.numOfCartItems;
          this._Renderer2.removeAttribute(el1, 'disabled');
          this._Renderer2.removeAttribute(el2, 'disabled');
        },
        error: (err) => {
          this._Renderer2.removeAttribute(el1, 'disabled');
          this._Renderer2.removeAttribute(el2, 'disabled');
        }
      });
    } else {
      this._ToastrService.warning(`This type of product contains a quantity of 1`);
    }
  }

  clear():void{
    this._CartService.clearCart().subscribe({
      next: (response) =>{
        if(response.message === 'success'){
          this.cartDetails = null;
          this.cartNumber = 0;
          this._CartService.cartNumber.next(0);
          this._ToastrService.success(`You have deleted all products`);
        }
      }
    })
  }
}
