import React, { useState } from 'react';
import {assets} from '../assets/assets.js';

const tasks = [
    {id: 1, title: "Тема, мета ЛР №7, Місце розташування сайту, звіту"},
    {id: 2, title: "Теоретичні відомості"},
    {id: 3, title: "Реалізація"},
    {id: 4, title: "Висновки"},

];

const Laboratorna7 = () => {
    const [activeTask, setActiveTask] = useState(1);
        const [sidebarOpen, setSidebarOpen] = useState(false);
    
        const renderContent = () => {
                switch (activeTask) {
                    case 1:
                        return <div>
                            <div className="mb-4 mt-4">
                                <p className="font-semibold text-xl">Тема, мета, місце розташування WEB-застосунка та місце
                                    звітного HTML-документу</p>
                            </div>
                
                            <p>
                                Тема: СТВОРЕННЯ ІНТЕРФЕЙСІВ WEB-ЗАСТОСУВАНЬ З ВИКОРИСТАННЯМ REACT
                            </p>
                
                            <p>
                                Мета:  Придбати практичні навички Бібліотека React. Browser DOM і Virtual DOM.Інструменти. JSX. Компоненти. Маршрутизація Структура URL-рядка. Компонент . Компоненти та . URL-параметри. Вкладені маршрути
                            </p>
                            <ul>
                                <li>
                                
                                Посилання на репозиторій власного WEB-застосунку:  
                                <a href="https://github.com/lesflq/IO-24_appWEB-MaksymSevastianov-FIOT-2025-v2" 
                                 target="_blank"> Переглянути репозиторій</a>
                
                                </li>
                                <li> Посилання на репозиторій на живу сторінку власного WEB-застосунку:
                                <a href="https://io-24-app-web-maksym-sevastianov-fiot-2025-front-end.vercel.app/" 
                                 target="_blank"> Переглянути сторінку</a>
                                </li>
                                <li>
                                    Посилання на репозиторій звітного HTML-документа:<a href='https://github.com/lesflq/IO-24_appRECORD-MaksymSevastianov-FIOT-2025' target="_blank"> Переглянути репозиторій</a>
                                </li>
                                <li>
                                    Посилання на репозиторій на живу сторінку звітного HTML-документу:<a href="https://lesflq.github.io/IO-24_appRECORD-MaksymSevastianov-FIOT-2025/" 
                                 target="_blank"> Переглянути сторінку</a>
                                </li>
                                <li>
                                    Посилання на репозиторій з самостійними роботами:<a href="https://github.com/lesflq/IO-24_INDEPENDENT-MaksymSevastianov-FIOT-2025/tree/independent-work-1" 
                                 target="_blank"> Переглянути репозиторій</a>
                                </li>
                                <li>
                                    Посилання на репозиторій живу сторінку з самостійними роботами:<a href="https://lesflq.github.io/IO-24_INDEPENDENT-MaksymSevastianov-FIOT-2025/"
                                     target="_blank"> Переглянути сторінку</a>
                                </li>
                            </ul>
                        </div>;
                

                    case 2:
                        return <div>
            
                        <h3 className="font-semibold text-xl">React</h3>
                        <p>
                            <strong>React</strong> — це популярна JavaScript-бібліотека для створення інтерактивних інтерфейсів користувача.
                            Вона дозволяє будувати вебзастосунки зі зручною, гнучкою структурою за допомогою незалежних <strong>компонентів</strong>,
                            які можна багаторазово використовувати та комбінувати.
                        </p>

                        <h3 className="font-semibold text-xl">Компоненти</h3>
                        <p>
                            <strong>Компоненти</strong> — основна складова React. Це функції або класи, які повертають спеціальний синтаксис <strong>JSX</strong> (схожий на HTML).
                            Компоненти можуть отримувати <strong>пропси</strong> (вхідні параметри) та зберігати <strong>стан</strong> (state) — внутрішні дані компонента,
                            які впливають на його вигляд і поведінку.
                        </p>

                        <h3 className="font-semibold text-xl">Стан і події</h3>
                        <p>
                            <strong>Стан</strong> визначає поточні дані компонента. Його зміна викликає автоматичне оновлення (рендеринг) інтерфейсу.
                            Події, наприклад натискання кнопок або введення тексту, можуть змінювати стан компонента.
                        </p>

                        <h3 className="font-semibold text-xl">React і API</h3>
                        <p>
                            React часто використовується для створення <strong>SPA</strong> (Single Page Applications) — односторінкових застосунків,
                            які взаємодіють із сервером через <strong>API</strong> (наприклад, REST або GraphQL) і динамічно оновлюють вміст сторінки без її повного перезавантаження.
                        </p>
                        
                </div>
                    case 3:
                        return <div>
                        <h2 className="font-bold text-lg">Уся Frontend частина нашого сайту розроблена на React</h2>
                        <p>App.jsx</p>
                        <img src={assets.lab7_app} alt="" />
                        <p>AppContext.jsx</p>
                        <img src={assets.lab7_app_context} alt="" />

                        

                        
                </div>
                
                    case 4:
                        return <div>
            
                        <h2 className="font-bold text-lg">Висновки</h2>
                        
                        <p> У ході виконання лабораторної роботи було досягнуто поставленої мети — отримано практичні навички розробки вебінтерфейсів із використанням бібліотеки React.
                            Детально опрацьовано основні принципи роботи з Browser DOM та Virtual DOM, що дозволило зрозуміти переваги ефективного рендерингу компонентів.
                            Опановано створення та використання компонентів, їхній стан (state) і обробку подій, що є основою інтерактивної поведінки сучасних вебзастосунків.
                            Також вивчено принципи побудови SPA (Single Page Applications) та організацію маршрутизації з передачею URL-параметрів і налаштуванням вкладених маршрутів.
                            Отримані знання та практичний досвід забезпечують ґрунтовну базу для створення гнучких, масштабованих і зручних у підтримці клієнтських застосунків,
                            а також закладають основу для подальшого вивчення сучасних фронтенд-технологій. </p>
                                                    

                        
                </div>


                default:
                    return <div>Виберіть розділ</div>;
            }
        }
        return (
            <div className="min-h-screen">
                <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 7</h1>
                <div className="flex flex-col lg:flex-row items-start gap-5 mt-5 px-4">
                    {/* Sidebar */}
                    <div
                        className={`flex flex-col gap-2 w-64 lg:w-48 ${sidebarOpen ? 'block' : 'hidden'} lg:block`}>
                        {tasks.map(task => (
                            <p
                                key={task.id}
                                className={`pl-3 py-2 border rounded transition-all cursor-pointer mt-4`}
                                onClick={() => setActiveTask(task.id)}
                            >
                                {task.title}
                            </p>
                        ))}
                    </div>
        
                    <button
                        className="lg:hidden p-2 border border-gray-300 rounded bg-white mb-4"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        {sidebarOpen ? 'Закрити меню' : 'Відкрити меню'}
                    </button>
        
                    <div className="w-full grid grid-cols-1 gap-4 gap-y-6">
                        {renderContent()}
                    </div>
                </div>
            </div>
        );
    };
export default Laboratorna7
