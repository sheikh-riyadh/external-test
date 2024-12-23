import Analytics from "../components/pages/Overview/Analytics";

const Overview = () => {
  const analytice = [
    { name: "Jan", uv: 100, pv: 85 },
    { name: "Feb", uv: 90, pv: 50 },
    { name: "Mar", uv: 80, pv: 70 },
    { name: "Apr", uv: 70, pv: 30 },
    { name: "May", uv: 60, pv: 90 },
    { name: "Jun", uv: 50, pv: 40 },
    { name: "Jul", uv: 40, pv: 50 },
    { name: "Aug", uv: 90, pv: 60 },
    { name: "Sep", uv: 70, pv: 70 },
    { name: "Oct", uv: 30, pv: 80 },
    { name: "Nov", uv: 50, pv: 90 },
    { name: "Dec", uv: 85, pv: 100 },
  ];

  return (
    <div className="flex flex-col gap-10">
      <span className="font-bold text-xl text-primary">Overview</span>
      <Analytics analyticeData={analytice} />
      <div>
        
      </div>
    </div>
  );
};

export default Overview;
