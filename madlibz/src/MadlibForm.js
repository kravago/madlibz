import { useState, useEffect } from 'react';
import './MadlibForm.css'

function MadlibForm() {
    const initState = {
        noun: '',
        noun2: '',
        adjective: '',
        color: ''
    }

    const [formData, setFormData] = useState(initState);
    const [formSubmit, setFormSubmit] = useState(false);

    const createStory = ({ noun, noun2, adjective, color}) => {
        return `There was a ${color} ${noun} who loved a ${adjective} ${noun2}`
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmit(true);
    }

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData(() => ({...formData, [name]: value}))
    }

    const formHtml = (
            <form onSubmit={handleSubmit}>
                <label htmlFor="noun">noun</label>
                <input
                    id="noun"
                    name="noun"
                    value={formData.noun}
                    onChange={handleChange}
                />
                
                <label htmlFor="noun2">noun2</label>
                <input
                    id="noun2"
                    name="noun2"
                    value={formData.noun2}
                    onChange={handleChange}
                />

                <label htmlFor="adjective">adjective</label>
                <input
                    id="adjective"
                    name="adjective"
                    value={formData.adjective}
                    onChange={handleChange}
                />

                <label htmlFor="color">color</label>
                <input
                    id="color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                />
            <button>Submit</button>
            </form>
    )

    const storyHtml = (<h1>{createStory(formData)}</h1>);

    return (
        <>
            <h1>MADLBS</h1>
            {formSubmit === true ? storyHtml: formHtml}
        </>
    )
}

export default MadlibForm;