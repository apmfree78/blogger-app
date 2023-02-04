const NewPostButton = () => {
  return (
    <section style={{ paddingBottom: "1.5vh" }}>
      <button className={`button is-success`} style={{ margin: "1vh 1vw" }}>
        <span>
          <i className="fa-solid fa-pen-to-square"></i>
        </span>
        <span style={{ marginLeft: "0.75vw" }}>Create New Post</span>
      </button>
    </section>
  );
};

export default NewPostButton;
