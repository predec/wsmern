 <!-- header top begin -->
<div ng-include="'views/_header.html'">
</div>

<section id="layout-content" class="container">
    <div class="flash-message">
    </div>
    <div class="container">

        <div class="row">
            <div class="col-md-2" ng-include="'views/_sideMenu.html'">
            </div>
            <div class="col-md-6">
                <h4 class="text-uppercase color-primary">Verify Partner Username</h4>
                <p class="mb-5">Select partner and enter partner username to enable rakeback deal</p>

                <div class="row">
                    <div class="col-md-6">
                        <form role="form" id="partnerusernameform" name="partnerusernameform" novalidate>
                            <div class="form-group">
                                <select class="form-control" name="ddlpartner" ng-model="ddlpartner">
                                    <option value="">Select a partner</option>
                                    <option data-ng-repeat="item in PartnerList | filter:{portalType:portalType}" value="{{item.id}}">{{item.name}}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <input class="form-control" placeholder="Username" type="text" name="partnerusername" ng-model="partnerusername" autocomplete="off" maxlength="100" required>
                                <span class="error-message" ng-show="partnerusernameform.partnerusername.$dirty && partnerusernameform.partnerusername.$invalid">Please enter user name.</span>
                            </div>
                            <button ng-disabled="partnerusernameform.$invalid || ddlpartner==undefined" type="button" ng-model="btnaddpartnerusername" ng-click="AddPartnerUserName()" class="btn btn-primary">Register</button>
                        </form>

                        <div id="result"></div>
                    </div>
                </div>

                <p class="mt-3">To change any other details, you can write to us at support@whisperingshouts.com</p>


                <div style="height:380px; overflow:auto;">
                    <table class="table table-striped table-dark mt-5">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Partner</th>
                                <th>UserName</th>
                                <th>Status</th>
                            </tr>
                            <tr ng-repeat="item in PartnerUserNames | filter:{portalType:portalType}">
                                <td>{{$index+1}}</td>
                                <td>
                                    <img ng-src="/assets/images/partner/{{item.image_file_name}}" style="max-width:50px;" />
                                </td>
                                <td>{{item.user_name}}</td>
                                <td style="text-transform:capitalize;">
                                    {{item.admin_status}}
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>

            </div>

            <div class="col-md-4 show-desktop-only" ng-include="'views/_activity.html'">
            </div>

        </div>
    </div>
</section>
<br />
<br /><br />