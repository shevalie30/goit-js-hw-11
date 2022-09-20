const API_KEY = '29955963-b04268d9c12b8d39019829a10';
const URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent('red roses');
$.getJSON(URL, function (data) {
    if (parseInt(data.totalHits) > 0)
        $.each(data.hits, function (i, hit) { console.log(hit.pageURL); });
    else
        console.log('No hits');
});