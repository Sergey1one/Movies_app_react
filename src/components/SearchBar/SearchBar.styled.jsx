import styled from 'styled-components'

export const SearchForm = styled.form`
display:flex;
justify-content: center;
margin-bottom: 32px;
`

export const SearchInput = styled.input` 
 width: 250px;
  height: 45px;
  padding: 0 10px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  /* cursor: pointer; */
  font-size: 16px;
  &:hover{
    outline-color: orangered;
  }
`
  export const SearchBtn=styled.button`
    height: 47px;
  padding: 10px 20px;
  background-color: orangered;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border: none;
  outline: none;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
   
 
  &:hover{
    opacity: 0.8;
  }
  &:focus{
    opacity: 0.8;
  }
  `  
    

export const SearchBtnText=styled.span`
color: white;
  font-weight: 500;
  font-size: 20px;
`

 


    
