import { Component, OnInit } from '@angular/core';
import { Ipersona } from './persona';
import { PersonasService } from './personas.service';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Ipersona[];
  constructor(private  personasService: PersonasService) { }

  ngOnInit() {
    this.personasService.getPersonas()
      .subscribe(personas=> this.personas = personas);
  }

}
