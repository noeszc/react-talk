import {
  deburr,
  filter,
  flow,
  identity,
  includes,
  join,
  partialRight,
  pick,
  toLower,
  values,
} from 'lodash';

const filterCollection = (collection, path, term) => {
  const onlyInKeys = obj => pick(obj, path);
  return filter(
    collection,
    flow(
      identity,
      onlyInKeys,
      values,
      join,
      toLower,
      deburr,
      partialRight(includes, deburr(toLower(term))),
    ),
  );
};
export default filterCollection;
