import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import React, { useCallback, useEffect, useState } from "react";

import { Icon, IconButton, NativeBaseProvider } from "native-base";
import "maplibre-gl/dist/maplibre-gl.css";
import { RouteEmbed } from "./RouteEmbed";

export const Route = ({
  styles,
  attributes,
  id
}: {
  styles: any;
  attributes: any;
  id: string;
}) => {
  const [showModal, setShowModal] = useState(false);

  const [points, setPoints] = useState();

  const toggleFullscreen = useCallback(
    (full: boolean) => {
      const nShowModal = !showModal;
      window.parent.postMessage(
        JSON.stringify({
          eventType: "set_fullscreen",
          value: nShowModal ? 1 : 0
        }),
        "*"
      );
      setShowModal(nShowModal);
    },
    [showModal]
  );

  useEffect(() => {
    const searchQuery = attributes.pois
      .map((p: any, idx: number) => `filters[id][$in][${idx}]=${p}`)
      .join("&");

    fetch("https://strapi.mapstory.app/api/points?" + searchQuery)
      .then((response) => response.json())
      .then((data) => {
        setPoints(data.data);
      });
  }, []);

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text onPress={() => alert("h")}>{attributes.name}</Text>

        {!showModal && (
          <RouteEmbed
            attributes={attributes}
            styles={styles}
            id={id}
            setFullscreen={toggleFullscreen}
          ></RouteEmbed>
        )}
      </View>
    </NativeBaseProvider>
  );
};
