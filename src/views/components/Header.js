import React from 'react';

const Header = () => {
  return (
    <div>
    <div >
      <header id="layout-header" >
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-default">
            <a className="navbar-brand">
              <img src="/assets/images/{{portalLogo}}" alt="" className="img-fluid websiteLogo" />
            </a>
            <marquee  style={{width: '75%', color: '{{portalColor}}'}} onmouseover="this.stop()" onmouseout="this.start()" className="show-desktop-only1">
                <span id="leaderboardUsers"  /></marquee>
            <ul className="navbar-nav ml-auto hidden">
              <li className="nav-item">
                <a href="/login" className="nav-link">Sign In</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <header id="layout-header" >
        <div className="container-fluid fixed-header">
          <nav className="navbar navbar-expand-lg navbar-default">
            <a className="navbar-brand" >
              <img src="/assets/images/{{portalLogo}}" alt="" className="img-fluid websiteLogo" />
            </a>
            <ul className="navbar-nav ml-auto hidden show-mobile-only">
              <li className="nav-item">
                {/*<button class="navbar-toggler font1" type="button" style="position: absolute;color: #fff;right: 95px;top: 30px; display:block;">
                        <a href="/passbook" style="text-decoration:none;">
                            <span style="font-size: 14px; color: #2ECDF3;">{{AvailablePoints}}</span>  <i class="fas fa-wallet" style="height:23px; color:#2ECDF3"></i>
                        </a>
                    </button>*/}
                <button  className="navbar-toggler font1" type="button" style={{position: 'absolute', color: '#fff', right: '95px', top: '30px', display: 'block'}}>
                  <a href="javascript::" style={{textDecoration: 'none'}}>
                    <span style={{fontSize: '14px', color: '#2ECDF3'}}>{'{'}{'{'}AvailablePoints{'}'}{'}'}</span>  <i className="fas fa-wallet" style={{height: '23px', color: '#2ECDF3'}} />
                  </a>
                </button>
              </li>
              <li className="nav-item">
                <button className="navbar-toggler font1" type="button" style={{position: 'relative', color: '#fff', right: '35px', top: '22px', display: 'block'}}>
                  <a href="/notification" style={{textDecoration: 'none'}}>
                    <i className="fas fa-bell" style={{height: '23px', color: '#2ECDF3'}} />
                    <span className="count ng-binding" style={{position: 'absolute', /* left: '27%', */ width: '1rem', height: '1rem', borderRadius: '100%', /* background: '#FF0017', */ color: '#ffffff', fontSize: '11px', top: '0px', fontWeight: 600, lineHeight: '1rem', border: '1px solid #2ECDF3', textAlign: 'center'}}>{'{'}{'{'}notificationCount{'}'}{'}'}</span>
                  </a>
                </button>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" style={{position: 'relative', color: '#fff', right: '5px', top: '-17px', display: 'block'}}>
                  <img className="rounded-circle"  onerror="this.src='/assets/images/user-img.png'" alt="" style={{width: '25px', height: '25px'}} />
                </a>
                <ul className="dropdown-menu" style={{position: 'absolute', top: 0}}>
                  <li><a className="dropdown-item" href="/account"> Profile </a></li>
                  <li><a className="dropdown-item" href="javascript:void(0);"> {'{'}{'{'}Portal{'}'}{'}'} </a></li>
                  <li>
                    <a className="dropdown-item" href="/logout"> Logout </a>
                  </li>
                </ul>
              </li></ul>
            <ul className="navbar-nav ml-auto hidden show-desktop-only1">
              <li className="nav-item">
                <button  className="navbar-toggler font1" type="button" style={{position: 'relative', color: '#fff', top: 'initial', display: 'block'}}>
                  <a href="javascript::" style={{textDecoration: 'none'}}>
                    <span style={{fontSize: '14px', color: '#2ECDF3'}}>{'{'}{'{'}AvailablePoints{'}'}{'}'}</span>  <i className="fas fa-wallet" style={{height: '23px', color: '#2ECDF3'}} />
                  </a>
                </button>
              </li>
              <li className="nav-item">
                <button className="navbar-toggler font1" type="button" style={{position: 'relative', color: '#fff', top: 'initial', display: 'block'}}>
                  <a href="javascript::" style={{textDecoration: 'none'}}>
                    <i className="fas fa-bell" style={{height: '23px', color: '#2ECDF3'}} />
                    <span className="count ng-binding" style={{position: 'absolute', /* left: '27%', */ width: '1rem', height: '1rem', borderRadius: '100%', /* background: '#FF0017', */ color: '#ffffff', fontSize: '11px', top: '0px', fontWeight: 600, lineHeight: '1rem', border: '1px solid #2ECDF3', textAlign: 'center'}}>{'{'}{'{'}notificationCount{'}'}{'}'}</span>
                  </a>
                </button>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" style={{position: 'relative', color: '#fff', top: '-7px', display: 'block'}}>
                  <img className="rounded-circle"  onerror="this.src='/assets/images/user-img.png'" alt="" style={{width: '25px', height: '25px'}} />
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/account"> Profile </a></li>
                  <li><a className="dropdown-item" href="javascript:void(0);" > {'{'}{'{'}Portal{'}'}{'}'} </a></li>
                  <li>
                    <a className="dropdown-item" href="/logout"> Logout </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div>
        </div>
      </header>
      {/* header top end */}
    </div>
  </div>
  );
};

export default Header;
