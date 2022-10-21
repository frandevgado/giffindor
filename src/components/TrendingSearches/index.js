import React from 'react'
import useNearScreen from 'hooks/useNearScreen'
import { Suspense } from 'react'
import ReactPlaceholder from 'react-placeholder/lib'

const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
)

export default function LazyTranding () {
    const {isNearScreen, fromRef} = useNearScreen({distance : '330px'})


    return <div ref={fromRef}>
        <Suspense fallback={<ReactPlaceholder showLoadingAnimation={true} type='text' />}>
            {isNearScreen ? <TrendingSearches /> : null}
        </Suspense>
    </div>
}