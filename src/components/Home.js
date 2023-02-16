import React, { Fragment } from 'react'
import "../css/Home.css"
const Home = () => {
    return (
        <>
            <Fragment>
                <section className='home'>
                    <div className="container">
                        <h1>we care about your health <br /> more than you do</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem nobis cupiditate quibusdam modi tempore corrupti.</p>
                        <div className="search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                            <input className='d-search' type="text" name="dis"  placeholder='Give Your Diseases' />
                        </div>
                    </div>
                </section>
            </Fragment>
        </>
    )
}

export default Home