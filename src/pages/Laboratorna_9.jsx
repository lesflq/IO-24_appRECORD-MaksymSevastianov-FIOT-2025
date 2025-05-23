import React, { useState } from 'react';
import {assets} from '../assets/assets.js';

const tasks = [
    {id: 1, title: "Тема, мета ЛР №9, Місце розташування сайту, звіту"},
    {id: 2, title: "Backend частина"},
    {id: 3, title: "Frontend частина"},
    {id: 4, title: "Висновки"},

];

const Laboratorna9 = () => {
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
                                Тема: Аутентифікація. Тести. Модульне тестування. Пошта. Docker. Вебсокети.
                            </p>
                
                            <p>
                                Мета:  Реєстрація, хешування пароля через бібліотеку bcrypt або crypto ( Node.js) Створення JWT-токену під час аутентифікації через бібліотеку jsonwebtoken. Аутентифікація користувача через самописну middleware. Піраміда тестування. Юніт-тести. Пошта. Docker. Верифікація пошти. Основи Docker . Вебсокети
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
            
                        <h2 className="font-bold text-lg">Backend частина</h2>
                        <p>Об'єкти, які при регістрації додаються в Clerk</p>
                        <img src={assets.lab9_clerk_users} alt="" />
                        <p>Потім ці об'єкти парсяться в Users, та додаються в нашу базу даних</p>
                        <img src={assets.lab9_manage_clerk} alt="" />
                        <p>Створений раніше кластер БД, в якому зберігаються користувачі</p>
                        <img src={assets.lab9_mongodb_cluster} alt="" />
                        <p>Також реалізоване middleware, на перевірку User чи є він Educator</p>
                        <img src={assets.lab9_middleware} alt="" />
                        <p>Приклад використання JWT токена для аутентифікації користувача</p>
                        <img src={assets.lab9_token} alt="" />
                        <img src={assets.lab9_fetch_data} alt="" />
                        
                </div>
                    case 3:
                        return <div>
                        <h2 className="font-bold text-lg">Frontend частина</h2>
                        <p>Впровадження Clerk на сторінку</p>
                        <img src={assets.lab9_use_clerk_1} alt="" />
                        <img src={assets.lab9_use_clerk_2} alt="" />

                        <p>Авторизація на сторінку</p>
                        <img src={assets.lab9_sign_in} alt="" />
                        <p>Регістрація на сторінку</p>
                        <img src={assets.lab9_sign_up} alt="" />
                        

                        
                </div>
                
                    case 4:
                        return <div>
            
                        <h2 className="font-bold text-lg">Висновки</h2>
                        
                
                        <p> У процесі вивчення теми сформовано комплексне уявлення про основні компоненти сучасної серверної веброзробки. Було розглянуто принципи реєстрації
                            та аутентифікації користувачів із використанням хешування паролів за допомогою бібліотеки bcrypt, а також реалізацію захищеної авторизації на основі JWT-токенів.
                            Особливий акцент зроблено на створенні middleware-функцій для контролю доступу до захищених маршрутів. Окремо приділено увагу тестуванню,
                            зокрема написанню юніт-тестів як основи стабільної архітектури застосунку. Також було вивчено механізм відправлення електронних листів
                            і реалізацію підтвердження електронної пошти, що підвищує рівень безпеки та довіри користувачів. У рамках теми ознайомлено з основами
                            роботи з Docker для запуску застосунків у контейнерах незалежно від середовища. Додатково опрацьовано роботу з вебсокетами для організації
                            двосторонньої комунікації в реальному часі — основи для створення онлайн-чатів, сповіщень та інтерактивних функцій.
                            Загалом досягнуто поставленої мети: здобуто практичні вміння зі створення безпечного, масштабованого та інтерактивного серверного застосунку
                            на основі сучасних технологій і підходів. </p>
                        

                        
                </div>


                default:
                    return <div>Виберіть розділ</div>;
            }
        }
        return (
            <div className="min-h-screen">
                <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 9</h1>
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
export default Laboratorna9
