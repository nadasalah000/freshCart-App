import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/interface/cart.service';
import { WhishlistService } from 'src/app/core/services/whishlist.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit {
  constructor(private _Router: Router, private _CartService: CartService, private _Renderer2: Renderer2, private _WhishlistService:WhishlistService) { }

  @ViewChild('navBar') navElement!: ElementRef;

  @HostListener('window:scroll')
  onScroll(): void {
    if (scrollY > 500) {
      this._Renderer2.addClass(this.navElement.nativeElement, 'px-5');
      this._Renderer2.addClass(this.navElement.nativeElement, 'shadow')
    } else {
      this._Renderer2.removeClass(this.navElement.nativeElement, 'px-5');
      this._Renderer2.removeClass(this.navElement.nativeElement, 'shadow')
    }
  }

  cartNum: number = 0;
  heartNum:number = 0;

  ngOnInit(): void {
    this._CartService.cartNumber.subscribe({
      next: (data) => {
        this.cartNum = data
      },
    });

    this._WhishlistService.heartNumber.subscribe({
      next: (data) => {
        this.heartNum = data
      },
    });

    this._CartService.getCartUser().subscribe({
      next: (response) => {
        console.log(response)
          this.cartNum = response.numOfCartItems
      },
      error:(err)=>{
        console.log(err)
        return
      }
    });

    // this._WhishlistService.addToWhishList(this.heartNum).subscribe({
    //   next: (response) => {
    //     console.log(response)
    //   }
    // });
   
  }

  signOut(): void {
    localStorage.removeItem('eToken');
    this._Router.navigate(['/login'])
  }
}
