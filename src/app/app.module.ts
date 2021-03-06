import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule,Routes} from '@angular/router';
const routes:Routes=[
{path:"",redirectTo:"home",pathMatch:"full"},
{path:"home",component:HomeComponent},
{path:"about",component:AboutComponent},
{path:"contact",component:ContactComponent},
{path:"**",redirectTo:"home"}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
