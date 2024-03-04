import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interface/product';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/interface/cart.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/core/interface/category';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { WhishlistService } from 'src/app/core/services/whishlist.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CuttextPipe, RouterLink, CarouselModule, SearchPipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _ProductService: ProductService, private _CartService: CartService, private _ToastrService: ToastrService, private _Renderer2: Renderer2, private _WhishlistService: WhishlistService) { }

  products: Product[] = [];
  catgories: Category[] = [];
  term: string = '';
  wishListData: string[] = [];

  ngOnInit(): void {
    this._ProductService.getProducts().subscribe({
      next: (response) => {
        console.log(response.data);
        this.products = response.data;
      }
    });

    this._ProductService.getCategories().subscribe({
      next: (response) => {
        console.log(response);
        this.catgories = response.data;
      }
    });

    this._WhishlistService.getWhishList().subscribe({
      next: (response) => {
        const newData = response.data.map((item: any) => item._id);
        this.wishListData = newData;
      }
    })
  }

  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 2000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: false
  }

  mainSlideOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    navText: ['next', 'prev'],
    items: 1,
    nav: false
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
        this._WhishlistService.heartNumber.next(response.data.length)
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
      },
    });
  }

}
