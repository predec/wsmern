<div>
        {/* header top begin */}
        <div ng-include="'views/_header.html'">
        </div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href="/assets/css/refer.css" rel="stylesheet" />
        <div id="fb-root" />
        <style dangerouslySetInnerHTML={{__html: "\n    .refer-a-friend-copy {\n        color: {{portalColor}};\n    }\n" }} />
        <section id="layout-content" className="container ng-scope">
          <div className="flash-message">
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-2" ng-include="'views/_sideMenu.html'">
              </div>
              <div className="col-md-6">
                <div className="detail-container content card--shadow" style={{background: 'url(/assets/images/refer-a-friend-bg.png)', height: '93vh', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', textAlign: 'center'}}>
                  <div className="refer-a-friend text-uppercase color-primary">
                    <span>REFER A<br />FRIEND</span>
                  </div>
                  <div className="refer-a-friend-rakeback color-primary">
                    <span>
                      Get Rakeback for a<br />
                      Lifetime when you<br />
                      Refer a friend.
                    </span>
                  </div>
                  <div className="refer-a-friend-copy" style={{marginLeft: '1.5em'}}>
                    <img src="/assets/images/copy-link.png" />
                  </div>
                  <div className="refer-a-friend-copy" style={{marginTop: '4em', marginLeft: '2.5em'}}>
                    or <br /> SHARE NOW
                  </div>
                  <div className="social-media">
                    <ul className="list-inline">
                      <p id="texttocopy" style={{display: 'none'}}>{'{'}{'{'}ReferalCode{'}'}{'}'}</p>
                      <li className="list-inline-item"><a href onclick="return shareFB('Congratulations N SRI NITHYA on winning Anmol Ratna Scholarship 2017-18','https://anmolratna.airtel.com/Downloads/ChildScholarship/DE1511719_CHILD_PHOTO_TWO_2017_08_04_12_50_13.jpeg','','Click here to know more...','')"><i className="fa fa-facebook" /></a></li>
                      <li className="list-inline-item whatsapp" ng-show="ReferalCode!=''"><a onclick="shareOnWhatsapp('#texttocopy')" href target="_blank"><i className="fa fa-whatsapp" /></a></li>
                      <li className="list-inline-item"><a onclick="openModal()" href="havascript::" style={{color: '#676a6b'}}>Explore More</a></li>
                    </ul>
                  </div>
                  <div className="page-content detail-section ng-star-inserted" style={{padding: '0px', marginTop: '10px', display: 'none'}}>
                    <div style={{position: 'relative', top: '-30px', display: 'none'}}>
                      <p className="code-title" style={{color: '#fff'}}>Your Referral Code</p>
                      <div className="code-box">
                        <label id="myInput" ngxclipboard style={{color: '#fff'}} className="ng-binding">WHISP410432203</label>
                      </div>
                      <p className="code-guidelines" style={{color: '#fff'}}>Click to copy code &amp; share it with friends.</p>
                      <div className="whatsapp" style={{background: '#1B2062', textAlign: 'center'}}>
                        <a className="btn-social btn-whatsapp" onclick="shareOnWhatsapp('#texttocopy')" href target="_blank">
                          <i className="ti-comments-smiley" /> Share Now
                        </a>
                      </div>
                      <div className="sb-button sb-circles-dark" />
                    </div>
                    <p />
                  </div>
                </div>
                <div className="page-content detail-section" style={{padding: '0px', marginTop: '10px', height: '354px', overflow: 'auto', display: 'none'}}>
                  <div className="mat-tab-label-container">
                    <div className="mat-tab-list" role="tablist" style={{transform: 'translateX(0px)', width: '100%'}}>
                      <div className="mat-tab-labels">
                        <ul className="nav nav-tabs">
                          <li className="active" style={{width: '100%'}}>
                            <a onclick="openModal()" href="havascript::">Details</a>
                          </li>
                        </ul>
                      </div>
                      <mat-ink-bar className="mat-ink-bar" style={{visibility: 'visible', left: '0px', width: '236px'}}>
                      </mat-ink-bar>
                    </div>
                  </div>
                  <div aria-hidden="true" className="mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4 mat-ripple mat-tab-header-pagination-disabled" mat-ripple>
                    <div className="mat-tab-header-pagination-chevron">
                    </div>
                  </div>
                  <div className="mat-tab-body-wrapper">
                    <div className="tab-content">
                      <div id="details" className="tab-pane fade in active show">
                        <div className="mat-tab-body-content ng-trigger ng-trigger-translateTab" style={{transform: 'none'}}>
                          <div className="tab-content ng-star-inserted" style={{padding: '5px 15px 10px', fontFamily: 'Lato !important'}}>
                            <div classs="detail-wrapper">
                              <p className="detail-title">What you do:</p><ol classs="detail-text">
                                <li>Share your affiliate code with your players.</li>
                                <li>The player registers on Whispering Shouts with your affiliate code and gets added to the affiliate program</li>
                                <li>Everytime your player plays on any of our partner site to generate Rakeback for themself, you get 10% of their total earnings for lifetime which means as long as your player continues to play, you continue to make free money</li>
                              </ol>
                              <p className="detail-title">What you (affiliate) get:</p>
                              <ul classs="detail-text">
                                <li>Rs.100 for every new user that you bring to our site. This is subject to the user completing the KYC and generating a minimum of Rs500 of rake for themself</li>
                                <li>10% of the net rake your player generates on our site; there is no limit on the duration for which you earn your commission, you will continue to earn as long as your player plays on our site. See T&amp;C.</li>
                                <li>2x Multiplier, which means an additional 10% if you are a “Super” affiliate. You reach “Super” affiliate status when at least 5 of your players are active and have done their KYC</li>
                                <li>Periodic complimentary tickets and exclusive deposit codes (at any of our partner platform)</li>
                              </ul>
                              <p className="detail-title">What your players get:</p>
                              <ul classs="detail-text">
                                <li>Rs.100 for every new user that you bring to our site</li>
                                <li>Your player will be eligible for the Rakeback</li>
                                <li>Periodic Custom deposit codes exclusively for your players (each can be used once):</li>
                              </ul>
                              <p>Note that these deposit codes can be used only after KYC3</p>
                              <div className="terms-wrapper">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="affiliates" className="tab-pane fade">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 show-desktop-only" ng-include="'views/_activity.html'">
              </div>
            </div>
          </div>
        </section>
        <div className="modal fade" id="myModal" role="dialog" data-backdrop="static" data-keyboard="false">
          <div className="modal-dialog modal-lg">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title text-center">
                  <span style={{color: '#e92026', fontWeight: 'bold'}}>Details</span>
                </h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div classs="detail-wrapper">
                  <p className="detail-title">What you do:</p><ol classs="detail-text">
                    <li>Share your affiliate code with your players.</li>
                    <li>The player registers on Whispering Shouts with your affiliate code and gets added to the affiliate program</li>
                    <li>Everytime your player plays on any of our partner site to generate Rakeback for themself, you get 10% of their total earnings for lifetime which means as long as your player continues to play, you continue to make free money</li>
                  </ol>
                  <p className="detail-title">What you (affiliate) get:</p>
                  <ul classs="detail-text">
                    <li>Rs.100 for every new user that you bring to our site. This is subject to the user completing the KYC and generating a minimum of Rs500 of rake for themself</li>
                    <li>10% of the net rake your player generates on our site; there is no limit on the duration for which you earn your commission, you will continue to earn as long as your player plays on our site. See T&amp;C.</li>
                    <li>2x Multiplier, which means an additional 10% if you are a “Super” affiliate. You reach “Super” affiliate status when at least 5 of your players are active and have done their KYC</li>
                    <li>Periodic complimentary tickets and exclusive deposit codes (at any of our partner platform)</li>
                  </ul>
                  <p className="detail-title">What your players get:</p>
                  <ul classs="detail-text">
                    <li>Rs.100 for every new user that you bring to our site</li>
                    <li>Your player will be eligible for the Rakeback</li>
                    <li>Periodic Custom deposit codes exclusively for your players (each can be used once):</li>
                  </ul>
                  <p>Note that these deposit codes can be used only after KYC</p>
                  <div className="terms-wrapper">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        {/*<style>
    .card--shadow {
        border-radius: 10px !important;
        border: 5px solid #3e3e3e !important;
        box-shadow: -15px -15px 5px #1a1a1a inset !important;
    }
</style>*/}
      </div>