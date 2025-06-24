import { Hono } from 'hono';
import { cors } from 'hono/cors';
import type { Stargazer } from '@shared';

export const app = new Hono()
  .basePath('/api')

  .use(cors())

  .get('/', (c) => {
    return c.text('Hello Hono!');
  })

  .get('/stargazers', async (c) => {
    const res = await fetch(
      'https://api.github.com/repos/orzarhi/zarhinio/stargazers?per_page=100',
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    const data = (await res.json()) as Stargazer[];

    const stargazers = data.map((stargazer: Stargazer) => ({
      login: stargazer.login,
      avatar_url: stargazer.avatar_url,
      html_url: stargazer.html_url,
    }));

    return c.json(stargazers, { status: 200 });
  });

export default app;
