(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')
  const postIdSelect = document.getElementById('post-id-select'); 

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

cw1.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        const listItems = posts
          .map(post => `
            <li>
              <strong>${post.title}</strong>
              <p>${post.body}</p>
            </li>
          `)
          .join('');

        answer.innerHTML = `<ul>${listItems}</ul>`;
      });
  });


cw1_2.addEventListener("click", function () {
    answer.innerHTML = "Loading...";

    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
          const listItems = posts
            .map(post => `
              <li>
                <strong>${post.title}</strong>
                <p>${post.body}</p>
              </li>
            `)
            .join('');

          answer.innerHTML = `<ul>${listItems}</ul>`;
        });
    },1000);

    })

cw1_3.addEventListener("click", function () {
  const selectedId = postIdSelect.value;
  
  fetch(`https://jsonplaceholder.typicode.com/posts?id=${selectedId}`)
    .then(response => response.json())
    .then(posts => {
      const post = posts[0];
      
      if (post) {
        answer.innerHTML = `
          <ul>
            <li>
              <strong>[ID: ${post.id}] ${post.title}</strong>
              <p>${post.body}</p>
            </li>
          </ul>
        `;
      }
    });
})
  



cw2.addEventListener("click", function () {
  answer.textContent = "Processing...";

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Przykładowy tytuł',
      body: 'Treść nowego posta',
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(data => {
      answer.textContent = `Dodano nowy post o ID = ${data.id}`;
    })
    .catch(error => {
      answer.textContent = "Wystąpił błąd podczas dodawania posta.";
      console.error(error);
    });
})

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
