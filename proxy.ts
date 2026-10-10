import { NextRequest, NextResponse } from "next/server";
export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (/^\/(en|zh)(\/|$)/.test(path)) return NextResponse.next();
  if (path === "/" || /^\/(stories|journal|about|contact)(\/|$)/.test(path)) {
    const url = request.nextUrl.clone();
    url.pathname = `/en${path === "/" ? "" : path}`;
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/", "/stories/:path*", "/journal/:path*", "/about", "/contact"],
};
