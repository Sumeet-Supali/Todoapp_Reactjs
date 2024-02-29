import styles from "./Make_list.module.css";

function Make_list({ todoname, tododate, ondelete }) {
  return (
    <>
      <div class="row mt-2">
        <div className={`${styles.todoname} col-5`}>{todoname}</div>
        <div className={`${styles.todoname} col-4`}>{tododate}</div>
        <div class="col-3">
          <button type="button" class="btn btn-danger" onClick={ondelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Make_list;
