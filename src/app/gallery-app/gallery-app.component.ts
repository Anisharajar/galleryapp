import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-gallery-app',
  templateUrl: './gallery-app.component.html',
  styleUrls: ['./gallery-app.component.css']
})
export class GalleryAppComponent implements OnInit {

  constructor(private api:ApiService) { 
    api.viewgallary().subscribe(
      (Response)=>{
        this.data=Response
      }
    )
  }

  ngOnInit(): void {
  }
 data:any=[]

}