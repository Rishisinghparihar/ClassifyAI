import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PremiumChart = () => {
  const data = [
    { month: 'Jan', users: 5 },
    { month: 'Feb', users: 10 },
    { month: 'Mar', users: 15 },
    { month: 'Apr', users: 20 },
    { month: 'May', users: 25 },
    { month: 'Jun', users: 34 },
  ];

  return (
    <div className="px-6">
      <h2 className="text-xl text-orange-200 mb-2">Premium Adoption Over Time</h2>
      <div className="bg-orange-50/5 rounded-xl p-4 border border-orange-400">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#fb923c" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PremiumChart;
