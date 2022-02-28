import { Chart } from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";
import "./home.css"
import {userData} from "../../dummyData"
import WidgetSm from "../../components/widgetsm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";


const Home = () => {
  return (
  
  <div className="Home">
    <FeaturedInfo />
    <div className="homeWidgets">
      <WidgetSm />
      <WidgetLg />
    </div>
    <Chart data={userData} title="User Analytics" dataKey="Active Users" grid/>
  </div>
  

  );
};

export default Home;
