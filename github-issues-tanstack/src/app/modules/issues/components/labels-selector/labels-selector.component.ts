import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { GitHubLabel } from '../../interfaces/github-label.interface';

@Component({
  selector: 'labels-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labels-selector.component.html',
})
export class LabelsSelectorComponent {
  labels = input.required<GitHubLabel[]>();
}
