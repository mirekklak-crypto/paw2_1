(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

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

    });


  cw2.addEventListener("click", function () {
    //TODO
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
