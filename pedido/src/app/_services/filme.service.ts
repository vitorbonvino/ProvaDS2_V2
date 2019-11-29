import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { GeneroEntity } from './genero.service';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  constructor(private http: HttpClient) { }

  public find():Observable<FilmeEntity[]> {
    return this.http.get<FilmeEntity[]>( environment.urlSaaS+ '/filmes');
  }
  public save( filme: FilmeEntity ) {
    if (filme.id) {
      return this.update( filme );
    } else {
      return this.create( filme );
    }
  }
  public delete( id: number ):Observable<FilmeEntity> {
    return this.http.delete<FilmeEntity>( environment.urlSaaS+ '/filmes/'+ id);
  }
  private create( filme: FilmeEntity ):Observable<FilmeEntity> {
    return this.http.post<FilmeEntity>( environment.urlSaaS+ '/filmes', filme);
  }
  private update( filme: FilmeEntity ):Observable<FilmeEntity> {
    return this.http.put<FilmeEntity>( environment.urlSaaS+ '/filmes/'+ filme.id, filme);
  }
}

export class FilmeEntity {
  id: number;
  nome: string;
  genero: GeneroEntity;
}