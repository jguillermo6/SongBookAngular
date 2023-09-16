import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WritingRoutingModule } from './writing-routing.module';
import { WritingComponent } from './writing.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    WritingComponent,
    ListComponent    
  ],
  imports: [
    CommonModule,
    WritingRoutingModule
  ]
})
export class WritingModule { }
