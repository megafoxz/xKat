import { ExportInstance } from "twilio/lib/rest/bulkexports/v1/export";

// Modify Cookie Name and Local Storage Name
export const ApplicationCookieTokenIDName = "@HIS_APP_ACCESS_TOKEN";
export const ApplicationLocalStorageUserDataName = "@HIS_APP_USER_DATA";
export const ApplicationPhoneNumberVerified = "@PHONE_NUMBER_VERIFIED";
// 1 - Ax, 2 - Px, 3 - Service
// Loại item default xuất hiện khi admit patient
export const DefaultItemTypeToAddWhenCreateAdmission = 3;
// NOTE: allow re-admission will delete old admission data and re-create new one
// Only use it for beta system or for PAS system WITHOUT EMR
export const AllowFeatureReCreateAdmission = true;
// NOTE: this option allow receptionist to choose a free item when admiting patient
// Only use it for beta system or for PAS system WITHOUT EMR
// usually come together with AllowFeatureReCreateAdmission = true;
export const AllowFreeItemSelectionWhenCreateAdmission = true;
// NOTE: this is a required allow UI to choose the correct resource that the project want to query
// It is very important, without this you can not access inside the server api
// when you send a request base on url, the first server will receive your request is NGINX SERVER
// Now NGINX SERVER will check the header with the correct value of environment
// If not correct env ==> will return 403 Unauthorized
// if correct => call the correct resource that defined inside nginx configuration
// OR if you dont want to use this, change gateway again
export const EnvironmentNginx = "7B5zIqmRGXmrJTFmKa99vcit";

// Lastest: 7B5zIqmRGXmrJTFmKa99vcit
// Mec.vn: QzVV6y1EmQFbbxOfRCwyJs35
