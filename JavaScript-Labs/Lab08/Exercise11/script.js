/* Exercise 8.11 – Arrays of Objects */

// constructor function cho đối tượng Country
function Country(name, iso, capital, population) {
    this.name = name;
    this.iso = iso;
    this.capital = capital;
    this.population = population;
}

// mảng các đối tượng Country
var countries = [
    new Country("Bahamas", "BS", "Nassau", 301790),
    new Country("Canada", "CA", "Ottawa", 33679000),
    new Country("Germany", "DE", "Berlin", 81802257)
];

// hoặc push từng đối tượng vào cuối mảng
countries.push(new Country("Spain", "ES", "Madrid", 46505963));
countries.push(new Country("United Kingdom", "GB", "London", 62348447));

/* Bước 1-4 (chỉ in tên): countries[i].name  →  biến tạm c.name  →  c["name"]  →  c[temp]
   Bước 5 (phiên bản cuối): dùng for..in để duyệt mọi thuộc tính của đối tượng */
for (i = 0; i < countries.length; i++) {
    var c = countries[i];
    document.write("<div class='box'>");
    document.write("<img src='../flags/" + c.iso + ".png' class='boxImg'>");
    for (var propertyName in c) {
        document.write("<strong>");
        document.write(propertyName + ": ");
        document.write("</strong>");
        document.write(c[propertyName]);
        document.write("<br>");
    }
    document.write("</div>");
}
