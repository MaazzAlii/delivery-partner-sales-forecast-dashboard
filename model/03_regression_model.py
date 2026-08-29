"""
===============================================================================
SYNTHETIC DATA — generated for an educational internship project, not real Careem business data.
===============================================================================
Script: 03_regression_model.py
Purpose: Build, backtest, and evaluate a Linear Regression forecasting model with
         trend, seasonality, weather, promo, and Ramadan features.
Author: SafeX Solutions Intern (Group 56)
===============================================================================
"""

import os
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression

def mean_absolute_percentage_error(y_true, y_pred):
    y_true, y_pred = np.array(y_true), np.array(y_pred)
    return np.mean(np.abs((y_true - y_pred) / y_true)) * 100

def mean_absolute_error(y_true, y_pred):
    y_true, y_pred = np.array(y_true), np.array(y_pred)
    return np.mean(np.abs(y_true - y_pred))

def run_regression_model():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    clean_data_path = os.path.join(base_dir, "data", "careem_partner_monthly_clean.csv")
    output_dir = os.path.join(base_dir, "model", "outputs")
    os.makedirs(output_dir, exist_ok=True)
    
    df = pd.read_csv(clean_data_path)
    df["date"] = pd.to_datetime(df["month"])
    df["time_idx"] = np.arange(len(df))
    df["month_num"] = df["date"].dt.month
    
    # Feature engineering: Cyclical month encoding for seasonality
    df["sin_month"] = np.sin(2 * np.pi * df["month_num"] / 12)
    df["cos_month"] = np.cos(2 * np.pi * df["month_num"] / 12)
    
    feature_cols = ["time_idx", "sin_month", "cos_month", "active_promo_days", "rainy_days", "is_ramadan_month"]
    
    # Chronological Train/Test Split (18 Train, 6 Test)
    # Note: A chronological train/test split (18 train / 6 test) is used instead of K-Fold cross-validation
    # because time-series data exhibits temporal dependency and sequential ordering. K-fold would cause
    # data leakage from future periods into past predictions and violate stationarity assumptions.
    
    train_size = 18
    train_df = df.iloc[:train_size].copy()
    test_df = df.iloc[train_size:].copy()
    
    X_train = train_df[feature_cols]
    y_train_orders = train_df["orders"]
    y_train_revenue = train_df["revenue_pkr"]
    
    X_test = test_df[feature_cols]
    y_test_orders = test_df["orders"]
    y_test_revenue = test_df["revenue_pkr"]
    
    print("--- 1. TRAINING REGRESSION MODELS ---")
    model_orders = LinearRegression()
    model_orders.fit(X_train, y_train_orders)
    
    model_revenue = LinearRegression()
    model_revenue.fit(X_train, y_train_revenue)
    
    # Coefficients analysis
    print("\nFeature Coefficients for Orders Model:")
    for col, coef in zip(feature_cols, model_orders.coef_):
        print(f"  - {col}: {coef:+.2f}")
    print(f"  - Intercept: {model_orders.intercept_:.2f}")
    
    # In-sample & Out-of-sample Predictions
    df["predicted_orders"] = model_orders.predict(df[feature_cols])
    df["predicted_revenue"] = model_revenue.predict(df[feature_cols])
    
    test_pred_orders = model_orders.predict(X_test)
    test_pred_revenue = model_revenue.predict(X_test)
    
    print("\n--- 2. BACKTEST METRICS (LAST 6 MONTHS TEST SET) ---")
    mae_orders = mean_absolute_error(y_test_orders, test_pred_orders)
    mape_orders = mean_absolute_percentage_error(y_test_orders, test_pred_orders)
    
    mae_rev = mean_absolute_error(y_test_revenue, test_pred_revenue)
    mape_rev = mean_absolute_percentage_error(y_test_revenue, test_pred_revenue)
    
    print(f"Regression Orders  -> MAE: {mae_orders:.2f}, MAPE: {mape_orders:.2f}%")
    print(f"Regression Revenue -> MAE: {mae_rev:.2f} PKR, MAPE: {mape_rev:.2f}%")
    
    print("\n--- 3. GENERATING 3-MONTH FORWARD FORECAST ---")
    # Assumed future features for Sept 2026, Oct 2026, Nov 2026:
    # - time_idx: 24, 25, 26
    # - month_num: 9, 10, 11 (Autumn)
    # - active_promo_days: 8 (standard promo allocation)
    # - rainy_days: 2, 1, 2 (post-monsoon historical average for RWP/ISB)
    # - is_ramadan_month: 0 (Ramadan occurs in spring)
    
    future_data = []
    future_months = ["2026-09", "2026-10", "2026-11"]
    future_params = [
        {"month_num": 9,  "promo": 8, "rain": 2, "ramadan": 0, "idx": 24},
        {"month_num": 10, "promo": 8, "rain": 1, "ramadan": 0, "idx": 25},
        {"month_num": 11, "promo": 8, "rain": 2, "ramadan": 0, "idx": 26},
    ]
    
    future_rows_list = []
    for fp, f_month in zip(future_params, future_months):
        sin_m = np.sin(2 * np.pi * fp["month_num"] / 12)
        cos_m = np.cos(2 * np.pi * fp["month_num"] / 12)
        feat_df = pd.DataFrame([{
            "time_idx": fp["idx"],
            "sin_month": sin_m,
            "cos_month": cos_m,
            "active_promo_days": fp["promo"],
            "rainy_days": fp["rain"],
            "is_ramadan_month": fp["ramadan"]
        }])
        
        p_orders = round(float(model_orders.predict(feat_df)[0]), 2)
        p_revenue = round(float(model_revenue.predict(feat_df)[0]), 2)
        
        future_rows_list.append({
            "month": f_month,
            "actual_orders": np.nan,
            "predicted_orders": p_orders,
            "actual_revenue": np.nan,
            "predicted_revenue": p_revenue
        })
        
    hist_export = df[["month", "orders", "predicted_orders", "revenue_pkr", "predicted_revenue"]].copy()
    hist_export.columns = ["month", "actual_orders", "predicted_orders", "actual_revenue", "predicted_revenue"]
    hist_export["predicted_orders"] = hist_export["predicted_orders"].round(2)
    hist_export["predicted_revenue"] = hist_export["predicted_revenue"].round(2)
    
    fut_export = pd.DataFrame(future_rows_list)
    final_export = pd.concat([hist_export, fut_export], ignore_index=True)
    
    output_path = os.path.join(output_dir, "regression_forecast.csv")
    final_export.to_csv(output_path, index=False)
    
    print(f"\nSaved regression forecast results to: {output_path}")
    print("\nForward 3-Month Regression Forecast:")
    print(final_export.tail(3).to_string(index=False))

if __name__ == "__main__":
    run_regression_model()
