import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {TokenStorageService} from "../service/token-storage.service";
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  isDataLoaded = false;
  user!: User;

  constructor(private tokenService: TokenStorageService,
              private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenService.getToken();
    if(this.isLoggedIn) {
      this.userService.getCurrentUser()
        .subscribe(data => {
          this.user = data;
          this.isDataLoaded = true;
        })
    }
  }

  login():void{
    this.router.navigate(['/login'])
  }
  register():void{
    this.router.navigate(['/register'])
  }
  logout():void{
    this.tokenService.logOut();
    this.router.navigate(['/login']);
  }
}
