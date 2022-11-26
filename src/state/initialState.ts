import { Publisher, PublishStatusType } from "state/actionTypes";
import {
  devToURL,
  mediumURL,
  hashnodeURL,
  DevToDataProps,
  HashNodeDataProps,
  MediumDataProps,
} from "publishers/publisherInfo";
export interface BlogStateType {
  content: string;
  publish: PublishStatusType;
}

export const initialDevtoFormState: DevToDataProps = {
  title: "",
  published: false,
  body_markdown: "",
  tags: [],
  series: "",
};

export const initialHashNodeFormState: HashNodeDataProps = {
  title: "",
  contentMarkdown: "",
  tags: [],
  coverImageURL: "",
};

export const initialMediumFormState: MediumDataProps = {
  title: "",
  contentFormat: "markdown",
  content: "",
  canonicalUrl: "",
  tags: [],
  publishStatus: "public",
};

// INITIAL REDUX STATE
export const initialPublishState: BlogStateType = {
  content: "", // pre-published content that is written in markdown editor
  publish: {
    dev_to: {
      publisher: Publisher.DEV_TO,
      publishURL: devToURL,
      article: {
        title: "",
        published: true,
        body_markdown: "",
        tags: [],
        series: "",
      },
      loading: false,
      error: "",
    },
    hasnode: {
      publisher: Publisher.HASHNODE,
      publishURL: hashnodeURL,
      article: {
        title: "",
        contentMarkdown: "",
        tags: [],
        coverImageURL: "",
      },
      loading: false,
      error: "",
    },
    medium: {
      publisher: Publisher.MEDIUM,
      publishURL: mediumURL,
      article: {
        title: "",
        contentFormat: "markdown",
        content: "",
        canonicalUrl: "",
        tags: [],
        publishStatus: "public",
      },
      loading: false,
      error: "",
    },
  },
};
