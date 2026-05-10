import kagglehub

from pathlib import Path
from dotenv import load_dotenv


load_dotenv()


PROJECT_ROOT = Path(__file__).resolve().parent.parent.parent
DATA_RAW_DIR = PROJECT_ROOT / 'data' / 'raw'


def download_dataset():
    kagglehub.dataset_download(
        handle='yasserh/housing-prices-dataset', 
        output_dir=DATA_RAW_DIR, 
        path='Housing.csv', 
        force_download=True
    )
    print(f'Dataset downloaded to {DATA_RAW_DIR}')



