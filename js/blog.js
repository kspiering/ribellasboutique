getData();
async function getData() {
  const response = await fetch("/js/dummy.json");
  const data = await response.json();
  console.log(data);
}

function displayPost(data) {
  data.forEach((post) => {
    const template = `
        <ul>
            <li> Title</li>
            <li> Subtitle</li>
            <li> Location</li> <li> Date</li>
            <li> Image</li>
            <li> Text</li>
            <li> Tags</li>
        </ul>
        `;
  });
}
