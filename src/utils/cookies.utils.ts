import envConf from "@/core/env.constant";
import { ConnectionStatus } from "@/services/user/user.models";
import Cookies from "js-cookie";

export enum CookieName {
  AUTH = "authToken",
  CONNECTION_STATUS = "connectionStatus",
  USER_ID = "userId",
  USER_ROLE = "userRole",
  WINDOW_ID = "windowId",
}

const COOKIE_EXPIRATION_DAY = 7;

/**
 * Set a cookie with a specific name and value
 * @param {string} name - The name of the cookie
 * @param {string} value - The value of the cookie
 * @param {number} [days=COOKIE_EXPIRATION_DAY] - Number of days before the cookie expires
 */
export function setCookie(name: CookieName, value: any, days?: number) {
  Cookies.set(name, value, {
    secure: envConf.node === "production",
    expires: days || COOKIE_EXPIRATION_DAY,
    path: "/",
    sameSite: "Strict",
  });
}

/**
 * Get all cookies as an object
 * @returns {Object} All cookies as key-value pairs
 */
export function getAllCookies() {
  return Cookies.get();
}

/**
 * Get a specific cookie by name
 * @param {string} name - The name of the cookie to retrieve
 * @returns {string|undefined} The value of the cookie, or undefined if it doesn't exist
 */
export function getCookieByName<T>(name: string): T {
  return Cookies.get(name) as T;
}

/**
 * Remove a cookie by name
 * @param {string} name - The name of the cookie to remove
 */
export function removeCookie(name: CookieName) {
  Cookies.remove(name, { path: "/" });
}

export function setAuthTokenCookies(tokenValue: string) {
  // Set the cookie with js-cookie on the client side
  setCookie(CookieName.AUTH, tokenValue);
}

export function setConnectionStatusCookies(connectionStatus: ConnectionStatus) {
  // Set the cookie with js-cookie on the client side
  setCookie(CookieName.CONNECTION_STATUS, connectionStatus);
}

export function setUserIdCookies(userId: string) {
  // Set the cookie with js-cookie on the client side
  setCookie(CookieName.USER_ID, userId);
}

export function setUserRoleIdCookies(userRole: string) {
  // Set the cookie with js-cookie on the client side
  setCookie(CookieName.USER_ROLE, userRole);
}

export function setWindowCookies(windowId: string) {
  // Set the cookie with js-cookie on the client side
  setCookie(CookieName.WINDOW_ID, windowId);
}
