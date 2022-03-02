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
searchResults.innerHTML = '';
phones.forEach(phone => {
    // console.log(phone);
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
    <div onclick="showPhoneDetail(${phone.mainFeatures})" class="card h-100">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phone.brand}</h5>
              <p class="card-text">${phone.phone_name}</p>
              <a href="" class="btn btn-primary">Details</a>
            </div>
          </div>
    `;
    searchResults.appendChild(div);
})
}

const showPhoneDetail = id => {
    // console.log(id)
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data.data))
}

const displayDetails = phone => {
    // console.log(phone)
    const phoneDetails = document.getElementById('phone-details')
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <div class="card-body">
        <h5 class="card-title">${phone.releaseDate}</h5>
        <p class="card-text">${phone.sensors}</p>
    </div>     
    `;
    phoneDetails.appendChild(div);
}