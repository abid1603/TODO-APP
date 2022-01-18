import React from 'react'
import './TaskList.css'
import {useState, useEffect} from 'react'


function Tasklist() {
    const [taskinfo, settaskinfo] = useState([]);
    useEffect(()=>{
        let abid = localStorage.getItem("alltask");
        settaskinfo(JSON.parse(abid));
    },[]);
    return (
        <div className='Cardpage'>
            <div className='container cardcontainer'>
                 {
                    taskinfo.map((card,index) =>{
                        return(
                            <div className='cardbody'>
                                <div className='cardlitle'>
                                    {card.title}
                                </div>
                                <div className='container cardinfo'>
                                    <h5>{card.employer}</h5><br></br>
                                    <span>{card.description}</span>
                                </div>
                            </div>
                        );
                    })
                 }
            </div>
        </div>
    )
}

export default Tasklist
