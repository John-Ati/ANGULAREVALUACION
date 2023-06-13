import { autorService } from './../../service/autor.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';




@Component({
  selector: 'app-autoreslist',
  templateUrl: './autoreslist.component.html',
  styleUrls: ['./autoreslist.component.css']
})
export class AutoreslistComponent implements OnInit {

  

  authors: string[] = [];


  constructor(private http: HttpClient, 
    private router: Router, 
    private autorService: autorService) { }

  ngOnInit() {
    this.http.get<any>('https://poetrydb.org/author')
      .subscribe(data => {
        this.authors = data.authors;
      });
  }

  AuthorDetails(author: string) {
    this.router.navigate(['obras']);
    this.autorService.BuscarObra(author);
   

 
  }


}
