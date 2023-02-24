import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers/counter.reducer';
import { CounterComponent } from './components/counter/counter.component';
import { CounterIncrementComponent } from './components/counter-increment/counter-increment.component';
import { CounterDecrementComponent } from './components/counter-decrement/counter-decrement.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterIncrementComponent,
    CounterDecrementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {
        counterState: counterReducer, // uygulama istediğimiz kadar state tanımı yapabiliriz
      },
      {}
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
