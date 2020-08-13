import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider-input',
  templateUrl: './slider-input.component.html',
  styleUrls: ['./slider-input.component.scss']
})
export class SliderInputComponent implements OnInit {

  autoTicks = false;
  disabled = false;
  invert = false;
  @Input()
  max = 100;
  @Input()
  min = 0;
  showTicks = false;
  @Input() step = 1;
  thumbLabel = false;
  @Input() value = 0;
  vertical = false;
  tickInterval = 1;
  @Output() sliderInput: EventEmitter<number> = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  onClickSendTime(){}

  onSliderInput( e ){
    this.sliderInput.emit(e.value);
  }

}
