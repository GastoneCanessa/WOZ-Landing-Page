import React from "react";

export const Partner = (props) => {
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        {" "}
                        <img src="img/woz/wing_race.jpg" className="img-responsive" alt="" />{" "}
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="about-text">
                            <h2>Tesseramento 30€</h2>
                            <p>
                                L’accesso al Way Out Zone Club è riservato esclusivamente ai tesserati.
                                Il tesseramento può essere effettuato direttamente in loco in pochi minuti presso il circolo.
                                Per i tesserati è disponibile una gambusa autogestita e l’utilizzo di lettini e ombrelloni.
                                Inoltre, sono a disposizione bagni, docce e l’Onda di Legno per praticare il surfskate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
