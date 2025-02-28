import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorBtnComponent } from '../calculator-btn/calculator-btn.component';

@Component({
  selector: 'calculator',
  imports: [CalculatorBtnComponent],
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent {}
