import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuardService implements CanLoad, CanActivate {

  constructor(private router: Router) { }
  canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    if (sessionStorage.getItem("user") == null) {
      return true;
    } else {
      this.router.navigateByUrl("/home");
      return false;
    }
  }
  
  canLoad(route: Route, segments: import("@angular/router").UrlSegment[]): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
    if (sessionStorage.getItem("user") == null) {
      return true;
    } else {
      this.router.navigateByUrl("/home");
      return false;
    }
  }
}
