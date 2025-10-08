import { useState } from "react";

function EssentialsComponent({onChange, onNext, onBack}){

    const [formData, setFormData] = useState({
        Groceries:"",
        CleaningSupplies:"",
        InternetInstall:"",
        Gas:"",
        Electric:"",
        Water:"",
        CouncilTax:""
    })

    function handleChange(e){
        const {name,value} = e.target;
        setFormData(prev=>{
            const updated={...prev, [name]:value};
            if(onChange) onChange(updated);
            return updated;
        })
    }

    const handleSubmit=(e) => {
        e.preventDefault();
        if(onNext) onNext(formData);
    }

    return(
    <div className="essentials-component-form">
        <h3> Essentials </h3>
        <form onSubmit={handleSubmit}>
            <label>
                Cost of Groceries:
                <input
                    type="number"
                    name="Groceries"
                    value={formData.Groceries}
                    onChange={handleChange}
                />
            </label>
            <label>
                Price of all cleaning supplies:
                <input
                    type="number"
                    name="CleaningSupplies"
                    value={formData.CleaningSupplies}
                    onChange={handleChange}
                />
            </label>
            <label>
                Price of Internet installation:
                <input
                    type="name"
                    name="InternetInstall"
                    value={formData.InternetInstall}
                    onChange={handleChange}
                />
            </label>
            <label>
                Price of Gas per month:
                <input
                    type="number"
                    name="Gas"
                    value={formData.Gas}
                    onChange={handleChange}
                />
            </label>
            <label>
                Price of Eletric per month:
                <input
                    type="number"
                    name="Electric"
                    value={formData.Electric}
                    onChange={handleChange}
                />
            </label>
            <label>
                Price of Water per month:
                <input
                    type="number"
                    name="Water"
                    value={formData.Water}
                    onChange={handleChange}                
                />
            </label>
            <label>
                Price of Council Tax:
                <input
                    type="number"
                    name="CouncilTax"
                    value={formData.CouncilTax}
                    onChange={handleChange}
                />
            </label>
            <div className="button-row">
                    <button type="button" onClick={onBack}>
                        Back
                    </button>
                    <button type="submit"> Next </button>
                </div>
        </form>
    </div>)

}

export default EssentialsComponent;