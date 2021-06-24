import imagePost from '../assets/img/post-1.jpg'

const Popular = (props) => {
   return (
      <div className="popular-post container">
         <h2 className="h5 mb-3">Popular</h2>
         <div className="row">
            <div className="col-12 col-lg-6">
               <div className="card border-0 shadow-none">
                  <img src={imagePost} alt="Post" />
               </div>
            </div>
            <div className="popular-body col-12 col-lg-6 py-3">
               <div>
                  <span className="category d-block  mb-3 text-uppercase px-1 text-dark">JavaScript</span>
                  <a className="text-decoration-none text-dark" href="./pages/post-01.html">
                     <h1 className="mb-3 popular-title">Apa sih kelebihan Bahasa JavaScript?</h1>
                  </a>
                  <span className="text-secondary">Thuesday, 25 February 2021</span>
                  <p className="popular-text text-dark mt-4">Java Script merupakan salah satu bahasa pemrograman yang cukup banyak digunakan oleh para web developer dalam mengembangkan aplikasi web. Pemilihan Java Script diantara bahasa pemrograman lain oleh web developer dalam mengembangkan suatu aplikasi web bukanlah tanpa alasan...</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Popular