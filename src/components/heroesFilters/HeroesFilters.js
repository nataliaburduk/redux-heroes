import { useDispatch, useSelector } from 'react-redux';
import { filtersFetching, filtersFetched, filtersFetchingError, filterHeroes, activeFilterChanged } from '../../actions';
import { useHttp } from '../../hooks/http.hook';
import { useEffect} from 'react';

import Spinner from '../spinner/Spinner';

// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const FILTER_CLASS_MAPPING = {
    'all': 'btn-outline-dark',
    'fire': 'btn-outline-danger',
    'water': 'btn-outline-primary',
    'wind': 'btn-outline-success',
    'earth': 'btn-outline-secondary'
}

const FILTER_LABEL_MAPPING = {
    'all': 'Все',
    'fire': 'Огонь',
    'water': 'Вода',
    'wind': 'Ветер',
    'earth': 'Земля'
}

const HeroesFilters = () => {
    const {filters, activeFilter, filtersLoadingStatus} = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(filtersFetching());
        request("http://localhost:3001/filters")
            .then(data => dispatch(filtersFetched(data)))
            .catch(() => dispatch(filtersFetchingError()))

        // eslint-disable-next-line
    }, []);

    if (filtersLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (filtersLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }


    const buttons = filters.map((name) => {
        const active = activeFilter === name;
        let clazz = FILTER_CLASS_MAPPING[name]
        if(active) clazz += ' active';
        const label = FILTER_LABEL_MAPPING[name];
        return (
          <button
            onClick={() => dispatch(activeFilterChanged(name))}
              className={`btn ${clazz}`}
              key={name}>
                {label}
          </button>
        )
      })

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {buttons}                    
                </div>
            </div>
        </div>
    )
}


export default HeroesFilters;