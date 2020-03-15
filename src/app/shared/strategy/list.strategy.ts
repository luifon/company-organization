import { Observable } from 'rxjs';
import { PageableRequest } from '../model/pageable-request';
import { PageableResponse } from '../model/pageable-response';

export interface ListStrategy<T> {
  findPageable(params: PageableRequest): Observable<PageableResponse<any>>;
  delete(id: string): Observable<void>;
  findById(id: string): Observable<T>;
}
