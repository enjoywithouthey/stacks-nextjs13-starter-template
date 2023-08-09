"use client"
import '@styles/globals.css'
import { appDetails } from '@lib/constants';

import { Connect } from "@stacks/connect-react";
import { userSession } from "@components/ConnectWallet";

// export const metadata = {
//   title: 'Next Stacks',
//   description: 'NextJS 13 With Stacks Template',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Connect
            authOptions={{
              appDetails,
              redirectTo: "/",
              onFinish: () => {
                window.location.reload();
              },
              userSession,
            }}>
            <main className="main">
              {children}
            </main>
            </Connect>
        </body>
    </html>
  )
}
