import { useEffect, useState, useRef } from "react"

export default function useNearScreen({ externalRef, distance = '50px',  once = true } = {}){
    const [NearScreen, setNearScreen] = useState(false)
    const elementRef = useRef()

    useEffect(() =>{
        const element = externalRef ? externalRef.current : elementRef.current

        const onChange = (entries, observer) =>{
            const underViewEl = entries[0]
            if (underViewEl.isIntersecting){
                setNearScreen(true)
                once && observer.disconnect()
            }else {
                    !once && setNearScreen(false)
                }
            }
        

        const observer = new IntersectionObserver(onChange,{
            rootMargin: distance
            })

        if(element) observer.observe(element)

        return () => observer.disconnect()
    })

    return { elementRef, NearScreen }
}