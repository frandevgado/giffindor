import { useEffect, useRef } from "react"

export const useSEO = ({description, title}) => {
    const prevTitle = useRef(document.title)
    const prevDescription = useRef(document.querySelector('meta[name="description"]').getAttribute('content'))

      useEffect(() =>{
         const previousTitle = prevTitle.current

         if(title) {        
            document.title = `${title} | Giffindor`
          }
          return () => {
            console.log('efecto title')
            document.title = previousTitle}

        }, [title])
        
      useEffect(() =>{
        const metaDescp = document.querySelector('meta[name="description"]')
        const previousDescription = prevDescription.current
    if(description) {
      metaDescp.setAttribute('content', description)
    }

    return () => metaDescp.setAttribute('content', previousDescription)                                   
  },[description])

}