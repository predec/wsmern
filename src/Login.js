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
              <div className="col-xl-4 col-lg-5 right-column d-flex align-items-center" data-ng-hide="_isForgotPasswordClick">
                <div className="content">
                  <h1 className="section-heading">Sign In</h1>
                  <form role="form" id="loginform" name="loginform">
                    <div className="form-group">
                      <label htmlFor="userSigninLogin">Email</label>
                      <input className="form-control" type="text" ng-model="emailid" name="emailid" autoComplete="off" maxLength={200} placeholder="Email id" required />
                      <span className="error-message" ng-show="loginform.emailid.$dirty && loginform.emailid.$invalid">Please enter email-id.</span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="userSigninPassword">Password</label>
                      <input className="form-control" type="password" ng-model="password" name="password" autoComplete="off" maxLength={100} placeholder="Password" required />
                      <span className="error-message" ng-show="loginform.password.$dirty && loginform.password.$invalid">Please enter password.</span>
                    </div>
                    <div className="form-group">
                      <div className="checkbox">
                        <label><input name="rememberPassword" id="rememberPassword" ng-model="rememberPassword" ng-checked="checkedRememberPassword" type="checkbox" /> Remember me</label>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-default" ng-disabled="loginform.$invalid" ng-model="btnlogin" ng-click="Login(0)">Sign in</button>
                    <p className="text-center mt-5">
                      <a className="primary-link" data-ng-click="_isForgotPasswordClick=true">
                        Forgot Password?
                      </a>
                    </p>
                  </form>
                  <div className="social-login">
                    <div className="fb-login-button" data-width data-size="large" data-button-type="login_with" data-auto-logout-link="true" />
                  </div>
                  <p className="text-center mt-5">
                    Don't have account?
                    <a className="primary-link" href="/registration">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 right-column d-flex align-items-center" data-ng-show="_isForgotPasswordClick">
                <div className="content">
                  <h1 className="section-heading">Forgot Password</h1>
                  <form role="form" id="forgotpasswordform" name="forgotpasswordform">
                    <div className="form-group">
                      <label htmlFor="userSigninLogin">Email</label>
                      <input type="email" className="form-control" ng-model="femailid" name="femailid" autoComplete="off" maxLength={200} placeholder="Email id" required />
                      <span className="error-message" ng-show="forgotpasswordform.femailid.$dirty && forgotpasswordform.femailid.$invalid">Please enter email-id.</span>
                    </div>
                    <button type="submit" className="btn btn-default" ng-disabled="forgotpasswordform.$invalid" ng-click="ForgotPassword()">Submit</button>
                  </form>
                  <div className="social-login">
                    <div className="fb-login-button" data-width data-size="large" data-button-type="login_with" data-auto-logout-link="true" />
                  </div>
                  <p className="text-center mt-5">
                    Don't have account?
                    <a className="primary-link" href="/registration">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>