import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Widgets = () => {

    const newsArticle = (heading, subTitle) => (
        <div className='widgets__article'>
            <div className='widgets__article__left'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets__article__right'>
                <h4>{heading}</h4>
                <p>{subTitle}</p>
            </div>
        </div>
    )
    return (
        <div className='app__widgets'>
            <div className='widgets__header'>
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle('GP is back', 'Top News - 9099 readers')}
            {newsArticle('KP is back', 'Top News - 9999 readers')}
            {newsArticle('Tesla is back', 'Top News - 99 readers')}
            {newsArticle('Corona Virus', 'Top News - 9 readers')}
        </div>
    )
}

export default Widgets