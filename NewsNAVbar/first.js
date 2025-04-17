
const API_kEY = "3c8b097da8614abd80ca184056d8bd4c";
const url ="https://newsapi.org/v2/everything?q=";


window.addEventListener('load', () => fetchnews("India"));

async function fetchnews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_kEY}`);
    const data = await res.json();
    // console.log(data);
    bindData(data.articles);
}

function bindData(articles){
    const cardcontainer = document.getElementById('card-container');
    const newscardtemplate = document.getElementById('template-news-card');

    cardcontainer.innerHTML="";

    articles.forEach(article => {
        if(!article.urlToImage) return;
        const cardclone = newscardtemplate.content.cloneNode(true);
        filldataincard(cardclone,article);
        cardcontainer.appendChild(cardclone);
        
    });
}

function filldataincard(cardclone,artical) {
    const newsImg = cardclone.querySelector('#news-Img') ;
    const newstitle = cardclone.querySelector('#news-title') ;
    // const newssourse = cardclone.querySelector('#news-source') ;
    const newssource = cardclone.querySelector('#news-source'); 
    const newsdesc = cardclone.querySelector('#news-desc') ;

    newsImg.src = artical.urlToImage;
    newstitle.innerHTML = artical.title;
    newsdesc.innerHTML = artical.description;

    const date = new Date(artical.publishedAt).tolocalstring("en-US",{
        timeZone: "Asia/jakarta"
    });

    newsource.innerHTML = `${artical.source.name} . ${date}`;
}