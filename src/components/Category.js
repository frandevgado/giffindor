import { StyledTrendLink, TrendUList } from "./styled/UList"
import { Subtitle } from "./styled/Headings"

export default function Category({name, options}){

        console.log(options)
    return (

        <section>
        <Subtitle>{name}</Subtitle>
        <TrendUList>
            {options.map(singleOption => <StyledTrendLink to={`/search/${singleOption}`} key={singleOption}>{singleOption}</StyledTrendLink>)}
        </TrendUList>
        </section>
    )
}