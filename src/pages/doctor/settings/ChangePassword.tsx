
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function ChangePassword() {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',

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
                    <h2 className="text-2xl font-bold">Change Password</h2>
                    <Link to="/doctor/settings/profile-page">  <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full">
                        <ArrowLeft className="h-4 w-4" />
                    </Button></Link>

                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                        <div className="space-y-2">
                            <Label htmlFor="prevPassword" className="block text-sm font-medium text-gray-700">
                              Current Password <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="prevPassword"
                                name="prevPassword"
                                value={formData.currentPassword}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
                      
                
                    <div className="space-y-2">
                        <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            New Password <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="password"
                            name="pasword"
                            type="password"
                            value={formData.newPassword}
                            onChange={handleInputChange}
                            required
                            className="w-full"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confrim Password <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                            className="w-full"
                        />
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

export default ChangePassword