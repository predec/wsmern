 <div>
        {/* header top begin */}
        <div ng-include="'views/_header.html'">
        </div>
        {/* header top end */}
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n    .table-hover tbody tr:hover {\n        color: #2ecdf3;\n        background-color: rgba(0,0,0,.075);\n    }\n" }} />
        <section id="layout-content" className="container">
          <div className="flash-message">
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-2" ng-include="'views/_sideMenu.html'">
              </div>
              <div className="col-md-6">
                <br /><br />
                <span ng-hide="PassbookData.length>0">
                  No Transactions found
                </span>
                <div className="leaderboard-list">
                  {/* Tab panes */}
                  <div className="tab-content">
                    <div role="tabpanel" className="tab-pane fade in active show" id="monthly-leadebaord">
                      <table className="table table-hover table-borderless table-ggfish">
                        <thead>
                          <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Credit/Debit</th>
                            <th scope="col">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr ng-repeat="item in PassbookData">
                            <td>
                              {'{'}{'{'}item.Trans_Date.replace(' ','&nbsp;').replace(' ','&nbsp;').replace(' ','&nbsp;'){'}'}{'}'}
                            </td>
                            <td>
                              <span><i className="fas fa-rupee-sign " /> {'{'}{'{'}item.points{'}'}{'}'}</span><small />
                              <i className="fa fa-arrow-up" ng-show="item.Trans_Type == 'credit'" ng-style="item.Trans_Type == 'credit' && {'color':'#15e915'} || item.Trans_Type == 'debit' && {'color':'red'}" />
                              <i className="fa fa-arrow-down" ng-show="item.Trans_Type == 'debit'" ng-style="item.Trans_Type == 'credit' && {'color':'#15e915'} || item.Trans_Type == 'debit' && {'color':'red'}" />
                            </td>
                            <td>{'{'}{'{'}item.earning_type==null &amp;&amp; item.Trans_Type=='credit'?'Sign Up Bonus': item.earning_type==null? 'Withdrawal':item.earning_type{'}'}{'}'}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                {/*<form role="form" id="withdrawform" name="withdrawform" novalidate>
                    <div class="row">
                        <label class="col-sm-2 col-form-label lable-style pu1" for="amount">Amount</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control" min="0" max="9999999999" ng-model="amount" name="amount" autocomplete="off" placeholder="Amount" required>
                            <span class="error-message" ng-show="withdrawform.amount.$dirty && withdrawform.amount.$invalid">Please enter amount.</span>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <input type="submit" name="btnwithdraw" value="Withdraw" class="btn btn-primary" ng-disabled="withdrawform.$invalid" ng-model="btnwithdraw" ng-click="WithdrawAmount()">
                        </div>
                    </div>

                </form>*/}
              </div>
              <div className="col-md-4 show-desktop-only" ng-include="'views/_activity.html'">
              </div>
            </div>
          </div>
        </section>
      </div>