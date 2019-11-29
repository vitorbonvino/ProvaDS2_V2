import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  constructor(private http: HttpClient) { }

  public find():Observable<GeneroEntity[]> {
    return this.http.get<GeneroEntity[]>( environment.urlSaaS+ '/generos');
  }
  public save( genero: GeneroEntity ) {
    if (genero.id) {
      return this.update( genero );
    } else {
      return this.create( genero );
    }
  }
  public delete( id: number ):Observable<GeneroEntity> {
    return this.http.delete<GeneroEntity>( environment.urlSaaS+ '/generos/'+ id);
  }
  private create( genero: GeneroEntity ):Observable<GeneroEntity> {
    return this.http.post<GeneroEntity>( environment.urlSaaS+ '/generos', genero);
  }
  private update( genero: GeneroEntity ):Observable<GeneroEntity> {
    return this.http.put<GeneroEntity>( environment.urlSaaS+ '/generos/'+ genero.id, genero);
  }
}

export class GeneroEntity {
  id: number;
  nome: string;
}