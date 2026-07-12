# Harshnee K S Portfolio

React + Vite portfolio that keeps the original content and visual style while replacing the static HTML site with a maintainable React app.

## Run locally

1. Install dependencies with `npm install`.
2. Create a `.env` file from `.env.example`.
3. Start the dev server with `npm run dev`.

## Email form setup

The contact form sends through Gmail SMTP using a Vercel serverless function.

Set these environment variables locally and in Vercel:

- `SMTP_HOST=smtp.gmail.com`
- `SMTP_PORT=465`
- `SMTP_USER=your-gmail-address@gmail.com`
- `SMTP_PASS=your-gmail-app-password`
- `CONTACT_TO_EMAIL=harshneekannapiran@gmail.com`
- `CONTACT_FROM_EMAIL=your-gmail-address@gmail.com`

Use a Gmail app password, not your normal login password.

## Public assets

The React app expects these files in `public/`:

- `public/profile.jpg`
- `public/resume.pdf`

## Build

- `npm run build`

## Preview

- `npm run preview`

## Vercel deploy

1. Install the Vercel CLI with `npm i -g vercel` if needed.
2. Run `vercel login` and sign in.
3. Run `vercel` to create the project.
4. Add the SMTP environment variables in the Vercel project settings.
5. Run `vercel --prod` to deploy the production version.
