export interface DevToDataProps {
  title: string;
  published: boolean;
  content: string;
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
