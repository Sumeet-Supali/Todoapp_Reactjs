function Takeinput({ handle_taking_input, handlesubmit, handle_taking_date }) {
  return (
    <div>
      <div class="row">
        {/* start */}

        {/* input */}
        <div class="col-5">
          <input
            type="text"
            placeholder="work"
            onChange={handle_taking_input}
          />
        </div>

        {/* date */}
        <div class="col-4">
          <input type="date" onChange={handle_taking_date} />
        </div>

        {/* add */}
        <div class="col-2">
          <button onClick={handlesubmit} type="button" class="btn btn-success">
            Success
          </button>
        </div>

        {/* end */}
      </div>
    </div>
  );
}

export default Takeinput;
