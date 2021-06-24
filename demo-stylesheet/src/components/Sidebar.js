import TopComment from './TopComment'

const Sidebar = () => {
   return (
      <div className="col-12 col-md-5 col-lg-4">
         <aside>
            <div className="card shadow-none ">
               <div className="card-body pt-0 ">
                  <h4 className="h5 text-center">Top Comments</h4>
                  <hr />
                  <TopComment name="Dion Tupen" post="Apa sih kelebihan JavaScript?" />
                  <TopComment name="Muhammad Aris" post="UI Design untuk kalian para Pemula" />
                  <TopComment name="Diah Andini" post="Perbedaan Phyton dan PHP" />
                  <TopComment name="Saefi Alvin" post="Bahasa Phyton cocok untuk membuat apa?" />
               </div>
            </div>
         </aside>
      </div>
   )
}

export default Sidebar