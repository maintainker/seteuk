const getMemoList = ['memo', 'list'];
const createMemo = ['memo', 'create'];
const deleteMemo = ['memo', 'delete'];

const createKeys = (type: 'edit' | 'detail', id: string) => {
  return ['memo', type, id];
};

const QueryKeys = {
  getMemoList,
  createMemo,
  deleteMemo,
  createKeys,
};

export default QueryKeys;
