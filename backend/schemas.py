from datetime import datetime

from pydantic import BaseModel, EmailStr


class QuoteCreate(BaseModel):
    name: str
    email: EmailStr
    coverage_amount: float


class QuoteResponse(BaseModel):
    id: int
    customer_id: int
    coverage_amount: float
    premium: float
    status: str
    created_at: datetime

    class Config:
        orm_mode = True


class ClaimCreate(BaseModel):
    customer_id: int
    policy_id: int
    description: str


class ClaimResponse(BaseModel):
    id: int
    policy_id: int
    customer_id: int
    status: str
    created_at: datetime

    class Config:
        orm_mode = True
