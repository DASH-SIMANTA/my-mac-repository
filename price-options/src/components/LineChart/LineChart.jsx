import { LineChart as LChart,XAxis,YAxis, Line } from 'recharts';

const LineChart = () => {
const studentMarksData = [
  { id: 1, name: "Alice", math: 78, physics: 85, chemistry: 80 },
  { id: 2, name: "Bob", math: 85, physics: 79, chemistry: 88 },
  { id: 3, name: "Charlie", math: 92, physics: 91, chemistry: 94 },
  { id: 4, name: "David", math: 67, physics: 72, chemistry: 70 },
  { id: 5, name: "Ella", math: 74, physics: 77, chemistry: 73 },
  { id: 6, name: "Frank", math: 88, physics: 86, chemistry: 84 },
  { id: 7, name: "Grace", math: 95, physics: 89, chemistry: 92 },
  { id: 8, name: "Henry", math: 70, physics: 68, chemistry: 72 },
  { id: 9, name: "Isla", math: 82, physics: 84, chemistry: 81 },
  { id: 10, name: "Jack", math: 90, physics: 93, chemistry: 89 }
];




    return (
        <div>
            <LChart width={800} height={400} data={studentMarksData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line dataKey="math" stroke="red" ></Line>
                <Line dataKey="physics" stroke="blue" ></Line>
                <Line dataKey="chemistry" stroke="green"></Line>
            </LChart>
            
        </div>
    );
};

export default LineChart;