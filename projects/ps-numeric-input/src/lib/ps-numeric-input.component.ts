import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ps-numeric-input',
  templateUrl: './ps-numeric-input.component.html',
  styleUrls: ['./ps-numeric-input.component.scss']
})

export class PsNumericInputComponent implements OnInit, OnChanges {
  @Input() useSlider: boolean = false;
  @Input() label = 'Insert';
  autoTicks = false;
  disabled = false;
  invert = false;
  @Input()
  max = 100;
  @Input()
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  @Input() value = 0;
  vertical = false;
  tickInterval = 1;
  @Output() numberChange: EventEmitter<number> = new EventEmitter<number>();
  rangeControl: FormControl;
  prevValue: number = 0;



  constructor() { }

  ngOnInit(): void {
    this.rangeControl = new FormControl("", [Validators.max(this.max), Validators.min(this.min)]);
  }

  ngOnChanges(){
    if (this.value != this.prevValue){
      this.prevValue= this.value;
      this.numberChange.emit(this.value);
    }
  }

  onNumberChanged(e){
    //console.log("changed",e);
    this.numberChange.emit(e.target.value)
  }

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }


  onClickSendTime(){}

  onSliderInput(e){
    this.value = e;
    this.numberChange.emit(e);
  }

}
