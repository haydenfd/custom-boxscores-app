from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# from nba_api.live.nba.endpoints import scoreboard, boxscore
from nba_api.stats.endpoints import playercareerstats, scoreboard, scoreboardv2
from nba_api.stats.library.parameters import GameDate
from fastapi.encoders import jsonable_encoder
import pandas as pd
# from fastapi.responses import HTMLResponse, JSONResponse
# from nba_api.stats.endpoints import leaguegamefinder
from datetime import datetime
from utilities.team_mapping import id_to_tricode_map

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

@app.get("/today")
async def get_today_games():

    date_format = "%Y-%m-%d"
    date_string = "2023-10-25"
    date_object = datetime.strptime(date_string, date_format)
    x = scoreboard.Scoreboard(league_id="00", day_offset=0, game_date=date_object).get_data_frames()[0].to_dict('records')

    result = []
    for item in x:
        data = dict()
        data['DATE'] = item['GAME_DATE_EST'][0:10]
        data['ID'] = item['GAME_ID']
        data['STATUS_ID'] = item['GAME_STATUS_ID']
        data['STATUS_TEXT'] = item['GAME_STATUS_TEXT']
        data['HOME_TEAM'] = id_to_tricode_map[item['HOME_TEAM_ID']]
        data['VISITOR_TEAM'] = id_to_tricode_map[item['VISITOR_TEAM_ID']]
        result.append(data)
        
    return(result)

    



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

