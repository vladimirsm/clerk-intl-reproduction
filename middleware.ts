import { authMiddleware } from "@clerk/nextjs";

import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  locales: ["en", "dk"],

  defaultLocale: "en",
});

export default authMiddleware({
  beforeAuth: (req) => {
    return intlMiddleware(req);
  },

  publicRoutes: ["/", "/:locale/sign-in"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
