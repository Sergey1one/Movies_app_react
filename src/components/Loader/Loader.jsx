import { Dna } from 'react-loader-spinner'
import { LoaderContainer } from './Loader.styled'


export const Loader = () => {
    return (
        <LoaderContainer>
            <Dna
  visible={true}
  height="120"
  width="120"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/>
        </LoaderContainer>
    )
}