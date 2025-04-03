import React, {useState}  from 'react'
import {assets} from '../assets/assets.js';

const tasks = [
    {id: 1, title: "Тема, мета ЛР №3.2, Місце розташування сайту, звіту"},
    {id: 2, title: "Завдання"},
    {id: 3, title: "Десктопна версія"},
    {id: 4, title: "Планшетна версія"},
    {id: 5, title: "Мобільна версія"},
    {id: 6, title: "Висновки"},
];


const Laboratorna3_2 = () => {

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
                            Тема: АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT. СТРАТЕГІЯ MOBILE FIRST.
                        </p>
            
                        <p>
                            Мета: Адаптивна верстка. Медіа-запити. Медіа-типи. Медіа-функції.Метатег viewport. Інструменти розробника. Стратегія Mobile First.
                        </p>
                        <ul>
                            <li>
                            
                            Посилання на репозиторій власного WEB-застосунку:  
                            <a href="https://github.com/lesflq/IO-24_appWEB-MaksymSevastianov-FIOT-2025/tree/lab-1-web-architecture" 
                             target="_blank"> Переглянути репозиторій</a>
            
                            </li>
                            <li> Посилання на репозиторій на живу сторінку власного WEB-застосунку:
                            <a href="https://lesflq.github.io/IO-24_appWEB-MaksymSevastianov-FIOT-2025/" 
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
                    <p>1. У звітному HTML-документі розмістити тему та постановку задачі лабораторної роботи №4.</p>
        
                    <p>2. Використовуючи медіа-запити та CSS-правила, для вибраних вами брейкпоінтів, виконати адаптивну верстку для:</p>
                    <ul>
                        <li>Десктопної версії</li>
                        <li>Планшетної версії</li>
                        <li>Мобільної версії</li>
                    </ul>
        
                    <p>3. У звітному HTML-документі привести пояснення створення десктопної, планшетної та мобільної версії.</p>
        
                    <p>4. В процесі розробки адаптивної верстки, застосувати логічні оператори.</p>
        
                    <p>5. Оформлення звітного HTML-документа лабораторної роботи №5 виконати на свій розсуд.</p>
                </div>
                       
                case 3:
                    return <div>

                    <img src={assets.view_pc} alt="Dekstop"/>
                    <li>
                    <strong>Декстопна (lg:)</strong>
                    <ul className="list-inside list-[circle] pl-4">
                        <li>Контейнер по центру сторінки.</li>
                        <li>Великий заголовок (<code>lg:text-home-heading-large</code>).</li>
                        <li>Повний текст опису відображається (<code>lg:block</code>).</li>
                        <li>Картинка підзаголовка відображається (<code>lg:block</code>).</li>
                    </ul>
                    </li>
        
                </div>
                    
                
                    
                case 4:
                    return <div>
                    <img src={assets.view_tablet} alt="Tablet"/>
                    <li>
                    <strong>Планшети (md:)</strong>
                    <ul className="list-inside list-[circle] pl-4">
                        <li>Збільшений відступ зверху (<code>pt-36</code>).</li>
                        <li>Ширший контейнер без горизонтальних відступів (<code>md:px-0</code>).</li>
                        <li>Заголовок більший (<code>md:text-home-heading-large</code>).</li>
                        <li>Відображається повний текст опису (<code>md:block hidden</code>).</li>
                        <li>Картинка підзаголовка відображається (<code>md:block hidden</code>).</li>
                    </ul>
                    </li>
        
                </div>
                    
                case 5:
                    return <div>
                    <img src={assets.view_phone} alt="Smartphone"/>
                    
                    <li>
                    <strong>Телефони (default):</strong>
                    <ul className="list-inside list-[circle] pl-4">
                        <li>Менший відступ зверху (<code>pt-20</code>).</li>
                        <li>Більші відступи по боках (<code>px-7</code>).</li>
                        <li>Заголовок менший (<code>text-home-heading-small</code>).</li>
                        <li>Скорочений текст опису (<code>md:hidden</code>).</li>
                        <li>Картинка підзаголовка не відображається.</li>
                    </ul>
                    </li>
        
                </div>
                case 6:
                    return <div>
                    <h1>Висновок</h1>

                    <p>У межах лабораторної роботи №4 було досліджено принципи адаптивної верстки та їх практичне застосування. 
                        Основна увага приділялася використанню медіа-запитів, метатега viewport і стратегії Mobile First.</p>

                    <p>Розроблена веб-сторінка успішно адаптується до різних типів пристроїв, зокрема:</p>
                    <ul>
                        <li><strong>Десктопної версії</strong> – для широкоформатних екранів з повним функціоналом.</li>
                        <li><strong>Планшетної версії</strong> – з оптимізованим розташуванням елементів.</li>
                        <li><strong>Мобільної версії</strong> – спрощеного вигляду для комфортного перегляду на смартфонах.</li>
                    </ul>

                    <p>Додатково застосовано логічні оператори в медіа-запитах для гнучкішого керування стилями.</p>

                    <p>У підсумку, отримані навички дозволяють створювати адаптивні інтерфейси, що забезпечують 
                        зручний і коректний вигляд веб-сторінки незалежно від розміру екрану.</p>


            </div>
            default:
                return <div>Виберіть розділ</div>;
        }
    }
    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 3.2</h1>
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
export default Laboratorna3_2
