import React, {useState} from 'react'
import arrTestimonials from './arrTestimonials'

export const Testimonials = () => {

    const [testimonials,setTestimonials] = useState(arrTestimonials);
    const [newTestimonials,setNewTestimonials] = useState({
        name:'',
        text:'',
    })

    const handleNameChange = (e) => {
        setNewTestimonials((value) => ({
            ...value,
            name:e.target.value
        }))
    }

    const handleTextChange = (e) => {
        setNewTestimonials((value) => ({
            ...value,
            text:e.target.value
        }))
    }

    const onSend = (e) => {
        e.preventDefault();
        setNewTestimonials({
            name:'',
            text:'',
        })
        setTestimonials((value) => {
            return [...value,newTestimonials]
        })
    }

    return(
        <>
            <h1>...COMMENTS...</h1> 
            {
                testimonials.map((item,i) => (
                    <div className='comments-block'
                        key={i}
                    >
                        <div>{item.name}</div>
                        <div>{item.text}</div>
                    </div>
                ))
            }

            <form className='comment-form'
                onSubmit={onSend}
            >
                <div>
                    <input 
                        placeholder='Your name'
                        type='text'
                        value={newTestimonials.name}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <textarea
                        placeholder='Your message'
                        value={newTestimonials.text}
                        onChange={handleTextChange}
                    >                        
                    </textarea>
                </div>
                <button className='comment-btn'>Leave a comment</button>
            </form>
        </>
    )
}