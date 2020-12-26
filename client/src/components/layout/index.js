import React, { Component } from 'react'
import Mix from '../Mix'
import Drinks from '../Drinks'
import SearchBar from '../SearchBar'

const Index = () => {
        return (
            <React.Fragment>
                <SearchBar/>
              {/*   <Mix/> */}
                <Drinks/>
            </React.Fragment>
        )
}

export default Index
