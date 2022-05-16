  <div>
        {/* header top begin */}
        <div ng-include="'views/_header.html'">
        </div>
        <section id="layout-content" className="container">
          <div className="flash-message">
          </div>
          <div className="container1 auth-page">
            <div className="row no-gutters">
              <div className="col-xl-8 col-lg-7 left-column d-flex align-items-center">
                <div className="content">
                  <h2 className="page-heading">
                    Crafted for the love of the game
                  </h2>
                  <p>
                    Whispering Shouts is a tunnel to the poker games, with a
                    motto to make every player a winner irrespective of how
                    their game goes.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 right-column d-flex align-items-center">
                <div className="content" ng-show="!ThankYouPage">
                  <h1 className="section-heading">Sign Up</h1>
                  <h3>Register</h3>
                  <form role="form" id="regform" name="regform" noValidate>
                    <div className="form-group">
                      <label htmlFor="registerName">Full Name</label>
                      <input className="form-control" type="text" ng-model="username" name="username" autoComplete="off" maxLength={200} placeholder="Full Name" required />
                      <span className="error-message" ng-show="regform.username.$dirty && regform.username.$invalid">Please enter your name.</span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="registerEmail">Email</label>
                      <input className="form-control" type="text" ng-model="emailid" ng-pattern="EmailValidation" name="emailid" autoComplete="off" maxLength={200} placeholder="Email Address" required />
                      <span className="error-message" ng-show="regform.emailid.$dirty && regform.emailid.$invalid">Please enter your valid email address.</span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="registerPassword">Mobile No</label>
                      <input type="text" className="form-control" ng-pattern="PhoneNumberValidation" ng-model="mobileno" name="mobileno" autoComplete="off" maxLength={10} placeholder="Mobile No." onkeypress="return checkNumber(this.value, event);" xtype="tel" required />
                      <span className="error-message" ng-show="regform.mobileno.$dirty && regform.mobileno.$invalid">Please enter your mobile no.</span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="registerPassword">Password</label>
                      <input type="password" className="form-control" ng-model="password" name="password" autoComplete="off" maxLength={100} placeholder="Password" required />
                      <span className="error-message" ng-show="regform.password.$dirty && regform.password.$invalid">Please enter password.</span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="registerPassword">Confirm Password</label>
                      <input type="password" className="form-control" ng-model="confirmpassword" name="confirmpassword" autoComplete="off" maxLength={100} placeholder="Confirm Password" required />
                      <span className="error-message" ng-show="regform.confirmpassword.$dirty && regform.confirmpassword.$invalid">Please enter confirm password.</span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="referral_code">Referral Code</label>
                      <input type="text" className="form-control" ng-model="refrelcode" ng-disabled="IsReferralCodeExists" name="refrelcode" autoComplete="off" maxLength={100} placeholder="Referral Code" />
                    </div>
                    <button type="submit" className="btn btn-default" ng-disabled="regform.$invalid" ng-model="btnregister" ng-click="Register()">Register</button>
                  </form>
                  <p className="text-center mt-5">
                    Already have account?
                    <a className="primary-link" href="/login">
                      Sign In
                    </a>
                  </p>
                </div>
                <div className="card-body" ng-show="ThankYouPage">
                  <h2 className="title">Thank you</h2>
                  <p>Thank you for signing up at Whispering Shouts.</p>
                  <p>Kindly verify your email id by clicking the link provided in the email sent to your email account.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>