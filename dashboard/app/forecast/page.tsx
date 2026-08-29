export default function ForecastPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-5">
        <h2 className="text-2xl font-bold text-slate-100">Actual vs Predicted Sales Forecast</h2>
        <p className="text-sm text-slate-400 mt-1">
          Interactive trajectory chart comparing historical actuals against model predictions and 3-month forward projections.
        </p>
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center text-slate-400">
        <p className="text-lg font-medium text-slate-200">Forecast Chart Screen Scaffolded</p>
        <p className="text-sm mt-2">Interactive Recharts visualization will be implemented in Prompt 10.</p>
      </div>
    </div>
  );
}
