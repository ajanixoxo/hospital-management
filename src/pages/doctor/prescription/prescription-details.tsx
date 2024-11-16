
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { usePrescriptions } from '../../../store/prescription-context'

export default function PrescriptionDetails() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const { prescriptions } = usePrescriptions()

  const prescription = prescriptions.find(p => p.id === id)

  if (!prescription) {
    return <div>Prescription not found</div>
  }

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Prescription Details</h1>
        <div className="space-x-2">
          <Button variant="default" className="bg-green-600 hover:bg-green-700">
            Print Prescription
          </Button>
          <Button variant="outline" onClick={() => navigate(-1)}>
            Back
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between mb-8">
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg?height=64&width=64" alt="Hospital Logo" className="w-16 h-16" />
            <div>
              <h2 className="text-xl font-bold">Doctor mk Doctor</h2>
              <p className="text-gray-600">Kidney</p>
              <p className="text-gray-600">N/A</p>
            </div>
          </div>
          <div className="text-right">
            <p>Patient Name: {prescription.patient.name || 'Jayme Kirby'}</p>
            <p>Date: {new Date().toLocaleDateString()}</p>
            <p>Age: N/A</p>
            <p className="mt-2">
              C/303, Atlanta Shopping Mall Sudama Chowk, Mota Varachha, Surat, Gujarat 394101
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Problem:</h3>
            <p>{prescription.physicalInfo.problemDescription || 'N/A'}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Test:</h3>
            <p>{prescription.test || 'N/A'}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Advice:</h3>
            <p>{prescription.advice || 'N/A'}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">High Blood Pressure: {prescription.physicalInfo.bloodPressure || '10'}</h3>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Rx:</h3>
            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th className="pb-2">MEDICINE NAME</th>
                  <th className="pb-2">DOSAGE</th>
                  <th className="pb-2">DURATION</th>
                  <th className="pb-2">DOSE INTERVAL</th>
                </tr>
              </thead>
              <tbody>
                {prescription.medicines.map((medicine, index) => (
                  <tr key={index}>
                    <td className="py-2">{medicine.name}</td>
                    <td>{medicine.dosage}</td>
                    <td>{medicine.duration}</td>
                    <td>{medicine.interval}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-right">
          <p className="font-semibold">Dr. Doctor mk Doctor</p>
          <p className="text-gray-600">Kidney</p>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>All Rights Reserved © 2024 InfyHMS</p>
          <p>v14.8.0</p>
        </div>
      </div>
    </div>
  )
}