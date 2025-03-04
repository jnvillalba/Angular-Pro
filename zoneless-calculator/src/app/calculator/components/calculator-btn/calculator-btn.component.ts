import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'calculator-btn',
  imports: [],
  templateUrl: './calculator-btn.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './calculator-btn.component.css',
  host: {
    class: ' border-r border-b border-indigo-400',
    '[class.w-2/4]': 'isDoubleSize()',
    '[class.w-1/4]': '!isDoubleSize()',
  },
})
export class CalculatorBtnComponent {
  public isPressed = signal(false);

  public onClick = output<string>();
  public contentValue = viewChild<ElementRef<HTMLButtonElement>>('btn');

  public isCommand = input(false, {
    transform: (value: boolean | string) => this.transformInput(value),
  });
  public isDoubleSize = input(false, {
    transform: (value: boolean | string) => this.transformInput(value),
  });

  private transformInput(value: boolean | string): boolean {
    return typeof value === 'string' ? value === '' : value;
  }

  //remplazado por host
  // @HostBinding('class.w-2/4') get commandBg() {
  //   return this.isDoubleSize();
  // }

  handleClick(): void {
    if (!this.contentValue()?.nativeElement) {
      return;
    }
    const value = this.contentValue()!.nativeElement.innerText;

    this.onClick.emit(value.trim());
  }

  keyboradPressedStyle(key: string): void {
    if (!this.contentValue()) {
      return;
    }
    const value = this.contentValue()!.nativeElement.innerText;

    if (value !== key) return;
    this.isPressed.set(true);

    setTimeout(() => {
      this.isPressed.set(false);
    }, 100);
  }
}
