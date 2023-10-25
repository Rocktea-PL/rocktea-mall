import "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const data = {
    labels: ["Jan", "Feb", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Withdrawn",
        data: [3000, 2000, 2000, 1000, 5000, 3000], // Example data for withdrawn
        backgroundColor: "black",
        borderRadius: 6,
        
      },
      {
        label: "Earned",
        data: [1000, 3000, 2000, 2000, 5000, 4000], // Example data for earned
        backgroundColor: "#ffa500",

        borderRadius: 6,
        
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, 
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,

        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <section className="bg-white mt-5  lg:w-[65%] h-full px-5 py-5 shadow-lg rounded-xl lg:ml-3">
      <div className="flex justify-between px-5">
        <div>
          <h2 className="text-md font-bold mb-4">General Sales Activity</h2>
          <p className="text-gray-500">Sales generated</p>
          <div className="flex items-center gap-x-3 mt-1">
            <h3 className="font-bold  text-[1.5rem]">N500,000 </h3>
            <p className="text-[0.7rem] bg-[#00ae0080] shadow-percentShadow border border-solid rounded-[20px] p-1 px-2 text-white">
              34%
            </p>
          </div>
        </div>
        <div>
          <div className="bg-gray-300 rounded-lg w-auto h-[50px] flex items-center gap-3 px-5">
            <span className="border-r-[1.5px] border-r-gray-400 px-2">
              Weekly
            </span>
            <span className="border-r-[1.5px] border-r-gray-400 px-2">
              Monthly
            </span>
            <span>Yearly</span>
          </div>
          <div className="flex items-center justify-center gap-x-10 mt-5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-black rounded-full"></div>
              <span>Withdrawn</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange rounded-full"></div>
              <span>Earned</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full h-[350px] mt-10">
        <Bar data={data} options={options} />
      </div>
    </section>
  );
};

export default BarChart;
