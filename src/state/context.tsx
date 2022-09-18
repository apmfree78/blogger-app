import React, { createContext, useState } from 'react';

interface Props {
  children?: React.ReactNode;
}

const enum Publisher {
  HASHNODE = 'hashnode',
  DEV_TO = 'dev_to',
  MEDIUM = 'medium',
}

type PublisherType = Publisher;
interface PublisherStatusType {
  [Publisher.HASHNODE]: {
    publisher: PublisherType;
    loading: boolean;
    error: string;
  };
  [Publisher.DEV_TO]: {
    publisher: PublisherType;
    loading: boolean;
    error: string;
  };
  [Publisher.MEDIUM]: {
    publisher: PublisherType;
    loading: boolean;
    error: string;
  };
}

export const GlobalContext: React.Context<any> = createContext('');

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  // setting up state for blog content and publish state
  const [content, setContent] = useState<string>('');
  const [publishStatus, setPublishStatus] = useState();
};
