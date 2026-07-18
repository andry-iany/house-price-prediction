import pickle
import pandas as pd
from app import HouseModel
from utils.dataset_util import PATH_MODEL, PATH_SCALER, preprocess


class PredictionEngine:
    def __init__(self):
        self.__model__ = None
        self.__scaler__ = None


    def initialize(self): 
        self.__internal_load_model__()
        self.__internal_load_scaler__()
        print("Model initialized successfully")


    def __internal_load_model__(self):
        with open(PATH_MODEL, 'rb') as file:
            self.__model__ = pickle.load(file)


    def __internal_load_scaler__(self):
        with open(PATH_SCALER, 'rb') as file:
            self.__scaler__ = pickle.load(file)


    def predict(self, input: list[HouseModel.House]):
        X = pd.DataFrame(input)
        X = preprocess(X)
        X = self.__scaler__.transform(X)
        return self.__model__.predict(X)
