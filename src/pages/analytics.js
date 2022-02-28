import axios from "axios";
import Header from "../components/shared_components/header";
import MainLayout from "../components/shared_components/main_layout";
import { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const Analytics = () => {
  const [charData, setCharData] = useState();
  const getDataPoints = async () => {
    try {
      let res = await axios.get('https://demo0995292.mockable.io/analytics/words-learnt/date/1-2022')

      setCharData({
        labels: Object.keys(res.data.data_points),
        datasets: [
          {
            label: 'Số từ học được trong tháng',
            backgroundColor: 'rgba(75,222,192,1)',
            borderColor: 'rgba(0,0,6,1)',
            borderWidth: 2,
            data: Object.values(res.data.data_points)
          }
        ]
      })
    } catch (e) {
      console.log("e", e)
    }
  }

  useEffect(() => {
    getDataPoints();
  }, [])

  return (
    <MainLayout>
      <Header pageName="Thống kê" />
      <div className="flex justify-center mt-12">
      {

        charData ?
          <div className="w-4/5">
            <Bar data={charData} />
          </div>
          :
          <h3>Loading</h3>
      }
        </div>
    </MainLayout>
  );
}

export default Analytics;
