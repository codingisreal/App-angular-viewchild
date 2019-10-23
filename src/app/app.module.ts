import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import bootstrap from "bootstrap";

import { AppComponent } from "./app.component";
import { Avengers } from "./Components/App.avengers.component";
@NgModule({
  declarations: [AppComponent, Avengers],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
