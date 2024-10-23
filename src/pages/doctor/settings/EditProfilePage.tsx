
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Pencil } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function EditProfilePage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      })
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
      }
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
      }
    
      return (
        <div className="w-full  max-w-md  bg-white shadow-md mx-auto mt-40 rounded-lg overflow-hidden">
        <div className="p-6 ">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Edit Profile</h2>
            <Link to="/doctor/settings/profile-page">  <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full">
              <ArrowLeft className="h-4 w-4" />
            </Button></Link>
          
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name: <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name: <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email: <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone: <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="block text-sm font-medium text-gray-700">Profile:</Label>
              <div className="relative w-20 h-20">
                <img
                  src="/placeholder.svg?height=80&width=80"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute bottom-0 right-0 rounded-full"
                >
                  <Pencil className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                Save
              </Button>
              <Button variant="secondary">Cancel</Button>
            </div>
          </form>
        </div>
      </div>
      )
}

export default EditProfilePage