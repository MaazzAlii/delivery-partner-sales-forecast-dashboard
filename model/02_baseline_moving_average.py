"""
===============================================================================
SYNTHETIC DATA — generated for an educational internship project, not real Careem business data.
===============================================================================
Script: 02_baseline_moving_average.py
Purpose: Implement 3-month and 6-month Simple Moving Average (SMA) baseline model,
         backtest on the last 6 months, compute MAE & MAPE metrics, select the best
         window, and forecast 3 months forward.
Author: SafeX Solutions Intern (Group 56)
===============================================================================
"""

import os
import numpy as np
import pandas as pd

def mean_absolute_percentage_error(y_true, y_pred):
    y_true, y_pred = np.array(y_true), np.array(y_pred)
    return np.mean(np.abs((y_true - y_pred) / y_true)) * 100

def mean_absolute_error(y_true, y_pred):
    y_true, y_pred = np.array(y_true), np.array(y_pred)
    return np.mean(np.abs(y_true - y_pred))

def run_moving_average():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    clean_data_path = os.path.join(base_dir, "data", "careem_partner_monthly_clean.csv")
    output_dir = os.path.join(base_dir, "model", "outputs")
    os.makedirs(output_dir, exist_ok=True)
    
    df = pd.read_csv(clean_data_path)
    n_historical = len(df)
    
    print("--- 1. BACKTESTING MOVING AVERAGE MODELS (LAST 6 MONTHS) ---")
    backtest_horizon = 6
    test_indices = list(range(n_historical - backtest_horizon, n_historical))
    
    actual_orders = df.loc[test_indices, "orders"].values
    actual_revenue = df.loc[test_indices, "revenue_pkr"].values
    
    # SMA-3 Backtest
    sma3_pred_orders = []
    sma3_pred_revenue = []
    for idx in test_indices:
        pred_o = df.loc[idx-3:idx-1, "orders"].mean()
        pred_r = df.loc[idx-3:idx-1, "revenue_pkr"].mean()
        sma3_pred_orders.append(pred_o)
        sma3_pred_revenue.append(pred_r)
        
    # SMA-6 Backtest
    sma6_pred_orders = []
    sma6_pred_revenue = []
    for idx in test_indices:
        pred_o = df.loc[idx-6:idx-1, "orders"].mean()
        pred_r = df.loc[idx-6:idx-1, "revenue_pkr"].mean()
        sma6_pred_orders.append(pred_o)
        sma6_pred_revenue.append(pred_r)
        
    # Metrics
    mae_sma3_orders = mean_absolute_error(actual_orders, sma3_pred_orders)
    mape_sma3_orders = mean_absolute_percentage_error(actual_orders, sma3_pred_orders)
    
    mae_sma6_orders = mean_absolute_error(actual_orders, sma6_pred_orders)
    mape_sma6_orders = mean_absolute_percentage_error(actual_orders, sma6_pred_orders)
    
    mae_sma3_rev = mean_absolute_error(actual_revenue, sma3_pred_revenue)
    mape_sma3_rev = mean_absolute_percentage_error(actual_revenue, sma3_pred_revenue)
    
    mae_sma6_rev = mean_absolute_error(actual_revenue, sma6_pred_revenue)
    mape_sma6_rev = mean_absolute_percentage_error(actual_revenue, sma6_pred_revenue)
    
    print(f"SMA-3 Orders -> MAE: {mae_sma3_orders:.2f}, MAPE: {mape_sma3_orders:.2f}%")
    print(f"SMA-6 Orders -> MAE: {mae_sma6_orders:.2f}, MAPE: {mape_sma6_orders:.2f}%")
    print(f"SMA-3 Revenue -> MAE: {mae_sma3_rev:.2f} PKR, MAPE: {mape_sma3_rev:.2f}%")
    print(f"SMA-6 Revenue -> MAE: {mae_sma6_rev:.2f} PKR, MAPE: {mape_sma6_rev:.2f}%")
    
    # Choose optimal window based on order MAPE
    best_window = 3 if mape_sma3_orders <= mape_sma6_orders else 6
    print(f"\nOptimal SMA Window Chosen: SMA-{best_window}")
    
    print("\n--- 2. GENERATING 3-MONTH FORWARD FORECAST ---")
    # Historical predictions for full series
    df["predicted_orders_sma3"] = df["orders"].rolling(window=3).mean().shift(1)
    df["predicted_revenue_sma3"] = df["revenue_pkr"].rolling(window=3).mean().shift(1)
    
    df["predicted_orders_sma6"] = df["orders"].rolling(window=6).mean().shift(1)
    df["predicted_revenue_sma6"] = df["revenue_pkr"].rolling(window=6).mean().shift(1)
    
    # Selected model predictions
    df["predicted_orders"] = df[f"predicted_orders_sma{best_window}"]
    df["predicted_revenue"] = df[f"predicted_revenue_sma{best_window}"]
    
    # Forward forecast 3 months
    last_date = pd.to_datetime(df["month"].iloc[-1] + "-01")
    future_dates = pd.date_range(start=last_date + pd.DateOffset(months=1), periods=3, freq="MS").strftime("%Y-%m").tolist()
    
    history_orders = df["orders"].tolist()
    history_revenue = df["revenue_pkr"].tolist()
    
    future_rows = []
    for f_month in future_dates:
        pred_o = np.mean(history_orders[-best_window:])
        pred_r = np.mean(history_revenue[-best_window:])
        
        future_rows.append({
            "month": f_month,
            "actual_orders": np.nan,
            "predicted_orders": round(pred_o, 2),
            "actual_revenue": np.nan,
            "predicted_revenue": round(pred_r, 2)
        })
        
        # Append predictions to series for multi-step rolling forecast
        history_orders.append(pred_o)
        history_revenue.append(pred_r)
        
    hist_export = df[["month", "orders", "predicted_orders", "revenue_pkr", "predicted_revenue"]].copy()
    hist_export.columns = ["month", "actual_orders", "predicted_orders", "actual_revenue", "predicted_revenue"]
    
    fut_export = pd.DataFrame(future_rows)
    final_export = pd.concat([hist_export, fut_export], ignore_index=True)
    
    # Save output
    output_path = os.path.join(output_dir, "moving_average_forecast.csv")
    final_export.to_csv(output_path, index=False)
    
    print(f"\nSaved forecast results to: {output_path}")
    print("\nForward 3-Month Forecast:")
    print(final_export.tail(3).to_string(index=False))

if __name__ == "__main__":
    run_moving_average()
