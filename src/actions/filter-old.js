import * as types from './action-types';

export const filterOldest = (sketch) => {
  return{
    type: types.FILER_OLD,
    sketch
  };
}
