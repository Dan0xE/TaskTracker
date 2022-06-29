import { useState } from "react";

const AddTask = ({ onAdd }: any) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const currTime = new Date().toLocaleTimeString();

  setTimeout(() => {
    console.log(day);
  }, 10000);

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!text || !day || !time) {
      alert("Please Add a Task and provide a date with a time");
      return;
    }

    onAdd({
      time,
      text,
      day,
      reminder,
    });

    setTime("");
    setText(" ");
    setDay(" ");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control shadow-2xl">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          className="shadow-2xl rounded input-primary"
          value={text}
          onChange={(e) => setText(e.target.value)}
          minLength={2}
        />
      </div>
      <div className="form-control shadow-2xl">
        <label>Date</label>
        <input
          type="date"
          placeholder="Add Day & Time"
          className="shadow-2xl rounded input-primary"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          min={new Date().toISOString().split("T")[0]}
        />
      </div>
      <div className="form-control shadow-2xl">
        <label>Time</label>
        <input
          type="time"
          placeholder="Add Time"
          className="shadow-2xl  rounded input-primary"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          // min={
          //   new Date().toISOString().split("T")[0] <= day
          //     ? currTime.split(":")[0] + ":" + currTime.split(":")[1]
          //     : "00:00"
          // }
        />
      </div>

      <div className="form-control-check ">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          className="float-right"
          checked={reminder}
          //@ts-ignore
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <div className="pt-6"></div>
      <input
        type="submit"
        value="Save Task"
        className="btn btn-block shadow-2xl  rounded"
      />
    </form>
  );
};

export default AddTask;
