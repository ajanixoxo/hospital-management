import { Outlet } from "react-router-dom";

export default function DoctorLayout() {
  return (
    <main className="h-screen w-screen flex">
      <aside className="w-56 h-full"></aside>
      <aside className="flex-1 flex flex-col h-full">
        <header className="h-16 flex items-center px-4">
          <h1 className="text-xl font-bold"></h1>
        </header>
        <section className="flex-1 p-6 bg-_gray-200">
          <Outlet />
        </section>
      </aside>
    </main>
  );
}
