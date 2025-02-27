import { getLogtoContext, signIn, signOut } from '@logto/next/server-actions';
import { logtoConfig } from '@/lib/logto';
import { ServerActionButton } from '@/components/server-action-button';

import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"


// export default async function Home() {
//   const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

//   return (
//     <>
//       <nav>
//         {isAuthenticated ? (
//           <span>
//             Hello, {claims?.sub},
//             <ServerActionButton
//               onClick={async () => {
//                 'use server';

//                 await signOut(logtoConfig);
//               }}
//             >
//               Sign out
//             </ServerActionButton>
//           </span>
//         ) : (
//           <span>
//             <ServerActionButton
//               onClick={async () => {
//                 'use server';

//                 await signIn(logtoConfig);
//               }}
//             >
//               Sign in
//             </ServerActionButton>
//           </span>
//         )}
//       </nav>
//       <main>
//       {claims && (
//         <div>
//           <h2>Claims:</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Value</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Object.entries(claims).map(([key, value]) => (
//                 <tr key={key}>
//                   <td>{key}</td>
//                   <td>{String(value)}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </main>
//     </>
//   )
// }

export default async function Page() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
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
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}