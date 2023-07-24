import { LoadMoreBtn } from "./LoadMoreBtn.styled";


export const LoadMoreButton = ({onClick}) => {
    return (
        <LoadMoreBtn onClick={onClick}>{"Load more"}</LoadMoreBtn>
    )
}