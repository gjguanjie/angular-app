import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { ElModule } from 'element-angular';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    ElModule.forRoot()
  ],
  declarations: [
    LayoutComponent, 
    HeaderComponent,
    ContentComponent,
    UserComponent
  ]
})
export class LayoutModule { }
