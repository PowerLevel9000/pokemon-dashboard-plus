import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DetailStats = ({ stat, pokeName }: { stat: any, pokeName: string }) => {
  const labels = ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed']
  const data = {
    labels,
    datasets: [
      {
        label: 'Stats',
        data: stat.map((s: any) => s.base_stat),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `${pokeName.toUpperCase()} STATS`,
      },
    },
  };

  return (
    <Bar options={options} data={data} />
  )
}

export default DetailStats