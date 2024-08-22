import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function HomeLayout() {
  return (
      <div className="">

 
        <main className="">
          <Outlet />
        </main>

        <Footer />
      </div>
  )
}