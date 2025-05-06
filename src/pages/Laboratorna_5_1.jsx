import React, { useState, useRef, useEffect } from 'react';
import {assets} from '../assets/assets.js';

const tasks = [
    {id: 1, title: "Тема, мета ЛР №5.1, Місце розташування сайту, звіту"},
    {id: 2, title: "Завдання"},
    {id: 3, title: "Код для завдань"},
    {id: 4, title: "Висновки"},
];
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

const Laboratorna5_1 = () => {
    const [activeTask, setActiveTask] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [hiddenText, setHiddenText] = useState('');
    const [isHidden, setIsHidden] = useState(false);
    const placeRef = useRef(null);
    const colorSpanRef = useRef(null);
    const inputRef = useRef(null);
    const boxesRef = useRef(null);  



    useEffect(() => {
        const handleClick = (e) => {
            if (placeRef.current && placeRef.current.contains(e.target)) {
                console.log(true);
            } else {
                console.log(false);
            }
        };
    
        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, []);

    useEffect(() => {
        if (activeTask === 2) {
            const categories = document.querySelectorAll('#categories .item');
            console.log(`Number of categories: ${categories.length}`);
            categories.forEach(category => {
                const title = category.querySelector('h2')?.textContent;
                const items = category.querySelectorAll('ul li');
                console.log(`Category: ${title}`);
                console.log(`Elements: ${items.length}`);
            });
        }
    }, [activeTask]);
    
    // Завдання 5 — форма логіна
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        if (!emailValue || !passwordValue) {
        alert('All form fields must be filled in');
        return;
        }

        const data = {
        email: emailValue,
        password: passwordValue,
        };

        console.log(data);
        e.target.reset();
    };

    // Завдання 6 — зміна кольору фону
    const handleChangeColor = () => {
        const newColor = getRandomHexColor();
        document.body.style.backgroundColor = newColor;
        if (colorSpanRef.current) {
        colorSpanRef.current.textContent = newColor;
        }
    };
    // Завдання 7 — створення фігур
    const handleCreate = () => {
        const amount = parseInt(inputRef.current.value, 10);
      
        if (!amount || amount < 1 || amount > 100) {
          alert('Please enter a number between 1 and 100');
          return;
        }
      
        createBoxes(amount);
        inputRef.current.value = '';
      };
      
      const handleDestroy = () => {
        destroyBoxes();
      };
      
      const createBoxes = (amount) => {
        destroyBoxes(); // очистити перед створенням
      
        const fragment = document.createDocumentFragment();
        let size = 30;
      
        for (let i = 0; i < amount; i++) {
          const box = document.createElement('div');
          box.style.width = `${size}px`;
          box.style.height = `${size}px`;
          box.style.backgroundColor = getRandomHexColor();
          box.className = 'rounded';
          fragment.appendChild(box);
          size += 10;
        }
      
        boxesRef.current.appendChild(fragment);
      };
      
      const destroyBoxes = () => {
        boxesRef.current.innerHTML = '';
      };
      
        const renderContent = () => {
                switch (activeTask) {
                    case 1:
                        return <div>
                            <div className="mb-4 mt-4">
                                <p className="font-semibold text-xl">Тема, мета, місце розташування WEB-застосунка та місце
                                    звітного HTML-документу</p>
                            </div>
                
                            <p>
                                Тема: КЛАСИ. ОБ'ЄКТНА МОДЕЛЬ ДОКУМЕНТА (DOM). ПОДІЇ. ОБ'ЄКТ ПОДІЇ. ДЕЛЕГУВАННЯ ПОДІЙ. THROTTLE. 
                            </p>
                
                            <p>
                                Мета: Придбати практичні навички роботи з об'єктами. Методи об'єкта.. Callback. Стрілочні функції. Стрілочні функції як колбеки.
                                 Реалізація програм засовами мови JAVASCRIPT

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
                        return (
                          <div className="p-4 space-y-8">
                            {/* Завдання 1 */}
                            <div>
                              <h2 className="font-bold text-lg">
                                1. Виведення значення з поля у консоль
                              </h2>
                              <input
                                type="text"
                                placeholder="Введіть текст"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="border px-2 py-1 mr-2"
                              />
                              <button
                                onClick={() => console.log(inputValue)}
                                className="bg-blue-500 text-white px-4 py-1 rounded"
                              >
                                SHOW ME
                              </button>
                            </div>
                
                            {/* Завдання 2 */}
                            <div>
                              <h2 className="font-bold text-lg">
                                2. Приховування/розкриття тексту
                              </h2>
                              <input
                                type={isHidden ? 'password' : 'text'}
                                placeholder="Введіть текст"
                                value={hiddenText}
                                onChange={(e) => setHiddenText(e.target.value)}
                                className="border px-2 py-1 mr-2"
                              />
                              <button
                                onClick={() => setIsHidden(!isHidden)}
                                className="bg-green-500 text-white px-4 py-1 rounded"
                              >
                                {isHidden ? 'Розкрити' : 'Приховати'}
                              </button>
                            </div>
                
                            {/* Завдання 3 */}
                            <div>
                              <h2 className="font-bold text-lg">3. Клік по div#place</h2>
                              <p className="taskTitle">Натисніть на прямокутник</p>
                              <div
                                id="place"
                                className="w-40 h-20 bg-green-500 cursor-pointer"
                                ref={placeRef}
                              ></div>
                            </div>
                
                            {/* Завдання 4 */}
                            <div>
                              <h2 className="font-bold text-lg">4. DOM навігація</h2>
                              <ul id="categories">
                                <li className="item">
                                  <h2>Animals</h2>
                                  <ul>
                                    <li>Cat</li>
                                    <li>Hamster</li>
                                    <li>Horse</li>
                                    <li>Parrot</li>
                                  </ul>
                                </li>
                                <li className="item">
                                  <h2>Products</h2>
                                  <ul>
                                    <li>Bread</li>
                                    <li>Parsley</li>
                                    <li>Cheese</li>
                                  </ul>
                                </li>
                                <li className="item">
                                  <h2>Technologies</h2>
                                  <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Node.js</li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                
                            {/* Завдання 5 */}
                            <div>
                              <h2 className="font-bold text-lg">5. Форма логіна</h2>
                              <form className="login-form" onSubmit={handleLoginSubmit}>
                                <label className="block mb-2">
                                  Email
                                  <input type="email" name="email" className="block border p-1" />
                                </label>
                                <label className="block mb-2">
                                  Password
                                  <input type="password" name="password" className="block border p-1" />
                                </label>
                                <button
                                  type="submit"
                                  className="bg-blue-600 text-white px-4 py-1 rounded"
                                >
                                  Log in
                                </button>
                              </form>
                            </div>
                
                            {/* Завдання 6 */}
                            
                            <div>
                            <h2 className="font-bold text-lg">6. Зміна кольору фону</h2>
                            <div className="widget">
                                <p>
                                Background color: <span className="color" ref={colorSpanRef}>-</span>
                                </p>
                                <button
                                type="button"
                                className="change-color bg-purple-500 text-white px-4 py-1 rounded"
                                onClick={handleChangeColor}
                                >
                                Change color
                                </button>
                            </div>
                            </div>
                            {/* Завдання 7 */}
                            <div>
                            <h2 className="font-bold text-lg">7. Створення та очищення колекції елементів</h2>
                            <div id="controls" className="flex items-center space-x-2 mb-4">
                                <input
                                type="number"
                                min="1"
                                max="100"
                                step="1"
                                ref={inputRef}
                                className="border px-2 py-1 w-24"
                                />
                                <button
                                type="button"
                                data-create
                                onClick={handleCreate}
                                className="bg-blue-600 text-white px-3 py-1 rounded"
                                >
                                Create
                                </button>
                                <button
                                type="button"
                                data-destroy
                                onClick={handleDestroy}
                                className="bg-red-600 text-white px-3 py-1 rounded"
                                >
                                Destroy
                                </button>
                            </div>
                            <div id="boxes" ref={boxesRef} className="flex flex-wrap gap-2"></div>
                            </div>
                          </div>
                        );
                    case 3:
                        return <div>
                            <h2 className="font-bold text-lg">Завдання 1</h2>
                            <img src={assets.lab5_1_task1} alt="" />
                            <h2 className="font-bold text-lg">Завдання 2</h2>
                            <img src={assets.lab5_1_task2} alt="" />
                            <h2 className="font-bold text-lg">Завдання 3</h2>
                            <img src={assets.lab5_1_task3_1} alt="" />
                            <img src={assets.lab5_1_task3_2} alt="" />
                            <h2 className="font-bold text-lg">Завдання 4</h2>
                            <img src={assets.lab5_1_task4_1} alt="" />
                            <img src={assets.lab5_1_task4_2} alt="" />
                            <h2 className="font-bold text-lg">Завдання 5</h2>
                            <img src={assets.lab5_1_task5_1} alt="" />
                            <img src={assets.lab5_1_task5_2} alt="" />
                            <h2 className="font-bold text-lg">Завдання 6</h2>
                            <img src={assets.lab5_1_task6_1} alt="" />
                            <img src={assets.lab5_1_task6_2} alt="" />
                            <h2 className="font-bold text-lg">Завдання 7</h2>
                            <img src={assets.lab5_1_task7_1} alt="" />
                            <img src={assets.lab5_1_task7_2} alt="" />
                        </div>
                    case 4:
                        return (
                            <div className="mt-4">
                                <h2 className="font-bold text-xl mb-2">Висновки</h2>
                                <p className="mb-2">
                                    Під час виконання лабораторної роботи №5.1 було закріплено практичні навички роботи з об’єктами в JavaScript, методами об’єктів, масивом об’єктів, а також стрілочними функціями та їх використанням як колбеків. Було реалізовано низку інтерактивних завдань, зокрема:
                                </p>
                                <ul className="list-disc pl-6 space-y-1 mb-2">
                                    <li>робота з формами та валідацією введених даних</li>
                                    <li>використання подій для обробки дій користувача</li>
                                    <li>зміна стилів елементів DOM за допомогою JavaScript</li>
                                    <li>динамічне створення та видалення елементів у DOM</li>
                                </ul>
                                <p>
                                    Усі завдання були виконані відповідно до вимог, що дозволило краще зрозуміти принципи побудови динамічних веб-додатків з використанням JavaScript та React.
                                </p>
                            </div>
                        );

                default:
                    return <div>Виберіть розділ</div>;
            }
        }
        return (
            <div className="min-h-screen">
                <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 5.1</h1>
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
export default Laboratorna5_1
