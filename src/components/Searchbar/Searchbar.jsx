import { Component } from "react";
import { SearchForm, Header, SearchFormButton, ButtonLabel, SearchInput } from "./Searchbar.styled";


class Searchbar extends Component {
    state = {
        searchChange: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (!this.state.searchChange.trim()) {
            alert("Please fill the field")
            return
        }
        this.props.onSubmit(this.state.searchChange.trim())
    }


    handleChange = (e) => {
              this.setState({searchChange: e.target.value})
        }

    render() {
        return (
            <Header>
                <SearchForm onSubmit={this.handleSubmit}>
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

