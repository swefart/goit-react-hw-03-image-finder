import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMoreButton } from "./LoadMoreBtn/LoadMoreBtn";
import { Loader } from "./Loader/Loader";
import { getImagesBySearch } from "./Api/Images";
import Modal from "./Modal/Modal";



class App extends Component {
  state = {
    searchValue: '',
    page: 1,
    images: [],
    showBtn: false,
    isLoading: false,
    isShowModal: false,
    url: '',
    searchChange: '',
  }

  componentDidUpdate(prevProps, prevState) {
   
    if (prevState.searchValue !== this.state.searchValue || prevState.page !== this.state.page ) 
         this.handleSearch()
    
  }

  handleSearch = async() => {
    try {
      this.setState({ isLoading: true, showBtn: false})
      const data = await getImagesBySearch(this.state.searchValue, this.state.page)
      this.setState((prev) => ({ images: [...prev.images, ...data.hits], showBtn: this.state.page < (data.totalHits / 12), isLoading: false}))
    } catch {

    }
  }

  onSubmitForm = (e) => {
    e.preventDefault()
    const prevValue = this.state.searchValue;
    if (prevValue !== this.state.searchChange && this.state.searchChange.trim()) {
   this.setState({ searchValue: this.state.searchChange, page: 1, images: [] }) 
    }
   
  }

  onClickLoadMore = () => {
    this.setState((prev) => ({ page: prev.page + 1}))
    
  }
  toggleModal = () => {
    this.setState((prev) => ({ isShowModal: !prev.isShowModal}))
  }
  
  onGalleryClick = (props) => {
    this.setState(({ isShowModal }) => { return { url: props, isShowModal: !isShowModal } })
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({searchChange: e.target.value})
  }

  render() {
    const { images } = this.state;
    return (
      
        <div>
        <Searchbar onSubmit={this.onSubmitForm} handleChange={this.handleChange} searchValue={this.searchValue}></Searchbar>
       {this.state.isLoading && <Loader/>}
        <ImageGallery img={images} onClick={this.onGalleryClick } />
        {this.state.showBtn && <LoadMoreButton onClick={this.onClickLoadMore} />}
        {this.state.isShowModal && <Modal close={this.toggleModal} src={this.state.url}></Modal>}
  </div>
    )
  }

};

export default App