import {COLORS} from '../../../constants';
import {StyleSheet} from 'react-native';

const headerStyle = StyleSheet.create({
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
    fontSize: 15,
  },
  headerSubtitle: {
    color: COLORS.lightGray,
    fontSize: 10,
  },
  iconNoti: {
    color: COLORS.white,
  },
  iconBell: {
    marginLeft: 25,
    color: COLORS.white,
  },
});

const popularStyle = StyleSheet.create({
  rowHeader: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 30,
    paddingLeft: 20,
  },
  rowHeaderLeft: {
    marginBottom: 10,
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: '800',
    fontSize: 40,
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
  rowPopular: {
    paddingLeft: 10,
  },
});

export {headerStyle, popularStyle};
