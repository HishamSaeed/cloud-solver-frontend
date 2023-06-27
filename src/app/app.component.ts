import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cloud-solver';

  res = 0;

  private num1 = 1;
  private num2 = 2;

  constructor(private apiService: ApiService) {
    this.apiService.setAddress('http://192.168.1.140:8080')
  }

  selectSolver(): void {
    this.num1++;
    this.num2++;
    this.apiService.calculate(this.num1, this.num2, 'add', (result: any)=> {
      console.log(result);
      this.res = result.result;
    })
  }
}
