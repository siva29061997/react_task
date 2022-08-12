
import './App.css';
import Card from "./Card"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const data = [
    {
      name: "FREE",
      price: 0,
      currency: "$",
      period: 'month',
      details: [
        {
          tittle: "Single User",
          isEnable: true
        },
        {
          tittle: "5GB Storage",
          isEnable: true
        },
        {
          tittle: "Unlimited Public Projects",
          isEnable: true
        },
        {
          tittle: "Community Access",
          isEnable: true
        },
        {
          tittle: "Unlimited Private Projects",
          isEnable: false
        },
        {
          tittle: "Dedicated Phone Support",
          isEnable: false
        },
        {
          tittle: "Free Subdomain",
          isEnable: false
        },
        {
          tittle: "Monthly Status Reports",
          isEnable: false
        },
      ]
    },
    {
      name: "PLUS",
      price: 9,
      currency: "$",
      period: 'month',
      details: [
        {
          tittle: "5 User",
          isEnable: true ,
          isBoult : true 
        },
        {
          tittle: "50GB Storage",
          isEnable: true
        },
        {
          tittle: "Unlimited Public Projects",
          isEnable: true
        },
        {
          tittle: "Community Access",
          isEnable: true
        },
        {
          tittle: "Unlimited Private Projects",
          isEnable: true
        },
        {
          tittle: "Dedicated Phone Support",
          isEnable: true
        },
        {
          tittle: "Free Subdomain",
          isEnable: true
        },
        {
          tittle: "Monthly Status Reports",
          isEnable: false
        },
      ]
    },
    {
      name: "PRO",
      price: 49,
      currency: "$",
      period: 'month',
      details: [
        {
          tittle: "Unlimited Users",
          isEnable: true ,
          isBoult : true
        },
        {
          tittle: "150GB Storage",
          isEnable: true
        },
        {
          tittle: "Unlimited Public Projects",
          isEnable: true
        },
        {
          tittle: "Community Access",
          isEnable: true
        },
        {
          tittle: "Unlimited Private Projects",
          isEnable: true
        },
        {
          tittle: "Dedicated Phone Support",
          isEnable: true
        },
        {
          tittle: "Unlimited Free Subdomain",
          isEnable: true
        },
        {
          tittle: "Monthly Status Reports",
          isEnable: true
        },
      ]
    }
  ]
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {
            data.map((value)=>{
              return <Card value={value}></Card>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default App;
