from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from .. import models, schemas
from ..database import get_db
from ..services.quote_service import calculate_premium

router = APIRouter()


@router.post("/", response_model=schemas.QuoteResponse)
def create_quote(payload: schemas.QuoteCreate, db: Session = Depends(get_db)):
    customer = db.query(models.Customer).filter(models.Customer.email == payload.email).first()
    if customer is None:
        customer = models.Customer(name=payload.name, email=payload.email)
        db.add(customer)
        db.commit()
        db.refresh(customer)

    premium = calculate_premium(payload.coverage_amount)
    quote = models.Quote(
        customer_id=customer.id,
        coverage_amount=payload.coverage_amount,
        premium=premium,
        status="quoted",
    )
    db.add(quote)
    db.commit()
    db.refresh(quote)
    return quote
