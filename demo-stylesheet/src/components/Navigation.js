const Navigation = () => {
   return (
      <header>
         <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <div className="container">
               <a className="navbar-brand font-weight-bold" href="index.html">saltTalk</a>
               <button className="navbar-toggler border-0 px-0" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                  <div className="navbar-nav ml-auto">
                     <a className="nav-link text-dark text-uppercase active" href="/">Home</a>
                     <a className="nav-link text-dark text-uppercase" href="./pages/about.html">About Me</a>
                  </div>
               </div>
            </div>
         </nav>
      </header>
   )
}

export default Navigation