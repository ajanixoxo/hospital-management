import { Clock, DollarSign, ThumbsUp, ChevronDown, Edit, Key } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {Link} from 'react-router-dom'


function ProfilePage() {
    return (
        <div className="bg-gray-100 ">
            <div className="max-w-4xl mx-auto p-4">
                {/* Header Image and Profile Picture */}
                <div className="relative mb-16">
                    <div className="h-48 bg-gray-300 rounded-t-lg overflow-hidden">
                        <img
                            src="/placeholder.svg?height=192&width=768"
                            alt="Header"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute bottom-0 left-4 transform translate-y-1/2">
                        <img
                            src="/placeholder.svg"
                            alt="Doctor's profile"
                            className="w-32 h-32 rounded-full border-4 border-white"
                        />
                    </div>
                </div>

                {/* Doctor Info */}
                <div className="mb-6 flex justify-between items-start">
                    <div className="flex justify-between items-center flex-col flex-1 mr-2 lg:flex-row">
                       <div className="grid gap-2">
                       <h1 className="text-2xl font-bold">Rayna Westervelt M.Psi   <span className="text-gray-600 text-sm font-normal w-max">•ENT Doctor</span> </h1>
                       <p className="text-gray-600">Siloam Hospitals, West Bekasi, Bekasi</p>
                       </div>
                        <div className="flex items-center mt-2 space-x-4">
                            <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> Full-time</span>
                            <span className="flex items-center"><DollarSign className="w-4 h-4 mr-1" /> 250k - 350k</span>
                            <span className="flex items-center"><ThumbsUp className="w-4 h-4 mr-1" /> 94%</span>
                        </div>

                    </div>
                    <div className="space-y-2 flex flex-col">
                        <Link to="/doctor/settings/edit-profile">
                        <Button variant="outline" className="w-full ">
                            <Edit className="w-4 h-4 mr-2" /> Edit Profile
                        </Button></Link>
                        <Link to="/doctor/settings/change-password">
                        <Button variant="outline" className="w-full ">
                            <Key className="w-4 h-4 mr-2" /> Change Password
                        </Button></Link>
                    </div>
                </div>

                {/* Doctor Profile */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">Doctor Profile</h2>
                    <p className="text-gray-700">
                        With a seasoned career spanning four years, our ENT specialist brings a wealth of experience and
                        expertise to the field. Having dedicated their professional journey to ear, nose, and throat health, they
                        have honed their skills in diagnosing and treating a wide range of ENT conditions. Their commitment to
                        staying abreast of the latest advancements in the field ensures that patients receive cutting-edge car...
                    </p>
                    <button className="text-blue-600 mt-2 flex items-center">
                        See More <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                </div>

                {/* Practice Experience */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">Practice Experience</h2>
                    <div className="flex items-start">
                        <img src="/placeholder.svg?height=64&width=64" alt="Hospital logo" className="w-16 h-16 mr-4" />
                        <div>
                            <h3 className="font-semibold">Siloam Hospitals Bekasi Timur</h3>
                            <p className="text-gray-600">ENT Doctor - Neurologi • Online Consultation</p>
                            <p className="text-gray-600">Dec 2022 - Present • 2 yrs 1 mos</p>
                        </div>
                    </div>
                </div>

                {/* Medical Actions and Appointment */}
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="bg-white rounded-lg shadow p-6 flex-1">
                        <h2 className="text-xl font-semibold mb-4">Medical Actions</h2>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>BERA (Brainstem Evoked Response Audiometry)</li>
                            <li>ENT Surgery</li>
                            <li>ENT Corpus Alienum Extraction</li>
                            <li>Ear Endoscopy</li>
                            <li>Ear Irrigation</li>
                            <li>Tiltoplasty</li>
                            <li>Hearing Test</li>
                        </ul>
                    </div>
                    <div className="md:w-1/3">
                        <Button className="w-full mb-4">Make Appointments</Button>
                        <div className="bg-blue-600 text-white rounded-lg p-4">
                            <h3 className="font-semibold mb-2">Download Now</h3>
                            <p>Download now and start your search</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage