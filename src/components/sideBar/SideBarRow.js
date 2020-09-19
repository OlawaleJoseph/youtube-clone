import React from 'react';
import '../../css/sidebar_row.css'

function SideBarRow({ Icon, title, selected, show }) {

  return (
    <div className={`sidebarRow flex align-center ${selected && 'selected'} ${!show && 'no-display'}`}>
      <Icon className='sideBarRow__icon'/>
      <h2 className='sideBarRow__title'>{title}</h2>
    </div>
  )
}

export default SideBarRow
