import { Hono } from 'hono';
import { cors } from 'hono/cors';
import type { Stargazer } from '@shared';
import { env } from 'hono/adapter';

type Environment = {
  GITHUB_TOKEN: string;
};

export const app = new Hono()
  .basePath('/api')

  .use(cors())

  .get('/', (c) => {
    return c.text('Hello Hono!');
  })

  .get('/stargazers', async (c) => {
    const { GITHUB_TOKEN } = env<Environment>(c);

    if (!GITHUB_TOKEN) {
      return c.json({ error: 'GITHUB_TOKEN is not set' }, 500);
    }

    try {
      const res = await fetch(
        'https://api.github.com/repos/orzarhi/zarhinio/stargazers?per_page=100',
        {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            'User-Agent': 'zarhinio-app/1.0.0 (https://github.com/orzarhi/zarhinio)',
          },
        }
      );

      console.log('Response status:', res.status);
      console.log('Response headers:', Object.fromEntries(res.headers));

      if (!res.ok) {
        const errorText = await res.text();
        console.log('Error response:', errorText);
        return c.json(
          { error: `GitHub API error: ${res.status}`, details: errorText },
          500
        );
      }

      const data = (await res.json()) as Stargazer[];

      const stargazers = data.map((stargazer: Stargazer) => ({
        login: stargazer.login,
        avatar_url: stargazer.avatar_url,
        html_url: stargazer.html_url,
      }));

      return c.json(stargazers, { status: 200 });
    } catch (error) {
      console.error('Error fetching stargazers:', error);
      return c.json({ error: 'Failed to fetch stargazers' }, 500);
    }
  });

export default app;
