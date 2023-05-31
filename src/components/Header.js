import { useState } from 'react'
import { NavLink } from 'react-router-dom';
const data = [
    {
        title: 'All',
        link: '/',
    },
    {
        title: 'Breakfast',
        link: '/breakfast',
    },
    {
        title: 'Lunch',
        link: '/lunch',
    },
    {
        title: 'Dinner',
        link: '/dinner',
    },
    {
        title: 'Snacks',
        link: '/snacks',
    },
];

const Header = ({title}) => {
  const [navs]=useState(data)
  return (
        <>
            <div>
                <h1 className='text-green-3000 text-7xl text-green-300'>{title}</h1>
            </div>
            <ul className='flex justify-center items-center gap-8'>
                {navs.map((nav, index) => (
                    <li key={index} className='li text-amber-400'>
                        <NavLink
                            to={nav.link}
                            className='navs'>
                            {nav.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Header
