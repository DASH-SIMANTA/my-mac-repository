import PriceOption from "../PriceOption/PriceOption";

const PriceOptions=() => {
    const priceOptions = [
  {
    "id": 1,
    "name": "Basic Plan",
    "price": 1999,
    "features": [
      "Access to gym equipment",
      "Locker room access",
      "1 personal trainer consultation/month",
      "Access during staffed hours",
      "Free water refill station"
    ]
  },
  {
    "id": 2,
    "name": "Standard Plan",
    "price": 2999,
    "features": [
      "Everything in Basic",
      "Unlimited group classes",
      "Weekly progress tracking",
      "2 personal trainer sessions/month",
      "Free access to guest once/month",
      "Mobile app workout plans"
    ]
  },
  {
    "id": 3,
    "name": "Premium Plan",
    "price": 4499,
    "features": [
      "Everything in Standard",
      "Diet & nutrition consultation",
      "Unlimited personal trainer sessions",
      "Steam & sauna access",
      "Early access to new classes",
      "Complimentary gym merchandise"
    ]
  },
  {
    "id": 4,
    "name": "Student Plan",
    "price": 1499,
    "features": [
      "Gym access (Mon-Fri)",
      "Group classes access",
      "Student-only training hours",
      "10% discount on supplements",
      "Free access to exam-week stress relief classes"
    ]
  },
  {
    "id": 5,
    "name": "Family Plan",
    "price": 6999,
    "features": [
      "Includes up to 3 family members",
      "Access to all facilities",
      "Family training packages",
      "Weekend family yoga sessions",
      "Parent-child fitness workshops",
      "Discount on additional family members"
    ]
  }
];


    return (
        <div className="m-12">
            <h2 className="text-5xl text-center py-2">Best Prices in the market</h2>
            <div className="grid grid-cols-3 gap-6">
                {
                priceOptions.map(option =>  <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;