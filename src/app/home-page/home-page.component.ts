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

  rotate(id:number){

    const numberCards = document.querySelector('.s-cards-carousel')?.children.length ?? 1;
    let rotate =0;

    for(let i=1;i<=numberCards;i++){


      const rotate= id%3;

      const card = document.getElementById(`st-${i}`);
      card?.removeAttribute("class")
      card?.classList.add('s-card')
      card?.classList.add(`s-card-${i+rotate}}`)

  }

}

}

