"use strict";(self.webpackChunkfreshCart=self.webpackChunkfreshCart||[]).push([[691],{9691:(x,_,r)=>{r.r(_),r.d(_,{DetailsComponent:()=>v});var n=r(6814),a=r(756),t=r(4769),d=r(1120),u=r(0),p=r(1994),m=r(2425);function g(s,l){if(1&s&&t._UZ(0,"img",16),2&s){const e=t.oxw().$implicit;t.Q6J("src",e,t.LSH)}}function D(s,l){1&s&&(t.ynx(0),t.YNc(1,g,1,1,"ng-template",15),t.BQk())}function h(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"section",1)(1,"div",2)(2,"div",3)(3,"owl-carousel-o",4),t.YNc(4,D,2,0,"ng-container",5),t.qZA()(),t.TgZ(5,"div",6)(6,"div")(7,"h2",7),t._uU(8),t.qZA(),t.TgZ(9,"p",8),t._uU(10),t.qZA(),t.TgZ(11,"span"),t._uU(12),t.qZA(),t.TgZ(13,"div",9)(14,"span",10),t._uU(15),t.ALo(16,"currency"),t.qZA(),t.TgZ(17,"p",11),t._UZ(18,"i",12),t._uU(19),t.qZA()(),t.TgZ(20,"button",13,14),t.NdJ("click",function(){t.CHM(e);const i=t.MAs(21),c=t.oxw();return t.KtG(c.addProduct(c.productDetails._id,i))}),t._uU(22,"+Add To Cart"),t.qZA()()()()()}if(2&s){const e=t.oxw();t.xp6(3),t.Q6J("options",e.productDetailsOptions),t.xp6(1),t.Q6J("ngForOf",e.productDetails.images),t.xp6(4),t.Oqu(e.productDetails.title),t.xp6(2),t.Oqu(e.productDetails.description),t.xp6(2),t.Oqu(e.productDetails.category.name),t.xp6(3),t.hij(" ",t.xi3(16,7,e.productDetails.price,"EGP")," "),t.xp6(4),t.hij(" ",e.productDetails.ratingsAverage," ")}}let v=(()=>{class s{constructor(e,o,i,c,f){this._ActivatedRoute=e,this._ProductService=o,this._Renderer2=i,this._CartService=c,this._ToastrService=f,this.productDetails=null,this.productDetailsOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!1,navSpeed:700,navText:["",""],items:1,nav:!0}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:e=>{this.productId=e.get("id"),console.log(this.productId)}}),this._ProductService.getProductDetails(this.productId).subscribe({next:({data:e})=>{console.log(e),this.productDetails=e}})}addProduct(e,o){this._Renderer2.setAttribute(o,"disabled","true"),this._CartService.addToCart(e).subscribe({next:i=>{console.log(i),this._ToastrService.success(i.message),this._Renderer2.removeAttribute(o,"disabled"),this._CartService.cartNumber.next(i.numOfCartItems)},error:i=>{this._Renderer2.removeAttribute(o,"disabled")}})}static#t=this.\u0275fac=function(o){return new(o||s)(t.Y36(d.gz),t.Y36(u.M),t.Y36(t.Qsj),t.Y36(p.N),t.Y36(m._W))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-details"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","w-75 mx-auto rounded shadow p-3 mb-4",4,"ngIf"],[1,"w-75","mx-auto","rounded","shadow","p-3","mb-4"],[1,"row","align-items-center","g-4"],[1,"col-md-3"],[3,"options"],[4,"ngFor","ngForOf"],[1,"col-md-9"],[1,"h5"],[1,"text-muted","small"],[1,"d-flex","align-items-center","justify-content-between","my-3"],[1,"small"],[1,"mb-0"],[1,"fa-solid","fa-star",2,"color","#cdbc04"],[1,"main-btn","w-100","py-2",3,"click"],["btnAdd",""],["carouselSlide",""],[1,"w-100",3,"src"]],template:function(o,i){1&o&&t.YNc(0,h,23,10,"section",0),2&o&&t.Q6J("ngIf",i.productDetails)},dependencies:[n.ez,n.sg,n.O5,n.H9,a.bB,a.Fy,a.Mp]})}return s})()}}]);