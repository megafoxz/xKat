import _ from "lodash";
import AppConstant from "./constant";
import Validation from "../plugins/validation";
import { AsyncStorage } from "react-native";
// import { firebaseUpload } from "../service/firebase";
import { Dimensions, Platform, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

function setCookie(cname, cvalue, exdays) {
  let d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  const name = cname;
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) == 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return "";
}

const deleteCookie = (cname) => {
  const name = cname;
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};

async function setLocalStorage(lname, lvalue) {
  await AsyncStorage.setItem(lname, lvalue);
  return true;
}

async function removeLocalStorage(lname) {
  await AsyncStorage.removeItem(lname);
  return true;
}

async function getLocalStorage(lname) {
  const stringData = await AsyncStorage.getItem(lname);
  if (!stringData) {
    return null;
  }
  return stringData;
}

function parseLocalStorage(lname) {
  const stringData = getLocalStorage(lname);
  if (!stringData) {
    return null;
  }
  return JSON.parse(stringData);
}

function buildUrl(url, query) {
  if (!query || query === {} || Array.isArray(query)) {
    return url;
  }
  for (const keyname in query) {
    if (typeof query[keyname] == "object") {
      continue;
    }
    const param = `{${keyname}}`;
    while (url.includes(param)) {
      url = url.replace(param, query[keyname]);
    }
  }
  const queries = [];
  for (const keyname in query) {
    if (typeof query[keyname] !== "object") {
      queries.push(`${keyname}=${query[keyname]}`);
      continue;
    }
    if (Array.isArray(query[keyname])) {
      queries.push(`${keyname}=${query[keyname].join(",")}`);
    } else {
      queries.push(`${keyname}=${JSON.stringify(query[keyname])}`);
    }
  }
  return `${url}?${queries.join("&")}`;
}

async function getDefaultRequestHeaders() {
  return {
    page: 1,
    limit: 1000,
    "Content-Type": "application/json",
    Authorization: await getLocalStorage(AppConstant.TokenIDCookieName),
  };
}

async function buildHeaders(headers) {
  let requestHeaders = await getDefaultRequestHeaders();
  console.log(requestHeaders);

  if (!headers) {
    return requestHeaders;
  }
  if (Array.isArray(headers)) {
    return requestHeaders;
  }
  for (let keyname in headers) {
    requestHeaders[keyname.toLowerCase()] = headers[keyname];
  }

  return requestHeaders;
}

export const GetInitialName = (stringName) => {
  let arrayName = stringName.split(" ");
  let shortName = "";
  arrayName.forEach((item, index) => {
    if (index == 0 || index == arrayName.length - 1) {
      shortName += _.upperCase(item.charAt(0));
    }
  });
  return shortName;
};

export const GetFirstLastName = (stringName) => {
  let shortName = "";
  if (stringName) {
    let arrayName = stringName.split(" ");
    arrayName.forEach((item, index) => {
      if (index == 0 || index == arrayName.length - 1) {
        shortName += _.upperCase(item.charAt(0)) + item.substring(1) + " ";
      }
    });
  }
  return shortName + " ";
};

export const transliterateChar = (input) => {
  var mappings = {
    ĂÂÀẰẦẢẲẨÃẴẪÁẮẤẠẶẬ: "A",
    ÊÈỀẺỂẼỄÉẾẸỆ: "E",
    ÌỈĨÍỊ: "I",
    ÔƠÒỒỜỎỔỞÕỖỠÓỐỚỌỘỢ: "O",
    ƯÙỪỦỬŨỮÚỨỤỰ: "U",
    ỲỶỸỴ: "Y",
    ăâàằầảẳẩãẵẫáắấạặậ: "a",
    êèềẻểẽễéếẹệ: "e",
    ìỉĩíị: "i",
    ôơòồờỏổởõỗỡóốớọộợ: "o",
    ưùừủửũữúứụự: "u",
    ỳỷỹỵ: "y",
  };
  for (const c of input.split(""))
    for (const mapping in mappings)
      if (mapping.includes(c)) input = input.replaceAll(c, mappings[mapping]);
  return input;
};

export default {
  getDefaultRequestHeaders,
  GetInitialName,
  transliterateChar,
  getCookie,
  setCookie,
  normalize,
  deleteCookie,
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
  parseLocalStorage,
  buildUrl,
  buildHeaders,
  GetFirstLastName,
};
