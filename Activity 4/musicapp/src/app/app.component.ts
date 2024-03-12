import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'My Music Collection';
  version: string = '1.0';

  constructor(private router: Router){}

  displayVision(){
    alert(this.version);
  };

  displayArtisitList(){
    this.router.navigate(['list-artists'], { queryParams: { data: new Date()} });
  };
  
}

