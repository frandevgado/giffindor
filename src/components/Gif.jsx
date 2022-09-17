import RoundedImg from "./styled/RoundedImg"
import { useLocation } from 'wouter'

export default function Gif({title,url, id}){

    const [location, pushLocation] = useLocation()

    const handleClick = () => {
        pushLocation(`/gif/${id}`)
      }

    return (
          <RoundedImg onClick={handleClick} src={url} id={id} alt={title} />
    )
}