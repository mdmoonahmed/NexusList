import { NextResponse } from 'next/server';

export function middleware(request) {
  const authCookie = request.cookies.get('auth_token');

  if (request.nextUrl.pathname.startsWith('/add-item')) {
    if (!authCookie) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/add-item/:path*'],
};