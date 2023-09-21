import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  testimonials:any;
  apiURL = "https://elitefit4you.com/test-api/testimonials.json";
  constructor( private http : HttpClient) { }

  ngOnInit(): void {
    this.fetchTestimonials();
    console.log(this.testimonials);
  }
  fetchTestimonials(){
    this.http.get(this.apiURL).subscribe(data=>{
      this.testimonials = data;
    })
  }

}
