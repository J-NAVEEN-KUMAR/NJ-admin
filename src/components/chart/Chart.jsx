import "./chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';


export const Chart = ({title, data, dataKey, grid}) => {

  return (
  <div className="chart">
    <h3 className="chartTitle">
      {title}
    </h3>
    <ResponsiveContainer width="100%" aspect={4/1}>
      <LineChart data={data}>
        <XAxis dataKey="name"></XAxis>
        <Line type="monotone" dataKey={dataKey} stroke="#0a9396" />
        <Tooltip/>
        {grid && <CartesianGrid stroke="lightBlue" strokeDasharray="3 3"/>}
      </LineChart>
    </ResponsiveContainer>
  </div>
  );
};

export default Chart;