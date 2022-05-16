<div>
        <div ng-include="'views/_header.html'">
        </div>
        {/* header top end */}
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n    .table-hover tbody tr:hover {\n        color: {{portalColor}};\n        background-color: rgba(0,0,0,.075);\n    }\n" }} />
        <section id="layout-content" className="container">
          <div className="flash-message">
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-2" ng-include="'views/_sideMenu.html'">
              </div>
              <div className="col-md-6">
                <div className="leaderboard-list">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" href="#monthly-leadebaord" role="tab" data-toggle="tab" aria-selected="true">Monthly</a>
                    </li>
                  </ul>
                  {/* Tab panes */}
                  <div className="tab-content">
                    <div role="tabpanel" className="tab-pane fade in active show" id="monthly-leadebaord">
                      <table className="table table-hover table-borderless table-ggfish">
                        <thead>
                          <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">Name</th>
                            <th scope="col">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr ng-repeat="l in leaderboardList" ng-style="l.rank_detail=='1st' && { 'color' : portalColor } || l.rank_detail=='2nd' && { 'color' : portalColor } || l.rank_detail=='3rd' && { 'color' : portalColor }">
                            <td>
                              {'{'}{'{'}l.rank_detail{'}'}{'}'}
                            </td>
                            <td>
                              {'{'}{'{'}l.name{'}'}{'}'}
                            </td>
                            <td>
                              <i className="fas fa-rupee-sign " /> {'{'}{'{'}l.Amount{'}'}{'}'}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="weekly-leaderbaord">
                      <table className="table table-borderless table-ggfish">
                        <thead>
                          <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 show-desktop-only" ng-include="'views/_activity.html'">
              </div>
            </div>
          </div>
        </section>
      </div>