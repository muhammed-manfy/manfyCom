import { Component, OnInit } from '@angular/core';
import { OdrerDetailsService } from 'src/app/services/odrer-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private srvice:OdrerDetailsService) { }
    foodData:any
  ngOnInit(): void
   {
     this.foodData=this.srvice.foodDetails;
   }

}
