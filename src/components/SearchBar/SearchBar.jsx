import { useState } from "react";
import { SearchBtn, SearchBtnText, SearchForm, SearchInput } from "./SearchBar.styled";


export const SearchBar = ({ setSearchParams}) => {
    
    const [query, setQuery] = useState('');
    
  
    const searchQuery = (evt) => {
        evt.preventDefault();
        setSearchParams({ query })
        setQuery('')
 
    }
    
    const changeQuery = ({ target }) => {
        // if (target.value === '') {
        //     return query({})
        // }
        console.log(target.value)
       setQuery(target.value)
    }

    return (
        <SearchForm onSubmit={searchQuery}>
            <SearchInput type='text'
                value={query}
                onChange={changeQuery}
                />
            <SearchBtn onClick={searchQuery} ><SearchBtnText>Search</SearchBtnText></SearchBtn>
    </SearchForm>
    )
}