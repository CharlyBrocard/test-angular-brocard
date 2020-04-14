import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { ServiceDisplayService } from './../../services/service-display.service';

@Component({
  selector: 'app-display-two',
  templateUrl: './display-two.component.html',
  styleUrls: ['./display-two.component.css']
})
export class DisplayTwoComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private serviceDisplay: ServiceDisplayService,
  ) { }

  ngOnInit() {
  }

}
