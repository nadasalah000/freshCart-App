import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhishlistService } from 'src/app/core/services/whishlist.service';
import { Product } from 'src/app/core/interface/product';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { CartService } from 'src/app/core/interface/cart.service';

@Component({
  selector: 'app-whishlist',
  standalone: true,
  imports: [CommonModule, RouterLink, CuttextPipe],
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.scss']
})
export class WhishlistComponent implements OnInit {
  constructor(private _WhishlistService: WhishlistService, private _ToastrService: ToastrService, private _Renderer2: Renderer2, private _CartService: CartService) { }

  products: Product[] = [];
  wishListData: string[] = [];

  ngOnInit(): void {
    this._WhishlistService.getWhishList().subscribe({
      next: (response) => {
        console.log(response);
        this.products = response.data;
        const newData = response.data.map((item: any) => item._id);
        this.wishListData = newData;
      }
    })
  }

  addProduct(id: any, element: HTMLButtonElement): void {

    this._Renderer2.setAttribute(element, 'disabled', 'true');

    this._CartService.addToCart(id).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.message);
        this._Renderer2.removeAttribute(element, 'disabled');

        this._CartService.cartNumber.next(response.numOfCartItems);
      },
      error: (err) => {
        this._Renderer2.removeAttribute(element, 'disabled');
      }
    })
  }

  addHeart(prodId: string | undefined): void {
    this._WhishlistService.addToWhishList(prodId).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.message);
        this.wishListData = response.data;
      },
    });
  }

  removeHeart(prodId: string | undefined): void {
    this._WhishlistService.removeToWhishList(prodId).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.message);
        this.wishListData = response.data;
        this._WhishlistService.heartNumber.next(response.data.length)

        // this._WhishlistService.getWhishList().subscribe({
        //   next: (response) => {
        //     this.products = response.data;
        //   }
        // })

        const newProductsData = this.products.filter( (item:any)=> this.wishListData.includes(item._id))
        this.products = newProductsData;
      },
    });
  }
}
