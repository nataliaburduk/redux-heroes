import { useDispatch, useSelector } from 'react-redux';
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {
    const {filters, heroes} = useSelector(state => state);
    const dispatch = useDispatch();
    // const elements = ["all", "fire","water", "wind", "earth"]

    // const buttons = elements.map((elem) => {
    //     const active = filters === elem;
    //     const clazz = active ? 'active' : ''
    //     return (
    //     //   <button onClick={() => dispatch(onFilterSelect(elem))}
    //     //       className={`btn ${clazz} filter-button`}
    //     //       type='button'
    //     //       key={elem}>
    //     //         {elem}
    //     //   </button>
    //     )
    //   })

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {/* {buttons} */}
                    <button className="btn btn-outline-dark active">Все</button>
                    <button className="btn btn-danger">Огонь</button>
                    <button className="btn btn-primary">Вода</button>
                    <button className="btn btn-success">Ветер</button>
                    <button className="btn btn-secondary">Земля</button>
                </div>
            </div>
        </div>
    )
}


export default HeroesFilters;