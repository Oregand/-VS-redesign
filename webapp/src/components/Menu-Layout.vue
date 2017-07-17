<template>
<div class="sidebar"  data-image="../static/img/sidebar-1.jpg">
  <div class="sidebar-background" :class="{ level1 : (level == 1),level2:(level==2),level3:(level==3)}">
    <div class="background-level level1" :style="styleFirstLevel"></div>
    <div class="background-back level1" ></div>
    <div class="background-level level2" :style="styleFirstLevel"></div>
    <div class="background-back level2" ></div>
    <div class="background-level level3" :style="styleFirstLevel"></div>
  </div>
  <div class="logo">
    <a href="javascript:;" class="simple-text">VSWare</a>

  </div>

  <div class="sidebar-wrapper">

    <a class="sidebar-arrow sidebar-arrow-up" @click="uiTriggerScrollMenuUp($event)">
      <i class="material-icons">arrow_drop_up</i>
    </a>
    <ul class="nav">

        <li v-for="menuel in activeMenu" :key="menuel.name">
          <!-- <transition-group name="slide" tag="li"> -->
          <hr v-if="menuel.name=='-'"/>
          <router-link v-else-if="menuel.routerLink" :to="menuel.routerLink">
            <p>{{menuel.name}}</p>
          </router-link>
          <a v-else-if="!menuel.routerLink" @click="uiTriggerExpandMenu(menuel)">
            <p>{{menuel.name}}</p>
          </a>
          <!-- </transition-group> -->
        </li>


    </ul>
    <a class="sidebar-arrow sidebar-arrow-down" @click="uiTriggerScrollMenuDown($event)">

      <i class="material-icons">arrow_drop_down</i>
    </a>
  </div>
  <a @click="uiTriggerBackMenu(index)" class="back_button"
    :class="{show : (breadcrumbs.length -1  == index)}"
    v-for="(bc,index) in breadcrumbs" :level="index" :style="{ width: heightMenu + 'px', left: ((20 * index) + 5) + 'px' }"
    >
      BACK
  </a>
  <div class="sidebar-breadcrumbs">
    <transition name="fadein">
      <a class="sidebar-breadcrumb sidebar-breadcrumb-root" >
          <span class="sidebar-breadcrumb-text" >Menu</span>
      </a>
      </transition>
      <transition-group name="fadein" tag="div">
      <a class="sidebar-breadcrumb sidebar-breadcrumb-path" :key="index" v-for="(breadcrumb,index) in breadcrumbs" >
          <span class="sidebar-breadcrumb-text">{{breadcrumb}}</span>
      </a>
    </transition-group>
  </div>

</div>
</template>
<script>
/*
TODO
NAVIGATION BACKWARDS breadcrumbs OK
ANIMATION MENU OK
ANIMATION BREADCRUMBS OK
CHANGE COLOUR NAV OK
UP DOWN ARROW Management OK
MENU STRUCT
FONT SIZE PX TO EM OK
megloi usare tt l area sex per il back, difficile da presentare in maniera chiara ma se
supponiamo un max di tre livelli del menu possiamo definire tre sfumature di blu
e con un gradiente far capire il collegamento tra i due livelli
*/
import jQuery from 'jquery';
// import material from 'bootstrap-material-design';

const $ = jQuery;
// window.material = material;

