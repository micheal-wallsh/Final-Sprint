import React from 'react'

const Checkoutform = () => {
    let onSubmit = (e) => {
        e.preventDefault();
    
        if (!text) {
          alert("Please add a task");
          return;
          
        }
        setText("");
  return (
    <div>
        <form>
            <div>
                <label>
                    Name
        </label>
        <input
          type="text"
          placeholder="Add Name"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>

            
        </form>
    </div>
  )
}
}

export default Checkoutform