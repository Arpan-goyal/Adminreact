import "./home.css";
import Featuredinfo from "../component/featured/Featuredinfo";
import Chart from "../component/chart/Chart";
import { userData } from "../dummyData.js";
import WidLg from "../component/widlg/WidLg";
import WidSm from "../component/widSm/WidSm";

const Home = () => {
  return (
    <div className="home">
        <Featuredinfo/>
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
          <WidSm/>
          <WidLg/>
        </div>
    </div>
  )
}

export default Home;