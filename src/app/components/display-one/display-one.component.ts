import { ServiceDisplayService } from './../../services/service-display.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-display-one',
  templateUrl: './display-one.component.html',
  styleUrls: ['./display-one.component.css']
})
export class DisplayOneComponent implements OnInit {
  displayOne;

  name = 'Rémi';
  constructor(
    private http:HttpClient,
    private serviceDisplay: ServiceDisplayService,
  ) { }



  ngOnInit(){
    const httpOptions = {
      header: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }

    const req = this.http.post<any>('https://api.wizbii.com/v1/account/validate', {
      username: 'decouverte',
      password: 'decouverte',
      client_id: 'test',
      grant_type: 'password'

    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
  }
    

}