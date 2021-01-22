import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  listData =[{ id: 4, name: 'Laptop', rating: 3 },
    { id: 5, name: 'Phone', rating: 4 },
    { id: 6, name: 'Mice', rating: 4 }]
  constructor() { }

  ngOnInit() {
  }

}