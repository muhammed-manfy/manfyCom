import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomeComponent } from './Pages/home/home.component';
import { MenuPageComponent } from './Pages/menu-page/menu-page.component';
import { MenuComponent } from './Pages/menu/menu.component';

const routes: Routes =
[
  {path:'',component:HomeComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Menu',component:MenuComponent},
  {path:'Menu/:id',component:MenuPageComponent},
  {path:'About',component:AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
