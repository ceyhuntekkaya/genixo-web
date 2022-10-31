import React from 'react'
import { Link } from 'react-router-dom'
import Footer1 from './components/Footer1'
import Header from './components/Header'
import TrialLink from './components/TrialLink'

export default function BlogList() {
  return (
    <div id="page" className="page">
      <div className='mt-3'></div>
      <Header mainCssClass="header tra-menu navbar-dark" />






      <section id="blog-page" class="bg-snow wide-50 inner-page-hero blog-page-section division">
        <div class="container">


          <div class="row justify-content-center">
            <div class="col-md-10 col-lg-8">
              <div class="section-title title-02 mb-85">
                <h2 class="h2-xs">Relevant news and more for you. Welcome to our blog</h2>
              </div>
            </div>
          </div>


          <div class="rel blog-post-wide featured-post">
            <div class="row d-flex align-items-center">

              <div class="featured-badge ico-25 bg-whitesmoke yellow-color">
                <span class="flaticon-star-1"></span>
              </div>

              <div class="col-lg-7 blog-post-img">
                <div class="hover-overlay">
                  <img class="img-fluid" src="images/blog/featured-post.jpg" alt="blog-post-image" />
                  <div class="item-overlay"></div>
                </div>
              </div>

              <div class="col-lg-5 blog-post-txt">

                <p class="p-md post-tag"> News &ensp;|&ensp; May 18, 2021</p>

                <h5 class="h5-xl">
                  <Link to="/blog-reading">Tempor sapien donec gravida a suscipit and porta justo vitae</Link>
                </h5>

                <p class="p-lg">Aliqum mullam blandit vitae tempor sapien and donec lipsum gravida and porta
                  undo velna dolor in cubilia...
                </p>

                {/* <div class="post-meta"><p class="p-md">38 Comments</p></div> */}

              </div>

            </div>
          </div>









          <div class="rel blog-post-wide featured-post">
            <div class="row d-flex align-items-center">

              <div class="featured-badge ico-25 bg-whitesmoke yellow-color">
                <span class="flaticon-star-1"></span>
              </div>

              <div class="col-lg-7 blog-post-img">
                <div class="hover-overlay">
                  <img class="img-fluid" src="images/blog/featured-post.jpg" alt="blog-post-image" />
                  <div class="item-overlay"></div>
                </div>
              </div>

              <div class="col-lg-5 blog-post-txt">

                <p class="p-md post-tag"> News &ensp;|&ensp; May 18, 2021</p>

                <h5 class="h5-xl">
                  <Link to="/blog-reading">Tempor sapien donec gravida a suscipit and porta justo vitae</Link>
                </h5>

                <p class="p-lg">Aliqum mullam blandit vitae tempor sapien and donec lipsum gravida and porta
                  undo velna dolor in cubilia...
                </p>

                {/* <div class="post-meta"><p class="p-md">38 Comments</p></div> */}

              </div>

            </div>
          </div>

        </div>
      </section>





      <TrialLink />
      <Footer1 mainCssClass="bg-lightgrey footer division" />
    </div>
  )
}
