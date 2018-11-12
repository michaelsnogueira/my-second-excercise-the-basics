import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  userName = "";
  buttonDisabled = false;

  onInputEmpty(evento: Event) {
    console.log(this.buttonDisabled);
    this.buttonDisabled =
      (<HTMLInputElement>evento.target).value != "" ? true : false;
  }

  onClick() {
    this.buttonDisabled = false;
    this.userName = "";
  }
}
