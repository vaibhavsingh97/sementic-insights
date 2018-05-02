"use strict!"
$(document).ready(function() {
    // variable
    var noofdays = 1;                       //  total no of days cookie will store
    var Navbarbg = "themelight1";           //  navbar color                themelight1 / theme1
    var headerbg = "theme1";                //  header color                theme1 / theme2 / theme3 / theme4 / theme5 / theme6
    var menucaption = "theme1";             //  menu caption color          theme1 / theme2 / theme3 / theme4 / theme5 / theme6 / theme7 / theme8 / theme9
    var bgpattern = "theme1";               //  background color            theme1 / theme2 / theme3 / theme4 / theme5 / theme6
    var activeitemtheme = "theme1";         //  menu active color           theme1 / theme2 / theme3 / theme4 / theme5 / theme6 / theme7 / theme8 / theme9 / theme10 / theme11 / theme12
    var frametype = "theme1";               //  preset frame color          theme1 / theme2 / theme3 / theme4 / theme5 / theme6
    var layout_type = "light";              //  theme layout color          dark / light
    var layout_width = "wide";              //  theme layout size           wide / box
    var menu_effect_desktop = "shrink";     //  navbar effect in desktop    shrink / overlay / push
    var menu_effect_tablet = "overlay";     //  navbar effect in tablet     shrink / overlay / push
    var menu_effect_phone = "overlay";      //  navbar effect in phone      shrink / overlay / push
    var menu_icon_style = "st2";            //  navbar menu icon            st1 / st2
    $("#pcoded").pcodedmenu({
        themelayout: 'vertical',
        verticalMenuplacement: 'left', // value should be left/right
        verticalMenulayout: layout_width,
        MenuTrigger: 'click', // click / hover
        SubMenuTrigger: 'click', // click / hover
        activeMenuClass: 'active',
        ThemeBackgroundPattern: bgpattern,
        HeaderBackground: headerbg,
        LHeaderBackground: menucaption,
        NavbarBackground: Navbarbg,
        ActiveItemBackground: activeitemtheme,
        SubItemBackground: 'theme2',
        ActiveItemStyle: 'style0',
        ItemBorder: true,
        ItemBorderStyle: 'solid',
        freamtype: frametype,
        SubItemBorder: true,
        DropDownIconStyle: 'style1', // Value should be style1,style2,style3
        menutype: menu_icon_style,
        layouttype: layout_type,
        FixedNavbarPosition: false, // Value should be true / false  header postion
        FixedHeaderPosition: false, // Value should be true / false  sidebar menu postion
        collapseVerticalLeftHeader: true,
        VerticalSubMenuItemIconStyle: 'style1', // value should be style1, style2, style3, style4, style5, style6
        VerticalNavigationView: 'view1',
        verticalMenueffect: {
            desktop: menu_effect_desktop,
            tablet: menu_effect_tablet,
            phone: menu_effect_phone,
        },
        defaultVerticalMenu: {
            desktop: "expanded", // value should be offcanvas/collapsed/expanded/compact/compact-acc/fullpage/ex-popover/sub-expanded
            tablet: "offcanvas", // value should be offcanvas/collapsed/expanded/compact/fullpage/ex-popover/sub-expanded
            phone: "offcanvas", // value should be offcanvas/collapsed/expanded/compact/fullpage/ex-popover/sub-expanded
        },
        onToggleVerticalMenu: {
            desktop: "collapsed", // value should be offcanvas/collapsed/expanded/compact/fullpage/ex-popover/sub-expanded
            tablet: "expanded", // value should be offcanvas/collapsed/expanded/compact/fullpage/ex-popover/sub-expanded
            phone: "expanded", // value should be offcanvas/collapsed/expanded/compact/fullpage/ex-popover/sub-expanded
        },

    });
});
/*  collapseable Left Header Change Function Close here*/
function handlemenutype(get_value) {
    $('.pcoded').attr('nav-type', get_value);
};

handlemenutype("st2");
