import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  mediaSub: Subscription;
  itemValue = '';
  items: Observable<any>;

  constructor(private auth: AuthService, private userService: UserService, public db: AngularFireDatabase,
     private router: Router, private mediaObserver: MediaObserver) {

    auth.user$.subscribe(user => {
      if (!user) return;

      this.userService.save(user);

      let returnUrl = localStorage.getItem('returnUrl');
      if (!returnUrl) return;

      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
