import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  public find():Observable<ProdutoEntity[]> {
    return this.http.get<ProdutoEntity[]>( environment.urlSaaS+ '/produtos');
  }
  public save( produto: ProdutoEntity ) {
    if (produto.id) {
      return this.update( produto );
    } else {
      return this.create( produto );
    }
  }
  public delete( id: number ):Observable<ProdutoEntity> {
    return this.http.delete<ProdutoEntity>( environment.urlSaaS+ '/produtos/'+ id);
  }
  private create( produto: ProdutoEntity ):Observable<ProdutoEntity> {
    return this.http.post<ProdutoEntity>( environment.urlSaaS+ '/produtos', produto);
  }
  private update( produto: ProdutoEntity ):Observable<ProdutoEntity> {
    return this.http.put<ProdutoEntity>( environment.urlSaaS+ '/produtos/'+ produto.id, produto);
  }
}
export class ProdutoEntity {

  id: number;
  codigo: string;
  nome: string;
  descricao: string;
  preco: number;

}