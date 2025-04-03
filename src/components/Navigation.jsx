import React, {useState } from 'react';
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";

const baseUrl = import.meta.env.VITE_BASE_URL || '';

const Navigation = () => {

    const [visible, setVisible] = useState(false);

    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <ul className='hidden sm:flex gap-5 text-sm'>
                <NavLink to={`${baseUrl}/lab1`} className='flex flex-col items-center gap-1 border-1 rounded-lg p-2'>
                    <p>Лабораторна робота №1</p>
                </NavLink>
                <NavLink to={`${baseUrl}/lab2`} className='flex flex-col items-center gap-1 border-1 rounded-lg p-2'>
                    <p>Лабораторна робота №2</p>
                </NavLink>
                <NavLink to={`${baseUrl}/lab3_1`} className='flex flex-col items-center gap-1 border-1 rounded-lg p-2'>
                    <p>Лабораторна робота №3.1</p>
                </NavLink>
                <NavLink to={`${baseUrl}/lab3_2`} className='flex flex-col items-center gap-1 border-1 rounded-lg p-2'>
                    <p>Лабораторна робота №3.2</p>
                </NavLink>
                <NavLink to={`${baseUrl}/lab4`} className='flex flex-col items-center gap-1 border-1 rounded-lg p-2'>
                    <p>Лабораторна робота №4</p>
                </NavLink>
                <NavLink to={`${baseUrl}/lab5`} className='flex flex-col items-center gap-1 border-1 rounded-lg p-2'>
                    <p>Лабораторна робота №5</p>
                </NavLink>
                <NavLink to={`${baseUrl}/lab6`} className='flex flex-col items-center gap-1 border-1 rounded-lg p-2'>
                    <p>Лабораторна робота №6</p>
                </NavLink>
                <NavLink to={`${baseUrl}/lab7`} className='flex flex-col items-center gap-1 border-1 rounded-lg p-2'>
                    <p>Лабораторна робота №7</p>
                </NavLink>
                <NavLink to={`${baseUrl}/lab8`} className='flex flex-col items-center gap-1 border-1 rounded-lg p-2'>
                    <p>Лабораторна робота №8</p>
                </NavLink>
                <NavLink to={`${baseUrl}/lab9`} className='flex flex-col items-center gap-1 border-1 rounded-lg p-2'>
                    <p>Лабораторна робота №9</p>
                </NavLink>
            </ul>

            <div className='flex items-center gap-7'>

                <img onClick={() => setVisible(true)} src={assets.menu} className='w-7 cursor-pointer  sm:hidden'
                     alt='Menu'/>
            </div>
            <div
                className={`fixed inset-0 z-50 bg-white transition-transform transform ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex flex-col'>
                    <div onClick={() => setVisible(false)} className='flex item-center gap-4 p-3 cursor-pointer'>
                        <img src={assets.dropdown} className='h-7 cursor-rotate-180 ' alt="Dropdown"/>
                        <p>Повернутися</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/l1'>Лабораторна робота
                        №1</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/l2'>Лабораторна робота
                        №2</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/l3_1'>Лабораторна робота
                        №3.1</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/l3_2'>Лабораторна робота
                        №3.2</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/l5'>Лабораторна робота
                        №4</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/l6'>Лабораторна робота
                        №5</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/l7'>Лабораторна робота
                        №6</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/l8'>Лабораторна робота
                        №7</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/l9'>Лабораторна робота
                        №8</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/l9'>Лабораторна робота
                        №9</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navigation;