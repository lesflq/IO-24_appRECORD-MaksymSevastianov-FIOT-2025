import React, { useState } from 'react';
import {assets} from '../assets/assets.js';

const tasks = [
    {id: 1, title: "Тема, мета ЛР №5.2, Місце розташування сайту, звіту"},
    {id: 2, title: "Завдання"},
    {id: 3, title: "Висновки"},
];

const Laboratorna5_2 = () => {
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
                                Тема: WEB-СХОВИЩЕ. WEB STORAGE API. МОДУЛЬНОСТЬ  КОДУ. СТВОРЕННЯ МОДАЛЬНОГО ВІКНА. ДЕЛЕГУВАННЯ ПОДІЙ.
                            </p>
                
                            <p>
                                Мета: Придбати практичні навички роботи створення модального вікна; повторити процес створення макету, зокрема створення макету галереї довільних зображень; закріпити навички роботи з делегуванням подій.
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
                        <h2 className="font-bold text-lg">Завдання 1</h2>
                        <p>Створив зображення сітку зображень низької якості, при натисканні на будь-яку з них відкривається модальне вікно з кращою якістю зображення</p>
                        <img src={assets.lab5_2_task1_1} alt="" />
                        <img src={assets.lab5_2_task1_2} alt="" />
                        <h2 className="font-bold text-lg">Завдання 2</h2>
                        <p>Створена форма, яка зберігає вміст даних при оновленні сторінки в LocalStorage</p>
                        <img src={assets.lab5_2_task2_1} alt="" />
                        <p>При натисканні Sumbit виконується console.log з нашим об'єктом форми</p>
                        <img src={assets.lab5_2_task2_2} alt="" />


                    </div>
                           
                    
                        
                    
                    case 3:
                        return <div>
            
                        <h2 class="center">ВИСНОВОК</h2>
                        <p class="main_text">У ході виконання практичної роботи було закріплено та поглиблено знання з теми
                            "WEB-сховище. Web Storage API. Модульність коду. Створення модального вікна. Делегування подій".
                            Було створено макет галереї зображень із використанням HTML, CSS та JavaScript, реалізовано
                            динамічне додавання елементів галереї за допомогою масиву об’єктів. Для відображення великої
                            версії зображення використано бібліотеку basicLightbox, що дозволило створити повноцінне
                            модальне вікно. При цьому застосовано принцип делегування подій, завдяки якому взаємодія
                            користувача з галереєю реалізована ефективно й масштабовано. Додатково було створено форму з
                            полями email та message, значення яких зберігаються у локальному сховищі за допомогою Web
                            Storage API (localStorage). При завантаженні сторінки відбувається автоматичне відновлення
                            введених даних, а при відправленні форми — перевірка на заповненість полів, очищення сховища й
                            об’єкта formData. Уся логіка реалізована у вигляді окремого JavaScript-файлу, що відповідає
                            принципам модульності. Таким чином, мети роботи досягнуто: набуто практичних навичок створення
                            модального вікна, повторено процес створення макету галереї, закріплено навички роботи з
                            делегуванням подій та використанням web-сховища.</p>
                </div>


                default:
                    return <div>Виберіть розділ</div>;
            }
        }
        return (
            <div className="min-h-screen">
                <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 5.2</h1>
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
export default Laboratorna5_2
