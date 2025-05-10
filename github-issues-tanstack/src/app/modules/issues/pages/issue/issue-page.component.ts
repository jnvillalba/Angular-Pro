import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, tap } from 'rxjs';
import { IssueCommentComponent } from '../../components/issue-comment/issue-comment.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-issue-page',
  standalone: true,
  imports: [CommonModule, RouterLink, IssueCommentComponent, LoaderComponent],
  templateUrl: './issue-page.component.html',
})
export default class IssuePageComponent {
  route = inject(ActivatedRoute);
  issueService = inject(IssueService);

  issueNumber = toSignal<string>(
    this.route.paramMap.pipe(
      map((params) => params.get('number') ?? ''),
      tap((number) => this.issueService.setIssueNumber(number))
    )
  );

  issueQuery = this.issueService.issueQuery;
  issueCommentsQuery = this.issueService.issueCommentsQuery;
}
