import { Component } from '@angular/core';
import { autorService } from '../../service/autor.service';


@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.css']
})




export class ObrasComponent {
 
constructor(private AutorService: autorService) { }

 get resultados(){
 return this.AutorService.resultados;
}


}



