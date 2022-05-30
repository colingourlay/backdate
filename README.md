# backdate

Avoid Season One spoilers by syncing YouTube content to the day you got your Playdate

## Requirements

The project fetches content from an Airtable; create a "YouTube Videos" table in your base, with the columns:

- `id` (text; YouTube video ID)
- `title` (text; YouTube video title)
- `date` (date; Publication date)
- `days_since_epoch` (formula: `DATETIME_DIFF(date, "2022/04/18", 'days')`)
- `hide` (boolean; Exclude video from query results)

You also need to create a `.env` file which contains your Airtable base ID and API token:

```
VITE_AIRTABLE_BASE_ID=app<unique>
VITE_AIRTABLE_TOKEN=key<unique>
```

## Developing

Once you've met the above requirements and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Credits

This is a SvelteKit project, built atop [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).
