import { Injectable } from '@angular/core';

@Injectable()
export class Locale {
  public static EN = 'en';
  public static FR = 'fr';
  public static selectedLanguage = 'fr';

  getSelectedLanguage() {
    return Locale.selectedLanguage;
  }
}
