import uvicorn
from fastapi import FastAPI

from users.users_router import router as users_router

app = FastAPI()

app.include_router(users_router)

if __name__ == "__main__":
    uvicorn.run(
        app,
        host="localhost",
        port=4000,
        access_log=True,
    )
