import {
  AvatarGroup,
  AvatarGroupTooltip,
  GitHubStarsButton,
  LiquidButton,
  MotionHighlight,
  StarsBackground,
} from '@/components/animate-ui';
import { Footer } from '@/components/footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { client } from '@/lib/client';
import { CARDS } from '@/lib/config';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';
import type { Stargazer } from '@zarhinio/shared';

export function LandingPage() {
  const { data: stargazers } = useQuery<Stargazer[]>({
    queryKey: ['stargazers'],
    queryFn: async () => {
      const res = await client.stargazers.$get();
      return (await res.json()) as Stargazer[];
    },
    staleTime: 1000 * 60 * 1, // 1 minute
  });

  return (
    <StarsBackground className="min-h-screen">
      <div className="flex flex-col gap-8 items-center py-12 px-4">
        <h1 className="text-7xl sm:text-9xl font-bold text-white mask-linear-to-transparent tracking-wider text-center">
          zarhinio
        </h1>

        <div className="w-full max-w-2xl text-center space-y-4">
          <p className="text-white text-lg sm:text-xl">
            Meet your personal AI learning team – a group of specialized agents designed
            to explain, illustrate, and quiz you in the way that fits you best.
          </p>
          <p className="text-muted-foreground text-base sm:text-lg">
            Whether you’re a visual thinker or a hands-on learner,{' '}
            <strong>zarhinio</strong> adapts to your style. Here's how it works:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mt-12">
          <MotionHighlight className="rounded-xl bg-muted-foreground/20" hover>
            {CARDS.map((card) => (
              <div key={card.value} data-value={card.value}>
                <div className="p-4 flex flex-col border rounded-xl">
                  <div className="flex items-center justify-around size-10 rounded-lg bg-blue-500/10 mb-2">
                    <card.icon className="size-5 text-white" />
                  </div>
                  <p className="text-base font-medium text-white mb-1">{card.title}</p>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>
              </div>
            ))}
          </MotionHighlight>
        </div>
        <div className="relative w-full max-w-4xl mt-12 flex mx-auto flex-col gap-4 items-center">
          <h2 className="text-xl font-bold text-white text-center">
            A real-time feed of the latest supporters - thanks for starring the GitHub
            repo!
          </h2>
          {stargazers?.length ? (
            <AvatarGroup className="h-12 -space-x-3">
              {stargazers.map((stargazer) => (
                <Avatar
                  key={stargazer.login}
                  className="size-12 border-3 border-black/90 hover:border-black/20 transition-all duration-300"
                >
                  <Link to={stargazer.html_url} target="_blank">
                    <AvatarImage src={stargazer.avatar_url} />
                  </Link>
                  <AvatarFallback>{stargazer.login}</AvatarFallback>
                  <AvatarGroupTooltip>
                    <p>{stargazer.login}</p>
                  </AvatarGroupTooltip>
                </Avatar>
              ))}
            </AvatarGroup>
          ) : (
            <div className="flex -space-x-3">
              <Skeleton className="size-12 rounded-full" />
              <Skeleton className="size-12 rounded-full" />
              <Skeleton className="size-12 rounded-full" />
              <Skeleton className="size-12 rounded-full" />
            </div>
          )}

          <div className="flex flex-col items-center group">
            <img
              src="/arrow.webp"
              alt="arrow pointing to the right"
              width={200}
              height={200}
              className="object-cover p-4 ml-18 -mt-10 group-hover:rotate-3 transition-all duration-300 hover:rotate-0"
            />

            {stargazers?.length ? (
              <GitHubStarsButton
                username="orzarhi"
                repo="zarhinio"
                starsCount={stargazers?.length ?? 0}
                formatted
                className="hover:border hover:border-white/50"
              />
            ) : (
              <Skeleton className="size-12 w-48 h-12" />
            )}
          </div>
        </div>
        <div className="w-full max-w-2xl mt-12 flex flex-col items-center">
          <p className="text-muted text-xl font-bold text-center">
            Yep, all of this is already part of zarhinio. 🚀
          </p>
          <video
            src="/checkbox-items.mov"
            autoPlay
            loop
            playsInline
            muted
            className="w-full rounded-4xl shadow-lg object-cover border border-white/10 p-4"
          />
        </div>
        <div className="w-full max-w-2xl mt-16 flex flex-col items-center gap-4">
          <p className="text-white text-xl sm:text-2xl font-medium text-center">
            Ready to start learning in a way that suits you best?
          </p>
          <LiquidButton size="lg" asChild>
            <Link to="/signup">Let's get started</Link>
          </LiquidButton>
        </div>
      </div>
      <Footer />
    </StarsBackground>
  );
}
