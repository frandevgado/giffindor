import React from 'react'
import useNearScreen from 'hooks/useNearScreen'
import { Suspense } from 'react'

const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
)

export default function LazyTranding () {
    const {isNearScreen, fromRef} = useNearScreen({distance : '330px'})


    return <div ref={fromRef}>
        <Suspense fallback='loading bro'>
            {isNearScreen ? <TrendingSearches /> : null}
        </Suspense>
    </div>
}