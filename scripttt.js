// Function to fetch data from JSONPlaceholder API
function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayData(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

// Function to display fetched data in the HTML
function displayData(data) {
  const dataContainer = document.getElementById("data");
  data.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
    dataContainer.appendChild(postElement);
  });
}

// Fetch data when the script loads
fetchData();
