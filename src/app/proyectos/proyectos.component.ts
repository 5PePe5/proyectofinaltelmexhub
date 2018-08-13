import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  posts = [];
  constructor(private dataservice: DataService) {
    this.dataservice.getData().subscribe(data => {
      this.posts = data;

      console.log(data);
    });
  }

  ngOnInit() {
  }

}

