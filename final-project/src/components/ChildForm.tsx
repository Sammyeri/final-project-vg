import { useState } from "react";
import { Child } from "../models/Child";
import './ChildForm.css';


interface ChildFormProps {
    onAddChild: (child: Child) => void;
}

export const ChildForm = ({ onAddChild }: ChildFormProps) => {
    const [child, setChild] = useState<Child>({ name: '', platform: '', birthdate: '', rating: '' });

    return (
        <form 
            onSubmit={(e) => {
            e.preventDefault();
            onAddChild(child);
            setChild({ name: '', platform: '', birthdate: '', rating: '' });
        }}>
            <label htmlFor="name">Child's Name</label>
            <input
                type="text"
                id="name"
                value={child.name}
                onChange={(e) => setChild({ ...child, name: e.target.value })}
            />
            <label htmlFor="platform">Platform Used</label>
            <input
                type="text"
                id="platform"
                value={child.platform}
                onChange={(e) => setChild({ ...child, platform: e.target.value })} 
            />
            <label htmlFor="birthdate">Date of Birth (mm/dd/yyyy)</label>
            <input
                type="text"
                id="birthdate"
                value={child.birthdate}
                onChange={(e) => setChild({ ...child, birthdate: e.target.value })}
            />
            <label htmlFor="rating">Game Rating Allowed</label>
            <input
                type="text"
                id="rating"
                value={child.rating}
                onChange={(e) => setChild({ ...child, rating: e.target.value })}
            />
            <button>Submit</button>
        </form>
    )
}