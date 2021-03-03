import logo from './logo.svg';
import './App.css';

function App() {
  // const City =["Karachi","Multan","Hydrabad","Zalmi","Lahore","Rawalpandi"]
  const city1=[{
CityName:"Karachi",
Tempreature:"70c",
perccepasatio:"60%"
},
{
  CityName:"Muitan",
Tempreature:"60c",
perccepasatio:"50%"
},
{
  CityName:"hydrabad",
Tempreature:"40c",
perccepasatio:"40%"
},
{
  CityName:"Zalmi",
Tempreature:"30c",
perccepasatio:"30%"
},
{
  CityName:"lahore",
Tempreature:"20c",
perccepasatio:"20%"
},
{
  CityName:"Rawalpandi",
Tempreature:"50c",
perccepasatio:"10%"
},
]
  return (<>
  <div className="Header"><h1>Hello Header</h1></div>
  {city1.map((value, i) => {
        return (
          <div className="Border"><h1>CItyName :{value.CityName}</h1>
            <h2>Temprature :{value.Tempreature}</h2>
            <h3>Percepsation :{value.perccepasatio}</h3>
          </div>
        )
      })}


  {/* {City.map((CityName) => {
    return (
      <div><h2>{CityName}</h2></div>
    )
    })} */}
    <div className></div>


</>)
}

export default App;