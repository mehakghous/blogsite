const blogs = getBlogs();
// const img = document.getElementById('show-case')

function addBlog(form) {
    var formData = new FormData(form);
    // var check = !formData.get("title") || !formData.get("description") || !formData.get("date") || !formData.get("image");
    // if (check) {
    //     alert("please fill input");
    //     return;
    // }
    const blog = {
        title: formData.get("title"),
        description: formData.get("description"),
        imgSrc: formData.get("image"),
        date:formData.get("date"),
    }
    // img.src = blog.imgSrc
    blogs.push(blog);
    form.reset();
    setBlogs();
    window.location.href = "index.html"

}



function getBlogs() {
    return JSON.parse(localStorage.getItem("Blogs") || "[]");
}

function setBlogs() {
    localStorage.setItem("Blogs", JSON.stringify(blogs));
}


