import { useState } from "react";
import BathroomComponent from './BathroomComponent'
import KitchenComponent from './KitchenComponent'
import LivingroomComponent from './LivingroomComponent'
import DecoratingComponent from './DecoratingComponent'
import BedroomComponent from './BedroomComponent'
import VanComponent from './VanComponent'
import EssentialsComponent from './EssentialsComponent'
import AggregateComponent from "./AggregateComponent";

function FormFlow(){

    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        van:{},
        livingroom:{},
        kitchen: {},
        bathroom:{},
        bedroom:{},
        decorating:{},
        essentials:{}
    })

    const forms =[
        {id: "van", component: VanComponent},
        {id: "livingroom", component: LivingroomComponent},
        {id: "kitchen", component: KitchenComponent},
        {id: "bathroom", component: BathroomComponent},
        {id: "bedroom", component: BedroomComponent},
        {id: "decorating", component: DecoratingComponent},
        {id: "essentials", component: EssentialsComponent}
    ];

    const CurrentForm = step < forms.length ? forms[step].component : AggregateComponent;
    const handleNext = (data) => {
        const currentFormId = forms[step]?.id;
        if(currentFormId){
            setFormData((prev) => ({...prev, [currentFormId]: data }));
        }
        setStep((prev)=> prev+1);
    }

    const handleBack = () =>{
        if(step > 0) setStep((prev)=> prev - 1);
    }

    return(
        <div className="form-flow">
            {step < forms.length ? (
                <CurrentForm onNext={handleNext} onBack={handleBack}/>
            ) : (
                <AggregateComponent allFormData={formData} />
            )}

            <div className ="form-progress">
                Step {step + 1} of {forms.length + 1}
            </div>
        </div>
    )
}

export default FormFlow;