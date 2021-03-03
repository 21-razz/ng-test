import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMsg: string;

  constructor(
    private router: Router
  ) {
    this.username = "";
    this.password = "";
    this.errorMsg = "";
  }

  ngOnInit(): void {
  }

  login(): void {
    if (this.username !== "admin" && this.password !== "password") {
      this.errorMsg = "Invalid username and password.";
      return;
    }

    this.router.navigate(["welcome"]);
  }

}
