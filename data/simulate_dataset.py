"""
===============================================================================
SYNTHETIC DATA — generated for an educational internship project, not real Careem business data.
===============================================================================
Script: simulate_dataset.py
Purpose: Generate 24-month synthetic order and revenue dataset for a small Careem NOW
         restaurant partner (Rawalpindi/Islamabad region) from Sept 2024 to Aug 2026.
Author: SafeX Solutions Intern (Group 56)
===============================================================================
"""

import os
import numpy as np
import pandas as pd

def generate_synthetic_data(seed=42):
    np.random.seed(seed)
    
    # Generate 24 monthly periods: Sept 2024 to Aug 2026
    date_range = pd.date_range(start="2024-09-01", periods=24, freq="MS")
    months = date_range.strftime("%Y-%m").tolist()
    
    records = []
    
    base_orders = 1150
    monthly_trend = 22  # Business growth per month
    
    for idx, dt in enumerate(date_range):
        m_str = months[idx]
        month_num = dt.month
        year_num = dt.year
        
        # Seasonality factors
        # Winter surge (Nov, Dec, Jan, Feb)
        is_winter = 1 if month_num in [11, 12, 1, 2] else 0
        winter_effect = 0.14 if is_winter else 0.0
        
        # Summer dip (Jun, Jul, Aug)
        is_summer = 1 if month_num in [6, 7, 8] else 0
        summer_effect = -0.07 if is_summer else 0.0
        
        # Ramadan surge (March 2025 and March 2026)
        is_ramadan_month = 1 if (year_num == 2025 and month_num == 3) or (year_num == 2026 and month_num == 3) else 0
        ramadan_effect = 0.18 if is_ramadan_month else 0.0
        
        # Rainy days proxy for RWP/ISB (Monsoon in Jul-Aug, winter rains in Jan-Feb)
        if month_num in [7, 8]:
            rainy_days = int(np.random.randint(6, 12))
        elif month_num in [1, 2]:
            rainy_days = int(np.random.randint(3, 7))
        else:
            rainy_days = int(np.random.randint(0, 4))
            
        rain_effect = rainy_days * 0.015
        
        # Promo days (between 4 and 12 days a month)
        active_promo_days = int(np.random.randint(4, 13))
        promo_effect = active_promo_days * 0.012
        
        # Calculate raw order volume with trend + multiplicative seasonality + noise
        trend_orders = base_orders + (idx * monthly_trend)
        total_multiplier = 1.0 + winter_effect + summer_effect + ramadan_effect + rain_effect + promo_effect
        
        noise = np.random.normal(loc=0, scale=30)
        orders_calc = max(500, int(round(trend_orders * total_multiplier + noise)))
        
        # Average Order Value (AOV in PKR): ~880 PKR starting, mild inflation trend + noise
        base_aov = 880 + (idx * 6) + np.random.normal(loc=0, scale=18)
        avg_order_value_pkr = round(max(600, base_aov), 2)
        
        # Total Revenue PKR
        revenue_pkr = round(orders_calc * avg_order_value_pkr, 2)
        
        records.append({
            "month": m_str,
            "orders": orders_calc,
            "avg_order_value_pkr": avg_order_value_pkr,
            "revenue_pkr": revenue_pkr,
            "active_promo_days": active_promo_days,
            "rainy_days": rainy_days,
            "is_ramadan_month": is_ramadan_month
        })
        
    df = pd.DataFrame(records)
    return df

if __name__ == "__main__":
    df = generate_synthetic_data(seed=42)
    output_dir = os.path.dirname(os.path.abspath(__file__))
    output_path = os.path.join(output_dir, "careem_partner_monthly.csv")
    
    df.to_csv(output_path, index=False)
    print(f"Dataset generated successfully and saved to: {output_path}")
    print("\nDataset Info:")
    print(df.info())
    print("\nFirst 5 rows:")
    print(df.head())
    print("\nSummary Statistics:")
    print(df.describe())
