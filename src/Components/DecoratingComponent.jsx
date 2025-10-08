import { useState } from "react";

function DecoratingComponent({onChange, onNext, onBack}){
    const [formData, setFormData] = useState({
        boxesAndEquipment:"",
        paintEquipment:"",
        wallpaperEquipment:"",
        flooringEquipment:"",
        lightfittings:""
    })
    
    function handleChange(e){
        const {name,value} = e.target;
        setFormData(prev=>{
            const updated = {...prev, [name]: value};
            if(onChange) onChange(updated);
            return updated;
        })
    }

    const handleSubmit=(e) => {
        e.preventDefault();
        if(onNext) onNext(formData);
    }

    return(
        
            
        <div className="decorating-component-form">
            <form onSubmit={handleSubmit}>
                <h3> Decorating </h3>
                <label>
                    Cost of moving boxes:
                    <input
                        type="number"
                        name="boxesAndEquipment"
                        value={formData.boxesAndEquipment}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cost of paint equipment:
                    <input
                        type="number"
                        name="paintEquipment"
                        value={formData.paintEquipment}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cost of wall papering equipment:
                    <input
                        type="number"
                        name="wallpaperEquipment"
                        value={formData.wallpaperEquipment}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cost of flooring Equipment:
                    <input
                        type="number"
                        name="flooringEquipment"
                        value={formData.flooringEquipment}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cost of Light Fittings:
                    <input
                        type="number"
                        name="lightfittings"
                        value={formData.lightfittings}
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
        </div>
        
    )
}

export default DecoratingComponent