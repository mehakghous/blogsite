var blogContainer = document.getElementById("blog-container");

const blogs = getBlogs();

function renderBlog() {
    blogContainer.innerHTML = "";
    for (let i = 0; i < blogs.length; i++) {
        blogContainer.innerHTML += `<div class='font-serif bg-gray-100 my-10'>
        <img src='${blogs[i].imgSrc}' class="w-full object-cover "/>
        <h1 class=' tracking-tighter text-ellipses uppercase text-2xl md:text-5xl p-5'>
        ${blogs[i].title}
        </h1>
        <span class='text-yellow-600 md:text-2xl font-bold p-5'>${blogs[i].date}</span>
        <div class=' p-5 normal-case  '>${blogs[i].description}</div>
        </div>
        
        `
    }
}
renderBlog();

function getBlogs() {
    return JSON.parse(localStorage.getItem("Blogs") || "[]");
}