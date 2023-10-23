from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from nba_api.live.nba.endpoints import scoreboard, boxscore
from fastapi.encoders import jsonable_encoder

origins = [
    "*"
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {
        "Testing" : "123"
    }

@app.get('/games/today')
async def get_games():
    board = scoreboard.ScoreBoard().get_dict()
    return jsonable_encoder(board)

