import styles from './index.module';
import {Text, TouchableOpacity} from 'react-native';
import {GestureResponderEvent} from 'react-native/Libraries/Types/CoreEventTypes';

interface Props {
  children: string;
  onPress?: (e: GestureResponderEvent) => void;
}

const TextButton = ({onPress, children}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
