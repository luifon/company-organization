import { Observable } from 'rxjs';

export interface ListStrategy<T, K> {
  create(data: T): Observable<K>;
  update(id: string, data: T): Observable<K>;
}
