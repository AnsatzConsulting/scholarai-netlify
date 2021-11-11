# nextjs-planetscale-starter

## Overview

This README will guide you in getting up and running with Next.js starter app with authentication. Immediately, you can allow users to sign up or login to your app, including a built-in admin panel with a users table (data queried from your PlanetScale database).

We have configured this template for you to one-click deploy directly to Netlify. Alternatively, you can manually deploy to your choice of hosting platform for Next.js applications. For more information on why we created this starter app, read me more in our [blog post]().

[![Live Demo](https://example.com/live-demo-button)](https://example.com)

## 🥞 Stack

- Framework - [Next.js v12](https://nextjs.org)
- Language - [TypeScript](https://www.typescriptlang.org/)
- Database - [PlanetScale](https://planetscale.com)
- ORM - [Prisma](https://prisma.io)
- Hosting - [Netlify](https://netlify.com)
- Styling - [TailwindCSS](https://tailwindcss.com)

## Getting Started

### One-click Deploy with Netlify (recommended)

The one-click deploy allows you to connect Netlify to your GitHub account to clone the `nextjs-planetscale-starter` repository and deploy it automatically. Be sure to go to [Netlify](https://app.netlify.com/signup) and sign up for an account before clicking the deploy button.

[![Deploy to Netlify button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/planetscale/nextjs-planetscale-starter)

By clicking the above button, you will be navigated to the Netlify’s direct deploy page with the project’s repository passed as parameters in the url. Click the **Connect to GitHub** button, name your repository and enter. 

Once the site is deployed, you need to set up your PlanetScale database that is working behind the scenes. These are the following steps required to do that: 

**Prerequisites:**
A PlanetScale account, [PlanetScale CLI](https://github.com/planetscale/cli#installation), and [Yarn](https://yarnpkg.com/getting-started/install)

1. Create a PlanetScale database
2. Create a shadow branch
3. Connect to your PlanetScale database main branch locally \
   `pscale connect <database-name> main --port <port>`
4. Connect to your PlanetScale database shadow branch locally  \
   `pscale connect <database-name> shadow --port <port>`
5. Fill in local environment variables for database URLs:\
   `DATABASE_URL="mysql://root@127.0.0.1:3309/<database-name>"` \
   `SHADOW_DATABASE_URL="mysql://root@127.0.0.1:3310/<database-name>` 
6. Run `yarn install`
7. Run `yarn db:migrate`. After this step, the database schema is ready in PlanetScale.
8. (Optional) Run `yarn db:seed` if you want to seed your database with users.
9. Back in Netlify, now that your PlanetScale database is setup, you need to add two more environment variables (found in Site settings > Build & deploy > Environment): 
- `DATABASE_URL`, get this one from inside PlanetScale connect modal, Prisma dropdown and copy URL from snippet
- `NEXTAUTH_URL`, this URL is the same as your Netlify's app's URL, for example: `https://laughing-fermat-f171ce.netlify.app/`

Once the site is rebuilt in Netlify, go to the `/admin/setup` page to create an admin account to get started. Right now, you will only be able to create one admin account through this flow. 

### Admin accounts

Admin accounts have access to `/admin`, which contains a user dashboard (powered by PlanetScale). This dashboard is a great starting place to build out an admin dashboard for your app. 

### Caveats

What's not in this starter app?
- CORS
- Access Control to API routes
- Authorization on API routes

API routes are public, so to be production ready, you will need.... TODO

TODO 
**Next Auth Custom Sign Up Pages**
- https://github.com/nextauthjs/next-auth/issues/484