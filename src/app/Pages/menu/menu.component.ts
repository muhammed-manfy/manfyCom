import { Component, OnInit } from '@angular/core';
import { OdrerDetailsService } from 'src/app/services/odrer-details.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:OdrerDetailsService){}
    foodData:any;
  ngOnInit(): void
   {
     this.foodData=this.service.foodDetails;
   }

}
