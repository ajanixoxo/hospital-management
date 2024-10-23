import  { useState } from 'react'
import { PlusCircle } from 'lucide-react'

type DaySchedule = {
  day: string
  from: string
  to: string
}

export default function SchedulePage() {
  const [perPatientTime, setPerPatientTime] = useState('00:45:00')
  const [schedule, setSchedule] = useState<DaySchedule[]>([
    { day: 'Monday', from: '08:00:00', to: '08:05:00' },
    { day: 'Tuesday', from: '15:00:00', to: '16:00:00' },
    { day: 'Wednesday', from: '09:00:00', to: '16:00:00' },
    { day: 'Thursday', from: '09:00:00', to: '16:00:00' },
    { day: 'Friday', from: '09:00:00', to: '16:00:00' },
    { day: 'Saturday', from: '09:00:00', to: '16:00:00' },
    { day: 'Sunday', from: '09:00:00', to: '16:00:00' },
  ])

  const handleTimeChange = (index: number, field: 'from' | 'to', value: string) => {
    const newSchedule = [...schedule]
    newSchedule[index][field] = value
    setSchedule(newSchedule)
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Edit Schedule</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <label htmlFor="perPatientTime" className="block text-sm font-medium text-gray-700 mb-1">
            Per Patient Time: <span className="text-red-500">*</span>
          </label>
          <input
            type="time"
            id="perPatientTime"
            value={perPatientTime}
            onChange={(e) => setPerPatientTime(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md text-[#95a2b7] font-semibold"
            step="1"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left  text-[#6C779E] font-normal">AVAILABLE ON</th>
                <th className="px-4 py-2 text-left  text-[#6C779E] font-normal">
                  AVAILABLE FROM <span className="text-red-500">*</span>
                </th>
                <th className="px-4 py-2 text-left  text-[#6C779E] font-normal">
                  AVAILABLE TO <span className="text-red-500">*</span>
                </th>
                <th className="px-4 py-2 text-left  text-[#6C779E] font-normal">ACTION</th>
              </tr>
            </thead>
            <tbody className="">
              {schedule.map((day, index) => (
                <tr key={day.day} className="border-b w-full   ">
                  <td className="  ">
                    <div className="m-2 bg-[#E9ECEF]  px-4 py-2 border border-gray-300 rounded-md text-[#6C779E] font-semibold ">{day.day}</div></td>
                  <td className="px-4 py-2">
                    <input
                      type="time"
                      value={day.from}
                      onChange={(e) => handleTimeChange(index, 'from', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md  text-[#6C779E] font-semibold"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="time"
                      value={day.to}
                      onChange={(e) => handleTimeChange(index, 'to', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md  text-[#6C779E] font-semibold"
                    />
                  </td>
                  <td className="px-4 py-2">
                    {index > 0 && (
                      <button className="text-blue-600 hover:text-blue-800">
                        <PlusCircle className="w-6 h-6" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-right">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}