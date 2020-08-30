import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  isUserLogin: Boolean = false;
  userName = "";
  constructor(private router: Router) {}
  ngOnInit() {
    let user: any = JSON.parse(sessionStorage.getItem("user-info"));
    if (user != undefined) {
      this.userName = user.userName;
      this.isUserLogin = true;
    }
  }
  logout() {
    sessionStorage.clear();
    this.isUserLogin = true;
    this.router.navigate(["login"]);
  }
}
