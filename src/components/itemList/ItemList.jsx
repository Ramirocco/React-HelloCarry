import React from 'react'
import "./itemList.scss"
import { Item } from '../item/Item'


export const ItemList = ({items}) => {

  return (
    <div className='Container-Cards'>
    {items.map((element)=>{
        return (
            <Item key={element.Id} element={element}> </Item>
        )})}
    </div>
  )
}
