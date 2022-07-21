import { PeopleService } from 'D:/Projetos_DIO/Angular-First-Project/angular-first-project/src/app/Shared/Services/people.service'
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css'],
})
export class ListPeopleComponent implements OnInit {

  pessoas = [{
    firstName: '',
    lastName: '',
    age: 0
  }];


  constructor(private peopleService: PeopleService) {}



  ngOnInit(): void {
    this.getPeople();


  }

  getPeople() {
    this.peopleService.getPeople().subscribe((data) => {
      this.pessoas = data;
    });
  }
}
