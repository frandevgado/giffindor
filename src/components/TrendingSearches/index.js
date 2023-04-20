import useNearScreen from 'hooks/useNearScreen'
import { lazy }from 'react'
import { Suspense } from 'react'
const TrendingSearches = lazy(() => import('./TrendingSearches'))

export default function LazyTrending(){
    const { NearScreen, elementRef } = useNearScreen()

   return <div ref={elementRef}>
     <Suspense fallback="Cargando...">
       {NearScreen ? <TrendingSearches /> : null}
     </Suspense>
   </div>
}