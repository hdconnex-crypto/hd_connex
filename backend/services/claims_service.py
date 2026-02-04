def process_claim(description: str) -> str:
    keywords = ("accident", "fire", "theft", "injury")
    normalized = description.lower()
    if any(keyword in normalized for keyword in keywords):
        return "under review"
    return "submitted"
