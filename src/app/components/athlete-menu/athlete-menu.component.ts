import {ChangeDetectorRef, Component} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import defaultLanguage from '../../../assets/i18n/en.json';
import {TranslateService} from '@ngx-translate/core';
import {ServiceService} from '../../services/service.service';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-athlete-menu',
  templateUrl: './athlete-menu.component.html',
  styleUrls: ['./athlete-menu.component.css']
})
export class AthleteMenuComponent {

  public title: string;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private translate: TranslateService,
              private alertService: ServiceService, private snackBar: MatSnackBar) {
    this.title = 'Profile';

    translate.setTranslation('en', defaultLanguage);
    translate.setDefaultLang('en');
    this.alertService.onGood.subscribe((message: string) => {
      this.snackBar.open(message, 'Fermer', {
        duration: 4000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right'
      });
    });

    this.alertService.onError.subscribe((message: string) => {
      this.snackBar.open(message, 'Fermer', {
        duration: 4000,
        panelClass: 'error',
        verticalPosition: 'bottom',
        horizontalPosition: 'right'
      });
    });
  }


  changeTitle($event) {
    this.title = $event.target.text;
    return this.title;
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
