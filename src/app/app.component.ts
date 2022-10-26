import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Nathan-Example';
  var1 = "Var 1";
  var2 = "Var 2";

   ngOnInit(): void {

   }
}
