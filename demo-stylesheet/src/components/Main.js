import Sidebar from "./Sidebar"
import Card from "./Card"

const Main = () => {
   return (
      <main class="mt-5">
         <div class="container">
            <div class="row">
               <div class="col-12 col-md-7 col-lg-8">
                  <div class="row article-container">
                     <div class="col-12 article-category">
                        <a href="/" data-filter="all" class="list-filter active text-decoration-none  text-white px-2 py-1 text-uppercase mr-4 font-weight-500">All</a>
                        <a href="/" data-filter="javascript" class="list-filter bg-secondary text-decoration-none  text-white px-2 py-1 text-uppercase mr-4">JavaScript</a>
                        <a href="/" data-filter="uidesign" class="list-filter text-decoration-none  text-white px-2 py-1 text-uppercase mr-4">UI / UX Design</a>
                        <a href="/" data-filter="phyton" class="list-filter text-decoration-none  text-white px-2 py-1 text-uppercase mr-4">Phyton</a>
                     </div>
                     <Card />
                     <Card />
                     <Card />
                  </div>
               </div>
               <Sidebar />
            </div>
         </div>
      </main>
   )
}

export default Main