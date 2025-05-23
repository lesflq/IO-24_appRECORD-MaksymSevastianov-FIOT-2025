import React, { useState } from 'react';
import {assets} from '../assets/assets.js';

const tasks = [
    {id: 1, title: "Тема, мета ЛР №6, Місце розташування сайту, звіту"},
    {id: 2, title: "Теоретичні відомості"},
    {id: 3, title: "Реалізація"},
    {id: 4, title: "Висновки"},

];

const Laboratorna6 = () => {
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
                                Тема: АСИНХРОННІСТЬ. ПРОМІСИ. HTTP-ЗАПИТИ. REST API. AJAX. КРОС-ДОМЕННІ ЗАПИТИ. ПАГІНАЦІЯ. CRUD
                            </p>
                
                            <p>
                                Мета:  Придбати практичні навички роботи створення промісу. Методи then(), catch(), finally().Ланцюжки промісів. Методи класу Promise. Протокол HTTP. Протокол HTTPS.. REST API Формат запиту. HTTP-методи. HTTP-заголовки. AJAX. Fetch API. Робота з публічним REST API
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
            
                        <h2 className="font-bold text-lg">Асинхронні Функції</h2>
                        <p>
                            Асинхронні функції (<code>async functions</code>) дозволяють виконувати операції, які можуть займати певний час 
                            (наприклад, зчитування з бази даних або запити до сервера), без блокування основного потоку виконання коду. 
                            Вони створюються з використанням ключового слова <code>async</code>, а всередині такої функції можна використовувати оператор 
                            <code>await</code>, щоб «дочекатися» результату виконання асинхронної операції.
                        </p>

                        <h2 className="font-bold text-lg">Проміси</h2>
                        <p>
                            Проміс (<code>Promise</code>) — це об'єкт, який представляє майбутній результат асинхронної операції. 
                            Проміси мають три стани:
                        </p>
                        <ul>
                            <li><strong>pending</strong> (очікування)</li>
                            <li><strong>fulfilled</strong> (виконано успішно)</li>
                            <li><strong>rejected</strong> (помилка)</li>
                        </ul>

                        <h2 className="font-bold text-lg">API</h2>
                        <p>
                            API — це інтерфейс, який дозволяє різним програмам взаємодіяти між собою. 
                            У бекенд-розробці зазвичай йдеться про <strong>REST API</strong> — набір HTTP-ендпоінтів, 
                            за допомогою яких фронтенд може взаємодіяти з базою даних або логікою сервера. 
                            Приклади HTTP-методів API:
                        </p>
                        <ul>
                            <li><code>GET /products</code> — отримати список продуктів</li>
                            <li><code>POST /order</code> — створити нове замовлення</li>
                            <li><code>PUT /product/:id</code> — оновити товар</li>
                            <li><code>DELETE /cart/:id</code> — видалити з кошика</li>
                        </ul>
                        
                </div>
                    case 3:
                        return <div>
                        <h2 className="font-bold text-lg">Уся Frontend частина нашого сайту розроблена на React</h2>
                        <p>Promise реалізовані через виклики await та async</p>
                        <img src={assets.lab6_await} alt="" />
                        <p>Також використовується fetch, яка відправляє HTTP-запити, і також повертає Promise</p>
                        <img src={assets.lab6_fetch} alt="" />
                        <p>Частина реалізації REST API в моєму застосунку. Використання маршрутів</p>
                        <img src={assets.lab6_endpoints} alt="" />
                        <p>Ендпоїнти для роботи з даними користувача</p>
                        <img src={assets.lab6_user_routes} alt="" />

                </div>
                
                    case 4:
                        return <div>
            
                        <h2 className="font-bold text-lg">Висновки</h2>
                        
                        <p> У процесі виконання роботи було вивчено та закріплено основні концепції й технології, пов’язані з обробкою асинхронних процесів у веброзробці.
                            Опановано створення промісів та використання методів then(), catch(), finally(), а також формування ланцюжків обробки асинхронних подій.
                            Це допомогло краще зрозуміти принципи роботи з асинхронними операціями, уникати надмірної вкладеності коду та забезпечувати його читабельність.
                            Значну увагу приділено протоколам HTTP і HTTPS, які є основою обміну даними між клієнтом і сервером. Розглянуто структуру HTTP-запитів:
                            основні методи (GET, POST, PUT, DELETE), заголовки та особливості їхнього використання в REST API для інтеграції фронтенду з сервером.
                            Завдяки практичному ознайомленню з AJAX та Fetch API, здобуто досвід реалізації обміну даними без перезавантаження сторінки.
                            Додатково опрацьовано роботу з відкритими REST API для інтеграції сторонніх сервісів у застосунки, поняття крос-доменних запитів
                            і способи їхнього коректного оброблення. Також реалізовано пагінацію для ефективної роботи з великими обсягами даних.
                            У рамках CRUD-операцій (створення, читання, оновлення, видалення) отримано практичні навички організації повноцінної клієнт-серверної взаємодії.
                            Загалом досягнуто основної мети — набуття практичного досвіду роботи з асинхронним програмуванням, промісами,
                            HTTP-запитами та REST API у сучасних вебзастосунках. </p>

                </div>


                default:
                    return <div>Виберіть розділ</div>;
            }
        }
        return (
            <div className="min-h-screen">
                <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 6</h1>
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
export default Laboratorna6
