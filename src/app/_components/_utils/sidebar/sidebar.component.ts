import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  color: string = "white";
  teste: any = {
    height: 15,
    width: 30,
  };
  constructor() {}

  ngOnInit() {}
}
