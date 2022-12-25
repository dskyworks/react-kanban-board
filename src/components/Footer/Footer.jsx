import "./Footer.css";

const Footer = ({ tasksList }) => {
  const activeTasksCount = tasksList[0].tasks.length;
  const finishedTasksCount = tasksList[tasksList.length - 1].tasks.length;
  return (
    <footer className="footer">
      <div className="footer__stats">
        <p className="footer__counter">Active tasks: {activeTasksCount}</p>
        <p className="footer__counter">Finished tasks: {finishedTasksCount}</p>
      </div>
      <div className="footer__copyright">
        <p>Kanban board by ANN, 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
