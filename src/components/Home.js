import React, { useState } from 'react'
import Header from './Header'
import { data } from '../data'
import Menulist from './Menulist'
import { CirclesWithBar } from 'react-loader-spinner'

const Home = () => {
    const [meals] = useState(data)
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        if (loading) {
            setLoading(false);
        }
    }, 700);

    return (
        <div>
            <Header title='Padmavati Bhojnalaya🍛' />
            {loading && (
                <div className='flex items-center justify-center'>
                    <CirclesWithBar
                        height='50'
                        width='50'
                        color='#4fa94d'
                        wrapperStyle={{}}
                        wrapperClass=''
                        visible={true}
                        outerCircleColor=''
                        innerCircleColor=''
                        barColor=''
                        ariaLabel='circles-with-bar-loading'
                    />
                </div>
            )}
            {!loading && <Menulist className='text-green-300' meals={meals} />}
             <footer className=' my-8 flex text-2l text-amber-400 justify-center items-center'>
                 Copyright © 
                     <a className={"text-green-300 underline "} href={"https://github.com/nitverse"}> 
                         nitverse</a>
             </footer>
        </div>
    );
}

export default Home
