/* Exercise 8.5 – Using the Browser Console
   (Bước 4 của đề: cố tình viết sai "doccumment.write(...)" → Console báo
    "doccumment is not defined". Đã sửa lại đúng chính tả bên dưới.) */
document.write("this text was written from JS");
var count = 1;
document.write(" Count = " + count);

count++;
var output = "<br>Count = " + count;
document.write(output);

/* Gõ thử trong Console:  count   output   var temp = count * 7;   temp  (=14) */
