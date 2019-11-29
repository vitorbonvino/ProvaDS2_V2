import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabelaPrecoService {

  constructor(private http: HttpClient) { }

  public find():Observable<TabelaPrecoEntity[]> {
    return this.http.get<TabelaPrecoEntity[]>( environment.urlSaaS+ '/tabelaprecos');
  }
  public save( tabelapreco: TabelaPrecoEntity ) {
    if (tabelapreco.id) {
      return this.update( tabelapreco );
    } else {
      return this.create( tabelapreco );
    }
  }
  public delete( id: number ):Observable<TabelaPrecoEntity> {
    return this.http.delete<TabelaPrecoEntity>( environment.urlSaaS+ '/tabelaprecos/'+ id);
  }
  private create( tabelapreco: TabelaPrecoEntity ):Observable<TabelaPrecoEntity> {
    return this.http.post<TabelaPrecoEntity>( environment.urlSaaS+ '/tabelaprecos', tabelapreco);
  }
  private update( tabelapreco: TabelaPrecoEntity ):Observable<TabelaPrecoEntity> {
    return this.http.put<TabelaPrecoEntity>( environment.urlSaaS+ '/tabelaprecos/'+ tabelapreco.id, tabelapreco);
  }
}

export class TabelaPrecoEntity {

  id: number;
  codigo: string;
  nome: string;
  fator: number;

}