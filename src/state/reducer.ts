import { Publisher, BlogStateType, PublishAction, ActionType } from 'state/actionTypes';

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
