


/*--------fetch-api---*/

let xhr = new XMLHttpRequest();

// API FETCH
xhr.open('GET', "https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json", true);

// http://covid19-india-adhikansh.herokuapp.com/states
// REQUEST SEND
xhr.send();

xhr.onload = () => {
    if (xhr.status === 200){
        let book = xhr.responseText;
        let datas = JSON.parse(book);
        displayCard(datas)
        console.log(data)

    }};

function displayCard(datas) {
    let htmlTemplate = ``;
    for (data of datas) {
        htmlTemplate+= ` <div class="container"
        <div class="card" style="width: 23rem;">
        <p class="lead font-small card-header" style="font-size: 12px"><span>TITLE</span>: ${data.title}</p>
        <div class="card-body" style="text-align: justify">
        <p class="lead" style="font-size: 12px; color: black; text-align: justify"><span>AUTHOR</span>: ${data.authors}</p>
        <p class="lead" style="font-size: 12px; color: black; text-align: justify"><span>BOOK-ID</span>: ${data.bookID}</p>
        <p class="lead" style="font-size: 12px; color: black; text-align: justify"><span>ISBN</span>: ${data.isbn}</p>
        <p class="lead" style="font-size: 12px; color: black; text-align: justify"><span>LANGUAGE-CODE</span>: ${data.language_code}</p>
        <p class="lead" style="font-size: 12px; color: black; text-align: justify"><span>AVERAGE-RATING</span>: ${data.average_rating}</p>
        <p class="lead" style="font-size: 12px; color: black; text-align: justify"><span>Rating-COUNT</span>: ${data.ratings_count}</p>
        <p class="lead" style="font-size: 12px; color: black; text-align: justify"><span>PRICE</span>: ${data.price}</p>
        <button type="submit" class="btn btn-primary">Buy now</button>
</div>
</div>
       </div>`

    }
    let container = document.querySelector('#rows');
    container.innerHTML = htmlTemplate;

}