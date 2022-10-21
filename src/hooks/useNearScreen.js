import { useState, useEffect, useRef } from 'react'

export default function useNearScreen({distance = '120px'} = {}){
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef()

    useEffect(() =>{ 
        let observer
        const onViewport = (entries, observer) => {
            const underOb = entries[0]
            console.log(entries[0])
            if (underOb.isIntersecting){
                setShow(true)
                observer.disconnect()
            }
        }
        

        Promise.resolve(
            typeof IntersectionObserver === 'undefined'
            ? IntersectionObserver
            : import('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(onViewport, {
                rootMargin: distance
        })
        observer.observe(fromRef.current)
        })

        return () => observer && observer.disconnect()

    })

    return {isNearScreen, fromRef}
}