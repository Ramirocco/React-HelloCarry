import React from 'react'
import { Item } from '../item/Item'


export const ItemList = ({items}) => {

  return (
    <div className='Container-Cards'>
    {items.map((element)=>{
        return (
            <item key={element.Id} element={element}> </item>
        )})}
    </div>
  )
}
