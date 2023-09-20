import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPerson } from './person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {

  @Input("nameTest") name: string = "";
  @Input() lastName: string = "";
  @Input() age: number = 0;

  //variable que enviamos desde este componente hacia afuera. 
  @Output() print = new EventEmitter<IPerson>() // puedo poner EventEmitter<string>() donde restringo que tipo d dato se va emitir. puedo no poner nada
  
public onPrint(): void{
    this.print.emit({
      nombre: this.name,
      apellido: this.lastName,
      edad: this.age
    })
  }
}
