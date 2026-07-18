from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from app import HouseModel
from app.HousePricePrediction import PredictionEngine


# initialize the prediction engine
predictionEngine = PredictionEngine()
predictionEngine.initialize()


# initialize the server
app = FastAPI(title="House price prediction API")

# handle cors issue
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,       
    allow_origins=["*"],        
    allow_methods=["*"],          
    allow_headers=["*"],         
)


# Define a simple data structure for inputs
class Query(BaseModel):
    houseDetails: list[HouseModel.House] = []


@app.get("/")
def read_root():
    return {"message": "Welcome to the House Price prediction API"}


@app.post("/predict")
def predict(data: Query):
    """Endpoint to make prediction"""
    predictions = predictionEngine.predict(data.houseDetails)

    return {
        "input_received": data.houseDetails,
        "predictions": predictions.tolist(),
        "model_version": "1.0.0"
    }