import { environment } from 'src/environments/environment.development';
import { ErrorCode } from '../../../helpers/errors/github-api.error';
import { GitHubLabel } from '../interfaces/github-label.interface';

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getLabels = async (): Promise<GitHubLabel[]> => {
  //await sleep(1500);

  try {
    const resp = await fetch(`${BASE_URL}/labels`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

    if (!resp.ok) throw ErrorCode.LABELS_LOAD_ERROR;

    const labels: GitHubLabel[] = await resp.json();
    console.log({ labels });

    return labels;
  } catch (error) {
    throw ErrorCode.LABELS_LOAD_ERROR;
  }
};
