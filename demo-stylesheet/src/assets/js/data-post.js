$(document).ready(function () {
  const article = [
    {
      title: 'Apa sih kelebihan Bahasa JavaScript?',
      content:
        'Javascript merupakan salah satu bahasa pemrograman yang cukup banyak digunakan oleh...',
      category: 'Javascript',
      classCategory: 'javascript',
      image: 'post-1.jpg',
      date: 'Feb 26, 2021',
      link: 'pages/post-01.html',
    },
    {
      title: 'UI Design untuk kalian para Pemula',
      content:
        'UI Designer diharapkan mampu membuat tampilan (interface) yang mudah digunakan oleh...',
      category: 'UI / UX Design',
      classCategory: 'uidesign',
      image: 'post-2.jpg',
      date: 'Feb 27, 2021',
      link: 'pages/post-02.html',
    },
    {
      title: 'Bahasa Phyton cocok untuk membuat apa?',
      content:
        'Javascript merupakan salah satu bahasa pemrograman yang cukup banyak digunakan oleh...',
      category: 'Phyton',
      classCategory: 'phyton',
      image: 'post-3.jpg',
      date: 'Feb 28, 2021',
      link: 'pages/post-03.html',
    },
    {
      title: 'Perbedaan Phyton dengan PHP',
      content:
        'Javascript merupakan salah satu bahasa pemrograman yang cukup banyak digunakan oleh...',
      category: 'Phyton',
      classCategory: 'phyton',
      image: 'post-4.jpg',
      date: 'Feb 29, 2021',
      link: 'pages/post-04.html',
    },
    {
      title: 'UI Design sama dengan UI Experience?',
      content:
        'Kata UI UX pasti sering kamu dengar, apalagi ketika kamu membuka portal lowongan pekerjaa...',
      category: 'UI / UX Design',
      classCategory: 'uidesign',
      image: 'post-5.jpg',
      date: 'Feb 30, 2021',
      link: 'pages/post-05.html',
    },
    {
      title: 'Apa Javascript untuk semua Platform?',
      content:
        'Javascript merupakan salah satu bahasa pemrograman yang cukup banyak digunakan oleh...',
      category: 'JavaScript',
      classCategory: 'javascript',
      image: 'post-6.jpg',
      date: 'Feb 31, 2021',
      link: 'pages/post-06.html',
    },
  ];

  for (let i = 0; i < article.length; i++) {
    const postPreviewTemplate = `
         <div class="item-filter ${article[i].classCategory} col-12 col-md-12 col-lg-4">
            <div class="card">
               <div class="card-img">
                  <img src="./img/${article[i].image}" style="height: 100%;" class="card-img-top" alt="${article[i].altImage}">
               </div>
               <div class="card-body">
                  <div class="card-publis mb-2 d-flex justify-content-between" style="font-size: 10px;">
                     <span class="text-uppercase border px-1 text-dark border-secondary">${article[i].category}</span>
                     <span class="text-secondary">${article[i].date}</span>
                  </div>
                  <a href="${article[i].link}" class="text-decoration-none">
                     <h5 class="card-title text-dark">${article[i].title}</h5>
                  </a>
                  <p class="card-text text-dark">${article[i].content}</p>
               </div>
            </div>
         </div>
      `;
    $('.article-container').append(postPreviewTemplate);
  }
});
