import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

// Demo participant data
const participantData = [
  { campName: "Wellness Checkup Camp", campFees: 20, status: "attended" },
  { campName: "Heart Health Camp", campFees: 20, status: "attended" },
  { campName: "Blood Donation Camp", campFees: 5, status: "cancelled" },
];

// Colors from your palette
const COLORS = {
  primary: "var(--color-primary)", // #fd8087
  secondary: "var(--color-secondary)", // #007d8a
  error: "var(--color-error)", // #ef4444
};

const Analytics = () => {
  // Key metrics
  const totalCamps = participantData.length;
  const totalFees = participantData
    .filter((camp) => camp.status !== "cancelled")
    .reduce((sum, camp) => sum + camp.campFees, 0);
  const cancelledCamps = participantData.filter(
    (camp) => camp.status === "cancelled"
  ).length;

  // Pie chart data
  const statusData = [
    {
      name: "Attended",
      value: totalCamps - cancelledCamps,
      color: COLORS.secondary,
    },
    { name: "Cancelled", value: cancelledCamps, color: COLORS.error },
  ];

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[var(--color-secondary)] mb-12">
        Participant Analytics
      </h2>

      {/* Metrics Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="bg-[var(--color-accent)] rounded-2xl p-6 text-center shadow-md">
          <h3 className="text-xl font-semibold text-[var(--color-secondary)]">
            Total Camps
          </h3>
          <p className="text-2xl font-bold text-[var(--color-primary)]">
            {totalCamps}
          </p>
        </div>
        <div className="bg-[var(--color-accent)] rounded-2xl p-6 text-center shadow-md">
          <h3 className="text-xl font-semibold text-[var(--color-secondary)]">
            Total Fees Paid
          </h3>
          <p className="text-2xl font-bold text-[var(--color-primary)]">
            ${totalFees}
          </p>
        </div>
        <div className="bg-[var(--color-accent)] rounded-2xl p-6 text-center shadow-md">
          <h3 className="text-xl font-semibold text-[var(--color-secondary)]">
            Cancelled Camps
          </h3>
          <p className="text-2xl font-bold text-[var(--color-error)]">
            {cancelledCamps}
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Bar Chart */}
        <div className="bg-[var(--color-accent)] p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold text-[var(--color-secondary)] mb-4 text-center">
            Fees per Camp
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={participantData}>
              <XAxis
                dataKey="campName"
                tick={{ fill: "var(--color-neutral)" }}
              />
              <YAxis tick={{ fill: "var(--color-neutral)" }} />
              <Tooltip />
              <Bar
                dataKey="campFees"
                fill={COLORS.primary}
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-[var(--color-accent)] p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold text-[var(--color-secondary)] mb-4 text-center">
            Camp Status Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
