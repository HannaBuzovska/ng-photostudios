import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudiosComponent } from './studios/studios.component';
import { EmotionComponent } from './emotion/emotion.component';
import { MoonStudioComponent } from './moon-studio/moon-studio.component';
import { VisualSpaceComponent } from './visual-space/visual-space.component';
import { LightStudioComponent } from './light-studio/light-studio.component';
import { LondonComponent } from './london/london.component';
import { HOMEComponent } from './home/home.component';
import { SimvolistComponent } from './simvolist/simvolist.component';
import { IndeXComponent } from './inde-x/inde-x.component';

@NgModule({
  declarations: [
    AppComponent,
    StudiosComponent,
    EmotionComponent,
    MoonStudioComponent,
    VisualSpaceComponent,
    LightStudioComponent,
    LondonComponent,
    HOMEComponent,
    SimvolistComponent,
    IndeXComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
