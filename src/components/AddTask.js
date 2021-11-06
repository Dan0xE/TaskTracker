import { useState } from 'react';

const AddTask = ({ onAdd }) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');    
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert('Please Add a Task')
            return
        }

        onAdd({
            text,
            day,
            reminder
        })

        setText(' ')
        setDay(' ')
        setReminder(false)

    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control shadow-2xl'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' className="shadow-2xl  rounded input-primary"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
                        <div className='form-control shadow-2xl'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day & Time' className="shadow-2xl  rounded input-primary"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
                        <div className='form-control-check '>
                <label>Set Reminder</label>
                <input type='checkbox' className="float-right"
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                
                />
            </div>
            <div className="pt-6"></div>
            <input type="submit" value="Save Task" className="btn btn-block shadow-2xl  rounded"/>
        </form>
    )
}

export default AddTask
