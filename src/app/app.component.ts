import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'angular14-youtube-course';

  constructor(){
    console.log('hi');

    //map recorre y genera un nuevo vector para auxMap
    const auxMap = [1,2,3,4,5].map(num => num * 2)
    console.log("auxMap", auxMap);
    
    //foreach recorre todo el vector, pero no lo modifica
    const auxForEach = [1,2,3,4,5].forEach(num => num * 2)
    console.log("auxForEach", auxForEach);

    //Find recorre todo el vector buscando el numero 3
    const auxFind = [1,2,3,4,5].find(num => num === 3)
    console.log("auxFind", auxFind);    

    //FindIndex busca el numero y devuelve la posicion en la que esta dentro del array
    const auxFindIndex = [1,2,3,4,5].findIndex((num: Number) => num === 3) //los 3 = es para que sea una igualdad TOTAL
    console.log("auxfindIndex", auxFindIndex);  
    
    //indexOf busca el numero y devuelve la posicion en la que esta dentro del array
    const auxIndexOf = [1,2,3,4,5].indexOf(3)
    console.log("auxIndexOf", auxIndexOf);  

    //busca la posicion del la letra M
    const auxIndexOfString = "Hola Mundo".indexOf("M")
    console.log("auxIndexOfString", auxIndexOfString);

    // Esta es la función de filtrado que se aplica a cada elemento del array original. La función toma un argumento num, que representa cada elemento del array original. La condición num % 2 === 0 verifica si el número es par. Si la condición se cumple (es decir, si el número es par), se incluye en el nuevo array resultante; de lo contrario, se excluye.
    const auxFilter = [1,2,3,4,5].filter(num => num % 2 === 0)
    console.log("auxFilter", auxFilter);

    const auxJoin = [1,2,3,4,5].join('-')
    console.log("auxJoin", auxJoin);

    const auxSplit = "hola, munda, angular".split(',')
    console.log("auxSplit", auxSplit);

    const A = ['a','bg','c','d','e'];
    const auxSplice = A.splice(2,1) //elimina desde el elemtno 2, los siguientes 1 elementos
    console.log("auxSplice",A, auxSplice);

    //operador reduce:
    const auxReduce = [1,2,3,4,5].reduce((prev, value, index)=>{
      console.log(prev, value, index);
      return prev + value;
    }, 0)
    console.log("auxReduce", auxReduce)

    //JSON Operators
    const auxJSON ={
      id: 1,
      name: 'JUAN',
      lastName: 'GUTIERREZ'
    };

    //entries hace un array de arrays
    const auxEntries = Object.entries(auxJSON)
    console.log("auxEntries", auxEntries)
    //keys genera un array con solo los keys
    const auxKeys = Object.keys(auxJSON)
    console.log("auxKeys",auxKeys)
    //values genera un array con solo los values
    const auxValues = Object.values(auxJSON)
    console.log("auxValues",auxValues)

    //el "let" hace que una variable solo sea variable dentro del contexto en que se usa, lo que permite que se pueda usar el
    // mismo nombre de la varibale en otro lado sin interferir
    //en los otros lugares donde se uso el mismo nombre de variable.
    // esto es diferente para las variables "const" (constantes)

    for(let i=1; i<= 5; i++){
      console.log('INDEX', i)
    }
    for(let i=1; i<= 5; i++){
      console.log('INDEX', i)
    }

    //SPREAD OPERATOR, REST OPERATOR

    const b=[1,2,3,4,5,6]
    const c=[...b,7,8,9,10]
    console.log("SPREAD",c)//completa el vector de b
    //para utilizar funciones fuera del contructor uso this
    this.getRest(1,2,'hola')

    //DESESTRUCTURACION: a partir de un JSON puedo pedir que me muestre un elemento del mismo. ejemplo el country del objeto persona
    const person ={
      id: 1,
      name: 'JUAN',
      country: {
        idCountry: 1,
        cod: 'LP'
      }
    };
    const {country, id} = person; //acá estoy sacando los elementos de country del json person, pero los defino dentro de una variable const 
                                  //llamada country. puedo sacar mas cosas. ej: id
    console.log('country:', country)
    const o = person.country //acá guardo en una variable de nombre diferente. el tema es que no me permite rescatar muchos elementos a la vez


    //Ej: convertir en array para poder sumar las edades de todas las persnas
    const data = {
      0: {
        id: 1,
        name: 'juan',
        age: 24
      },
      1: {
        id: 2,
        name: 'maria',
        age: 10
      }
    }

    const resp = Object.values(data).reduce((prev, value) => prev + value.age, 0)
    console.log("respuesta: ", resp)

    //Ej 2: convertir a un array filtrar las personas mayores a 10, mostrar solo los ids como array
    const resp1 = Object.values(data).filter(p => p.age > 10).map(p => p.id)
    console.log("respuesta1: ", resp1)    

  }

  getRest(...params: any[]){
    console.log('REST', params)
  }


    private getName(name: string): string{
    return 'hi ' + name;
  }



}
