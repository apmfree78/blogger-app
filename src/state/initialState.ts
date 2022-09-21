import { Publisher, PublishStatusType } from 'state/actionTypes';
import { devToURL } from 'lib/publisherInfo';
export interface BlogStateType {
  content: string;
  publish: PublishStatusType;
}

// INITIAL REDUX STATE
export const initialPublishState: BlogStateType = {
  content: '', // pre-published content that is written in markdown editor
  publish: {
    hasnode: {
      publisher: Publisher.HASHNODE,
      publishURL: devToURL,
      article: {
        title: '',
        contentMarkdown: '',
        tags: [],
        coverImageURL: '',
      },
      loading: false,
      error: '',
    },
    dev_to: {
      publisher: Publisher.DEV_TO,
      publishURL: devToURL,
      article: {
        title: '',
        published: true,
        content: '',
        tags: [],
        series: '',
      },
      loading: false,
      error: '',
    },
    medium: {
      publisher: Publisher.MEDIUM,
      publishURL: devToURL,
      article: {
        title: '',
        contentFormat: 'markdown',
        content: '',
        canonicalUrl: '',
        tags: [],
        publishStatus: 'public',
      },
      loading: false,
      error: '',
    },
  },
};
