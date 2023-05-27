import { Component } from '@angular/core';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'translator-app';
  textToTranslate: string = '';
  translatedText: string = '';
  selectedFromLanguage: string = '';
  selectedToLanguage: string = '';

  constructor(private translationService: TranslationService){}

  translate(){
    this.translationService.translateText(this.textToTranslate, this.selectedFromLanguage, this.selectedToLanguage).subscribe(response=>{
      console.log(response);
      this.translatedText = response.translation;
    });
  }

  clear(){
    this.textToTranslate = '';
    this.translatedText = '';
  }
}