const menu = [
  {
    name: 'Dasboard',
    routerLink: '/Dashboard',
  },
  {
    name: '2 Level Deep',
    items: [{
      name: 'Leaf',
    },],
  },
  {
    name: '3 Level Deep',
    items: [{
      name: 'Second Level',
      items: [
        {
          name: 'Leaf',
        },
      ],
    },],
  },
  {
    name: 'Students',
    items: [{
      name: 'Add New Student',
    },
    {
      name: 'Student Selection',
    },
    {
      name: '-',
    },
    {
      name: 'Personal',
      items: [{
        name: 'Ciao',
      }]
    },
    {
      name: 'Household',
    }],
  },
  {
    name: 'Teacher',
    items: [{
      name: 'Add New Teacher',
    },
    {
      name: '-',
    },
    {
      name: 'Personal',
    },
    {
      name: 'Household',
    }],
  },
  {
    name: 'Diplomas',
  },
  {
    name: 'Code Registry',
  },
  {
    name: 'Notifications',
  },
  {
    name: 'Fee Management',
  },
  {
    name: 'Report',
  },
  {
    name: 'Timetable',
  },
  {
    name: 'Dasboard',
    routerLink: '/Dashboard',
  },

  {
    name: 'Classes',
  },
  {
    name: 'Students',
    items: [{
      name: 'Add New Student',
    },
    {
      name: 'Student Selection',
    },
    {
      name: '-',
    },
    {
      name: 'Personal',
    },
    {
      name: 'Household',
    }],
  },
  {
    name: 'Teacher',
    items: [{
      name: 'Add New Teacher',
    },
    {
      name: '-',
    },
    {
      name: 'Personal',
    },
    {
      name: 'Household',
    }],
  },
  {
    name: 'Diplomas',
  },
  {
    name: 'Code Registry',
  },
  {
    name: 'Notifications',
  },
  {
    name: 'Fee Management',
  },
  {
    name: 'Report',
  },
  {
    name: 'Timetable',
  },
];

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
  name: 'MenuLayout',
  data() {
    return {
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
      menu,
      activeMenu: $.parseJSON(JSON.stringify(menu)),
      breadcrumbs: [],
      shades: ['#2684b9', '#154866', '#071822'],
      styleBackButton: {},
      styleFirstLevel: {},
      styleFollowingLevels: {},
      backMenuWidth: 20,
      level: 1,
      heightMenu: 0,
    };
  },
  methods: {
    uiTriggerBackMenu(index) {
      if (this.level === 1) return;
      this.level = index + 1;
      console.log(this.level,this.breadcrumbs.length);
      // if(this.breadcrumbs.length > this.level){
      //   while(this.breadcrumbs.length >= this.level){
      //     this.breadcrumbs.pop();
      //     console.log(this.breadcrumbs);
      //   }
      // }
      if (this.level === 1){
        this.breadcrumbs = [];
        this.activeMenu = $.parseJSON(JSON.stringify(this.menu));
        return;
      }
      let tempMenu = $.parseJSON(JSON.stringify(this.menu));
      this.breadcrumbs.pop();
      $.each(this.breadcrumbs, (idx, bc) => {
        $.each(tempMenu, (index, entry) => {
          if (entry.name === bc) {
            tempMenu = entry.items;
          }
        });
      });
      this.activeMenu = tempMenu;
    },
    uiTriggerExpandMenu(menuel) {
      const self = this;
      let isDeep = false;
      // eslint-disable-next-line func-name
      $.each(self.activeMenu, (index, entry) => {
        if (entry.name === menuel.name) {
          if(entry.items){
            self.activeMenu = entry.items;
            isDeep = true;
          }
        }
      });
      if(isDeep){
        self.breadcrumbs.push(menuel.name);
        this.level = this.level + 1;
      }

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

    uiTriggerScrollMenuUp(event){
      event.preventDefault();
			var target = $(event.target).parents('.sidebar-wrapper').find('.nav');
			$(target).animate({
				scrollTop : '-=100px'
			})
    },

    uiTriggerScrollMenuDown(event){
      event.preventDefault();
			var target = $(event.target).parents('.sidebar-wrapper').find('.nav');
      console.log(target);
			$(target).animate({
				scrollTop : '+=100px'
			})
    },

    setInitalValues() {
      // $.material.init();
      this.sidebar = $('.sidebar');
      const breadcrumbs = this.sidebar.find('.sidebar-breadcrumbs');
      const height = this.sidebar.height() + 1;
      breadcrumbs.width(height);
      breadcrumbs.css('right', `-${height}px`);
      // $('[rel="tooltip"]').tooltip();
      $('.form-control').on('focus', () => {
        $(this).parent('.input-group').addClass('input-group-focus');
      }).on('blur', () => {
        $(this).parent('.input-group').removeClass('input-group-focus');
      });
      const menuWidth = this.sidebar.width();
      const menuWidthWithBackButton = menuWidth - this.backMenuWidth;
      this.styleFirstLevel = { width: `${menuWidth}px` };
      this.styleFollowingLevels = { width: `${menuWidthWithBackButton}px` };
      this.heightMenu = height;
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

  },
  mounted() {
    const self = this;
    self.setInitalValues();
    self.checkSidebarImage();
    self.setWindowReSIze();
    self.checkScrollForTransparentNavbar();
    $('body').addClass('menulayout');
    setTimeout(() => {
    }, 0);
  },
};
</script>


<style lang="scss" scoped>
@import "../styles/main.scss";

</style>
