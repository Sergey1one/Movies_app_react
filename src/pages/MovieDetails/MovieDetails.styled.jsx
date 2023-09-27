import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MovieDetailsContainer=styled.div`
 display: flex;
 gap:16px
`
export const MoviePoster=styled.img`
    
      max-width: 320px;
  height: 500px;
  margin-bottom: 20px;
  border-radius: 5px;
  object-fit: cover;
`

export const MovieDescContainer=styled.div`
    text-align: left;
`

export const MovieTitle=styled.h1`
    margin-bottom: 16px;
    font-weight: bold;
    font-size:48px;
text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);;
`
export const MovieInfoTitle = styled.h3`
margin-bottom: 8px;
font-size: 32px;
`

export const MovieInfo = styled.p`
margin-bottom: 8px;
font-size: 24px;
`
export const GenresContainer = styled.ul`
display:flex`


export const BackLinkButton=styled.button`
    height: 40px;
  margin-bottom: 20px;
  padding: 8px 16px;
  background-color: orangered;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border: none;
  outline: none;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border-radius: 4px;
  color:black;
  font-weight: 500;
  font-size: 20px;
  &:hover{
    opacity:0.8
  }
`
export const MovieDetailsLinkContainer = styled.ul`
display: flex;
margin-left: 30px;
gap: 32px;

`
export const MovieDetailsLink=styled(Link)`
  color:red;
  font-size: 32px;
  font-weight: bold;
  font-family: fantasy;
  
`