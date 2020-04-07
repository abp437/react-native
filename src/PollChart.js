import React, { useEffect, useState } from "react";
import { PieChart } from "react-native-chart-kit";
import { Text, Dimensions } from "react-native";
import Canvas from "react-native-canvas";

const screenWidth = Math.round(Dimensions.get("window").width);

const data = [
  {
    name: "Seoul",
    population: 21500000,
    color: "#CCCCCC",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12,
  },
  {
    name: "Toronto",
    population: 2800000,
    color: "#999999",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12,
  },
  {
    name: "Beijing",
    population: 527612,
    color: "#666666",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12,
  },
  {
    name: "New York",
    population: 8538000,
    color: "#333335",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12,
  },
  {
    name: "Moscow",
    population: 11920000,
    color: "#000000",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12,
  },
];

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
};

const canvasData = [
  {
    optionText: "Ja",
    voteCount: 122,
  },
  {
    optionText: "Nein",
    voteCount: 23,
  },
  {
    optionText: "Heil",
    voteCount: 672,
  },
];


const PollChart = () => {
  const chartElement = React.createRef();
  const generateColor = () =>
    `#${Math.random()
      .toString(16)
      .slice(2, 8)}`;

  useEffect(() => {
    const canvasElement = chartElement.current;
    const canvasContext = canvasElement.getContext("2d");

    canvasElement.width = screenWidth;
    canvasElement.height = screenWidth;

    const totalVotes = canvasData.reduce((total, pollOption) => {
      const { voteCount } = pollOption;
      return total + voteCount;
    }, 0);

    let startAngle = 0;
    const radius = 100;
    const centerXAxis = canvasElement.width / 2;
    const centerYAxis = canvasElement.height / 2;

    // The arcs of the circle are calculated in Radians
    canvasData.forEach((pollOption) => {

      const { voteCount } = pollOption;
      // Set the style before beginPath()
      canvasContext.fillStyle = generateColor();
      canvasContext.lineWidth = 1;
      canvasContext.strokeStyle = "#64c486";

      // BeginPath is actually the place where you can start drawing the Chart Arc
      canvasContext.beginPath();

      // Draw the Pie Wedges
      let endAngle = (voteCount / totalVotes) * (Math.PI * 2) + startAngle;

      canvasContext.moveTo(centerXAxis, centerYAxis);
      canvasContext.arc(
        centerXAxis,
        centerYAxis,
        radius,
        startAngle,
        endAngle,
        false
      );
      canvasContext.lineTo(centerXAxis, centerYAxis);
      canvasContext.fill();
      canvasContext.stroke();
      canvasContext.closePath();

      startAngle = endAngle;
    });

  }, []);
  return (
    <>
      {/* <PieChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        absolute={false}
      /> */}
      <Canvas ref={chartElement} />
    </>
  );
};

export default PollChart;
