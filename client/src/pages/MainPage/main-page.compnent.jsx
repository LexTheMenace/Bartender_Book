import React, { useState } from 'react';
import Grid from '../../components/Grid/grid.component';
import Navbar from '../../components/Navbar/Navbar';
import { Store } from '../../contexts/drink/Store';
import DrinkModal from '../../components/DrinkModal/DrinkModal';

const MainPage = () => {
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ currentDrink, setCurrentDrink ] = useState(null);

    return (
        <div className='page'>
            <Store>
                <Navbar />
                <Grid scroll={modalOpen} setCurrentDrink={setCurrentDrink} setModalOpen={setModalOpen} />
                {modalOpen && (<DrinkModal open={modalOpen} setModalOpen={setModalOpen} drink={currentDrink} />)}
            </Store>
        </div>
    );
};

export default MainPage;