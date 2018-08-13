import {
  Component
} from '@angular/core';
import {
  DataService
} from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [];
  constructor(private dataservice: DataService) {
    this.dataservice.getData().subscribe(data => {
      this.posts = data;

      console.log(data);
    });


  }

  title = 'app';

}