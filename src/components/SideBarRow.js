import React from 'react';
import '../css/sidebar_row.css'

function SideBarRow({ Icon, title, selected }) {
  return (
    <div className={`sidebarRow flex align-center ${selected && 'selected'}`}>
      <Icon className='sideBarRow__icon'/>
      <h2 className='sideBarRow__title'>{title}</h2>
    </div>
  )
}

export default SideBarRow
