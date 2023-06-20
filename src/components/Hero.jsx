import React from 'react'

function Hero() {
  return (

    <div>
      <div id="hero-mobile" style={{ backgroundImage: "url(/wp-content/uploads/2019/03/SA_BigWebsiteHero_Homepage.jpg)" }}></div>
      <div id="hero" style={{ backgroundImage: "url(/wp-content/uploads/2019/03/SA_BigWebsiteHero_Homepage.jpg)" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>Hello, Students.</h1>
              <div className="row">
                <div className="col-md-10">
                  <p>Scholarships for Africans is here to help you break down barriers, open doors, and access scholarships that help you succeed in life.</p>
                  <a className="text-btn" href="/students/browse-scholarships/">Register Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    )
}

export default Hero