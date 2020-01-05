import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutes } from './router/app.routing';
import { ElModule } from 'element-angular';
import { LayoutModule } from './layout/layout.module';
import { LoginModule } from './login/login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      ElModule.forRoot(),
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutes,
      LayoutModule,
      LoginModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
