import { SearchForm, Header, SearchFormButton, ButtonLabel, SearchInput } from "./Searchbar.styled";

export const Searchbar = ({ onSubmit, handleChange, searchValue }) => {
        return (
            <Header>
                <SearchForm onSubmit={onSubmit}>
                    <SearchFormButton>
                        <ButtonLabel>
                            {"Search"}
                        </ButtonLabel>
                    </SearchFormButton>
                    <SearchInput placeholder="Search images" onChange={handleChange} value={searchValue } />
                </SearchForm>
            </Header>
        )
}
