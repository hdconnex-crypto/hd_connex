from fastapi import FastAPI

from .database import Base, engine
from .routers import claims, quotes

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Insurance Platform API",
    description="API for managing insurance quotes and claims.",
)

app.include_router(quotes.router, prefix="/quotes", tags=["Quotes"])
app.include_router(claims.router, prefix="/claims", tags=["Claims"])


@app.get("/")
def read_root():
    return {"message": "Insurance platform API is running."}
