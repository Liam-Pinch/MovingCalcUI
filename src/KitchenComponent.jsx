import { useState } from "react";

function KitchenComponent({onChange}){

    const[formData, setFormData] = useState({
        lengthOfRoom: "",
        widthOfRoom: "",
        heightOfRoom: "",
        paintCost: "",
        paintCoverage:"",
        numberOfCoats:"",
        floorCost: "",
        underlay: "",
        underlayCost: "",
        Fridge:"",
        Freezer:"",
        WashingMachine:"",
        Dishwasher:"", 
        TumbleDryer:"", 
        Cooker:"", 
        Kettle:"", 
        Microwave:"", 
        Toaster:"", 
        Dishes:"", 
        Cutlery:"", 
        Knives:"", 
        Utensils:"", 
        Tupperware:"", 
        MixingBowl:"" 
    })

    function handleChange(e){
        const {name, value} = e.target;
        setFormData(prev=>{
        const updated = {...prev,[name]: value};
        if(onChange) onChange(updated);
        return updated;
        })
    }

    return(
        <div className="kitchen-component-form">
            <form>
                <label>
                    Length of the room:
                    <input
                        type="number"
                        name="lengthOfRoom"
                        value={formData.lengthOfRoom}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Width of the room:
                    <input
                        type="number"
                        name="widthOfRoom"
                        value={formData.widthOfRoom}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Height of the room:
                    <input
                        type="number"
                        name="heightOfRoom"
                        value={formData.heightOfRoom}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cost of the paint per tin:
                    <input
                        type="number"
                        name="paintCost"
                        value={formData.paintCost}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Paint coverage specified on the tin in meters squared:
                    <input
                        type="number"
                        name="paintCoverage"
                        value={formData.paintCoverage}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Number of Coats required:
                    <input
                        type="number"
                        name="numberOfCoats"
                        value={formData.numberOfCoats}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Is Underlay Required?:
                    <input 
                        type="text"
                        name="underlay"
                        value={formData.underlay}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cost of the underlay:
                    <input
                        type="number"
                        name="underlayCost"
                        value={formData.underlayCost}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Fridge:
                    <input
                        type="number"
                        name="fridge"
                        value={formData.Fridge}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Freezer:
                    <input
                        type="number"
                        name="freezer"
                        value={formData.Freezer}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Dishwasher:
                    <input
                        type="number"
                        name="dishwasher"
                        value={formData.Dishwasher}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Washing Machine:
                    <input
                        type="number"
                        name="washingMachine"
                        value={formData.WashingMachine}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Tumble Dryer:
                    <input
                        type="number"
                        name="tumbleDryer"
                        value={formData.TumbleDryer}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Dishwasher:
                    <input
                        type="number"
                        name="dishwasher"
                        value={formData.Dishwasher}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cooker:
                    <input
                        type="number"
                        name="cooker"
                        value={formData.Cooker}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Kettle:
                    <input
                        type="number"
                        name="kettle"
                        value={formData.Kettle}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Microwave:
                    <input
                        type="number"
                        name="microwave"
                        value={formData.Microwave}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Toaster:
                    <input
                        type="number"
                        name="toaster"
                        value={formData.Toaster}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Dishes - Plates & bowls:
                    <input
                        type="number"
                        name="dishes"
                        value={formData.Dishes}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cutlery:
                    <input
                        type="number"
                        name="cutlery"
                        value={formData.Cutlery}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Kitchen Knives:
                    <input
                        type="number"
                        name="knives"
                        value={formData.Knives}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Utensils:
                    <input
                        type="number"
                        name="utensils"
                        value={formData.Utensils}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Tupperware:
                    <input
                        type="number"
                        name="tupperware"
                        value={formData.Tupperware}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Mixing Bowls:
                    <input
                        type="number"
                        name="mixingBowls"
                        value={formData.MixingBowl}
                        onChange={handleChange}
                    />
                </label>
            </form>
        </div>
    )
}

export default KitchenComponent;