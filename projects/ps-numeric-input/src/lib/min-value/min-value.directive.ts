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
  selector: 'input[minValue][min][type=number]'
})
export class MinValueDirective {
  @HostListener('change') onChange() {
    const min = +this.elementRef.nativeElement.getAttribute('min');

    if (this.valueIsLessThanMin(min, +this.elementRef.nativeElement.value)) {
      this.renderer2.setProperty(
        this.elementRef.nativeElement,
        'value',
        min + ''
      );
    }
  }

  // if input is a reactive form control validate on model change
  @HostListener('ngModelChange', ['$event'])
  onModelChange(value: number) {
    const min = +this.elementRef.nativeElement.getAttribute('min');
    if (this.valueIsLessThanMin(min, value)) {
      const formControl = this.formControlName
        ? this.formControlName.control
        : this.formControlDirective.control;

      if (formControl) {
        if (formControl.updateOn === 'change') {
          console.warn(
            `minValueDirective: form control ${this.formControlName.name} is set to update on change
             this can cause issues with min update values.`
          );
        }
        formControl.reset(min);
      }
    }
  }

  constructor(
    private elementRef: ElementRef<HTMLInputElement>,
    private renderer2: Renderer2,
    @Optional() @Self() private formControlName: FormControlName,
    @Optional() @Self() private formControlDirective: FormControlDirective
  ) {}

  private valueIsLessThanMin(min: any, value: number): boolean {
    return typeof min === 'number' && value && value < min;
  }
}
