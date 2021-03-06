import React ,{useState} from 'react';
import styled from 'styled-components';
import {About} from '../styles';
import Toggle from './Toggle';


const FaqSection =() => {
    const [faqToggle, setFaqToggle] = useState(false);
    return (
        <Faq>
            <h2> Any questions<span> FAQ</span></h2>
            <Toggle title='How Do I Start'>
            <div onClick={()=> setFaqToggle(!faqToggle)}className="question">
            <div className ="answer">
            <p>Lorem ipsum, dolor sit amet consectetur aut suscipit dignissimos omnis totam deleniti, impedit illum eos of</p>
            <p>Lorem ipsum, dolor sit amet consectetur aut suscipit dignissimos omnis totam </p>
        </div>
        <div className='faq-line'></div>
        </div>
        </Toggle>
        <Toggle title='Daily Schedule'>
        <div className="question">
             <div className ="answer">
            <p>Lorem ipsum, dolor sit amet consectetur aut suscipit dignissimos omnis totam deleniti, impedit illum eos of</p>
            <p>Lorem ipsum, dolor sit amet consectetur aut suscipit dignissimos omnis totam </p>
        </div>
        <div className='faq-line'>
        </div>
        </div>
        </Toggle> 
        <Toggle title="Different Payment Methods">
        <div className="question">
            <div className ="answer">
            <p>Lorem ipsum, dolor sit amejkjlksft consectetur aut suscipit dignissimos omnis totam deleniti, impedit illum eos of</p>
            <p>Lorem ipsum, dolor sit amtesxtet consectetur aut suscipit dignissimos omnis totam </p>
        </div>
        <div className='faq-line'>
        </div>
        </div>   
        </Toggle>
        <Toggle title='What product do you offre'>
        <div className="question">
            <div className ="answer">
            <p>Lorem ipsum, yall yallla test dolor sit amet consectetur aut suscipit dignissimos omnis totam deleniti, impedit illum eos of</p>
            <p>Lorem ipsum, dolor sit lkjlkjlk ddld lkf amet consectetur aut suscipit dignissimos omnis totam </p>
        </div>
        <div className='faq-line'></div>
        </div>
        </Toggle>
        </Faq>

    );
};
const Faq = styled(About)`
display: block;
span{
    display:block;
}
h2{
    padding-bottom: 2rem;
    font-weight:lighter;
}
.faq-line{
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
}
.question{
    padding: 3rem 0rem;
    cursor : pointer;
}
.answer{
    padding:2rem 0rem;
    p{
        padding: 1rem 0rem;
    }
}
`;
export default FaqSection ;