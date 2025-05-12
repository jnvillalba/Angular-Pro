import { sleep } from '@helpers/sleep';
import { environment } from 'src/environments/environment.development';
import { ErrorCode } from '../../../helpers/errors/github-api.error';
import { GitHubIssue, State } from '../interfaces/github-issue.interface';

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getIssues = async (
  state: State = State.All,
  selectedLabels: string[]
): Promise<GitHubIssue[]> => {
  await sleep(1500);

  const params = new URLSearchParams();
  params.append('state', state);

  if (selectedLabels.length > 0) {
    params.append('labels', selectedLabels.join(','));
  }

  try {
    const resp = await fetch(`${BASE_URL}/issues?${params}`, {
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
