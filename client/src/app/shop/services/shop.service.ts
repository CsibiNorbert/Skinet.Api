import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBrand } from 'src/app/shared/models/brands.model';
import { IPagination } from 'src/app/shared/models/pagination.model';
import { IType } from 'src/app/shared/models/product-type.model';
import { map } from 'rxjs/operators';
import { ShopParams } from '../models/shop-params.model';
import { IProduct } from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseUrl = 'https://localhost:44347/api/';

  constructor(private http: HttpClient) { }

  public getProducts(shopParams: ShopParams): Observable<IPagination>{
    // filter params object
    let params = new HttpParams();
    if (shopParams.brandId !== 0) {
      params = params.append('brandId', shopParams.brandId.toString());
    }
    if (shopParams.typeId !== 0) {
      params = params.append('typeId', shopParams.typeId.toString());
    }
    if (typeof(shopParams.search) !== 'undefined') {
      params = params.append('search', shopParams.search);
    }
    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber.toString());
    params = params.append('pageIndex', shopParams.pageSize.toString());

    // Since we are sending up HttpParams we need to add the observe here so that we can observe the response - this is required.
    return this.http.get<IPagination>(this.baseUrl + 'products', {observe: 'response', params})
    .pipe(
      // We map the HttpResponse to an IPagination
      map(response => {
        // the body will be the IPagination object
        return response.body;
      })
    );
  }

  public getProduct(id: number): Observable<IProduct>{
    return this.http.get<IProduct>(this.baseUrl + 'products/' + id);
  }

  public getBrands(): Observable<IBrand[]>{
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  public getTypes(): Observable<IType[]>{
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
}
