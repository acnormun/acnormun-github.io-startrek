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
    main?.classList.add('gray');

    const controler = document.getElementById('controler')
    controler?.classList.add('disapear')

    const background = document.getElementById('background');
    background?.classList.add('gray-filter');
    background?.classList.remove('initial-image');
    background?.classList.add(`image-${id}`)


  }

  unselectedCard(id:string){
    const element = document.getElementById(id);
    element?.classList.remove('s-card--hovered');

    const main = document.getElementById('main');
    main?.classList.remove('gray');

    const controler = document.getElementById('controler')
    controler?.classList.remove('disapear')

    const background = document.getElementById('background');
    background?.classList.remove('gray-filter')
    background?.classList.add('initial-image');
    background?.classList.remove(`image-${id}`)


  }

  rotate(id:number){


    const numberCards = document.querySelector('.s-cards-carousel')?.children.length ?? 1;
    let position = [[1,2,3,1],[3,1,2,2],[2,3,1,3]];

    for(let i=1;i<=numberCards;i++){
      const rotate= id%3;
      const card = document.getElementById(`st-${i}`);
      card?.removeAttribute("class")
      card?.classList.add('s-card')
      card?.classList.add(`s-card-${position[id-1][i-1]}`)

      if(i==id){
        const button = document.getElementById(`${i}`);
        button?.classList.add('s-controller__button--active');
      }else{
        const button = document.getElementById(`${i}`);
        button?.classList.remove('s-controller__button--active')
      }

    }

  }

}

