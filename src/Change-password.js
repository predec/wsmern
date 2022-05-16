<div>
        <div className="page-wrapper bg-gra-01 p-t-50  font-poppins">
          <div className="wrapper wrapper--w780">
            <div className="card card-3">
              <div className="card-heading" />
              <div className="card-body">
                <h2 className="title">Change Password</h2>
                <form role="form" id="changepasswordform" name="changepasswordform" noValidate>
                  <div className="input-group">
                    <input type="password" className="input--style-3" ng-model="password" name="password" autoComplete="off" maxLength={100} placeholder="New Password" required />
                    <span className="error-message" ng-show="changepasswordform.password.$dirty && changepasswordform.password.$invalid">Please enter new password.</span>
                  </div>
                  <div className="input-group">
                    <input type="password" className="input--style-3" ng-model="cpassword" name="cpassword" autoComplete="off" maxLength={100} placeholder="Confirm Password" required />
                    <span className="error-message" ng-show="changepasswordform.cpassword.$dirty && changepasswordform.cpassword.$invalid">Please enter confirm password.</span>
                  </div>
                  <div className="p-t-10">
                    <input className="btn btn--pill btn--green" ng-disabled="changepasswordform.$invalid" type="button" ng-click="ChangePassword()" defaultValue="Change Password" />
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
        <link href="css/main.css" rel="stylesheet" media="all" />
      </div>