import * as React from 'react';
import {LineChart} from "react-native-chart-kit";
import { Dimensions } from 'react-native';


const chart=()=> {
    return (
        <LineChart
            data={{
                labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
                datasets: [
                    {
                        data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                        ]
                    }
                ]
            }}
            width={Dimensions.get("window").width - 50} // from react-native
            height={250}
            yAxisLabel={"Rp"}
            chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `white`,
                labelColor: (opacity = 1) => `white`,
                style: {
                    borderRadius: 16
                }
            }}
            bezier
            style={{
                marginVertical: 8,
                borderRadius: 16
            }}
        />
    )
} 

export default chart