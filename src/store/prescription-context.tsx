/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react'

interface Medicine {
  id: string
  name: string
  dosage: string
  duration: string
  time: string
  interval: string
  comment?: string
}

interface Prescription {
  id: string
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
  physicalInfo: {
    bloodPressure: string
    foodAllergies: string
    diabetic: string
    currentMedication: string
    pulseRate: string
    temperature: string
    problemDescription: string
  }
  medicines: Medicine[]
  test?: string
  advice?: string
  nextVisit?: string
}

interface PrescriptionContextType {
  prescriptions: Prescription[]
  addPrescription: (prescription: Prescription) => void
  deletePrescription: (id: string) => void
  updatePrescription: (id: string, prescription: Prescription) => void
}

const PrescriptionContext = createContext<PrescriptionContextType | undefined>(undefined)

export function PrescriptionProvider({ children }: { children: React.ReactNode }) {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([])

  const addPrescription = (prescription: Prescription) => {
    setPrescriptions([...prescriptions, prescription])
  }

  const deletePrescription = (id: string) => {
    setPrescriptions(prescriptions.filter(p => p.id !== id))
  }

  const updatePrescription = (id: string, prescription: Prescription) => {
    setPrescriptions(prescriptions.map(p => p.id === id ? prescription : p))
  }

  return (
    <body>
    <PrescriptionContext.Provider value={{ prescriptions, addPrescription, deletePrescription, updatePrescription }}>
      {children}
    </PrescriptionContext.Provider>
    </body>
  )
}

export function usePrescriptions() {
  const context = useContext(PrescriptionContext)
  if (context === undefined) {
    throw new Error('usePrescriptions must be used within a PrescriptionProvider')
  }
  return context
}