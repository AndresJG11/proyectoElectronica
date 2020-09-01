import {useState} from 'react'

export const useBusqueda = ( initstate = {} ) => {
    const [search, setSearch] = useState(initstate);

    const handleInputChange = ({target}) => {
        setSearch({
            ...search,
            [target.name]: target.value
        });
    }

    return[ search, handleInputChange];
}
