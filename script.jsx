const root = ReactDOM.createRoot(document.querySelector(".root"));

//============================= CLASS-COMPONENT ===========================

class Cars extends React.Component {
    id;
    model;
    company;
    year;

    constructor(props) {
        super(props);
        this.id = props.id;
        this.model = props.model;
        this.company = props.company;
        this.year = props.year;
    }

    render() {
        return (
            <div>
                <h2>{this.model}</h2>
                <h3>{this.company}</h3>
                <p style={{fontWeight: "bold"}}>{this.year}</p>
                <p>{this.id}</p>
            </div>
        )
    }
}

function App() {
    return (
        <div className={"car-cards"}>
            <div className={"card"}>
                <Cars id={"123456"} model={"Civic"} company={"Honda"} year={2019}/>
            </div>
            <div className={"card"}>
                <Cars id={"234567"} model={"Accord"} company={"Honda"} year={2019}/>
            </div>
            <div className={"card"}>
                <Cars id={"345678"} model={"Corolla"} company={"Toyota"} year={2020}/>
            </div>
            <div className={"card"}>
                <Cars id={"456789"} model={"Camry"} company={"Toyota"} year={2019}/>
            </div>
            <div className={"card"}>
                <Cars id={"567891"} model={"370z"} company={"Nissan"} year={2019}/>
            </div>
        </div>
    )
}

//============================= FUNCTIONAL-COMPONENT ===========================

function CarsFunc(props) {
    return (
        <div className="card">
            <h2>{props.model}</h2>
            <h3>{props.company}</h3>
            <p>{props.year}</p>
            <p>{props.id}</p>
        </div>
    )
}

function App1() {
    return (
        <div className={"car-cards"}>
            <CarsFunc id={"123456"} model={"Civic"} company={"Honda"} year={2019}/>
            <CarsFunc id={"234567"} model={"Accord"} company={"Honda"} year={2019}/>
            <CarsFunc id={"345678"} model={"Corolla"} company={"Toyota"} year={2020}/>
            <CarsFunc id={"456789"} model={"Camry"} company={"Toyota"} year={2019}/>
            <CarsFunc id={"567891"} model={"370z"} company={"Nissan"} year={2019}/>
        </div>
    )
}




// root.render(<App/>); //class-component var
root.render(<App1/>);   //functional-component var