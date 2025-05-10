import { sleep } from '@helpers/sleep';
import { environment } from 'src/environments/environment.development';
import { ErrorCode } from '../../../helpers/errors/github-api.error';
import { GitHubIssue } from '../interfaces/github-issue.interface';

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getissues = async (): Promise<GitHubIssue[]> => {
  await sleep(1500);

  try {
    const resp = await fetch(`${BASE_URL}/issues`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

    if (!resp.ok) throw ErrorCode.ISSUES_LOAD_ERROR;

    const issues: GitHubIssue[] = await resp.json();
    console.log({ issues });

    return issues;
  } catch (error) {
    throw ErrorCode.ISSUES_LOAD_ERROR;
  }
};
