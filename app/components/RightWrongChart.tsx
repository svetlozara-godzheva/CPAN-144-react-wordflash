"use client"
import Chart from "chart.js/auto";
import { ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useState } from "react";

Chart.register(ArcElement);

export default function RightWrongChart() {

    let rightAnswers = 6;
    let wrongAnswers = 4;

    const [chartData, setChartData] = useState({
        labels: ["Right Answers", "Wrong Answers"],
        datasets: [
            {
                data: [rightAnswers, wrongAnswers],
                backgroundColor: ["#104a7d", "#f6d76b"],
            }
        ]
    });

    return (
        <div className="col-lg-4 text-center mb-5 ">
            <h5 className="mb-4">Right/Wrong Pie Chart</h5>
            <div className="px-5 pie-chart">
                <Pie
                    data={chartData}
                    options={{
                        plugins: {
                            legend: {
                                position: "bottom",
                                labels: {
                                    color: "#12223c"
                                }
                            }
                        }
                    }}
                />
            </div>
        </div>
    );
}