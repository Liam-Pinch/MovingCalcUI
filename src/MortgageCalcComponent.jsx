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
            <label> Deposit: 
                <input
                    type="number"
                    value={deposit}
                    onChange={changeDeposit}
                />
            </label>   
            <label> Annual Interest Rate:
                <input
                    type="number"
                    value={AnnualInterestRate}
                    onChange={changeAnnualInterestRate}
                />
            </label>
            <label> Number of Years:
                <input
                    type = "number"
                    value = {TermYears}
                    onChange={changeTermYears}
                />
            </label>
            <button>Submit</button> {/* Change this to submit data to API when form is properly */}

            
        </form>
        
            House Price: {HousePrice}
            
            Deposit: {deposit}
            
            Annual Interest: {AnnualInterestRate}
            
            Years: {TermYears}
        
    </div>
    )
}

export default MortgageCalcForm;