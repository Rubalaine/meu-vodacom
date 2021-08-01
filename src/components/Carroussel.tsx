import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import Slideshow, { Pagination } from "react-native-snap-carousel";
import ads from "../../utils/ads";
import CarrousselCard, { ITEM_WIDTH, SLIDER_WIDTH } from "./CarrousselCard";

const Carroussel = () => {
  const isCarroussel = React.useRef(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {}, []);
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Slideshow
        autoplay
        autoplayInterval={5000}
        autoplayDelay={2000}
        lockScrollWhileSnapping
        loop
        layout="default"
        layoutCardOffset={9}
        ref={isCarroussel}
        data={ads}
        renderItem={CarrousselCard}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        containerStyle={{
          padding: 0,
          marginTop: -25,
        }}
        dotsLength={ads.length}
        activeDotIndex={index}
        carouselRef={isCarroussel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "#EF1417",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

export default Carroussel;
