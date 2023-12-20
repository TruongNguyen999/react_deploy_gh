import styled from "styled-components";

export const Wrapper = styled.section`
    height: 100vh;
    width: 100vw;
`

export const Content = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const List = styled.section`
    width: 200px;
    height: 250px;
    border-radius: 10px;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ListItems = styled.label`
`

export const WrapperActions = styled(Content)`
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    height: auto;
`

export const Action = styled.button`
    width: 50px;
    height: 40px;

    &:hover {
        cursor: pointer;
    }
`