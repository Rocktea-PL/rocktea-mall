import "chart.js/auto";
import { Bar } from "react-chartjs-2";

const Chart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June","July","Aug","Sept", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Withdrawn",
        data: [3000, 2000, 2000, 1000, 5000, 3000,3000, 2000, 2000, 1000, 5000, 3000], // Example data for withdrawn
        backgroundColor: "#ffa500",
        borderRadius: 6,
        barPercentage: 0.5, // Adjust this to control the width of the bars
      },
      {
        label: "Earned",
        data: [1000, 3000, 2000, 2000, 5000, 4000,1000, 3000, 2000, 2000, 5000, 4000], // Example data for earned
        backgroundColor:"#3989C6" ,

        borderRadius: 6,
        barPercentage: 0.5, // Adjust this to control the width of the bars
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Disable aspect ratio to make the chart fit the container
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
    <section className="bg-white mt-10 w-auto lg:w-full overflow-x-auto  h-auto px-5 py-5  rounded-xl lg:ml-3">
      <div className="flex justify-between px-5">
        <div>
          <h2 className="text-md font-bold mt-4 -ml-5 leading-tight">Earning Overview</h2>
         
          
        </div>
        <div>
          
          <div className="flex items-center  overflow-scroll justify-center gap-x-10 mt-5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange rounded-full"></div>
              <span>Withdrawn</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#3989C6] rounded-full"></div>
              <span>Earned</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-[500px] md:w-full overflow-x-auto h-[350px] mt-5">
        <Bar data={data} options={options} />
      </div>
    </section>
  );
};

export default Chart;
