import React, { createContext, useReducer, useState } from 'react';
import publishReducer from './reducer';
import { initialPublishState } from './initialState';
import {
  Publisher,
  PublishStatusType,
  ActionType,
  PublishAction,
} from 'state/actionTypes';
interface Props {
  children?: React.ReactNode;
}

export const GlobalContext: React.Context<any> = createContext('');

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  // setting up state for blog content and publish state
  const [state, dispatch] = useReducer(publishReducer, initialPublishState);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
