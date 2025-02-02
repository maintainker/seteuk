import {Text, View} from 'react-native';
import {ParamListBase, useNavigation, useRoute} from '@react-navigation/native';
import type {RouteProp} from '@react-navigation/core/src/types';
import {useMutation, useQuery, useQueryClient} from 'react-query';
import mock from '../../../data/data';
import {TextButton} from '../../components';
import styles from './index.module';
import QueryKeys from '../../constance/queryKeys/memoQueryKeys';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const MemoDetail = () => {
  const route = useRoute<RouteProp<{detail: {id: string}}>>();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const queryClient = useQueryClient();
  const id = route.params.id;
  if (!route.params.id) {
    navigation.goBack();
    return <View></View>;
  }
  const {data: memo, isLoading} = useQuery(
    QueryKeys.createKeys('detail', id),
    () => mock.getMemo(id),
  );
  const deleteMutation = useMutation<void, Error, string>({
    mutationKey: QueryKeys.deleteMemo,
    async mutationFn(id) {
      mock.deleteMemo(id);
      await queryClient.invalidateQueries(QueryKeys.getMemoList);
      navigation.goBack();
    },
  });

  if (!isLoading && (!route.params.id || !memo)) {
    navigation.goBack();
    return <View></View>;
  }
  const handlePressEdit = () => {
    navigation.navigate('edit' as any, {id: memo?.id, title: memo?.title});
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{memo?.title}</Text>
        <View style={styles.buttonContainer}>
          <TextButton onPress={handlePressEdit}>편집</TextButton>
          <TextButton onPress={() => deleteMutation.mutate(memo?.id || '')}>
            삭제
          </TextButton>
        </View>
      </View>
      <View>
        <Text style={styles.date}>{memo?.updatedAt}</Text>
        <Text style={styles.description}>{memo?.description}</Text>
      </View>
    </View>
  );
};

export default MemoDetail;
