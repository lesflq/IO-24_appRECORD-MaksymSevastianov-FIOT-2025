//Task1
const images = [
    {
        preview: 'https://picsum.photos/id/900/300/200',
        original: 'https://picsum.photos/id/900/1200/800',
        description: 'Міст над водою',
    },
    {
        preview: 'https://picsum.photos/id/901/300/200',
        original: 'https://picsum.photos/id/901/1200/800',
        description: 'Північне сяйво',
    },
    {
        preview: 'https://picsum.photos/id/902/300/200',
        original: 'https://picsum.photos/id/902/1200/800',
        description: 'Хмари у горах',
    },
    {
        preview: 'https://picsum.photos/id/903/300/200',
        original: 'https://picsum.photos/id/903/1200/800',
        description: 'Зорі на небі',
    },
    {
        preview: 'https://picsum.photos/id/904/300/200',
        original: 'https://picsum.photos/id/904/1200/800',
        description: 'Скейт майданчик',
    },
    {
        preview: 'https://picsum.photos/id/905/300/200',
        original: 'https://picsum.photos/id/905/1200/800',
        description: 'Озеро у горах',
    },
    {
        preview: 'https://picsum.photos/id/906/300/200',
        original: 'https://picsum.photos/id/906/1200/800',
        description: 'Скеля',
    },
    {
        preview: 'https://picsum.photos/id/907/300/200',
        original: 'https://picsum.photos/id/907/1200/800',
        description: 'Льодяне море',
    },
    {
        preview: 'https://picsum.photos/id/908/300/200',
        original: 'https://picsum.photos/id/908/1200/800',
        description: 'Сніг у горах',
    },
];

const galleryEl = document.querySelector('.gallery');
const markup = images
    .map(({ preview, original, description }) => {
        return `
        <li class="gallery-item">
          <img
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </li>
      `;
    })
    .join('');
galleryEl.innerHTML = markup;

galleryEl.addEventListener('click', (event) => {
    event.preventDefault();

    const target = event.target;
    if (target.nodeName !== 'IMG') return;

    const largeImageURL = target.dataset.source;
    const description = target.alt;

    const instance = basicLightbox.create(`
      <img src="${largeImageURL}" alt="${description}" />
      <p style="color: white; text-align: center; margin-top: 10px;">${description}</p>
    `);

    instance.show();
});
//Task2
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;

const STORAGE_KEY = 'feedback-form-state';

let formData = {
    email: '',
    message: ''
};

// Завантажити дані з localStorage при старті
loadFormData();

// Делегування: onInput
form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Сабміт
form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (formData.email.trim() === '' || formData.message.trim() === '') {
        alert('Fill please all fields');
        return;
    }

    console.log('Form submitted:', formData);

    // Очистити все
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: '', message: '' };
});

// Відновити дані з локального сховища
function loadFormData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        formData = JSON.parse(savedData);
        emailInput.value = formData.email || '';
        messageTextarea.value = formData.message || '';
    }
}
