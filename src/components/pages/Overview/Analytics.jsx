import React from "react";
import { FaCircle } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import { useGetTheme } from "../../../hooks/useGetTheme";

const Analytics = ({ analyticeData }) => {
  const { theme } = useGetTheme();
  let color_1, color_2;
  if (theme === "dark") {
    color_1 = "#214496";
    color_2 = "#008a47";
  }else{
    color_2 = "#008a47";
    color_1 = "#214496";
  }

  return (
    <div className="w-full bg-card text-card md:h-[550px]  col-span-9 gap-5 border border-border-primary md:pb-28 lg:pb-36 rounded-sm">
      <div className="flex gap-5 p-5 justify-between flex-wrap">
        <div className="flex flex-col gap-2 text-primary">
          <span className="font-bold text-2xl">Welcome back</span>
          <span className="">Updated overview of your external test</span>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <FaCircle
              className={`text-md rounded-full`}
              style={{
                color: color_2,
              }}
            />
            <span className="text-primary">Popular</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCircle
              className={`text-md rounded-full`}
              style={{
                color: color_1,
              }}
            />
            <h1 className="text-primary">Ibn sina</h1>
          </div>
        </div>
      </div>

      <React.Fragment>
        <ResponsiveContainer>
          <BarChart width={750} height={600} data={analyticeData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} />
            <YAxis axisLine={false} />
            <Tooltip
              contentStyle={{
                background: "rgba(var(--background))",
                borderRadius: "10px",
                border: "rgba(var(--border))",
                color:"rgba(var(--copy-secondary))"
              }}
            />
            <Bar name="Popular total test" dataKey="pv" fill={`${color_2}`} barSize={13} />
            <Bar name="Ibn sina total test" dataKey="uv" fill={`${color_1}`} barSize={13} />
          </BarChart>
        </ResponsiveContainer>
      </React.Fragment>
    </div>
  );
};

Analytics.propTypes = {
  analyticeData: PropTypes.array,
};

export default Analytics;
