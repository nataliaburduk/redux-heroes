import { addHero, handleNewHeroForm } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import {useHttp} from '../../hooks/http.hook';

import { v4 as uuidv4 } from 'uuid';

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {

    const { newHeroForm } = useSelector(state => state)
    const dispatch = useDispatch();
    const {request} = useHttp();

    const onAddHero = useCallback(() => {
        const requestBody = {id: uuidv4(), ...newHeroForm};
        request('http://localhost:3001/heroes', 'POST', JSON.stringify(requestBody))
            .then(data => dispatch(addHero(requestBody)))
            .catch(data => console.log(data))
    }, [request, newHeroForm])

    const handleNameChange = (e) => {
        dispatch(handleNewHeroForm({ name: e.target.value}))
    }

    const handleDescriptionChange = (e) => {
        dispatch(handleNewHeroForm({ description: e.target.value}))
    }

    const handleElementChange = (e) => {
        dispatch(handleNewHeroForm({ element: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddHero();
    }

    return (
        <form 
            onSubmit={handleSubmit} 
            className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    onChange={handleNameChange}
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
                    value={newHeroForm.name}/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    onChange={handleDescriptionChange}
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                    value={newHeroForm.description}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    onChange={handleElementChange}
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    value={newHeroForm.element}>
                    <option >Я владею элементом...</option>
                    <option value="fire">Огонь</option>
                    <option value="water">Вода</option>
                    <option value="wind">Ветер</option>
                    <option value="earth">Земля</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;