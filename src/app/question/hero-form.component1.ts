import { Component } from '@angular/core';
import { Hero } from "./model/hero";

@Component({

  templateUrl: './hero-form.component1.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroForm1Component {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  newHero() {
    this.model = new Hero(42, '', '');
  }
  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }
}