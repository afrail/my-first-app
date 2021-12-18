import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { IRequestBody } from '../models/request';
import { IResponseBody, IResponseData } from '../models/response';

export abstract class CrudRequestService<I extends IRequestBody & IResponseData> {

    protected constructor(private httpClient: HttpClient,
                          protected _BASE_URL: string) {
    }

    // common
    create(i: I): Observable<I> {
        console.log('url : ' + this._BASE_URL)
        return this.httpClient.post<I>( this._BASE_URL, i);
    }


    update(i: I): Observable<I> {
        return this.httpClient.put<I>( this._BASE_URL, i);
    }

    delete(i: I): Observable<{ value: boolean }> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: i
        };
        return this.httpClient.delete<{ value: boolean }>( this._BASE_URL, httpOptions);
    }

    getList(): Observable<I[]> {
        return this.httpClient.get<I[]>( this._BASE_URL);
    }

    // getActiveList(): Observable<I[]> {
    //     return this.httpClient.get<I[]>( this._BASE_URL + '/' + URL_ACTIVE);
    // }
    //
    // getListWithPagination(page: number, size: number): Observable<IResponseBody<I>> {
    //     return this.httpClient.get<IResponseBody<I>>( this._BASE_URL + '/' + URL_GET_PAGEABLE + '/' + page + '/' + size);
    // }

    getListById(id: number): Observable<I[]> {
        return this.httpClient.get<I[]>( this._BASE_URL + '/' + id.toString());
    }







}
