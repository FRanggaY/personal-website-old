import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export async function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  if (pathName === '/') {
    return NextResponse.rewrite(new URL('/en', request.url))
  }
}
