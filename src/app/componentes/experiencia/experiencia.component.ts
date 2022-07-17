import { LeadingComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList:any;
export class AppComponent{

  exp={
    codigo:""
    posicion : "",
    company: "",
    img: "",
    mode: "",
    start: "",
    end: "",
    timeElapsed: "",
    Place: ""
  }
}

experiencias=[{codigo:1,posicion : 'Ingeniero en Sistemas de Informacion',company:'Correo Argentino',img:,mode : 'Free Lance' , start:'1983', end:'actual', timeElapsed:39 años},

{ codigo :2,posicion : 'Analista de sistemas de informacion ',company:'Alson',img:,mode : 'Free Lance' , start:'1981', end:'1982', timeElapsed:2 años},
}]

hayRegistros(){
  return this.expriencia.lenght>0;
}

  constructor(private datosPorfolio:PorfolioService) { }
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.experienciaList = data.experience;
      // this.miPorfolio-data;
    });
  }

}
borrar(codigo:number) {
  for(let x=0;x<this.experiencias.length;x++)
    if (this.experiencias[x].codigo==codigo)
    {
      this.experiencias.splice(x,1);
      return;
    }
}

agregar() {
  if (this.exper.codigo==0) {
    alert('Debe ingresar un código de experiencia distinto a cero');
    return;
  }
  for(let x=0;x<this.experiencias.length;x++)
  if (this.experiencias[x].codigo==this.art.codigo)
  {
    alert('ya existe una experiencia con dicho codigo');
    return;
  }        
  this.experiencias.push({codigo:this.exper.codigo,
                       posicion:this.exper.posicion,
                       company:this.exper.company,
                       img:this.exper.img,
                       mode:this.exper.mode,
                       start:this.exper.start,
                       end:this.exper.end,
                       timeElapsed:this.exper.timeElapsed,
                       Place:this.exper.Place,

                        });
  
  
  this.exper.codigo=0;
  this.exper.posicion="";
  this.exper.company."";
  this.exper.img="";
  this.exper.mode="";
  this.exper.start="";
  this.exper.end="";
  this.exper.timeElapsed="";
  this.exper.Place="";
  
  
    
}

seleccionar(art: { codigo: number; posicion: string; company: string:img:string;mode:string;start:string;end:string;timeElapsed:string;Place:string;}) {
  this.exper.codigo=exper.codigo;
  this.exper.posicion=exper.posicion;
  this.exper.company=exper.company;
  this.exper.img=exper.img;
  this.exper.mode=exper.mode;
  this.exper.start=exper.start;
  this.exper.end=exper.end;
  this.exper.timeElapsed=exper.timeElapsed;
  this.exper.Place=exper.Place;



}

modificar() {
  for(let x=0;x<this.experencias.length;x++)
    if (this.experiencias[x].codigo==this.art.codigo)
    {
      this.experiencias[x].posicion=this.exper.posicion;
      this.experiencias[x].company=this.exper.company;
      this.experiencias[x].img=this.exper.img;
      this.experiencias[x].mode=this.exper.mode;
      this.experiencias[x].start=this.exper.start;
      this.experiencias[x].end=this.exper.end;
      this.experiencias[x].timeElapsed=this.exper.timeElapsed;
      this.experiencias[x].Place=this.exper.Place;
      
      return;
    }        
  alert('No existe el código de articulo ingresado');
}
}