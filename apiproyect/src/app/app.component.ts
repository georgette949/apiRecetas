import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'Comidas geniales';
  data: any[] = [];
  searchTerm = '';

  constructor(private apiService: ApiService){ }

  ngOnInit(): void {
    this.llenarData()
  }
    llenarData() {
      this.apiService.getData().subscribe(data => {
        this.data = data;
        console.log(this.data);
      })
    }
}


export class HomeComponent {
  title = 'apiproyect';
}
