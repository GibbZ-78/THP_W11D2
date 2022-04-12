/****************************
 *                          *
 *  Coded with love by JBV  *
 *         for the          *
 *    THP W22 Developer     *
 *       curriculum         *
 *                          *
 ****************************/

console.log("CA moyen par utilisateur(trice).")
let myTotalTurnover = 0;
let myProfitableUsers = 0;
// W11D1 old code using "forEach", replaced by "map"
// users.forEach(element => {
users.map(element => {
  myTotalTurnover += element.revenue;
  if (element.revenue > 0) myProfitableUsers += 1;
});
let myAverageTurnover = (myTotalTurnover / 100.00 / users.length).toFixed(2);
console.log(`  > CA moyen par tête : ${myAverageTurnover} €.`);


let myPercentage = (myProfitableUsers / users.length * 100).toFixed(2);
console.log("Pourcentage du fichier client ayant rapporté de l'argent (revenue > 0)");
console.log(`  > Pourcentage de clients payants : ${myPercentage}%.`);


let myActualTurnover = (myTotalTurnover / myProfitableUsers / 100).toFixed(2);
console.log("CA moyen sur les clients payants:");
console.log(`  > CA moyen : ${myActualTurnover} €.`);
console.log(`CA total ${(myTotalTurnover/100).toFixed(2)} sur ${users.length} clients.`);


nbrFrenchUsers = users.filter(x => x.country == "France").length;
console.log("Nombre de clients français : " + nbrFrenchUsers);


nbrFrenchPofitableUsers = users.filter(x => (x.country == "France" && x.revenue > 0)).length;
console.log("Nombre de clients français payants: " + nbrFrenchPofitableUsers );


console.log("Répartition du CA sur chacun des 4 grands pays clients :");
let myTurnoverTop4 = {total:0, fr:0, de:0, gb:0, us:0};
// W11D1 old code using "forEach", replaced by "map"
//users.forEach(client => {
users.map(client => {
  switch (client.country) {
    case "France":
      myTurnoverTop4.total += client.revenue;
      myTurnoverTop4.fr += client.revenue;
      break;
    case "Germany":
      myTurnoverTop4.total += client.revenue;
      myTurnoverTop4.de += client.revenue;
      break;
    case "Great Britain":
      myTurnoverTop4.total += client.revenue;
      myTurnoverTop4.gb += client.revenue;
      break;
    case "United States":
      myTurnoverTop4.total += client.revenue;
      myTurnoverTop4.us += client.revenue;
      break;
  }
});
console.log("  > CA total sur les 4 pays: " + myTurnoverTop4.total/100 + "€.");
console.log("  > CA total sur la France: " + myTurnoverTop4.fr/100 + "€.");
console.log("  > CA total sur l'Allemagne: " + myTurnoverTop4.de/100 + "€.");
console.log("  > CA total sur la Grande Bretagne: " + myTurnoverTop4.gb/100 + "€.");
console.log("  > CA total sur les Etats-Unis: " + myTurnoverTop4.us/100 + "€.");


let myProfitableCountries = [];
// W11D1 old code using "forEach", replaced by "map"
//users.forEach(client => {
users.map(client => {
  if (client.revenue >0) {
    myCountryIndex = myProfitableCountries.findIndex(([x,y]) => {
      return x == client.country;
    });
    if ( myCountryIndex != -1) { 
      myProfitableCountries[myCountryIndex][1] += client.revenue / 100;
    } else {
      myProfitableCountries.push([client.country, client.revenue / 100]);
    }
  }
});
let myNiceFinalTable = myProfitableCountries.sort(([a,b],[c,d]) => { return (b > d ? 1 : (b <= d ? -1 : 0)); }).reverse();
console.log("Tableau des pays profitables classés par ordre de CA décroissant et en mode 'zoli tableau':");
console.table(myNiceFinalTable);
console.log("Tableau des 5 utilisateurs ayant généré le plus gros CA:");
myTop5Users = users.sort((user1, user2) => { return (user1.revenue > user2.revenue ? 1 : (user1.revenue <= user2.revenue ? -1 : 0))}).reverse().slice(0,5);
console.table(myTop5Users);


console.log("Tableau du CA par genre :");
let myProfitbySex = [{female:0,male:0,other:0}];
// W11D1 old code using "forEach", replaced by "map"
//users.forEach(client => {
users.map(client => {
  switch (client.sex) {
    case "F":
      myProfitbySex[0].female += client.revenue;
    break;
    case "M":
      myProfitbySex[0].male += client.revenue;
    break;
    default:
      myProfitbySex[0].other += client.revenue;
    break;
  }
});
myProfitbySex[0].female /= 100;
myProfitbySex[0].male /= 100;
myProfitbySex[0].other /= 100;
console.table(myProfitbySex);


console.log("Liste des clients ayant rapporté plus de 75€ (strictement) :");
console.table(users.filter(client => client.revenue > 7500));


console.log("Nombre de clients payants parmi les 100 premiers de la liste 'users':");
my1st100clients = users.slice(0,100);
myProfitable100clients = 0;
// W11D1 old code using "forEach", replaced by "map"
//my1st100clients.forEach(client => {
my1st100clients.map(client => {
  if (client.revenue > 0) myProfitable100clients += 1;
});
console.log(`  > Résultat: ${myProfitable100clients}`);

/*****************
 *  End of code  *
 *****************/