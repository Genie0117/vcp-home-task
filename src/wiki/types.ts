export interface GetWikiSearchData {
  query?: {
    search?: { snippet: string }[];
    searchinfo?: {
      totalhits?: number;
    };
  };
}
