//Forms 
const descriptionForm = document.querySelector('.description-form');
const imageForm = document.querySelector('.image-form');

//Output Elements
const description = document.querySelector('.description p');
const tags = document.querySelector('tags p');
const thumbnail = document.querySelector('.thumbnail img');

//Description
descriptionForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const res = await fetch('/openai/description', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: descriptionForm.title.value}),
    });

    const data = await res.json();

    console.log(data);

    description.textContent = data.description.content;
})

//Image Thumbnail
imageForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const res = await fetch('/openai/image', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({prompt: imageForm.prompt.value}),
    });

    const data = await res.json();

    console.log(data);

    thumbnail.setAttribute('src', data.url);
})