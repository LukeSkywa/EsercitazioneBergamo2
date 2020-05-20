import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userForm: FormGroup;

  list: User[]= [
    {name: 'Luca', surname: 'Alicata'},
    {name: 'Thomas', surname: 'Rossi'},
    {name: 'Amanpreet', surname: 'Singh'},
  ];

  constructor(private fb: FormBuilder) { 
    this.userForm = this.fb.group({
      name: '',
      surname: ''
    })
  }

  ngOnInit(): void {
  }

  trackList(index, item){
    return index+item.name+item.surname;
  }

  removeItem(index){
    this.list.splice(index, 1);
  }

  addItem(){
    this.list.push(this.userForm.value)
  }

}
