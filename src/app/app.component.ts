import { Component } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

//Se despliega en un menú al usuario, estos valores 
//se tienen que buscar por que es más sencillo que calcularlos
estados = [
{abreviacion:'AS',nombre: 'Aguascalientes'},
{abreviacion:'BC',nombre: 'Baja California'},
{abreviacion:'BS',nombre: 'Baja California Sur'},
{abreviacion:'CC',nombre: 'Campeche'},
{abreviacion:'CS',nombre: 'Chiapas'},
{abreviacion:'CH',nombre: 'Chihuahua'},
{abreviacion:'DF',nombre: 'Ciudad de México'},
{abreviacion:'CL',nombre: 'Coahuila'},
{abreviacion:'CM',nombre: 'Colima'},
{abreviacion:'DG',nombre: 'Durango'},
{abreviacion:'GT',nombre: 'Guanajuato'},
{abreviacion:'GR',nombre: 'Guerrero'},
{abreviacion:'HG',nombre: 'Hidalgo'},
{abreviacion:'JC',nombre: 'Jalisco'},
{abreviacion:'MC',nombre: 'México'},
{abreviacion:'MN',nombre: 'Michoacán'},
{abreviacion:'MS',nombre: 'Morelos'},
{abreviacion:'NT',nombre: 'Nayarit'},
{abreviacion:'NL',nombre: 'Nuevo León'},
{abreviacion:'OC',nombre: 'Oaxaca'},
{abreviacion:'PL',nombre: 'Puebla'},
{abreviacion:'QO',nombre: 'Querétaro'},
{abreviacion:'QR',nombre: 'Quintana Roo'},
{abreviacion:'SP',nombre: 'San Luis Potosí'},
{abreviacion:'SL',nombre: 'Sinaloa'},
{abreviacion:'SR',nombre: 'Sonora'},
{abreviacion:'TC',nombre: 'Tabasco'},
{abreviacion:'TS',nombre: 'Tamaulipas'},
{abreviacion:'TL',nombre: 'Tlaxcala'},
{abreviacion:'VZ',nombre: 'Veracruz'},
{abreviacion:'YN',nombre: 'Yucatán'},
{abreviacion:'ZS',nombre: 'Zacatecas'}];

//Vocales almacenadas en un arreglo
vocales = ['a','e','i','o','u'];


//Se utiliza para regresar la primera vocal no inicial de una cadena
vocal(lista = [], cadena){

  for (let i = 1; i < cadena.length; i++) {
    for (let j = 0; j < lista.length; j++) {
      if(lista[j] === cadena[i]){
        return(lista[j]);
      }
    }
  }

}

//Se utiliza para regresar la primera consonante no inicial de una cadena
consonante_no_inicial(lista = [], cadena){
  let contador = 0;
  
    for (let i = 1; i < cadena.length; i++) {
      for (let j = 0; j < lista.length; j++) {
        if(lista[j] !== cadena[i] && cadena[i] !== ' '){
            contador++;          
        }
        if(contador === 5){
          return(cadena[i]);
        }
      }
      contador = 0;
    }  
}

//En caso de ser nombres compuestos se obtiener la última cadena
get_name(cadena){
  let recortada = '';
  let contador = 0;
  
  for(let i=cadena.length;i>=0;i--){
    if(cadena[i] !== ' '){
      contador++;
      
    }else{
     break;
    }
  }


for (let i = (cadena.length-(contador-1)); i <cadena.length; i++) {
  recortada = recortada + cadena[i];
  
}
  return(recortada);
}

  //Variables que se desplegan en la página principal
  title = 'Calculadora de CURP';
  Encabezado1 = 'Nombre';
  Encabezado2 = 'Datos';
  Nombre = 'Elmer Aarón';
  Apellido1 = 'De la Peña';
  Apellido2 = 'Lopez';
  FechaNacimiento = '2001-09-11';
  FechaNacimientoFormateada = (this.FechaNacimiento.substring(2,4)+
                              this.FechaNacimiento.substring(5,7)+
                              this.FechaNacimiento.substring(8,10));

  Sexo = 'H';
  LugarNacimiento = 'CH';
  Inicial_vocal = this.vocal(this.vocales,this.Apellido1);

  
  CURP = (
    //Inicial y primera vocal del apellido paterno
    this.get_name(this.Apellido1)[0]+
    this.Inicial_vocal +

    //Inicial del apellido Materno
    this.Apellido2[0]+

    //Inicial del nombre principal
    this.Nombre[0]+

    //Obtiene la fecha en formato de 6 dígitos de 2001-09-11 => 010911
    this.FechaNacimientoFormateada+

    //Sexo ya sea masculino o femenino
    this.Sexo.substring(0,2) + 

    //Abreviatura del lugar de nacimiento
    this.LugarNacimiento +

    //Primer consonante diferente al primer nombre
    this.consonante_no_inicial(this.vocales,this.get_name(this.Apellido1))+
  
    //Primer consonante diferente al segundo apellido 
    this.consonante_no_inicial(this.vocales,this.get_name(this.Apellido2)) +

    //Primer consonante no incial del nombre
    this.consonante_no_inicial(this.vocales,this.Nombre) 


  );

  
}

//PENDIENTES

//Hacer un switch case para comprobar caracteres especiales y reemplazarlos por lo que 
//se piensa que es "X", investigar en el siguiente link para corroborarlo
//http://www.ordenjuridico.gob.mx/Federal/PE/APF/APC/SEGOB/Instructivos/InstructivoNormativo.pdf

//Hacer trim de espacios en blanco al primer y último caracter

//Remover acentos a las strings para evitar errores

//Por medio de la API de gobierno obtener la homoclave y corroborar los datos
//https://datos.gob.mx/desarrolladores

//Hacer pruebas con nombres reales para comprobar que funciona al 100%