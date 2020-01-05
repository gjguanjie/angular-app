import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToUser() {
    this.router.navigate(['index/user'])
  }

  handle(path: string): void {
    this.router.navigate([`index/` + path])
  }
}
