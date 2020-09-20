import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import WhatShotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import HistoryIcon from '@material-ui/icons/History';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import YouTubeIcon from '@material-ui/icons/YouTube';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagSharpIcon from '@material-ui/icons/FlagSharp';
import HelpSharpIcon from '@material-ui/icons/HelpSharp';
import FeedbackSharpIcon from '@material-ui/icons/FeedbackSharp';

import SideBarRow from './SideBarRow';
import '../../css/sidebar.css';

function Sidebar({ show }) {
  
  return (
    <div className={`sidebar ${!show && 'sidebar-active'} ${!show && 'mini-sidebar'}`}>
      <SideBarRow Icon={HomeIcon} title="Home" show={show} selected />
      <SideBarRow Icon={WhatShotIcon} show={show} title="Trending"  />
      <SideBarRow Icon={SubscriptionsIcon} show={show} title="Subscriptions"  />
      <hr />
      <SideBarRow Icon={VideoLibraryIcon} show={show} title="Library"  />
      <SideBarRow Icon={HistoryIcon} show={show} title="History"  />
      <SideBarRow Icon={OndemandVideoIcon} show={show} title="Your Views"  />
      <SideBarRow Icon={WatchLaterIcon} show={show} title="Watch Later"  />
      <SideBarRow Icon={ThumbUpAltOutlinedIcon} show={show} title="Liked Videos"  />
      <SideBarRow Icon={ExpandMoreOutlinedIcon} show={show} title="Show more"  />
      <hr />
      <h5 className='sidebar__header'>MORE FROM YOUTUBE</h5>
      <SideBarRow Icon={YouTubeIcon} show={show} title='Youtube Premium'  />
      <SideBarRow Icon={VideogameAssetIcon} show={show} title='Gaming'  />
      <SideBarRow Icon={LiveTvIcon} show={show} title='Live'  />
      <hr />
      <SideBarRow Icon={SettingsIcon} show={show} title='Settings'  />
      <SideBarRow Icon={FlagSharpIcon} show={show} title='Report History'  />
      <SideBarRow Icon={HelpSharpIcon} show={show} title='Help'  />
      <SideBarRow Icon={FeedbackSharpIcon} show={show} title='Send Feedback'  />
    </div>
  )
}

export default Sidebar
