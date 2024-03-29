


layui.config({
  base: '../utils/layui/modules/'      //自定义layui组件的目录
}).extend({ //设定组件别名
  common:   'common',
}).use(["layer", "form", "element", "jquery",'common'], function() {
  console.log(layui.common)
  var layer = layui.layer;
  var element = layui.element;
  var form = layui.form;
  var $ = layui.jquery;
  var hideBtn = $("#hideBtn");
  var mainLayout = $("#main-layout");
  //监听导航点击
  element.on("nav(leftNav)", function(elem) {
    var navA = $(elem).find("a").prevObject.eq(0);
    var id = navA.attr("data-id");
    var url = navA.attr("data-url");
    var text = navA.attr("data-text");
    if (!url) {
      return;
    }
    var isActive = $(".main-layout-tab .layui-tab-title").find(
      "li[lay-id=" + id + "]"
    );
    if (isActive.length > 0) {
      //切换到选项卡
      element.tabChange("tab", id);
    } else {
      element.tabAdd("tab", {
        title: text,
        content:
          '<iframe src="' +
          url +
          '" name="iframe' +
          id +
          '" class="iframe" framborder="0" data-id="' +
          id +
          '" scrolling="auto" width="100%"  height="100%"></iframe>',
        id: id
      });
      element.tabChange("tab", id);
    }
    mainLayout.removeClass("hide-side");
  });
  //监听导航点击
  element.on("nav(rightNav)", function(elem) {
      console.log(elem)
    var navA = $(elem).find("a");
    var id = navA.attr("data-id");
    var url = navA.attr("data-url");
    var text = navA.attr("data-text");
    console.log(url)
    if (!url) {
      return;
    }
    var isActive = $(".main-layout-tab .layui-tab-title").find(
      "li[lay-id=" + id + "]"
    );
    if (isActive.length > 0) {
      //切换到选项卡
      element.tabChange("tab", id);
    } else {
      element.tabAdd("tab", {
        title: text,
        content:
          '<iframe src="' +
          url +
          '" name="iframe' +
          id +
          '" class="iframe" framborder="0" data-id="' +
          id +
          '" scrolling="auto" width="100%"  height="100%"></iframe>',
        id: id
      });
      element.tabChange("tab", id);
    }
    mainLayout.removeClass("hide-side");
  });
  //菜单隐藏显示
  hideBtn.on("click", function() {
    console.log(123123);
    if (!mainLayout.hasClass("hide-side")) {
      mainLayout.addClass("hide-side");
    } else {
      mainLayout.removeClass("hide-side");
    }
  });

});
