
/**
 Use the two url's shown below to retrieve the strings they return and after they both complete,
 concatenate both strings in the correct order with a space in between and display the result.
 http://cdn.gfkdaphne.com/tests/async.php?a=1
 http://cdn.gfkdaphne.com/tests/async.php?a=2
**/

export function fetchTest() {
    const URLS = ["https://cdn.gfkdaphne.com/tests/async.php?a=1",
            "https://cdn.gfkdaphne.com/tests/async.php?a=2"];

    Promise.all(URLS.map(url => fetch(url).then(resp => resp.text())))
        .then(texts => {
            const result = `${texts[0]} ${texts[1]}`;
            console.log('result', result);
            document.getElementById('fetchTest').innerHTML = result;
        });
};