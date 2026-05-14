import { ListingCard } from "@/components/ListingCard"

const houses = [
  {
    price: 1250000,
    bedrooms: 4,
    area: 7420,
    bathrooms: 2,
    stories: 2,
    mainroad: true,
    guestroom: false,
    basement: false,
    hotwaterheating: true,
    airconditioning: true,
    parking: 2,
    furnishingstatus: "furnished",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!",
  },
  {
    price: 1250000,
    bedrooms: 4,
    area: 7420,
    bathrooms: 2,
    stories: 2,
    mainroad: true,
    guestroom: false,
    basement: false,
    hotwaterheating: true,
    airconditioning: true,
    parking: 2,
    furnishingstatus: "furnished",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!",
  },
  {
    price: 1250000,
    bedrooms: 4,
    area: 7420,
    bathrooms: 2,
    stories: 2,
    mainroad: true,
    guestroom: false,
    basement: false,
    hotwaterheating: true,
    airconditioning: true,
    parking: 2,
    furnishingstatus: "furnished",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!",
  },
  {
    price: 1250000,
    bedrooms: 4,
    area: 7420,
    bathrooms: 2,
    stories: 2,
    mainroad: true,
    guestroom: false,
    basement: false,
    hotwaterheating: true,
    airconditioning: true,
    parking: 2,
    furnishingstatus: "furnished",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!",
  },
  {
    price: 1250000,
    bedrooms: 4,
    area: 7420,
    bathrooms: 2,
    stories: 2,
    mainroad: true,
    guestroom: false,
    basement: false,
    hotwaterheating: true,
    airconditioning: true,
    parking: 2,
    furnishingstatus: "furnished",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!",
  },
  {
    price: 1250000,
    bedrooms: 4,
    area: 7420,
    bathrooms: 2,
    stories: 2,
    mainroad: true,
    guestroom: false,
    basement: false,
    hotwaterheating: true,
    airconditioning: true,
    parking: 2,
    furnishingstatus: "furnished",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!",
  },
  {
    price: 1250000,
    bedrooms: 4,
    area: 7420,
    bathrooms: 2,
    stories: 2,
    mainroad: true,
    guestroom: false,
    basement: false,
    hotwaterheating: true,
    airconditioning: true,
    parking: 2,
    furnishingstatus: "furnished",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!",
  },
  {
    price: 1250000,
    bedrooms: 4,
    area: 7420,
    bathrooms: 2,
    stories: 2,
    mainroad: true,
    guestroom: false,
    basement: false,
    hotwaterheating: true,
    airconditioning: true,
    parking: 2,
    furnishingstatus: "furnished",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!",
  },
  {
    price: 1250000,
    bedrooms: 4,
    area: 7420,
    bathrooms: 2,
    stories: 2,
    mainroad: true,
    guestroom: false,
    basement: false,
    hotwaterheating: true,
    airconditioning: true,
    parking: 2,
    furnishingstatus: "furnished",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!",
  },
]

export default function Page() {
  return (
    <section className="flex py-8">
      <section className="max-w-3xs min-w-3xs px-3">filter</section>
      <section className="w-full px-3">
        <h2 className="mb-6 text-xl font-bold text-primary-foreground">
          Properties for Sale
        </h2>
        <section className="flex flex-wrap items-center justify-between gap-x-3 gap-y-6">
          {houses.map((house, i) => (
            <ListingCard houseDetail={house} key={i} />
          ))}
        </section>
      </section>
    </section>
  )
}
