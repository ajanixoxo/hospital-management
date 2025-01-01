"use client"

import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { usePrescriptions } from '../../../store/prescription-context'
import { toast } from 'sonner'

interface Medicine {
    id: string
    name: string
    dosage: string
    duration: string
    time: string
    interval: string
    comment?: string
}

export default function EditPrescription() {
    const { id } = useParams<{ id: string }>()
    const { prescriptions, updatePrescription } = usePrescriptions()
    const navigate = useNavigate()
    const [status, setStatus] = useState(true)
    const [medicines, setMedicines] = useState<Medicine[]>([])
    const [physicalInfo, setPhysicalInfo] = useState({
        bloodPressure: '',
        foodAllergies: '',
        diabetic: '',
        currentMedication: '',
        pulseRate: '',
        temperature: '',
        problemDescription: '',
    })

    useEffect(() => {
        const prescription = prescriptions.find(p => p.id === id)
        if (prescription) {
            setStatus(prescription.status)
            setMedicines(prescription.medicines)
            setPhysicalInfo(prescription.physicalInfo)
        } else {
            toast.error('Prescription not found')
            navigate('../')
        }
    }, [id, prescriptions, navigate])

    const handleAddMedicine = () => {
        const newMedicine: Medicine = {
            id: Date.now().toString(),
            name: '',
            dosage: '',
            duration: '',
            time: '',
            interval: '',
            comment: '',
        }
        setMedicines([...medicines, newMedicine])
    }

    const handleRemoveMedicine = (id: string) => {
        setMedicines(medicines.filter(m => m.id !== id))
    }

    const handleMedicineChange = (id: string, field: keyof Medicine, value: string) => {
        setMedicines(medicines.map(m => m.id === id ? { ...m, [field]: value } : m))
    }

    const handleStatus = () => {
        setStatus(!status)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const formData = new FormData(form)

        const updatedPrescription = {
            id: id!,
            patient: {
                name: formData.get('patient') as string,
                email: 'patient@example.com',
                initials: 'PT',
            },
            doctor: {
                name: 'Doctor mk Doctor',
                email: 'doctor@example.com',
                avatar: '/placeholder.svg?height=40&width=40',
            },
            addedAt: new Date().toISOString(),
            status,
            physicalInfo,
            medicines,
            test: formData.get('test') as string,
            advice: formData.get('advice') as string,
            nextVisit: formData.get('nextVisit') as string,
        }

        updatePrescription(id!, updatedPrescription)
        toast.success('Prescription updated successfully')
        navigate('../')
    }

    return (
        <div className="container w p-6 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Edit Prescription</h1>
                <Button variant="outline" className="border-blue-500 text-blue-500" onClick={() => navigate('../')}>Back</Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Physical Information Section */}
                <div className="bg-white p-6 rounded-lg shadow space-y-6">
                    <h2 className="text-lg font-semibold">Physical Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="patient">Patient <span className="text-red-500">*</span></Label>
                            <Select name="patient" required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Patient" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="patient1">Jayme Kirby</SelectItem>
                                    <SelectItem value="patient2">Steve Rogers</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="bloodPressure" onClick={handleStatus}>High Blood Pressure</Label>
                            <Input
                                id="bloodPressure"
                                value={physicalInfo.bloodPressure}
                                onChange={(e) => setPhysicalInfo({ ...physicalInfo, bloodPressure: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="foodAllergies">Food Allergies</Label>
                            <Input
                                id="foodAllergies"
                                value={physicalInfo.foodAllergies}
                                onChange={(e) => setPhysicalInfo({ ...physicalInfo, foodAllergies: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="diabetic">Diabetic</Label>
                            <Input
                                id="diabetic"
                                value={physicalInfo.diabetic}
                                onChange={(e) => setPhysicalInfo({ ...physicalInfo, diabetic: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="currentMedication">Current Medication</Label>
                            <Input
                                id="currentMedication"
                                value={physicalInfo.currentMedication}
                                onChange={(e) => setPhysicalInfo({ ...physicalInfo, currentMedication: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="pulseRate">Pulse Rate</Label>
                            <Input
                                id="pulseRate"
                                value={physicalInfo.pulseRate}
                                onChange={(e) => setPhysicalInfo({ ...physicalInfo, pulseRate: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="temperature">Temperature</Label>
                            <Input
                                id="temperature"
                                value={physicalInfo.temperature}
                                onChange={(e) => setPhysicalInfo({ ...physicalInfo, temperature: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="problemDescription">Problem Description</Label>
                        <Textarea
                            id="problemDescription"
                            value={physicalInfo.problemDescription}
                            onChange={(e) => setPhysicalInfo({ ...physicalInfo, problemDescription: e.target.value })}
                            rows={4}
                        />
                    </div>
                </div>

                {/* Medicines Section */}
                <div className="bg-white p-6 rounded-lg shadow space-y-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold">Medicines</h2>
                        <div className="space-x-2">
                            <Button type="button" variant="outline" className="bg-blue-500 text-white" onClick={handleAddMedicine}>
                                New Medicine
                            </Button>
                            <Button type="button" variant="secondary" className="bg-blue-500 text-white">
                                Suggest Medicines
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {medicines.map((medicine) => (
                            <div key={medicine.id} className="grid grid-cols-6 gap-4 items-start">
                                <div>
                                    <Label>Medicine Name</Label>
                                    <Select
                                        value={medicine.name}
                                        onValueChange={(value) => handleMedicineChange(medicine.id, 'name', value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Medicine" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="atenolol">Atenolol</SelectItem>
                                            <SelectItem value="unidox">Unidox</SelectItem>
                                            <SelectItem value="parastamol">Parastamol</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label>Dosage</Label>
                                    <Input
                                        value={medicine.dosage}
                                        onChange={(e) => handleMedicineChange(medicine.id, 'dosage', e.target.value)}
                                        placeholder="Dosage"
                                    />
                                </div>
                                <div>
                                    <Label>Duration</Label>
                                    <Select
                                        value={medicine.duration}
                                        onValueChange={(value) => handleMedicineChange(medicine.id, 'duration', value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Duration" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">Only one day</SelectItem>
                                            <SelectItem value="3">3 Days</SelectItem>
                                            <SelectItem value="7">7 Days</SelectItem>
                                            <SelectItem value="30">30 Days</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label>Time</Label>
                                    <Select
                                        value={medicine.time}
                                        onValueChange={(value) => handleMedicineChange(medicine.id, 'time', value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Time" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="before">Before Meal</SelectItem>
                                            <SelectItem value="after">After Meal</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label>Interval</Label>
                                    <Select
                                        value={medicine.interval}
                                        onValueChange={(value) => handleMedicineChange(medicine.id, 'interval', value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Interval" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="morning">Daily morning</SelectItem>
                                            <SelectItem value="evening">Daily evening</SelectItem>
                                            <SelectItem value="both">Morning and evening</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="pt-6">
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        className="text-red-600 hover:text-red-700"
                                        onClick={() => handleRemoveMedicine(medicine.id)}
                                    >
                                        Remove
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Information Section */}
                <div className="bg-white p-6 rounded-lg shadow space-y-6">
                    <h2 className="text-lg font-semibold">Additional Information</h2>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="test">Test</Label>
                            <Textarea id="test" name="test" rows={4} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="advice">Advice</Label>
                            <Textarea id="advice" name="advice" rows={4} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="nextVisit">Next Visit</Label>
                            <div className="flex items-center space-x-2">
                                <Input type="number" id="nextVisit" name="nextVisit" className="w-24" />
                                <Select defaultValue="days">
                                    <SelectTrigger className="w-32">
                                        <SelectValue placeholder="Select unit" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="days">Days</SelectItem>
                                        <SelectItem value="weeks">Weeks</SelectItem>
                                        <SelectItem value="months">Months</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end space-x-2">
                    <Button className="bg-blue-500 text-white" type="submit">Update</Button>
                    <Button type="button" variant="outline" onClick={() => navigate(-1)}>
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    )
}