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
      loading: false,
      error: '',
    },
    dev_to: {
      publisher: Publisher.DEV_TO,
      loading: false,
      error: '',
    },
    medium: {
      publisher: Publisher.MEDIUM,
      loading: false,
      error: '',
    },
  },
};
