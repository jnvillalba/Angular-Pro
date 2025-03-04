import {
  ChangeDetectionStrategy,
  Component,
  viewChildren,
} from '@angular/core';
import { CalculatorBtnComponent } from '../calculator-btn/calculator-btn.component';

@Component({
  selector: 'calculator',
  imports: [CalculatorBtnComponent],
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)',
  },
})
export class CalculatorComponent {
  public calculatorButtons = viewChildren(CalculatorBtnComponent);

  handleClick(key: string): void {
    console.log({ key });
  }

  //@HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    const keyEquivalents: Record<string, string> = {
      Escape: 'C',
      Clear: 'C',
      Enter: '=',
      '/': '÷',
      '*': 'x',
    };
    const eventKey = event.key;
    const key = keyEquivalents[eventKey] ?? eventKey;

    this.handleClick(key);

    this.calculatorButtons().forEach((btn) => {
      btn.keyboradPressedStyle(key);
    });
  }
}
