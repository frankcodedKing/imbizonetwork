import React from 'react';
import logo from '/ibizalogo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
   
    <header id="site-header">
  
  <div id="search" style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ flex: 1 }} className='pull-right'>
    {/* <img src={logo} alt="Logo" style={{ display: 'block', maxWidth: '100px', height: 'auto', marginRight: '20px' }} /> */}
  </div>

</div>

        <div className="container-fluid">

            <nav id="mobile-nav" className="navbar-collapse collapse">
                
                <ul id="menu-mobile-menu" className="menu">
                    
                    <li id="menu-item-91" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-91"><a href="#">Students</a>
                        <ul className="sub-menu">
                            <li>
                            <a className="" href="/" title="">
                            <img src={logo} alt="Logo" />

                            </a>
                            </li>
                             
                            <li id="menu-item-92" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-92"><a href="/students/browse-scholarships/">Browse Scholarships</a>
                                <ul className="sub-menu">
                                    <li id="menu-item-9261" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9261"><a href="/students/browse-scholarships/apply-for-the-dream-award/">The Dream Award</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-93" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-93"><a href="/students/resources/">Resources</a></li>
                            <li id="menu-item-94" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-94"><a href="/students/faq/">FAQ</a></li>
                        </ul>
                    </li>
                   
                    <li id="menu-item-103" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-103"><a href="/advocacy/">Advocacy</a></li>
                    
                    <li id="menu-item-108" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-108"><a href="/about/">About</a>
                        <ul className="sub-menu">
                            <li id="menu-item-15895" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15895"><a href="/about/toward-our-north-star/">Mission, Vision &#038; Strategic Goals</a></li>
                            <li id="menu-item-113" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-113"><a href="/about/annual-reports-financials/">Annual Reports &#038; Financials</a></li>
                            <li id="menu-item-2283" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2283"><a href="/about/contact/">Contact</a></li>
                        </ul>
                    </li>

                    <li className="blog menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-111"><a href="/login">Scholar</a>
                        <ul className="sub-menu">
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-112"><a href="/login">Login</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15296"><a href="/signup">Register</a></li>
                        </ul>
                    </li>
                    
                </ul>
            </nav>
            <nav id="primary-nav" className="menu-mobile-menu-container">

                
                <ul id="menu-mobile-menu-1" className="menu">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-91"><a href="/students/">Students</a>
                        <ul className="sub-menu">
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-92"><a href="/students/browse-scholarships/">Browse Scholarships</a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9261"><a href="/students/browse-scholarships/apply-for-the-dream-award/">The Dream Award</a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-93"><a href="/students/resources/">Resources</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-94"><a href="/students/faq/">FAQ</a></li>
                        </ul>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-95"><a href="/partners/">Partners</a>
                        <ul className="sub-menu">
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-96"><a href="/partners/scholarship-solutions/">Scholarship Solutions</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-98"><a href="/partners/student-supports/">Student Supports</a>
                                
                            </li>
                            
                        </ul>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-103"><a href="/advocacy/">Advocacy</a></li>
                    
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-108"><a href="/about/">About</a>
                        <ul className="sub-menu">
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15895"><a href="/about/toward-our-north-star/">Mission, Vision &#038; Strategic Goals</a></li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11952"><a href="https://view.scholarshipamerica.org/interactive-infographic-2020/p/1">By The Numbers</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-109"><a href="/about/board-leaders/">Board &#038; Leaders</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13018"><a href="/about/careers/">Careers</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-113"><a href="/about/annual-reports-financials/">Annual Reports &#038; Financials</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2283"><a href="/about/contact/">Contact</a></li>
                        </ul>
                    </li>
                    <li className="blog menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-111"><a href="/news-events/">News &#038; Events</a>
                        <ul className="sub-menu">
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-112"><a href="/news-events/blog/">Blog</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15296"><a href="/an-evening-with-scholarship-america-november-2-2023/">An Evening with Scholarship America</a></li>
                        </ul>
                    </li>

                    

              
                
                </ul>
            </nav>
            <nav id="actions-nav">
                <ul>
                <li className="log-in">
                    <Link to="/login">Login</Link>
                    </li>
                    <li className="log-in">
                    <Link to="/signup">Register</Link>
                    </li>
                    
                </ul>
            </nav>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav" aria-controls="mobile-nav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="fal fa-align-justify"></span>
			</button>
        </div>
    </header>
    

  )
}

export default Header