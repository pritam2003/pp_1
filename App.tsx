import React from 'react';
import './MainStructure.css';

const MainStructure: React.FC = () => {
  return (
    <>
      {<html lang="en">
<body>

  <nav class="main-nav" id="main-nav">
    <div style="height:80px;background: rgb(51,74,92);padding-top: 1px;"><h2 class="text-center" style="color:#fff; letter-spacing:2px;">MENU</h2></div>
    <ul class="nav nav-pills nav-stacked">
      <li class="active"><a href="#"><i class="fa fa-home fa-fw"></i>&nbsp; Home</a></li>
      <li><a href="#about"><i class="fa fa-user fa-fw"></i>&nbsp; About</a></li>
      <li><a href="#what-i-do"><i class="fa fa-signal fa-fw"></i>&nbsp; What I do</a></li>
      <li><a href="#work"><i class="fa fa-briefcase fa-fw"></i>&nbsp; Recent Work</a></li>
      <li><a href="#contact"><i class="fa fa-envelope-o fa-fw"></i>&nbsp; Contact</a></li>
    </ul>
  </nav>

  <div class="page-wrap">

    <div class="jumbotron">
      <div style="margin-top:130px" class="container">
        <a href="#main-nav" class="h5 open-menu"><i style="color:#fff; position: relative; bottom:120px; cursor:pointer;" class="fa fa-bars fa-2x fa-fw"></i></a>
        <a href="#" class="h5 close-menu"><i style="color:#fff; position: relative; bottom:120px; cursor:pointer;" class="fa fa-times fa-2x fa-fw"></i></a>
        <h1>Hi, I'm Pritam</h1>
        <div class="spacer"></div>
        <h1>Web Designer + Developer</h1>
        <div class="spacer"></div>
        <hr><hr>
        <h2 class="text-center">I build awesome web pages</h2>
      </div>
    </div>

    <div class="section" id="about"><h1>About</h1><hr></div>

    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="well">
            <img src="https://vnited.co/wp-content/uploads/2020/06/development-outsource-web-develeopment.jpg" style="height:100%; width:100%">
          </div>
        </div>
        <div class="col-md-8">
          <div class="well">
            <h3>Pritam Datta</h3>
            <p>I'm a Vancouver,BC Canada based freelance full-stack web developer and I would love to help you with your projects. Currently, I can do more or less all web related works and specialize in HTML5/CSS3, Python and Java. I can build any website, from huge dynamic apps to small static sites, on any budget. See my work below.</p>
            <p><a href="#form" class="btn btn-default">Hire me</a></p>
          </div>
        </div>
      </div><!--/.row-->
    </div><!--/.container-->

    <div class="section" id="what-i-do"><h1>What I Do</h1><hr></div>

    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="well">
            <h3>Skills</h3>
            <div class="spacer"></div><div class="spacer"></div>
            <div class="row">
              <div class="col-md-4">
                <div class="html"></div> <h4 style="font-weight: 400; display: inline;">HTML5</h4><br>
                <div class="css"></div> <h4 style="font-weight: 400; display: inline;">CSS3</h4><br>
                <div class="php"></div> <h4 style="font-weight: 400; display: inline;">Python</h4><br>
                <div class="sql"></div> <h4 style="font-weight: 400; display: inline; margin-bottom:5px;">JAVA</h4>
              </div>
              <div class="col-md-8">
                <div class="progress">
                  <div class="progress-bar progress-bar-html" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 95%">
                    <span class="sr-only">HTML5 95%</span>
                  </div>
                </div>
                <div class="progress">
                  <div class="progress-bar progress-bar-css" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 70%">
                    <span class="sr-only">CSS3 70%</span>
                  </div>
                </div>
                <div class="progress">
                  <div class="progress-bar progress-bar-php" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%">
                    <span class="sr-only">Python 70%</span>
                  </div>
                </div>
                <div class="progress">
                  <div class="progress-bar progress-bar-sql" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 90%">
                    <span class="sr-only">JAVA 90%</span>
                  </div>
                </div>
              </div><!--/.col-6-->
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="well">
            <h3>I Build Great Websites</h3>
            <p>Being a full stack developer, I can develop any website from a database driven web app to a small static site. Every custom website built uses higher grade techniques and is fast, mobile friendly, scalable.</p>
          </div>
        </div>
      </div><!--/.row-->
    </div><!--/.container-->
    <div class="work visible-lg" style="height:250px !important;">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <h3><i class="fa fa-code"></i>&nbsp; Beautiful Code</h3>
            <p>I write clean, semantic, organized, and valid markup that eliminates excess code and allows others to easily understand and therfore update content in the future.</p>
          </div>
          <div class="col-md-3">
            <h3><i class="fa fa-fighter-jet"></i>&nbsp; Fast</h3>
            <p>I build fast and efficient web sites. Fast websites always attract more visitors, and those visitors are more likely to choose you over the competition. In addition, website speed is essential for <abbr title="Search Engine Optimization">SEO</abbr> &mdash; <a href="http://moz.com/blog/how-website-speed-actually-impacts-search-ranking">faster websites rank higher</a>.</p>
          </div>
          <div class="col-md-3">
            <h3><i class="fa fa-arrows-alt"></i>&nbsp; Responsive</h3>
            <p>Responsive web design means that your website will work on any screen size, from desktops to mobile phones alike. Having a website that works well across all devices and screen sizes means your website has a broader reach, appealing to more visitors.</p>
          </div>
          <div class="col-md-3">
            <h3><i class="fa fa-bolt"></i>&nbsp; Powerful</h3>
            <p>From a static single page website to a full fledged database driven web app, I build websites that give your organization the potential to succeed.</p>
          </div>
        </div><!--/.row-->
      </div><!--/.container-->
    </div><!--/.work-->
    <!--mobile work-->
    <div class="container hidden-lg">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="well">
            <h3><i class="fa fa-code"></i>&nbsp; Beautiful Code</h3>
            <p>I write clean, semantic, organized, and valid markup that eliminates excess code and allows others to easily understand and therfore update content in the future.</p>
          </div>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="well">
            <h3><i class="fa fa-fighter-jet"></i>&nbsp; Fast</h3>
            <p>I build fast and efficient web sites. Fast websites always attract more visitors, and those visitors are more likely to choose you over the competition. In addition, website speed is essential for <abbr title="Search Engine Optimization">SEO</abbr> &mdash; <a href="http://moz.com/blog/how-website-speed-actually-impacts-search-ranking">faster websites rank higher</a>.</p>
          </div>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="well">
            <h3><i class="fa fa-arrows-alt"></i>&nbsp; Responsive</h3>
            <p>Responsive web design means that your website will work on any screen size, from desktops to mobile phones alike. Having a website that works well across all devices and screen sizes means your website has a broader reach, appealing to more visitors.</p>
          </div>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="well">
            <h3><i class="fa fa-bolt"></i>&nbsp; Powerful</h3>
            <p>From a static single page website to a full fledged database driven web app, I build websites that give your organization the potential to succeed.</p>
          </div>
        </div>
      </div><!--/.row-->
    </div><!--/.container and mobile work-->
<!--<div class="hidden-xs"><div class="work-together" id="contact">LETS WORK TOGETHER</div></div>-->
    <div class="section" id="contact"><h1>Let&apos;s Work Together</h1><hr></div>

    <div class="work-together">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <h3>Send Me a Message</h3>
            <div class="spacer"></div>
            <form class="form-horizontal" role="form" id="form" method="post">
              <div class="form-group">
                <label for="name" class="col-sm-2 control-label">Name</label>
                <div class="col-sm-10">
                  <input type="text" class="contact form-control" name="name" id="name" placeholder="Name">
                </div>
              </div>
              <div class="form-group">
                <label for="email" class="col-sm-2 control-label">Email</label>
                <div class="col-sm-10">
                  <input type="email" class="contact form-control" name="email" id="email" placeholder="Email">
                </div>
              </div>
              <div class="form-group">
                <label for="subject" class="col-sm-2 control-label">Subject</label>
                <div class="col-sm-10">
                  <input type="text" class="contact form-control" name="subject" id="subject" placeholder="Subject">
                </div>
              </div>
              <div class="form-group">
                <label for="message" class="col-sm-2 control-label">Message</label>
                <div class="col-sm-10">
                  <textarea class="contact form-control" rows="3" name="message" id="message" placeholder="Message"></textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <input type="submit" value="Send" class="btn btn-default" name="submit">
                </div>
              </div>
            </form>
          </div><!--/.col-->
          <div class="col-lg-4 col-md-4 hidden-sm hidden-xs">
            <h3>Contact Details</h3><div class="spacer"></div>
            <p class="lead" style="margin-bothttps://vnited.co/wp-content/uploads/2020/06/development-outsource-web-develeopment.jpgtom:0px;"><i class="fa fa-map-marker"></i>&nbsp; 4171 Castlewood Crescent</p><p class="lead" style="text-indent:24px">Burnaby, BC V5G 2M1</p>
            <p class="lead"><i class="fa fa-phone"></i>&nbsp; +1(604)780-3973</p>
            <p class="lead"><i class="fa fa-envelope"></i>&nbsp; pda49@sfu.ca</p>
          </div>
        </div><!--/.row-->
      </div><!--/.container-->
      <div class="container hidden-sm hidden-xs"><div class="spacer"></div><div class="spacer"></div><footer><p class="pull-right">Made with love in Canada by Pritam</p></footer></div>
    </div><!--/.work-together-->

  </div><!--/.page-wrap-->
</body>
</html>}
    </>
  );
}

export default MainStructure;
