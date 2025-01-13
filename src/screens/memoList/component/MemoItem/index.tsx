import {Text, TouchableOpacity, View} from 'react-native';
import styles from './index.module';
import {Icon} from '../../../../components';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouterParamList} from '../../../../type/routerParam';

interface Props {
  item: Memo;
  onPressDelete: (id: string) => void;
}

const MemoItem = ({item, onPressDelete}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RouterParamList, 'home'>>();
  const handlePressContent = () => {
    navigation.navigate('detail', {id: item.id, title: item.title});
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.contents} onPress={handlePressContent}>
        <View style={styles.header}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{item.updatedAt}</Text>
        </View>
        <Text style={styles.description} numberOfLines={1} ellipsizeMode="tail">
          {item.description}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPressDelete(item.id)}>
        <Icon width={24} height={24} fill="#666" name={'cancel'} />
      </TouchableOpacity>
    </View>
  );
};

export default MemoItem;
