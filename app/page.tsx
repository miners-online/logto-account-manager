import { getLogtoContext, signIn, signOut } from '@logto/next/server-actions';
import { logtoConfig } from '@/lib/logto';
import { ServerActionButton } from '@/components/server-action-button';

export const runtime = 'edge';

export default async function Home() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  return (
    <>
      <nav>
        {isAuthenticated ? (
          <span>
            Hello, {claims?.sub},
            <ServerActionButton
              onClick={async () => {
                'use server';

                await signOut(logtoConfig);
              }}
            >
              Sign out
            </ServerActionButton>
          </span>
        ) : (
          <span>
            <ServerActionButton
              onClick={async () => {
                'use server';

                await signIn(logtoConfig);
              }}
            >
              Sign in
            </ServerActionButton>
          </span>
        )}
      </nav>
      <main>
      {claims && (
        <div>
          <h2>Claims:</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(claims).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{String(value)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
    </>
  )
}
