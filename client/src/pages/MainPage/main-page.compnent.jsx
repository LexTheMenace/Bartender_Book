import React from 'react';
import Grid from '../../components/Grid/grid.component';
import Navbar from '../../components/Navbar/Navbar';
import { Store } from '../../contexts/drink/Store';
import ScrollTop from '../../components/ScrollToTop/ScrollTop'
const MainPage = () => {
    
    return (
        <div className='page'>
            <Store>
                <Navbar />
                <ScrollTop />
                <Grid singleView={/*  open ? true : */ false} />
            </Store>
        </div>
    )
};

export default MainPage;