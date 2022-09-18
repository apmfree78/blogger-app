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

export type PublishAction =
  | PublishHashNodeError
  | PublishHashNodeStart
  | PublishHashNodeSuccess
  | PublishDevToError
  | PublishDevToStart
  | PublishDevToSuccess
  | PublishMediumError
  | PublishMediumStart
  | PublishMediumSuccess;
