<div>
        {/* header top begin */}
        <div ng-include="'views/_header.html'">
        </div>
        {/* header top end */}
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n    .otp-verifaction {\n        margin-top: 20px;\n    }\n\n    .code-alrt-inputs li {\n        display: inline-block;\n        vertical-align: middle;\n    }\n\n    .code-alrt-inputs input {\n        text-align: center;\n    }\n\n    ul.code-alrt-inputs input {\n        width: 40px;\n        border: 1px solid #efefef;\n        text-align: center;\n        padding: 0;\n        font-size: 14px;\n        font-weight: 500;\n        font-family: 'Roboto', sans-serif;\n    }\n\n        ul.code-alrt-inputs input:focus {\n            box-shadow: none;\n            border: 1px solid #f55d2c;\n        }\n\n    .chck-btn {\n        height: 33px;\n        display: inline-block;\n        background: #f55d2c;\n        color: #fff !important;\n        padding: 5px 15px;\n        font-weight: 500;\n        border-radius: 5px;\n    }\n\n    .hover-btn:hover {\n        text-decoration: none !important;\n        background: #f55d2c;\n        color: #fff !important;\n        transition: all .2s ease-in-out;\n        -webkit-transition: all 0.2s ease-in-out;\n        -o-transition: all 0.2s ease-in-out;\n        -ms-transition: all 0.2s ease-in-out;\n        -webkit-transition: all 0.2s ease-in-out;\n        background-image: -webkit-linear-gradient(left, rgba(230, 92, 91, 0.9), rgba(245, 93, 44, 0.9));\n        background-image: linear-gradient(to right, rgba(230, 92, 91, 0.9), rgba(245, 93, 44, 0.9));\n    }\n\n    .checkout-login .btn {\n        height: 42px;\n        line-height: 1.8;\n    }\n\n    .li-otp {\n        position: relative; /* necessary for positioning the :after */\n    }\n\n    li.done {\n        list-style: none; /* remove normal bullet for done items */\n    }\n\n        li.done:after {\n            content: \"\";\n            background-color: transparent;\n            position: absolute;\n            left: 0px;\n            top: 0px;\n            width: 10px;\n            border-bottom: 3px solid #4D7C2A;\n            height: 21px;\n            border-right: 3px solid #4D7C2A;\n            transform: rotate(45deg);\n            -o-transform: rotate(45deg);\n            -ms-transform: rotate(45deg);\n            -webkit-transform: rotate(45deg);\n        }\n" }} />
        <section id="layout-content" className="container" style={{height: '1200px'}}>
          <div className="flash-message">
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-2" ng-include="'views/_sideMenu.html'">
              </div>
              <div className="col-md-6">
                <h3 className="page-title">Profile</h3>
                <div className="form-group">
                  <div className="text-center">
                    <img ng-src="{{previewimage}}" onerror="this.src='assets/images/user-img.png'" style={{maxHeight: '120px'}} className="avatar img-circle" alt="avatar" />
                    <h6>Upload a different photo...</h6>
                    <input type="file" className="form-control" ng-change="angular.element(this).scope().UploadImage()" ng-model="fldselfie" id="fldselfie" style={{display: 'block'}} />
                    <input type="text" ng-model="filename" style={{display: 'none'}} />
                    <span style={{color: '{{textcolor}}'}}>{'{'}{'{'}fileuploadmsg{'}'}{'}'}</span>
                  </div>
                </div>
                <form role="form" id="editform" name="editform" className="form-horizontal" noValidate>
                  <div className="form-group">
                    <label htmlFor="accountName">Full Name</label>
                    <input type="text" className="form-control" ng-model="username" name="username" autoComplete="off" maxLength={100} placeholder="Your Name" required />
                    <span className="error-message" ng-show="editform.username.$dirty && editform.username.$invalid">Please enter your name.</span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="accountMobile">Mobile:</label>
                    <input type="tel" className="form-control" ng-change="checkMobileChanged()" ng-pattern="PhoneNumberValidation" ng-model="mobileno" name="mobileno" autoComplete="off" maxLength={10} placeholder="+91-xxx-xxxxx" onkeypress="return checkNumber(this.value, event);" xtype="tel" required />
                    <span className="error-message" ng-show="(editform.mobileno.$dirty && editform.mobileno.$invalid) || (editform.mobileno.$error.pattern)">Please enter valid mobile number</span>
                    <a ng-hide="mobileVerified==1" className="btn btn-primary" ng-click="generateOtp()" ng-show="mobileno.length==10" style={{color: '#fff'}}>Send OTP</a>
                    <span style={{color: 'green'}} id="spnMsg" />
                  </div>
                  <div className="otp-verifaction" ng-show="showOtpVerifaction">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group mb-0">
                          <label className="col-lg-3 control-label">Enter Code:</label>
                          <div className="col-lg-8">
                            <ul className="code-alrt-inputs">
                              <li className="li-otp">
                                <input ng-model="code1" ng-change="setFocus(2)" name="code1" id="code1" autoComplete="off" maxLength={1} onkeypress="return checkNumber(this.value, event);" type="tel" placeholder className="form-control input-md" />
                              </li>
                              <li className="li-otp">
                                <input ng-model="code2" ng-change="setFocus(3)" name="code2" id="code2" autoComplete="off" maxLength={1} onkeypress="return checkNumber(this.value, event);" type="tel" placeholder className="form-control input-md" />
                              </li>
                              <li className="li-otp">
                                <input ng-model="code3" ng-change="setFocus(4)" name="code3" id="code3" autoComplete="off" maxLength={1} onkeypress="return checkNumber(this.value, event);" type="tel" placeholder className="form-control input-md" />
                              </li>
                              <li className="li-otp">
                                <input ng-model="code4" name="code4" id="code4" autoComplete="off" maxLength={1} onkeypress="return checkNumber(this.value, event);" type="tel" placeholder className="form-control input-md" />
                              </li>
                              <li className="li-otp">
                                <a className="btn btn-primary" href="javascript:void(0)" ng-click="verifyOtp()">Verify</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="mt-5">KYC</h4>
                  <div className="kyc-details">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="accountPan">Pan Card</label>
                          <input type="text" data-ng-disabled="kyc_approved" className="form-control" ng-pattern="PanValidation" ng-model="pancard" name="pancard" autoComplete="off" maxLength={10} placeholder="Pan Card" required />
                          <span className="error-message" ng-show="(editform.pancard.$dirty && editform.pancard.$invalid) || (editform.pancard.$error.pattern)">Please enter valid Pan Card.</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="accountAadhar">Aadhar Card</label>
                          <input type="text" data-ng-disabled="kyc_approved" className="form-control" ng-pattern="AadhaarValidation" ng-model="aadhaarcard" name="aadhaarcard" autoComplete="off" maxLength={12} placeholder="Aadhaar Card" onkeypress="return checkNumber(this.value, event);" xtype="tel" required />
                          <span className="error-message" ng-show="(editform.aadhaarcard.$dirty && editform.aadhaarcard.$invalid) || (editform.aadhaarcard.$error.pattern)">Please Enter the 12 digit aadhar number</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="accountBankName">Bank Name</label>
                          <select data-ng-disabled="kyc_approved" name="bankname" id="bankname" ng-model="bankname" className="form-control" required>
                            <option value>--Select --</option>
                            <option value="ALLAHABAD BANK">ALLAHABAD BANK </option>
                            <option value="ANDHRA BANK">ANDHRA BANK</option>
                            <option value="AXIS BANK">AXIS BANK</option>
                            <option value="STATE BANK OF INDIA">STATE BANK OF INDIA</option>
                            <option value="BANK OF BARODA">BANK OF BARODA</option>
                            <option value="UCO BANK">UCO BANK</option>
                            <option value="UNION BANK OF INDIA">UNION BANK OF INDIA</option>
                            <option value="BANK OF INDIA">BANK OF INDIA</option>
                            <option value="BANDHAN BANK LIMITED">BANDHAN BANK LIMITED</option>
                            <option value="CANARA BANK">CANARA BANK</option>
                            <option value="GRAMIN VIKASH BANK">GRAMIN VIKASH BANK</option>
                            <option value="CORPORATION BANK">CORPORATION BANK</option>
                            <option value="INDIAN BANK">INDIAN BANK</option>
                            <option value="INDIAN OVERSEAS BANK">INDIAN OVERSEAS BANK</option>
                            <option value="ORIENTAL BANK OF COMMERCE">ORIENTAL BANK OF COMMERCE</option>
                            <option value="PUNJAB AND SIND BANK">PUNJAB AND SIND BANK</option>
                            <option value="PUNJAB NATIONAL BANK">PUNJAB NATIONAL BANK</option>
                            <option value="RESERVE BANK OF INDIA">RESERVE BANK OF INDIA</option>
                            <option value="SOUTH INDIAN BANK">SOUTH INDIAN BANK</option>
                            <option value="UNITED BANK OF INDIA">UNITED BANK OF INDIA</option>
                            <option value="CENTRAL BANK OF INDIA">CENTRAL BANK OF INDIA</option>
                            <option value="VIJAYA BANK">VIJAYA BANK</option>
                            <option value="DENA BANK">DENA BANK</option>
                            <option value="BHARATIYA MAHILA BANK LIMITED">BHARATIYA MAHILA BANK LIMITED</option>
                            <option value="FEDERAL BANK LTD">FEDERAL BANK LTD </option>
                            <option value="HDFC BANK LTD">HDFC BANK LTD</option>
                            <option value="ICICI BANK LTD">ICICI BANK LTD</option>
                            <option value="IDBI BANK LTD">IDBI BANK LTD</option>
                            <option value="PAYTM BANK">PAYTM BANK</option>
                            <option value="FINO PAYMENT BANK">FINO PAYMENT BANK</option>
                            <option value="INDUSIND BANK LTD">INDUSIND BANK LTD</option>
                            <option value="KARNATAKA BANK LTD">KARNATAKA BANK LTD</option>
                            <option value="KOTAK MAHINDRA BANK">KOTAK MAHINDRA BANK</option>
                            <option value="YES BANK LTD">YES BANK LTD</option>
                            <option value="SYNDICATE BANK">SYNDICATE BANK</option>
                            <option value="BANK OF INDIA">BANK OF INDIA</option>
                            <option value="BANK OF MAHARASHTRA">BANK OF MAHARASHTRA</option>
                          </select>
                          <span className="error-message" ng-show="editform.bankname.$dirty && editform.bankname.$invalid">Please select bank.</span>
                        </div>      
                        <div className="form-group">
                          <label htmlFor="accountBankIFSC">Bank IFSC</label>
                          <input type="text" data-ng-disabled="kyc_approved" className="form-control" ng-model="bankifsc" id="bankifsc" name="bankifsc" autoComplete="off" maxLength={50} placeholder="IFSC code" required />
                          <span className="error-message" ng-show="editform.bankifsc.$dirty && editform.bankifsc.$invalid">Please enter IFSC code.</span>
                        </div>
                        <span id="branchAddress" style={{color: '{{msgColor}}'}} />
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="accountBankAccountNumber">Bank Account Number</label>
                          <input type="text" data-ng-disabled="kyc_approved" className="form-control" ng-model="bankaccount" name="bankaccount" autoComplete="off" maxLength={50} placeholder="Bank Account" onkeypress="return checkNumber(this.value, event);" xtype="tel" required />
                          <span className="error-message" ng-show="editform.bankaccount.$dirty && editform.bankaccount.$invalid">Please enter your bank account.</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="accountBankAccountNumber">UPI/Virtual Address</label>
                          <input type="text" data-ng-disabled="kyc_approved" className="form-control" id="bankupi" ng-model="bankupi" name="bankupi" autoComplete="off" maxLength={50} placeholder="UPI/Virtual Address" />
                          <span className="error-message" ng-show="editform.bankupi.$dirty && editform.bankupi.$invalid">Please enter UPI/Virtual Address.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="button" ng-disabled="editform.$invalid" className="btn btn-default btn-primary" ng-show="mobileVerified==1" ng-click="UpdateProfile()">Save</button>
                  <span ng-show="mobileVerified!=1" style={{color: 'red', fontSize: '20px'}}>Your mobile number is not verified yet, please verify now</span>
                </form>
              </div>
              <div className="col-md-4 show-desktop-only" ng-include="'views/_activity.html'">
              </div>
            </div>
          </div>
        </section>
      </div>