from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from .. import models, schemas
from ..database import get_db
from ..services.claims_service import process_claim

router = APIRouter()


@router.post("/", response_model=schemas.ClaimResponse)
def create_claim(payload: schemas.ClaimCreate, db: Session = Depends(get_db)):
    customer = db.query(models.Customer).filter(models.Customer.id == payload.customer_id).first()
    if customer is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Customer not found")

    policy = db.query(models.Policy).filter(models.Policy.id == payload.policy_id).first()
    if policy is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Policy not found")

    status_value = process_claim(payload.description)
    claim = models.Claim(
        policy_id=payload.policy_id,
        customer_id=payload.customer_id,
        description=payload.description,
        status=status_value,
    )
    db.add(claim)
    db.commit()
    db.refresh(claim)
    return claim
