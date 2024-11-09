"use client"

import { useState } from 'react'
import { Search,  Eye, Edit, Trash, Printer } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Prescription {
  id: number
  patient: {
    name: string
    email: string
    avatar?: string
    initials: string
  }
  doctor: {
    name: string
    email: string
    avatar?: string
  }
  addedAt: string
  status: boolean
}

export default function PrescriptionsPage() {
  const [prescriptions] = useState<Prescription[]>([
    {
      id: 1,
      patient: {
        name: "طيب الصفدي",
        email: "salah@gmail.com",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "TS"
      },
      doctor: {
        name: "Doctor mk Doctor",
        email: "vatsal@gmail.com",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      addedAt: "N/A",
      status: true
    },
    {
      id: 2,
      patient: {
        name: "Jayme Kirby",
        email: "nizulylodo@gmail.com",
        initials: "JK"
      },
      doctor: {
        name: "Doctor mk Doctor",
        email: "vatsal@gmail.com",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      addedAt: "5th Nov, 2024",
      status: true
    },
    // Add more prescription data as needed
  ])

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
    

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navbar */}
        {/* <header className="bg-white border-b px-4 py-2">
          <div className="flex items-center justify-between">
            <button className="md:hidden">
          
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>DR</AvatarFallback>
                </Avatar>
                <span className="hidden md:inline">Doctor mk Doctor</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>
        </header> */}

        {/* Page content */}
        <main className="flex-1 overflow-auto p-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <Input 
                type="search" 
                placeholder="Search" 
                className="max-w-md"
                prefix={<Search className="w-4 h-4 text-gray-400" />}
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                New Prescription
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Patients
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Doctors
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Added At
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {prescriptions.map((prescription) => (
                    <tr key={prescription.id}>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            {prescription.patient.avatar ? (
                              <Avatar>
                                <AvatarImage src={prescription.patient.avatar} />
                                <AvatarFallback>{prescription.patient.initials}</AvatarFallback>
                              </Avatar>
                            ) : (
                              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                {prescription.patient.initials}
                              </div>
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="font-medium">{prescription.patient.name}</div>
                            <div className="text-sm text-gray-500">{prescription.patient.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={prescription.doctor.avatar} />
                            <AvatarFallback>DR</AvatarFallback>
                          </Avatar>
                          <div className="ml-4">
                            <div className="font-medium">{prescription.doctor.name}</div>
                            <div className="text-sm text-gray-500">{prescription.doctor.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-500">{prescription.addedAt}</span>
                      </td>
                      <td className="px-6 py-4">
                        {/* <Switch checked={prescription.status} /> */}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="w-4 h-4 text-blue-600" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Edit className="w-4 h-4 text-blue-600" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Printer className="w-4 h-4 text-blue-600" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash className="w-4 h-4 text-red-600" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}