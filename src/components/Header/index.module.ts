import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    position: 'absolute',
    left: 15,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rightSpacer: {
    width: 24, // 오른쪽 공간 확보용
  },
});

export default styles;
