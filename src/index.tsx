//import { registerRootComponent } from "expo";
import { AppRegistry } from "react-native";

import { Route } from "./Route";
import { StyleSheet, Text, View } from "react-native";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
//registerRootComponent(inIframe ? App : AppAdmin);
//registerRootComponent(AppAdmin);

//AppRegistry.registerComponent("App", () => App);

AppRegistry.registerComponent("Route", () => Route);

const injectRouteView = ({ target, data }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //   backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    }
  });

  AppRegistry.runApplication("Route", {
    rootTag: target,
    name: "mades",
    initialProps: {
      id: data.data.id,
      attributes: data.data.attributes,
      styles
    }
  });
  /*
  c.innerHTML = `<iframe id="${id}" allow="geolocation" style="width:100%; height: 100%; top: 0; bottom: 0; left: 0; right: 0;"
  src="${c.getAttribute("data-mapstory-id")} " />`;
  */

  window.addEventListener("message", function (e) {
    // Get the sent data
    try {
      const data = JSON.parse(e.data);
      const s = target.style;
      const body = this.document.querySelector("body");
      if (data.eventType === "set_fullscreen") {
        if (data.value === 1) {
          s.position = "fixed";
          s.zIndex = 100;
          s.originalHeight = s.height;
          s.height = "100vh";
          s.top = 0;
          s.bottom = 0;
          s.right = 0;
          s.left = 0;
          s.backgroundColor = "white";
          body.style.originalOverflow = body.style.overflow;
          body.style.overflow = "hidden";
        } else {
          s.position = "static";
          s.height = s.originalHeight;
          body.style.overflow = body.style.originalOverflow;
        }
      }
    } catch (error) {}
  });
};

const cols = document.querySelectorAll("[data-mapstory-route-id]");
for (const c of cols) {
  const id = Math.floor(Math.random() * 100);
  const routeId = c.dataset["mapstoryRouteId"];
  fetch("https://strapi.mapstory.app/api/line-strings/" + routeId)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      injectRouteView({ target: c, data });
    });
}
