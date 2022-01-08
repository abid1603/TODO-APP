import React from 'react'
import './TaskList.css'
import { taskobj } from './Taskobject'

function Tasklist() {
    return (
        <div className='Cardpage'>
            <div className='container cardcontent'>
                 {
                    taskobj.map((card,index) =>{
                        return(
                            <div className='cardbody'>
                                <div className='cardlitle'>
                                    <h5>{card.title}</h5>
                                </div>
                                <div className='cardcontent'>
                                    <p>{card.Description}</p>
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
