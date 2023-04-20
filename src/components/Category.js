import { StyledTrendLink, TrendUList, Section } from "./styled/UList"
import { Subtitle } from "./styled/Headings"


export default function Category({name, options}){
    return (

        <Section>
        <Subtitle>{name}</Subtitle>
        <TrendUList>
            {options.map(singleOption => <StyledTrendLink to={`/search/${singleOption}`} key={singleOption}>{singleOption}</StyledTrendLink>)}
        </TrendUList>
        </Section>
    )
}