
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import './style.css'
import table from './pics/table.png'
import chair from './pics/chair.png'
import wall from './pics/wall.png'
import wall1 from './pics/wall1.png'
import urid from 'urid';
import { message } from 'antd';

const data = [
    {
        id: 1,
        name: "Table",
        img: table,
        x: 50,
        y: 50
    },
    {
        id: 2,
        name: "Chair",
        img: chair,
        x: 50,
        y: 50
    },
    {
        id: 3,
        name: "Wall horizontal",
        img: wall,
        x: 50,
        y: 50
    },
    {
        id: 4,
        name: "Wall vetical",
        img: wall1,
        x: 50,
        y: 50
    }
]

const Planner = () => {
    let [drag, setDrag] = useState(0)
    let [pos, setPos] = useState(
            {        
                x: 0, y: 0
            }
        )

    let [elements, setElements] = useState([])

    const handleUpload = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
          console.log("e.target.result", JSON.parse(e.target.result));
          setElements(JSON.parse(e.target.result));
        };
    };

    const addEL = (e) => {
        let id = urid();
        setElements([...elements, {...e, id: id}])
    }

    const onStart = () => {
        setDrag({drag: ++drag});
    };
    
    const onStop = (i, data) => {
        const newState = elements.map(obj => {
            if (obj.id === data.node.id) {
              return {...obj, x: data.x, y: data.y};
            }
            return obj;
        });
        setElements(newState)
        setDrag({drag: --drag});
    };

    const handleDrag = (e, ui) => {
        const {x, y} = pos;
        setPos({
            x: x + ui.deltaX,
            y: y + ui.deltaY,
        });
    };

    const removeEl = (id) => {
        let newEl = elements.filter(el => el.id !== id)
        setElements(newEl)
    }

    const downData = (data) => {
        if (elements.length < 1) {
            message.error('There are no items on the plan');
        } else {
            const fileData = JSON.stringify(elements);
            const blob = new Blob([fileData], { type: "text/plain" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.download = "user-info.json";
            link.href = url;
            link.click();
        }
    }

    return (
        <div>
            <div className='elements'>
                <h3>Elements</h3>
                <div className='import-export'>
                    <label for="file-upload" class="custom-upload">
                        Import plan
                    </label>
                    <input id="file-upload" type="file" onChange={handleUpload} />
                    <a href={() => false} onClick={downData}>Export plan to file</a>
                </div>
                {data.map((i) =>
                    <div className='item'>
                        <p>{i.name}</p> 
                        <img src={i.img} alt='' />
                        <div className='add'><button onClick={() => addEL(i)}>Add</button></div>
                    </div>
                )}
            </div>
            {elements.length > 0 ?
            <div className='room'>
                <h3>Room</h3>
                {elements.map((i) => 
                    <Draggable defaultPosition={{x: i.x, y: i.y}} onDrag={handleDrag} onStop={onStop} onStart={onStart}>
                        <div id={i.id} className='box'><span onClick={e => removeEl(i.id)} className='remove'>X</span><img src={i.img} alt='' /></div>
                    </Draggable>
                )}
            </div> : <div className='room'><h3>Room</h3></div>}
        </div>
    )
}

export default Planner