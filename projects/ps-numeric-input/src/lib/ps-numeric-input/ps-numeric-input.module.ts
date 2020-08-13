import { SliderInputComponent } from './../slider-input/slider-input.component';
import { LabelSmartSlider } from '../label-smart-slider/label-smart-slider.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MaxValueDirective } from '../max-value/max-value.directive';
import { MinValueDirective } from './../min-value/min-value.directive';
import { PsNumericInputComponent } from './../ps-numeric-input.component';
import { MatCommonModule } from '@angular/material/core';



@NgModule({
  declarations: [
    MinValueDirective,
    MaxValueDirective,
    PsNumericInputComponent,
    LabelSmartSlider,
    SliderInputComponent
  ],
  imports: [
    CommonModule,
    MatCommonModule,
    MatInputModule,
    MatSliderModule,
    MatFormFieldModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports: [
    PsNumericInputComponent
  ]
})
export class PsNumericInputModule { }
