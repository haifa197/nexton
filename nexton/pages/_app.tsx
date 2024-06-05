import type { AppProps } from 'next/app';
import type { NextComponentType, NextPageContext } from 'next';
import Layout from '../components/Layout';
import '../app/globals.css';
import { SessionProvider, useSession } from 'next-auth/react';
import { ReactNode } from 'react';

type PageProps = {
  session: any;
  [key: string]: any;
};

type MyAppProps = AppProps & {
  Component: NextComponentType<NextPageContext, any, any> & {
    auth?: boolean;
  };
  pageProps: PageProps;
};

function Auth({ children }: { children: ReactNode }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: MyAppProps) {
  return (
    <SessionProvider session={session}>
      <Layout>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </SessionProvider>
  );
}
