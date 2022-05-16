
<div>
        {/* header top begin */}
        <div ng-include="'views/_header.html'">
        </div>
        <style dangerouslySetInnerHTML={{__html: "\n    .page-dashboard .container {\n        max-width: 1100px;\n    }\n\n    .header-section {\n        display: block !important;\n    }\n\n    .logo-section {\n        display: block !important;\n    }\n\n    .bodynew {\n        background: #fff;\n    }\n\n    .abs1 {\n        position: absolute;\n        bottom: 0px;\n        padding: 15px;\n        left: 0px;\n        font-size: 20px;\n        color: #fff;\n        background: #000000b0;\n        display: block;\n        width: 100%;\n    }\n\n    #feedcontent > img {\n        width: 318px;\n        height: 200px;\n    }\n    #feedcontent > div >img {\n        width: 318px;\n        height: 200px;\n    }\n" }} />
        <link href="/assets/css/blog.css" rel="stylesheet" />
        <section className="blog-block" data-ng-controller="FeedCtrl" data-ng-init="getRSSFeed()">
          <div className="container">
            <div className="row">
              <div className="posts-listing col-md-12">
                <div className="desktop-tabs">
                </div>
                <div className="container tab-content desktop-content" style={{backgroundColor: '#2E3237 !important'}}>
                  <div role="tabpanel" className="tab-pane active" id="all">
                    <div className="row">
                      <h2 style={{display: 'block', padding: '15px', width: '100%', color: '#fff'}}>Recent Listed</h2>
                      <hr />
                      <div className="post col-lg-4" id="divFeed" ng-repeat="blog in FeedList">
                        <div className="post-details" style={{background: 'linear-gradient(to right, #26292d, #111214)'}}>
                          <div className="post-meta d-flex justify-content-between">
                            <div className="date meta-last">{'{'}{'{'}blog.PubDate | date{'}'}{'}'}</div>
                            <div className="category"><a href="#">Business</a></div>
                          </div>
                          <a href="javascript:void(0)">
                            <h3 className="h4" style={{color: '#fff !important'}} data-ng-bind-html="blog.Title" />
                          </a>
                          <p className="text-muted" id="feedcontent" style={{color: '#fff'}} data-ng-bind-html="blog.Description" />
                          {/*<footer class="post-footer d-flex align-items-center">
                                        <a href="#" class="author d-flex align-items-center flex-wrap">
                                            <div class="avatar">
                                                <img src="/assets/images/user_image1.png" style="max-width:50px;" alt="..." class="img-fluid image-css">
                                            </div>
                                            <div class="title"><span>John Doe</span></div>
                                        </a>
                                        <div class="date"><i class="icon-clock"></i> 2 months ago</div>
                                        <div class="comments meta-last"><i class="icon-comment"></i>12</div>
                                    </footer>*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* mobile tab-content */}
                <div className="container tab-content mobile-content" style={{backgroundColor: '#2E3237 !important'}}>
                  <div role="tabpanel" className="tab-pane content active" id="tab-1">
                    <div className="row">
                      <h3 style={{display: 'block', padding: '15px', width: '100%', color: '#fff'}}>Recent Listed</h3>
                      <hr />
                      <div className="post col-lg-6" ng-repeat="blog in FeedList">
                        <div className="post-details" style={{background: 'linear-gradient(to right, #26292d, #111214)'}}>
                          <div className="post-meta d-flex justify-content-between">
                            <div className="date meta-last">{'{'}{'{'}blog.PubDate | date{'}'}{'}'}</div>
                            <div className="category"><a href="#">Business</a></div>
                          </div>
                          <a href="javascript:void(0)">
                            <h3 className="h4" style={{color: '#fff !important'}} data-ng-bind-html="blog.Title" />
                          </a>
                          <p className="text-muted" id="feedcontent" style={{color: '#fff'}} data-ng-bind-html="blog.Description" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <div ng-include="'views/_footer.html'">
        </div>
        {/*<section class="blog-block" data-ng-controller="FeedCtrl" data-ng-init="getRSSFeed()">
    <div class="container" data-ng-if="!DescriptionToShow">
        <div class="row">
            <div class="posts-listing col-md-12">
                <div class="desktop-tabs">

                </div>
                <div class="container tab-content desktop-content" style="background-color:#2E3237 !important;">
                    <div role="tabpanel" class="tab-pane active" id="all">
                        <div class="row">
                            <h2 style="display:block;padding:15px;width:100%; color:#fff;">Recent Listed</h2>
                            <hr />
                            <div class="post col-lg-4" ng-repeat="blog in FeedList | limitTo:5">

                                <div class="post-details" style="background: linear-gradient(to right, #26292d, #111214);">
                                    <div class="post-meta d-flex justify-content-between">
                                        <div class="date meta-last">{{blog.PubDate | date}}</div>
                                    </div>
                                    <a href="javascript:void(0)" data-ng-click="ShowDescription(blog.Description)">
                                        <h3 class="h4" style="color:#fff !important;">{{blog.Title}}</h3>
                                    </a>

                                    <p class="text-muted" style="color:#fff;">{{blog.Title}}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>*/}
        {/* mobile tab-content */}
        {/*</div>
        </div>
    </div>


    <div class="container" data-ng-if="DescriptionToShow">
        <div class="row" data-ng-bind-html="Description">

        </div>
    </div>
</section>*/}
      </div>