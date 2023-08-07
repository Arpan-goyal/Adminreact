import "./user.css";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>

          <Link to={"/newUser"}>
            <button className="userAddButton">Create</button>
          </Link>
        </div>

        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img 
              src="https://e0.pxfuel.com/wallpapers/38/240/desktop-wallpaper-the-city-of-angels-zayn-malik-zayn-malik-black-and-white-thumbnail.jpg"
              alt=""
              className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">Anna Keller</span>
                <span className="userShowUserTech">Software Engineer</span>
              </div>
            </div>
            <div className="userShowBtm">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentityIcon className="userShowIcon"/>
                <span className="userShowInfoTitle">annakeller99</span>
              </div>

              <div className="userShowInfo">
                <CalendarTodayIcon className="userShowIcon"/>
                <span className="userShowInfoTitle">10.12.1999</span>
              </div>

              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroidIcon className="userShowIcon"/>
                <span className="userShowInfoTitle">+1 123 456 78</span>
              </div>

              <div className="userShowInfo">
                <MailOutlineIcon className="userShowIcon"/>
                <span className="userShowInfoTitle">annakel99@gmai.com</span>
              </div>

              <div className="userShowInfo">
                <LocationSearchingIcon className="userShowIcon"/>
                <span className="userShowInfoTitle">New York | USA</span>
              </div>
            </div>
          </div>

          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateFrom">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Username</label>
                    <input type="text" placeholder="annakeller99" className="userUpdateInput"/>
                  </div>
                  <div className="userUpdateItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="Anna keller" className="userUpdateInput"/>
                  </div>
                  <div className="userUpdateItem">
                    <label>Email add</label>
                    <input type="text" placeholder="annakel99@gmail.com" className="userUpdateInput"/>
                  </div>
                  <div className="userUpdateItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+1 123 456 78" className="userUpdateInput"/>
                  </div>
                  <div className="userUpdateItem">
                    <label>Address</label>
                    <input type="text" placeholder="New York | USA" className="userUpdateInput"/>
                  </div>
                </div>

                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <img className="userUpdateImg"
                     src="https://e0.pxfuel.com/wallpapers/38/240/desktop-wallpaper-the-city-of-angels-zayn-malik-zayn-malik-black-and-white-thumbnail.jpg" 
                     alt=""
                    />
                    <label htmlFor="file">
                      <PublishIcon className="userUpdateIcon"/>
                    </label>
                    <input type="file" id="file" style={ {display: "none"} }/>
                  </div>
                  <button className="userUpdateButton">Update</button>
                </div>
            </form>
          </div>
        </div>

    </div>
  )
}

export default User;