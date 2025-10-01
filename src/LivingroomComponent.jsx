import { useState } from "react";

function LivingroomComponent({onChange}){

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
        sofa:"",
        tv:"",
        tvStand:"",
        storage:"",
        livingroomLamps:"",
        tableAndChairs:""
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
        <div className="livingroom-component-form">
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
                    Cost of Sofa:
                    <input
                        type="number"
                        name="sofa"
                        value={formData.sofa}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cost of TV:
                    <input
                        type="number"
                        name="tv"
                        value={formData.tv}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    cost of TV Stand or Wall bracket:
                    <input
                        type="number"
                        name="tvStand"
                        value={formData.tvStand}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cost of storage units:
                    <input
                        type="number"
                        name="storage"
                        value={formData.storage}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cost of Living room Lamps:
                    <input
                        type="number"
                        name="livingroomLamps"
                        value={formData.livingroomLamps}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cost of table and chairs:
                    <input
                        type="number"
                        name="livingroomLamps"
                        value={formData.livingroomLamps}
                        onChange={handleChange}
                    />
                </label>
            </form>
        </div>
    )
}

export default LivingroomComponent;