import React from 'react'
import { assets } from "../assets/assets.js";
const MainText = () => {
    return (
        <div>
            <div className="text-base text-center font-light leading-relaxed mt-5">
                <div className="mb-4">
                    <p className="font-semibold text-lg">ЗВІТИ З ЛАБОРАТОРНИХ РОБІТ</p>
                    <p className="font-semibold text-lg">З ДИСЦИПЛІНИ «WEB-ОРІЄНТОВНАНІ ТЕХНОЛОГІЇ. ОСНОВИ FRONTEND та BACKEND РОЗРОБОК»</p>
                </div>
                <div className="mb-4 flex items-center justify-center">
                    <p className="mr-4">Студент групи ІО-24 Севастьянов Максим Євгенович</p>
                    <img src={assets.me} alt="Фото студента" className="w-24 h-24" />
                </div>
            </div>
        </div>
    )
}

export default MainText