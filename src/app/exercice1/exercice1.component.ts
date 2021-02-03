import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public interpolation: string = "exemple interpolation";
  public img = {
    name: "logo Dyma",
    link: "https://dyma.fr/assets/logo.png",
  };

  @ViewChild("image") public el: ElementRef<HTMLImageElement>;

  constructor() {}

  ngOnInit(): void {}

  public changeWidth() {
    !this.el.nativeElement.style.width
      ? (this.el.nativeElement.style.width = "400px")
      : (this.el.nativeElement.style.width = "");
  }
}
