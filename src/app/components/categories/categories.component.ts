import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Category } from 'src/app/core/interface/category';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  constructor(private _ProductService:ProductService){}

  categoryData:Category[] = []

  ngOnInit(): void {
    this._ProductService.getCategories().subscribe({
      next:(response) =>{
        console.log(response)
        this.categoryData = response.data;
        console.log(this.categoryData)
      }
    })
  }
}
