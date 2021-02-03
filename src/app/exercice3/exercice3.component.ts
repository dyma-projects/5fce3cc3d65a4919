import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice3",
  templateUrl: "./exercice3.component.html",
  styleUrls: ["./exercice3.component.css"],
})
export class Exercice3Component implements OnInit {
  public statut: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  public changeStatut() {
    this.statut = !this.statut;
  }
}
