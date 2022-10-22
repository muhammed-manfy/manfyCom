import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OdrerDetailsService } from 'src/app/services/odrer-details.service';


@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  constructor(private parameter:ActivatedRoute ,private service:OdrerDetailsService) { }
    getMenuId:any
    getMenu:any
  ngOnInit(): void
  {
      this.getMenuId=this.parameter.snapshot.paramMap.get('id');
      console.log(this.getMenuId,"getMenu");
      if(this.getMenuId)
      {
        this.getMenu=this.service.foodDetails.filter((value)=>
         { return value.id==this.getMenuId}
        )
      }
  }
}
