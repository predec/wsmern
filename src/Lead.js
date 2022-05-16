 <div>
        <div ng-include="'views/_header.html'">
        </div>
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n    .grab-deal {\n        background: linear-gradient(to right, #26292d, #111214);\n        /*box-shadow: 0 0.625rem 0.938rem 0 rgba(59, 55, 188, 0.5);*/\n        color: #2ecdf3;\n        border-radius: 1.563rem;\n        text-align: center;\n        font-weight: 600;\n        text-transform: uppercase;\n        font-size: 0.8rem;\n        margin: 0 0.6rem;\n        /*border:none;*/\n    }\n\n    .carousel-indicators {\n        bottom: -40px;\n    }\n" }} />
        {/**/}
        <section id="layout-content" className="container">
          <div className="flash-message">
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-2" ng-include="'views/_sideMenu.html'">
              </div>
              <div className="col-md-6" data-ng-show="Portal=='Poker'">
                <section className="section section-top-border section-rakeback-deals text-center show-mobile-only">
                  <div className="container">
                    <div id="myCarouse3" className="carousel slide" data-ride="carousel">
                      {/* Carousel indicators */}
                      {/* Wrapper for carousel items */}
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="row row-eq-height">
                            <div className="col-md-12">
                              <div className="content card--shadow">
                                <img src="/assets/images/RummyBaazi_Logo.png" alt="" className="icon img-fluid" />
                                <h4 className="brand-name text-uppercase">Rummy <br /> Baazi</h4>
                                <h3 className="heading">
                                  <span>1500*</span>
                                  Bonus
                                </h3>
                                <a className="btn btn-primary btn--primary grab-deal" href="javascript::" onclick="redirectOnDeal('1');">Grab Deal</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="row row-eq-height">
                            <div className="col-md-12">
                              <div className="content card--shadow">
                                <img src="/assets/images/Taj-Rummy-Logo.png" alt="" className="icon img-fluid" />
                                <h4 className="brand-name text-uppercase">Taj <br /> Rummy</h4>
                                <h3 className="heading">
                                  <span>1500*</span>
                                  Bonus
                                </h3>
                                <a className="btn btn-primary btn--primary grab-deal" href="javascript::" onclick="redirectOnDeal('2');">Grab Deal</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="row row-eq-height">
                            <div className="col-md-12">
                              <div className="content card--shadow">
                                <img src="/assets/images/Khelplay-Rummy-Logo.gif" alt="" className="icon img-fluid" />
                                <h4 className="brand-name text-uppercase">Khelplay <br /> Rummy</h4>
                                <h3 className="heading">
                                  <span>1500*</span>
                                  Bonus
                                </h3>
                                <a className="btn btn-primary btn--primary grab-deal" href="javascript:void(0)" onclick="redirectOnDeal('3');">Grab Deal</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="row row-eq-height">
                            <div className="col-md-12">
                              <div className="content card--shadow">
                                <img src="/assets/images/rummy-passion-logo.png" alt="" className="icon img-fluid" />
                                <h4 className="brand-name text-uppercase">Rummy<br />Passion</h4>
                                <h3 className="heading">
                                  <span>1500*</span>
                                  Bonus
                                </h3>
                                <a className="btn btn-primary btn--primary grab-deal" href="javascript::" onclick="redirectOnDeal('4');">Grab Deal</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="section section-top-border section-rakeback-deals text-center show-desktop-only">
                  <div className="container">
                    <div id="myCarouse2" className="carousel slide" data-ride="carousel">
                      {/* Carousel indicators */}
                      <ol className="carousel-indicators">
                        <li data-target="#myCarouse2" data-slide-to={0} className="active" />
                        <li data-target="#myCarouse2" data-slide-to={1} className="active" />
                      </ol>
                      {/* Wrapper for carousel items */}
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="row row-eq-height">
                            <div className="col-md-6 col-sm-12">
                              <div className="content card--shadow">
                                <img src="/assets/images/RummyBaazi_Logo.png" alt="" className="icon img-fluid" />
                                <h4 className="brand-name text-uppercase">Rummy <br /> Baazi</h4>
                                <h3 className="heading">
                                  <span>1500*</span>
                                  Bonus
                                </h3>
                                <a className="btn btn-primary btn--primary grab-deal" href="javascript::" onclick="redirectOnDeal('1');">Grab Deal</a>
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <div className="content card--shadow">
                                <img src="/assets/images/Taj-Rummy-Logo.png" alt="" className="icon img-fluid" />
                                <h4 className="brand-name text-uppercase">Taj <br /> Rummy</h4>
                                <h3 className="heading">
                                  <span>1500*</span>
                                  Bonus
                                </h3>
                                <a className="btn btn-primary btn--primary grab-deal" href="javascript::" onclick="redirectOnDeal('2');">Grab Deal</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="row row-eq-height">
                            <div className="col-md-6 col-sm-12">
                              <div className="content card--shadow">
                                <img src="/assets/images/Khelplay-Rummy-Logo.gif" alt="" className="icon img-fluid" />
                                <h4 className="brand-name text-uppercase">Khelplay <br /> Rummy</h4>
                                <h3 className="heading">
                                  <span>1500*</span>
                                  Bonus
                                </h3>
                                <a className="btn btn-primary btn--primary grab-deal" href="javascript:void(0)" onclick="redirectOnDeal('3');">Grab Deal</a>
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <div className="content card--shadow">
                                <img src="/assets/images/rummy-passion-logo.png" alt="" className="icon img-fluid" />
                                <h4 className="brand-name text-uppercase">Rummy<br />Passion</h4>
                                <h3 className="heading">
                                  <span>1500*</span>
                                  Bonus
                                </h3>
                                <a className="btn btn-primary btn--primary grab-deal" href="javascript::" onclick="redirectOnDeal('4');">Grab Deal</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-md-6" data-ng-show="Portal=='Rummy'">
                <section className="section section-top-border section-rakeback-deals text-center show-mobile-only">
                  <div className="container">
                    <div id="myCarouse3" className="carousel slide" data-ride="carousel">
                      {/* Carousel indicators */}
                      {/* Wrapper for carousel items */}
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="row row-eq-height">
                            <div className="col-md-12">
                              <div className="content card--shadow">
                                <img src="/assets/images/partner/pokerdangal-logo.png" alt="" className="icon img-fluid" />
                                <h4 className="brand-name text-uppercase">Poker <br /> Dangal</h4>
                                <h3 className="heading">
                                  <span>20%</span>
                                  RAKEBACK
                                </h3>
                                <p>
                                  130% First <br />
                                  Deposit Bonus<br />&nbsp;
                                </p>
                                <a className="btn btn-primary btn--primary grab-deal" href="javascript::" ng-click="RedirectToPartnerPage(4)">Grab Deal</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="row row-eq-height">
                            <div className="col-md-12">
                              <div className="content card--shadow">
                                <img src="/assets/images/partner/pokerbaazi-logo.png" alt="" className="icon img-fluid" />
                                <h4 className="brand-name text-uppercase">Poker <br /> Baazi</h4>
                                <h3 className="heading">
                                  <span>25%</span>
                                  RAKEBACK
                                </h3>
                                <p>
                                  100% First <br />
                                  Deposit Bonus <br />
                                  upto ₹2500/-
                                </p>
                                <a className="btn btn-primary btn--primary grab-deal" href="javascript::" ng-click="RedirectToPartnerPage(2)">Grab Deal</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="row row-eq-height">
                            <div className="col-md-12">
                              <div className="content card--shadow">
                                <img src="/assets/images/partner/poket52-logo.png" alt="" className="icon img-fluid" />
                                <h4 className="brand-name text-uppercase">Pocket <br /> 52</h4>
                                <h3 className="heading">
                                  <span>₹ 100</span>
                                  SIGNUP BONUS
                                </h3>
                                <p>
                                  130% First <br />
                                  Deposit Bonus<br />&nbsp;
                                </p>
                                <a className="btn btn-primary btn--primary grab-deal" href="http://bit.ly/WSNAP52" target="_blank">Grab Deal</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="row row-eq-height">
                            <div className="col-md-12">
                              <div className="content card--shadow">
                                <img src="/assets/images/partner/9stacks-logo.png" alt="" className="icon img-fluid" />
                                <h4 className="brand-name text-uppercase">9Stacks<br />&nbsp;</h4>
                                <h3 className="heading">
                                  <span>₹ 150</span>
                                  SIGNUP BONUS
                                </h3>
                                <p>
                                  10% <br />
                                  Rakeback<br />&nbsp;
                                </p>
                                <a className="btn btn-primary btn--primary grab-deal" href="javascript::" ng-click="RedirectToPartnerPage(17)">Grab Deal</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="section section-top-border section-rakeback-deals text-center show-desktop-only">
                  <div className="container">
                    <div id="myCarouse2" className="carousel slide" data-ride="carousel">
                      {/* Carousel indicators */}
                      <ol className="carousel-indicators">
                        <li data-target="#myCarouse2" data-slide-to={0} className="active" />
                        <li data-target="#myCarouse2" data-slide-to={1} className="active" />
                      </ol>
                      {/* Wrapper for carousel items */}
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="row row-eq-height">
                            <div className="col-md-6 col-sm-12">
                              <div className="content card--shadow">
                                <img src="/assets/images/partner/pokerdangal-logo.png" alt="" className="icon img-fluid" />
                                <h4 className="brand-name text-uppercase">Poker <br /> Dangal</h4>
                                <h3 className="heading">
                                  <span>20%</span>
                                  RAKEBACK
                                </h3>
                                <p>
                                  130% First <br />
                                  Deposit Bonus<br />&nbsp;
                                </p>
                                <a className="btn btn-primary btn--primary grab-deal" href="javascript::" ng-click="RedirectToPartnerPage(4)">Grab Deal</a>
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <div className="content card--shadow">
                                <img src="/assets/images/partner/pokerbaazi-logo.png" alt="" className="icon img-fluid" />
                                <h4 className="brand-name text-uppercase">Poker <br /> Baazi</h4>
                                <h3 className="heading">
                                  <span>25%</span>
                                  RAKEBACK
                                </h3>
                                <p>
                                  100% First <br />
                                  Deposit Bonus <br />
                                  upto ₹2500/-
                                </p>
                                <a className="btn btn-primary btn--primary grab-deal" href="javascript::" ng-click="RedirectToPartnerPage(2)">Grab Deal</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="row row-eq-height">
                            <div className="col-md-6 col-sm-12">
                              <div className="content card--shadow">
                                <img src="/assets/images/partner/poket52-logo.png" alt="" className="icon img-fluid" />
                                <h4 className="brand-name text-uppercase">Pocket <br /> 52</h4>
                                <h3 className="heading">
                                  <span>₹ 100</span>
                                  SIGNUP BONUS
                                </h3>
                                <p>
                                  130% First <br />
                                  Deposit Bonus
                                </p>
                                <a className="btn btn-primary btn--primary grab-deal" href="http://bit.ly/WSNAP52" target="_blank">Grab Deal</a>
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <div className="content card--shadow">
                                <img src="/assets/images/partner/9stacks-logo.png" alt="" className="icon img-fluid" />
                                <h4 className="brand-name text-uppercase">9Stacks<br />&nbsp;</h4>
                                <h3 className="heading">
                                  <span>₹ 150</span>
                                  SIGNUP BONUS
                                </h3>
                                <p>
                                  10% <br />
                                  Rakeback
                                </p>
                                <a className="btn btn-primary btn--primary grab-deal" href="javascript::" ng-click="RedirectToPartnerPage(17)">Grab Deal</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-md-4 show-desktop-only" ng-include="'views/_activity.html'">
              </div>
            </div>
          </div>
        </section>
      </div>