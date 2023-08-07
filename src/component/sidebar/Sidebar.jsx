import React from 'react'
import "./sidebar.css";
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarlist">
                    <Link to={"/"} className="link">
                    <li className="sidebarListitem active">
                              <LineStyleIcon className='sidebarIcons'/>
                              Home
                         </li>
                    </Link>

                    <li className="sidebarListitem">
                         <TimelineIcon className='sidebarIcons'/>
                         Analytics
                    </li>
                    <li className="sidebarListitem">
                         <TrendingUpIcon className='sidebarIcons'/>
                         Sales
                    </li>
                </ul>
            </div>


            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarlist">
                    <Link to={"/users"} className="link">
                         <li className="sidebarListitem">
                              <PersonIcon className='sidebarIcons'/>
                              Users
                         </li>
                    </Link>

                    <Link to={"/products"} className="link">
                         <li className="sidebarListitem">
                              <Inventory2OutlinedIcon className='sidebarIcons'/>
                              Products
                         </li>
                    </Link>
                    <li className="sidebarListitem">
                         <PaidOutlinedIcon className='sidebarIcons'/>
                         Transactions
                    </li>
                    <li className="sidebarListitem">
                         <AssessmentOutlinedIcon className='sidebarIcons'/>
                         Reports
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notification</h3>
                <ul className="sidebarlist">
                    <li className="sidebarListitem">
                         <EmailOutlinedIcon className='sidebarIcons'/>
                         Mail
                    </li>

                    <li className="sidebarListitem">
                         <InsertCommentOutlinedIcon className='sidebarIcons'/>
                         Feedback
                    </li>
                    <li className="sidebarListitem">
                         <ChatBubbleOutlineOutlinedIcon className='sidebarIcons'/>
                         Messages
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarlist">
                    <li className="sidebarListitem">
                         <WorkOutlineOutlinedIcon className='sidebarIcons'/>
                         Manage
                    </li>

                    <li className="sidebarListitem">
                         <TimelineIcon className='sidebarIcons'/>
                         Analytics
                    </li>
                    <li className="sidebarListitem">
                         <ReportGmailerrorredOutlinedIcon className='sidebarIcons'/>
                         Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar