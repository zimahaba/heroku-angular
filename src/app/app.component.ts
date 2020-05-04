import { Component } from '@angular/core';
import { HerokuService } from './heroku.service';
import { Heroku } from './Heroku';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'herokuapp';

  constructor(private herokuService: HerokuService) {
    
  }

  ngOnInit() {
    console.log('entrou')
    this.herokuService.getHeroku()
      .subscribe((data: Heroku) => this.title = data.title);
    
  }
}
