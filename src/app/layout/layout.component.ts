import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  @ViewChild('appHeader',{static: false}) header: HeaderComponent;

  constructor(private router: Router) { }

  ngOnInit() {
    let username = sessionStorage.getItem('username')
    if (username == null) {
      this.router.navigate([''])
    }
  }

}
