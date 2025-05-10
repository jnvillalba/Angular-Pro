import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LabelsSelectorComponent } from '../../components/labels-selector/labels-selector.component';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'app-issues-list-page',
  standalone: true,
  imports: [CommonModule, LabelsSelectorComponent],
  templateUrl: './issues-list-page.component.html',
})
export default class IssuesListPageComponent {
  private issuesService = inject(IssuesService);

  get labelsQuery() {
    return this.issuesService.labelsQuery;
  }
}
