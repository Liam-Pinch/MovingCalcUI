import { useState } from "react";

function BathroomComponent({onChange}){

    const [formData, setFormData] = useState({
        lengthOfRoom: "",
        widthOfRoom: "",
        heightOfRoom: "",
        paintCost: "",
        paintCoverage:"",
        numberOfCoats:"",
        floorCost: "",
        underlay: "",
        underlayCost: "",
        towels: "",
        floormats: "",
        showerCurtain:""
    })
    
    function handleChange(e){
        const {name, value} = e.target;
        setFormData(prev => {
            const updated = {...prev, [name]: value};
            if (onChange) onChange(updated);
            return updated;
        });
    }

    return(
        <div className="bathroom-component-form">
            <form>
                <label>
                    Length of the Room:
                    <input
                        type="number"
                        name="lengthOfRoom"
                        value={formData.lengthOfRoom}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Width of the Room:
                    <input
                        type="number"
                        name="widthOfRoom"
                        value={formData.widthOfRoom}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Height of Room:
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
                    Cost of towels:
                    <input
                        type="number"
                        name="towels"
                        value={formData.towls}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cost of floor mats:
                    <input 
                        type="number"
                        name="floormats"
                        value={formData.floormats}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cost of Shower Curtain:
                    <input
                        type="number"
                        name="showerCurtain"
                        value={formData.showerCuratin}
                        onChange={handleChange}
                    />
                </label>
            </form>

        </div>


    )
}

export default BathroomComponent;