import json
from fastapi import FastAPI, UploadFile, File, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from app import HouseModel
from app.HousePricePrediction import PredictionEngine


prediction = PredictionEngine()
prediction.initialize()


print(prediction.predict(HouseModel.Houses_data))





# # Define a simple data structure for inputs
# class Query(BaseModel):
#     texts: list[HouseModel.House] = []


# app = FastAPI(title="House price prediction API")

# # handle cors issue
# app.add_middleware(
#     CORSMiddleware,
#     allow_credentials=True,       
#     allow_origins=["*"],        
#     allow_methods=["*"],          
#     allow_headers=["*"],         
# )

# model = SentimentAnalysisModel()
# model.initialize()


# @app.get("/")
# def read_root():
#     return {"message": "Welcome to the Sentiment analysis API"}


# @app.post("/predict")
# def predict(data: Query):
#     """Endpoint to make prediction"""
#     predictions = model.predict(data.texts)

#     return {
#         "input_received": data.texts,
#         "predictions": predictions,
#         "model_version": "1.0.0"
#     }


# @app.post("/upload/predict/")
# async def upload_file(file: UploadFile = File(...)):
#     try:
#         content = await file.read()
#         data = json.loads(content)

#         # validate the format
#         if not isinstance(data, list) or not all(isinstance(item, str) for item in data):
#             raise HTTPException( status_code=400, detail="Invalid format: Expected a JSON array of strings")
        
#     except json.JSONDecodeError:
#         raise HTTPException(status_code=400, detail="Invalid JSON format")
#     finally:
#         await file.close()
    
#     # perform predictions
#     predictions = model.predict(data)

#     return {
#         "input_received": data,
#         "predictions": predictions,
#         "model_version": "1.0.0"
#     }
