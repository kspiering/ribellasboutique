getData();
async function getData() {
  const response = await fetch("/js/dummy.json");
  const data = await response.json();
  console.log(data);
  displayPost(data);
}

function displayPost(data) {
  data.forEach((blogPost) => {
    const div = document.createElement("div");
    div.classList.add("blogPost");
    const template = `
       
            <p id="titel">${blogPost.title}</p>
            <p id="subtitle"> ${blogPost.subtitle} </p>
            <p id="location">${blogPost.location} ${blogPost.date} </p>
            <p id="text"> ${blogPost.text} </p>
            <img src="${blogPost.image}">
            <p id="tags">#${blogPost.tags} </p>
        
        `;

    div.innerHTML = template;
    document.querySelector(".blogPost").appendChild(div);
  });
}
