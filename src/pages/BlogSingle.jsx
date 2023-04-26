import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import TrialLink from './components/TrialLink'
import {useTranslation} from "react-i18next";

export default function BlogSingle() {
    const {t, i18n} = useTranslation('common');
    return (
        <div id="page" className="page">
            <div className='mt-3'></div>
            <Header mainCssClass="header tra-menu navbar-dark" />


            <section id="single-post" class="wide-100 inner-page-hero single-post-section division">
                <div class="container">


                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <div class="single-post-wrapper">


                                <div class="single-post-title">

                                    <p class="p-sm post-tag txt-500 txt-upcase">OLMO News</p>

                                    <h2 class="h2-md">Augue OLMO, luctus neque purus and ipsum neque libero</h2>

                                    <div class="post-data clearfix">

                                        <div class="post-author-avatar">
                                            <img src="images/review-author-7.jpg" alt="author-avatar" />
                                        </div>

                                        <div class="post-author">
                                            <h6 class="h6-xl">Matthew Anderson</h6>
                                            <p class="p-md">Posted on June 22, 2021 - 4 comments</p>
                                        </div>

                                    </div>


                                </div>


                                <div class="single-post-txt">

                                    <p class="p-lg">Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor
                                        gravida donec and ipsum aporta justo integer at odio velna. Maecenas gravida porttitor nunc vehicula magna luctus tempor. Quisque vel laoreet turpis. An augue viverra a augue eget,
                                        dictum tempor pulvinar donec ociis et magnis sapien imperdiet dui varius placerat imperdiet ipsum varius viverra augue egestas luctus donec purus and blandit impedit ligula risus.
                                        Mauris donec
                                    </p>

                                </div>


                                <div class="post-inner-img">
                                    <img class="img-fluid" src="images/blog/inner-img-1.png" alt="blog-post-image" />
                                </div>


                                <div class="single-post-txt">

                                    <h4 class="h4-lg">We focus on technologies that, along with a build-measure-lean process, allow
                                        us to deliver high performing, less error prone and intelligible code
                                    </h4>

                                    <p class="p-lg">Aliqum  mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna
                                        vitae auctor massa congue magna nihil impedit ligula risus. Mauris donec ociis and magnis sapien etiam sapien sagittis congue tempor a gravida donec enim ipsum porta justo integer undo odio velna. Maecenas gravida porttitor nunc, quis vehicula magna at luctus tempor. Quisque vel
                                        laoreet turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur
                                        nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem fusce eu tempor gravida
                                        porttitor cursus fusce ugue egestas cursus magna nihil impedit
                                    </p>

                                    <ol class="digit-list">

                                        <li><p class="p-lg">Donec dolor suscipit magna vehicula impedit ligula risus. Mauris donec
                                            ociis magnis sapien etiam and sapien sem sagittis congue tempor gravida porttitor nunc,
                                            quis vehicula magna
                                        </p></li>

                                        <li><p class="p-lg">Placerat imperdiet dui varius consectetur nibh, vel imperdiet dui varius
                                            viverra donec
                                        </p></li>

                                        <li><p class="p-lg">Cubilia laoreet augue egestas cursus magna nihil impedit ligula risus.
                                            Mauris donec et magnis sapien etiam sapien rutrum tempor mullam blandit tempor sapien and
                                            gravida
                                        </p></li>

                                    </ol>

                                    <h5 class="h5-md mt-50">Praesent aliquet tempus<br />
                                        (tempor gravida ipsum as an example)
                                    </h5>

                                    <p class="p-lg">Magna suscipit egestas magna ipsum vitae purus efficitur ipsum primis in cubilia
                                        laoreet augue egestas luctus donec diam. Curabitur dapibus libero. Mauris donec ociis a neque.
                                        Phasellus blandit tristique justo and aliquam vitae molestie nunc sapien justo, aliquet non molestie augue
                                    </p>

                                    <ul class="simple-list">

                                        <li class="list-item">
                                            <p class="p-lg">Donec dolor magna, suscipit in magna dignissim, porttitor hendrerit diam.
                                                Nunc gravida ultrices felis eget faucibus. Praesent aliquet tempus, blandit posuere
                                                ligula varius
                                            </p>
                                        </li>

                                        <li class="list-item">
                                            <p class="p-lg">Quaerat sodales sapien undo euismod purus blandit velna vitae auctor a
                                                congue magna tempor sapien eget gravida laoreet turpis urna augue, viverra a augue
                                                eget, dictum tempor diam pulvinar consectetur purus efficitur ipsum primis in cubilia
                                                laoreet augue donec
                                            </p>
                                        </li>

                                    </ul>

                                    <p class="p-lg">Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum
                                        vitae purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec diam. Curabitur dapibus libero. Mauris donec ociis a neque. Phasellus blandit tristique justo and
                                        aliquam vitae molestie nunc sapien justo, aliquet non molestie augue, venenatis nec purus
                                        aliquam eget lacinia elit tincidunt
                                    </p>

                                    <div class="post-inner-img">
                                        <div class="row">

                                            <div class="col-md-6 top-img blog-post-img">

                                                <img class="img-fluid" src="images/blog/post-6-img.jpg" alt="blog-post-image" />
                                                <p>Maecenas gravida CPU porttitor magna</p>

                                            </div>

                                            <div class="col-md-6 blog-post-img">

                                                <div class="video-preview">

                                                    <a class="video-popup1" href="https://www.youtube.com/embed/SZEflIVnhH8">
                                                        <div class="video-btn video-btn-lg bg-pink ico-75">
                                                            <div class="video-block-wrapper"><span class="flaticon-play-button"></span></div>
                                                        </div>
                                                    </a>

                                                    <img class="img-fluid" src="images/blog/post-5-img.jpg" alt="video-preview" />

                                                </div>

                                                <p>Gravida porttitor nunc, quis vehicula tempor</p>

                                            </div>

                                        </div>
                                    </div>

                                    <p class="p-lg">Nulla tincidunt volutpat tincidunt. Pellentesque habitant morbi tristique senectus
                                        and netus laoreet malesuada famesa augue suscipit, luctus at neque purus neque dolor primis.
                                        Nemo sodales ipsam egestas volute turpis a dolores aliquam quaerat sodales sapien congue augue
                                        eget gravida laoreet turpis urna augue, viverra a augue eget, dictum dictum tempor diam pulvinar consectetur
                                    </p>

                                    <div class="quote mt-30 mb-35">

                                        <p class="p-xl">"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean magna ligula
                                            eget dolor suscipit egestas viverra dolor iaculis luctus magna suscipit egestas suscipit in
                                            magna dignissim, porttitor hendrerit diam. Nunc gravida ultrices felis eget faucibus.
                                            Praesent aliquet tempus, blandit posuere ligula varius"
                                        </p>

                                    </div>


                                    <p class="p-lg">Nullam non scelerisque lectus. In at mauris vel nisl convallis porta at vitae dui.
                                        Nam lacus vulputate ligula molestie bibendum quis, aliquet elementum massa. Vestibulum ut
                                        sagittis purus massa lorem. Fusce eu cursus est. Fusce non nulla vitae massa placerat vulputate
                                        purus. Aliqum mullam a blandit tempor posuere ligula varius congue cursus congue magna impedit
                                        ligula
                                    </p>

                                    <ul class="simple-list">

                                        <li class="list-item">
                                            <p class="p-lg">Donec dolor magna, suscipit in magna dignissim, porttitor hendrerit diam.
                                                Nunc gravida ultrices felis eget faucibus. Praesent aliquet tempus, blandit posuere
                                                ligula varius
                                            </p>
                                        </li>

                                        <li class="list-item">
                                            <p class="p-lg">Fringilla risus nec, luctus mauris orci auctor euismod purus pretium at
                                                purus pretium ligula rutrum tempor mullam blandit tempor sapien and gravida donec ipsum
                                                at justo
                                            </p>
                                        </li>

                                    </ul>

                                    <h5 class="h5-md">Egestas volutpat egestas</h5>

                                    <p class="p-lg">In at mauris vel nisl convallis porta at vitae dui. Nam lacus ligula, vulputate
                                        molestie bibendum quis, aliquet elementum massa. Vestibulum ut sagittis odio. Ac massa lorem.
                                        Fusce eu cursus est. Fusce non nulla vitae massa placerat vulputate vel a purus aliqum mullam
                                        blandit
                                    </p>

                                    <p class="p-lg">Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque
                                        laoreet a turpis urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar nibh, vel
                                        imperdiet congue varius viverra. Sapien justo massa lorem. Fusce eu cursus non nulla vitae
                                        massa placerat purus.  Sagittis congue augue egestas volutpat egestas magna suscipit egestas
                                        magna ipsum vitae purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec
                                    </p>

                                    <div class="post-inner-img">
                                        <img class="img-fluid" src="images/img-19.png" alt="blog-post-image" />
                                    </div>

                                    <h5 class="h5-md">Vitae massa placerat vulputate</h5>

                                    <p class="p-lg">Nullam non scelerisque lectus. In at mauris vel nisl convallis porta at vitae dui.
                                        Nam lacus vulputate ligula molestie bibendum quis, aliquet elementum massa. Vestibulum ut
                                        sagittis purus massa lorem. Fusce eu cursus est. Fusce non nulla vitae massa placerat vulputate
                                        purus. Aliqum mullam a blandit tempor posuere ligula varius congue cursus congue magna impedit
                                        ligula
                                    </p>

                                    <p class="p-lg"><span class="txt-600">Aliqum  mullam blandit tempor sapien gravida donec ipsum
                                    </span>, at porta justo. Velna vitae and auctor congue magna impedit ligula risus. Mauris donec
                                        ociis magnis sapien etiam sapien sagittis congue posuere ligula varius congue cursus tempor
                                        gravida donec integer
                                    </p>

                                    <h5 class="h5-md">Cursus non nulla vitae massa</h5>

                                    <ul class="simple-list">

                                        <li class="list-item">
                                            <p class="p-lg">Donec dolor magna, suscipit and magna dignissim, porttitor hendrerit diam.
                                                Gravida ultrices turpis and faucibus aliquet undo tempus, blandit posuere ligula varius
                                                congue cursus nulla vitae massa
                                            </p>
                                        </li>

                                        <li class="list-item">
                                            <p class="p-lg">Aliquam varius neque commodo purus  tempor sapien gravida vulputate
                                                pharetra bibendum
                                            </p>
                                        </li>

                                        <li class="list-item">
                                            <p class="p-lg">Morbi lectus, lobortis felis nec, suscipit imperdiet sapien semper
                                                ultrices. Nulla tincidunt at volutpat and tincidunt. Habitant morbi tristique senectus
                                                et netus malesuada famesa augue suscipit, luctus neque purus ipsum bibendum quis,
                                                aliquet elementum
                                            </p>
                                        </li>

                                    </ul>

                                    <p class="p-lg">Curabitur ac dapibus libero quisque eu tristique neque sellus blandit tristique
                                        justo aliquam. Aliquam vitae at molestie nunc sapien justo, aliquet non molestie sed,
                                        venenatis nec purus. Aliquam lacinia at tincidunt massa justo. Quisque vel laoreet turpis.
                                        Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur nibh imperdiet
                                        varius viverra. Pellentesque ac massa lorem. Fusce eu cursus est. Fusce non nulla vitae massa
                                        placerat bulum tincidunt tincidunt massa porttitor
                                    </p>

                                </div>


                                <div class="row post-share-links d-flex align-items-center">

                                    <div class="col-md-9 col-xl-8 post-tags-list">
                                        <span><a href="#">Life</a></span>
                                        <span><a href="#">Ideas</a></span>
                                        <span><a href="#">Story</a></span>
                                        <span><a href="#">Web Design</a></span>
                                    </div>

                                    <div class="col-md-3 col-xl-4 post-share-list text-end">
                                        <ul class="share-social-icons ico-25 text-center clearfix">
                                            <li><a href="#" class="share-ico"><span class="flaticon-twitter"></span></a></li>
                                            <li><a href="#" class="share-ico"><span class="flaticon-facebook"></span></a></li>
                                            <li><a href="#" class="share-ico"><span class="flaticon-bookmark"></span></a></li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </section>




            {/* <!-- ABOUT POST AUTHOR */}
            <div class="about-post-author bg-snow division">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <div class="author-senoff">

                                <img src="images/review-author-7.jpg" alt="author-avatar" />

                                <div class="author-senoff-txt">

                                    <h5 class="h5-xs">Published by</h5>
                                    <h5 class="h5-md">Matthew Anderson</h5>
                                    <p class="p-md">Lorem ipsum dolor sit amet, consectetur elit eiusmod tempor sapien dolore
                                        incidide ut labore dolore incididunt ut labore turpis vitae raesent varius consectetur
                                        purus efficitur ipsum primis in cubilia laoreet augue donec
                                    </p>

                                    <p class="author-link">All stories by <a href="#">Matthew Anderson</a></p>

                                    <div class="author-follow-btn"><a href="#">Follow</a></div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>







            <section id="blog-1" class="bg-whitesmoke-gradient wide-60 blog-section division">
                <div class="container">


                    <div class="row justify-content-center">
                        <div class="col-lg-10 col-xl-8">
                            <div class="section-title title-01 mb-70">
                                <h2 class="h2-md">Keep Reading...</h2>
                            </div>
                        </div>
                    </div>


                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">


                        <div class="col">
                            <div id="bp-1-1" class="blog-1-post mb-40 wow fadeInUp">

                                <div class="blog-post-img">
                                    <div class="hover-overlay">
                                        <img class="img-fluid" src="images/blog/post-1-img.jpg" alt="blog-post-image" />
                                        <div class="item-overlay"></div>
                                    </div>
                                </div>

                                <div class="blog-post-txt">

                                    <p class="p-md post-tag">OLMO News &ensp;|&ensp; June 12, 2021</p>

                                    <h5 class="h5-md">
                                        <a href="single-post.html">Integer urna turpis donec ipsum a porta justo auctor</a>
                                    </h5>

                                    <p class="p-lg">Donec sapien augue integer turpis urna cursus porta, mauris augue...</p>

                                    <div class="post-meta"><p class="p-md">9 Comments</p></div>

                                </div>

                            </div>
                        </div>


                        <div class="col">
                            <div id="bp-1-2" class="blog-1-post mb-40 wow fadeInUp">

                                <div class="blog-post-img">
                                    <div class="hover-overlay">
                                        <img class="img-fluid" src="images/blog/post-5-img.jpg" alt="blog-post-image" />
                                        <div class="item-overlay"></div>
                                    </div>
                                </div>

                                <div class="blog-post-txt">

                                    <p class="p-md post-tag">Tutorials &ensp;|&ensp; June 3, 2021</p>

                                    <h5 class="h5-md">
                                        <a href="single-post.html">A ligula risus auctor tempus</a>
                                    </h5>

                                    <p class="p-lg">Donec sapien augue integer turpis urna cursus porta a mauris dolor...</p>

                                    <div class="post-meta"><p class="p-md">12 Comments</p></div>

                                </div>

                            </div>
                        </div>



                        <div class="col">
                            <div id="bp-1-3" class="blog-1-post mb-40 wow fadeInUp">

                                <div class="blog-post-img">
                                    <div class="hover-overlay">
                                        <img class="img-fluid" src="images/blog/post-2-img.jpg" alt="blog-post-image" />
                                        <div class="item-overlay"></div>
                                    </div>
                                </div>

                                <div class="blog-post-txt">

                                    <p class="p-md post-tag">Inspiration &ensp;|&ensp; May 18, 2021</p>

                                    <h5 class="h5-md">
                                        <a href="single-post.html">Donec sapien augue integer turpis at cursus porta mauris</a>
                                    </h5>

                                    <p class="p-lg">Donec sapien augue integer turpis urna cursus porta, mauris augue...</p>

                                    <div class="post-meta"><p class="p-md">3 Comments</p></div>

                                </div>

                            </div>
                        </div>


                    </div>


                </div>
            </section>




            <TrialLink />
            <Footer mainCssClass="bg-lightgrey footer division" />
        </div>
    )
}
