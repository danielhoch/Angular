import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nome: string = 'abc';

  pessoa: any = {
    nome: 'Daniel',
    idade: 20
  }

}
