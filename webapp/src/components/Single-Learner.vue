<template>
<div class="vsware-Dashboard wrapper">
  <div class="sidebar" data-color="purple" data-image="../assets/img/sidebar-1.jpg">
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
        <li>
          <router-link to="/DashboardV2">
            <i class="material-icons">person</i>
            <p>Dashboard Teacher</p>
          </router-link>
          <li class="active">
            <router-link to="/SingleLearner">
              <i class="material-icons">content_paste</i>
              <p>Single Learner</p>
            </router-link>
          </li>
          <li>
            <router-link to="/SingleFaculty">
              <i class="material-icons">library_books</i>
              <p>Single Faculty</p>
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
          <a class="navbar-brand" href="#">Profile</a>
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
          <div class="col-md-8">
            <div class="card">
              <div class="card-header" data-background-color="purple">
                <h4 class="title">Personal Information</h4>
                <p class="category">Edit your personal information here</p>
              </div>
              <div class="card-content">
                <form>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group label-floating">
                        <label>Biography</label>
                      </div>
                    </div>
                    <div class="col-md-5">
                      <div class="form-group label-floating">
                        <label class="control-label">National ID</label>
                        <input type="text" class="form-control" value="0710984321">
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group label-floating">
                        <label class="control-label">VSWare ID</label>
                        <input type="text" class="form-control" value="3302844">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group label-floating">
                        <label class="control-label">Student Email</label>
                        <input type="email" class="form-control" value="BASIRU@HOTMAIL.COM">
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group label-floating">
                        <label class="control-label">Fist Name</label>
                        <input type="text" class="form-control" value="BASIRU">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group label-floating">
                        <label class="control-label">Last Name</label>
                        <input type="text" class="form-control" value="AADLAND">
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group label-floating">
                        <label>Address Information</label>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group label-floating">
                        <label class="control-label">Adress</label>
                        <input type="text" class="form-control" value="465 Howth Road">
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group label-floating">
                        <label class="control-label">City</label>
                        <input type="text" class="form-control" value="Killester">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group label-floating">
                        <label class="control-label">Country</label>
                        <input type="text" class="form-control" value="Dublin">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group label-floating">
                        <label class="control-label">Postal Code</label>
                        <input type="text" class="form-control" value="18">
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>School Information</label>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group label-floating">
                        <label class="control-label">Current School</label>
                        <input type="text" class="form-control" value="St Marys PLC">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group label-floating">
                        <label class="control-label">Previous School</label>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group label-floating">
                        <label class="control-label">Exam Repeat</label>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                  </div>


                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Misc Information</label>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group label-floating">
                        <label class="control-label">Irish exemption</label>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group label-floating">
                        <label class="control-label">LCVP</label>
                        <input type="text" class="form-control" value="Yes">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group label-floating">
                        <label class="control-label">Exam Repeat</label>
                        <input type="text" class="form-control" value="NO">
                      </div>
                    </div>
                  </div>

                  <button type="submit" class="btn btn-primary pull-right">Update Profile</button>
                  <div class="clearfix"></div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-profile">
              <div class="card-avatar">
                <a href="#pablo">
                                    <img class="img" src="/static/img/faces/marc.jpg" />
                                </a>
              </div>

              <div class="content">
                <h6 class="category text-gray">Student</h6>
                <h4 class="card-title" style="left: 0em;">BASIRU AADLAND</h4>
                <p class="card-content">
                  Test
                </p>
                <p class="card-content">
                  Test
                </p>
                <p class="card-content">
                  Test
                </p>
                <a href="#pablo" class="btn btn-primary btn-round"><i class="material-icons">arrow_back</i> Previous</a>
                <a href="#pablo" class="btn btn-primary btn-round">Next <i class="material-icons">arrow_forward</i></a>
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
</div>
</template>

<script>
import jQuery from 'jquery';
import material from 'bootstrap-material-design';
import Chart from 'chartjs';

const $ = jQuery;
window.$ = $;
window.material = material;
window.Chart = Chart;

export default {
  name: 'Learner',
  data() {
    return {
      name: 'Single Learner',
      sideBarCollapse: false,
    };
  },
  methods: {
    initPage() {
      setTimeout(() => {
        $.material.init();
      }, 300);
    },
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
  },
  created() {
    this.initPage();
  },
};
</script>


<style lang="scss" scoped>
@import "../styles/main.scss";
</style>
