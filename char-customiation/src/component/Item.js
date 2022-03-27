import React from 'react'

const Item = ({path, index, zIndex}) => {
  return (
    <img src={`character/${path}/${index + 1}.png`} alt='' className='avatar-item' style={{ zIndex }}/>
  )
}

export default Item