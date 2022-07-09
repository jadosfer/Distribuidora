import { Injectable } from "@angular/core";

@Injectable()
export class UtilityService{
  isMobile() {
    return ( ( window.innerWidth <= 700 ) || ( window.innerHeight <= 700 ) );
  }
}
