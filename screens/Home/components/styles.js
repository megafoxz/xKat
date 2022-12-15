import {COLORS} from '../../../constants';
import {StyleSheet} from 'react-native';

export const headerStyle = StyleSheet.create({
  rowHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 20,
  },
  rowHeaderRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerSubtitle: {
    color: COLORS.lightGray,
    fontSize: 12,
  },
  iconNoti: {
    color: COLORS.white,
  },
  iconBell: {
    marginLeft: 25,
    color: COLORS.white,
  },
});
