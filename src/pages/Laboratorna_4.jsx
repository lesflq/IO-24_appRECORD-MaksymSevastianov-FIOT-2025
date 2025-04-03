import React, {useState}  from 'react'
import {assets} from '../assets/assets.js';

const tasks = [
    {id: 1, title: "Тема, мета ЛР №4, Місце розташування сайту, звіту"},
    {id: 2, title: "Завдання з таблиці №1"},
    {id: 3, title: "Завдання з таблиці №2"},
    {id: 4, title: "Висновки"},
];


const Laboratorna4 = () => {

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
                            Тема: ОБ'ЄКТ. МЕТОДИ ОБ'ЄКТА. МАСИВ ОБ'ЄКТІВ. ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ. CALLBACK. СТРІЛОЧНІ ФУНКЦІЇ. СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ. ПЕРЕБИРАЮЧІ МЕТОДИ МАСИВУ
                        </p>
            
                        <p>
                            Мета: придбати практичні навички роботи з об'єктами. Методи об'єкта.. Callback. Стрілочні функції. Стрілочні функції як колбеки. 
                            Реалізація програм засовами мови JAVASCRIPT.
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
                    <p>Код javascript до завдання №1</p>
                    <img src={assets.lab4_task1_code} alt="" />
                    <p>Результат виконання:</p>
                    <img src={assets.lab4_task1_result} alt="" />

                    <p>Код javascript до завдання №3</p>
                    <img src={assets.lab4_task3_code} alt="" />
                    <p>Результат виконання:</p>
                    <img src={assets.lab4_task3_result} alt="" />

                    <p>Код javascript до завдання №5</p>
                    <img src={assets.lab4_task5_code} alt="" />
                    <p>Результат виконання:</p>
                    <img src={assets.lab4_task5_result} alt="" />

                    <p>Код javascript до завдання №7</p>
                    <img src={assets.lab4_task7_code} alt="" />
                    <img src={assets.lab4_task71_code} alt="" />
                    <p>Результат виконання:</p>
                    <img src={assets.lab4_task7_result} alt="" />

                    <p>Код javascript до завдання №9</p>
                    <img src={assets.lab4_task9_code} alt="" />
                    <p>Результат виконання:</p>
                    <img src={assets.lab4_task9_result} alt="" />

                    <p>Код javascript до завдання №10</p>
                    <img src={assets.lab4_task10_code} alt="" />
                    <p>Результат виконання:</p>
                    <img src={assets.lab4_task10_result} alt="" />
                </div>
                       
                case 3:
                    return <div>
                    <p>Код javascript до завдання №1</p>
                    <img src={assets.lab4_task21_code} alt="" />
                    <p>Результат виконання:</p>
                    <img src={assets.lab4_task21_result} alt="" />

                    <p>Код javascript до завдання №3</p>
                    <img src={assets.lab4_task23_code} alt="" />
                    <p>Результат виконання:</p>
                    <img src={assets.lab4_task23_result} alt="" />

                    <p>Код javascript до завдання №5</p>
                    <img src={assets.lab4_task25_code} alt="" />
                    <p>Результат виконання:</p>
                    <img src={assets.lab4_task25_result} alt="" />

                    <p>Код javascript до завдання №7</p>
                    <img src={assets.lab4_task271_code} alt="" />
                    <img src={assets.lab4_task272_code} alt="" />
                    <p>Результат виконання:</p>
                    <img src={assets.lab4_task27_result} alt="" />
                </div>
                    
                
                case 4:
                    return <div>
                    <h2>Висновок по лабораторній роботі</h2>
                    <p>
                        У ході виконання лабораторної роботи було реалізовано низку завдань на мові JavaScript, які дозволили закріпити та поглибити знання щодо роботи з функціями, масивами, об’єктами, класами та механізмами ланцюжкових викликів.
                    </p>

                    <h3>Основні результати виконаної роботи:</h3>
                    <ul>
                        <li>
                        <strong>Функції з колбеками:</strong>
                        <ul>
                            <li>Реалізовано функцію <code>createProduct()</code>, що генерує об'єкт товару з унікальним <code>id</code> та передає його у колбек.</li>
                            <li>Створено колбеки <code>logProduct()</code> та <code>logTotalPrice()</code>, які відповідно виводять об’єкт продукту та його загальну вартість у консоль.</li>
                        </ul>
                        </li>
                        <li>
                        <strong>Обробка масивів об’єктів:</strong>
                        <ul>
                            <li>Отримано масив назв медикаментів, відфільтровано прострочені препарати та відсортовано їх у хронологічному порядку за датою придатності.</li>
                            <li>Для масиву фруктів реалізовано функцію, яка зменшує ціну на 20% та додає унікальний ідентифікатор до кожного продукту.</li>
                        </ul>
                        </li>
                        <li>
                        <strong>Робота з класами:</strong>
                        <ul>
                            <li>Реалізовано клас <code>Client</code> із приватними властивостями <code>#login</code> та <code>#email</code>, доступ до яких здійснюється через геттери та сеттери.</li>
                        </ul>
                        </li>
                        <li>
                        <strong>Аналіз та обробка даних у масивах:</strong>
                        <ul>
                            <li>Підраховано кількість унікальних тегів у списку твітів та виведено їх у вигляді об’єкта.</li>
                            <li>Реалізовано функцію <code>checkBrackets()</code>, яка перевіряє правильність розстановки дужок у рядку.</li>
                            <li>Об’єднано значення з вкладених масивів <code>values</code> у єдиний масив.</li>
                            <li>Перевірено, чи всі елементи масиву є парними числами.</li>
                            <li>Відсортовано масив рядків у алфавітному порядку.</li>
                        </ul>
                        </li>
                        <li>
                        <strong>Розробка класу <code>Calculator</code> із підтримкою ланцюжкових викликів:</strong>
                        <ul>
                            <li>Реалізовано методи для арифметичних операцій (<code>add</code>, <code>subtract</code>, <code>multiply</code>, <code>divide</code>), які дозволяють виконувати обчислення послідовно.</li>
                            <li>Передбачено обробку помилки при діленні на нуль.</li>
                        </ul>
                        </li>
                    </ul>

                    <h3>Загальний висновок:</h3>
                    <p>
                        У процесі виконання лабораторної роботи було розглянуто та реалізовано ключові концепції роботи з JavaScript, зокрема <strong>функції з колбеками, роботу з масивами та об’єктами, використання класів, роботу з приватними властивостями, сортування, фільтрацію та обробку винятків.</strong>
                    </p>
                    <p>
                        Також закріплено навички використання <strong>методів масивів (<code>map</code>, <code>filter</code>, <code>reduce</code>, <code>flatMap</code>), об'єктно-орієнтованого програмування та методів ланцюжкових викликів (<code>method chaining</code>).</strong>
                    </p>
                    <p>
                        Отримані знання та практичні навички можуть бути застосовані у реальних проектах, що потребують обробки даних, створення структурованого коду та організації роботи з об'єктами та класами.
                    </p>


            </div>
            default:
                return <div>Виберіть розділ</div>;
        }
    }
    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 4</h1>
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
export default Laboratorna4;