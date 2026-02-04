def calculate_premium(coverage_amount: float) -> float:
    base_rate = 0.05
    premium = coverage_amount * base_rate
    return premium if premium >= 50.0 else 50.0
