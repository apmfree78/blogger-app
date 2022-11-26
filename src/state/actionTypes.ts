export enum Publisher {
  HASHNODE = "Hashnode",
  DEV_TO = "Dev.to",
  MEDIUM = "Medium",
}

export type PublisherType = Publisher;

export interface PublishStatusType {
  [key: string]: {
    publisher: PublisherType;
    publishURL: string;
    article: any;
    loading: boolean;
    error: string;
  };
}
