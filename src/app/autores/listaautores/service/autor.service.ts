import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Obra, SearchObraResponse } from "../interfaces/autor.interface";



@Injectable({
    providedIn: 'root'
})

export class autorService {



    private servicioUrl: string = "https://poetrydb.org/";



    constructor(private http: HttpClient) { }

    private _historial: string[] = [];
    public resultados:any[]=[];



    get historial(){
        return [...this._historial];
      }



      BuscarObra(query:string){
        query = query.trim().toLocaleLowerCase();   
     

        

        this.http.get<SearchObraResponse[]>(`https://poetrydb.org/author/${query};Sonnet`)
        .subscribe((resp)=>{   
        this.resultados=resp;
       

       

        });
            
            
         
       


      }



   


}