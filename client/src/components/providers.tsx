import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HTTPException } from 'hono/http-exception';
import { PropsWithChildren, useState } from 'react';

export function Providers({ children }: PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (err) => {
            let errorMessage: string;
            if (err instanceof HTTPException) {
              errorMessage = err.message;
            } else if (err instanceof Error) {
              errorMessage = err.message;
            } else {
              errorMessage = 'An unknown error occurred.';
            }

            // this is where you'd display a user warning (e.g. toast notification)
            console.warn(errorMessage);
          },
        }),
      })
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
