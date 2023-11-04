export interface WikiSearchData {
  query?: {
    search?: { snippet: string }[];
    searchinfo?: {
      totalhits?: number;
    };
  };
}

export interface SearchFirstHitResponseData {
  firstHit: string;
  numberOfHits: number;
}
