/****************************
 *                          *
 *  Coded with love by JBV  *
 *         for the          *
 *    THP W22 Developer     *
 *       curriculum         *
 *                          *
 ****************************/

 const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'L\'ami retrouvé', id: 777, rented: 0 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Liste de tous les livres de la bibliothèque [forEach replaced by map].");
// W11D1 old code using "forEach", replaced by "map"
// books.forEach(myBook => {
books.map(myBook => {
  console.log(`  > Réf.: ${myBook.id} - Titre: '${myBook.title}' has been lent ${myBook.rented} time(s).`);
});

console.log("Test de l'emprunt (au moins 1 fois) de tous les livres [Every].");
myTest = books.every(myBook => myBook.rented > 0);
myTest ? console.log("Tous les livres ont bien été empruntés.") : console.log("1 livre au moins n'a jamais été emprunté");

console.log("Affichage du livre le plus emprunté et livre le moins emprunté [Sort (with ternary function, not trivial !)].");
myBooks = books.sort((a, b) => { return (a.rented > b.rented ? 1 : (a.rented <= b.rented ? -1 : 0)); });
console.log (`The LESS rented book is: '${myBooks[0].title}'.`);
console.log (`The MOST rented book is: '${myBooks.at(-1).title}'.`);

console.log("Suppressiondu livre dont l'ID est 133712 [Splice].");
console.log("Affichage AVANT suppression.");
console.table(books);
console.log("Affichage APRES suppression.");
books.splice(books.findIndex(my_hash => {return my_hash.id == 133712}), 1);
console.table(books);

/*****************
 *  End of code  *
 *****************/