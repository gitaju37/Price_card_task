import './App.css'
import Card from "./Components/Card.jsx"

const App = () => {
  const cards = [ {
    tittle: "FREE",
    price: "$0/month",
    features: [
      { isIncluded: true, text: "Single user" },
      { isIncluded: true, text: "50GB Storage" },
      { isIncluded: true, text: "Unlimited Public Projects" },
      { isIncluded: true, text: "Community Access" },
      { isIncluded: false, text: "Unlimited Private Projects" },
      { isIncluded: false, text: "Dedicated Phone Support" },
      { isIncluded: false, text: "Free subdomain" },
      { isIncluded: false, text: "Monthly Status Support" },
    ],
    btn: false
  }, {
    tittle: "PLUS",
    price: "$9/month",
    features: [
      { isIncluded: true, text: "Single user" },
      { isIncluded: true, text: "50GB Storage" },
      { isIncluded: true, text: "Unlimited Public Projects" },
      { isIncluded: true, text: "Community Access" },
      { isIncluded: true, text: "Unlimited Private Projects" },
      { isIncluded: true, text: "Dedicated Phone Support" },
      { isIncluded: true, text: "Free subdomain" },
      { isIncluded: false, text: "Monthly Status Support" },
    ],
    btn: false
  }, {
    tittle: "PRO",
    price: "$49/month",
    features: [
      { isIncluded: true, text: "Single user" },
      { isIncluded: true, text: "50GB Storage" },
      { isIncluded: true, text: "Unlimited Public Projects" },
      { isIncluded: true, text: "Community Access" },
      { isIncluded: true, text: "Unlimited Private Projects" },
      { isIncluded: true, text: "Dedicated Phone Support" },
      { isIncluded: true, text: "Free subdomain" },
      { isIncluded: true, text: "Monthly Status Support" },
    ],
    btn: true
  } ]
  return (
        <> {
        cards.map( ( card, index ) => {
        return <Card cardData={card} key={index} />
        } ) }

    </>
  )
}

export default App

