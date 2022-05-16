<div>
    {/* header top begin */}
    <div ng-include="'views/_header.html'">
    </div>
    {/* header top end */}
    <style dangerouslySetInnerHTML={{__html: "\n    .box {\n        padding: 0px !important;\n    }\n\n    .header-section {\n        display: block !important;\n    }\n\n    .logo-section {\n        display: block !important;\n    }\n\n    .footer-section .overlay {\n        position: relative;\n        width: 100%;\n        padding-top: 0rem;\n        overflow: hidden;\n    }\n\n    .bodynew {\n        background: #fff;\n    }\n    /* Style the input container */\n    .input-container {\n        display: flex;\n        width: 100%;\n        margin-bottom: 15px;\n    }\n\n    /* Style the form icons */\n    .icon {\n        padding: 10px;\n        background: #fff;\n        font-size: 26px !important;\n        color: #000;\n        min-width: 50px;\n        text-align: center;\n        border-bottom-left-radius: 30px;\n        border-top-left-radius: 30px;\n    }\n\n    /* Style the input fields */\n    .input-field {\n        width: 100%;\n        padding: 10px;\n        outline: none;\n        border: none;\n        border-bottom-right-radius: 30px;\n        border-top-right-radius: 30px;\n    }\n\n        .input-field:focus {\n            border: 2px solid dodgerblue;\n        }\n\n    /* Set a style for the submit button */\n    .btn {\n        background-color: dodgerblue;\n        color: white;\n        padding: 15px 20px;\n        border: none;\n        cursor: pointer;\n        width: 100%;\n        opacity: 0.9;\n    }\n\n        .btn:hover {\n            opacity: 1;\n        }\n\n    .newbtn {\n        border-radius: 30px;\n        background-image: linear-gradient(to right, red, #d500ff);\n        border: 2px solid #b23;\n        font-weight: 500;\n        font-size: 23px;\n        padding: 4px;\n    }\n" }} />
    <div className="page-wrapper bg-gra-01 p-t-100  font-poppins loginbackm">
      <div className="wrapper wrapper--w960">
        <div className="card-3">
          <div className="row">
            <form role="form" id="forgotpasswordform" name="forgotpasswordform" noValidate style={{width: '100%'}}>
              <h2 className="title" style={{color: '#fff'}}>Forgot Password</h2>
              <div className="input-container">
                <i className="fa fa-user icon" />
                <input type="email" className="input-field" ng-model="emailid" name="emailid" autoComplete="off" maxLength={200} placeholder="Email id" required />
                <span className="error-message" ng-show="forgotpasswordform.emailid.$dirty && forgotpasswordform.emailid.$invalid">Please enter email-id.</span>
              </div>
              <div className="col-6" style={{float: 'left'}}>
                <div className="small" style={{color: '#fff'}}><a href="/login">Login </a></div>
                <div className="small" style={{color: '#fff'}}><a href="/registration">Register Now</a></div>
              </div>
              <div className="col-6" style={{float: 'left'}}>
                <button type="button" className="btn newbtn" ng-disabled="forgotpasswordform.$invalid" ng-click="ForgotPassword()">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* Icons font CSS*/}
    <link href="vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all" />
    <link href="vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all" />
    {/* Font special for pages*/}
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
    {/* Vendor CSS*/}
    <link href="vendor/select2/select2.min.css" rel="stylesheet" media="all" />
    <link href="vendor/datepicker/daterangepicker.css" rel="stylesheet" media="all" />
    {/* Main CSS*/}
    {/*<link href="css/main.css" rel="stylesheet" media="all">*/}
  </div>