import {
  Directive,
  ElementRef,
  HostListener,
  Optional,
  Renderer2,
  Self
} from '@angular/core';
import { FormControlDirective, FormControlName } from '@angular/forms';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'input[maxValue][max][type=number]'
})
export class MaxValueDirective {
  @HostListener('change') onChange() {
    const max = +this.elementRef.nativeElement.getAttribute('max');

    if (this.valueIsMoreThanMax(max, +this.elementRef.nativeElement.value)) {
      this.renderer2.setProperty(
        this.elementRef.nativeElement,
        'value',
        max + ''
      );
    }
  }

  // if input is a reactive form control validate on model change
  @HostListener('ngModelChange', ['$event'])
  onModelChange(value: number) {
    const max = +this.elementRef.nativeElement.getAttribute('max');
    if (this.valueIsMoreThanMax(max, value)) {
      const formControl = this.formControlName
        ? this.formControlName.control
        : this.formControlDirective.control;

      if (formControl) {
        if (formControl.updateOn === 'change') {
          console.warn(
            `maxValueDirective: form control ${this.formControlName.name} is set to update on change
             this can cause issues with max update values.`
          );
        }
        formControl.reset(max);
      }
    }
  }

  constructor(
    private elementRef: ElementRef<HTMLInputElement>,
    private renderer2: Renderer2,
    @Optional() @Self() private formControlName: FormControlName,
    @Optional() @Self() private formControlDirective: FormControlDirective
  ) {}

  private valueIsMoreThanMax(max: any, value: number): boolean {
    return typeof max === 'number' && value && value > max;
  }
}
