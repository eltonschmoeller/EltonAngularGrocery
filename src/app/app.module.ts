import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GroceryComponent } from './app.grocery';

@NgModule({
declarations: [
GroceryComponent
],
imports: [
BrowserModule,
FormsModule,
],
providers: [],
bootstrap: [GroceryComponent]
})
export class AppModule { }
