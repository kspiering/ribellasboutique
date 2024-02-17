getData();

async function getData() {
  try {
    const response = await fetch("../json/dummy.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    displayPost(data);
  } catch (error) {
    console.error("Could not fetch the data: ", error.message);
  }
}

function displayPost(data) {
  const container = document.querySelector(".blogPost");
  data.forEach((blogPost) => {
    const div = document.createElement("div");
    div.classList.add("blogPost");
    const template = `
       
            <h2 id="titel">${blogPost.title}</h2>
            <h3 id="subtitle"> ${blogPost.subtitle} </h3>
            <p id="location">${blogPost.location} ${blogPost.date} </p>
            <img src="${blogPost.image}">
            <p id="tags">#${blogPost.tags} </p>
            <p id="text"> ${blogPost.text} </p>
        
        `;

    div.innerHTML = template;
    container.appendChild(div);
  });
}
