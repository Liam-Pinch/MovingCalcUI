import { useState } from "react";

function DecoratingComponent({onChange}){
    const [formData, setFormData] = useState({
        boxesAndEquipment:"",
        paintEquipment:"",
        wallpaperEquipment:"",
        flooringEquipment:"",
        lightfittings:""
    })
    
    function handleChange(e){
        const [name,value] = e.target;
        setFormData(prev=>{
            const updated = {...prev, [name]: value};
            if(onChange) onChange(updated);
            return updated;
        })
    }

    return(<>
        <form>
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
                    name="wallpaperingEquipment"
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
                    name="lightfitting"
                    value={formData.lightfittings}
                    onChange={handleChange}
                />
            </label>
        </form>
    </>)
}

export default DecoratingComponent