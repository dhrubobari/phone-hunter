const searchPhone = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    searchText.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data))
}

const displaySearchResult = phones => {
    // console.log(phones)
const searchResults = document.getElementById('search-result')
phones.forEach(phone => {
    console.log(phone);
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
    <div class="card h-100">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phone.brand}</h5>
              <p class="card-text">${phone.phone_name}</p>
              <p class="card-text">${phone.slug}</p>
              <a href="#" class="btn btn-primary">Details</a>
            </div>
          </div>
    `;
    searchResults.appendChild(div);
})
}