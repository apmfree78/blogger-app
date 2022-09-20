import React, { createContext, useReducer } from 'react';
import axios, { AxiosResponse } from 'axios';
import publishReducer from './reducer';
import { initialPublishState } from './initialState';
import { Publisher, PublishStatusType, ActionType } from 'state/actionTypes';
interface Props {
  children?: React.ReactNode;
}

export const GlobalContext: React.Context<any> = createContext('');

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  // setting up state for blog content and publish state
  const [state, dispatch] = useReducer(publishReducer, initialPublishState);

  //action creator for publish action of type START
  const dispatchPublishStart = (publisher: Publisher) => {
    switch (publisher) {
      case Publisher.DEV_TO:
        dispatch({ type: ActionType.DEV_TO_START });
        break;
      case Publisher.MEDIUM:
        dispatch({ type: ActionType.MEDIUM_START });
        break;
      case Publisher.HASHNODE:
        dispatch({ type: ActionType.HASHNODE_START });
        break;
    }
  };

  //action creator for publish action of type ERROR
  const dispatchPublishError = (publisher: Publisher, error: string) => {
    switch (publisher) {
      case Publisher.DEV_TO:
        dispatch({ type: ActionType.DEV_TO_ERROR, payload: error });
        break;
      case Publisher.MEDIUM:
        dispatch({ type: ActionType.MEDIUM_ERROR, payload: error });
        break;
      case Publisher.HASHNODE:
        dispatch({ type: ActionType.HASHNODE_ERROR, payload: error });
        break;
    }
  };

  //action creator for publish action of type SUCCESS
  const dispatchPublishSuccess = (publisher: Publisher, message: string) => {
    switch (publisher) {
      case Publisher.DEV_TO:
        dispatch({ type: ActionType.DEV_TO_SUCCESS, payload: message });
        break;
      case Publisher.MEDIUM:
        dispatch({ type: ActionType.MEDIUM_SUCCESS, payload: message });
        break;
      case Publisher.HASHNODE:
        dispatch({ type: ActionType.HASHNODE_SUCCESS, payload: message });
        break;
    }
  };

  // making post request to publish blog post to selected publisher
  // this step happens AFTER users has provided all relevant fields
  // in input form on modal popup
  const publishPost = async (
    publishData: PublishStatusType,
    publisher: Publisher
  ) => {
    // loading state begins
    dispatchPublishStart(publisher);

    // API POST request to publish article
    // UPDATE HERE
    const response: void | AxiosResponse = await axios
      .post(`${publishData.publishURL}`, publishData.article)
      .catch((err) => {
        // set error state
        dispatchPublishError(publisher, err.message);
        console.error(err);
      });

    if (!response) {
      dispatchPublishError(
        publisher,
        'sorry, unable to publish article at this time'
      );
      return;
    }
    // extracting url of published article
    const {
      data: { url },
    } = response;

    // dispatching success action
    dispatchPublishSuccess(publisher, `Successfully published to ${url}`);
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
        publishPost,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
