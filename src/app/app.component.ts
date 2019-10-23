import { Component, ViewChild, AfterViewInit, ElementRef } from "@angular/core";
import { Avengers } from "./Components/App.avengers.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  @ViewChild("avengersSpot")
  avengers: Avengers;
  @ViewChild("marvel")
  marvel: ElementRef;
  ngAfterViewInit() {}

  catchPhrase(event: any) {
    // currText: string= event.target.innerHTML;
    //console.log(this.avengers);
    //console.log(event.target.innerHTML);
    this.avengers.words = this.avengers.catchPhrases.find(
      avenger => avenger.name === "Iron Man"
    ).phrase;
    //this.marvel.nativeElement.style.color = 'red';
    //this.avengers.setCatchPhrase(event.target.innerHTML);
  }
}
