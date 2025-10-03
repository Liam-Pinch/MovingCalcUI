import { useState } from "react";

function BedroomComponent ({onchange}){
    const [formData, setFormData] = useState({
        lengthOfRoom:"", 
        widthOfRoom:"", 
        heightOfRoom:"", 
        flooringCost:"",
        underlay:"", 
        underlayCost:"", 
        paintCost:"", 
        paintCoverage:"",
        numberOfCoats:"", 
        Bed:"", 
        Mattress:"", 
        Bedding:"", 
        Wardrobe:"",
        ChestOfDraws:"", 
        BedroomLamps:"",
        Curtains:""

    })


    function handleChange(e){
        const {name,value} = e.target;
        setFormData(prev=>{
            const updated = {...prev,[name]: value};
            if(onChange) onChange(updated);
            return updated;
        })
    }

    return(
    <div className="bedroom-component-form">
        <form>
            <h3>Bedroom </h3>
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
                        checked={formData.underlay}
                        onChange={(e)=> handleChange({target: {name: "underlay", value: e.target.checked}})}
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
                    Cost of Bed:
                    <input
                        type="number"
                        name="Bed"
                        value={formData.Bed}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cost of Matress:
                    <input
                        type="number"
                        name="Matress"
                        value={formData.Mattress}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cost of Bedding:
                    <input
                        type="number"
                        name="Bedding"
                        value={formData.Bedding}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cost of Wardrobe:
                    <input
                        type="number"
                        name="Wardrobe"
                        value={formData.Wardrobe}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cost of chest of draws / side tables:
                    <input
                        type="number"
                        name="ChestOfDraws"
                        value={formData.ChestOfDraws}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cost of bedroom lamps:
                    <input
                        type="number"
                        name="BedroomLamps"
                        value={formData.BedroomLamps}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cost of Curtains:
                    <input
                        type="number"
                        name="Curtains"
                        value={formData.Curtains}
                        onChange={handleChange}
                    />
                </label>
                <button>Submit</button>
        </form>
    </div>)

}

export default BedroomComponent;