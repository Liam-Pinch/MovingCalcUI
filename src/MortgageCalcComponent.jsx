import { useState } from "react";
import "./index.css"

function MortgageCalcForm(){

    const [HousePrice, setHousePrice] = useState("");
    const [deposit, setDeposit] = useState("");
    const [AnnualInterestRate, setAnnualInterestRate] = useState("");
    const [TermYears, setTermYears] = useState("");

    function changeHousePrice(e){
        setHousePrice(e.target.value);
    }
    function changeDeposit(e){
        setDeposit(e.target.value)
    }
    function changeAnnualInterestRate(e){
        setAnnualInterestRate(e.target.value)
    }
    function changeTermYears(e){
        setTermYears(e.target.value)
    }

    return (
    <div className="mortgage-calc-form">
        <form>
            <label> House Price: 
                <input
                    type="number"
                    value={HousePrice}
                    onChange={changeHousePrice}
                />
            </label>
            <br/>
            <br/>
            <label> Deposit: 
                <input
                    type="number"
                    value={deposit}
                    onChange={changeDeposit}
                />
            </label>
            <br/>
            <br/>
            <label> Annual Interest Rate:
                <input
                    type="number"
                    value={AnnualInterestRate}
                    onChange={changeAnnualInterestRate}
                />
            </label>
            <br/>
            <br/>
            <label> Number of Years:
                <input
                    type = "number"
                    value = {TermYears}
                    onChange={changeTermYears}
                />
            </label>
            <br/>
            <button>Submit</button> {/* Change this to submit data to API when form is properly */}

            <br/><br/>
        </form>
        
            House Price: {HousePrice}
            <br/>
            Deposit: {deposit}
            <br/>
            Annual Interest: {AnnualInterestRate}
            <br/>
            Years: {TermYears}
        
    </div>
    )
}

export default MortgageCalcForm;