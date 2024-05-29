/**
 * Public routes that do not require authentication
 */
export const PUBLIC_ROUTES = ['/', '/login', '/register'];

/**
 * API prefix for middleware not requiring authentication
 * @type {string}
 */
export const API_PREFIX = '/api';

/**
 * Default redirect path after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/';
