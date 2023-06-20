import React from 'react'

function Footer() {
  return (

    <footer id="site-footer">
      <div className="container">
        <div className="row pb-5">
          <div className="col-md-4 col-lg-3">
            <h3>Locations</h3>
            <address>
              <strong>Minneapolis, Minnesota</strong>
              <br />
              7900 International Drive
              <br />
              Suite 500
              <br />
              Minneapolis, MN 55425
              <br />
              <a href="tel:800-537-4180">800.537.4180</a> |{" "}
              <a href="tel:952-830-7300">952.830.7300</a>
            </address>
            <address>
              <strong>Saint Peter, Minnesota</strong>
              <br />
              One Scholarship Way
              <br />
              Saint Peter, MN 56082
              <br />
              <a href="tel:800-537-4180">800.537.4180</a> |{" "}
              <a href="tel:507-931-1682">507.931.1682</a>
            </address>
            <address>
              <strong>Washington, D.C.</strong>
              <br />
              1750 Pennsylvania Ave NW
              <br />
              P.O. Box #27958
              <br />
              Washington, DC 20038
              <br />
              <a href="tel:202-517-6333">202.517.6333</a>
            </address>
          </div>

          <div className="col-md-8 col-lg-9">
            <div className="row">
              <div className="col-sm">
                <h3>Organization</h3>
                <div className="link-list">
                  <a href="/about/">About</a>
                  <a href="/about/careers/">Careers</a>
                  <a href="/about/contact">Contact</a>
                </div>
              </div>

              <div className="col-sm">
                <h3>Quick Links</h3>
                <div className="link-list">
                  <a href="/partners/scholarship-solutions/">
                    Scholarship Solutions
                  </a>
                  <a href="/partners/dollars-for-scholars">
                    Dollars for Scholars
                  </a>
                  <a href="/donate/" target="_blank">
                    Donate
                  </a>
                  <a href="/news-events/blog">Blog</a>
                  <a href="/news-events/dreams-to-success/partner-summit/">
                    Partner Summit
                  </a>
                </div>
              </div>

              <div className="col-sm">
                <h3>Students</h3>
                <div className="link-list">
                  <a href="https://start.scholarsapply.org/" target="_blank">
                    Hub Sign In
                  </a>
                  <a href="/students/browse-scholarships">
                    Browse Scholarships
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="legal">
          &copy; 2021 Scholarship America &nbsp;|&nbsp; All Rights Reserved &nbsp;|&nbsp;{" "}
          <a href="/privacy/">Privacy Policy</a> &nbsp;|&nbsp;{" "}
          <a href="/cookie-policy/">Cookie Policy</a>&nbsp;|&nbsp;
          <a href="/terms-and-conditions/">Terms and Conditions</a>
        </p>
        <div className="social">
          <a className="fab fa-facebook-f" href="https://www.facebook.com/ScholarshipAmerica/" title="Facebook"></a>
          <a className="fab fa-twitter" href="https://twitter.com/ScholAmerica" title="Twitter"></a>
          <a className="fab fa-instagram" href="https://www.instagram.com/scholamerica/" title="Instagram"></a>
          <a className="fab fa-linkedin-in" href="https://www.linkedin.com/company/scholarship-america" title="LinkedIn"></a>
          <a className="fab fa-youtube" href="https://youtube.com/@ScholarshipAmerica" title="YouTube"></a>
        </div>
      </div>
    </footer>

    )
}

export default Footer