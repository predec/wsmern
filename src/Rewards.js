<div>
        <div ng-include="'views/_header.html'">
        </div>
        <section id="layout-content" className="container">
          <div className="flash-message">
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-2" ng-include="'views/_sideMenu.html'">
              </div>
              <div className="col-md-6">
                <span>
                  Coming Soon
                </span>
              </div>
              <div className="col-md-4 show-desktop-only" ng-include="'views/_activity.html'">
              </div>
            </div>
          </div>
        </section>
      </div>