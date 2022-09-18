import React, { createContext, useState } from 'react';

interface Props {
  children?: React.ReactNode;
}

export enum Publisher {
  HASHNODE = 'hashnode',
  DEV_TO = 'dev_to',
  MEDIUM = 'medium',
}

export type PublisherType = Publisher;

export interface PublishStatusType {
  [key: string]: {
    publisher: PublisherType;
    loading: boolean;
    error: string;
  };
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
};
