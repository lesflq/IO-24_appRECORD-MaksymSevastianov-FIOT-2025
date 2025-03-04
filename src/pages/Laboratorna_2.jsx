import React, {useState} from 'react'
import {assets} from "../assets/assets.js";

const tasks = [
    {id: 1, title: "Тема, мета ЛР №2, Місце розташування сайту, звіту"},
    {id: 2, title: "Способи підключення стилів"},
    {id: 3, title: "СЕЛЕКТОРИ"},
    {id: 4, title: "Селектори тегу"},
    {id: 5, title: "Селектори класу"},
    {id: 6, title: "Селектори ідентифікаторів"},
    {id: 7, title: "Інші селектори"},
    {id: 8, title: "CSS: Шрифти Текст Таблиці Фон Контур Списки CSS Просунутий"},
    {id: 9, title: "Висновки до ЛР №2"},
];



const Laboratorna2 = () => {
    
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
                        Тема: КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ.
                    </p>
        
                    <p>
                        Мета: Придбати практичні навички роботи  з селекторами, ідентифікаторами, списками,  різноманітними властивостями кольору
                         і фону,  зовнішними та внутрішними  відступами,  плаваючими елементами, оформленням текстових елементів.
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
                        <div className="text-base font-light leading-relaxed mt-5">
                        <div className="mb-4">
                            <p className="font-semibold text-xl">Способи підключення CSS</p>
                        </div>

                        <p className="font-semibold text-xm">1. Вбудовані стилі (Inline Styles)</p>
                        <p>
                            Стилі додаються безпосередньо до HTML-елемента через атрибут <code>style</code>.
                        </p>
                        <pre>
                            {`<div style={{ color: 'red', fontSize: '20px' }}>Привіт, світ!</div>`}
                        </pre>

                        <p className="font-semibold text-xm">2. Внутрішні стилі (Internal CSS)</p>
                        <p>
                            Стилі записуються у <code>&lt;style&gt;</code> всередині <code>&lt;head&gt;</code> HTML-документа.
                        </p>
                        <pre>
                            {`<style>
                    h1 {
                        color: blue;
                        font-size: 24px;
                    }
                    </style>`}
                        </pre>

                        <p className="font-semibold text-xm">3. Зовнішні стилі (External CSS)</p>
                        <p>
                            Стилі підключаються через зовнішній файл <code>.css</code> за допомогою тега <code>&lt;link&gt;</code>.
                        </p>
                        <pre>
                            {`<link rel="stylesheet" href="styles.css" />`}
                        </pre>

                        <p className="font-semibold text-xm">4. Імпорт стилів через @import</p>
                        <p>
                            Використовується директива <code>@import</code> для підключення іншого CSS-файлу.
                        </p>
                        <pre>
                            {`@import url('styles.css');`}
                        </pre>

                        <p className="font-semibold text-xm">5. CSS-модулі (CSS Modules)</p>
                        <p>
                            CSS-файли з розширенням <code>.module.css</code> використовуються для локальних стилів у React.
                        </p>
                        <pre>
                            {`import styles from './Button.module.css';

                    <button className={styles.button}>Натисни мене</button>`}
                        </pre>

                        <p className="font-semibold text-xm">6. Styled Components (CSS-in-JS)</p>
                        <p>
                            Використання бібліотек, таких як <code>styled-components</code>, для написання CSS в JavaScript.
                        </p>
                        <pre>
                            {`import styled from 'styled-components';

                    const Button = styled.button\`
                    background-color: blue;
                    color: white;
                    padding: 10px;
                    \`;

                    <Button>Натисни мене</Button>`}
                        </pre>

                        <p className="font-semibold text-xm">7. Tailwind CSS</p>
                        <p>
                            Утилітарний CSS-фреймворк для швидкої розробки.
                        </p>
                        <pre>
                            {`<button className="bg-blue-500 text-white p-4">Натисни мене</button>`}
                        </pre>
        
                    </div>
                </div>;
                case 3:
                    return <div>
                        <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">СЕЛЕКТОРИ</p>
                        <p> У CSS є кілька ключових типів селекторів, які використовуються для вибору HTML-елементів
                         і застосування до них стилів. Вони допомагають налаштовувати зовнішній вигляд веб-сторінок,
                          роблячи їх естетичнішими та зручнішими у використанні. </p>

                        <p>  <span className="font-semibold text-xm">1. Селектор тегу</span>  — застосовується до всіх елементів певного типу, наприклад,
                        заголовків або абзаців. Використовується для глобального форматування елементів одного виду. </p>
                        <p> <span className="font-semibold text-xm">2. Селектор класу</span> — дозволяє вибирати всі елементи з певним класом. Це дає змогу
                        групувати елементи за спільними ознаками та застосовувати до них однакові стилі. </p>
                        <p> <span className="font-semibold text-xm">3. Селектор ідентифікатора</span> — використовується для вибору конкретного елемента
                        за його унікальним ID. Він підходить для стилізації одиничних елементів із особливим призначенням. </p>
                        <p> <span className="font-semibold text-xm">4. Селектор атрибута</span> — дозволяє вибирати елементи на основі їхніх атрибутів або значень
                        атрибутів, що забезпечує гнучке налаштування стилів. </p>
                        <p> <span className="font-semibold text-xm">5. Універсальний селектор</span> — охоплює всі елементи на сторінці. Його часто використовують
                        для скидання стандартних стилів. </p>
                        <p> <span className="font-semibold text-xm">6. Сусідній селектор</span> — вибирає елемент, що безпосередньо слідує за іншим елементом,
                        дозволяючи стилізувати лише ті елементи, які розташовані поруч. </p>
                        <p> <span className="font-semibold text-xm">7. Дочірній селектор</span> — застосовується до елементів, які є прямими дочірніми елементами
                        батьківського контейнера, забезпечуючи точкове налаштування вкладених структур. </p>
                        <p> <span className="font-semibold text-xm">8. Комбінований селектор</span> — дає змогу одночасно вибирати кілька різних елементів для
                        застосування однакових стилів, що сприяє скороченню коду та підвищенню його читабельності. </p>
                        </div>
                    
                    </div>;
                case 4:
                    return <div>
                        <div className="mb-4 mt-4">
                            <p className="font-semibold text-xl">Селектори тегу</p>
                            <p>
                            Код для селектора тегу:
                            </p>
                            <img src={assets.tag_code} alt="1"/>
                            
                            <p>
                                Інформація:
                            </p>
                            <p>
                            Селектори теги вибирають усі елементи певного тегу, для якого буде застосований певний стиль. Приклад: html – задає плавний скролінг
                            для всієї сторінки. ::-webkit-scrollbar – приховує прокрутку в браузерах на основі WebKit (Chrome, Safari).
                            </p>
                        </div>
                    </div>;
                case 5:
                    return <div>
                    <div className="mb-4 mt-4">
                    <p className="font-semibold text-xl">Селектори класу</p>
                    <p>
                        Код для селекторів класу:
                    </p>
                    <img src={assets.tag_class_code} alt="1"/>
                    <p>
                        Фото:
                    </p>
                    <img src={assets.tag_class_photo} alt="1"/>
                    <p>
                        Інформація:
                    </p>
                    <p>
                    Вибирають елементи з певним класом. Застосовується до всіх елементів із відповідним класом. У моєму випадку це кастомні класи,
                     які застосовують стилі до текстових елементів. Використовують директиву @apply з Tailwind CSS.
                    </p>
                    </div>
                </div>;
                case 6:
                    return <div>
                    <div className="mb-4 mt-4">
                    <p className="font-semibold text-xl">Селектори ідентифікаторів</p>
                    <p>
                        Код для селекторів ідентифікаторів:
                    </p>
                    <img src={assets.tag_identity_code} alt="1"/>
                    <p>
                        Фото:
                    </p>
                    <img src={assets.tag_identity_photo} alt="1"/>
                    <p>
                        Інформація:
                    </p>
                    <p>
                    Вибирають елемент із конкретним id. Та після цього застосовується до елемента з id="footer-text". Унікальний для сторінки.
                    </p>
                    </div>
                </div>;
                case 7:
                    return <div>
                        <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">Інші селектори</p>
                        <p className="font-semibold text-xm">
                        Селектори нащадків:
                    </p>
                    <p>
                        Код для селекторів нащадків:
                    </p>
                    <img src={assets.tag_descendant_code} alt="1"/>
                    <p>
                        Фото:
                    </p>
                    <img src={assets.tag_descendant_photo} alt="1"/>
                    <p>
                        Інформація:
                    </p>
                    <p>
                    .rich-text ol, .rich-text ul – задають стилі для списків усередині .rich-text.
                    .rich-text li – застосовується до пунктів списку.
                    </p>

                    <p className="font-semibold text-xm">
                        Комбіновані селектори:
                    </p>
                    <p>
                        Код для комбінованих селекторів:
                    </p>
                    <img src={assets.tag_combined_code} alt="1"/>
                    <p>
                        Фото:
                    </p>
                    <img src={assets.tag_combined_photo} alt="1"/>
                    <p>
                        Інформація:
                    </p>
                    <p>
                    .rich-text p – стилізує тільки у .rich-text.
                    .rich-text h1, .rich-text h2 і т. д. – задають стилі для заголовків усередині .rich-text.
                    </p>
                    </div>
                </div>;
                case 8:
                    return <div>
                        <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">CSS: Шрифти Текст Таблиці Фон Контур Списки СSS Просунутий </p>
                    
                    <p className="font-semibold text-xm">Шрифти</p>
                    
                    <p>
                        Код для шрифту в CSS:
                    </p>
                    <img src={assets.css_font_code} alt="1"/>
                    <p>
                        Шрифти в CSS налаштовують стиль тексту на веб-сторінках.
                    </p>

                    <p className="font-semibold text-xm">Текст</p>
                    
                    <p>
                        Код для тексту в CSS:
                    </p>
                    <img src={assets.css_text_code} alt="1"/>
                    <p>
                        Керує відображенням тексту.
                    </p>
                    
                    <p className="font-semibold text-xm">Таблиці</p>
                    
                    <p>
                        Код для таблиці в CSS:
                    </p>
                    <img src={assets.css_table_code} alt="1"/>
                    <p>
                        Властивості для стилізації HTML-таблиць. Цей CSS код працює напряму з таблицею
                         в якій він оголошений за допомогою Tailwind CSS. <br /> Це дозволяє гнучно використовувати стилі
                          у варіанті коли таблиця одна, і не має потреби вписувати усі стилі в index.css
                    </p>

                    <p className="font-semibold text-xm">Фон</p>
                    
                    <p>
                        Код для фону в CSS:
                    </p>
                    <img src={assets.css_bg_code} alt="1"/>
                    <p>
                    Встановлює фонові кольори, зображення та градієнти. Цей стиль також реалізований за допмогою Tailwind CSS <br />
                    на конкретному об'єкті, це дозволяє не повторювати вибрані стилі та додавати щось нове
                    </p>
                    <p className="font-semibold text-xm">Контур</p>
                    
                    <p>
                        Код для контуру в CSS:
                    </p>
                    <img src={assets.css_outline_code} alt="1"/>
                    <p>
                        Контур – це рамка, яка не впливає на розміри елемента.
                    </p>
                    
                    <p className="font-semibold text-xm">Списки</p>
                    
                    <p>
                        Код для списків в CSS:
                    </p>
                    <img src={assets.css_ul_code} alt="1"/>
                    <p>
                        Задає стиль для нумерованих <code>&lt;ol&gt;</code> і маркованих <code>&lt;ul&gt;</code> списків. Також заданий за допомогою
                         Tailwind CSS для гнучкої зміни або оновлення в майбутньому.
                    </p>
                    <p className="font-semibold text-xm">CSS Просунутий</p>
                    
                    <p>
                        Код для просунутого CSS:
                    </p>
                    <img src={assets.css_advanced_code} alt="1"/>
                    <p>
                    <code>&lt;@layer utilities&gt;</code> – використання кастомних утиліт у Tailwind CSS, що є сучасним підходом до стилізації.
                    Grid Layout потужний інструмент для створення адаптивних макетів. Використання <code>&lt;auto-fit&gt;</code> та
                     <code>&lt;minmax(200px, 1fr)&gt;</code> дозволяє
                     створити гнучку сітку, яка автоматично підлаштовується під розмір контейнера.
                     CSS-змінні  – дозволяють централізовано керувати стилями, що є хорошою практикою для масштабованих проєктів
                    </p>
                    </div>
                </div>;
                case 9:
                    return <div>
                        <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">ВИСНОВОК</p>
                    </div>
                    <p>
                        У ході виконання цієї лабораторної роботи було детально розглянуто та застосовано 
                        різні аспекти CSS, які є необхідними для стилізації веб-сторінок.
                    </p>

                    <p>
                        Було опрацьовано основні типи селекторів, такі як селектори тегів, класів, 
                        ідентифікаторів, а також більш складні конструкції, включаючи комбіновані селектори, 
                        псевдокласи та псевдоелементи. Це дозволяє точно налаштовувати стилі для елементів 
                        сторінки та покращувати їхню взаємодію з користувачем.
                    </p>
            
                    <p>
                        Було розглянуто різні способи підключення стилів, включаючи вбудовані стилі (inline styles), 
                        внутрішні (internal CSS), зовнішні файли (external CSS), імпорт через <code>@import</code>, 
                        використання CSS-модулів, Styled Components та утилітарних фреймворків, таких як Tailwind CSS. 
                        Це дає змогу обирати оптимальний підхід для конкретного проєкту.
                    </p>

                    <p>
                        Вивчено та застосовано стилізацію шрифтів, тексту, таблиць, фону, контуру та списків. 
                        Особливу увагу було приділено використанню змінних CSS, адаптивного дизайну та сучасних 
                        технік оформлення.
                    </p>

                    <p>
                        Було опрацьовано сучасні технології, такі як CSS Grid та Flexbox для адаптивного макету, 
                        використання анімацій <code>@keyframes</code>, медіа-запитів для адаптації контенту 
                        під різні пристрої, а також застосування CSS-змінних для поліпшення підтримуваності стилів.
                    </p>

                    <p>
                        Виконання цієї лабораторної роботи дозволило глибше зрозуміти можливості CSS та його застосування 
                        у веб-розробці. Отримані знання сприяють створенню стильних, адаптивних і структурованих веб-інтерфейсів, 
                        що є важливим кроком у професійному розвитку веб-розробника.
                    </p>
                </div>;
                default:
                    return <div>Виберіть розділ</div>;

        }
    }

    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 2</h1>
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

export default Laboratorna2
