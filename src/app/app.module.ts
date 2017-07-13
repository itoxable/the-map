import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MapComponent } from './components/map/map.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    Title,
    RouterModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
