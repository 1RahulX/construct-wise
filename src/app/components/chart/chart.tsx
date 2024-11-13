"use client"
// components/OrderGraph.js
import { useEffect, useRef } from 'react';

export default function OrderGraph({ monthlyData }: any) {
  const canvasRef = useRef<any>();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear the canvas for each render
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Graph settings
    const barWidth = 40;
    const gap = 20;
    const maxHeight = 200; // Maximum height of bars
    const barRadius = 10; // Radius for rounded corners

    // Set the canvas dimensions
    canvas.width = monthlyData.length * (barWidth + gap);
    canvas.height = maxHeight + 70;

    // Find the max value for scaling
    const maxOrders = Math.max(...monthlyData);

    // Draw bars with rounded corners
    monthlyData.forEach((orders: any, index: any) => {
      const barHeight = (orders / maxOrders) * maxHeight;
      const x = index * (barWidth + gap);
      const y = maxHeight - barHeight + 30;

      // Draw the rounded bar
      ctx.fillStyle = 'bg-primary-500';
      ctx.beginPath();
      ctx.moveTo(x, y + barRadius);
      ctx.lineTo(x, y + barHeight - barRadius);
      ctx.quadraticCurveTo(x, y + barHeight, x + barRadius, y + barHeight);
      ctx.lineTo(x + barWidth - barRadius, y + barHeight);
      ctx.quadraticCurveTo(x + barWidth, y + barHeight, x + barWidth, y + barHeight - barRadius);
      ctx.lineTo(x + barWidth, y + barRadius);
      ctx.quadraticCurveTo(x + barWidth, y, x + barWidth - barRadius, y);
      ctx.lineTo(x + barRadius, y);
      ctx.quadraticCurveTo(x, y, x, y + barRadius);
      ctx.closePath();
      ctx.fill();

      // Draw the month labels
      ctx.fillStyle = '#000';
      ctx.font = '14px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(monthLabels[index], x + barWidth / 2, maxHeight + 50);

      // Draw the order count
      ctx.fillText(orders, x + barWidth / 2, y - 10);
    });
  }, [monthlyData]);

  return <canvas ref={canvasRef}></canvas>;
}

// Labels for each month
const monthLabels = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];
