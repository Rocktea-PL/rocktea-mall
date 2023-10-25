
import "chart.js/auto";
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels'; // Import the datalabels plugin

const DoughnutChart = () => {
 
      const data = {
          labels: ['Paid', 'Unpaid'],
          datasets: [
            {
              data: ['25000', '25000'],
              backgroundColor: ['orange', '#CAC4D0'],
              borderRadius: 6,
            },
          ],
        }
       const options= {
          plugins: {
            datalabels: {
              color: 'black',
              anchor: 'center',
              align: 'center',
              formatter: (value, context) => {
                if (context.dataIndex === 0) {
                  return 'Total Payout 25000';
                }
                return ''; // Empty label for the gray segment
              },
            },
          },
        }
      
    
 
/**formatter: (value, context) => {
                if (context.dataIndex === 0) {
                  return 'Total Payout';
                }
                return ''; // Empty label for the gray segment
              }, */
  return (
    <div className='w-[300px] h-[300px] relative'>
      <Doughnut data={data}  options={options}/>
      <p className="absolute top-[45%] left-[97px] text-blue font-semibold text-[17px] z-0"> N240,000 <br />
      Total Payout</p>
    </div>
  );
};

export default DoughnutChart;
