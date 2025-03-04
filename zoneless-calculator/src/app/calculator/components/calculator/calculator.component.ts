import { CalculatorService } from '@/calculator/services/calculator.service';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
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
  private calculatorService = inject(CalculatorService);

  public resultText = computed(() => this.calculatorService.resultText());
  public subResultText = computed(() => this.calculatorService.subResultText());
  public lastOperator = computed(() => this.calculatorService.lastOperator());

  public calculatorButtons = viewChildren(CalculatorBtnComponent);

  handleClick(key: string): void {
    this.calculatorService.constructNumber(key);
  }

  //@HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    const keyEquivalents: Record<string, string> = {
      Escape: 'C',
      Clear: 'C',
      Enter: '=',
      '/': '÷',
      x: '*',
    };
    const eventKey = event.key;
    const key = keyEquivalents[eventKey] ?? eventKey;

    this.handleClick(key);

    this.calculatorButtons().forEach((btn) => {
      btn.keyboradPressedStyle(key);
    });
  }
}
