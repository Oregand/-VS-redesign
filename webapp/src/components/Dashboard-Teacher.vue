<template>
<div class="vsware-Dashboard wrapper">
  <div class="sidebar" data-color="purple" data-background-color="black" data-image="../static/img/sidebar-1.jpg">
    <div class="logo">
      <a href="javascript:;" class="simple-text">VSWare</a>
    </div>

    <div class="sidebar-wrapper">
      <ul class="nav">
        <li>
          <router-link to="/Dashboard">
            <i class="material-icons">dashboard</i>
            <p>Dashboard Secretary</p>
          </router-link>
        </li>
        <li class="active">
          <router-link to="/DashboardV2">
            <i class="material-icons">person</i>
            <p>Dashboard Teacher</p>
          </router-link>
          <li>
            <router-link to="/SingleLearner">
              <i class="material-icons">content_paste</i>
              <p>Learner - Personal</p>
            </router-link>
          </li>
          <li>
            <router-link to="/SingleFaculty">
              <i class="material-icons">library_books</i>
              <p>Faculty - Classes</p>
            </router-link>
          </li>
          <li>
            <a href="icons.html">
	                        <i class="material-icons">bubble_chart</i>
	                        <p>More</p>
	                    </a>
          </li>
      </ul>
    </div>
  </div>

  <div class="main-panel">
    <nav class="navbar navbar-transparent navbar-absolute">
      <div class="container-fluid">
        <div class="navbar-minimize">
          <button id="minimizeSidebar" class="btn btn-round btn-white btn-fill btn-just-icon" @click="uiTriggerSideBarCollapse">
                <i class="material-icons visible-on-sidebar-regular" v-if="sideBarCollapse === false">more_vert</i>
                <i class="material-icons visible-on-sidebar-mini" v-if="sideBarCollapse === true">view_list</i>
            <div class="ripple-container"></div>
          </button>
        </div>
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
          <a class="navbar-brand" href="javascript:;">{{ name }}</a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="#pablo" class="dropdown-toggle" data-toggle="dropdown">
									<i class="material-icons">dashboard</i>
									<p class="hidden-lg hidden-md">Dashboard</p>
								</a>
            </li>
            <li class="dropdown">
              <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
									<i class="material-icons">notifications</i>
									<span class="notification">5</span>
									<p class="hidden-lg hidden-md">Notifications</p>
								</a>
              <ul class="dropdown-menu">
                <li><a href="javascript:;">Mike John responded to your email</a></li>
                <li><a href="javascript:;">You have 5 new tasks</a></li>
                <li><a href="javascript:;">You're now friend with Andrew</a></li>
                <li><a href="javascript:;">Another Notification</a></li>
                <li><a href="javascript:;">Another One</a></li>
              </ul>
            </li>
            <li>
              <a href="#pablo" class="dropdown-toggle" data-toggle="dropdown">
	 							   <i class="material-icons">person</i>
	 							   <p class="hidden-lg hidden-md">Profile</p>
		 						</a>
            </li>
          </ul>

          <form class="navbar-form navbar-right" role="search">
            <div class="form-group  is-empty">
              <input type="text" class="form-control" placeholder="Search">
              <span class="material-input"></span>
            </div>
            <button type="submit" class="btn btn-white btn-round btn-just-icon">
								<i class="material-icons">search</i><div class="ripple-container"></div>
							</button>
          </form>
        </div>
      </div>
    </nav>

    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="card card-stats">
              <div class="card-header" data-background-color="orange">
                <i class="material-icons">content_copy</i>
              </div>
              <div class="card-content">
                <p class="category">System Messages</p>
                <h3 class="title">10<small> Messages</small></h3>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="material-icons text-primary">message</i> <a href="#pablo">View your messages here</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="card card-stats">
              <div class="card-header" data-background-color="green">
                <i class="material-icons">note</i>
              </div>
              <div class="card-content">
                <p class="category">Recent Docs</p>
                <h3 class="title">26</h3>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="material-icons">date_range</i> Last 24 Hours
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="card card-stats">
              <div class="card-header" data-background-color="red">
                <i class="material-icons">info_outline</i>
              </div>
              <div class="card-content">
                <p class="category">Fixed Issues</p>
                <h3 class="title">75</h3>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="material-icons">local_offer</i> Tracked from VSWare Gitlab
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-12 col-md-12 col-sm-6">
            <div class="card card-stats">
              <div class="card-header" data-background-color="purple">
                <i class="material-icons">build</i>
              </div>
              <div class="card-content">
                <p class="category text-success">All Tests Passing</p>
                <h3 class="title">459 Tests</h3>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="material-icons">update</i> Just Updated
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <div class="card card-product" data-count="4">
              <div class="card-image" data-header-animation="true">
                <a href="#pablo">
                                        <img class="img" src="https://vignette2.wikia.nocookie.net/community-sitcom/images/3/3c/CA_Dean_Peltons_shout_out_to_the_study_group.jpg/revision/latest/scale-to-width-down/640?cb=20120517195549">
                                    </a>
                <div class="ripple-container"></div>
              </div>
              <div class="card-content">
                <h4 class="card-title">
                                        <a href="#pablo">Class A Roll Call</a>
                                    </h4>
                <div class="card-description">
                  Class A Description And Misc Information
                </div>
              </div>
              <div class="card-footer">
                <div class="price text-danger">
                  <h4>15/30 Students</h4>
                </div>
                <div class="stats pull-right">
                  <p class="category text-danger"><i class="material-icons">error_outline</i> Absent</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card card-product" data-count="4">
              <div class="card-image" data-header-animation="true">
                <a href="#pablo">
                                        <img class="img" src="https://vignette2.wikia.nocookie.net/community-sitcom/images/3/3c/CA_Dean_Peltons_shout_out_to_the_study_group.jpg/revision/latest/scale-to-width-down/640?cb=20120517195549">
                                    </a>
                <div class="ripple-container"></div>
              </div>
              <div class="card-content">
                <h4 class="card-title">
                                        <a href="#pablo">Class B Roll Call</a>
                                    </h4>
                <div class="card-description">
                  Class B Description And Misc Information
                </div>
              </div>
              <div class="card-footer">
                <div class="price text-success">
                  <h4>0/30 Students</h4>
                </div>
                <div class="stats pull-right">
                  <p class="category text-success"><i class="material-icons">error_outline</i> Absent</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card card-product" data-count="4">
              <div class="card-image" data-header-animation="true">
                <a href="#pablo">
                                        <img class="img" src="https://vignette2.wikia.nocookie.net/community-sitcom/images/3/3c/CA_Dean_Peltons_shout_out_to_the_study_group.jpg/revision/latest/scale-to-width-down/640?cb=20120517195549">
                                    </a>
                <div class="ripple-container"></div>
              </div>
              <div class="card-content">
                <h4 class="card-title">
                                        <a href="#pablo">Class C Roll Call</a>
                                    </h4>
                <div class="card-description">
                  Class C Description And Misc Information
                </div>
              </div>
              <div class="card-footer">
                <div class="price text-warning">
                  <h4>6/30 Students</h4>
                </div>
                <div class="stats pull-right">
                  <p class="category text-warning"><i class="material-icons">error_outline</i> Absent</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="card card-nav-tabs">
              <div class="card-header" data-background-color="blue">
                <div class="nav-tabs-navigation">
                  <div class="nav-tabs-wrapper">
                    <ul class="nav nav-tabs" data-tabs="tabs">
                      <li class="active">
                        <a href="#profile" data-toggle="tab">
														<i class="material-icons">date_range</i>
														AM/PM Attendance
													<div class="ripple-container"></div></a>
                      </li>
                      <li class="">
                        <a href="#messages" data-toggle="tab">
														<i class="material-icons">note</i>
														Assesment
													<div class="ripple-container"></div></a>
                      </li>
                      <li class="">
                        <a href="#settings" data-toggle="tab">
														<i class="material-icons">report_problem</i>
														Behaviour Assigned To Me
													<div class="ripple-container"></div></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="card-content">
                <div class="tab-content">
                  <div class="tab-pane active" id="profile">
                    <table class="table">
                      <tbody>
                        <tr>
                          <td>
                            <div class="checkbox">
                              <label>
																	<input type="checkbox" name="optionsCheckboxes" checked>
																</label>
                            </div>
                          </td>
                          <td>Sign contract for "What are conference organizers afraid of?"</td>
                          <td class="td-actions text-right">
                            <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs" data-toggle="modal" data-target="#myModal">
																<i class="material-icons">edit</i>
															</button>
                            <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
																<i class="material-icons">close</i>
															</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="checkbox">
                              <label>
																	<input type="checkbox" name="optionsCheckboxes">
																</label>
                            </div>
                          </td>
                          <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                          <td class="td-actions text-right">
                            <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs" data-toggle="modal" data-target="#myModal">
																<i class="material-icons">edit</i>
															</button>
                            <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
																<i class="material-icons">close</i>
															</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="checkbox">
                              <label>
																	<input type="checkbox" name="optionsCheckboxes">
																</label>
                            </div>
                          </td>
                          <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                          </td>
                          <td class="td-actions text-right">
                            <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs" data-toggle="modal" data-target="#myModal">
																<i class="material-icons">edit</i>
															</button>
                            <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
																<i class="material-icons">close</i>
															</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="checkbox">
                              <label>
																	<input type="checkbox" name="optionsCheckboxes" checked>
																</label>
                            </div>
                          </td>
                          <td>Create 4 Invisible User Experiences you Never Knew About</td>
                          <td class="td-actions text-right">
                            <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs" data-toggle="modal" data-target="#myModal">
																<i class="material-icons">edit</i>
															</button>
                            <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
																<i class="material-icons">close</i>
															</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane" id="messages">
                    <table class="table">
                      <tbody>
                        <tr>
                          <td>
                            <div class="checkbox">
                              <label>
																	<input type="checkbox" name="optionsCheckboxes" checked>
																</label>
                            </div>
                          </td>
                          <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                          </td>
                          <td class="td-actions text-right">
                            <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs" data-toggle="modal" data-target="#myModal">
																<i class="material-icons">edit</i>
															</button>
                            <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
																<i class="material-icons">close</i>
															</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="checkbox">
                              <label>
																	<input type="checkbox" name="optionsCheckboxes">
																</label>
                            </div>
                          </td>
                          <td>Sign contract for "What are conference organizers afraid of?"</td>
                          <td class="td-actions text-right">
                            <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs" data-toggle="modal" data-target="#myModal">
																<i class="material-icons">edit</i>
															</button>
                            <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
																<i class="material-icons">close</i>
															</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane" id="settings">
                    <table class="table">
                      <tbody>
                        <tr>
                          <td>
                            <div class="checkbox">
                              <label>
																	<input type="checkbox" name="optionsCheckboxes">
																</label>
                            </div>
                          </td>
                          <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                          <td class="td-actions text-right">
                            <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs" data-toggle="modal" data-target="#myModal">
																<i class="material-icons">edit</i>
															</button>
                            <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
																<i class="material-icons">close</i>
															</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="checkbox">
                              <label>
																	<input type="checkbox" name="optionsCheckboxes" checked>
																</label>
                            </div>
                          </td>
                          <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                          </td>
                          <td class="td-actions text-right">
                            <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs" data-toggle="modal" data-target="#myModal">
																<i class="material-icons">edit</i>
															</button>
                            <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
																<i class="material-icons">close</i>
															</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="checkbox">
                              <label>
																	<input type="checkbox" name="optionsCheckboxes">
																</label>
                            </div>
                          </td>
                          <td>Sign contract for "What are conference organizers afraid of?"</td>
                          <td class="td-actions text-right">
                            <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs" data-toggle="modal" data-target="#myModal">
																<i class="material-icons">edit</i>
															</button>
                            <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
																<i class="material-icons">close</i>
															</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="container-fluid">
        <nav class="pull-left">
          <ul>
            <li>
              <a href="javascript:;">
									Home
								</a>
            </li>
            <li>
              <a href="javascript:;">
									Teachers
								</a>
            </li>
            <li>
              <a href="javascript:;">
									Students
								</a>
            </li>
            <li>
              <a href="javascript:;">
								   Current Timetable
								</a>
            </li>
          </ul>
        </nav>
        <p class="copyright pull-right">
          &copy; 2017 <a href="javascript:;">VSWare</a>, made with love by the VSWare team.
        </p>
      </div>
    </footer>
  </div>

  <!-- Sart Modal -->
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
  					<i class="material-icons">clear</i>
  				</button>
          <h4 class="modal-title">Modal title</h4>
        </div>
        <div class="modal-body">
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden
            flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default btn-simple">Nice Button</button>
          <button type="button" class="btn btn-danger btn-simple" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  <!--  End Modal -->
