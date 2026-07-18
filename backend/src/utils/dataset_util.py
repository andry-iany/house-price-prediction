import kagglehub

from pathlib import Path
from dotenv import load_dotenv
import pandas as pd 


load_dotenv()


PROJECT_ROOT = Path(__file__).resolve().parent.parent.parent

PATH_DATASET_DIR = PROJECT_ROOT / 'data'
PATH_RAW_DATASET_FILE = PATH_DATASET_DIR / 'Housing.csv'
PATH_RAW_TRAINING_DATASET = PATH_DATASET_DIR / 'Training__Housing.csv'
PATH_RAW_TESTING_DATASET = PATH_DATASET_DIR / 'Testing_Housing.csv'
PATH_CLEANED_DATASET_FILE = PATH_DATASET_DIR / 'Cleaned__Housing.csv'


def download_dataset():
    kagglehub.dataset_download(
        handle='yasserh/housing-prices-dataset', 
        output_dir=PATH_DATASET_DIR, 
        path='Housing.csv', 
        force_download=True
    )
    print(f'Dataset downloaded to {PATH_DATASET_DIR}')



def preprocess(dataset):
    # Convert categorical 'yes' and 'no' columns to binary (1/0)
    categorical_cols = dataset.select_dtypes(include=['str']).columns

    for col in categorical_cols:
        if col != 'furnishingstatus':  # Handle this one separately
            dataset[col] = dataset[col].map({'yes': 1, 'no': 0})

    # 'furnishingstatus' has 3 unique values: furnished, semi-furnished, unfurnished
    # Apply One-Hot Encoding
    return pd.get_dummies(dataset, columns=['furnishingstatus'], drop_first=True, dtype=int)