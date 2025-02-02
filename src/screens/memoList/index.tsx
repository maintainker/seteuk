import {View, Text, FlatList} from 'react-native';
import {useMutation, useQuery} from 'react-query';
import {queryKeyConstant} from '../../constance';
import MemoItem from './component/MemoItem';
import styles from './index.module';
import {DefaultButton} from '../../components';
import mock from '../../../data/data';
import QueryKeys from '../../constance/queryKeys/memoQueryKeys';

interface MemoContent {
  title: string;
  description: string;
}

const MomoList = () => {
  const {data, refetch} = useQuery(
    queryKeyConstant.getMemoList,
    mock.getAllMemo,
  );
  const addMemo = useMutation<void, Error, MemoContent>({
    mutationKey: QueryKeys.createMemo,
    async mutationFn({
      title,
      description,
    }: {
      title: string;
      description: string;
    }) {
      mock.addMemo(title, description); // mock.addMemo 호출
      await refetch();
    },
  });
  const deleteMemo = useMutation<void, Error, string>({
    mutationKey: QueryKeys.deleteMemo,
    async mutationFn(id) {
      mock.deleteMemo(id);
      await refetch();
    },
  });
  return (
    <View style={styles.container}>
      <FlatList<Memo>
        style={styles.tmp}
        keyExtractor={item => `home-list-${item.id}`}
        data={data}
        renderItem={({item}) => (
          <MemoItem item={item} onPressDelete={deleteMemo.mutate} />
        )}
      />
      <View style={styles.buttonContainer}>
        <DefaultButton
          onPress={e =>
            addMemo.mutate({
              title: '임시 메모입니다.',
              description: '임시추가메모입니다.',
            })
          }>
          추가
        </DefaultButton>
      </View>
    </View>
  );
};

export default MomoList;
