import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { GitHubLabel } from '../../interfaces/github-label.interface';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'labels-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labels-selector.component.html',
})
export class LabelsSelectorComponent {
  labels = input.required<GitHubLabel[]>();
  issuesService = inject(IssuesService);

  onToggleLabel(labelName: string) {
    this.issuesService.toggleLabel(labelName);
  }
  isSelected(labelName: string) {
    return this.issuesService.selectedLabels().has(labelName);
  }
}
