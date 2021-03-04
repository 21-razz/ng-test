import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

import { LoginComponent } from "./login.component";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  describe("Login Function", () => {

    it("should set errorMsg variable if user credencial is invalid.", () => {
      // Invalid Credencial
      component.username = "username123";
      component.password = "password123";

      component.login();

      expect(component.errorMsg).toBe("Invalid username and password.");
    });

    it("should call 'router.navigate' function with the url of 'welcome' if user credencial is valid", () => {
      spyOn(router, "navigate");

      // Valid Credencial
      component.username = "admin";
      component.password = "password";

      component.login();

      expect(router.navigate).toHaveBeenCalledWith(["welcome"]);
    });

  });
});
