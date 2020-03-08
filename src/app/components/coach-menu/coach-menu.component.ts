import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import defaultLanguage from '../../../assets/i18n/en.json';
import {TranslateService} from '@ngx-translate/core';
import {ServiceService} from '../../services/service.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-coach-menu',
  templateUrl: './coach-menu.component.html',
  styleUrls: ['./coach-menu.component.css']
})
export class CoachMenuComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;
  public title: string;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,  private translate: TranslateService,
              private alertService: ServiceService, private snackBar: MatSnackBar) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
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

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  changeTitle($event) {
    this.title = $event.target.text;
    return this.title;
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

}
