async function index (req, res, next) {
    res.render("book_table/book_table");
}

module.exports = {
    index
}