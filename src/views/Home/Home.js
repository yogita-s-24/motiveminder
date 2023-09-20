import React, { useState } from "react";
import "./Home.css";
import Task from "./../../components/Task/Task";

const Home = () => {
    const [taskList, setTaskList] = useState([
        {
            id: 1,
            title: 'Submit Assignment',
            description: "Only in two days",
            priority: 'very high'
        },
        {
            id: 2,
            title: 'Go to Market',
            description: "Buy Potato",
            priority: 'very high',
        },
        {
            id: 3,
            title: 'Gappa Arti',
            description: "Speak ganapati Aarti",
            priority: ' very high'
        },
        {
            id: 4,
            title: 'Learn Tailwind Css',
            description: "In three days",
            priority: 'very high'
        },

    ])
    return (
        <div className="container">
            <h1 className="app-title">🎯 Motive Minder 🎯</h1>
            <div className="todo-flex-container">
                <div>
                    <h2 className="text-center">Show List</h2>
                    {/* Showing the list */}    
                    {
                        taskList.map((taskItem, index)=>{
                            const {id,title,description,priority} = taskItem;
                            return <Task id={id} title={title} description={description} priority={priority}/>
                        })
                    }
                </div>

                <div>
                    <h2 className="text-center">Add List</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;
