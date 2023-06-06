import { useState } from 'react'
import { AddCategory, GifGrid } from './components'
 

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        setCategories(cat => [newCategory, ...cat])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={onAddCategory} />
            <button onClick={onAddCategory}>Agregar</button>
            {categories.map(category => (<GifGrid key={category} category={category} />))}
        </>
    )
}

export default GifExpertApp