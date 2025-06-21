import { MotionHighlight, StarsBackground } from './components/animate-ui';
import { CARDS } from './lib/config';

export function App() {
  return (
    <StarsBackground className="min-h-screen">
      <div className="flex flex-col gap-8 items-center py-12 px-4">
        <h1 className="text-6xl sm:text-9xl font-bold text-white mask-linear-to-transparent tracking-wider text-center">
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
          <div className="w-full max-w-2xl mt-12 flex flex-col items-center">
            <p className="text-muted text-2xl text-center">
              Yep, all of this is already part of zarhinio. 🚀
            </p>
            <video
              src="/checkbox-items.mov"
              autoPlay
              loop
              muted
              className="w-full rounded-4xl shadow-lg object-cover border border-white/10 p-4"
            />
          </div>
      </div>
    </StarsBackground>
  );
}
