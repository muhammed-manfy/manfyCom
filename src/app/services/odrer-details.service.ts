import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OdrerDetailsService {

  foodDetails=
  [
    {
    id:1,
    foodName:"Berger Sandwich 1",
    foodDetails:"pad-fried masla panner",
    foodPrice:2000,
    foodImage:'../../../assets/Images/home_Images/home2.jpg'
    },
    {
    id:2,
    foodName:"Berger Sandwich 2",
    foodDetails:"pad-fried masla panner 2",
    foodPrice:2000,
    foodImage:'../../../assets/Images/home_Images/home3.jpg'
    },
    {
    id:3,
    foodName:"Berger Sandwich 3",
    foodDetails:"pad-fried masla panner 3",
    foodPrice:2000,
    foodImage:'../../../assets/Images/home_Images/home4.jpg'
    },
    {
      id:4,
      foodName:"Berger Sandwich 4",
      foodDetails:"pad-fried masla panner 4",
      foodPrice:2000,
      foodImage:'../../../assets/Images/home_Images/home5.jpg'
      },
      {
      id:5,
      foodName:"Berger Sandwich 5",
      foodDetails:"pad-fried masla panner 5",
      foodPrice:2000,
      foodImage:'../../../assets/Images/home_Images/home6.jpg'
      },
      {
      id:6,
      foodName:"Berger Sandwich 6",
      foodDetails:"pad-fried masla panner 6",
      foodPrice:2000,
      foodImage:'../../../assets/Images/home_Images/home1.jpg'
      }
  ]
  constructor() { }
}
