import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css"

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newuser">
          <button className="userAddButton">
            Create
          </button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg" alt="" className="userShowImg"/>
            <div className="userShowTopTitle">
              <span className="userShowUsername">Ayan Ryand</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon"/>
              <span className="userShowInfoTitle">10 jul 1995</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon"/>
              <span className="userShowInfoTitle">+1 23 456 7885</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon"/>
              <span className="userShowInfoTitle">ayanryand77@email.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon"/>
              <span className="userShowInfoTitle">LA | USA</span>
            </div>

          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" placeholder="ayanryand77" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text" placeholder="Ayan Ryan" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" placeholder="ayanryand77@email.com" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text" placeholder="+1 2345 67885" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" placeholder="LA | USA" className="userUpdateInput" />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src="https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg" alt="" className="userUpdateImg" />
                <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                <input type="file" id="file" style={{display:"none"}}/>
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  
  
    );
};

export default User;
