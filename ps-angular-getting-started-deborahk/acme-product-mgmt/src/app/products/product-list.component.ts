import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy {

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string = '';
    productSvcSub!: Subscription;

    private _listFilter: string = '';
    get listFilter(): string {        
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.performFilter(value);
    }

    filteredProducts: IProduct[] = [];
    
    products: IProduct[] = [];

    constructor(private productService: ProductService){
        
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.productSvcSub =  this.productService.getProducts().subscribe({
            next: x => {
                this.products = x;
                this.filteredProducts = x;
            },
            error: e => this.errorMessage
        });
    
    }

    ngOnDestroy() {
        this.productSvcSub.unsubscribe();
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLowerCase();
        return this.products.filter( (product: IProduct) => product.productName.toLowerCase().includes(filterBy) );
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
      }
}