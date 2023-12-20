// cli
import { useCallback, useMemo, useState } from 'react';

// style
import * as Styled from './styled';

// default values
import {
    ListMoveDefault,
} from '../../utils/common/defaultData';

// const
const left = 'LEFT'
const right = 'RIGHT'

const Move = () => {

    // state
    const [listItemsLeft, setListItemsLeft] = useState(ListMoveDefault)
    const [listItemsRight, setListItemsRight] = useState([])

    //eslint-disable-next-line
    let listItemsLeftChecked = useMemo(() => [], [listItemsLeft]) 
    
    //eslint-disable-next-line
    let listItemsRightChecked = useMemo(() => [], [listItemsRight]) 

    // action
    const handleCheckItem = useCallback((item, listItemsChecked) => {
        const findItem = listItemsChecked.indexOf(item)
        if(findItem === -1) {
            listItemsChecked.push(item)
        }else{
            listItemsChecked.splice(findItem, 1)
        }
    },[])

    const hanldMove = useCallback((type) => {
        if(type === left && listItemsLeftChecked.length) {
            setListItemsRight(prev => [...prev, ...listItemsLeftChecked])
            setListItemsLeft(prev => prev.filter(item => !listItemsLeftChecked.includes(item)))
        }else if(type === right && listItemsRightChecked.length){
            setListItemsLeft(prev => [...prev, ...listItemsRightChecked])
            setListItemsRight(prev => prev.filter(item => !listItemsRightChecked.includes(item)))
        }

    }, [listItemsLeftChecked, listItemsRightChecked])

    const onRenderListItems = (items, type) => {
        let result = null
        result = items.map(item => <Styled.ListItems key={item}>
                                        <input type="checkbox" onChange={() => handleCheckItem(item, type)} />
                                        {item}
                                    </Styled.ListItems>)

        return result
    }

    // render
    return <Styled.Wrapper>
        <Styled.Content>
            <Styled.List>
                {onRenderListItems(listItemsLeft, listItemsLeftChecked)}
            </Styled.List>
            <Styled.WrapperActions>
                <Styled.Action onClick={() => hanldMove(left)}>&gt;</Styled.Action>
                <Styled.Action onClick={() => hanldMove(right)}>&lt;</Styled.Action>
            </Styled.WrapperActions>
            <Styled.List>
                {onRenderListItems(listItemsRight, listItemsRightChecked)}
            </Styled.List>
        </Styled.Content>
    </Styled.Wrapper>
}

export default Move;