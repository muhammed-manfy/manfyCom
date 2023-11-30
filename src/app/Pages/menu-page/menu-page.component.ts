import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup ,  UntypedFormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OdrerDetailsService } from 'src/app/services/odrer-details.service';


@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  getMenuId:any;
  getMenu:any;
  orderForm!:UntypedFormGroup;
  orderCheckbox:any;
  constructor(private parameter:ActivatedRoute,private service:OdrerDetailsService) { 
    this.orderForm = new UntypedFormGroup ({
      fullname: new UntypedFormControl(''),
      mobile: new UntypedFormControl(''),
      address: new UntypedFormControl('')
    });
  }

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
  orderSubmit(){
    const fullname = this.orderForm.get("fullname")?.value;
    const mobile = this.orderForm.get("mobile")?.value;
    const address = this.orderForm.get("address")?.value;
    if(fullname  == '' || mobile == '' || address ==''){
      this.orderCheckbox = false;
      console.log(this.orderForm.value);
    }else{
      this.orderCheckbox = true;
    }
  }
}
