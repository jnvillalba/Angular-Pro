export interface PokeAPIResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
}

export interface Result {
  url: string;
  name: string;
}
