import kagglehub

from pathlib import Path
from dotenv import load_dotenv


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



