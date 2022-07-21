import { PeopleService } from './Shared/Services/people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;

  text: string ="";

  pessoas = [{
    firstName: '',
    lastName: '',
    age: 0
  }];
 
  constructor(private peopleService: PeopleService){
  }

  ngOnInit(){
    this.getPeople();

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

getPeople(){
    this.peopleService.getPeople().subscribe( data =>{
           this.pessoas = data;
    })
    
}



}
