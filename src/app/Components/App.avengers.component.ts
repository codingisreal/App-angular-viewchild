import { Component } from "@angular/core";

@Component({
  selector: "app-avengers",
  templateUrl: "./App.avengers.component.html"
})
export class Avengers {
  words: string = "Avengers Assemble !";
  catchPhrases: any[] = [
    { name: "Iron Man", phrase: "Millionaire !" },
    { name: "Captain America", phrase: "Captain" },
    { name: "The Hulk", phrase: "Green Monster" }
  ];
  setCatchPhrase(hero: string) {
    this.words = this.catchPhrases.find(
      avenger => avenger.name === hero
    ).phrase;
  }
}
