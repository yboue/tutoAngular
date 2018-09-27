import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { IbanValidatorDirective } from './shared/iban-valid.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    HeroFormReactiveComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    ForbiddenValidatorDirective,
    IbanValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
