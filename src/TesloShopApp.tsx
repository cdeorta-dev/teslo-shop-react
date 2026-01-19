import type { PropsWithChildren } from 'react';
import {RouterProvider} from 'react-router';
import { appRouter } from './app.router';
import { Toaster} from 'sonner'
import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';


import { CustomFullScreenLoading } from './components/custom/CustomFullScreenLoading';
import { useAuthStore } from './auth/store/auth.store';
export const TesloShopApp = () => {
  const CheckAuthProvider= ({children}: PropsWithChildren) =>{


    const {checkAuthStatus} = useAuthStore();
    const{isLoading }= useQuery({
      queryKey:['auth'],
      queryFn:checkAuthStatus,
      retry:false,
      refetchInterval: 1000 *60 *1.5,
      refetchOnWindowFocus: true,
    });
   
    if(isLoading) return <CustomFullScreenLoading/>
  //  return <CustomFullScreenLoading/>
    return children;
  }

  const queryClient = new QueryClient()
  return (

  <QueryClientProvider client={queryClient}>

    <Toaster/>


      <CheckAuthProvider>

        <RouterProvider router={appRouter}/>
      </CheckAuthProvider>
      {/* The rest of your application */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  )

    

}
