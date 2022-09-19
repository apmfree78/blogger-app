import { PublisherDataType } from 'styles/lib/publisherInfo';

// defining action types
export const enum ActionType {
  HASHNODE_START = 'HashnodeStart',
  HASHNODE_ERROR = 'HashnodeError',
  HASHNODE_SUCCESS = 'HasNodeSuccess',
  DEV_TO_ERROR = 'devtoError',
  DEV_TO_SUCCESS = 'devtoSuccess',
  DEV_TO_START = 'devtoStart',
  MEDIUM_ERROR = 'mediumError',
  MEDIUM_SUCCESS = 'mediumSuccess',
  MEDIUM_START = 'mediumStart',
  UPDATE_CONTENT = 'updateContent',
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
    article: PublisherDataType;
    loading: boolean;
    error: string;
  };
}
// defining interfaces for
// API data, loading error and data state
// and Action Creators

interface PublishHashNodeStart {
  type: ActionType.HASHNODE_START;
}

interface PublishHashNodeError {
  type: ActionType.HASHNODE_ERROR;
  payload: string;
}

interface PublishHashNodeSuccess {
  type: ActionType.HASHNODE_SUCCESS;
  payload: string;
}

interface PublishDevToStart {
  type: ActionType.DEV_TO_START;
}

interface PublishDevToError {
  type: ActionType.DEV_TO_ERROR;
  payload: string;
}

interface PublishDevToSuccess {
  type: ActionType.DEV_TO_SUCCESS;
  payload: string;
}

interface PublishMediumSuccess {
  type: ActionType.MEDIUM_SUCCESS;
  payload: string;
}

interface PublishMediumStart {
  type: ActionType.MEDIUM_START;
}

interface PublishMediumError {
  type: ActionType.MEDIUM_ERROR;
  payload: string;
}

interface UpdateContent {
  type: ActionType.UPDATE_CONTENT;
  payload: string;
}

export type PublishAction =
  | PublishHashNodeError
  | PublishHashNodeStart
  | PublishHashNodeSuccess
  | PublishDevToError
  | PublishDevToStart
  | PublishDevToSuccess
  | PublishMediumError
  | PublishMediumStart
  | PublishMediumSuccess
  | UpdateContent;