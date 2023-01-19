import React, { ReactNode, useState, useContext } from 'react';
import './Profile.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Child, deleteChild } from '../models/Child';
import { ChildForm } from './ChildForm';
import AuthContext from '../context/AuthContext';

interface Props {
    child: Child;
    onToggleFixed: () => void;
}

export function Profile() {
    const {user} = useContext(AuthContext);

    const [children, setChildren] = useState<Child[]>([]);

    const addChild = (child: Child): void => {
        setChildren((children) => [...children, child]);
    }

    function handleDelete(name: string){
        const index = children.findIndex(child => child.name === name);
        setChildren(prev => {
          const newList = prev.slice(0);
          newList.splice(index, 1);
          return newList;
        });
        deleteChild(index);
      }
    
    return (
        <div className="parentProfile">
            <h1>{user?.displayName}</h1>
            <Popup trigger={<button>Add Child</button>} position="center center">
                <div className="popup">
                    <ChildForm onAddChild={addChild} />
                </div>
            </Popup>
            <ul>
                <br></br>
                {children.map((child, i) => {
                    return (
                        <li key={i}>
                            {child.name} <br></br><br></br>
                            Platform <br></br> {child.platform} <br></br><br></br>
                            Date of Birth <br></br> {child.birthdate} <br></br><br></br>
                            Game Rating Allowed <br></br> {child.rating} <br></br><br></br>
                            <button onClick={() => handleDelete(child.name)} className="remove">Remove Child</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}