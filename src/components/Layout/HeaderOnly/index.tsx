import { ReactNode } from 'react';
import Header from '@/components/Layout/DefaultLayout/Header';


function HeaderOnly({ children }: { children: ReactNode }) {
    return (
        <div>
            <Header />
            <div>
                {children}
            </div>
        </div>
    );
}

export default HeaderOnly;