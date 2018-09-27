import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/forbidden-name.directive';
import { ibanValidator } from '../shared/iban-valid.directive';



@Component({
  selector: 'app-hero-form-reactive',
  templateUrl: './hero-form-reactive.component.html',
  styleUrls: ['./hero-form-reactive.component.css']
})
export class HeroFormReactiveComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0], iban: '' };

heroForm: FormGroup;


ngOnInit(): void {

  this.heroForm = new FormGroup({
    'name': new FormControl(this.hero.name, [
      Validators.required,
      Validators.minLength(4),
      forbiddenNameValidator(/bob/i)]),
    'iban': new FormControl(this.hero.iban, [
      Validators.required,
      ibanValidator()])
  });
}

get name() { return this.heroForm.get('name'); }
get iban() { return this.heroForm.get('iban'); }

}
