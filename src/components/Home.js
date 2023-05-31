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
        </div>
    );
}

export default Home
