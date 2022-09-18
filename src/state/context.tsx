import React, { createContext, useState } from 'react';
import {
  Publisher,
  PublishStatusType,
  ActionType,
  PublishAction,
} from 'state/actionTypes';
interface Props {
  children?: React.ReactNode;
}

export interface BlogStateType {
  content: string;
  publish: PublishStatusType;
}

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

export const GlobalContext: React.Context<any> = createContext('');

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  // setting up state for blog content and publish state
  const [content, setContent] = useState<string>('');
  const [publishStatus, setPublishStatus] = useState();

  function publishReducer(state: BlogStateType, action: PublishAction) {
    const { type } = action;

    switch (type) {
      case ActionType.DEV_TO_START:
        return {
          ...state,
          dev_to: {
            publisher: Publisher.DEV_TO,
            loading: true,
            error: '',
          },
        };
      case ActionType.DEV_TO_ERROR:
        return {
          ...state,
          dev_to: {
            publisher: Publisher.DEV_TO,
            loading: false,
            error: action.payload,
          },
        };
      case ActionType.DEV_TO_SUCCESS:
        return {
          ...state,
          dev_to: {
            publisher: Publisher.DEV_TO,
            loading: false,
            error: '',
          },
        };
      default:
        return state;
    }
  }
};
