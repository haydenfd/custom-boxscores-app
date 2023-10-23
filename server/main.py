from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# from nba_api.live.nba.endpoints import scoreboard, boxscore
from nba_api.stats.endpoints import playercareerstats, scoreboard
from nba_api.stats.library.parameters import GameDate
from fastapi.encoders import jsonable_encoder
import pandas as pd
# from fastapi.responses import HTMLResponse, JSONResponse
# from nba_api.stats.endpoints import leaguegamefinder
from datetime import datetime

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
    date_format = "%Y-%m-%d"
    date_string = "2023-10-26"
    date_object = datetime.strptime(date_string, date_format)
    x = scoreboard.Scoreboard(league_id="00", day_offset=0, game_date=date_object).get_data_frames()[0]
    return(x.to_dict('records'))
    
	# date_from = '09-19-2022'
	# date_to = '10-19-2022'
	# date_object_1 = datetime.strptime(date_from, '%m-%d-%Y').date()
	# date_object_2 = datetime.strptime(date_to, '%m-%d-%Y').date()
	# gamefinder = leaguegamefinder.LeagueGameFinder(team_id_nullable='1610612738',date_from_nullable=date_object_1, date_to_nullable=date_object_2)
	# games = gamefinder.get_dict()
	# print(games)

# @app.get('/games/today')
# async def get_games():
#     board = scoreboard.ScoreBoard().get_data_frames()[0]
#     return jsonable_encoder(board)

