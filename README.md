# Phyo & Eaint — wedding invitation

A mobile-first Next.js App Router invitation built with TypeScript, Tailwind CSS, Framer Motion, Lucide, and canvas-confetti.

## Project structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  CountdownTimer.tsx
  Gallery.tsx
  Hero.tsx
  MusicPlayer.tsx
  RSVP.tsx
  Timeline.tsx
  Venue.tsx
public/
  audio/
  images/
```

## Run locally

Install dependencies with `npm install`, start the development server with `npm run dev`, and open `http://localhost:3000`. Use `npm run typecheck` to check TypeScript and `npm run build` for a production build. Node.js 20.9 or newer is required by Next.js 16.

On Windows, if the project directory contains `&`, npm's script shell may split the path. In that case run `node .\node_modules\next\dist\bin\next dev`, `node .\node_modules\typescript\bin\tsc --noEmit`, and `node .\node_modules\next\dist\bin\next build` directly from the project directory.

## Before sharing the invitation

- Replace the example couple names, date, RSVP deadline, schedule, and venue in `components/Hero.tsx`, `components/Timeline.tsx`, `components/Venue.tsx`, and `app/page.tsx`.
- Replace the Unsplash demo photos in `components/Hero.tsx`, `components/Timeline.tsx`, and `components/Gallery.tsx` with photos you have permission to use. Local image files can live under `public/images/`.
- Add a licensed MP3 at `public/audio/wedding-melody.mp3`, or update the audio source in `components/MusicPlayer.tsx`.
- Update the venue name and address in `components/Venue.tsx`. The map uses a Google Maps search embed and directions link, so it does not need an API key. Use a Maps Embed API URL and configure an API key only if you need a pinned, customized map.
- RSVP entries and guest wishes currently use this browser's `localStorage`; they are not sent to the couple or shared with other guests. Connect a server action/API route and a database or RSVP provider before using the form for real guest responses.
