 <div>
        <div ng-include="'views/_header.html'">
        </div>
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n    h1, h2, h3, h4, h5, h6 {\n        color: #fff !important;\n    }\n    .page-dashboard .container {\n        max-width: 1100px;\n    }\n" }} />
        <section id="layout-content" className="container">
          <div className="flash-message">
          </div>
          <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
          {/*Section description*/}
          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
            a matter of hours to help you.
          </p>
          <div className="container">
            <div className="row">
              {/*Grid column*/}
              <div className="col-md-12">
                <form role="form" id="contactform" name="contactform" noValidate>
                  {/*Grid row*/}
                  <div className="row">
                    {/*Grid column*/}
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" autoComplete="off" maxLength={100} placeholder="Your name" ng-model="name" name="name" className="form-control" required />
                        <span className="error-message" ng-show="contactform.name.$dirty && contactform.name.$invalid">Please enter your name.</span>
                      </div>
                    </div>
                    {/*Grid column*/}
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="tel" xtype="tel" autoComplete="off" maxLength={20} placeholder="Your mobile" ng-model="mobile" name="mobile" className="form-control" onkeypress="return checkNumber(this.value, event);" required />
                        <span className="error-message" ng-show="contactform.mobile.$dirty && contactform.mobile.$invalid">Please enter valid mobile.</span>
                      </div>
                    </div>
                    {/*Grid column*/}
                  </div>
                  {/*Grid row*/}
                  {/*Grid row*/}
                  <div className="row">
                    {/*Grid column*/}
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="email" ng-pattern="EmailValidation" autoComplete="off" maxLength={200} placeholder="Your email" ng-model="email" name="email" className="form-control" required />
                        <span className="error-message" ng-show="contactform.email.$dirty && contactform.email.$invalid">Please enter valid email-id.</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" autoComplete="off" maxLength={100} placeholder="Subject" ng-model="subject" name="subject" className="form-control" required />
                        <span className="error-message" ng-show="contactform.subject.$dirty && contactform.subject.$invalid">Please enter subject.</span>
                      </div>
                    </div>
                  </div>
                  {/*Grid row*/}
                  {/*Grid row*/}
                  <div className="row">
                    {/*Grid column*/}
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea type="text" autoComplete="off" maxLength={2000} placeholder="Your message" ng-model="message" name="message" rows={2} className="form-control md-textarea" required defaultValue={""} />
                        <span className="error-message" ng-show="contactform.message.$dirty && contactform.message.$invalid">Please enter message.</span>
                      </div>
                    </div>
                  </div>
                  {/*Grid row*/}
                </form>
                <div className="text-center text-md-left">
                  <input className="btn btn-primary" ng-disabled="contactform.$invalid" type="button" ng-click="SubmitContactUs()" defaultValue="Submit" />
                </div>
                <div className="status" />
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <div ng-include="'views/_footer.html'">
        </div>
      </div>