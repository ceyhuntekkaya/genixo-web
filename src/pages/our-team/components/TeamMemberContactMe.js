import React from 'react'

export default function TeamMemberContactMe() {
  return (
    <div className="bg-base-grey border-rad_5 p-45 mt-40">
    <h3>Contact Me</h3>
    <p>Your email Address Will not be published. Required Fields are marked*</p>
    <form id="contact_form" className="wrap-form contact_form pt-15" method="post" action="#">
        <div className="row cmt-boxes-spacing-30px">
            <div className="col-sm-6 cmt-box-col-wrapper">
                <label>
                    <span className="text-input mb-0"><i className="ti ti-user"></i><input name="your-name" type="text" value="" placeholder="Your Name" required="required"/></span>
                </label>
            </div>
            <div className="col-sm-6 cmt-box-col-wrapper">
                <label>
                    <span className="text-input mb-0"><i className="ti ti-email"></i><input name="email" type="text" value="" placeholder="Your Email" required="required"/></span>
                </label>
            </div>
            <div className="col-sm-12 cmt-box-col-wrapper">
                <label>
                    <span className="text-input mb-0"><i className="ti ti-world"></i><input name="website" type="text" value="" placeholder="Website" required="required"/></span>
                </label>
            </div>
            <div className="col-sm-12 cmt-box-col-wrapper">
                <label>
                    <span className="text-input mb-0"><i className="ti ti-pencil"></i><textarea name="message" cols="40" rows="4" placeholder="Your Comment.." aria-required="true"></textarea></span>
                </label>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <button className="submit cmt-btn cmt-icon-btn-right cmt-btn-size-md cmt-btn-shape-rounded cmt-btn-style-fill cmt-btn-color-skincolor w-100" type="submit">submit<i className="icon-right"></i></button>
            </div>
        </div>
    </form>
</div>
  )
}
