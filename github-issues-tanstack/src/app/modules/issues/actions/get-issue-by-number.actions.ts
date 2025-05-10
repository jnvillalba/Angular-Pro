import { sleep } from '@helpers/sleep';
import { environment } from 'src/environments/environment.development';
import { ErrorCode } from '../../../helpers/errors/github-api.error';
import { GitHubIssue } from '../interfaces/github-issue.interface';

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getIssueByNumber = async (
  issueNumber: string
): Promise<GitHubIssue> => {
  await sleep(1500);

  try {
    const resp = await fetch(`${BASE_URL}/issues/${issueNumber}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

    if (!resp.ok) throw ErrorCode.ISSUE_LOAD_ERROR;

    const issue: GitHubIssue = await resp.json();
    console.log({ issue });

    return issue;
  } catch (error) {
    throw ErrorCode.ISSUE_LOAD_ERROR;
  }
};
