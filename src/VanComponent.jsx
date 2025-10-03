import { useState } from "react";

function VanComponent({onChange}){
    const [formData, setFormData] = useState({
        VanHire:"",
        VanHireDays:"",
        VanFuel:"",
        ProfessionalMovers:""
    })

    function handleChange(e){
        const {name, value} = e.target;
        setFormData(prev=>{
            const updated={...prev,[name]: value};
            if (onChange) onChange(updated);
            return updated;
        })
    }

    return(
        <div className="van-component-form">
            <h3> Van Hire </h3>
            <form>
                <label>
                    Cost of van hire per day:
                    <input
                        type="number"
                        name="VanHire"
                        value={formData.VanHire}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Number of days van is required for:
                    <input
                        type="number"
                        name="VanHireDays"
                        value={formData.VanHireDays}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Estimated fuel required:
                    <input
                        type="number"
                        name="VanFuel"
                        value={formData.VanFuel}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Price of professional movers:
                    <input
                        type="number"
                        name="ProfessionalMovers"
                        vale={formData.ProfessionalMovers}
                        onChange={handleChange}
                    />
                </label>
                <button> Submit </button>
            </form>
        </div>
    )
}

export default VanComponent;