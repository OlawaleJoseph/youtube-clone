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
import '../css/sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SideBarRow Icon={HomeIcon} title="Home" selected />
      <SideBarRow Icon={WhatShotIcon} title="Trending" />
      <SideBarRow Icon={SubscriptionsIcon} title="Subscriptions" />
      <hr />
      <SideBarRow Icon={VideoLibraryIcon} title="Library" />      <SideBarRow Icon={HistoryIcon} title="History" />
      <SideBarRow Icon={OndemandVideoIcon} title="Your Views" />
      <SideBarRow Icon={WatchLaterIcon} title="Watch Later" />
      <SideBarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
      <SideBarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
      <hr />
      <h5 className='sidebar__header'>MORE FROM YOUTUBE</h5>
      <SideBarRow Icon={YouTubeIcon} title='Youtube Premium' />
      <SideBarRow Icon={VideogameAssetIcon} title='Gaming' />
      <SideBarRow Icon={LiveTvIcon} title='Live' />
      <hr />
      <SideBarRow Icon={SettingsIcon} title='Settings'/>
      <SideBarRow Icon={FlagSharpIcon} title='Report History' />
      <SideBarRow Icon={HelpSharpIcon} title='Help' />
      <SideBarRow Icon={FeedbackSharpIcon} title='Send Feedback' />
    </div>
  )
}

export default Sidebar
