import { AttachMoney, Ballot, BarChart, ChatBubble, DynamicFeed, LineStyle, Mail, Person, Report, Timeline, TrendingUp, Work } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./Sidebar.css"
const Sidebar = () => {
  return (

    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="sidebarTitle">
            Dashboard
          </div>
          <ul className="sidebarList">
          <Link to="/" className="link">
            <li className="sidebarListItem ">
              <LineStyle className="sidebarIcon"/>
              Home
            </li>
          </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon"/>
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/>
              Sales
            </li>
          </ul>
        </div>
      </div>

      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="sidebarTitle">
            Quick Menu
          </div>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem ">
                <Person className="sidebarIcon"/>
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Ballot className="sidebarIcon"/>
                Products
            </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon"/>
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon"/>
              Reports
            </li>
          </ul>
        </div>
      </div>

      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="sidebarTitle">
            Notifications
          </div>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Mail className="sidebarIcon"/>
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon"/>
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubble className="sidebarIcon"/>
              Messages
            </li>
          </ul>
        </div>
      </div>

      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="sidebarTitle">
            Staff
          </div>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Work className="sidebarIcon"/>
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon"/>
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon"/>
              Reports
            </li>
          </ul>
        </div>
      </div>


    </div>
  )
};

export default Sidebar;
