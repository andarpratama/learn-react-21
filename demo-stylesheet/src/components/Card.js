import imagePost from '../assets/img/post-1.jpg'

const Card = () => {
   return (
      <div className="item-filter col-12 col-md-12 col-lg-4">
         <div className="card">
            <div className="card-img">
               <img src={imagePost} style={{ height: '100%'}} className="card-img-top" alt="Card" />
            </div>
            <div className="card-body">
               <div className="card-publis mb-2 d-flex justify-content-between" style={{fontSize: '10px'}}>
                  <span className="text-uppercase border px-1 text-dark border-secondary">Javascript</span>
                  <span className="text-secondary">Feb 26, 2021</span>
               </div>
               <a href="/" className="text-decoration-none">
                  <h5 className="card-title text-dark">Apa sih kelebihan Bahasa JavaScript?</h5>
               </a>
               <p className="card-text text-dark">Javascript merupakan salah satu bahasa pemrograman yang cukup banyak digunakan oleh...</p>
            </div>
         </div>
      </div>
   )
}

export default Card