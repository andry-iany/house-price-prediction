from pydantic import BaseModel


class House(BaseModel):
    area: int
    bedrooms: int
    bathrooms: int
    stories: int
    mainroad: str
    guestroom: str
    basement: str
    hotwaterheating: str
    airconditioning: str
    parking: int
    prefarea: str
    furnishingstatus: str


# Hardcoded dummy data structure as received from/sent to a FastAPI endpoint
Houses_data = [
    {
        "area": 4800,
        "bedrooms": 3,
        "bathrooms": 2,
        "stories": 4,
        "mainroad": "yes",
        "guestroom": "yes",
        "basement": "no",
        "hotwaterheating": "no",
        "airconditioning": "yes",
        "parking": 0,
        "prefarea": "no",
        "furnishingstatus": "furnished",
    },
    {
        "area": 9000,
        "bedrooms": 3,
        "bathrooms": 1,
        "stories": 1,
        "mainroad": "yes",
        "guestroom": "no",
        "basement": "yes",
        "hotwaterheating": "no",
        "airconditioning": "no",
        "parking": 1,
        "prefarea": "yes",
        "furnishingstatus": "semi-furnished",
    },
    {
        "area": 4770,
        "bedrooms": 3,
        "bathrooms": 1,
        "stories": 1,
        "mainroad": "yes",
        "guestroom": "yes",
        "basement": "yes",
        "hotwaterheating": "no",
        "airconditioning": "no",
        "parking": 0,
        "prefarea": "no",
        "furnishingstatus": "semi-furnished",
    },
]

