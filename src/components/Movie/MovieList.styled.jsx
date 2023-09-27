import styled from 'styled-components'


export const MovieListContainer=styled.ul`
    display:grid;
    max-width: calc(100vw - 16px);
    grid-template-columns: repeat(auto-fill,minmax(320px,1fr));
    grid-gap: 24px;
    padding: 0;
    list-style: none;
    margin: 0 auto;`

export const MovieItemContainer = styled.li`
    border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);  
`

export const MovieImage=styled.img`
    width:100%;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover{
        transform: scale(1.03);
        cursor: pointer;
        box-shadow: 0px 0px 20px 3px red
    }
`
export const MovieName=styled.p`
    display:block;
    margin-top: 8px;
    margin-bottom: 0px;
    font-family: 'Trebuchet MS', sans-serif;
    font-weight: bold;
    font-size: 24px;
    color: purple;
    text-align: center;

`
