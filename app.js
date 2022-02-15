const centerdiv = document.getElementById("centerdiv");
let url = "https://jsonplaceholder.typicode.com/photos?_limit=100";
fetch(url).then((apidata) => {
    return apidata.json();
}).then((mydatainjson) => {
    mydatainjson.map((val) => {
        key = val.id;
        let img = document.createElement("img");
        img.src = `https://picsum.photos/200/300?random=${val.id}`;
        centerdiv.appendChild(img);
        console.log(val.url);
    })
    // console.log(mydatainjson);
})