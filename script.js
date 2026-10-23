async function test() {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1/comments",
      {
        method: "GET",
      },
    );
    const comments = await res.json();
    if (res.ok) {
      return JSON.stringify(comments.filter((c) => c.id === 1));
    }
    return "Some Error Occured! Click Again";
  } catch (error) {
    console.error(error);
    return "Some Error Occured in catch block! Click Again";
  }
}

const button = document.getElementById("click-btn");

button.addEventListener("click", async () => {
  button.innerText = "Loading...";
  const text = await test();
  button.innerText = text;
});
