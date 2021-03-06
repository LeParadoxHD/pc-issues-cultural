import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  databases;

  constructor(private apiService: ApiService) {
    
  }

  ngOnInit() {

  }

  getDatabases() {
    this.apiService.getDatabases().subscribe(res => this.databases = res);
  }

}
