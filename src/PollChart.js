import React, { useState } from "react";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);

const data = [
  {
    name: "Seoul",
    population: 21500000,
    color: "#CCCCCC",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  },
  {
    name: "Toronto",
    population: 2800000,
    color: "#999999",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  },
  {
    name: "Beijing",
    population: 527612,
    color: "#666666",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  },
  {
    name: "New York",
    population: 8538000,
    color: "#333335",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  },
  {
    name: "Moscow",
    population: 11920000,
    color: "#000000",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  }
];

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5
};

const PollChart = () => {
  return (
    <>
      <PieChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        absolute={false}
      />
    </>
  );
};

export default PollChart;
