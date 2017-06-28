<template>
<div class="vsware-Dashboard wrapper">
  <div class="sidebar" data-color="purple" data-background-color="black">
    <div class="logo">
      <a href="#" class="simple-text">VSWare</a>
    </div>

    <div class="sidebar-wrapper">
      <ul class="nav">
        <li class="active">
          <a href="dashboard.html">
	                        <i class="material-icons">dashboard</i>
	                        <p>Dashboard Secretary</p>
	                    </a>
        </li>
        <li>
          <a href="user.html">
	                        <i class="material-icons">person</i>
	                        <p>Dashboard Teacher</p>
	                    </a>
        </li>
        <li>
          <a href="table.html">
	                        <i class="material-icons">content_paste</i>
	                        <p>Table List</p>
	                    </a>
        </li>
        <li>
          <a href="typography.html">
	                        <i class="material-icons">library_books</i>
	                        <p>Typography</p>
	                    </a>
        </li>
        <li>
          <a href="icons.html">
	                        <i class="material-icons">bubble_chart</i>
	                        <p>Icons</p>
	                    </a>
        </li>
        <li>
          <a href="maps.html">
	                        <i class="material-icons">location_on</i>
	                        <p>Maps</p>
	                    </a>
        </li>
        <li>
          <a href="notifications.html">
	                        <i class="material-icons text-gray">notifications</i>
	                        <p>Notifications</p>
	                    </a>
        </li>
      </ul>
    </div>
    <!-- <div class="sidebar-background"></div> -->
  </div>

  <div class="main-panel">
    <nav class="navbar navbar-transparent navbar-absolute">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
          <a class="navbar-brand" href="#">{{ name }}</a>
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
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
									<i class="material-icons">notifications</i>
									<span class="notification">5</span>
									<p class="hidden-lg hidden-md">Notifications</p>
								</a>
              <ul class="dropdown-menu">
                <li><a href="#">Mike John responded to your email</a></li>
                <li><a href="#">You have 5 new tasks</a></li>
                <li><a href="#">You're now friend with Andrew</a></li>
                <li><a href="#">Another Notification</a></li>
                <li><a href="#">Another One</a></li>
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
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-stats">
              <div class="card-header" data-background-color="orange">
                <i class="material-icons">content_copy</i>
              </div>
              <div class="card-content">
                <p class="category">Used Space</p>
                <h3 class="title">49/50<small>GB</small></h3>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="material-icons text-danger">warning</i> <a href="#pablo">Get More Space...</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
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
          <div class="col-lg-3 col-md-6 col-sm-6">
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
                  <i class="material-icons">local_offer</i> Tracked from Github
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-stats">
              <div class="card-header" data-background-color="blue">
                <i class="fa fa-twitter"></i>
              </div>
              <div class="card-content">
                <p class="category">Followers</p>
                <h3 class="title">+245</h3>
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
            <div class="card">
              <div class="card-header card-chart" data-background-color="green">
                <div class="ct-chart" id="dailySalesChart"></div>
              </div>
              <div class="card-content">
                <h4 class="title">Attendance</h4>
                <p class="category"><span class="text-success"><i class="fa fa-long-arrow-up"></i> 55%  </span> increase in attendance sales.</p>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="material-icons">access_time</i> updated 4 minutes ago
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card">
              <div class="card-header card-chart" data-background-color="orange">
                <div class="ct-chart" id="emailsSubscriptionChart"></div>
              </div>
              <div class="card-content">
                <h4 class="title">Roll Calls</h4>
                <p class="category">Last taken roll call</p>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="material-icons">access_time</i> updated 13 minutes ago
                </div>
              </div>

            </div>
          </div>

          <div class="col-md-4">
            <div class="card">
              <div class="card-header card-chart" data-background-color="red">
                <div class="ct-chart" id="completedTasksChart"></div>
              </div>
              <div class="card-content">
                <h4 class="title">Completed Tasks</h4>
                <p class="category">Last Campaign Performance</p>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="material-icons">access_time</i> campaign sent 2 days ago
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="card card-nav-tabs">
              <div class="card-header" data-background-color="purple">
                <div class="nav-tabs-navigation">
                  <div class="nav-tabs-wrapper">
                    <span class="nav-tabs-title">Tasks:</span>
                    <ul class="nav nav-tabs" data-tabs="tabs">
                      <li class="active">
                        <a href="#profile" data-toggle="tab">
														<i class="material-icons">bug_report</i>
														Bugs
													<div class="ripple-container"></div></a>
                      </li>
                      <li class="">
                        <a href="#messages" data-toggle="tab">
														<i class="material-icons">code</i>
														Website
													<div class="ripple-container"></div></a>
                      </li>
                      <li class="">
                        <a href="#settings" data-toggle="tab">
														<i class="material-icons">cloud</i>
														Server
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
                            <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs">
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
                            <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs">
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
                            <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs">
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
                            <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs">
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
                            <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs">
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
                            <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs">
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
                            <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs">
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
                            <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs">
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
                            <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs">
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

          <div class="col-lg-6 col-md-12">
            <div class="card">
              <div class="card-header" data-background-color="orange">
                <h4 class="title">Employees Stats</h4>
                <p class="category">New employees on 15th September, 2016</p>
              </div>
              <div class="card-content table-responsive">
                <table class="table table-hover">
                  <thead class="text-warning">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Country</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>$23,789</td>
                      <td>Curaçao</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>$56,142</td>
                      <td>Netherlands</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>$38,735</td>
                      <td>Korea, South</td>
                    </tr>
                  </tbody>
                </table>
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
              <a href="#">
									Home
								</a>
            </li>
            <li>
              <a href="#">
									Teachers
								</a>
            </li>
            <li>
              <a href="#">
									Students
								</a>
            </li>
            <li>
              <a href="#">
								   Current Timetable
								</a>
            </li>
          </ul>
        </nav>
        <p class="copyright pull-right">
          &copy; 2017 <a href="#">VSWare</a>, made with love by the VSWare team.
        </p>
      </div>
    </footer>
  </div>
</div>
</template>

<script>
import Chartist from 'chartist';

export default {
  name: 'Dashboard',
  data() {
    return {
      name: 'VSWare Dashboard',
      searchVisible: 0,
      transparent: true,
      transparentDemo: true,
      fixedTop: false,
      mobile_menu_visible: 0,
      mobile_menu_initialized: false,
      toggle_initialized: false,
      bootstrap_nav_initialized: false,
      seq: 0,
      delays: 80,
      durations: 500,
      seq2: 0,
      delays2: 80,
      durations2: 500,
    };
  },
  methods: {
    setCharts() {
      const dataDailySalesChart = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        series: [
          [12, 17, 7, 17, 23, 18, 38],
        ],
      };
      const optionsDailySalesChart = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0,
        }),
        low: 0,
        high: 50,
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      };
      const chart = document.getElementById('dailySalesChart');
      const dailySalesChart = new Chartist.Line(chart, dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);
    },
    startAnimationForLineChart(chart) {
      const self = this;
      chart.on('draw', (data) => {
        if (data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint,
            },
          });
        } else if (data.type === 'point') {
          self.seq += 1;
          data.element.animate({
            opacity: {
              begin: self.seq * self.delays,
              dur: self.durations,
              from: 0,
              to: 1,
              easing: 'ease',
            },
          });
        }
      });

      self.seq = 0;
    },
    setInitalValues() {
    },
  },
  mounted() {
    this.setInitalValues();
    this.setCharts();
  },
};
</script>


<style lang="scss" scoped>
@import "../styles/main.scss";
</style>
