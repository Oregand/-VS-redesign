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
          <li>
            <router-link to="/SingleLearner">
              <i class="material-icons">content_paste</i>
              <p>Learner - Personal</p>
            </router-link>
          </li>
          <li  class="active">
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
          <a class="navbar-brand" href="#">Classes && Subjects</a>
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
              <input type="text" class="form-control" placeholder="Search" @click="uiTriggerSearch">
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
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="card-header" data-background-color="purple">
                    <h4 class="title">Classes Taught</h4>
                    <p class="category">Here is a subtitle for this table</p>
                  </div>
                  <div class="card-content table-responsive">
                    <table class="table">
                      <thead class="text-primary">
                        <th>Name</th>
                        <th>Class Code</th>
                        <th>Group</th>
                        <th>Accociated TG</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Maths 2</td>
                          <td>M2</td>
                          <td>Group A</td>
                          <td class="text-primary">ISTA1</td>
                        </tr>
                        <tr>
                          <td>English</td>
                          <td>ENG</td>
                          <td>Group B</td>
                          <td class="text-primary">ISTA2</td>
                        </tr>
                        <tr>
                          <td>Irish</td>
                          <td>IR</td>
                          <td>Group C</td>
                          <td class="text-primary">ISTA3</td>
                        </tr>
                        <tr>
                          <td>English 3</td>
                          <td>ENG3</td>
                          <td>Group D</td>
                          <td class="text-primary">ISTA4</td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="card-header" data-background-color="purple">
                    <h4 class="title">Teaching Groups</h4>
                    <p class="category">Here is a subtitle for this table</p>
                  </div>
                  <div class="card-content table-responsive">
                    <table class="table">
                      <thead class="text-primary">
                        <th>Name</th>
                        <th>Class Code</th>
                        <th>Group</th>
                        <th>Accociated TG</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Maths 2</td>
                          <td>M2</td>
                          <td>Group A</td>
                          <td class="text-primary">ISTA1</td>
                        </tr>
                        <tr>
                          <td>English</td>
                          <td>ENG</td>
                          <td>Group B</td>
                          <td class="text-primary">ISTA2</td>
                        </tr>
                        <tr>
                          <td>Irish</td>
                          <td>IR</td>
                          <td>Group C</td>
                          <td class="text-primary">ISTA3</td>
                        </tr>
                        <tr>
                          <td>English 3</td>
                          <td>ENG3</td>
                          <td>Group D</td>
                          <td class="text-primary">ISTA4</td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="card-header" data-background-color="purple">
                    <h4 class="title">Subjects</h4>
                    <p class="category">Subjects Taught By: </p>
                  </div>
                  <div class="card-content table-responsive">
                    <table class="table">
                      <thead class="text-primary">
                        <th>Name</th>
                        <th>Class Code</th>
                        <th>Group</th>
                        <th>Accociated TG</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Maths 2</td>
                          <td>M2</td>
                          <td>Group A</td>
                          <td class="text-primary">ISTA1</td>
                        </tr>
                        <tr>
                          <td>English</td>
                          <td>ENG</td>
                          <td>Group B</td>
                          <td class="text-primary">ISTA2</td>
                        </tr>
                        <tr>
                          <td>Irish</td>
                          <td>IR</td>
                          <td>Group C</td>
                          <td class="text-primary">ISTA3</td>
                        </tr>
                        <tr>
                          <td>English 3</td>
                          <td>ENG3</td>
                          <td>Group D</td>
                          <td class="text-primary">ISTA4</td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-profile">
              <div class="card-avatar">
                <a href="#pablo">
                                    <img class="img" src="/static/img/faces/drevil.jpg" />
                                </a>
              </div>

              <div class="content">
                <h6 class="category text-gray">Teacher</h6>
                <h4 class="card-title" style="left: 0em;">BASIRU AADLAND</h4>
                <p class="card-content">
                  This is some information about the teacher who may or may not look like Dr Evil.
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
  <!--Start Search-->
  <div id="morphsearch" class="morphsearch">
    <form class="morphsearch-form">
      <input class="morphsearch-input" type="search" placeholder="Search..."/>
      <button class="morphsearch-submit" type="submit">Search</button>
    </form>
    <div class="morphsearch-content">
      <div class="dummy-column">
        <h2>Teachers</h2>
        <a class="dummy-media-object" href="http://twitter.com/SaraSoueidan">
          <img src="http://0.gravatar.com/avatar/81b58502541f9445253f30497e53c280?s=50&d=identicon&r=G" alt="Sara Soueidan"/>
          <h3>Sara Soueidan</h3>
        </a>
        <a class="dummy-media-object" href="http://twitter.com/rachsmithtweets">
          <img src="http://0.gravatar.com/avatar/48959f453dffdb6236f4b33eb8e9f4b7?s=50&d=identicon&r=G" alt="Rachel Smith"/>
          <h3>Rachel Smith</h3>
        </a>
        <a class="dummy-media-object" href="http://www.twitter.com/peterfinlan">
          <img src="http://0.gravatar.com/avatar/06458359cb9e370d7c15bf6329e5facb?s=50&d=identicon&r=G" alt="Peter Finlan"/>
          <h3>Peter Finlan</h3>
        </a>
        <a class="dummy-media-object" href="http://www.twitter.com/pcridesagain">
          <img src="http://1.gravatar.com/avatar/db7700c89ae12f7d98827642b30c879f?s=50&d=identicon&r=G" alt="Patrick Cox"/>
          <h3>Patrick Cox</h3>
        </a>
        <a class="dummy-media-object" href="https://twitter.com/twholman">
          <img src="http://0.gravatar.com/avatar/cb947f0ebdde8d0f973741b366a51ed6?s=50&d=identicon&r=G" alt="Tim Holman"/>
          <h3>Tim Holman</h3>
        </a>
        <a class="dummy-media-object" href="https://twitter.com/shaund0na">
          <img src="http://1.gravatar.com/avatar/9bc7250110c667cd35c0826059b81b75?s=50&d=identicon&r=G" alt="Shaun Dona"/>
          <h3>Shaun Dona</h3>
        </a>
      </div>
      <div class="dummy-column">
        <h2>Students</h2>
        <a class="dummy-media-object" href="http://twitter.com/SaraSoueidan">
          <img src="http://0.gravatar.com/avatar/81b58502541f9445253f30497e53c280?s=50&d=identicon&r=G" alt="Sara Soueidan"/>
          <h3>Sara Soueidan</h3>
        </a>
        <a class="dummy-media-object" href="http://twitter.com/rachsmithtweets">
          <img src="http://0.gravatar.com/avatar/48959f453dffdb6236f4b33eb8e9f4b7?s=50&d=identicon&r=G" alt="Rachel Smith"/>
          <h3>Rachel Smith</h3>
        </a>
        <a class="dummy-media-object" href="http://www.twitter.com/peterfinlan">
          <img src="http://0.gravatar.com/avatar/06458359cb9e370d7c15bf6329e5facb?s=50&d=identicon&r=G" alt="Peter Finlan"/>
          <h3>Peter Finlan</h3>
        </a>
        <a class="dummy-media-object" href="http://www.twitter.com/pcridesagain">
          <img src="http://1.gravatar.com/avatar/db7700c89ae12f7d98827642b30c879f?s=50&d=identicon&r=G" alt="Patrick Cox"/>
          <h3>Patrick Cox</h3>
        </a>
        <a class="dummy-media-object" href="https://twitter.com/twholman">
          <img src="http://0.gravatar.com/avatar/cb947f0ebdde8d0f973741b366a51ed6?s=50&d=identicon&r=G" alt="Tim Holman"/>
          <h3>Tim Holman</h3>
        </a>
        <a class="dummy-media-object" href="https://twitter.com/shaund0na">
          <img src="http://1.gravatar.com/avatar/9bc7250110c667cd35c0826059b81b75?s=50&d=identicon&r=G" alt="Shaun Dona"/>
          <h3>Shaun Dona</h3>
        </a>
      </div>
      <div class="dummy-column">
        <h2>Teaching Groups</h2>
        <a class="dummy-media-object" href="http://tympanus.net/codrops/2014/10/07/tooltip-styles-inspiration/">
          <img src="https://previews.123rf.com/images/nejron/nejron1603/nejron160300156/53766949-Multinational-group-of-cheerful-students-taking-an-active-part-in-a-lesson-while-sitting-in-a-lectur-Stock-Photo.jpg" alt="TooltipStylesInspiration"/>
          <h3>Irish 2</h3>
        </a>
        <a class="dummy-media-object" href="http://tympanus.net/codrops/2014/09/23/animated-background-headers/">
          <img src="https://previews.123rf.com/images/nejron/nejron1603/nejron160300156/53766949-Multinational-group-of-cheerful-students-taking-an-active-part-in-a-lesson-while-sitting-in-a-lectur-Stock-Photo.jpg" alt="AnimatedHeaderBackgrounds"/>
          <h3>Spanish 1</h3>
        </a>
        <a class="dummy-media-object" href="http://tympanus.net/codrops/2014/09/16/off-canvas-menu-effects/">
          <img src="https://previews.123rf.com/images/nejron/nejron1603/nejron160300156/53766949-Multinational-group-of-cheerful-students-taking-an-active-part-in-a-lesson-while-sitting-in-a-lectur-Stock-Photo.jpg" alt="OffCanvas"/>
          <h3>Maths 2(Higher Level)</h3>
        </a>
        <a class="dummy-media-object" href="http://tympanus.net/codrops/2014/09/02/tab-styles-inspiration/">
          <img src="https://previews.123rf.com/images/nejron/nejron1603/nejron160300156/53766949-Multinational-group-of-cheerful-students-taking-an-active-part-in-a-lesson-while-sitting-in-a-lectur-Stock-Photo.jpg" alt="TabStyles"/>
          <h3>Geogrpahy 2(Higher Level)</h3>
        </a>
        <a class="dummy-media-object" href="http://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/">
          <img src="https://previews.123rf.com/images/nejron/nejron1603/nejron160300156/53766949-Multinational-group-of-cheerful-students-taking-an-active-part-in-a-lesson-while-sitting-in-a-lectur-Stock-Photo.jpg" alt="ResponsiveSVGs"/>
          <h3>French(Ordinary Level)</h3>
        </a>
        <a class="dummy-media-object" href="http://tympanus.net/codrops/2014/07/23/notification-styles-inspiration/">
          <img src="https://previews.123rf.com/images/nejron/nejron1603/nejron160300156/53766949-Multinational-group-of-cheerful-students-taking-an-active-part-in-a-lesson-while-sitting-in-a-lectur-Stock-Photo.jpg" alt="NotificationStyles"/>
          <h3>English 1</h3>
        </a>
      </div>
    </div>
    <!-- /morphsearch-content -->
    <span class="morphsearch-close" @click="uiTriggerSearch"></span>
  </div>
  <!-- /morphsearch -->
  <!-- /Search -->
</div>
</template>

<script>
import jQuery from 'jquery';
import material from 'bootstrap-material-design';
import Chart from 'chartjs';
import classie from 'classie';

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
    uiTriggerSearch(event) {
      const morphSearch = document.getElementById('morphsearch');
      const input = morphSearch.querySelector('input.morphsearch-input');

      if (event.type.toLowerCase() === 'focus' && this.isOpen) {
        return false;
      }

      if (this.isOpen) {
        classie.remove(morphSearch, 'open');
        if (input.value !== '') {
          setTimeout(() => {
            classie.add(morphSearch, 'hideInput');
            setTimeout(() => {
              classie.remove(morphSearch, 'hideInput');
              input.value = '';
            }, 300);
          }, 500);
        }
        input.blur();
      } else {
        classie.add(morphSearch, 'open');
      }

      this.isOpen = !this.isOpen;
      return this.isOpen;
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
