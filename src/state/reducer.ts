import { PublishAction, ActionType } from 'state/actionTypes';
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
        content: action.payload,
      };
    case ActionType.UPDATE_DEVTO_DATA:
      return {
        ...state,
        publish: {
          ...state.publish,
          dev_to: {
            ...state.publish.dev_to,
            article: {
              ...state.publish.dev_to.article,
              title: action.payload.title,
              body_markdown: state.content,
              tags: [...action.payload.tags],
              series: action.payload.series,
            },
          },
        },
      };
    case ActionType.UPDATE_HASHNODE_DATA:
      return {
        ...state,
        publish: {
          ...state.publish,
          dev_to: {
            ...state.publish.hashnode,
            article: {
              ...state.publish.hashnode.article,
              title: action.payload.title,
              contentMarkdown: state.content,
              tags: [...action.payload.tags],
              coverImageURL: action.payload.coverImageURL,
            },
          },
        },
      };
    case ActionType.UPDATE_MEDIUM_DATA:
      return {
        ...state,
        publish: {
          ...state.publish,
          dev_to: {
            ...state.publish.medium,
            article: {
              ...state.publish.medium.article,
              title: action.payload.title,
              content: state.content,
              canonicalURL: action.payload.canonicalUrl,
              tags: [...action.payload.tags],
              publishStatus: action.payload.publishStatus,
            },
          },
        },
      };
    case ActionType.DEV_TO_START:
      return {
        ...state,
        publish: {
          ...state.publish,
          dev_to: {
            ...state.publish.dev_to,
            loading: true,
            error: '',
          },
        },
      };
    case ActionType.DEV_TO_ERROR:
      return {
        ...state,
        publish: {
          ...state.publish,
          dev_to: {
            ...state.publish.dev_to,
            loading: false,
            error: action.payload,
          },
        },
      };
    case ActionType.DEV_TO_SUCCESS:
      return {
        ...state,
        publish: {
          ...state.publish,
          dev_to: {
            ...state.publish.dev_to,
            loading: false,
            error: '',
          },
        },
      };
    default:
      return state;
  }
}
