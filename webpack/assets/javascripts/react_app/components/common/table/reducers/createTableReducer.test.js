import { testReducerSnapshotWithFixtures } from '../../../../common/testHelpers';
import createTableActionTypes from '../actionsHelpers/actionTypeCreator';
import createTableReducer from './createTableReducer';

const controller = 'some-controller';

const ACTION_TYPES = createTableActionTypes(controller);
const reducer = createTableReducer(controller);

const fixtures = {
  'should return initial state': {},
  'should handle REQUEST': {
    action: {
      type: ACTION_TYPES.REQUEST,
    },
  },
  'should handle SUCCESS': {
    action: {
      type: ACTION_TYPES.SUCCESS,
      payload: {
        search: 'name=model',
        results: [{ id: 23, name: 'model' }],
        page: 1,
        per_page: 5,
        total: 20,
        sort: { by: 'name', order: 'ASC' },
      },
    },
  },
  'should handle FAILURE': {
    action: {
      type: ACTION_TYPES.FAILURE,
      payload: {
        error: new Error('ooops!'),
      },
    },
  },
};

describe('Table createTableReducer', () =>
  testReducerSnapshotWithFixtures(reducer, fixtures));
