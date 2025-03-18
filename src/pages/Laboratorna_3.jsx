import React, {useState}  from 'react'
import {assets} from "../assets/assets.js";

const tasks = [
    {id: 1, title: "Тема, мета ЛР №3, Місце розташування сайту, звіту"},
    {id: 2, title: "Завдання №1. Зовнішній вигляд макету. Код макету"},
    {id: 3, title: "Завдання №2"},
    {id: 4, title: "Фіксована таблична верстка"},
    {id: 5, title: "Гумова таблична верстка"},
    {id: 6, title: "Фіксована блокова верстка"},
    {id: 7, title: "Гумова блокова верстка"},
    {id: 8, title: "Завдання №3 FLEXBOX"},
    {id: 9, title: "Зовнішній вигляд сторінки"},
    {id: 10, title: "HTML-код"},
    {id: 11, title: "CSS-код сторінки"},
    {id: 12, title: "Висновки до ЛР №3"},
];


const Laboratorna3 = () => {

    const [activeTask, setActiveTask] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const courses = [
        { name: "JAVASCRIPT", logo: assets.javascript_icon, seats: 5, duration: "5-11" },
        { name: "PYTHON", logo: assets.python_icon, seats: 3, duration: "6-11" },
        { name: "JAVA", logo: assets.java_icon, seats: 7, duration: "6-11" },
      ];

    
    const renderContent = () => {
        switch (activeTask) {
            case 1:
                return <div>
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">Тема, мета, місце розташування WEB-застосунка та місце
                            звітного HTML-документу</p>
                    </div>
        
                    <p>
                        Тема: ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА. ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.
                    </p>
        
                    <p>
                        Мета: Придбати практичні навички роботи верстки сторінок засобами CSS, верстки на основі плаваючих елементів,
                         з’ясувати переваги та недоліки типів макетів веб-сторінок ⎯ придбати практичні навички роботи верстки сторінок засобами CSS та FLEXBOX
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
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">код</p>
                        
                        <img src={assets.lab3_1} alt="1"/>
                        <img src={assets.lab3_2} alt="2"/>
                        <img src={assets.lab3_3} alt="3"/>
                        <img src={assets.lab3_4} alt="4"/>
                        <img src={assets.lab3_5} alt="5"/>
                        
                        
                    </div>
                </div>;
                   
            case 3:
                return <div>
                <p>Засобами HTML та CSS виконати Завдання №2 у звітному HTML-документі , в саме:</p>
                <p>Розмітку за допомогою таблиці (номер варіанта – остання цифра у списку групи)</p>
                <p>Фіксована таблична верстка</p>
                <p>Гумова таблична верстка</p>
                <p>Розмітку за допомогою блоків (плаваючих елементів) (номер варіанта – остання цифра у списку групи +
                    1)</p>
                <p>Фіксована блокова верстка</p>
                <p>Гумова блокова верстка</p>
            </div>
                
            
                
            case 4:
                return <div className="flex flex-col items-center p-4">
                <p className="text-xl font-bold">Варіант 3</p>
                <img src={assets.lab3_task2_v1} alt="Варіант" className="mb-4"/>
                <table class="border-2 border-black border-collapse w-96">
                {/* <!-- Верхня частина --> */}
                <thead>
                    <tr class="bg-yellow-300 border-b-2 border-black">
                        <th colspan="3" class="border-2 p-2">
                            <div class="flex justify-between items-center">
                                <div class="w-36 h-8 border-2 bg-white border-black"></div>
                                <p class="mr-12 font-bold text-2xl">1</p>
                            </div>
                        </th>
                    </tr>
                </thead>
                {/* <!-- Основна область --> */}
                <tbody className='border-2'>
                        <tr>
                            <td rowSpan="3" className='w-24 border-2 bg-blue-500'>
                                <p className="ml-10 mb-40 font-bold text-2xl">3</p>
                            </td>
                            <td colSpan="2">
                            <div className="w-64 h-12 bg-red-500 border-2 ml-4 mr-4 mt-4 border-black text-center"></div>
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan="2">
                            <div className="w-32 h-64 border-t-2 border-r-2 border-l-2 border-gray-500 flex flex-col items-center mx-4 my-4">
                                <p className="font-bold text-2xl">3</p>
                                <div className="w-32 h-12 border-2 border-black bg-red-500 mt-auto"></div>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan="2">
                                <div className="w-24 h-64 bg-blue-500 border-2 mt-4 mb-4 border-black text-center">
                                    <p className='mt-14 font-bold text-2xl'>4</p>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                {/* <!-- Нижня частина --> */}
                <tfoot>
                    <tr class="bg-yellow-300 border-t-2 border-black">
                        <td colspan="3" class="h-12 text-left pl-10 font-bold text-xl">5</td>
                    </tr>
                </tfoot>
            </table>
            </div>
                
            case 5:
                return <div className="flex flex-col items-center p-4">
                <p className="text-xl font-bold">Варіант 3</p>
                <img src={assets.lab3_task2_v1} alt="Варіант" className="mb-4"/>
                <table className="border-2 border-black border-collapse w-full">
                {/* Верхня частина */}
                <thead>
                    <tr className="bg-yellow-300 border-b-2 border-black">
                    <th colSpan="3" className="border-2 p-2">
                        <div className="flex justify-between items-center">
                        <div className="w-1/3 h-8 border-2 bg-white border-black"></div>
                        <p className="font-bold text-2xl">1</p>
                        </div>
                    </th>
                    </tr>
                </thead>

                {/* Основна область */}
                <tbody className="border-2">
                    <tr>
                        <td rowSpan="3" className="w-1/5 border-2 bg-blue-500">
                            <p className="text-center font-bold text-2xl py-10">2</p>
                        </td>
                        <td colSpan="2" className="p-2">
                            <div className="w-full h-12 bg-red-500 border-2 border-black"></div>
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan="2" className="p-2">
                        <div
                                className="flex-col h-64 border-2 border-gray-500 flex items-center justify-center relative">
                                <p className="font-bold text-2xl">3</p>
                                <div className="w-full h-12 border-2 border-black bg-red-500 mt-auto -mt-6"></div>
                            </div>
                        </td>
                        <td rowSpan="2" className="p-2">
                            <div className="h-64 bg-blue-500 border-2 border-black flex items-center justify-center">
                                <p className="font-bold text-2xl">4</p>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                {/* Нижня частина */}
                <tfoot>
                    <tr className="bg-yellow-300 border-t-2 border-black">
                    <td colSpan="3" className="h-12 text-left pl-10 font-bold text-xl">5</td>
                    </tr>
                </tfoot>
                </table>

            </div>
            case 6:
                return <div className="flex flex-col items-center p-4">
                <p className="text-xl font-bold">Варіант 3</p>
                <img src={assets.lab3_task2_v2} alt="Варіант" className="mb-4"/>
                <div className='border-2 border-black'>
                <div className="w-96 bg-yellow-300 flex justify-between items-center p-2 border-b-2 border-black">
                    <div className="w-36 h-8 border-2 bg-white border-black"></div>
                    <p className="font-bold text-2xl">1</p>
                </div>

                <div className="flex w-96">
                    <div className="w-24 bg-blue-500 border-r-2 border-black flex justify-center items-center">
                        <p className="font-bold text-2xl">2</p>
                    </div>
                    <div className="flex-1 flex flex-col">
                        
                        <div className="flex">
                            <div className="w-32 h-64 border-t-2 border-r-2 border-l-2 border-gray-500 flex flex-col items-center mx-4 my-4">
                                <p className="font-bold text-2xl">3</p>
                                <div className="w-32 h-12 border-2 border-black bg-red-500 mt-auto"></div>
                            </div>
                            <div
                                className="w-24 h-64 bg-blue-500 border-2 border-black flex justify-center items-center my-4">
                                <p className="font-bold text-2xl">4</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-96 h-12 bg-yellow-300 border-t-2 border-black flex items-center">
                    <p className="ml-10 font-bold text-xl">5</p>
                </div>
            </div>
        </div>
                
            case 7:
                return <div className="flex flex-col items-center p-4">
                <p className="text-xl font-bold">Варіант 3</p>
                <img src={assets.lab3_task2_v2} alt="Варіант" className="mb-4"/>
                <div className='border-2 border-black w-full max-w-3xl'>
                <div className="w-full bg-yellow-300 flex justify-between items-center p-2 border-b-2 border-black">
                    <div className="w-1/3 h-8 border-2 bg-white border-black"></div>
                    <p className="font-bold text-2xl">1</p>
                </div>

                <div className="flex w-full">
                    <div className="w-1/4 bg-blue-500 border-r-2 border-black flex justify-center items-center">
                        <p className="font-bold text-2xl">2</p>
                    </div>
                    <div className="flex-1 flex flex-col">
                        <div className="flex flex-wrap">
                            <div
                                className="w-1/2 min-w-[80px] flex-1 flex flex-col h-64 items-center mx-4 my-4 border border-gray-500">
                                <p className="font-bold text-2xl">3</p>
                                <div className="w-full h-12 border-2 border-black bg-red-500 mt-auto"></div>
                            </div>

                            <div
                                className="flex-1 min-w-[80px] sm: ml-4 h-64 bg-blue-500 border-2 border-black flex justify-center items-center my-4 mr-4">
                                <p className="font-bold text-2xl">4</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-12 bg-yellow-300 border-t-2 border-black flex items-center">
                    <p className="ml-10 font-bold text-xl">5</p>
                </div>
            </div>
        </div>
                
            case 8:
                return <div>
                <p>
                    Кожному студенту виконати свій номер варіанта Завдання №3, за технологією FLEXBOX та засобами CSS.
                    Номер варіанта відповідає останній цифрі студента у списку групи.

                    Мій номер залікової книжки: 2423 - отже, я виконую варіант 3.
    
                    У звітному HTML-документі розмістити скріншот сторінки, яка була виконана технологією FLEXBOX.
                    У звітному HTML-документі розмістити HTML- код та CSS-код сторінки, яка була виконана технологією
                    FLEXBOX.
                    Вміти пояснити викладачу особливості вашого макету.
    
                </p>
            </div>
                
                
            case 9:
                return <div>
                <div className="bg-gray-900 text-white min-h-screen pt-6 pr-6 pl-6 ">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold">ПОПУЛЯРНІ НАПРЯМКИ</h1>
                    <h2 className="text-orange-500 text-2xl">КУРСІВ ПРОГРАМУВАННЯ</h2>
                </div>
      
    
                <div className="flex justify-center gap-6 mb-0">
            
                    {courses.map((course, index) => (
                    <div key={index}  className="max-w-sm mx-auto bg-gray-700 border border-gray-200 rounded-lg shadow-sm  text-center">
                            <img src={course.logo} alt={course.name} className="mx-auto w-20 h-20 mb-2" />
                            <p className="text-blue-500 font-medium">Complex</p>
                            <h3 className="text-xl font-bold text-white">Назва курсу</h3>
                            <p className="text-orange-500 mt-2">Комплексний курс</p>
                            <div className="mt-8 text-sm text-start mx-10 space-y-1 text-white">
                                <p>Стартовий рівень: початківець</p>
                                <p>Тривалість: {course.duration} місяців</p>
                                <p>Ціна: від 14500грн.</p>
                            </div>
                            <p className="text-blue-500 mt-8 font-medium">Залишилось місць {course.seats}</p>

                            <div className="border-t-2 border-gray-200 bg-zinc-600 rounded-b-lg mt-8">
                                <a href="#"
                                className="inline-block text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                                    Детальніше
                                </a>
                            </div>
                        
                
                    </div>
            ))}
                </div>
      
                <div className="grid grid-cols-4 gap-4 mb-12 pt-6">
                    <img src={assets.lab3_gallery1} alt="Gallery 1" className="w-full h-40 object-cover rounded-lg" />
                    <img src={assets.lab3_gallery2} alt="Gallery 2" className="w-full h-40 object-cover rounded-lg" />
                    <img src={assets.lab3_gallery3} alt="Gallery 3" className="w-full h-40 object-cover rounded-lg" />
                    <img src={assets.lab3_gallery4} alt="Gallery 4" className="w-full h-40 object-cover rounded-lg" />
                </div>
                <div className="flex items-center justify-end mb-12">
                    <p className="text-orange-500 text-4xl font-bold uppercase w-[70%] px-24 text-right">
                        Від новачка до PRO-розробника
                    </p>
            </div>
                <div className="flex items-center">
                    <img src={assets.lab3_girl} alt="IT Job" className="w-1/2 h-170" />
                    <div className="w-1/2 p-6 text-lg">
                    <p>Робота в ІТ - це високі зарплати, можливість віддаленої співпраці із закордонними компаніями і свобода вибору.
                         Але є і мінуси. Низький старт - головний з них. Фахівцю без досвіду складно отримати робочий стаж,
                          а зарплата коливається на рівні мінімальної. <br />На курсах з інкубатором наші студенти
                          отримують додаткових 5 місяців досвіду який так сильно вимагають роботодавці.
                    <br />3 таким резюме ви станете бажаним
                    кандидатом для будь-якої компанії.</p>
                    </div>
                </div>
                </div>
                    <footer className="bg-orange-500 text-white py-6 flex justify-between px-12 w-full">
                    <h3 className="text-xl font-bold">Навчайся зараз, сплачуй потім</h3>
                    <p className="text-lg">Розтермінування на 24 місяці</p>
                </footer>
                </div>
    
            
            case 10:
                return <div><div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">HTML-код</p>
                    </div>
                    <img src={assets.lab3_code1} alt="code1" />
                    <img src={assets.lab3_code2} alt="code2" />
                    </div>

            case 11:
                return <div>
                    <p>
                    Цей код використовує Tailwind CSS для стилізації компонентів сторінки. Основні класи, які застосовані:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>bg-gray-900</strong> – встановлює темний фон для всього контейнера сторінки.
                    </li>
                    <li>
                        <strong>text-white</strong> – змінює колір тексту на білий для кращої читабельності.
                    </li>
                    <li>
                        <strong>min-h-screen</strong> – гарантує, що контейнер займає мінімальну висоту усього екрану.
                    </li>
                    <li>
                        <strong>flex justify-center gap-6</strong> – вирівнює елементи курсів по центру, додаючи проміжки між ними.
                    </li>
                    <li>
                        <strong>bg-gray-700 border border-gray-200 rounded-lg shadow-sm</strong> – створює картки курсів з темним фоном, рамкою та тінню.
                    </li>
                    <li>
                        <strong>text-blue-500</strong> та <strong>text-orange-500</strong> – використовуються для акцентного забарвлення тексту.
                    </li>
                    <li>
                        <strong>grid grid-cols-4 gap-4</strong> – створює галерею зображень у чотири колонки з відступами між ними.
                    </li>
                    <li>
                        <strong>w-full h-40 object-cover rounded-lg</strong> – стилізує зображення в галереї, задаючи їм однаковий розмір і закруглені кути.
                    </li>
                    <li>
                        <strong>flex items-center justify-end</strong> – вирівнює елементи у футері та секціях тексту.
                    </li>
                    <li>
                        <strong>bg-orange-500 text-white py-6 flex justify-between px-12 w-full</strong> – стилізує підвал сторінки, додаючи помаранчевий фон, білий текст та рівномірний відступ.
                    </li>
                    </ul>

                    <p className="mt-4">
                    Завдяки використанню Tailwind CSS код стає більш читабельним, модульним та адаптивним без потреби у написанні власних CSS-стилів.
                    </p>
                </div>
                

            case 12:
                return (
                    <div>
                        <h1>Висновки</h1>
                        <p>
                        У ході виконання лабораторної роботи ми ознайомилися з різними підходами до верстки веб-сторінок. Було розглянуто 
                        табличну верстку, блокову верстку з використанням плаваючих елементів, а також сучасний підхід на основі CSS.
                        </p>
                    
                        <h2>1. Таблична верстка</h2>
                        <ul>
                        <li><strong>Переваги:</strong> проста реалізація, добре підтримується всіма браузерами.</li>
                        <li><strong>Недоліки:</strong> складність у створенні гнучких макетів, надлишковий HTML-код, проблеми з адаптацією.</li>
                        </ul>
                    
                        <h2>2. Блокова верстка з float</h2>
                        <ul>
                        <li><strong>Переваги:</strong> дозволяє створювати складні макети, підтримується в старих браузерах.</li>
                        <li><strong>Недоліки:</strong> труднощі з вирівнюванням, потреба у clearfix, проблеми з висотою батьківських контейнерів.</li>
                        </ul>
                    
                        <h2>3. Сучасні методи верстки (CSS Grid, Flexbox)</h2>
                        <ul>
                        <li><strong>Переваги:</strong> зручне управління розташуванням елементів, адаптивність, менше коду.</li>
                        <li><strong>Недоліки:</strong> складність для новачків, можлива неповна підтримка в застарілих браузерах.</li>
                        </ul>
                    
                        <p>
                        Аналізуючи ці підходи, можна зробити висновок, що таблична верстка більше не актуальна для сучасної розробки. 
                        Використання float забезпечує певну гнучкість, але має значні обмеження. Сучасні методи, такі як CSS Grid і 
                        Flexbox, є найкращими для створення адаптивних та зручних макетів.
                        </p>
                    
                        <p><strong>Таким чином, використання сучасних технологій CSS є оптимальним вибором для розробки веб-сторінок, 
                        оскільки вони дозволяють створювати ефективні, адаптивні та легко підтримувані макети.</strong></p>
                    </div>
                    );
                  
                
            default:
                return <div>Виберіть розділ</div>;

        }
    }
    
    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 3</h1>
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
export default Laboratorna3
