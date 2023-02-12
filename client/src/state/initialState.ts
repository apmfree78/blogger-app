import {
  devToURL,
  hashnodeURL,
  initialDevtoFormState,
  initialHashNodeFormState,
  initialMediumFormState,
  mediumURL,
} from "publishers/publisherInfo";
import { Publisher, PublishStatusType } from "state/actionTypes";
export interface BlogStateType {
  content: string;
  publish: PublishStatusType;
}

// INITIAL REDUX STATE
export const initialPublishState: BlogStateType = {
  content: "", // pre-published content that is written in markdown editor
  publish: {
    dev_to: {
      publisher: Publisher.DEV_TO,
      publishURL: devToURL,
      article: initialDevtoFormState,
      loading: false,
      error: "",
    },
    hasnode: {
      publisher: Publisher.HASHNODE,
      publishURL: hashnodeURL,
      article: initialHashNodeFormState,
      loading: false,
      error: "",
    },
    medium: {
      publisher: Publisher.MEDIUM,
      publishURL: mediumURL,
      article: initialMediumFormState,
      loading: false,
      error: "",
    },
  },
};
