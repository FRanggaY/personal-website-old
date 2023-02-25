//LIBRARIES
import styled from 'styled-components';

const FilterButtons = styled.div`
    padding-top: 10px;
`;

const FilterButton = styled.button`
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 1rem;
    background: ${(props)=> props.theme.sidebarBackground};
    border: 1px solid ${(props)=> props.theme.textColor};
    color: ${(props)=> props.theme.textColor};
    border-radius: 15px;
    cursor: pointer;
    height: 3rem;

    &:hover{
        background: var(--grey);
    }
    .active{
        background:red;
    }
`;


function FilterPortfolio({data, filterSetData}) {  

    var Website = data.filter(e => e.category === "website");
    var Desktop = data.filter(e => e.category === "desktop");
    var Other = data.filter(e => e.category === "other");
    
    function showA() {
        filterSetData(Website)
    }

    function showB() {
        filterSetData(Desktop)
    }
    function showC() {
        filterSetData(Other)
    }

    function removeFiter() {
        filterSetData(data)
    }

    return (
        <FilterButtons>
            <FilterButton onClick={() => showA()} >Website</FilterButton>
            <FilterButton onClick={() => showB()} >Desktop</FilterButton>
            <FilterButton onClick={() => showC()} >Other</FilterButton>
            <FilterButton onClick={() => removeFiter()} >All</FilterButton>
        </FilterButtons>
    )
}

export default FilterPortfolio;
