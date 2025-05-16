import { ErrorCode } from '@helpers/errors/github-api.error';
import { environment } from 'src/environments/environment.development';
import { GitHubIssue } from '../interfaces';

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getIssueCommentsByNumber = async (
  issueNumber: string
): Promise<GitHubIssue[]> => {
  //await sleep(1500);

  try {
    const resp = await fetch(`${BASE_URL}/issues/${issueNumber}/comments`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

    if (!resp.ok) throw ErrorCode.ISSUE_COMMENTS_LOAD_ERROR;

    const issuesComments: GitHubIssue[] = await resp.json();
    console.log({ issuesComments });

    return issuesComments;
  } catch (error) {
    throw ErrorCode.ISSUE_COMMENTS_LOAD_ERROR;
  }
};
