import axios from "axios";
import Header from "../components/shared_components/header";
import MainLayout from "../components/shared_components/main_layout";
import { useEffect, useState } from 'react';
import {Bar, Doughnut} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const AnalyticsWordRememberMiss = () => {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const [chartRememberData, setRememberChartData] = useState();
  const [chartMissData, setMissChartData] = useState();
  const [chartRateData, setRateChartData] = useState();

  const getDataPointsRemember = async (month, year) => {
    try {
      let res = await axios.get(`https://demo0995292.mockable.io/analytics/words-test/remember/date/${month}-${year}?top=15`)

      setRememberChartData({
        labels: Object.keys(res.data.words),
        datasets: [
          {
            label: `Số nhớ tốt trong tháng ${month} - ${year}`,
            backgroundColor: 'rgba(185, 77, 232, 0.8)',
            borderColor: 'rgba(0,0,6,1)',
            borderWidth: 2,
            data: Object.values(res.data.words)
          }
        ]
      })
    } catch (e) {
      setRememberChartData(null)
      console.log("e", e)
    }
  }

  const getDataPointsMiss = async (month, year) => {
    try {
      let res = await axios.get(`https://demo0995292.mockable.io/analytics/words-test/miss/date/${month}-${year}?top=15`)

      setMissChartData({
        labels: Object.keys(res.data.words),
        datasets: [
          {
            label: `Số quên nhiều trong tháng ${month} - ${year}`,
            backgroundColor: 'rgba(214, 36, 104, 0.72)',
            borderColor: 'rgba(0,0,6,1)',
            borderWidth: 2,
            data: Object.values(res.data.words)
          }
        ]
      })
    } catch (e) {
      setMissChartData(null)
      console.log("e", e)
    }
  }

  const getDataPointsRate = async (month, year) => {
    try {
      let res = await axios.get(`https://demo0995292.mockable.io/analytics/words-test/rate/date/${month}-${year}?top=15`)

      setRateChartData({
        labels: Object.keys(res.data.data),
        datasets: [
          {
            label: `Tỉ lệ từ nhớ/quên trong tháng ${month} - ${year}`,
            backgroundColor: ['rgba(214, 36, 104, 0.72)', 'rgba(185, 77, 232, 0.8)'],
            borderColor: ['rgba(0,0,6,1)', 'rgba(0,0,6,1)'],
            borderWidth: 1,
            data: Object.values(res.data.data)
          }
        ]
      })
    } catch (e) {
      setRateChartData(null)
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
    getDataPointsRemember(month, year);
    getDataPointsMiss(month, year);
    getDataPointsRate(month, year);
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
      <div className="flex justify-center mt-12 ">
      {

        chartRateData ?
          <div className="w-4/5">
            <Doughnut data={chartRateData} width="300" height="300" options={{maintainAspectRatio: false}} />
          </div>
          :
          <h3 className="text-red-700 text-3xl mt-40">Chưa có dữ liệu</h3>
      }
      </div>
      <div className="flex justify-center mt-24">
      {

        chartRememberData ?
          <div className="w-4/5">
            <Bar data={chartRememberData} />
          </div>
          :
          <h3 className="text-red-700 text-3xl mt-40">Chưa có dữ liệu</h3>
      }
      </div>

      <div className="flex justify-center mt-24 mb-40">
      {

        chartMissData ?
          <div className="w-4/5">
            <Bar data={chartMissData} />
          </div>
          :
          <h3 className="text-red-700 text-3xl mt-40">Chưa có dữ liệu</h3>
      }
      </div>
    </MainLayout>
  );
}

export default AnalyticsWordRememberMiss;
