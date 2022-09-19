import { Publisher, PublishAction, ActionType } from 'state/actionTypes';
import { BlogStateType } from 'state/initialState';

export default function publishReducer(
  state: BlogStateType,
  action: PublishAction
) {
  const { type } = action;

  switch (type) {
    case ActionType.UPDATE_CONTENT:
      return {
        ...state,
        content: action.payload
      };
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
