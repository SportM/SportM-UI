import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    AuthComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    ToastrModule.forRoot(),

    DragAndDropModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  entryComponents: [
    ConfirmDialogComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}