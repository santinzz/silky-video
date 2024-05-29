import { auth as middleware } from './auth';

const AUTH_ROUTES = ['/auth/login', '/auth/register'];

export default middleware((req) => {
  const { nextUrl } = req;

  const isLoggedIn = !!req.auth;
  const isAuthRoute = AUTH_ROUTES.includes(nextUrl.pathname);

  if (isLoggedIn && isAuthRoute) {
    return Response.redirect(new URL('/dashboard', nextUrl));
  }
});
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
