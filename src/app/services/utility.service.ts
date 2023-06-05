import { Injectable } from "@angular/core";

@Injectable()
export class UtilityService{
  navBarLoading = true;

  public isMobile() {
    return window.innerWidth <= 700;
  }
}
