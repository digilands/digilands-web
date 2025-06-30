import Sidebar from '@/components/ui/navbar/Sidebar';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {/* <div className="w-full flex-none md:w-[66px] "> */}
        <Sidebar />
      {/* </div> */}
      <div className='flex flex-col w-full'>

      <div className='w-100% bg-sidebar h-[68px]'></div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    </div>
  );
}