import axios from "axios";
import Header from "../components/shared_components/header";
import MainLayout from "../components/shared_components/main_layout";
import { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const AnalyticsWordLearnt = () => {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const [charData, setCharData] = useState();

  const getDataPoints = async (month, year) => {
    try {
      let res = await axios.get(`https://demo0995292.mockable.io/analytics/words-learnt/date/${month}-${year}`)

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
      setCharData(null)
      console.log("e", e)
    }
  }

  const handleChangeMonth = (e) => {
    setMonth(e.target.value)
  }

  const handleChangeYear = (e) => {
    setYear(e.target.value)
  }

  useEffect(() => {
    getDataPoints(month, year);
  }, [year, month])

  return (
    <MainLayout>
      <Header pageName="Thống kê" />
      <div className="ml-36 mt-12">
        <form >
          Chọn tháng/năm:
          <div>
            <label className=" text-gray-700 text-sm font-bold mb-2 mr-10">
              Tháng
            </label>
            <input className=" border rounded  py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" type="text" value={month} onChange={handleChangeMonth}  />
          </div>

          <div>
            <label className=" text-gray-700 text-sm font-bold mb-2 mr-12">
              Năm
            </label>
            <input className=" border rounded  py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" type="text" value={year} onChange={handleChangeYear}  />
          </div>
        </form>

      </div>
      <div className="flex justify-center mt-12">
      {

        charData ?
          <div className="w-4/5">
            <Bar data={charData} />
          </div>
          :
          <h3 className="text-red-700 text-3xl mt-40">Chưa có dữ liệu</h3>
      }
      </div>
    </MainLayout>
  );
}

export default AnalyticsWordLearnt;
