import { useState } from "react";

function KitchenComponent({onChange, onNext, onBack}){

    const[formData, setFormData] = useState({
        lengthOfRoom: "",
        widthOfRoom: "",
        heightOfRoom: "",
        paintCost: "",
        paintCoverage:"",
        numberOfCoats:"",
        floorCost: "",
        underlay: false,
        underlayCost: "",
        fridge:"",
        freezer:"",
        washingMachine:"",
        dishwasher:"", 
        tumbleDryer:"", 
        cooker:"", 
        kettle:"", 
        microwave:"", 
        toaster:"", 
        dishes:"", 
        cutlery:"", 
        knives:"", 
        utensils:"", 
        tupperware:"", 
        mixingBowl:"" 
    })

    function handleChange(e){
        const {name, value} = e.target;
        setFormData(prev=>{
        const updated = {...prev,[name]: value};
        if(onChange) onChange(updated);
        return updated;
        })
    }

    const handleSubmit=(e) => {
        e.preventDefault();
        if(onNext) onNext(formData);
    }

    return(
        <div className="kitchen-component-form" >
            <h3> Kitchen </h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Length of the room (cm):
                    <input
                        type="number"
                        name="lengthOfRoom"
                        value={formData.lengthOfRoom}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Width of the room (cm):
                    <input
                        type="number"
                        name="widthOfRoom"
                        value={formData.widthOfRoom}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Height of the room (cm):
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
                        type="checkbox"
                        name="underlay"
                        value={formData.underlay}
                        onChange={(e)=> handleChange({target: {name: "underlay", value: e.target.checked}})}
                    />
                </label>
                <label>
                    Cost of the underlay:
                    <input
                        type="number"
                        name="underlay"
                        checked={formData.underlayCost}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Fridge:
                    <input
                        type="number"
                        name="fridge"
                        value={formData.fridge}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Freezer:
                    <input
                        type="number"
                        name="freezer"
                        value={formData.freezer}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Dishwasher:
                    <input
                        type="number"
                        name="dishwasher"
                        value={formData.dishwasher}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Washing Machine:
                    <input
                        type="number"
                        name="washingMachine"
                        value={formData.washingMachine}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Tumble Dryer:
                    <input
                        type="number"
                        name="tumbleDryer"
                        value={formData.tumbleDryer}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Dishwasher:
                    <input
                        type="number"
                        name="dishwasher"
                        value={formData.dishwasher}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cooker:
                    <input
                        type="number"
                        name="cooker"
                        value={formData.cooker}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Kettle:
                    <input
                        type="number"
                        name="kettle"
                        value={formData.kettle}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Microwave:
                    <input
                        type="number"
                        name="microwave"
                        value={formData.microwave}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Toaster:
                    <input
                        type="number"
                        name="toaster"
                        value={formData.toaster}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Dishes - Plates & bowls:
                    <input
                        type="number"
                        name="dishes"
                        value={formData.dishes}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cutlery:
                    <input
                        type="number"
                        name="cutlery"
                        value={formData.cutlery}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Kitchen Knives:
                    <input
                        type="number"
                        name="knives"
                        value={formData.knives}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Utensils:
                    <input
                        type="number"
                        name="utensils"
                        value={formData.utensils}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Tupperware:
                    <input
                        type="number"
                        name="tupperware"
                        value={formData.tupperware}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Mixing Bowls:
                    <input
                        type="number"
                        name="mixingBowl"
                        value={formData.mixingBowl}
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

export default KitchenComponent;