import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  selectedCard(id:string){
    const element = document.getElementById(id);
    element?.classList.add('s-card--hovered');

    const main = document.getElementById('main');
  }

  unselectedCard(id:string){
    const element = document.getElementById(id);
    element?.classList.remove('s-card--hovered');
  }

}

