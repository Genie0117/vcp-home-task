interface TimelineValue {
  query: string;
  value: number;
  extracted_value: number;
}

interface TimelineData {
  date: string;
  timestamp: string;
  values: TimelineValue[];
}

interface SearchMetadata {
  id: string;
  status: string;
  json_endpoint: string;
  created_at: string;
  processed_at: string;
  google_trends_url: string;
  raw_html_file: string;
  prettify_html_file: string;
  total_time_taken: number;
}

interface SearchParameters {
  engine: string;
  q: string;
  date: string;
  tz: string;
  data_type: string;
}

interface InterestOverTime {
  timeline_data: TimelineData[];
}

export interface GetTrendsInterestOverTimeData {
  search_metadata: SearchMetadata;
  search_parameters: SearchParameters;
  interest_over_time: InterestOverTime;
}
