import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  // fixed = true;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  logOut() {
    localStorage.removeItem('gebruiker');
    this.router.navigate(['']);
  }

  // toggle() {
  //   if (this.fixed === true) {
  //     this.fixed = false;
  //   } else {
  //     this.fixed = true;
  //   }
  // }
}
