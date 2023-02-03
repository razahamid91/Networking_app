import React from 'react'
import './Home.css'
import Sidebar from './Sidebar/Sidebar'
import Feed from '../Feed/Feed'
import Widgets from './Widgets/Widgets'
import Header from '../Header/Header'


function Home() {
    return (
        <div className='container_home'>

            <Sidebar />
            <Feed />
            <Widgets />
            
        
        <Header/>
        </div>
    )
}

export default Home