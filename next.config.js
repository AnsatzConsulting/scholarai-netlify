if (!process.env.NEXTAUTH_URL) {
  console.warn(
    "\x1b[33mwarn",
    "\x1b[0m",
    "NEXTAUTH_URL environment variable is not set."
  );
  if (process.env.URL) {
    process.env.NEXTAUTH_URL = process.env.URL;
    console.warn(
      "\x1b[33mwarn",
      "\x1b[0m",
      `NEXTAUTH_URL environment variable is not set. Using Netlify URL ${process.env.URL}.`
    );
  }
}

module.exports = {
  reactStrictMode: true,
  /* If trying out the experimental appDir, comment the i18n config out
   * @see https://github.com/vercel/next.js/issues/41980 */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
