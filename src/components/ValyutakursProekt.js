import React from 'react';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import KonvertatsiyaPage from "./qsmlar/KonvertatsiyaPage";
import ValyutaKurslariHaqida from "./qsmlar/ValyutaKurslariHaqida";
import Valuta from "./qsmlar/Valuta";

function ValyutakursProekt(props) {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <div className="Homeqsm">
                        <div className="leftese">
                            <ul className="">
                                <li className="">
                                    <NavLink activeClassName="text-style" to="/kovertatsiya"
                                             className="nav-link">
                                       Valyutani konvertatsiya qilish
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink activeClassName="text-style" to="/valyutahaqida"
                                             className="nav-link">
                                        Joriy valyuta kurslari haqida malumot
                                    </NavLink>
                                </li>

                            </ul>
                        </div>

                        <div className="rightse">
                            <Switch>
                                <Route exact path="/kovertatsiya" component={Valuta}/>
                                <Route  path="/valyutahaqida" component={ValyutaKurslariHaqida}/>
                            </Switch>
                        </div>

                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default ValyutakursProekt;