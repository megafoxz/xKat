import {
  ApplicationCookieTokenIDName,
  ApplicationLocalStorageUserDataName,
} from './setting';
export const TokenIDCookieName = ApplicationCookieTokenIDName;
export const UserDataLocalStorageName = ApplicationLocalStorageUserDataName;
const CookieExpireDates = 365;
const DefaultPaginationLimit = 10;
const DefaultRequestTimeOutMs = 30000;

export const StatusCodes = {
  Deleted: -1,
  Active: 1,
};

export const StatusItems = [
  {
    value: StatusCodes.Active,
    text: 'Active',
  },
  {
    value: StatusCodes.Deleted,
    text: 'Deleted',
  },
];

export const UserTypeCodes = {
  Root: 1,
  Admin: 2,
  Doctor: 3,
  Optomologist: 4,
  Nurse: 5,
  Receptionist: 6,
  Technician: 7,
};

export const UserTypeOptions = Object.keys(UserTypeCodes).map(key => ({
  text: key,
  value: UserTypeCodes[key],
}));
export const AllUserTypeCodes = Object.values(UserTypeCodes);
export const AllUserTypeNames = Object.keys(UserTypeCodes);

export const TypeItem = {
  Assessment: 1,
  Procedure: 2,
  Service: 3,
};

export const PromotionType = [
  {
    value: true,
    text: 'Percent',
  },
  {
    value: false,
    text: 'Money',
  },
];

export const TABLE_FOOTER_PROPS = {
  itemsPerPageOptions: TABLE_ROWS_PER_PAGE,
};

export const TABLE_ROWS_PER_PAGE = [2, 5, 10, 20, 50];

export default {
  TokenIDCookieName,
  StatusItems,
  UserDataLocalStorageName,
  CookieExpireDates,
  DefaultPaginationLimit,
  DefaultRequestTimeOutMs,
  StatusCodes,
  UserTypeCodes,
  TypeItem,
  PromotionType,
};
