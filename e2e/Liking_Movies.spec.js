Feature('Liking Movies');

Before((I) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked movies', (I) => {
  I.seeElement('#query');

  I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');
});

Scenario('liking one movie', (I) => {
  I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.movie__title a',2);
  I.seeElement('.movie__title a');
  I.click(locate('.movie__title a').first());

  I.waitForElement('#likeButton',2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.waitForElement('.movie-item',2);
  I.seeElement('.movie-item');
});