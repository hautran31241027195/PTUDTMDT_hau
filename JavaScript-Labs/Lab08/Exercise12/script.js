/* Bài mở rộng (file exercise.html trong bộ Lab 08): thay các danh sách HTML cố định
   bằng lời gọi hàm, dữ liệu lấy từ travel-data.js (continents, countries, posts). */

function outputContinents() {
    var html = '<ul class="list-group">';
    for (var i = 0; i < continents.length; i++) {
        html += '<li class="list-group-item"><a href="#">' + continents[i] + '</a></li>';
    }
    document.write(html + '</ul>');
}

function outputCountries(activeCountry) {
    var html = '<ul class="list-group">';
    for (var i = 0; i < countries.length; i++) {
        if (countries[i] === activeCountry)
            html += '<li class="list-group-item active">' + countries[i] + '</li>';
        else
            html += '<li class="list-group-item"><a href="#">' + countries[i] + '</a></li>';
    }
    document.write(html + '</ul>');
}

function outputPost(post) {
    var html = '<div class="row">';
    html += '<div class="col-md-2"><a href="#"><img src="../images/travel/' + post.thumb +
            '" alt="' + post.title + '" class="img-thumbnail"/></a></div>';
    html += '<div class="col-md-10"><h2>' + post.title + '</h2>';
    html += '<div class="details">Posted by ' + post.user +
            '<span class="pull-right">' + post.postdate + '</span></div>';
    html += '<p class="excerpt">' + post.excerpt + '</p>';
    html += '<p><a href="#" class="btn btn-primary btn-sm">Read more</a></p></div></div><hr/>';
    document.write(html);
}

function outputPosts() {
    for (var i = 0; i < posts.length; i++) outputPost(posts[i]);
}

function outputPagination(total, current) {
    var html = '<ul class="pagination"><li><a href="#">&laquo;</a></li>';
    for (var i = 1; i <= total; i++) {
        html += (i === current) ? '<li class="active"><a href="#">' + i + '</a></li>'
                                : '<li><a href="#">' + i + '</a></li>';
    }
    document.write(html + '<li><a href="#">&raquo;</a></li></ul>');
}
