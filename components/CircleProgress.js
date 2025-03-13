import React from "react";
import { View, Text } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import { Svg, Defs, LinearGradient, Stop } from "react-native-svg";


const CircleProgress = () => {
  const data = {
    data: [0.8],
  };

  return (
    <View style={{ alignItems: "center", marginTop: 50 }}>
      <ProgressChart
        data={data}
        width={300}  // กำหนดขนาดกว้าง
        height={300} // กำหนดขนาดสูง
        strokeWidth={30} // ความหนาของเส้นวงกลม
        radius={120} // รัศมีของวงกลม
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          color: (opacity = 2) => `rgba(26, 255, 146, ${opacity})`,
          strokeWidth: 2, // ความหนาของเส้นขอบ
        }}
        hideLegend={true} // ซ่อนหรือแสดง legend
      />
    </View>
  );
};

export default CircleProgress;
