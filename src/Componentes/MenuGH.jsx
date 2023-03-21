import { NavLink } from 'react-router-dom';

const classNameByActivity = ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""

export const MenuGH = () => {
  return (
    <>
        <div className="div-nav-item">
            <ul className="ul-container">
              <NavLink
                to="/Home"
                className={classNameByActivity}
                >
                  Home
              </NavLink>
              <NavLink
                to="/PC"
                className={classNameByActivity}
                >
                  PC
              </NavLink>
              <NavLink
                to="/Console"
                className={classNameByActivity}
                >
                  Console
              </NavLink>
              <NavLink
                to="/Mobile"
                className={classNameByActivity}
                >
                  Mobile
              </NavLink>
            </ul>
        </div>
    </>
  )
}
