<div>
        <div ng-include="'views/_header.html'">
        </div>
        <style dangerouslySetInnerHTML={{__html: "\n    .wrapword {\n        white-space: -moz-pre-wrap !important; /* Mozilla, since 1999 */\n        white-space: -pre-wrap; /* Opera 4-6 */\n        white-space: -o-pre-wrap; /* Opera 7 */\n        white-space: pre-wrap; /* css-3 */\n        word-wrap: break-word; /* Internet Explorer 5.5+ */\n        white-space: -webkit-pre-wrap; /* Newer versions of Chrome/Safari*/\n        word-break: break-all;\n        white-space: normal;\n    }\n" }} />
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n    .table-hover tbody tr:hover {\n        color: #2ecdf3;\n        background-color: rgba(0,0,0,.075);\n    }\n" }} />
        {/**/}
        <section id="layout-content" className="container">
          <div className="flash-message">
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-2" ng-include="'views/_sideMenu.html'">
              </div>
              <div className="col-md-6">
              </div>
              <div className="col-md-4 show-mobile-only">
                <div className="sidebar-promotion">
                  <h5 className="color-primary text-uppercase text-center">Activity</h5>
                  <ul>
                    <li>Promotions</li>
                    <li>Contests</li>
                  </ul>
                  <div className="content card--shadow" style={{overflow: 'auto'}}>
                    <div ng-repeat="n in notificationList" style={{backgroundColor: '#2E3237', color: '#2ECDF3', boxShadow: '2px 2px 3px #1b2062', borderRadius: '5px', marginRight: '4px', marginLeft: '4px'}}>
                      {/*<a class="dropdown-item preview-item" ng-if="$index==0">
                                <div class="preview-item-content">
                                    <h6 class="preview-subject" style="margin-bottom: 1.5rem; margin-top: 12px; font-family:Jost, sans-serif;">
                                        Notification with image test
                                        <span class="badge badge-success">Promotion</span>
                                    </h6>
                                    <span class="font-weight-light small-text wrapword" style="color:#fff; font-family:Jost, sans-serif">
                                        <img ng-src="/Album/ProfilePic/{{DashboardData.image_path}}" onerror="this.src='assets/images/user-img.png'" style="width:100%; height:180px;" class="avatar img-circle" alt="avatar">
                                        test message
                                    </span>
                                    <br />
                                    <p class="font-weight-light small-text">{{n.created_at | date:'medium'}} </p>
                                </div>
                            </a>
                            <div class="dropdown-divider"></div>*/}
                      <a className="dropdown-item preview-item">
                        <div className="preview-thumbnail">
                          <div className="preview-icon bg-success">
                            <i className="mdi mdi-alert-circle-outline mx-0" />
                          </div>
                        </div>
                        <div className="preview-item-content" ng-click="ReadNotification(n.id)">
                          <span ng-show="n.read==false" style={{position: 'relative', fontSize: '35px', marginTop: '-14px', marginLeft: '-15px', color: '#74D6FB'}}>•</span>
                          <h6 className="preview-subject" style={{marginBottom: '1.5rem', marginTop: '12px', fontFamily: 'Jost, sans-serif'}}>
                            {'{'}{'{'}n.title{'}'}{'}'}
                            <span className="badge badge-success" ng-show="n.notification_type=='Rakeback'">{'{'}{'{'}n.notification_type{'}'}{'}'}</span>
                            <span className="badge badge-secondary" ng-show="n.notification_type!='Rakeback'">{'{'}{'{'}n.notification_type{'}'}{'}'}</span>
                          </h6>
                          <span className="font-weight-light small-text wrapword" style={{color: '#fff', fontFamily: 'Jost, sans-serif'}}>{'{'}{'{'}n.content{'}'}{'}'}</span>
                          <p className="font-weight-light small-text">{'{'}{'{'}n.enter_date{'}'}{'}'} </p>
                        </div>
                      </a>
                      <div className="dropdown-divider" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <style dangerouslySetInnerHTML={{__html: "\n\n    .dropdown-item:hover {\n        background-color: #323230 !important;\n    }\n" }} />
      </div>