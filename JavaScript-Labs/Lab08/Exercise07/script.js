/* Exercise 8.7 – Arrays */
var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");
//document.write(daysOfWeek + "<br>");

daysOfWeek.push("Sat");        // thêm vào cuối
//document.write(daysOfWeek + "<br/>");

daysOfWeek.unshift("Sun");     // thêm vào đầu
//document.write(daysOfWeek + "<br/>");

// Hàng tiêu đề: tên thứ; chữ dài hơn 3 ký tự (Tues, Thur) in nghiêng
document.write("<table border=1>");
document.write("<tr>");
for (var i = 0; i < daysOfWeek.length; i++) {
    var day;
    if (daysOfWeek[i].length < 4)
        day = daysOfWeek[i];
    else
        day = "<em>" + daysOfWeek[i] + "</em>";
    document.write("<th>" + day + "</th>");
}
document.write("</tr>");

// Các hàng ngày 1..30, giả sử tháng bắt đầu vào Chủ nhật
var dayNumber = 1;
while (dayNumber <= 30) {
    document.write("<tr>");
    for (var col = 0; col < daysOfWeek.length; col++) {
        if (dayNumber <= 30)
            document.write("<td>" + dayNumber + "</td>");
        else
            document.write("<td></td>");   // ô trống cuối tháng
        dayNumber++;
    }
    document.write("</tr>");
}
document.write("</table>");
