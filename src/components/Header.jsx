import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
   
    <header id="site-header">
        <div id="search">
            <form role="search" method="get" action="/">
                <label for="s">Search</label>
                <input type="text" value="" name="s" id="s" required />
                <span>
					<input type="submit" value="" />
				</span>
            </form>
        </div>

        <div class="container-fluid">
            <a class="logo" href="/" title="Scholarship America"></a>

            <nav id="mobile-nav" class="navbar-collapse collapse">
                <ul id="menu-mobile-menu" class="menu">
                    <li id="menu-item-91" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-91"><a href="/students/">Students</a>
                        <ul class="sub-menu">
                            <li id="menu-item-92" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-92"><a href="/students/browse-scholarships/">Browse Scholarships</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-9261" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9261"><a href="/students/browse-scholarships/apply-for-the-dream-award/">The Dream Award</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-93" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-93"><a href="/students/resources/">Resources</a></li>
                            <li id="menu-item-94" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-94"><a href="/students/faq/">FAQ</a></li>
                        </ul>
                    </li>
                    <li id="menu-item-95" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-95"><a href="/partners/">Partners</a>
                        <ul class="sub-menu">
                            <li id="menu-item-96" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-96"><a href="/partners/scholarship-solutions/">Scholarship Solutions</a></li>
                            <li id="menu-item-98" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-98"><a href="/partners/student-supports/">Student Supports</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-99" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-99"><a href="/partners/student-supports/emergency-grants/">Emergency Grants</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-100" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-100"><a href="/partners/dollars-for-scholars/">Dollars for Scholars</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-101" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-101"><a href="/partners/dollars-for-scholars/find-your-chapter/">Find Your Chapter</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li id="menu-item-103" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-103"><a href="/advocacy/">Advocacy</a></li>
                    <li id="menu-item-104" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-104"><a href="/give/">Give</a>
                        <ul class="sub-menu">
                            <li id="menu-item-13110" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13110"><a href="/dream-award/">Dream Award</a></li>
                            <li id="menu-item-13107" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13107"><a href="/our-scholarships/barry-griswell-scholarship/">Barry Griswell Scholarship</a></li>
                            <li id="menu-item-13109" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13109"><a href="/families-of-freedom/">Families of Freedom</a></li>
                            <li id="menu-item-107" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-107"><a href="/more-ways-to-give/">More Ways to Give</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-14967" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14967"><a href="/more-ways-to-give/corporate-partnerships/">Corporate Partnerships</a></li>
                                    <li id="menu-item-11633" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11633"><a href="/employer-matching-gifts/">Employer Matching Gifts</a></li>
                                    <li id="menu-item-9722" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9722"><a href="/more-ways-to-give/planned-and-estate-giving/">Planned and Estate Giving</a></li>
                                    <li id="menu-item-15228" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15228"><a href="/donate-by-mail/">Donate by Mail</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li id="menu-item-108" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-108"><a href="/about/">About</a>
                        <ul class="sub-menu">
                            <li id="menu-item-15895" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15895"><a href="/about/toward-our-north-star/">Mission, Vision &#038; Strategic Goals</a></li>
                            <li id="menu-item-11952" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11952"><a href="https://view.scholarshipamerica.org/interactive-infographic-2020/p/1">By The Numbers</a></li>
                            <li id="menu-item-109" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-109"><a href="/about/board-leaders/">Board &#038; Leaders</a></li>
                            <li id="menu-item-13018" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13018"><a href="/about/careers/">Careers</a></li>
                            <li id="menu-item-113" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-113"><a href="/about/annual-reports-financials/">Annual Reports &#038; Financials</a></li>
                            <li id="menu-item-2283" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2283"><a href="/about/contact/">Contact</a></li>
                        </ul>
                    </li>
                    <li id="menu-item-111" class="blog menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-111"><a href="/news-events/">News &#038; Events</a>
                        <ul class="sub-menu">
                            <li id="menu-item-112" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-112"><a href="/news-events/blog/">Blog</a></li>
                            <li id="menu-item-15296" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15296"><a href="/an-evening-with-scholarship-america-november-2-2023/">An Evening with Scholarship America</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <nav id="primary-nav" class="menu-mobile-menu-container">
                <ul id="menu-mobile-menu-1" class="menu">
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-91"><a href="/students/">Students</a>
                        <ul class="sub-menu">
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-92"><a href="/students/browse-scholarships/">Browse Scholarships</a>
                                <ul class="sub-menu">
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9261"><a href="/students/browse-scholarships/apply-for-the-dream-award/">The Dream Award</a></li>
                                </ul>
                            </li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-93"><a href="/students/resources/">Resources</a></li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-94"><a href="/students/faq/">FAQ</a></li>
                        </ul>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-95"><a href="/partners/">Partners</a>
                        <ul class="sub-menu">
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-96"><a href="/partners/scholarship-solutions/">Scholarship Solutions</a></li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-98"><a href="/partners/student-supports/">Student Supports</a>
                                <ul class="sub-menu">
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-99"><a href="/partners/student-supports/emergency-grants/">Emergency Grants</a></li>
                                </ul>
                            </li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-100"><a href="/partners/dollars-for-scholars/">Dollars for Scholars</a>
                                <ul class="sub-menu">
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-101"><a href="/partners/dollars-for-scholars/find-your-chapter/">Find Your Chapter</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-103"><a href="/advocacy/">Advocacy</a></li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-104"><a href="/give/">Give</a>
                        <ul class="sub-menu">
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13110"><a href="/dream-award/">Dream Award</a></li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13107"><a href="/our-scholarships/barry-griswell-scholarship/">Barry Griswell Scholarship</a></li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13109"><a href="/families-of-freedom/">Families of Freedom</a></li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-107"><a href="/more-ways-to-give/">More Ways to Give</a>
                                <ul class="sub-menu">
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14967"><a href="/more-ways-to-give/corporate-partnerships/">Corporate Partnerships</a></li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11633"><a href="/employer-matching-gifts/">Employer Matching Gifts</a></li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9722"><a href="/more-ways-to-give/planned-and-estate-giving/">Planned and Estate Giving</a></li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15228"><a href="/donate-by-mail/">Donate by Mail</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-108"><a href="/about/">About</a>
                        <ul class="sub-menu">
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15895"><a href="/about/toward-our-north-star/">Mission, Vision &#038; Strategic Goals</a></li>
                            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11952"><a href="https://view.scholarshipamerica.org/interactive-infographic-2020/p/1">By The Numbers</a></li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-109"><a href="/about/board-leaders/">Board &#038; Leaders</a></li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13018"><a href="/about/careers/">Careers</a></li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-113"><a href="/about/annual-reports-financials/">Annual Reports &#038; Financials</a></li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2283"><a href="/about/contact/">Contact</a></li>
                        </ul>
                    </li>
                    <li class="blog menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-111"><a href="/news-events/">News &#038; Events</a>
                        <ul class="sub-menu">
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-112"><a href="/news-events/blog/">Blog</a></li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15296"><a href="/an-evening-with-scholarship-america-november-2-2023/">An Evening with Scholarship America</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <nav id="actions-nav">
                <ul>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <li class="log-in">
                        <a href="/students/browse-scholarships/">Login</a>
                    </li>
                    <li class="log-in">
                        <a href="/students/browse-scholarships/">Register</a>
                    </li>
                </ul>
            </nav>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav" aria-controls="mobile-nav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="fal fa-align-justify"></span>
			</button>
        </div>
    </header>
    

  )
}

export default Header