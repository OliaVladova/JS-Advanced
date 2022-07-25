class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { picture: 200, photo: 50, item: 250 };
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle(articleModel, articleName, quantity) {
        let model = articleModel.toLowerCase();
        if (model !== 'picture' && model !== 'photo' && model !== 'item') {
            throw new Error('This article model is not included in this gallery!');
        }
        let isHere = false;
        for (const article of this.listOfArticles) {
            if (article.articleName === articleName && article.model === articleModel) {
                isHere = true;
                article.quantity += quantity;
                break;
            }

        }
        if (!isHere) {
            let article = {
                model,
                articleName,
                quantity
            };
            this.listOfArticles.push(article);
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }
    inviteGuest(guestName, personality) {
        let isHere = this.guests.find(person => person.guestName === guestName);
        if (isHere) {
            throw new Error(`${guestName} has already been invited.`);
        } else {
            let person = {
                guestName,
                points: 0,
                purchaseArticle: 0
            };
            if (personality === "Vip") {
                person.points = 500;
            } else if (personality === "Middle") {
                person.points = 250;
            }
            this.guests.push(person);
        }
        return `You have successfully invited ${guestName}!`;
    }
    buyArticle(articleModel, articleName, guestName) {
        let isHere = this.listOfArticles.find(article => article.articleName === articleName);
        if (!isHere || isHere.model !== articleModel) {
            throw new Error("This article is not found.");
        }
        if (isHere.quantity === 0) {
            return `The ${articleName} is not available.`;
        }
        let isGuestPresent = this.guests.find(person => person.guestName === guestName);
        if (!isGuestPresent) {
            return "This guest is not invited.";
        } else {
            let pointsToBuy = this.possibleArticles[articleModel];
            if (isGuestPresent.points < pointsToBuy) {
                return "You need to more points to purchase the article.";
            }
            isGuestPresent.points -= pointsToBuy;
            isHere.quantity--;
            isGuestPresent.purchaseArticle++;
            return `${guestName} successfully purchased the article worth ${pointsToBuy} points.`;
        }
    }
    showGalleryInfo(criteria) {
        let info = [];

        if (criteria == 'article') {
            info.push('Articles information:');
            this.listOfArticles.forEach(a => info.push(`${a.model} - ${a.articleName} - ${a.quantity}`));

        } else if (criteria == 'guest') {
            info.push('Guests information:');
            this.guests.forEach(g => info.push(`${g.guestName} - ${g.purchaseArticle}`));
        }

        return info.join('\n');
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));



