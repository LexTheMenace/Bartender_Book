import React, { useEffect, useState } from 'react'
import Grid from '../../components/Grid/grid.component';
import Navbar from '../../components/Navbar/Navbar';
import ScrollTop from '../../components/ScrollToTop/ScrollTop';
import DrinkModal from '../../components/DrinkModal/DrinkModal';
import { Store } from '../../contexts/drink/Store';

const getLocalStorage = () => {
    const drinks = localStorage.getItem('saved-drinks') ? JSON.parse(localStorage.getItem('saved-drinks')) : []
    return drinks;
}

export const SavedPage = () => {
    const [savedDrinks, setSavedDrinks] = useState(getLocalStorage());
    const [modalOpen, setModalOpen] = useState(false);
    const [currentDrink, setCurrentDrink] = useState(null);

    useEffect(() => {
        localStorage.setItem('saved-drinks', JSON.stringify(savedDrinks))
    }, [savedDrinks]);

    return (
        <div className='page'>
            <Store>
                <Navbar noSearch={true}/>
                {/* <ScrollTop /> */}
                <div style={{ marginTop: '7px',display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <h1 style={{borderBottom: 'solid 1px white'}} >Your Saved Drinks</h1>
                </div>
                <Grid setSavedDrinks={setSavedDrinks} drinks={savedDrinks} scroll={modalOpen} setCurrentDrink={setCurrentDrink} setModalOpen={setModalOpen} savedDrinks={savedDrinks} />
                {modalOpen && <DrinkModal saved={true} setModalOpen={setModalOpen} drink={currentDrink} />}
            </Store>
        </div>
    );
}
