import React, { useState } from 'react';
import {assets} from '../assets/assets.js';

const tasks = [
    {id: 1, title: "Тема, мета ЛР №8, Місце розташування сайту, звіту"},
    {id: 2, title: "Backend частина"},
    {id: 3, title: "Frontend частина"},
    {id: 4, title: "Висновки"},

];

const Laboratorna8 = () => {
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
                                Тема: MongoDB та Mongoose. Схеми та методи Mongoose. Деплой на Heroku.
                            </p>
                
                            <p>
                                Мета: придбати практичні навички роботи з базою данихMongoDB, створення Mongo-аккаунт, проект Mongo Atlas, кластер. MongoDB Compass. Робота з базою даних MongoDB через Mongoose. Принципи роботи Mongoose: схема – модель – колекція. Mongoose: створення схеми (required, enum, default, unique, match). З'єднання Joi та вбудованої в Mongoose валідації. Методи моделей. Деплой на Heroku..
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
                        <p>Підключення до БД MongoDB</p>
                        <img src={assets.lab8_connect_db} alt="" />
                        <p>Створення схем об'єкту курса за допомогою Mongoose</p>
                        <img src={assets.lab8_schemas} alt="" />
                        <p>Ендпоїнти для отримання курсів з бекенду на фронтенд</p>
                        <img src={assets.lab8_endpoints_courses} alt="" />
                        <p>Методи для отримання усіх курсів, що спрацьовують на звернення до ендпоїнта</p>
                        <img src={assets.lab8_get_courses} alt="" />
                </div>
                    case 3:
                        return <div>
            
                        <h2 className="font-bold text-lg">Frontend частина</h2>
                        
                        <p>Метод, для отримання усіх курсів в AppContext</p>
                        <img src={assets.lab8_fetch_courses} alt="" />
                        <p>Приклад роботи з об'єктами курсів в CourseList</p>
                        <img src={assets.lab8_couse_list_1} alt="" />
                        <p> </p>
                        <img src={assets.lab8_couse_list_2} alt="" />

                        
                </div>
                
                    case 4:
                        return <div>
            
                        <h2 className="font-bold text-lg">Висновки</h2>
                        
                
                        <p> Під час опрацювання теми було здобуто практичні знання та навички роботи з базою даних MongoDB у хмарному сервісі MongoDB Atlas — від створення акаунта,
                            проєкту та кластера до налаштування доступу. Також опановано використання MongoDB Compass — інструмента для візуального перегляду та редагування даних у базі.
                            Окрему увагу приділено роботі з бібліотекою Mongoose, яка забезпечує зручну інтеграцію MongoDB із Node.js. Було вивчено основні принципи створення схем,
                            моделей та колекцій, що дозволяє впорядковано працювати з даними та здійснювати їхню валідацію безпосередньо у коді. Зокрема, освоєно застосування параметрів схем:
                            required для обов’язкових полів, enum для обмеження значень, default для встановлення значення за замовчуванням, unique для забезпечення унікальності
                            та match для валідації регулярними виразами. Таким чином, досягнуто поставленої мети: здобуто практичні вміння підключення до MongoDB,
                            створення структурованих моделей із використанням Mongoose та реалізації збереження і обробки даних відповідно до сучасних підходів веброзробки. </p>
                        

                        
                </div>


                default:
                    return <div>Виберіть розділ</div>;
            }
        }
        return (
            <div className="min-h-screen">
                <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 8</h1>
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
export default Laboratorna8