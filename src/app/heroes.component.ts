import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'heores',
  templateUrl:'./heroes.component.html',
  styleUrls: ['heroes.component.css']
})

export class HeroesComponent implements OnInit {    
  selectedHero : Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService,
              private router: Router  ) {};

  getHeroes(): void {
    this.heroService.getHeroes().then(result => this.heroes = result);
  };

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero)
  {    
    this.selectedHero = hero;
  };

  gotoDetail(): void {
    this.router.navigate(['/detail',this.selectedHero.id]);
  }

};


