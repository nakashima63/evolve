import { NextResponse } from "next/server";

export const config = {
  matcher: "/:path*",
};

export async function middleware() {
  const res = NextResponse.next();

  // 本番環境のみBasic認証を要求
  // if (process.env.NODE_ENV === "production") {
  //   const basicAuth = req.headers.get("authorization");
  //   if (basicAuth) {
  //     const auth = basicAuth.split(" ")[1];
  //     const [user, password] = atob(auth).split(":");

  //     if (
  //       user === process.env.BASIC_AUTH_USER &&
  //       password === process.env.BASIC_AUTH_PASSWORD
  //     ) {
  //       return res;
  //     }
  //   }

  //   return new Response("Auth required", {
  //     status: 401,
  //     headers: {
  //       "WWW-Authenticate": 'Basic realm="Secure Area"',
  //     },
  //   });
  // }
  // 開発環境では認証をスキップ
  return res;
}
