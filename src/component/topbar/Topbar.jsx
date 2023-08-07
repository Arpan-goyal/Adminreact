import React from 'react'
import "./topbar.css";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">

            <div className="topLeft">
                <span className="logo">azadmin</span>
            </div>
            
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNoneIcon/>
                    <span className="topiconsbadge">3</span>
                </div>

                <div className="topbarIconContainer">
                    <SettingsIcon/>
                </div>

                <div className="topbarIconContainer">
                    <LanguageIcon/>
                    <span className="topiconsbadge">3</span>
                </div>

                <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg" alt="no_image" className='topAvatar' />
            </div>
        </div>
    </div>
  )
}

export default Topbar