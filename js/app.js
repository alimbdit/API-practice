const getData = () => {
    const URL = 'https://jsonplaceholder.typicode.com/photos';
    fetch(URL).then(res => res.json()).then(data => showData(data))
}

const showData = (datas) => {
    console.log(datas[0]);
    console.log(datas[1].thumbnailUrl);
    const cardContainer = document.getElementById('card-container');
    datas.slice(0, 10).forEach(data => {
        console.log(data);
        const div = document.createElement('div');
        div.classList.add('card', 'm-2');
        div.innerHTML = `
        <img class="p-4" onclick= "detailsPhoto(${data.id})" src="${data.thumbnailUrl
        }" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.title
          }</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        `;
        cardContainer.appendChild(div);
    })
}

const detailsPhoto = (id) => {
    const URL = `https://jsonplaceholder.typicode.com/photos/${id}`;
    fetch(URL).then(res => res.json()).then(data => console.log(data))
}
getData();