import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;

  text: string ="";

  pessoas = [
    {
      nome:"Yuri",
      sobrenome:"Dazio"
    },
    {
      nome:"Erick",
      sobrenome:"Serikawa"
    },
    {
      nome:"Ingrid",
      sobrenome:"Guimares"
    },
    {
      nome:"Mia",
      sobrenome:"Kalifa"
    }
  ];
 
  contructor(){
  }

  ngOnInit(){
    console.log(this.pessoas);
    let interval = setInterval(()=>{
      this.count++;
      if(this.count === 10){
        clearInterval(interval);
      }
    }, 1000)
  }

clicou(nome:string) : void {
      console.log('Clicou no botao', nome);
  }





}
