import {COLORS, SIZES} from '../../../constants';
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
    zIndex: 2,
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
    color: COLORS.gray,
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

const containerStyle = StyleSheet.create({
  songPlay: {},
  songBack: {},
  songTitle: {
    fontSize: 22,
    fontWeight: '700',
  },
  songSubtitle: {
    fontSize: 13,
  },
  functionContainer: {},
  functionBlock: {
    backgroundColor: COLORS.white58,
    height: 180,
    flexDirection: 'column',
    width: '100%',
    zIndex: 2,
    borderRadius: 30,
    padding: 20,
  },
  songBackground: {
    height: SIZES.height,
    width: SIZES.width,
    zIndex: 1,
    position: 'absolute',
    backgroundColor: 'rgba(46, 46, 56, 0.59)',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: 120,
    paddingHorizontal: 20,
  },
  image: {
    height: SIZES.height,
    width: SIZES.width,
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 0,
  },
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
    color: COLORS.gray,
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

const topTrack = StyleSheet.create({
  rowHeader: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 30,
    paddingLeft: 20,
  },
  rowHeaderLeft: {},
  headerTitle: {
    color: COLORS.white,
    fontWeight: '800',
    fontSize: 16,
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

export {headerStyle, containerStyle, topTrack};
