import React from 'react'


function Main() {
  return (
    <div>
    
    
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
                  <a className="text-btn" href="/register">Register Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <main id="site-main">
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <h2>We've supported students for over 60 years.</h2>
          </div>
        </div>
      </div>

      <div className="stats">
        <div className="container">
          <div className="stat">
            <div>
              <span className="xl">$3.1M</span>
              <span>in scholarships awarded</span>
            </div>
          </div>
          <div className="stat">
            <div>
              <span className="xl">+3M</span>
              <span>students</span>
            </div>
          </div>
          <div className="stat">
            <div>
              <span className="xl">100%</span>
              <span>Free Scholarchips</span>
            </div>
          </div>
        </div>
      </div>

      <div id="home-slides" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators carousel-indicators-round">
          <li data-target="#home-slides" data-slide-to="0" className="active"></li>
          <li data-target="#home-slides" data-slide-to="1"></li>
          <li data-target="#home-slides" data-slide-to="2"></li>
          <li data-target="#home-slides" data-slide-to="3"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="img" style={{ backgroundColor: "", backgroundImage: "url(https://images.unsplash.com/photo-1631131426242-0abfa7f209c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60)" }}></div>
            <div className="content" style={{ backgroundColor: "#ececea" }}>
              <h2>Meet Oyuky Jeremy</h2>
              <p>Dream Award Scholar Oyuky Jeremy is passionate about helping others—a passion that stems from her own sisters' health struggles. The College of Saint Benedict student started training in high school as an Emergency Medical Technician and Certified Nursing Assistant, and today she's pursuing a career path as a physician's assistant, hoping to bring culturally aware care to communities like hers.</p>
              <a className="text-btn" href="/blog/queen-of-the-snow-dream-award-scholar-oyuky-aragon-flores/">Read Story</a>
            </div>
          </div>
          <div className="carousel-item">
            <div className="img" style={{ backgroundColor: "", backgroundImage: "url(https://images.unsplash.com/photo-1573497019418-b400bb3ab074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEFmcmljYW4lMjBTdHVkZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60)" }}></div>
            <div className="content" style={{ backgroundColor: "#ececea" }}>
              <h2>Meet Laura Zetoha</h2>
              <p>Childhood cancer, diabetes, and a heart transplant couldn't stop Laura Zetoha from chasing his dreams. With his "third lease on life," he started his higher education career at a California community college. Now, with help from the Dream Award, he's pursuing a Stanford engineering degree and a career in medical device development.</p>
              <a className="text-btn" href="/blog/three-new-leases-on-life-dream-award-scholar-mitch-peterson/">Read Story</a>
            </div>
          </div>
          <div className="carousel-item">
            <div className="img" style={{ backgroundColor: "", backgroundImage: "url(https://images.unsplash.com/photo-1686213011642-b25f94b95b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fEJsYWNrJTIwR3JhZHVhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60)" }}></div>
            <div className="content" style={{ backgroundColor: "#ececea" }}>
              <h2>Meet Chidera Eze</h2>
              <p>Chidera Eze had challenges before she even entered school. In high school, Chidera helped support her family – classes in the morning and the second shift at Gulfstream Aerospace in the afternoon. Chidera wanted to go to college to be an engineering manager and someday, CEO. Find out how Chidera is making her dreams a reality.</p>
              <a className="text-btn" href="/blog/meet-the-2018-dream-award-recipients-chantel-lewis-cummings/">Read Story</a>
            </div>
          </div>
          <div className="carousel-item">
            <div className="img" style={{ backgroundColor: "", backgroundImage: "url(https://media.istockphoto.com/id/475569671/photo/african-american-male-college-graduate.jpg?s=612x612&w=0&k=20&c=bNuUR9w4lxFPaKJTwgm9L8T5WS1UWk3ctBzvwM6YvZY=)" }}></div>
            <div className="content" style={{ backgroundColor: "#ececea" }}>
              <h2>Catch Up With Dream Award Alumni</h2>
              <p>Since 2014, the Scholarship Dream Award has provided life-changing scholarship assistance to 130 students, each of whom overcame incredible obstacles to get to college—and who faced challenges paying for tuition beyond their freshman year. More than just scholarship recipients, our Dream Award Scholars are a community of remarkable people; here are just a few of their stories.</p>
              <a className="text-btn" href="/blog/catching-up-with-our-dream-award-alumni/">Read Story</a>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#home-slides" role="button" data-slide="prev">
          <span className="fal fa-angle-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#home-slides" role="button" data-slide="next">
          <span className="fal fa-angle-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="container body-content">
        <div className="row">
          <div className="col-sm-9">
            <h2>If you believe in students, we should talk.</h2>
          </div>
        </div>
        <div className="row">
          <a className="col-lg box-cta" href="/partners/scholarship-solutions/">
            <h2>
              Scholarship Solutions <small>Get a Scholarship</small>
            </h2>
            <p>We're the go-to organization for anyone looking to create and manage a scholarship program in order to equip students with much-needed financial support.</p>
            <span>Learn About Partnering &gt;</span>
          </a>
          <a className="col-lg box-cta" href="/donate/" target="_blank">
            <h2>
              Donate <small>Help Fund the Future of Student Success</small>
            </h2>
            <p>A gift to Scholarship Africa isn't just a donation. It's an investment in the goals and dreams of students everywhere.</p>
            <span>Give Now &gt;</span>
          </a>
          <a className="col-lg box-cta" href="/partners/dollars-for-scholars/">
            <h2>
              Dollars for Scholars <small>Start a Scholarship in Your Community</small>
            </h2>
            <p>Our Dollars for Scholars network serves students right in their own backyard—and so can you.</p>
            <span>Get Involved &gt;</span>
          </a>
        </div>
      </div>
    </main>

    </div>
    
  )
}

export default Main