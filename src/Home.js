<div>
        {/* header top begin */}
        <div ng-include="'views/_header.html'">
        </div>
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n    .page-dashboard .container {\n        max-width: 1100px;\n    }\n\n    .headerMenu {\n        margin-top: 55px;\n    }\n\n    .grab-deal {\n        background: linear-gradient(to right, #26292d, #111214);\n        /*box-shadow: 0 0.625rem 0.938rem 0 rgba(59, 55, 188, 0.5);*/\n        color: #2ecdf3;\n        border-radius: 1.563rem;\n        text-align: center;\n        font-weight: 600;\n        text-transform: uppercase;\n        font-size: 0.8rem;\n        margin: 0 0.6rem;\n        /*border:none;*/\n    }\n    .carousel-indicators {\n        bottom: -40px;\n    }\n" }} />
        <section id="layout-content" className="container" data-ng-init="setPortal_V1('poker')">
          {/*<div class="flash-message">

    <ul class="site-selection">
            <li>
                <a href="javascript:void(0);" ng-click="setPortal('/poker')" class="site-link active">Poker</a>
                <a href="javascript:void(0);" ng-click="setPortal('/rummy')" class="site-link" style="color:#BB001B;">Rummy</a>
            </li>
        </ul>
        </div>*/}
          <br />
          <section id="headerMenu" data-ng-init="getBanner()">
            <div className="home-main-banner">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-ng-repeat="item in BannerList | filter:{pageId:1}:true" data-ng-click="setBannerIndex($index)" data-target="#carouselExampleIndicators" data-slide-to="{{$index}}" className="{{$index==bannerIndex?'active':''}}" />
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div data-ng-repeat="item in BannerList | filter:{pageId:1}:true" className="carousel-item {{$index==bannerIndex?'active':''}} custom-carousel-item" style={{backgroundImage: 'url({{item.bannerImage1}})'}}>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <style dangerouslySetInnerHTML={{__html: "\n        .custom-carousel-item {\n            height: 437px;\n            max-height: 437px;\n            background: no-repeat center center scroll;\n            -webkit-background-size: cover;\n            -moz-background-size: cover;\n            -o-background-size: cover;\n            background-size: cover;\n        }\n    " }} />
          <section className="section home-intro" style={{padding: '0 !important'}}>
            <div className="container">
              <div className="row listing">
                <div className="col-md-3 text-center">
                  <img src="/assets/images/icon/user.png" alt="" className="icon img-fluid" />
                  <h4 className="heading mb-0">{'{'}{'{'}Registereduser{'}'}{'}'} +</h4>
                  <p>Registered <br /> Users</p>
                </div>
                <div className="col-md-3 text-center">
                  <img src="/assets/images/icon/cash.png" alt="" className="icon img-fluid" />
                  <h4 className="heading mb-0">{'{'}{'{'}RealCashBonusGiven{'}'}{'}'}</h4>
                  <p>Real Cash <br /> Bonus Given</p>
                </div>
                <div className="col-md-3 text-center">
                  <img src="/assets/images/icon/rakeback.png" alt="" className="icon img-fluid" />
                  <h4 className="heading mb-0">{'{'}{'{'}RakebackGiven{'}'}{'}'}</h4>
                  <p>Rakeback<br /> Given</p>
                </div>
                <div className="col-md-3 text-center">
                  <img src="/assets/images/icon/ticket.png" alt="" className="icon img-fluid" />
                  <h4 className="heading mb-0">{'{'}{'{'}TournamentTicketsGiven{'}'}{'}'}</h4>
                  <p>Tournament <br /> Tickets Given</p>
                </div>
              </div>
              <div className="row row-eq-height about-section mt-5">
                <div className="col-md-7">
                  <h1 className="heading text-uppercase">What is rakeback ?</h1>
                  <h3 className="subheading text-uppercase">How it is calculated</h3>
                  <p>
                    Rakeback online is free money and no one should refuse free money. Naturally when you play online poker you
                    want to be winning. But what about those days when you don’t win? Rather you breakeven or even lose a little?
                    Well when you breakeven, the rakeback you have earned means you’ve actually had a profitable day and when you
                    lose, the rakeback can offset some or all of that loss and possibly mean you breakeven or lose less that you
                    thought! So you should be able to see straight away that it’s a no brainer to make sure you are always playing
                    with a rakeback deal!
                  </p>
                </div>
                <div className="col-md-5">
                  <a href="#" className="play-video">
                    <img src="/assets/images/icon/play.png" alt="" className="img-fluid icon" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="section section-top-border text-center  section-promotions default-gradient" style={{marginTop: '20px'}}>
            <div className="container">
              <h2 className="heading text-uppercase mb-3">Promotions</h2>
              <div className="row">
                <div className="col-md-3">
                  <img src="/assets/images/icon/whisp-logo.png" alt="" className="icon img-fluid" />
                  <h4 className="text-uppercase mt-2">Rakeback Deals</h4>
                </div>
                <div className="col-md-3">
                  <img src="/assets/images/icon/leaderboard.png" alt="" className="icon img-fluid" />
                  <h4 className="text-uppercase mt-2">Leaderboards</h4>
                </div>
                <div className="col-md-3">
                  <img src="/assets/images/icon/rewards.png" alt="" className="icon img-fluid" />
                  <h4 className="text-uppercase mt-2">Rewards</h4>
                </div>
                <div className="col-md-3">
                  <img src="/assets/images/icon/refer-a-friend.png" alt="" className="icon img-fluid" />
                  <h4 className="text-uppercase mt-2">Refer A Friend</h4>
                </div>
              </div>
            </div>
          </section>
          <section className="section section-top-border section-rakeback-deals text-center show-desktop-only">
            <div className="container">
              <h2 className="heading section-heading text-uppercase mb-3 ">Rakeback Deals</h2>
              <div className="owl-carousel" style={{display: 'none'}}>
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
              <div id="myCarouse5" className="carousel slide" data-ride="carousel" style={{display: 'block'}}>
                {/* Carousel indicators */}
                <ol className="carousel-indicators">
                  <li data-target="#myCarouse5" data-slide-to={0} className="active" />
                  <li data-target="#myCarouse5" data-slide-to={1} className="active" />
                </ol>
                {/* Wrapper for carousel items */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row row-eq-height">
                      <div className="col-md-4 col-sm-12">
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
                      <div className="col-md-4 col-sm-12">
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
                      <div className="col-md-4 col-sm-12">
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
                      <div className="col-md-4 col-sm-12">
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
                      <div className="col-md-4 col-sm-12">
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
                      <div className="col-md-4 col-sm-12">
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
          <section className="section section-top-border section-rakeback-deals text-center show-mobile-only">
            <div className="container">
              <h2 className="heading section-heading text-uppercase mb-3 ">Rakeback Deals</h2>
              <div id="myCarouse4" className="carousel slide" data-ride="carousel">
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
          <section className="section section-leaderboard section-top-border">
            <div className="container">
              <div className="section-header" style={{backgroundImage: 'url("/assets/images/icon/whisp-leaderboard.png")', backgroundRepeat: 'no-repeat', height: '150px', maxWidth: '55rem'}}>
                <h2 className="heading section-heading text-uppercase mb-3 ">leaderboard</h2>
                <p className="intro-content" style={{marginLeft: '15%'}}>
                  Our goal is to give as much money possible back to the player and on top of the rakeback we also have a leaderboard where top scorers are awarded with cash prizes.
                </p>
              </div>
              <table className="table table-borderless table-ggfish">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr ng-repeat="l in leaderboardList">
                    <td>{'{'}{'{'}l.rank_detail{'}'}{'}'}</td>
                    <td style={{textTransform: 'capitalize'}}>{'{'}{'{'}l.name{'}'}{'}'}</td>
                    <td>{'{'}{'{'}l.Amount{'}'}{'}'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="section section-top-border section-rewards">
            <div className="container">
              <div className="text-center intro-content">
                <img src="/assets/images/rewards.jpg" alt="" className="main-image img-fluid" />
                <p>
                  Playing online poker was never so rewarding
                  Keep generating Reward Points as you to unlock variety of Rewards
                </p>
              </div>
              <div className="prizes text-center ">
                <div className="row row-eq-height">
                  <div className="col-md-3 align-self-end">
                    <img src="/assets/images/layout/prizes/gaming-table.png" alt="" className="icon img-fluid" />
                    <h5 className="text-uppercase mt-2">Gaming <br /> Table</h5>
                  </div>
                  <div className="col-md-3 align-self-end">
                    <img src="/assets/images/layout/prizes/poker-chipset.png" alt="" className="icon img-fluid" />
                    <h5 className="text-uppercase mt-2">Poker <br /> Chips Set</h5>
                  </div>
                  <div className="col-md-3 align-self-end">
                    <img src="/assets/images/layout/prizes/real-cash.png" alt="" className="icon img-fluid" />
                    <h5 className="text-uppercase mt-2">Real Cash <br /> Prize</h5>
                  </div>
                  <div className="col-md-3 align-self-end">
                    <img src="/assets/images/layout/prizes/ticket.png" alt="" className="icon img-fluid" />
                    <h5 className="text-uppercase mt-2">Tournament <br /> Tickets</h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section section-top-border section-refer-a-friend">
            <div className="container">
              <h2 className="heading section-heading text-uppercase mb-3 text-center">Refer A Friend</h2>
              <img className="img-fluid floating-image" src="/assets/images/icon/refer.png" alt="" style={{right: '8px'}} />
              <p className="mb-3 text-uppercase">
                <b>What You’ll Get By REFERRING A FRIEND?</b>
              </p>
              <p>
                We give you the opportunity to earn money by recommending our website to others. You can start earning money even
                if you do not know how to play. By referring a friend you will earn 10% of the total rakeback your friend
                generates.
              </p>
              <p>
                Promote our website wherever you are. Create posts on online forums and social networks. Remember to use the
                referral link. Build your structure and receive a commission from three levels whenever someone makes a deposit.
                Earnings from the referral program are immediately credited to your Whispering Shouts account. You can withdraw your funds at any
                time.
              </p>
            </div>
          </section>
          <section className="section section-testimonial pt-0 show-mobile-only">
            <div className="container">
              <h2 className="heading section-heading text-uppercase mb-4 text-center">Testimonial</h2>
              <div id="myCarousel3" className="carousel slide" data-ride="carousel">
                {/* Carousel indicators */}
                {/* Wrapper for carousel items */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="content card--shadow" style={{height: '510px'}}>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <img src="https://whisperingshouts.com/images/testimonial/Gaurav-Mittal.jpeg" className="user-image img-fluid" alt="" style={{maxWidth: '100px', height: '100px'}} />
                            </div>
                          </div>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <h6 className="heading user-name mb-0"> Gaurav Mittal</h6>
                              <small>Recreational Poker Player</small>
                            </div>
                          </div>
                          <p>
                            Whispering shouts is a must have tool in your poker arsenal. It has saved my bankroll so many times and helped me take my game to the next level
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="content card--shadow" style={{height: '510px'}}>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <img src="https://whisperingshouts.com/images/testimonial/Aditya-Sardana.jpeg" className="user-image img-fluid" alt="" style={{maxWidth: '100px', height: '100px'}} />
                            </div>
                          </div>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <h6 className="heading user-name mb-0">Aditya Sardana</h6>
                              <small>Business Owner - Casino Kart</small>
                            </div>
                          </div>
                          <p>
                            Whispering shouts has  many contests and free tournament tickets on top of their rakeback. Thanks to them i got to final table of a high stake tournament for free.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="content card--shadow" style={{height: '510px'}}>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <img src="https://whisperingshouts.com/images/testimonial/Ankit-Jajodiya.jpeg" className="user-image img-fluid" alt="" style={{maxWidth: '100px', height: '100px'}} />
                            </div>
                          </div>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <h6 className="heading user-name mb-0">Ankit jajodia</h6>
                              <small>Professional Poker Player</small>
                            </div>
                          </div>
                          <p>
                            I love the way you guys take care of your customers and treat and respect them as poker players. Whispering shouts has helped and supported me when i needed it the most through their excellent customer support. Thank you and God Bless.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="content card--shadow" style={{height: '510px'}}>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <img src="/images/testimonial/Vinay-Rajpal.png" className="user-image img-fluid" alt="" style={{maxWidth: '100px', height: '100px'}} />
                            </div>
                          </div>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <h6 className="heading user-name mb-0">Vinay Rajpal</h6>
                              <small>Professional Poker Player</small>
                            </div>
                          </div>
                          <p>
                            It is the best poker support platform anywhere. I recommend it to all poker players.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="content card--shadow" style={{height: '510px'}}>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <img src="https://whisperingshouts.com/images/testimonial/Kat-DeSol.jpeg" className="user-image img-fluid" alt="" style={{maxWidth: '100px', height: '100px'}} />
                            </div>
                          </div>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <h6 className="heading user-name mb-0">Kat De Sol</h6>
                              <small>Professional Poker Player</small>
                            </div>
                          </div>
                          <p>
                            Whispering shouts has the best learning tools which have helped me improve tremendously in my game.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="content card--shadow" style={{height: '510px'}}>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <img src="https://whisperingshouts.com/images/testimonial/Mia-Ismail.jpeg" className="user-image img-fluid" alt="" style={{maxWidth: '100px', height: '100px'}} />
                            </div>
                          </div>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <h6 className="heading user-name mb-0">Mia Ismail</h6>
                              <small>Recreational Poker Player</small>
                            </div>
                          </div>
                          <p>
                            When i got my first rakeback payment i was pleasantly surprised as to how significant the amount was. Whispering Shouts is a name that has now become synonymous with amazing deals and superb rakeback which for a long time we, as players, were missing out on!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="content card--shadow" style={{height: '510px'}}>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <img src="https://whisperingshouts.com/images/testimonial/Manish-J-Adnani.jpeg" className="user-image img-fluid" alt="" style={{maxWidth: '100px', height: '100px'}} />
                            </div>
                          </div>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <h6 className="heading user-name mb-0">Manish J Adnani</h6>
                              <small>Poker Business Head - Deltin Casinos</small>
                            </div>
                          </div>
                          <p>
                            Whispering Shouts is a forward thinking marketing outfit that have innovative forms of marketing which is great to grow the poker fabric in the current environment. Clear communication and making sure customers understand their products with good customer support is the dynamic mix Whispering Shouts brings to the table as a multi brand affiliate company.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="content card--shadow" style={{height: '510px'}}>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <img src="https://whisperingshouts.com/images/testimonial/Maria-Kirloskar.jpeg" className="user-image img-fluid" alt="" style={{maxWidth: '100px', height: '100px'}} />
                            </div>
                          </div>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <h6 className="heading user-name mb-0">Maria Kirloskar</h6>
                              <small>Professional Poker Player</small>
                            </div>
                          </div>
                          <p>
                            My experience with whispering shouts has been great. Their offers on rake back and contests to win tickets have been very generous and it has been rewarding.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="content card--shadow" style={{height: '510px'}}>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <img src="https://whisperingshouts.com/images/testimonial/Akshay-Dhingra.jpeg" className="user-image img-fluid" alt="" style={{maxWidth: '100px', height: '100px'}} />
                            </div>
                          </div>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <h6 className="heading user-name mb-0">Akshay 'fsociety' Dhingra</h6>
                              <small>Recreational Player</small>
                            </div>
                          </div>
                          <p>
                            Whispering shouts has always been my go-to platform for rake-back deals as they are affiliated with pretty much all the major poker websites in India. They are very professional in dealing with their customers and offer lucrative offers all the time. If you’re a poker player, it’s a must that you are signed up with them.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Carousel controls */}
              </div>
            </div>
          </section>
          <section className="section section-testimonial pt-0 show-desktop-only">
            <div className="container">
              <h2 className="heading section-heading text-uppercase mb-4 text-center">Testimonial</h2>
              <div id="myCarousel1" className="carousel slide" data-ride="carousel">
                {/* Carousel indicators */}
                <ol className="carousel-indicators">
                  <li data-target="#myCarousel1" data-slide-to={0} className="active" />
                  <li data-target="#myCarousel1" data-slide-to={1} />
                  <li data-target="#myCarousel1" data-slide-to={2} />
                </ol>
                {/* Wrapper for carousel items */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="content card--shadow" style={{height: '510px'}}>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <img src="https://whisperingshouts.com/images/testimonial/Gaurav-Mittal.jpeg" className="user-image img-fluid" alt="" style={{maxWidth: '100px', height: '100px'}} />
                            </div>
                          </div>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <h6 className="heading user-name mb-0"> Gaurav Mittal</h6>
                              <small>Recreational Poker Player</small>
                            </div>
                          </div>
                          <p>
                            Whispering shouts is a must have tool in your poker arsenal. It has saved my bankroll so many times and helped me take my game to the next level
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="content card--shadow" style={{height: '510px'}}>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <img src="https://whisperingshouts.com/images/testimonial/Aditya-Sardana.jpeg" className="user-image img-fluid" alt="" style={{maxWidth: '100px', height: '100px'}} />
                            </div>
                          </div>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <h6 className="heading user-name mb-0">Aditya Sardana</h6>
                              <small>Business Owner - Casino Kart</small>
                            </div>
                          </div>
                          <p>
                            Whispering shouts has  many contests and free tournament tickets on top of their rakeback. Thanks to them i got to final table of a high stake tournament for free.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="content card--shadow" style={{height: '510px'}}>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <img src="https://whisperingshouts.com/images/testimonial/Ankit-Jajodiya.jpeg" className="user-image img-fluid" alt="" style={{maxWidth: '100px', height: '100px'}} />
                            </div>
                          </div>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <h6 className="heading user-name mb-0">Ankit jajodia</h6>
                              <small>Professional Poker Player</small>
                            </div>
                          </div>
                          <p>
                            I love the way you guys take care of your customers and treat and respect them as poker players. Whispering shouts has helped and supported me when i needed it the most through their excellent customer support. Thank you and God Bless.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-4 col-xs-12">
                        <div className="content card--shadow" style={{height: '510px'}}>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <img src="/images/testimonial/Vinay-Rajpal.png" className="user-image img-fluid" alt="" style={{maxWidth: '100px', height: '100px'}} />
                            </div>
                          </div>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <h6 className="heading user-name mb-0">Vinay Rajpal</h6>
                              <small>Professional Poker Player</small>
                            </div>
                          </div>
                          <p>
                            It is the best poker support platform anywhere. I recommend it to all poker players.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 col-xs-12">
                        <div className="content card--shadow" style={{height: '510px'}}>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <img src="https://whisperingshouts.com/images/testimonial/Kat-DeSol.jpeg" className="user-image img-fluid" alt="" style={{maxWidth: '100px', height: '100px'}} />
                            </div>
                          </div>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <h6 className="heading user-name mb-0">Kat De Sol</h6>
                              <small>Professional Poker Player</small>
                            </div>
                          </div>
                          <p>
                            Whispering shouts has the best learning tools which have helped me improve tremendously in my game.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 col-xs-12">
                        <div className="content card--shadow" style={{height: '510px'}}>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <img src="https://whisperingshouts.com/images/testimonial/Mia-Ismail.jpeg" className="user-image img-fluid" alt="" style={{maxWidth: '100px', height: '100px'}} />
                            </div>
                          </div>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <h6 className="heading user-name mb-0">Mia Ismail</h6>
                              <small>Recreational Poker Player</small>
                            </div>
                          </div>
                          <p>
                            When i got my first rakeback payment i was pleasantly surprised as to how significant the amount was. Whispering Shouts is a name that has now become synonymous with amazing deals and superb rakeback which for a long time we, as players, were missing out on!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-4 col-xs-12">
                        <div className="content card--shadow" style={{height: '510px'}}>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <img src="https://whisperingshouts.com/images/testimonial/Manish-J-Adnani.jpeg" className="user-image img-fluid" alt="" style={{maxWidth: '100px', height: '100px'}} />
                            </div>
                          </div>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <h6 className="heading user-name mb-0">Manish J Adnani</h6>
                              <small>Poker Business Head - Deltin Casinos</small>
                            </div>
                          </div>
                          <p>
                            Whispering Shouts is a forward thinking marketing outfit that have innovative forms of marketing which is great to grow the poker fabric in the current environment. Clear communication and making sure customers understand their products with good customer support is the dynamic mix Whispering Shouts brings to the table as a multi brand affiliate company.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 col-xs-12">
                        <div className="content card--shadow" style={{height: '510px'}}>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <img src="https://whisperingshouts.com/images/testimonial/Maria-Kirloskar.jpeg" className="user-image img-fluid" alt="" style={{maxWidth: '100px', height: '100px'}} />
                            </div>
                          </div>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <h6 className="heading user-name mb-0">Maria Kirloskar</h6>
                              <small>Professional Poker Player</small>
                            </div>
                          </div>
                          <p>
                            My experience with whispering shouts has been great. Their offers on rake back and contests to win tickets have been very generous and it has been rewarding.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 col-xs-12">
                        <div className="content card--shadow" style={{height: '510px'}}>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <img src="https://whisperingshouts.com/images/testimonial/Akshay-Dhingra.jpeg" className="user-image img-fluid" alt="" style={{maxWidth: '100px', height: '100px'}} />
                            </div>
                          </div>
                          <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
                              <h6 className="heading user-name mb-0">Akshay 'fsociety' Dhingra</h6>
                              <small>Recreational Player</small>
                            </div>
                          </div>
                          <p>
                            Whispering shouts has always been my go-to platform for rake-back deals as they are affiliated with pretty much all the major poker websites in India. They are very professional in dealing with their customers and offer lucrative offers all the time. If you’re a poker player, it’s a must that you are signed up with them.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Carousel controls */}
              </div>
            </div>
          </section>
          <style type="text/css" dangerouslySetInnerHTML={{__html: "\n        .card-header {\n            /*background: linear-gradient(to right, #26292d, #111214) !important;*/\n            background: #1B1D20 !important;\n        }\n\n        .btn:focus {\n            box-shadow: none !important;\n        }\n    " }} />
          <section className="section section-faq">
            <div className="container">
              <h2 className="heading section-heading text-uppercase mb-4 text-center"> We've Got Answers </h2>
              <nav>
                <div className="nav nav-tabs nav-fill" role="tablist">
                  <a className="nav-item nav-link active margin-top-mobile" style={{boxShadow: 'none'}} data-toggle="tab" href="javascript::" ng-click="rakebackFAQ=true;withdrawalFAQ=false;referralFAQ=false" role="tab" aria-controls="faq-rekeback" aria-selected="true">Rakeback Question</a>
                  <a className="nav-item nav-link margin-top-mobile" style={{boxShadow: 'none'}} data-toggle="tab" href="javascript::" ng-click="withdrawalFAQ=true;rakebackFAQ=false;referralFAQ=false" role="tab" aria-controls="faq-withdrawl" aria-selected="false">Withdrawal Question</a>
                  <a className="nav-item nav-link margin-top-mobile" style={{boxShadow: 'none'}} data-toggle="tab" href="javascript::" ng-click="referralFAQ=true;rakebackFAQ=false;withdrawalFAQ=false" role="tab" aria-controls="faq-referral" aria-selected="false">Referral Program</a>
                </div>
              </nav>
              <div className="tab-content py-3 px-3 px-sm-0">
                <div id="faq-rakeback" style={{display: 'block'}} ng-show="rakebackFAQ">
                  <div id="tab-rakeback">
                    <div className="card">
                      <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                          <button className="btn btn-link" data-toggle="collapse" data-target="#f-r-1" aria-expanded="true" aria-controls="collapseOne">
                            What is Rake and Rakeback and how is it calculated?
                          </button>
                        </h5>
                      </div>
                      <div id="f-r-1" className="collapse" data-parent="#tab-rakeback">
                        <div className="content card--shadow card-body" style={{borderRadius: '0px', background: '#2E3237'}}>
                          Rake is the scaled commission fee taken by a cardroom operating a poker game in each hand and Rakeback
                          is a percentage of the rake generated by you given back to you. Example you generated 10000 Rs in rake
                          at one of our partner sites then we will credit a percentage of it in your wallet.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#f-r-2" aria-expanded="false" aria-controls="collapseTwo">
                            What is the difference between Rewards and Rakeback?
                          </button>
                        </h5>
                      </div>
                      <div id="f-r-2" className="collapse" data-parent="#tab-rakeback">
                        <div className="content card--shadow card-body" style={{borderRadius: '0px', background: '#2E3237'}}>
                          Rewards are credited on top of your rakeback. Rewards are normally in the form of tournament tickets,
                          deposit codes or physical goodies while rakeback is in the form of cash. They can be claimed when you
                          have enough reward points by visiting the rewards section.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#f-r-3" aria-expanded="false" aria-controls="collapseTwo">
                            I feel that there is a difference in my rake and your rakeback, what can I do about it?
                          </button>
                        </h5>
                      </div>
                      <div id="f-r-3" className="collapse" data-parent="#tab-rakeback">
                        <div className="content card--shadow card-body" style={{borderRadius: '0px', background: '#2E3237'}}>
                          We don’t calculate your rake on our own, instead we get the information from our partners about the rake
                          generated from you in a given week and credit your wallet a percentage based on it.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#f-r-4" aria-expanded="false" aria-controls="collapseTwo">
                            I have played for a large amount but still havent got any rakeback, why is that?
                          </button>
                        </h5>
                      </div>
                      <div id="f-r-4" className="collapse" data-parent="#tab-rakeback">
                        <div className="content card--shadow card-body" style={{borderRadius: '0px', background: '#2E3237'}}>
                          Rakeback generated anytime throughout the week is credited once every monday, so you will only be able
                          to see your rakeback after the week is completed and not after every session or day.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#f-r-5" aria-expanded="false" aria-controls="collapseTwo">
                            Is the Rakeback only for cash/ring games?
                          </button>
                        </h5>
                      </div>
                      <div id="f-r-5" className="collapse" data-parent="#tab-rakeback">
                        <div className="content card--shadow card-body" style={{borderRadius: '0px', background: '#2E3237'}}>
                          Yes rakeback is only calculated for cash games only.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="faq-withdrawl" style={{display: 'block'}} ng-show="withdrawalFAQ">
                  <div id="tab-withdrawl">
                    <div className="card">
                      <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                          <button className="btn btn-link" data-toggle="collapse" data-target="#f-w-1" aria-expanded="true" aria-controls="collapseOne">
                            How do I withdraw my balance?
                          </button>
                        </h5>
                      </div>
                      <div id="f-w-1" className="collapse" data-parent="#tab-withdrawl">
                        <div className="content card--shadow card-body" style={{borderRadius: '0px', background: '#2E3237'}}>
                          You have to verify your KYC and submit your bank details then simply go to your wallet, enter the amount
                          and click on withdraw button and your rakeback will be credited in your account within 4 to 5 working
                          days.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#f-w-2" aria-expanded="false" aria-controls="collapseTwo">
                            I have made a withdrawal but have not received the funds yet?
                          </button>
                        </h5>
                      </div>
                      <div id="f-w-2" className="collapse" data-parent="#tab-withdrawl">
                        <div className="content card--shadow card-body" style={{borderRadius: '0px', background: '#2E3237'}}>
                          Sometimes it may take more time than usual due to delay in banking processes. We suggest that you wait
                          for one extra day and even then if you don’t get the funds in your account then drop us a mail on
                          info@whisperingshouts.com or whatsapp us at +91-80766-96-966 with all the details in one go and we will
                          resolve it as quick as possible.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#f-w-3" aria-expanded="false" aria-controls="collapseTwo">
                            Can I use the balance to deposit in a partner website?
                          </button>
                        </h5>
                      </div>
                      <div id="f-w-3" className="collapse" data-parent="#tab-withdrawl">
                        <div className="content card--shadow card-body" style={{borderRadius: '0px', background: '#2E3237'}}>
                          We don’t transfer or deposit your wallet balance to any site. We only send the amount to your KYC
                          verified bank account.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#f-w-4" aria-expanded="false" aria-controls="collapseTwo">
                            I am trying to withdraw but am getting a KYC verification pending error?
                          </button>
                        </h5>
                      </div>
                      <div id="f-w-4" className="collapse" data-parent="#tab-withdrawl">
                        <div className="content card--shadow card-body" style={{borderRadius: '0px', background: '#2E3237'}}>
                          As per RBI guidelines we are not allowed to process any transaction for a non KYC member, you will still
                          get you commissions in your Whispering Shouts wallet which you can withdraw once you’re KYC verified. In other cases it
                          might be because you have not submitted your KYC documents yet or the images might be blurry or denied
                          from our compliance team. Try re uploading them and if the problem still persists mail us at
                          info@whisperingshouts.com and we will try to sort it as quickly as possible.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#f-w-5" aria-expanded="false" aria-controls="collapseTwo">
                            What payment modes are supported for payouts?
                          </button>
                        </h5>
                      </div>
                      <div id="f-w-5" className="collapse" data-parent="#tab-withdrawl">
                        <div className="content card--shadow card-body" style={{borderRadius: '0px', background: '#2E3237'}}>
                          Right now we only give payouts to KYC verified profiles via online bank transfers using IMPS or UPI.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className id="faq-referral" style={{display: 'block'}} ng-show="referralFAQ">
                  <div id="tab-refer">
                    <div className="card">
                      <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                          <button className="btn btn-link" data-toggle="collapse" data-target="#f-rr-1" aria-expanded="true" aria-controls="collapseOne">
                            How do I refer a friend?
                          </button>
                        </h5>
                      </div>
                      <div id="f-rr-1" className="collapse" data-parent="#tab-refer">
                        <div className="content card--shadow card-body" style={{borderRadius: '0px', background: '#2E3237'}}>
                          You can refer your friend by email / whatsapp / sms or even by sharing our link on your social media page. Your personal referral link is provided in your user dashboard.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <button className="btn btn-link" data-toggle="collapse" data-target="#f-rr-2" aria-expanded="false" aria-controls="collapseTwo">
                            How would I calculate my referal’s rake generated?
                          </button>
                        </h5>
                      </div>
                      <div id="f-rr-2" className="collapse" data-parent="#tab-refer">
                        <div className="content card--shadow card-body" style={{borderRadius: '0px', background: '#2E3237'}}>
                          We have an automated process for it and any rakebacks if eligible will be auto credited in your wallet.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <button className="btn btn-link" data-toggle="collapse" data-target="#f-rr-3" aria-expanded="false" aria-controls="collapseTwo">
                            Till how long will i keep getting the referral rakeback?
                          </button>
                        </h5>
                      </div>
                      <div id="f-rr-3" className="collapse" data-parent="#tab-refer">
                        <div className="content card--shadow card-body" style={{borderRadius: '0px', background: '#2E3237'}}>
                          We don’t have a time boundation on this as of right now.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <button className="btn btn-link" data-toggle="collapse" data-target="#f-rr-4" aria-expanded="false" aria-controls="collapseTwo">
                            Is there a limit to the no of people I can refer to?
                          </button>
                        </h5>
                      </div>
                      <div id="f-rr-4" className="collapse" data-parent="#tab-refer">
                        <div className="content card--shadow card-body" style={{borderRadius: '0px', background: '#2E3237'}}>
                          You can refer as many friends as you like and there is no limit.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <button className="btn btn-link" data-toggle="collapse" data-target="#f-rr-5" aria-expanded="false" aria-controls="collapseTwo">
                            Can i use my social media to promote or share referral code?
                          </button>
                        </h5>
                      </div>
                      <div id="f-rr-5" className="collapse" data-parent="#tab-refer">
                        <div className="content card--shadow card-body" style={{borderRadius: '0px', background: '#2E3237'}}>
                          It is your space and you can promote but keep in mind the page rules and avoid spamming or excessive posting.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div></section>
        </section>
        <br />
        <br />
        <br />
        <div ng-include="'views/_footer.html'">
        </div>
      </div>