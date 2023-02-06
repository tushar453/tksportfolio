import React from "react";
import { NavLink } from "react-router-dom";
import Introi from "../components/assests/nit.jpeg";
// import Intr from "../components/assests/project.jpeg";
import "./Projects.css";
const Projects = () => {
  return (
    <>
      <div className="containerr">
        <div ClassName="card" style={{ width: "18rem" }}>
          <img src={Introi} ClassName="card-img-top" alt="..." />
          <div ClassName="card-body">
            <h5 ClassName="card-title">Card title</h5>
            <p ClassName="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="#" ClassName="btn btn-primary">
              <button className="btn">Go somewhere</button>{" "}
            </NavLink>
          </div>
        </div>

        <div ClassName="card" style={{ width: "18rem" }}>
          <img src={Introi} ClassName="card-img-top" alt="..." />
          <div ClassName="card-body">
            <h5 ClassName="card-title">Card title</h5>
            <p ClassName="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="#" ClassName="btn btn-primary">
              <button className="btn">Go somewhere</button>{" "}
            </NavLink>
          </div>
        </div>

        <div ClassName="card" style={{ width: "18rem" }}>
          <img src={Introi} ClassName="card-img-top" alt="..." />
          <div ClassName="card-body">
            <h5 ClassName="card-title">Card title</h5>
            <p ClassName="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="#" ClassName="btn btn-primary">
              <button className="btn">Go somewhere</button>{" "}
            </NavLink>
          </div>
        </div>

        <div ClassName="card" style={{ width: "18rem" }}>
          <img src={Introi} ClassName="card-img-top" alt="..." />
          <div ClassName="card-body">
            <h5 ClassName="card-title">Card title</h5>
            <p ClassName="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="#" ClassName="btn btn-primary">
              <button className="btn">Go somewhere</button>{" "}
            </NavLink>
          </div>
        </div>

        <div ClassName="card" style={{ width: "18rem" }}>
          <img src={Introi} ClassName="card-img-top" alt="..." />
          <div ClassName="card-body">
            <h5 ClassName="card-title">Card title</h5>
            <p ClassName="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="#" ClassName="btn btn-primary">
              <button className="btn">Go somewhere</button>{" "}
            </NavLink>
          </div>
        </div>


        <div ClassName="card" style={{ width: "18rem" }}>
          <img src={Introi} ClassName="card-img-top" alt="..." />
          <div ClassName="card-body">
            <h5 ClassName="card-title">Card title</h5>
            <p ClassName="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="#" ClassName="btn btn-primary">
              <button className="btn">Go somewhere</button>{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
