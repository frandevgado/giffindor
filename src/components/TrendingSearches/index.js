import useNearScreen from 'hooks/useNearScreen'
import { lazy, Suspense }from 'react'
import MyLoader from 'components/Fallbacks'
const TrendingSearches = lazy(() => import('./TrendingSearches'))

export default function LazyTrending(){
    const { NearScreen, elementRef } = useNearScreen({distance: '0px'})

   return <div className='trending-container' ref={elementRef}>
       {NearScreen ? <TrendingSearches /> : <MyLoader />}
   </div>
}