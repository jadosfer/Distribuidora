import { Injectable } from "@angular/core";

@Injectable()
export class UtilityService{
  isMobile() {
    return ( ( window.innerWidth <= 900 ) && ( window.innerHeight <= 900 ) );
  }
}