</div>
</template>

<script>
import jQuery from 'jquery';
import material from 'bootstrap-material-design';
import Chart from 'chartjs';

const $ = jQuery;
window.material = material;
window.Chart = Chart;

function debounce(func, wait, immediate) {
  let timeout;
  return () => {
    const context = this;
    const args = [func, wait, immediate];
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}

export default {
  name: 'Dashboard',
  data() {
    return {
      name: 'St Marys PLC Dashboard',
      searchVisible: 0,
      transparent: true,
      transparentDemo: true,
      fixedTop: false,
      mobileMenuVisible: 0,
      mobileMenuInitialized: false,
      toggleInitialized: false,
      bootstrapNavInitialized: false,
      sidebar: {},
      navbar: {},
      navContent: '',
      mobileMenuContent: '',
      contentBuff: ',',
      toggle: {},
      layer: {},
      sideBarWrapper: {},
      sideBarNav: {},
      mainPanelHeight: 0,
      navbarForm: '',
      imageSrc: '',
      type: ['', 'info', 'success', 'warning', 'danger'],
      sideBarCollapse: false,
    };
  },
  methods: {
    uiTriggerSideBarCollapse() {
      this.sideBarCollapse = !this.sideBarCollapse;
      $('body').toggleClass('sidebar-mini');

      if (this.sideBarCollapse) {
        const contentHeight = $('.main-panel').height();
        $('.sidebar-wrapper').height(contentHeight);
      } else {
        $('.sidebar-wrapper').height('calc(100vh - 75px)');
      }
    },
    setCharts() {
      const ctx = document.getElementById('radar-chart').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          }],
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              },
            }],
          },
        },
      });

      myChart.type = 'bar';
    },
    setInitalValues() {
      $.material.init();
      this.sidebar = $('.sidebar');
      $('[rel="tooltip"]').tooltip();
      $('.form-control').on('focus', () => {
        $(this).parent('.input-group').addClass('input-group-focus');
      }).on('blur', () => {
        $(this).parent('.input-group').removeClass('input-group-focus');
      });
    },
    setWindowReSIze() {
      const self = this;
      $(window).resize(() => {
        self.initSidebarsCheck();
        self.seq = 0;
        self.seq2 = 0;
      });
    },
    checkSidebarImage() {
      this.sidebar = $('.sidebar');
      this.imageSrc = this.sidebar.data('image');

      if (this.imageSrc !== undefined) {
        const sidebarContainer = `<div class="sidebar-background" style="background-image: url(${this.imageSrc}) "/>`;
        this.sidebar.append(sidebarContainer);
      }
    },
    initSidebarsCheck() {
      const self = this;
      if ($(window).width() <= 991) {
        if (self.sidebar.length !== 0) {
          self.initRightMenu();
        } else {
          self.initBootstrapNavbarMenu();
        }
      }
    },
    initRightMenu: debounce(() => {
      const self = this;
      self.sideBarWrapper = $('.sidebar-wrapper');

      if (!self.mobileMenuInitialized) {
        self.navbar = $('nav').find('.navbar-collapse').first().clone(true);

        self.navContent = '';
        self.mobileMenuContent = '';

        self.navbar.children('ul').each((index, element) => {
          self.contentBuff = $(element).html();
          const contentValue = self.navContent + self.contentBuff;
          self.navContent = contentValue;
        });


        self.navContent = `<ul class="nav nav-mobile-menu">${self.navContent}</ul>`;
        self.navbarForm = $('nav').find('.navbar-form').clone(true);
        self.sideBarNav = self.sideBarWrapper.find(' > .nav');
        self.navContent = $(self.navContent);
        self.navContent.insertBefore(self.sideBarNav);
        self.navbarForm.insertBefore(self.navContent);

        $('.sidebar-wrapper .dropdown .dropdown-menu > li > a').click((event) => {
          event.stopPropagation();
        });

        self.mobileMenuInitialized = true;
      } else if (self.mobileMenuInitialized === true && $(window).width() > 991) {
        self.sideBarWrapper.find('.navbar-form').remove();
        self.sideBarWrapper.find('.nav-mobile-menu').remove();
        self.mobileMenuInitialized = false;
      } else {
        return;
      }

      if (!self.toggleInitialized) {
        self.toggle = $('.navbar-toggle');

        self.toggle.click(() => {
          if (self.mobileMenuVisible === 1) {
            $('html').removeClass('nav-open');
            $('.close-layer').remove();
            setTimeout(() => {
              self.toggle.removeClass('toggled');
            }, 400);

            self.mobileMenuVisible = 0;
          } else {
            setTimeout(() => {
              self.toggle.addClass('toggled');
            }, 430);


            self.mainPanelHeight = $('.main-panel')[0].scrollHeight;
            self.layer = $('<div class="close-layer"></div>');
            self.layer.css('height', self.mainPanelHeight);
            self.layer.appendTo('.main-panel');

            setTimeout(() => {
              self.layer.addClass('visible');
            }, 100);

            self.layer.click(() => {
              $('html').removeClass('nav-open');
              self.mobileMenuVisible = 0;

              self.layer.removeClass('visible');

              setTimeout(() => {
                self.layer.remove();
                self.toggle.removeClass('toggled');
              }, 400);
            });
            $('html').addClass('nav-open');
            self.mobileMenuVisible = 1;
          }
        });
        self.toggleInitialized = true;
      }
    }, 500),
    initBootstrapNavbarMenu: debounce(() => {
      const self = this;
      if (!self.bootstrapNavInitialized) {
        self.navbar = $('nav').find('.navbar-collapse').first().clone(true);

        self.navContent = '';
        self.mobileMenuContent = '';

        self.navbar.children('ul').each(() => {
          self.contentBuff = $(this).html();
          const contentValue = self.navContent + self.contentBuff;
          self.navContent = contentValue;
        });

        self.navContent = `<ul class="nav nav-mobile-menu">${self.navContent}</ul>`;

        self.navbar.html(self.navContent);
        self.navbar.addClass('off-canvas-sidebar');

        $('body').append(self.navbar);

        self.toggle = $('.navbar-toggle');

        self.navbar.find('a').removeClass('btn btn-round btn-default');
        self.navbar.find('button').removeClass('btn-round btn-fill btn-info btn-primary btn-success btn-danger btn-warning btn-neutral');
        self.navbar.find('button').addClass('btn-simple btn-block');

        self.toggle.click(() => {
          if (self.mobileMenuVisible === 1) {
            $('html').removeClass('nav-open');

            $('.close-layer').remove();
            setTimeout(() => {
              self.toggle.removeClass('toggled');
            }, 400);

            self.mobileMenuVisible = 0;
          } else {
            setTimeout(() => {
              self.toggle.addClass('toggled');
            }, 430);

            self.layer = $('<div class="close-layer"></div>');
            self.layer.appendTo('.wrapper-full-page');

            setTimeout(() => {
              self.layer.addClass('visible');
            }, 100);

            self.layer.click(() => {
              $('html').removeClass('nav-open');
              self.mobileMenuVisible = 0;
              self.layer.removeClass('visible');
              setTimeout(() => {
                self.layer.remove();
                self.toggle.removeClass('toggled');
              }, 400);
            });

            $('html').addClass('nav-open');
            self.mobileMenuVisible = 1;
          }
        });
        self.bootstrapNavInitialized = true;
      }
    }, 500),
    checkScrollForTransparentNavbar: debounce(() => {
      const self = this;
      if ($(document).scrollTop() > 260 && self.transparent) {
        self.transparent = false;
        $('.navbar-color-on-scroll').removeClass('navbar-transparent');
      } else if ($(document).scrollTop < 260 && !self.transparent) {
        self.transparent = true;
        $('.navbar-color-on-scroll').addClass('navbar-transparent');
      }
    }, 17),
    showNotification(from, align) {
      const self = this;
      const color = Math.floor((Math.random() * 4) + 1);

      $.notify({
        icon: 'notifications',
        message: 'Welcome to <b>VSWare Secretary Dashboard</b> - made with love by David O Regan.',
      }, {
        type: self.type[color],
        timer: 4000,
        placement: {
          from,
          align,
        },
      });
    },
  },
  mounted() {
    const self = this;
    this.setInitalValues();
    this.checkSidebarImage();
    this.setWindowReSIze();
    this.checkScrollForTransparentNavbar();
    this.showNotification();

    setTimeout(() => {
      self.setCharts();
    }, 0);
  },
};
</script>


<style lang="scss" scoped>
@import "../styles/main.scss";
</style>
