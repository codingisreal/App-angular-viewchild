import { Directive } from "@angular/core";

@Directive({
  selector: "[avenger]"
})
export class Avenger {
  avengers: string[] = ["Thor", "Captain America", "Hulk", "Iron Man"];
  constructor() {
    //code goes here
  }
}
