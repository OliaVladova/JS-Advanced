function getArticleGenerator(articles) {
    let div = document.getElementById('content');
    let index = 0;

    return () => {
        if (index < articles.length) {
            let text = articles[index];
            let article = document.createElement('article');
            article.textContent = text;
            div.appendChild(article);
            index++;
        }
    };
}
