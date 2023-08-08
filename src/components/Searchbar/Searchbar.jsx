import { Component } from "react";
import { SearchForm, Header, SearchFormButton, ButtonLabel, SearchInput } from "./Searchbar.styled";


class Searchbar extends Component {
    state = {
        searchChange: ''
    }

    handleChange = (e) => {
              this.setState({searchChange: e.target.value})
        }

    render(){
        return (
            <Header>
                <SearchForm onSubmit={this.props.onSubmit}>
                    <SearchFormButton>
                        <ButtonLabel>
                            {"Search"}
                        </ButtonLabel>
                    </SearchFormButton>
                    <SearchInput placeholder="Search images" onChange={this.handleChange} value={this.state.searchChange } />
                </SearchForm>
            </Header>
        )}
       
}

export default Searchbar

