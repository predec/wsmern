<div>
        {/*<div id="fb-root"></div>


<div class="fb-login-button" data-width="" data-size="medium" data-button-type="login_with" data-auto-logout-link="false" data-use-continue-as="false"></div>*/}
        <h1>
          Login from Facebook
        </h1>
        <div id="auth-status">
          <div id="auth-loggedout">
            <div className="fb-login-button" autologoutlink="true" scope="email">Login with Facebook</div>
          </div>
          <div id="auth-loggedin" style={{display: 'none'}}>
            Hi, <span id="auth-displayname" />(<a href="#" id="auth-logoutlink">logout</a>)
            <br />
            Your Facebook ID : <span id="FBId" /><br />
            Your Email : <span id="DisplayEmail" /><br />
            Profile Pic : <img src id="ProfilePic" />
            {/*Your Sex:, <span id="Gender"></span><br />
    Your Date of Birth :, <span id="DOB"></span><br />*/}
          </div>
        </div>
      </div>