import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Line Data
const lineData = [
  { month: 'Jan', revenue: 1000 },
  { month: 'Feb', revenue: 1500 },
  { month: 'Mar', revenue: 2000 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 3000 },
  { month: 'Jun', revenue: 3500 },
  { month: 'Jul', revenue: 4000 },
  { month: 'Aug', revenue: 4500 },
  { month: 'Sep', revenue: 5000 },
  { month: 'Oct', revenue: 5500 },
  { month: 'Nov', revenue: 6000 },
  { month: 'Dec', revenue: 6500 },
];

// Bar Data
const revenueData = [
  { route: "Rehab", revenue: 5000 },
  { route: "Nasr City", revenue: 3000 },
  { route: "Giza", revenue: 4500 },
  { route: "Dokki", revenue: 2000 },
  { route: "Mohandessin", revenue: 3500 },
];

// Pie Data for Vehicle Status
const vehicleStatusData = [
  { name: 'Active', value: 18 },
  { name: 'Maintenance', value: 3 },
  { name: 'Idle', value: 4 },
];

const COLORS = ['#0e853a', '#ff8042', '#ffbb28'];

// Driver Performance Data
const driverPerformanceData = [
  { name: 'Ahmed', trips: 45 },
  { name: 'Mohamed', trips: 38 },
  { name: 'Hassan', trips: 42 },
  { name: 'Ali', trips: 35 },
  { name: 'Omar', trips: 40 },
];

export default function Charts() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        width: "100%",
      }}
    >
      {/* 2x2 Grid Container */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "400px 400px",
          gap: "20px",
          width: "100%",
        }}
      >
        {/* Chart 1: Line Chart - Monthly Revenue */}
        <div
          style={{
            width: "100%",
            height: "260px",
            border: "2px solid rgba(0,0,0,0.15)",
            borderRadius: "10px",
            padding: "18px 14px 14px 14px",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
          }}
        >
          <h3 style={{ fontSize: 14, margin: 0 }}>Monthly Revenue</h3>

          <div style={{ width: "100%", height: "100%" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" style={{ fontSize: 10 }} />
                <YAxis style={{ fontSize: 10 }} />

                <Tooltip
                  contentStyle={{ fontSize: "10px", padding: "5px" }}
                  itemStyle={{ fontSize: "10px" }}
                />

                <Line
                  type="monotoneX"
                  dataKey="revenue"
                  stroke="#0e853a"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Bar Chart - Route Revenue */}
        <div
          style={{
            width: "100%",
            height: "260px",
            border: "2px solid rgba(0,0,0,0.15)",
            borderRadius: "10px",
            padding: "18px 14px 14px 14px",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
          }}
        >
          <h3 style={{ fontSize: 14, margin: 0 }}>Route Revenue</h3>

          <div style={{ width: "100%", height: "100%" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis
                  dataKey="route"
                  style={{ fontSize: 10 }}
                  interval={0}
                  angle={0}
                  textAnchor="end"
                />

                <YAxis style={{ fontSize: 10 }} />

                <Tooltip
                  contentStyle={{ fontSize: "10px" }}
                  itemStyle={{ fontSize: "10px" }}
                />

                <Bar dataKey="revenue" fill="#82ca9d" barSize={22} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 3: Pie Chart - Vehicle Status */}
        <div
          style={{
            width: "100%",
            height: "260px",
            border: "2px solid rgba(0,0,0,0.15)",
            borderRadius: "10px",
            padding: "18px 14px 14px 14px",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
          }}
        >
          <h3 style={{ fontSize: 14, margin: 0 }}>Vehicle Status</h3>

          <div style={{ width: "100%", height: "100%" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={vehicleStatusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {vehicleStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ fontSize: "10px" }}
                  itemStyle={{ fontSize: "10px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 4: Bar Chart - Driver Performance */}
        <div
          style={{
            width: "100%",
            height: "260px",
            border: "2px solid rgba(0,0,0,0.15)",
            borderRadius: "10px",
            padding: "18px 14px 14px 14px",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
          }}
        >
          <h3 style={{ fontSize: 14, margin: 0 }}>Driver Performance</h3>

          <div style={{ width: "100%", height: "100%" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={driverPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis
                  dataKey="name"
                  style={{ fontSize: 10 }}
                  interval={0}
                />

                <YAxis style={{ fontSize: 10 }} />

                <Tooltip
                  contentStyle={{ fontSize: "10px" }}
                  itemStyle={{ fontSize: "10px" }}
                />

                <Bar dataKey="trips" fill="#0e853a" barSize={22} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
