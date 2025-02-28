import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
} from '@angular/core';

@Component({
  selector: 'calculator-btn',
  imports: [],
  templateUrl: './calculator-btn.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './calculator-btn.component.css',
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400',
  },
})
export class CalculatorBtnComponent {
  public isCommand = input(false, {
    transform: (value: boolean | string) => this.transformInput(value),
  });
  public isDoubleSize = input(false, {
    transform: (value: boolean | string) => this.transformInput(value),
  });

  private transformInput(value: boolean | string): boolean {
    return typeof value === 'string' ? value === '' : value;
  }

  @HostBinding('class.w-2/4') get commandBg() {
    return this.isDoubleSize();
  }
}
