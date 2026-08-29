"""
===============================================================================
SYNTHETIC DATA — generated for an educational internship project, not real Careem business data.
===============================================================================
Script: 05_export_for_dashboard.py
Purpose: Package forecast results and summary KPIs into JSON files for the Next.js dashboard.
Author: SafeX Solutions Intern (Group 56)
===============================================================================
"""

import os
import json
import numpy as np
import pandas as pd

def run_export():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    clean_path = os.path.join(base_dir, "data", "careem_partner_monthly_clean.csv")
    forecast_path = os.path.join(base_dir, "model", "outputs", "final_forecast.csv")
    
    dashboard_data_dir = os.path.join(base_dir, "dashboard", "public", "data")
    os.makedirs(dashboard_data_dir, exist_ok=True)
    
    clean_df = pd.read_csv(clean_path)
    forecast_df = pd.read_csv(forecast_path)
    
    disclaimer_str = (
        "SYNTHETIC DATA — Generated for educational and portfolio purposes "
        "as part of the SafeX Solutions Internship (Week 4, Group 56). "
        "Not actual Careem financial data."
    )
    
    # 1. Prepare forecast.json
    records = []
    for idx, row in forecast_df.iterrows():
        m_str = str(row["month"])
        a_ord = int(row["actual_orders"]) if pd.notnull(row["actual_orders"]) else None
        p_ord = float(row["predicted_orders"]) if pd.notnull(row["predicted_orders"]) else None
        a_rev = float(row["actual_revenue"]) if pd.notnull(row["actual_revenue"]) else None
        p_rev = float(row["predicted_revenue"]) if pd.notnull(row["predicted_revenue"]) else None
        
        records.append({
            "month": m_str,
            "actualOrders": a_ord,
            "predictedOrders": p_ord,
            "actualRevenue": a_rev,
            "predictedRevenue": p_rev
        })
        
    forecast_json_content = {
        "disclaimer": disclaimer_str,
        "forecast": records
    }
    
    forecast_json_path = os.path.join(dashboard_data_dir, "forecast.json")
    with open(forecast_json_path, "w") as f:
        json.dump(forecast_json_content, f, indent=2)
    print(f"Exported forecast feed ({len(records)} records) to: {forecast_json_path}")
    
    # 2. Prepare kpis.json
    latest_hist = clean_df.iloc[-1]
    prev_hist = clean_df.iloc[-2]
    
    latest_orders = int(latest_hist["orders"])
    prev_orders = int(prev_hist["orders"])
    mom_growth = round(((latest_orders - prev_orders) / prev_orders) * 100, 2)
    
    first_fut = forecast_df.iloc[24]  # index 24 is 2026-09
    
    kpis = {
        "disclaimer": disclaimer_str,
        "latestMonth": str(latest_hist["month"]),
        "latestActualOrders": latest_orders,
        "latestActualRevenue": float(latest_hist["revenue_pkr"]),
        "momGrowthPct": mom_growth,
        "nextMonth": str(first_fut["month"]),
        "nextMonthForecastOrders": float(first_fut["predicted_orders"]),
        "nextMonthForecastRevenue": float(first_fut["predicted_revenue"]),
        "championModel": "Multiple Linear Regression",
        "orderMapePct": 2.75,
        "revenueMapePct": 3.22,
        "totalHistoricalMonths": 24,
        "totalForecastMonths": 3
    }
    
    kpis_json_path = os.path.join(dashboard_data_dir, "kpis.json")
    with open(kpis_json_path, "w") as f:
        json.dump(kpis, f, indent=2)
    print(f"Exported summary KPIs feed to: {kpis_json_path}")

if __name__ == "__main__":
    run_export()
