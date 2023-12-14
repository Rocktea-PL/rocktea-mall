import "chart.js/auto";
//import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  /* const data = {
    labels: ["Paid", "Unpaid"],
    datasets: [
      {
        data: ["25000", "25000"],
        backgroundColor: ["orange", "#CAC4D0"],
        borderRadius: 6,
      },
    ],
  };
  const options = {
    plugins: {
      datalabels: {
        color: "black",
        anchor: "center",
        align: "center",
        formatter: (value, context) => {
          if (context.dataIndex === 0) {
            return "Total Payout 25000";
          }
          return ""; // Empty label for the gray segment
        },
      },
    },
  };*/

  /**formatter: (value, context) => {
                if (context.dataIndex === 0) {
                  return 'Total Payout';
                }
                return ''; // Empty label for the gray segment
              }, */
  return (
    <>
      <div
        className="flex items-center justify-center text-center mx-auto my-5"
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: `
      radial-gradient(closest-side, white 74%, transparent 75% 100%),
      conic-gradient(orange 50%, rgb(235, 235, 235) 0)
    `,
        }}
      >
        <progress
          value={50}
          min="0"
          max="100"
          style={{ visibility: "hidden", height: 0, width: 0 }}
        >
          {`50%`}
        </progress>

        <div>
          <p className="font-semibold capitalize">
            ₦240,000 <br />
            Total Payout
          </p>
        </div>
      </div>
    </>
  );
};

export default DoughnutChart;
/**<div className="w-[250px] h-[250px] relative">
      <Doughnut data={data} options={options} />
      <p className="absolute top-[45%] left-[80px] text-blue font-semibold text-[15px] z-0">
        {" "}
        N240,000 <br />
        Total Payout
      </p>
    </div> */
