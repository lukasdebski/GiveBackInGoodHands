import React, {useState, useEffect} from 'react';
import Decoration from '../../assets/Decoration.svg';
import Organization from "./Organization";
import Pagination from './Pagination';
import data from '../../DateBase/Data.js';

const HomeWhoWeHelp = () => {

    const organizations  = data.organizations.description;
    const collections = data.collections.description;
    const fundations = data.fundations.description;

    const [currentPage, setCurrentPage] = useState(1)
    const [active, setActive] = useState(null)
    const [showData, setShowData] = useState(fundations)
    const [postsPerPage] = useState(3)

    //pagination logic

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = showData.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        setActive(pageNumber);
    }

    //data
    const getData = number => {
        setCurrentPage(1)

        if (number === 2) {
            return setShowData(organizations);
        } else if (number === 3) {
            return setShowData(collections);
        } else if (number === 1) {
            return setShowData(fundations);
        }
    }

    return (
        <>
            <section className="help" id='fundation'>
                <h1 className='help__title'>Komu Pomagamy?</h1>
                <img className='help__decoration' src={Decoration} alt="decoration"/>
                <div className="help__buttons">
                    <button onClick={e=>getData(1, e)} className={"btn" + (showData === fundations ? "active" : "")}>Fundacjom</button>
                    <button onClick={e=>getData(2, e)} className={"btn" + (showData === organizations ? "active" : "")}>Organizacjom porządkowym</button>
                    <button onClick={e=>getData(3, e)} className={"btn" + (showData === collections ? "active" : "")}>Lokalnym zbiórkom</button>
                </div>
                <p className="description">{data.fundations.info}</p>
                {currentPosts.map(element=> (
                    <Organization key={element.name} data={element}/>
                ))}
                {showData.length > 3 && (
                    <Pagination postsPerPage={postsPerPage} totalPosts={showData.length} paginate={paginate} active={active} currentPage={currentPage}/>
                )}
            </section>
        </>
    )
}

export default HomeWhoWeHelp;