import { Publisher, PublishStatusType } from 'state/actionTypes';

export interface BlogStateType {
  content: string;
  publish: PublishStatusType;
}

// INITIAL REDUX STATE
export const initialPublishState: BlogStateType = {
  content: '',
  publish: {
    hasnode: {
      publisher: Publisher.HASHNODE,
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
