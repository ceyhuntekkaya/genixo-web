import React from 'react'

export default function BlogReply() {
    return (
        <div className="cmt-blog-classic-box-comment clearfix">
            <div id="comments" className="comments-area">
                <div className="comment-respond">
                    <h3 className="comment-reply-title">Leave a Reply</h3>
                    <p className="comment-notes">Your email address will not be published. </p>
                    <form action="#" method="post" id="commentform" className="comment-form">
                        <p className="comment-form-comment">
                            <textarea id="comment" placeholder="Comment" name="comment" cols="45" rows="4" aria-required="true"></textarea>
                        </p>
                        <p className="comment-form-author">
                            <input id="author" placeholder="Name (required)" name="author" type="text" value="" size="30" aria-required="true" />
                        </p>
                        <p className="comment-form-email">
                            <input id="email" placeholder="Email (required)" name="email" type="text" value="" size="30" aria-required="true" />
                        </p>
                        <p className="comment-form-url">
                            <input id="url" placeholder="Website" name="url" type="text" value="" size="30" />
                        </p>
                        <p className="comment-cookies">
                            <input id="comment-cookies-consent" name="comment-cookies-consent" type="checkbox" value="yes" className="me-1" />
                            <label for="comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                        </p>
                        <p className="form-submit mt-40 mb-0">
                            <button className="submit cmt-btn cmt-btn-size-md cmt-btn-shape-rounded cmt-btn-style-fill cmt-btn-color-dark" type="submit">Post Comment</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
