import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { Brands } from 'src/app/core/interface/brands';

@Component({
  selector: 'app-brandsdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brandsdetails.component.html',
  styleUrls: ['./brandsdetails.component.scss']
})
export class BrandsdetailsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute, private _ProductService:ProductService){}

  brandId:string|null = '';
  brandDetails:Brands = {} as Brands;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) =>{
        this.brandId = params.get('id')
      }
    });

    this._ProductService.getBrandsDetails(this.brandId).subscribe({
      next: (response) =>{
        console.log(response)
        this.brandDetails = response.data;
      },
    });
  }

}
