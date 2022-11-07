// mockend endpoints for testing POST requests
// dev.to : mockend.com/apmfree78/blogger-app/devtos
export const devToURL = "https://mockend.com/apmfree78/blogger-app/devtos";
export const hashnodeURL =
  "https://mockend.com/apmfree78/blogger-app/hashnodes";
export const mediumURL = "https://mockend.com/apmfree78/blogger-app/mediums";

export interface DevToDataProps {
  title: string;
  published: boolean;
  body_markdown: string;
  tags: string[];
  series: string;
}

export interface MediumDataProps {
  title: string;
  contentFormat: string;
  content: string;
  canonicalUrl: string;
  tags: string[];
  publishStatus: string;
}

export interface HashnodeDataProps {
  title: string;
  contentMarkdown: string;
  tags: string[];
  coverImageURL: string;
}

export type PublisherDataType =
  | DevToDataProps
  | MediumDataProps
  | HashnodeDataProps;
