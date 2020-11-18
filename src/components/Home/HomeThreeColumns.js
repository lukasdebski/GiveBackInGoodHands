import React from 'react';

const HomeThreeColumns = () => {
    return (
        <>
        <section className="columns">
            <article className="column">
                <span className="column__number">10</span>
                <span className="column__title">oddanych worków</span>
                <p className="column__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae blanditiis commodi consequatur explicabo fugit ipsam nulla.</p>
            </article>
            <article className="column">
                <span className="column__number">5</span>
                <span className="column__title">wpsartych organizacji</span>
                <p className="column__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae blanditiis commodi consequatur explicabo fugit ipsam nulla.</p>
            </article>
            <article className="column">
                <span className="column__number">7</span>
                <span className="column__title">zorganizowanych zbiórek</span>
                <p className="column__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae blanditiis commodi consequatur explicabo fugit ipsam nulla.</p>
            </article>
        </section>
        </>
    )
}

export default HomeThreeColumns;