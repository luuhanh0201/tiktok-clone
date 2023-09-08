import { ReactNode } from 'react';
import Header from "./Header";
import SideBar from "./SideBar";


function DefaultLayout({ children }: { children: ReactNode }) {
    return (
        <div className='w-full flex flex-col items-center'>
            <Header />
            <div style={{ width: "1240px" }} className='flex'>
                <SideBar />
                <div className='flex-1'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;